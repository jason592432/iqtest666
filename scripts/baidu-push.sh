#!/bin/bash
# 百度主动推送（普通收录 API）—— 只用系统自带的 bash / curl，无需 Node
#
# 用法：
#   ./scripts/baidu-push.sh            # 推送还没推过的 URL，每次最多 10 条（每日配额）
#   ./scripts/baidu-push.sh --dry-run  # 只打印将要推送的 URL
#   ./scripts/baidu-push.sh --all      # 忽略已推送记录，重新推一遍（慎用，会重复占配额）
#
# token 存在 scripts/.baidu-token（已 gitignore），不要提交到仓库。
# 已推送记录存在 scripts/.baidu-pushed.txt，用来避免重复占用配额。
#
# 装成每日任务见 scripts/README.md。

set -uo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
TOKEN_FILE="$HERE/.baidu-token"
PUSHED_FILE="$HERE/.baidu-pushed.txt"
LOG_FILE="$HERE/.baidu-push.log"
SITE="https://iq-test.com.cn"
MAX="${BAIDU_MAX:-10}"

DRY=0
FORCE=0
for a in "$@"; do
  [ "$a" = "--dry-run" ] && DRY=1
  [ "$a" = "--all" ] && FORCE=1
done

log() {
  local line
  line="[$(date '+%F %T')] $*"
  echo "$line"
  echo "$line" >> "$LOG_FILE" 2>/dev/null
}

TOKEN="$(cat "$TOKEN_FILE" 2>/dev/null | tr -d '[:space:]')"
if [ -z "$TOKEN" ]; then
  log "缺少 token：请把推送 token 写入 $TOKEN_FILE"
  exit 1
fi

TMP="$(mktemp)"
trap 'rm -f "$TMP"' EXIT

# 1. 取 sitemap（sitemap 里顺序已经是：首页 → 4 个测试页 → /blog/ → 文章 → 隐私页）
if ! curl -s --max-time 30 "$SITE/sitemap.xml" -o "$TMP"; then
  log "拉取 sitemap 失败"
  exit 1
fi

grep -o '<loc>[^<]*</loc>' "$TMP" | sed 's/<loc>//; s/<\/loc>//' > "$TMP.urls"
TOTAL=$(wc -l < "$TMP.urls" | tr -d ' ')
if [ "$TOTAL" -eq 0 ]; then
  log "sitemap 里没有 URL"
  exit 1
fi

# 2. 过滤已推送
touch "$PUSHED_FILE"
if [ "$FORCE" -eq 1 ]; then
  cp "$TMP.urls" "$TMP.todo"
else
  grep -vxF -f "$PUSHED_FILE" "$TMP.urls" > "$TMP.todo" 2>/dev/null || cp "$TMP.urls" "$TMP.todo"
fi

# /privacy 优先级最低，放最后
grep -v '/privacy$' "$TMP.todo" > "$TMP.todo2" 2>/dev/null || true
grep '/privacy$' "$TMP.todo" >> "$TMP.todo2" 2>/dev/null || true
mv "$TMP.todo2" "$TMP.todo"

PENDING=$(grep -c . "$TMP.todo" 2>/dev/null); PENDING=${PENDING:-0}
log "sitemap $TOTAL 条，待推送 $PENDING 条（单次上限 ${MAX}）"

if [ "$PENDING" -eq 0 ]; then
  log "没有需要推送的 URL，结束"
  exit 0
fi

head -n "$MAX" "$TMP.todo" > "$TMP.batch"
BATCH=$(grep -c . "$TMP.batch"); BATCH=${BATCH:-0}

if [ "$DRY" -eq 1 ]; then
  log "dry-run，将推送："
  cat "$TMP.batch"
  exit 0
fi

# 3. 推送（优先 https；本机若被中间人代理破坏证书链，回退 http）
API_HTTPS="https://data.zz.baidu.com/urls?site=${SITE}&token=${TOKEN}"
API_HTTP="http://data.zz.baidu.com/urls?site=${SITE}&token=${TOKEN}"

RESP="$(curl -s --max-time 30 -X POST -H 'Content-Type:text/plain' --data-binary @"$TMP.batch" "$API_HTTPS")"
if [ -z "$RESP" ]; then
  log "https 推送失败（本机证书链异常），改用 http 重试"
  RESP="$(curl -s --max-time 30 -X POST -H 'Content-Type:text/plain' --data-binary @"$TMP.batch" "$API_HTTP")"
fi

log "接口返回：$RESP"

SUCCESS=$(echo "$RESP" | grep -o '"success":[0-9]*' | head -1 | cut -d: -f2)
REMAIN=$(echo "$RESP" | grep -o '"remain":[0-9]*' | head -1 | cut -d: -f2)

if [ -z "${SUCCESS:-}" ] || [ "$SUCCESS" = "0" ]; then
  log "本次没有成功推送（配额用尽 / token 失效 / 参数错误），下次再跑"
  exit 0
fi

# 4. 记账（接口只给总数，按批次顺序记前 N 条）
head -n "$SUCCESS" "$TMP.batch" >> "$PUSHED_FILE"
log "成功 $SUCCESS/$BATCH 条，剩余配额 ${REMAIN:-未知}，累计已推 $(grep -c . "$PUSHED_FILE") 条"
