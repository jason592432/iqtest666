# 脚本说明

## baidu-push.sh —— 百度主动推送

把 sitemap 里的 URL 通过「普通收录」API 推给百度，每天受配额限制（你这个站是 **10 条/天**）。

```bash
bash scripts/baidu-push.sh --dry-run   # 只看会推什么
bash scripts/baidu-push.sh             # 推 10 条
bash scripts/baidu-push.sh --all       # 忽略记录重推（会重复占配额，慎用）
```

- token 存在 `scripts/.baidu-token`（已 gitignore）
- 已推送记录存在 `scripts/.baidu-pushed.txt`
- 运行日志 `scripts/.baidu-push.log`

> 后台地址（百度搜索资源平台）改 token 后，改 `scripts/.baidu-token` 即可。

## 每日自动任务（launchd）

因为 macOS 不允许后台任务读取 `~/Desktop`，**实际执行的是 `~/.iqtest/baidu-push.sh` 的副本**：

| 位置 | 作用 |
|---|---|
| `~/Library/LaunchAgents/com.iqtest.baidupush.plist` | 每天 09:30 触发 |
| `~/.iqtest/baidu-push.sh` | 实际运行的脚本副本 |
| `~/.iqtest/.baidu-token` | token |
| `~/.iqtest/.baidu-pushed.txt` | 已推送记录 |
| `~/.iqtest/.baidu-push.log` | 日志 |

改完仓库里的 `scripts/baidu-push.sh` 后，同步到运行位置：

```bash
cp scripts/baidu-push.sh ~/.iqtest/baidu-push.sh
```

查看状态 / 立即跑一次 / 卸载：

```bash
launchctl list | grep baidupush
launchctl kickstart -k gui/$(id -u)/com.iqtest.baidupush
launchctl unload -w ~/Library/LaunchAgents/com.iqtest.baidupush.plist
```

全站 38 条 URL 推完之后，脚本会自己安静下来（没有待推送就直接退出），不会重复占配额。
以后发了新文章，把新 URL 加进 sitemap，第二天的任务会自动推上去。

## 备注

- 本机访问 `data.zz.baidu.com:443` 时证书链被代理破坏（`ERR_TLS_CERT_ALTNAME_INVALID`），
  脚本会自动回退到 `http://`。想让 token 走加密通道，可在代理（FlClash）里把
  `data.zz.baidu.com` 设为直连。
- 这个 token 只能提交 `iq-test.com.cn` 的 URL，泄露风险有限；介意可随时在
  百度搜索资源平台重置。
