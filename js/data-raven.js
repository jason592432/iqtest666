// ============================================================
// 联合瑞文推理测验 (CRT) - 72题
// 综合瑞文标准推理(SPM)与彩色推理(CPM)
// A-AB-B-C-D-E 各12题
// ============================================================
const TEST_RAVEN = {
  id: 'raven',
  name: '联合瑞文推理测验 (CRT)',
  nameEn: "Combined Raven's Test (CRT)",
  icon: '\U0001f537',
  color: '#4facfe',
  timeLimit: 40 * 60,
  ringMax: 150,
  hasIndexes: false,

  reminderItems: [
    '本测试共 <strong>72</strong> 道题，参考 <strong>联合瑞文推理测验 (CRT)</strong>',
    '全部为 <strong>非文字图形推理</strong> 题，不受语言和文化背景影响',
    '每道题需要你 <strong>找出矩阵图形的规律</strong> 并选择正确选项',
    '答题时限为 <strong>40 分钟</strong>，页面顶部显示倒计时',
    '题目从简单到复杂递进，六个单元 A-AB-B-C-D-E',
    '如遇到不会的题目可以先跳过，之后可以返回修改',
    '超时系统将 <strong>自动提交</strong> 已答题目',
    '<strong>注意：</strong>测试结果仅供参考，不能作为临床智力评估依据'
  ],

  questions: [
    { id:1, points:1, difficulty:'易',
      question:'A1 ┌───┬───┐
   │ ● │ ● │
   ├───┼───┤
   │ ● │ ? │
   └───┴───┘',
      questionEn:'A1 ┌───┬───┐
   │ ● │ ● │
   ├───┼───┤
   │ ● │ ? │
   └───┴───┘',
      options:['●','○','▲','△','■','□'], correct:0,
      optionsEn:['●','○','▲','△','■','□'],
      explanation:'所有格子都是实心圆，缺少的也是●',
      explanationEn:'All cells are solid circles' },
    { id:2, points:1, difficulty:'易',
      question:'A2 ┌───┬───┐
   │ ▲ │ ▲ │
   ├───┼───┤
   │ ▲ │ ? │
   └───┴───┘',
      questionEn:'A2 ┌───┬───┐
   │ ▲ │ ▲ │
   ├───┼───┤
   │ ▲ │ ? │
   └───┴───┘',
      options:['▲','△','■','□','●','○'], correct:0,
      optionsEn:['▲','△','■','□','●','○'],
      explanation:'所有格子都是实心三角',
      explanationEn:'All cells are solid triangles' },
    { id:3, points:1, difficulty:'易',
      question:'A3 ┌───┬───┐
   │ ◆ │ ◆ │
   ├───┼───┤
   │ ◆ │ ? │
   └───┴───┘',
      questionEn:'A3 ┌───┬───┐
   │ ◆ │ ◆ │
   ├───┼───┤
   │ ◆ │ ? │
   └───┴───┘',
      options:['◆','◇','★','☆','●','○'], correct:0,
      optionsEn:['◆','◇','★','☆','●','○'],
      explanation:'所有格子都是实心菱形',
      explanationEn:'All cells are solid diamonds' },
    { id:4, points:1, difficulty:'易',
      question:'A4 ┌───┬───┐
   │ ◉ │ ◎ │
   ├───┼───┤
   │ ◉ │ ? │
   └───┴───┘',
      questionEn:'A4 ┌───┬───┐
   │ ◉ │ ◎ │
   ├───┼───┤
   │ ◉ │ ? │
   └───┴───┘',
      options:['◉','◎','●','○','▲','△'], correct:1,
      optionsEn:['◉','◎','●','○','▲','△'],
      explanation:'第一列实心，第二列空心',
      explanationEn:'Col1 solid, Col2 hollow' },
    { id:5, points:1, difficulty:'易',
      question:'A5 ┌───┬───┐
   │ ★ │ ☆ │
   ├───┼───┤
   │ ★ │ ? │
   └───┴───┘',
      questionEn:'A5 ┌───┬───┐
   │ ★ │ ☆ │
   ├───┼───┤
   │ ★ │ ? │
   └───┴───┘',
      options:['★','☆','✦','✧','●','○'], correct:1,
      optionsEn:['★','☆','✦','✧','●','○'],
      explanation:'第一列实心星，第二列空心星',
      explanationEn:'Col1 solid stars, Col2 hollow stars' },
    { id:6, points:1, difficulty:'易',
      question:'A6 ┌───┬───┐
   │ ◼ │ ◻ │
   ├───┼───┤
   │ ◼ │ ? │
   └───┴───┘',
      questionEn:'A6 ┌───┬───┐
   │ ◼ │ ◻ │
   ├───┼───┤
   │ ◼ │ ? │
   └───┴───┘',
      options:['◼','◻','▪','▫','●','○'], correct:1,
      optionsEn:['◼','◻','▪','▫','●','○'],
      explanation:'第一列实心方，第二列空心方',
      explanationEn:'Col1 solid squares, Col2 hollow squares' },
    { id:7, points:2, difficulty:'易',
      question:'A7 ┌───┬───┐
   │ ● │ ○ │
   ├───┼───┤
   │ ● │ ? │
   └───┴───┘',
      questionEn:'A7 ┌───┬───┐
   │ ● │ ○ │
   ├───┼───┤
   │ ● │ ? │
   └───┴───┘',
      options:['●','○','◉','◎','▲','△'], correct:1,
      optionsEn:['●','○','◉','◎','▲','△'],
      explanation:'第一列全部●，第二列全部○',
      explanationEn:'Col1 all ●, Col2 all ○' },
    { id:8, points:2, difficulty:'易',
      question:'A8 ┌───┬───┐
   │ ■ │ □ │
   ├───┼───┤
   │ ■ │ ? │
   └───┴───┘',
      questionEn:'A8 ┌───┬───┐
   │ ■ │ □ │
   ├───┼───┤
   │ ■ │ ? │
   └───┴───┘',
      options:['■','□','●','○','▲','△'], correct:1,
      optionsEn:['■','□','●','○','▲','△'],
      explanation:'第一列全部■，第二列全部□',
      explanationEn:'Col1 all ■, Col2 all □' },
    { id:9, points:2, difficulty:'易',
      question:'A9 ┌───┬───┐
   │ ▲ │ △ │
   ├───┼───┤
   │ ▲ │ ? │
   └───┴───┘',
      questionEn:'A9 ┌───┬───┐
   │ ▲ │ △ │
   ├───┼───┤
   │ ▲ │ ? │
   └───┴───┘',
      options:['▲','△','◆','◇','●','○'], correct:1,
      optionsEn:['▲','△','◆','◇','●','○'],
      explanation:'第一列全部▲，第二列全部△',
      explanationEn:'Col1 all ▲, Col2 all △' },
    { id:10, points:2, difficulty:'易',
      question:'A10 ┌───┬───┐
    │ ◆ │ ◇ │
    ├───┼───┤
    │ ◆ │ ? │
    └───┴───┘',
      questionEn:'A10 ┌───┬───┐
    │ ◆ │ ◇ │
    ├───┼───┤
    │ ◆ │ ? │
    └───┴───┘',
      options:['◆','◇','★','☆','●','○'], correct:1,
      optionsEn:['◆','◇','★','☆','●','○'],
      explanation:'第一列全部◆，第二列全部◇',
      explanationEn:'Col1 all ◆, Col2 all ◇' },
    { id:11, points:2, difficulty:'易',
      question:'A11 ┌────┬────┐
    │ ●● │ ○○ │
    ├────┼────┤
    │ ●● │ ?  │
    └────┴────┘',
      questionEn:'A11 ┌────┬────┐
    │ ●● │ ○○ │
    ├────┼────┤
    │ ●● │ ?  │
    └────┴────┘',
      options:['●●','○○','●○','○●','●','○'], correct:1,
      optionsEn:['●●','○○','●○','○●','●','○'],
      explanation:'第一列两个圆，第二列两个白圆',
      explanationEn:'Col1 two black, Col2 two white' },
    { id:12, points:2, difficulty:'易',
      question:'A12 ┌───┬───┐
    │ ↑ │ ↑ │
    ├───┼───┤
    │ ↑ │ ? │
    └───┴───┘',
      questionEn:'A12 ┌───┬───┐
    │ ↑ │ ↑ │
    ├───┼───┤
    │ ↑ │ ? │
    └───┴───┘',
      options:['↑','↓','←','→','↕','↔'], correct:0,
      optionsEn:['↑','↓','←','→','↕','↔'],
      explanation:'所有箭头都朝上',
      explanationEn:'All arrows point up' },
    { id:13, points:2, difficulty:'易',
      question:'Ab1 ┌───┬───┐
    │ ● │ ■ │
    ├───┼───┤
    │ ● │ ? │
    └───┴───┘',
      questionEn:'Ab1 ┌───┬───┐
    │ ● │ ■ │
    ├───┼───┤
    │ ● │ ? │
    └───┴───┘',
      options:['●','■','▲','◆','★','◉'], correct:1,
      optionsEn:['●','■','▲','◆','★','◉'],
      explanation:'每行第一个重复，第二列一致',
      explanationEn:'Each row repeats first, Col2 consistent' },
    { id:14, points:2, difficulty:'易',
      question:'Ab2 ┌───┬───┐
    │ ▲ │ ◆ │
    ├───┼───┤
    │ ▲ │ ? │
    └───┴───┘',
      questionEn:'Ab2 ┌───┬───┐
    │ ▲ │ ◆ │
    ├───┼───┤
    │ ▲ │ ? │
    └───┴───┘',
      options:['▲','◆','●','■','★','◉'], correct:1,
      optionsEn:['▲','◆','●','■','★','◉'],
      explanation:'第一列▲，第二列&square;同行相同',
      explanationEn:'Col1 ▲, Col2 same shape' },
    { id:15, points:2, difficulty:'中',
      question:'Ab3 ┌───┬───┐
    │ ●▲ │ ○△ │
    ├───┼───┤
    │ ●▲ │ ?  │
    └───┴───┘',
      questionEn:'Ab3 ┌───┬───┐
    │ ●▲ │ ○△ │
    ├───┼───┤
    │ ●▲ │ ?  │
    └───┴───┘',
      options:['●▲','○△','●△','○▲','◉◠','◎◡'], correct:1,
      optionsEn:['●▲','○△','●△','○▲','◉◠','◎◡'],
      explanation:'每行两个元素保持一致',
      explanationEn:'Each row: two elements consistent' },
    { id:16, points:2, difficulty:'中',
      question:'Ab4 ┌───┬───┐
    │ ◉ │ ◎ │
    ├───┼───┤
    │ ◎ │ ? │
    └───┴───┘',
      questionEn:'Ab4 ┌───┬───┐
    │ ◉ │ ◎ │
    ├───┼───┤
    │ ◎ │ ? │
    └───┴───┘',
      options:['◉','◎','●','○','◆','◇'], correct:0,
      optionsEn:['◉','◎','●','○','◆','◇'],
      explanation:'主对角线：左上◉→右下相同◉',
      explanationEn:'Main diagonal: top-left ◉→bottom-right ◉' },
    { id:17, points:2, difficulty:'中',
      question:'Ab5 ┌───┬───┐
    │ ◆ │ ◇ │
    ├───┼───┤
    │ ◇ │ ? │
    └───┴───┘',
      questionEn:'Ab5 ┌───┬───┐
    │ ◆ │ ◇ │
    ├───┼───┤
    │ ◇ │ ? │
    └───┴───┘',
      options:['◆','◇','●','○','★','☆'], correct:0,
      optionsEn:['◆','◇','●','○','★','☆'],
      explanation:'副对角线对称，?=◆',
      explanationEn:'Anti-diagonal symmetry, ?=◆' },
    { id:18, points:2, difficulty:'中',
      question:'Ab6 ┌───┬───┐
    │ ◆ │ ◆ │
    ├───┼───┤
    │ ◆ │ ? │
    └───┴───┘',
      questionEn:'Ab6 ┌───┬───┐
    │ ◆ │ ◆ │
    ├───┼───┤
    │ ◆ │ ? │
    └───┴───┘',
      options:['◆','◇','⬟','⬠','●','○'], correct:0,
      optionsEn:['◆','◇','⬟','⬠','●','○'],
      explanation:'所有格子相同',
      explanationEn:'All cells identical' },
    { id:19, points:3, difficulty:'中',
      question:'Ab7 ┌───┬───┐
    │ ◎ │ ◎ │
    ├───┼───┤
    │ ◎ │ ? │
    └───┴───┘',
      questionEn:'Ab7 ┌───┬───┐
    │ ◎ │ ◎ │
    ├───┼───┤
    │ ◎ │ ? │
    └───┴───┘',
      options:['◉','◎','●','○','◆','◇'], correct:1,
      optionsEn:['◉','◎','●','○','◆','◇'],
      explanation:'全部相同为◎',
      explanationEn:'All identical = ◎' },
    { id:20, points:3, difficulty:'中',
      question:'Ab8 ┌───┬───┐
    │ ◉ │ ◉ │
    ├───┼───┤
    │ ◉ │ ? │
    └───┴───┘',
      questionEn:'Ab8 ┌───┬───┐
    │ ◉ │ ◉ │
    ├───┼───┤
    │ ◉ │ ? │
    └───┴───┘',
      options:['◉','◎','●','○','◆','◇'], correct:0,
      optionsEn:['◉','◎','●','○','◆','◇'],
      explanation:'全部相同为◉',
      explanationEn:'All identical = ◉' },
    { id:21, points:3, difficulty:'中',
      question:'Ab9 ┌───┬───┐
    │ ⬟ │ ⬠ │
    ├───┼───┤
    │ ⬟ │ ? │
    └───┴───┘',
      questionEn:'Ab9 ┌───┬───┐
    │ ⬟ │ ⬠ │
    ├───┼───┤
    │ ⬟ │ ? │
    └───┴───┘',
      options:['⬟','⬠','◆','◇','★','☆'], correct:1,
      optionsEn:['⬟','⬠','◆','◇','★','☆'],
      explanation:'第一列实心，第二列空心',
      explanationEn:'Col1 solid, Col2 hollow' },
    { id:22, points:3, difficulty:'中',
      question:'Ab10 ┌───┬───┐
     │ ● │ ● │
     ├───┼───┤
     │ ● │ ? │
     └───┴───┘',
      questionEn:'Ab10 ┌───┬───┐
     │ ● │ ● │
     ├───┼───┤
     │ ● │ ? │
     └───┴───┘',
      options:['●','○','■','□','▲','△'], correct:0,
      optionsEn:['●','○','■','□','▲','△'],
      explanation:'全部相同为●',
      explanationEn:'All identical = ●' },
    { id:23, points:3, difficulty:'中',
      question:'Ab11 ┌───┬───┐
     │ ☆ │ ☆ │
     ├───┼───┤
     │ ☆ │ ? │
     └───┴───┘',
      questionEn:'Ab11 ┌───┬───┐
     │ ☆ │ ☆ │
     ├───┼───┤
     │ ☆ │ ? │
     └───┴───┘',
      options:['★','☆','✦','✧','●','○'], correct:1,
      optionsEn:['★','☆','✦','✧','●','○'],
      explanation:'全部相同为☆',
      explanationEn:'All identical = ☆' },
    { id:24, points:3, difficulty:'中',
      question:'Ab12 ┌───┬───┐
     │ ■ │ ■ │
     ├───┼───┤
     │ ■ │ ? │
     └───┴───┘',
      questionEn:'Ab12 ┌───┬───┐
     │ ■ │ ■ │
     ├───┼───┤
     │ ■ │ ? │
     └───┴───┘',
      options:['■','□','●','○','▲','△'], correct:0,
      optionsEn:['■','□','●','○','▲','△'],
      explanation:'全部相同为■',
      explanationEn:'All identical = ■' },
    { id:25, points:3, difficulty:'中',
      question:'B1 ┌───┬───┬───┐
   │ ● │ ● │ ● │
   ├───┼───┼───┤
   │ ● │ ● │ ● │
   ├───┼───┼───┤
   │ ● │ ● │ ? │
   └───┴───┴───┘',
      questionEn:'B1 ┌───┬───┬───┐
   │ ● │ ● │ ● │
   ├───┼───┼───┤
   │ ● │ ● │ ● │
   ├───┼───┼───┤
   │ ● │ ● │ ? │
   └───┴───┴───┘',
      options:['●','○','■','□','▲','△'], correct:0,
      optionsEn:['●','○','■','□','▲','△'],
      explanation:'全●',
      explanationEn:'All ●' },
    { id:26, points:3, difficulty:'中',
      question:'B2 ┌───┬───┬───┐
   │ ◼ │ ◼ │ ◼ │
   ├───┼───┼───┤
   │ ◼ │ ◼ │ ◼ │
   ├───┼───┼───┤
   │ ◼ │ ◼ │ ? │
   └───┴───┴───┘',
      questionEn:'B2 ┌───┬───┬───┐
   │ ◼ │ ◼ │ ◼ │
   ├───┼───┼───┤
   │ ◼ │ ◼ │ ◼ │
   ├───┼───┼───┤
   │ ◼ │ ◼ │ ? │
   └───┴───┴───┘',
      options:['◼','◻','▪','▫','●','○'], correct:0,
      optionsEn:['◼','◻','▪','▫','●','○'],
      explanation:'全◼',
      explanationEn:'All ◼' },
    { id:27, points:4, difficulty:'中',
      question:'B3 ┌───┬───┬───┐
   │ ● │ ○ │ ● │
   ├───┼───┼───┤
   │ ○ │ ● │ ○ │
   ├───┼───┼───┤
   │ ● │ ○ │ ? │
   └───┴───┴───┘',
      questionEn:'B3 ┌───┬───┬───┐
   │ ● │ ○ │ ● │
   ├───┼───┼───┤
   │ ○ │ ● │ ○ │
   ├───┼───┼───┤
   │ ● │ ○ │ ? │
   └───┴───┴───┘',
      options:['●','○','■','□','▲','△'], correct:0,
      optionsEn:['●','○','■','□','▲','△'],
      explanation:'棋盘格交替',
      explanationEn:'Checkerboard alternating' },
    { id:28, points:4, difficulty:'中',
      question:'B4 ┌───┬───┬───┐
   │ ■ │ □ │ ■ │
   ├───┼───┼───┤
   │ □ │ ■ │ □ │
   ├───┼───┼───┤
   │ ■ │ □ │ ? │
   └───┴───┴───┘',
      questionEn:'B4 ┌───┬───┬───┐
   │ ■ │ □ │ ■ │
   ├───┼───┼───┤
   │ □ │ ■ │ □ │
   ├───┼───┼───┤
   │ ■ │ □ │ ? │
   └───┴───┴───┘',
      options:['■','□','●','○','▲','△'], correct:0,
      optionsEn:['■','□','●','○','▲','△'],
      explanation:'棋盘格黑白交替',
      explanationEn:'Checkerboard B/W' },
    { id:29, points:4, difficulty:'中',
      question:'B5 ┌───┬───┬───┐
   │ ▲ │ ▲ │ ▲ │
   ├───┼───┼───┤
   │ △ │ △ │ △ │
   ├───┼───┼───┤
   │ ▲ │ ▲ │ ? │
   └───┴───┴───┘',
      questionEn:'B5 ┌───┬───┬───┐
   │ ▲ │ ▲ │ ▲ │
   ├───┼───┼───┤
   │ △ │ △ │ △ │
   ├───┼───┼───┤
   │ ▲ │ ▲ │ ? │
   └───┴───┴───┘',
      options:['▲','△','◆','◇','●','○'], correct:0,
      optionsEn:['▲','△','◆','◇','●','○'],
      explanation:'行交替：▲→△→▲',
      explanationEn:'Row alt: ▲→△→▲' },
    { id:30, points:4, difficulty:'中',
      question:'B6 ┌───┬───┬───┐
   │ ◆ │ ◆ │ ◆ │
   ├───┼───┼───┤
   │ ◇ │ ◇ │ ◇ │
   ├───┼───┼───┤
   │ ◆ │ ◆ │ ? │
   └───┴───┴───┘',
      questionEn:'B6 ┌───┬───┬───┐
   │ ◆ │ ◆ │ ◆ │
   ├───┼───┼───┤
   │ ◇ │ ◇ │ ◇ │
   ├───┼───┼───┤
   │ ◆ │ ◆ │ ? │
   └───┴───┴───┘',
      options:['◆','◇','★','☆','●','○'], correct:0,
      optionsEn:['◆','◇','★','☆','●','○'],
      explanation:'行交替：◆→◇→◆',
      explanationEn:'Row alt: ◆→◇→◆' },
    { id:31, points:4, difficulty:'中',
      question:'B7 ┌───┬───┬───┐
   │ ● │ ● │ ○ │
   ├───┼───┼───┤
   │ ● │ ● │ ○ │
   ├───┼───┼───┤
   │ ● │ ● │ ? │
   └───┴───┴───┘',
      questionEn:'B7 ┌───┬───┬───┐
   │ ● │ ● │ ○ │
   ├───┼───┼───┤
   │ ● │ ● │ ○ │
   ├───┼───┼───┤
   │ ● │ ● │ ? │
   └───┴───┴───┘',
      options:['●','○','■','□','▲','△'], correct:1,
      optionsEn:['●','○','■','□','▲','△'],
      explanation:'每行前两个●，第三个○',
      explanationEn:'Each row: first two ●, third ○' },
    { id:32, points:4, difficulty:'中',
      question:'B8 ┌───┬───┬───┐
   │ ★ │ ■ │ ★ │
   ├───┼───┼───┤
   │ ■ │ ★ │ ■ │
   ├───┼───┼───┤
   │ ★ │ ■ │ ? │
   └───┴───┴───┘',
      questionEn:'B8 ┌───┬───┬───┐
   │ ★ │ ■ │ ★ │
   ├───┼───┼───┤
   │ ■ │ ★ │ ■ │
   ├───┼───┼───┤
   │ ★ │ ■ │ ? │
   └───┴───┴───┘',
      options:['★','■','●','▲','◆','◉'], correct:0,
      optionsEn:['★','■','●','▲','◆','◉'],
      explanation:'棋盘格★■交替',
      explanationEn:'Checkerboard ★■' },
    { id:33, points:4, difficulty:'中',
      question:'B9 ┌───┬───┬───┐
   │ ◆ │ ◆ │ ◇ │
   ├───┼───┼───┤
   │ ◆ │ ◆ │ ◇ │
   ├───┼───┼───┤
   │ ◆ │ ◆ │ ? │
   └───┴───┴───┘',
      questionEn:'B9 ┌───┬───┬───┐
   │ ◆ │ ◆ │ ◇ │
   ├───┼───┼───┤
   │ ◆ │ ◆ │ ◇ │
   ├───┼───┼───┤
   │ ◆ │ ◆ │ ? │
   └───┴───┴───┘',
      options:['◆','◇','●','○','★','☆'], correct:1,
      optionsEn:['◆','◇','●','○','★','☆'],
      explanation:'前两格◆，第三格◇',
      explanationEn:'First two ◆, third ◇' },
    { id:34, points:4, difficulty:'中',
      question:'B10 ┌───┬───┬───┐
    │ ● │ ○ │ ● │
    ├───┼───┼───┤
    │ ● │ ○ │ ● │
    ├───┼───┼───┤
    │ ● │ ○ │ ? │
    └───┴───┴───┘',
      questionEn:'B10 ┌───┬───┬───┐
    │ ● │ ○ │ ● │
    ├───┼───┼───┤
    │ ● │ ○ │ ● │
    ├───┼───┼───┤
    │ ● │ ○ │ ? │
    └───┴───┴───┘',
      options:['●','○','■','□','▲','△'], correct:0,
      optionsEn:['●','○','■','□','▲','△'],
      explanation:'每行●○●重复',
      explanationEn:'Each row: ●○● repeat' },
    { id:35, points:3, difficulty:'中',
      question:'B11 ┌───┬───┬───┐
     │ ● │ ● │ ● │
     ├───┼───┼───┤
     │ ○ │ ○ │ ○ │
     ├───┼───┼───┤
     │ ● │ ● │ ? │
     └───┴───┴───┘',
      questionEn:'B11 ┌───┬───┬───┐
     │ ● │ ● │ ● │
     ├───┼───┼───┤
     │ ○ │ ○ │ ○ │
     ├───┼───┼───┤
     │ ● │ ● │ ? │
     └───┴───┴───┘',
      options:['●','○','■','□','▲','△'], correct:0,
      optionsEn:['●','○','■','□','▲','△'],
      explanation:'行交替●→○→●',
      explanationEn:'Row alt ●→○→●' },
    { id:36, points:3, difficulty:'中',
      question:'B12 ┌───┬───┬───┐
     │ ◆ │ ◆ │ ◆ │
     ├───┼───┼───┤
     │ ◇ │ ◇ │ ◇ │
     ├───┼───┼───┤
     │ ◆ │ ◆ │ ? │
     └───┴───┴───┘',
      questionEn:'B12 ┌───┬───┬───┐
     │ ◆ │ ◆ │ ◆ │
     ├───┼───┼───┤
     │ ◇ │ ◇ │ ◇ │
     ├───┼───┼───┤
     │ ◆ │ ◆ │ ? │
     └───┴───┴───┘',
      options:['◆','◇','★','☆','●','○'], correct:0,
      optionsEn:['◆','◇','★','☆','●','○'],
      explanation:'行交替◆→◇→◆',
      explanationEn:'Row alt ◆→◇→◆' },
    { id:37, points:4, difficulty:'中',
      question:'C1 ┌───┬───┬───┐
   │ ● │ ●● │ ●●● │
   ├───┼───┼───┤
   │ ● │ ●● │ ●●● │
   ├───┼───┼───┤
   │ ● │ ●● │ ?  │
   └───┴───┴───┘',
      questionEn:'C1 ┌───┬───┬───┐
   │ ● │ ●● │ ●●● │
   ├───┼───┼───┤
   │ ● │ ●● │ ●●● │
   ├───┼───┼───┤
   │ ● │ ●● │ ?  │
   └───┴───┴───┘',
      options:['●','●●','●●●','●●●●','●','●●●'], correct:2,
      optionsEn:['●','●●','●●●','●●●●','●','●●●'],
      explanation:'每行递增：1→2→3个●',
      explanationEn:'Increment: 1→2→3 ● per row' },
    { id:38, points:4, difficulty:'中',
      question:'C2 ┌───┬───┬───┐
   │ ▲ │ ▲▲ │ ▲▲▲ │
   ├───┼───┼───┤
   │ ▲ │ ▲▲ │ ▲▲▲ │
   ├───┼───┼───┤
   │ ▲ │ ▲▲ │ ?  │
   └───┴───┴───┘',
      questionEn:'C2 ┌───┬───┬───┐
   │ ▲ │ ▲▲ │ ▲▲▲ │
   ├───┼───┼───┤
   │ ▲ │ ▲▲ │ ▲▲▲ │
   ├───┼───┼───┤
   │ ▲ │ ▲▲ │ ?  │
   └───┴───┴───┘',
      options:['▲','▲▲','▲▲▲','▲▲▲▲','▲','▼'], correct:2,
      optionsEn:['▲','▲▲','▲▲▲','▲▲▲▲','▲','▼'],
      explanation:'递增：1→2→3个▲',
      explanationEn:'Increment: 1→2→3 ▲' },
    { id:39, points:4, difficulty:'中难',
      question:'C3 ┌───┬───┬───┐
   │ ● │ ■ │ ●■ │
   ├───┼───┼───┤
   │ ●● │ ■■ │ ●●■■ │
   ├───┼───┼───┤
   │ ●●● │ ■■■ │ ?  │
   └───┴───┴───┘',
      questionEn:'C3 ┌───┬───┬───┐
   │ ● │ ■ │ ●■ │
   ├───┼───┼───┤
   │ ●● │ ■■ │ ●●■■ │
   ├───┼───┼───┤
   │ ●●● │ ■■■ │ ?  │
   └───┴───┴───┘',
      options:['●●●■■■','●●●●■■■■','■■■●●●','●●●●●'], correct:0,
      optionsEn:['●●●■■■','●●●●■■■■','■■■●●●','●●●●●'],
      explanation:'合并两列递增',
      explanationEn:'Combine col1+col2 increment' },
    { id:40, points:4, difficulty:'中难',
      question:'C4 ┌───┬───┬───┐
   │ ◆ │ ◇ │ ◆◇ │
   ├───┼───┼───┤
   │ ◆◆ │ ◇◇ │ ◆◆◇◇ │
   ├───┼───┼───┤
   │ ◆◆◆ │ ◇◇◇ │ ?  │
   └───┴───┴───┘',
      questionEn:'C4 ┌───┬───┬───┐
   │ ◆ │ ◇ │ ◆◇ │
   ├───┼───┼───┤
   │ ◆◆ │ ◇◇ │ ◆◆◇◇ │
   ├───┼───┼───┤
   │ ◆◆◆ │ ◇◇◇ │ ?  │
   └───┴───┴───┘',
      options:['◆◆◆◇◇◇','◇◇◇◆◆◆','◆◆◆◆◇◇◇◇','◆◆◆◆◆'], correct:0,
      optionsEn:['◆◆◆◇◇◇','◇◇◇◆◆◆','◆◆◆◆◇◇◇◇','◆◆◆◆◆'],
      explanation:'合并递增列',
      explanationEn:'Combine incrementing cols' },
    { id:41, points:5, difficulty:'中难',
      question:'C5 ┌────┬────┬────┐
   │ ●○ │ ○● │ ●○●○ │
   ├────┼────┼────┤
   │ ●○ │ ○● │ ●○●○ │
   ├────┼────┼────┤
   │ ●○ │ ○● │ ?  │
   └────┴────┴────┘',
      questionEn:'C5 ┌────┬────┬────┐
   │ ●○ │ ○● │ ●○●○ │
   ├────┼────┼────┤
   │ ●○ │ ○● │ ●○●○ │
   ├────┼────┼────┤
   │ ●○ │ ○● │ ?  │
   └────┴────┴────┘',
      options:['●○●○','○●○●','●●○○','○○●●'], correct:0,
      optionsEn:['●○●○','○●○●','●●○○','○○●●'],
      explanation:'第三格=第一格+第二格',
      explanationEn:'Col3 = Col1+Col2' },
    { id:42, points:5, difficulty:'中难',
      question:'C6 ┌───┬───┬───┐
   │ ★ │ ★★ │ ★★★ │
   ├───┼───┼───┤
   │ ☆ │ ☆☆ │ ☆☆☆ │
   ├───┼───┼───┤
   │ ★ │ ★★ │ ?  │
   └───┴───┴───┘',
      questionEn:'C6 ┌───┬───┬───┐
   │ ★ │ ★★ │ ★★★ │
   ├───┼───┼───┤
   │ ☆ │ ☆☆ │ ☆☆☆ │
   ├───┼───┼───┤
   │ ★ │ ★★ │ ?  │
   └───┴───┴───┘',
      options:['★','★★','★★★','★★★★','☆','☆☆'], correct:2,
      optionsEn:['★','★★','★★★','★★★★','☆','☆☆'],
      explanation:'递增数量：1→2→3',
      explanationEn:'Count increment 1→2→3' },
    { id:43, points:5, difficulty:'中难',
      question:'C7 ┌────┬────┬────┐
   │ ●● │ ○○ │ ●●○○ │
   ├────┼────┼────┤
   │ ●● │ ○○ │ ●●○○ │
   ├────┼────┼────┤
   │ ●● │ ○○ │ ?    │
   └────┴────┴────┘',
      questionEn:'C7 ┌────┬────┬────┐
   │ ●● │ ○○ │ ●●○○ │
   ├────┼────┼────┤
   │ ●● │ ○○ │ ●●○○ │
   ├────┼────┼────┤
   │ ●● │ ○○ │ ?    │
   └────┴────┴────┘',
      options:['●●○○','○○●●','●●●○○○','○○○○'], correct:0,
      optionsEn:['●●○○','○○●●','●●●○○○','○○○○'],
      explanation:'第三格=前两格拼接',
      explanationEn:'Col3=Col1+Col2' },
    { id:44, points:5, difficulty:'中难',
      question:'C8 ┌───┬───┬───┐
   │ ● │ ■ │ ●■ │
   ├───┼───┼───┤
   │ ■ │ ● │ ■● │
   ├───┼───┼───┤
   │ ●■ │ ■● │ ?  │
   └───┴───┴───┘',
      questionEn:'C8 ┌───┬───┬───┐
   │ ● │ ■ │ ●■ │
   ├───┼───┼───┤
   │ ■ │ ● │ ■● │
   ├───┼───┼───┤
   │ ●■ │ ■● │ ?  │
   └───┴───┴───┘',
      options:['●■■●','■●■●','●■●■','■■●●'], correct:0,
      optionsEn:['●■■●','■●■●','●■●■','■■●●'],
      explanation:'每格=同行前两格拼接',
      explanationEn:'Each cell = row col1+col2' },
    { id:45, points:5, difficulty:'难',
      question:'C9 ┌────┬────┬────┐
   │ ●■ │ ●○ │ ■○ │
   ├────┼────┼────┤
   │ ■○ │ ●■ │ ■● │
   ├────┼────┼────┤
   │ ●○ │ ●■ │ ?  │
   └────┴────┴────┘',
      questionEn:'C9 ┌────┬────┬────┐
   │ ●■ │ ●○ │ ■○ │
   ├────┼────┼────┤
   │ ■○ │ ●■ │ ■● │
   ├────┼────┼────┤
   │ ●○ │ ●■ │ ?  │
   └────┴────┴────┘',
      options:['■○','●■','■●','●○'], correct:2,
      optionsEn:['■○','●■','■●','●○'],
      explanation:'每种符号组合出现一次。缺■●',
      explanationEn:'Each combo appears once. Missing ■●' },
    { id:46, points:5, difficulty:'难',
      question:'C10 ┌────┬────┬────┐
    │ ○■ │ ■● │ ●○ │
    ├────┼────┼────┤
    │ ●■ │ ○● │ ■○ │
    ├────┼────┼────┤
    │ ■● │ ●○ │ ?  │
    └────┴────┴────┘',
      questionEn:'C10 ┌────┬────┬────┐
    │ ○■ │ ■● │ ●○ │
    ├────┼────┼────┤
    │ ●■ │ ○● │ ■○ │
    ├────┼────┼────┤
    │ ■● │ ●○ │ ?  │
    └────┴────┴────┘',
      options:['●■','■●','○■','○●'], correct:3,
      optionsEn:['●■','■●','○■','○●'],
      explanation:'每种排列出现一次，缺○●',
      explanationEn:'Each permutation once, missing ○●' },
    { id:47, points:5, difficulty:'难',
      question:'C11 ┌────┬────┬────┐
    │ ●■○ │ ●○■ │ ■○● │
    ├────┼────┼────┤
    │ ■●○ │ ○●■ │ ●■○ │
    ├────┼────┼────┤
    │ ○●■ │ ■○● │ ?  │
    └────┴────┴────┘',
      questionEn:'C11 ┌────┬────┬────┐
    │ ●■○ │ ●○■ │ ■○● │
    ├────┼────┼────┤
    │ ■●○ │ ○●■ │ ●■○ │
    ├────┼────┼────┤
    │ ○●■ │ ■○● │ ?  │
    └────┴────┴────┘',
      options:['●○■','○■●','■●○','●■○'], correct:2,
      optionsEn:['●○■','○■●','■●○','●■○'],
      explanation:'所有6种排列分布在9格中，缺■●○',
      explanationEn:'All 6 perms, missing ■●○' },
    { id:48, points:5, difficulty:'难',
      question:'C12 ┌───┬───┬───┐
    │ 12 │ 34 │ 1234 │
    ├───┼───┼───┤
    │ 56 │ 78 │ 5678 │
    ├───┼───┼───┤
    │ 1234 │ 5678 │ ?  │
    └───┴───┴───┘',
      questionEn:'C12 ┌───┬───┬───┐
    │ 12 │ 34 │ 1234 │
    ├───┼───┼───┤
    │ 56 │ 78 │ 5678 │
    ├───┼───┼───┤
    │ 1234 │ 5678 │ ?  │
    └───┴───┴───┘',
      options:['12345678','12345678','87654321','1234'], correct:0,
      optionsEn:['12345678','12345678','87654321','1234'],
      explanation:'合并第一行第三格+第二行第三格',
      explanationEn:'Merge row1col3+row2col3' },
    { id:49, points:6, difficulty:'难',
      question:'D1 ┌───┬───┬───┐
   │ ■ │ □ │ ■ │
   ├───┼───┼───┤
   │ □ │ ■ │ □ │
   ├───┼───┼───┤
   │ ■ │ □ │ ? │
   └───┴───┴───┘',
      questionEn:'D1 ┌───┬───┬───┐
   │ ■ │ □ │ ■ │
   ├───┼───┼───┤
   │ □ │ ■ │ □ │
   ├───┼───┼───┤
   │ ■ │ □ │ ? │
   └───┴───┴───┘',
      options:['■','□','●','○','▲','△'], correct:0,
      optionsEn:['■','□','●','○','▲','△'],
      explanation:'棋盘格，右下=左上',
      explanationEn:'Checkerboard, BR=TL' },
    { id:50, points:6, difficulty:'难',
      question:'D2 ┌───┬───┬───┐
   │ ▲ │ △ │ ▲ │
   ├───┼───┼───┤
   │ △ │ ▲ │ △ │
   ├───┼───┼───┤
   │ ▲ │ △ │ ? │
   └───┴───┴───┘',
      questionEn:'D2 ┌───┬───┬───┐
   │ ▲ │ △ │ ▲ │
   ├───┼───┼───┤
   │ △ │ ▲ │ △ │
   ├───┼───┼───┤
   │ ▲ │ △ │ ? │
   └───┴───┴───┘',
      options:['▲','△','◆','◇','■','□'], correct:0,
      optionsEn:['▲','△','◆','◇','■','□'],
      explanation:'棋盘格',
      explanationEn:'Checkerboard' },
    { id:51, points:6, difficulty:'难',
      question:'D3 ┌───┬───┬───┐
   │ ★ │ ☆ │ ★☆ │
   ├───┼───┼───┤
   │ ◆ │ ◇ │ ◆◇ │
   ├───┼───┼───┤
   │ ★☆ │ ◆◇ │ ?  │
   └───┴───┴───┘',
      questionEn:'D3 ┌───┬───┬───┐
   │ ★ │ ☆ │ ★☆ │
   ├───┼───┼───┤
   │ ◆ │ ◇ │ ◆◇ │
   ├───┼───┼───┤
   │ ★☆ │ ◆◇ │ ?  │
   └───┴───┴───┘',
      options:['★☆◆◇','◆◇★☆','★◆☆◇','☆★◇◆'], correct:0,
      optionsEn:['★☆◆◇','◆◇★☆','★◆☆◇','☆★◇◆'],
      explanation:'右下=前两行第三格拼接',
      explanationEn:'BR = row1col3+row2col3' },
    { id:52, points:6, difficulty:'难',
      question:'D4 ┌────┬────┬────┐
   │ ●○ │ ○● │ ●○○● │
   ├────┼────┼────┤
   │ ■□ │ □■ │ ■□□■ │
   ├────┼────┼────┤
   │ ●○ │ ○● │ ?   │
   └────┴────┴────┘',
      questionEn:'D4 ┌────┬────┬────┐
   │ ●○ │ ○● │ ●○○● │
   ├────┼────┼────┤
   │ ■□ │ □■ │ ■□□■ │
   ├────┼────┼────┤
   │ ●○ │ ○● │ ?   │
   └────┴────┴────┘',
      options:['■□□■','●○○●','□■■□','○●●○'], correct:1,
      optionsEn:['■□□■','●○○●','□■■□','○●●○'],
      explanation:'每行第三格=前两格拼接',
      explanationEn:'Each row col3 = col1+col2' },
    { id:53, points:6, difficulty:'难',
      question:'D5 ┌────┬────┬────┐
   │ ◆◇ │ ◇◆ │ ◆◇◇◆ │
   ├────┼────┼────┤
   │ ▲△ │ △▲ │ ▲△△▲ │
   ├────┼────┼────┤
   │ ◆◇ │ ◇◆ │ ?   │
   └────┴────┴────┘',
      questionEn:'D5 ┌────┬────┬────┐
   │ ◆◇ │ ◇◆ │ ◆◇◇◆ │
   ├────┼────┼────┤
   │ ▲△ │ △▲ │ ▲△△▲ │
   ├────┼────┼────┤
   │ ◆◇ │ ◇◆ │ ?   │
   └────┴────┴────┘',
      options:['▲△△▲','◆◇◇◆','◇◆◆◇','△▲▲△'], correct:1,
      optionsEn:['▲△△▲','◆◇◇◆','◇◆◆◇','△▲▲△'],
      explanation:'每行第三格=前两格拼接',
      explanationEn:'Each row col3 = col1+col2' },
    { id:54, points:6, difficulty:'难',
      question:'D6 ┌────┬────┬────┐
   │ ◉○ │ ○◉ │ ◉○◉○ │
   ├────┼────┼────┤
   │ ●◎ │ ◎● │ ●◎●◎ │
   ├────┼────┼────┤
   │ ◉○ │ ○◉ │ ?    │
   └────┴────┴────┘',
      questionEn:'D6 ┌────┬────┬────┐
   │ ◉○ │ ○◉ │ ◉○◉○ │
   ├────┼────┼────┤
   │ ●◎ │ ◎● │ ●◎●◎ │
   ├────┼────┼────┤
   │ ◉○ │ ○◉ │ ?    │
   └────┴────┴────┘',
      options:['◉○◉○','●◎●◎','○◉◉○','◎●◎●'], correct:0,
      optionsEn:['◉○◉○','●◎●◎','○◉◉○','◎●◎●'],
      explanation:'每行拼接',
      explanationEn:'Row concatenation' },
    { id:55, points:6, difficulty:'难',
      question:'D7 ┌────┬────┬────┐
   │ ★☆ │ ☆★ │ ★☆★☆ │
   ├────┼────┼────┤
   │ ☆★ │ ★☆ │ ☆★☆★ │
   ├────┼────┼────┤
   │ ★☆ │ ☆★ │ ?    │
   └────┴────┴────┘',
      questionEn:'D7 ┌────┬────┬────┐
   │ ★☆ │ ☆★ │ ★☆★☆ │
   ├────┼────┼────┤
   │ ☆★ │ ★☆ │ ☆★☆★ │
   ├────┼────┼────┤
   │ ★☆ │ ☆★ │ ?    │
   └────┴────┴────┘',
      options:['☆★☆★','★☆★☆','★☆☆★','☆★★☆'], correct:1,
      optionsEn:['☆★☆★','★☆★☆','★☆☆★','☆★★☆'],
      explanation:'每行拼接',
      explanationEn:'Row concatenation' },
    { id:56, points:6, difficulty:'难',
      question:'D8 ┌───┬───┬───┐
   │ ● │ ■ │ ●■ │
   ├───┼───┼───┤
   │ ○ │ □ │ ○□ │
   ├───┼───┼───┤
   │ ●■ │ ○□ │ ?  │
   └───┴───┴───┘',
      questionEn:'D8 ┌───┬───┬───┐
   │ ● │ ■ │ ●■ │
   ├───┼───┼───┤
   │ ○ │ □ │ ○□ │
   ├───┼───┼───┤
   │ ●■ │ ○□ │ ?  │
   └───┴───┴───┘',
      options:['●■○□','○□●■','●■□○','●○■□'], correct:0,
      optionsEn:['●■○□','○□●■','●■□○','●○■□'],
      explanation:'右下=左上2x2所有元素组合',
      explanationEn:'BR = all elements in top-left 2x2' },
    { id:57, points:6, difficulty:'难',
      question:'D9 ┌───┬───┬───┐
   │ ▲ │ ◆ │ ▲◆ │
   ├───┼───┼───┤
   │ △ │ ◇ │ △◇ │
   ├───┼───┼───┤
   │ ▲◆ │ △◇ │ ?  │
   └───┴───┴───┘',
      questionEn:'D9 ┌───┬───┬───┐
   │ ▲ │ ◆ │ ▲◆ │
   ├───┼───┼───┤
   │ △ │ ◇ │ △◇ │
   ├───┼───┼───┤
   │ ▲◆ │ △◇ │ ?  │
   └───┴───┴───┘',
      options:['△◇▲◆','◆▲◇△','▲◆△◇','▲△◆◇'], correct:2,
      optionsEn:['△◇▲◆','◆▲◇△','▲◆△◇','▲△◆◇'],
      explanation:'右下=▲◆+△◇',
      explanationEn:'BR = ▲◆+△◇' },
    { id:58, points:6, difficulty:'难',
      question:'D10 ┌────┬────┬────┐
    │ ●◆ │ ○◇ │ ●◆○◇ │
    ├────┼────┼────┤
    │ ■★ │ □☆ │ ■★□☆ │
    ├────┼────┼────┤
    │ ●◆○◇ │ ■★□☆ │ ?  │
    └────┴────┴────┘',
      questionEn:'D10 ┌────┬────┬────┐
    │ ●◆ │ ○◇ │ ●◆○◇ │
    ├────┼────┼────┤
    │ ■★ │ □☆ │ ■★□☆ │
    ├────┼────┼────┤
    │ ●◆○◇ │ ■★□☆ │ ?  │
    └────┴────┴────┘',
      options:['●◆○◇■★□☆','■★□☆●◆○◇','●◆◆○■★★□','●◆○◇'], correct:0,
      optionsEn:['●◆○◇■★□☆','■★□☆●◆○◇','●◆◆○■★★□','●◆○◇'],
      explanation:'合并前两行第三格',
      explanationEn:'Merge row1col3+row2col3' },
    { id:59, points:6, difficulty:'难',
      question:'D11 ┌───┬───┬───┐
    │ AB │ CD │ ABCD │
    ├───┼───┼───┤
    │ EF │ GH │ EFGH │
    ├───┼───┼───┤
    │ ABCD │ EFGH │ ?  │
    └───┴───┴───┘',
      questionEn:'D11 ┌───┬───┬───┐
    │ AB │ CD │ ABCD │
    ├───┼───┼───┤
    │ EF │ GH │ EFGH │
    ├───┼───┼───┤
    │ ABCD │ EFGH │ ?  │
    └───┴───┴───┘',
      options:['ABCDEFGH','ABCD','EFGH','HGFEDCBA'], correct:0,
      optionsEn:['ABCDEFGH','ABCD','EFGH','HGFEDCBA'],
      explanation:'ABCD+EFGH=ABCDEFGH',
      explanationEn:'ABCD+EFGH=ABCDEFGH' },
    { id:60, points:6, difficulty:'难',
      question:'D12 ┌────┬────┬────┐
    │ ●○● │ ○●○ │ ●○●○●○ │
    ├────┼────┼────┤
    │ ■□■ │ □■□ │ ■□■□■□ │
    ├────┼────┼────┤
    │ ●○●○●○ │ ■□■□■□ │ ?  │
    └────┴────┴────┘',
      questionEn:'D12 ┌────┬────┬────┐
    │ ●○● │ ○●○ │ ●○●○●○ │
    ├────┼────┼────┤
    │ ■□■ │ □■□ │ ■□■□■□ │
    ├────┼────┼────┤
    │ ●○●○●○ │ ■□■□■□ │ ?  │
    └────┴────┴────┘',
      options:['●○●○●○■□■□■□','■□■□■□●○●○●○','●○●○●○□■□■□■'], correct:0,
      optionsEn:['●○●○●○■□■□■□','■□■□■□●○●○●○','●○●○●○□■□■□■'],
      explanation:'合并前两行第三格=最复杂的模式',
      explanationEn:'Merge row1col3+row2col3=most complex' },
    { id:61, points:7, difficulty:'极难',
      question:'E1 ┌────┬────┬────┐
   │ ●● │ ○○ │ ●●○○ │
   ├────┼────┼────┤
   │ ●● │ ○○ │ ●●○○ │
   ├────┼────┼────┤
   │ ●● │ ○○ │ ?    │
   └────┴────┴────┘',
      questionEn:'E1 ┌────┬────┬────┐
   │ ●● │ ○○ │ ●●○○ │
   ├────┼────┼────┤
   │ ●● │ ○○ │ ●●○○ │
   ├────┼────┼────┤
   │ ●● │ ○○ │ ?    │
   └────┴────┴────┘',
      options:['●●○○','○○●●','●●●●','○○○○'], correct:0,
      optionsEn:['●●○○','○○●●','●●●●','○○○○'],
      explanation:'行拼接重复3次',
      explanationEn:'Row concat repeated 3x' },
    { id:62, points:7, difficulty:'极难',
      question:'E2 ┌───┬───┬───┐
   │ ● │ ■ │ ●■ │
   ├───┼───┼───┤
   │ ○ │ □ │ ○□ │
   ├───┼───┼───┤
   │ ●■ │ ○□ │ ?  │
   └───┴───┴───┘',
      questionEn:'E2 ┌───┬───┬───┐
   │ ● │ ■ │ ●■ │
   ├───┼───┼───┤
   │ ○ │ □ │ ○□ │
   ├───┼───┼───┤
   │ ●■ │ ○□ │ ?  │
   └───┴───┴───┘',
      options:['●■○□','○□●■','●■□○','●○■□'], correct:0,
      optionsEn:['●■○□','○□●■','●■□○','●○■□'],
      explanation:'左上2x2组合',
      explanationEn:'Top-left 2x2 combination' },
    { id:63, points:7, difficulty:'极难',
      question:'E3 ┌────┬────┬────┐
   │ ●○ │ ■□ │ ●○■□ │
   ├────┼────┼────┤
   │ ●○ │ ■□ │ ●○■□ │
   ├────┼────┼────┤
   │ ●○■□ │ ●○■□ │ ?  │
   └────┴────┴────┘',
      questionEn:'E3 ┌────┬────┬────┐
   │ ●○ │ ■□ │ ●○■□ │
   ├────┼────┼────┤
   │ ●○ │ ■□ │ ●○■□ │
   ├────┼────┼────┤
   │ ●○■□ │ ●○■□ │ ?  │
   └────┴────┴────┘',
      options:['●○■□','●○■□●○■□','●○●○■□■□','■■□□'], correct:0,
      optionsEn:['●○■□','●○■□●○■□','●○●○■□■□','■■□□'],
      explanation:'行重复相同模式，右下=●○■□',
      explanationEn:'All rows same, BR=●○■□' },
    { id:64, points:7, difficulty:'极难',
      question:'E4 ┌────┬────┬────┐
   │ 12 │ 34 │ 1234 │
   ├────┼────┼────┤
   │ 56 │ 78 │ 5678 │
   ├────┼────┼────┤
   │ 1234 │ 5678 │ ?  │
   └────┴────┴────┘',
      questionEn:'E4 ┌────┬────┬────┐
   │ 12 │ 34 │ 1234 │
   ├────┼────┼────┤
   │ 56 │ 78 │ 5678 │
   ├────┼────┼────┤
   │ 1234 │ 5678 │ ?  │
   └────┴────┴────┘',
      options:['12345678','12345678','87654321','1234'], correct:0,
      optionsEn:['12345678','12345678','87654321','1234'],
      explanation:'外积拼接',
      explanationEn:'Matrix concatenation' },
    { id:65, points:7, difficulty:'极难',
      question:'E5 ┌────┬────┬────┐
   │ ●◆ │ ○◇ │ ●◆○◇ │
   ├────┼────┼────┤
   │ ●◆ │ ○◇ │ ●◆○◇ │
   ├────┼────┼────┤
   │ ●◆○◇ │ ●◆○◇ │ ?  │
   └────┴────┴────┘',
      questionEn:'E5 ┌────┬────┬────┐
   │ ●◆ │ ○◇ │ ●◆○◇ │
   ├────┼────┼────┤
   │ ●◆ │ ○◇ │ ●◆○◇ │
   ├────┼────┼────┤
   │ ●◆○◇ │ ●◆○◇ │ ?  │
   └────┴────┴────┘',
      options:['●◆○◇','●◆○◇●◆○◇','●◆◆○','○◇◆●'], correct:0,
      optionsEn:['●◆○◇','●◆○◇●◆○◇','●◆◆○','○◇◆●'],
      explanation:'行重复，右下=●◆○◇',
      explanationEn:'Row repeat, BR=●◆○◇' },
    { id:66, points:7, difficulty:'极难',
      question:'E6 ┌────┬────┬────┐
   │ ■■□ │ □■■ │ ■■□■■□ │
   ├────┼────┼────┤
   │ □■■ │ ■■□ │ □■■■□■ │
   ├────┼────┼────┤
   │ ■■□■■□ │ □■■■□■ │ ?  │
   └────┴────┴────┘',
      questionEn:'E6 ┌────┬────┬────┐
   │ ■■□ │ □■■ │ ■■□■■□ │
   ├────┼────┼────┤
   │ □■■ │ ■■□ │ □■■■□■ │
   ├────┼────┼────┤
   │ ■■□■■□ │ □■■■□■ │ ?  │
   └────┴────┴────┘',
      options:['■■□■■□□■■■□■','■■□■■□□■■■□■','■■■□□□■■■□■'], correct:0,
      optionsEn:['■■□■■□□■■■□■','■■□■■□□■■■□■','■■■□□□■■■□■'],
      explanation:'合并前两行第三格',
      explanationEn:'Merge row1col3+row2col3' },
    { id:67, points:7, difficulty:'极难',
      question:'E7 ┌────┬────┬────┐
   │ ●○● │ ○●○ │ ●○●○●○ │
   ├────┼────┼────┤
   │ ■□■ │ □■□ │ ■□■□■□ │
   ├────┼────┼────┤
   │ ●○●○●○ │ ■□■□■□ │ ?  │
   └────┴────┴────┘',
      questionEn:'E7 ┌────┬────┬────┐
   │ ●○● │ ○●○ │ ●○●○●○ │
   ├────┼────┼────┤
   │ ■□■ │ □■□ │ ■□■□■□ │
   ├────┼────┼────┤
   │ ●○●○●○ │ ■□■□■□ │ ?  │
   └────┴────┴────┘',
      options:['●○●○●○■□■□■□','■□■□■□●○●○●○','●●○●●○■■□■■□'], correct:0,
      optionsEn:['●○●○●○■□■□■□','■□■□■□●○●○●○','●●○●●○■■□■■□'],
      explanation:'最复杂的组合拼接',
      explanationEn:'Most complex concatenation' },
    { id:68, points:7, difficulty:'极难',
      question:'E8 ┌───┬───┬───┐
   │ ● │ ●● │ ●●● │
   ├───┼───┼───┤
   │ ■ │ ■■ │ ■■■ │
   ├───┼───┼───┤
   │ ●●● │ ■■■ │ ?  │
   └───┴───┴───┘',
      questionEn:'E8 ┌───┬───┬───┐
   │ ● │ ●● │ ●●● │
   ├───┼───┼───┤
   │ ■ │ ■■ │ ■■■ │
   ├───┼───┼───┤
   │ ●●● │ ■■■ │ ?  │
   └───┴───┴───┘',
      options:['●●●■■■','■■■●●●','●●●●●●','■■■■■■'], correct:0,
      optionsEn:['●●●■■■','■■■●●●','●●●●●●','■■■■■■'],
      explanation:'右下=两列拼接',
      explanationEn:'BR=col1+col2 concatenation' },
    { id:69, points:8, difficulty:'极难',
      question:'E9 ┌────┬────┬────┐
   │ ●○● │ ○●○ │ ●○●○●○ │
   ├────┼────┼────┤
   │ ●○● │ ○●○ │ ●○●○●○ │
   ├────┼────┼────┤
   │ ●○●○●○ │ ●○●○●○ │ ?  │
   └────┴────┴────┘',
      questionEn:'E9 ┌────┬────┬────┐
   │ ●○● │ ○●○ │ ●○●○●○ │
   ├────┼────┼────┤
   │ ●○● │ ○●○ │ ●○●○●○ │
   ├────┼────┼────┤
   │ ●○●○●○ │ ●○●○●○ │ ?  │
   └────┴────┴────┘',
      options:['●○●○●○','●○●○●○●○●○●○','●○●○●○●○●○'], correct:0,
      optionsEn:['●○●○●○','●○●○●○●○●○●○','●○●○●○●○●○'],
      explanation:'行重复，右下=前两行第三格拼接',
      explanationEn:'Row repeat, BR=row1col3+row2col3' },
    { id:70, points:8, difficulty:'极难',
      question:'E10 ┌────┬────┬────┐
    │ 一二 │ 三四 │ 一二三四 │
    ├────┼────┼────┤
    │ 五六 │ 七八 │ 五六七八 │
    ├────┼────┼────┤
    │ 一二三四 │ 五六七八 │ ?  │
    └────┴────┴────┘',
      questionEn:'E10 ┌────┬────┬────┐
    │ AB │ CD │ ABCD │
    ├────┼────┼────┤
    │ EF │ GH │ EFGH │
    ├────┼────┼────┤
    │ ABCD │ EFGH │ ?  │
    └────┴────┴────┘',
      options:['一二三四五六七八','ABCDEFGH','ABCD','EFGH'], correct:0,
      optionsEn:['一二三四五六七八','ABCDEFGH','ABCD','EFGH'],
      explanation:'字符串拼接',
      explanationEn:'String concatenation' },
    { id:71, points:8, difficulty:'极难',
      question:'E11 ┌────┬────┬────┐
    │ ◆◇◆ │ ◇◆◇ │ ◆◇◆◇◆◇ │
    ├────┼────┼────┤
    │ ◆◇◆ │ ◇◆◇ │ ◆◇◆◇◆◇ │
    ├────┼────┼────┤
    │ ◆◇◆◇◆◇ │ ◆◇◆◇◆◇ │ ?  │
    └────┴────┴────┘',
      questionEn:'E11 ┌────┬────┬────┐
    │ ◆◇◆ │ ◇◆◇ │ ◆◇◆◇◆◇ │
    ├────┼────┼────┤
    │ ◆◇◆ │ ◇◆◇ │ ◆◇◆◇◆◇ │
    ├────┼────┼────┤
    │ ◆◇◆◇◆◇ │ ◆◇◆◇◆◇ │ ?  │
    └────┴────┴────┘',
      options:['◆◇◆◇◆◇◆◇◆◇◆◇','◆◇◆◇◆◇◆◇◆◇◆◇','◇◆◇◆◇◆◇◆◇◆◇'], correct:0,
      optionsEn:['◆◇◆◇◆◇◆◇◆◇◆◇','◆◇◆◇◆◇◆◇◆◇◆◇','◇◆◇◆◇◆◇◆◇◆◇'],
      explanation:'两层拼接=◆◇◆◇◆◇◆◇◆◇◆◇',
      explanationEn:'Double concat=◆◇◆◇◆◇◆◇◆◇◆◇' },
    { id:72, points:8, difficulty:'极难',
      question:'E12 ┌────┬────┬────┐
    │ ●■● │ ■●■ │ ●■●■●■ │
    ├────┼────┼────┤
    │ ●■● │ ■●■ │ ●■●■●■ │
    ├────┼────┼────┤
    │ ●■●■●■ │ ●■●■●■ │ ?  │
    └────┴────┴────┘',
      questionEn:'E12 ┌────┬────┬────┐
    │ ●■● │ ■●■ │ ●■●■●■ │
    ├────┼────┼────┤
    │ ●■● │ ■●■ │ ●■●■●■ │
    ├────┼────┼────┤
    │ ●■●■●■ │ ●■●■●■ │ ?  │
    └────┴────┴────┘',
      options:['●■●■●■●■●■●■','■●■■●■','●■●■●■●■●■●■','●■●■●■'], correct:0,
      optionsEn:['●■●■●■●■●■●■','■●■■●■','●■●■●■●■●■●■','●■●■●■'],
      explanation:'全部拼接=●■●■●■●■●■●■',
      explanationEn:'All concatenated=●■●■●■●■●■●■' },
  ],

  getLabel: function(iq) {
    if (iq >= 130) return '非常优秀'; if (iq >= 120) return '优秀';
    if (iq >= 110) return '中上'; if (iq >= 90) return '中等';
    if (iq >= 80) return '中下'; if (iq >= 70) return '临界';
    return '待提升';
  },
  getLabelEn: function(iq) {
    if (iq >= 130) return 'Very Superior'; if (iq >= 120) return 'Superior';
    if (iq >= 110) return 'High Average'; if (iq >= 90) return 'Average';
    if (iq >= 80) return 'Low Average'; if (iq >= 70) return 'Borderline';
    return 'Very Low';
  },
  getDesc: function(iq) {
    if (iq >= 130) return '你的抽象推理能力非常出色，能从复杂模式中快速提取规律。';
    if (iq >= 120) return '你的图形推理能力优秀，善于发现抽象规律和逻辑关系。';
    if (iq >= 110) return '你的抽象推理能力良好，具备较强的模式识别能力。';
    if (iq >= 90) return '你的推理能力处于正常范围，能处理大部分图形逻辑问题。';
    if (iq >= 80) return '你的抽象推理能力中下，可以多练习观察和总结规律。';
    return '测试分数偏低，可能受状态影响，建议休息后重测。';
  },
  getDescEn: function(iq) {
    if (iq >= 130) return 'Your abstract reasoning ability is outstanding.';
    if (iq >= 120) return 'Your figural reasoning ability is excellent.';
    if (iq >= 110) return 'Your abstract reasoning ability is good.';
    if (iq >= 90) return 'Your reasoning ability is in the normal range.';
    if (iq >= 80) return 'Your abstract reasoning ability is below average.';
    return 'The test score is low, may be affected by your state.';
  },
  getProfile: function(result) {
    const pct = Math.round((result.totalRaw / result.maxRaw) * 100);
    if (pct >= 85) return '你在图形推理方面表现卓越，能够快速识别复杂模式中的内在规律。';
    if (pct >= 65) return '你具备良好的抽象推理能力，能处理大多数图形逻辑问题。';
    if (pct >= 45) return '你的图形推理能力处于中等水平，基础模式识别能力较好，复杂规律有待加强。';
    return '你在模式识别方面有提升空间，多练习观察图形之间的变化规律会有所帮助。';
  },
  getProfileEn: function(result) {
    const pct = Math.round((result.totalRaw / result.maxRaw) * 100);
    if (pct >= 85) return 'You excel at figural reasoning.';
    if (pct >= 65) return 'You have good abstract reasoning ability.';
    if (pct >= 45) return 'Your figural reasoning ability is at an average level.';
    return 'There is room for improvement in pattern recognition.';
  },
  getRecommendation: function(result) {
    if (result.fsiq >= 130) return '建议挑战更高难度的抽象推理题目（如高级数独、逻辑谜题、编程算法），进一步锻炼思维能力。';
    if (result.fsiq >= 110) return '建议多做图形推理和逻辑思维训练，如数独、扫雷、棋类游戏等。';
    if (result.fsiq >= 90) return '建议平时多尝试逻辑谜题、观察图形规律的游戏。';
    return '可以从简单的图形匹配和模式观察开始练习，逐步挑战更复杂的推理问题。';
  },
  getRecommendationEn: function(result) {
    if (result.fsiq >= 130) return 'Consider challenging yourself with higher-level abstract reasoning problems.';
    if (result.fsiq >= 110) return 'Consider doing more figural reasoning and logical thinking training.';
    if (result.fsiq >= 90) return 'Try logic puzzles and pattern observation games regularly.';
    return 'Start with simple figure matching and pattern observation exercises.';
  }
};
