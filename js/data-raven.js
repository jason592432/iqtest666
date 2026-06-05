// ============================================================
// 瑞文推理测验 (Raven's SPM) - 36题（重制版）
// 全图形模式识别，不受语言文化影响
// ============================================================
const TEST_RAVEN = {
  id: 'raven',
  name: '瑞文推理测验',
  nameEn: "Raven's Progressive Matrices",
  icon: '🔷',
  color: '#4facfe',
  timeLimit: 30 * 60,
  ringMax: 150,
  hasIndexes: false,

  reminderItems: [
    '本测试共 <strong>36</strong> 道题，参考 <strong>瑞文标准推理测验 (SPM)</strong>',
    '全部为 <strong>图形模式识别</strong> 题，不受语言和文化背景影响',
    '每道题需要你 <strong>找出图形序列的规律</strong> 并选择下一个图形',
    '答题时限为 <strong>30 分钟</strong>，页面顶部显示倒计时',
    '题目从简单到复杂递进，越往后越有挑战性',
    '如遇到不会的题目可以先跳过，之后可以返回修改',
    '超时系统将 <strong>自动提交</strong> 已答题目',
    '<strong>注意：</strong>测试结果仅供参考，不能作为临床智力评估依据'
  ],

  questions: [
    // ============ Set A: 连续模式补全 (Q1-6, 易) ============
    {
      id:1, points:2, difficulty:'易',
      question:'第一行：◉ ◉ ◉ ◉\n第二行：◎ ◎ ◎ ？\n上下两行是对应的，问号处应该是什么？',
      questionEn:'Row1: ◉ ◉ ◉ ◉\nRow2: ◎ ◎ ◎ ？\nRows correspond, what goes in the ?',
      options:['◉','◎','○','●'], correct:1,
      optionsEn:['◉','◎','○','●'],
      explanation:'第一行全是实心圆◉，第二行全是空心圆◎，所以？=◎',
      explanationEn:'Row1 all solid circles ◉, Row2 all hollow circles ◎, so ?=◎' },
    {
      id:2, points:2, difficulty:'易',
      question:'▲ ■ ▲ ■ ▲ ？\n请找出规律并选择下一个图形。',
      questionEn:'▲ ■ ▲ ■ ▲ ？\nFind the pattern and select the next figure.',
      options:['▲','■','◼','△'], correct:0,
      optionsEn:['▲','■','◼','△'],
      explanation:'交替规律：▲■▲■▲，下一个是▲',
      explanationEn:'Alternating pattern: ▲■▲■▲, next is ▲' },
    {
      id:3, points:2, difficulty:'易',
      question:'★ ☆ ★ ☆ ★ ？\n请找出规律并选择下一个图形。',
      questionEn:'★ ☆ ★ ☆ ★ ？\nFind the pattern and select the next figure.',
      options:['★','☆','✩','✦'], correct:0,
      optionsEn:['★','☆','✩','✦'],
      explanation:'实心五角星与空心五角星交替：★☆★☆★，下一个是★',
      explanationEn:'Solid and hollow star alternate: ★☆★☆★, next is ★' },
    {
      id:4, points:2, difficulty:'易',
      question:'第一行：▲ ▲ ▲ ▲\n第二行：△ △ △ ？\n上下两行对应，问号处应为什么？',
      questionEn:'Row1: ▲ ▲ ▲ ▲\nRow2: △ △ △ ？\nRows correspond, what goes in the ?',
      options:['▲','△','▽','◢'], correct:1,
      optionsEn:['▲','△','▽','◢'],
      explanation:'第一行全是实心三角，第二行全是空心三角，？=△',
      explanationEn:'Row1 all solid triangles, Row2 all hollow triangles, ?=△' },
    {
      id:5, points:2, difficulty:'易',
      question:'◆ ◇ ◆ ◇ ◆ ？\n请找出规律。',
      questionEn:'◆ ◇ ◆ ◇ ◆ ？\nFind the pattern.',
      options:['◆','◇','◈','⬟'], correct:0,
      optionsEn:['◆','◇','◈','⬟'],
      explanation:'实心菱形与空心菱形交替：◆◇◆◇◆，下一个是◆',
      explanationEn:'Solid and hollow diamond alternate: ◆◇◆◇◆, next is ◆' },
    {
      id:6, points:2, difficulty:'易',
      question:'◼ ◻ ◼ ◻ ◼ ？\n请找出规律并选择下一个。',
      questionEn:'◼ ◻ ◼ ◻ ◼ ？\nFind the pattern and select the next.',
      options:['◼','◻','▪','▫'], correct:0,
      optionsEn:['◼','◻','▪','▫'],
      explanation:'实心方与空心方交替：◼◻◼◻◼，下一个是◼',
      explanationEn:'Solid and hollow square alternate: ◼◻◼◻◼, next is ◼' },

    // ============ Set B: 递增计数 (Q7-12, 易-中) ============
    {
      id:7, points:3, difficulty:'易',
      question:'● ●● ●●● ？\n问号处有几个黑圆？',
      questionEn:'● ●● ●●● ？\nHow many black circles?',
      options:['●','●●','●●●','●●●●'], correct:3,
      optionsEn:['1','2','3','4'],
      explanation:'黑圆数量递增：1→2→3→4个',
      explanationEn:'Black circle count increases: 1→2→3→4' },
    {
      id:8, points:3, difficulty:'易',
      question:'■ ■■ ■■■ ？\n问号处有几个黑方？',
      questionEn:'■ ■■ ■■■ ？\nHow many black squares?',
      options:['■','■■','■■■','■■■■'], correct:3,
      optionsEn:['1','2','3','4'],
      explanation:'黑方数量每次+1递增',
      explanationEn:'Black square count increments by 1 each time' },
    {
      id:9, points:3, difficulty:'易',
      question:'△ △△ △△△ ？\n问号处有几个三角？',
      questionEn:'△ △△ △△△ ？\nHow many triangles?',
      options:['△','△△','△△△','△△△△'], correct:3,
      optionsEn:['1','2','3','4'],
      explanation:'空心三角数量递增：1→2→3→4',
      explanationEn:'Hollow triangle count increases: 1→2→3→4' },
    {
      id:10, points:3, difficulty:'中',
      question:'⬟ ⬟⬟ ⬟⬟⬟ ？\n问号处有几个菱形？',
      questionEn:'⬟ ⬟⬟ ⬟⬟⬟ ？\nHow many diamonds?',
      options:['⬟','⬟⬟','⬟⬟⬟','⬟⬟⬟⬟'], correct:3,
      optionsEn:['1','2','3','4'],
      explanation:'菱形数量递增：1→2→3→4',
      explanationEn:'Diamond count increases: 1→2→3→4' },
    {
      id:11, points:3, difficulty:'中',
      question:'●○ ●●○○ ●●●○○○ ？\n问号处应该是什么？',
      questionEn:'●○ ●●○○ ●●●○○○ ？\nWhat comes next?',
      options:['●●●○','●●●●○○○○','●●●○○○','●○●○'], correct:1,
      optionsEn:['●●●○','●●●●○○○○','●●●○○○','●○●○'],
      explanation:'黑圆和白圆数量同步递增：1黑1白→2黑2白→3黑3白→4黑4白',
      explanationEn:'Black and white circle counts increase together: 1B1W→2B2W→3B3W→4B4W' },
    {
      id:12, points:3, difficulty:'中',
      question:'□ □□ □□□ ？\n问号处有几个方框？',
      questionEn:'□ □□ □□□ ？\nHow many squares?',
      options:['□','□□','□□□','□□□□'], correct:3,
      optionsEn:['1','2','3','4'],
      explanation:'空心方框数量递增：1→2→3→4',
      explanationEn:'Hollow square count increases: 1→2→3→4' },

    // ============ Set C: 间隔与分组 (Q13-18, 中) ============
    {
      id:13, points:4, difficulty:'中',
      question:'●○●○●○ ？\n（注意成对出现）接下来应该是什么？',
      questionEn:'●○●○●○ ？\n(Paired pattern) What comes next?',
      options:['●','○','●○','○●'], correct:2,
      optionsEn:['●','○','●○','○●'],
      explanation:'●○成对重复出现，下一个成对仍是●○',
      explanationEn:'●○ repeats as paired pattern, next pair is ●○' },
    {
      id:14, points:4, difficulty:'中',
      question:'■□■□□■□□□■ ？\n问号处应该是什么？',
      questionEn:'■□■□□■□□□■ ？\nWhat should be in place of the ?',
      options:['■','□','■□','□□'], correct:0,
      optionsEn:['■','□','■□','□□'],
      explanation:'■后跟□的数量递增：■□→■□□→■□□□→■... 下一个是■',
      explanationEn:'■ followed by increasing □: ■□→■□□→■□□□→■..., next is ■' },
    {
      id:15, points:4, difficulty:'中',
      question:'▲△▲▲△▲▲▲△？\n接下来应该是什么？',
      questionEn:'▲△▲▲△▲▲▲△？\nWhat comes next?',
      options:['▲','△','▲▲','△△'], correct:0,
      optionsEn:['▲','△','▲▲','△△'],
      explanation:'▲递增后跟一个△：▲△→▲▲△→▲▲▲△→▲▲▲▲...下一个是▲',
      explanationEn:'▲ increments then one △: ▲△→▲▲△→▲▲▲△→▲▲▲▲..., next is ▲' },
    {
      id:16, points:4, difficulty:'中',
      question:'● ■ ●● ■■ ●●● ？\n问号处应该是什么？',
      questionEn:'● ■ ●● ■■ ●●● ？\nWhat should come next?',
      options:['■■■','■■■■','●●●●','■'], correct:0,
      optionsEn:['■■■','■■■■','●●●●','■'],
      explanation:'●递增后跟等量■递增：1●→1■→2●→2■→3●→3■',
      explanationEn:'● increments then equal ■ increments: 1●→1■→2●→2■→3●→3■' },
    {
      id:17, points:5, difficulty:'中',
      question:'○ □ ○○ □□ ○○○ ？\n问号处应该是什么？',
      questionEn:'○ □ ○○ □□ ○○○ ？\nWhat should come next?',
      options:['□□□','□□□□','○○○○','□○'], correct:0,
      optionsEn:['□□□','□□□□','○○○○','□○'],
      explanation:'○递增后跟等量□递增：1○→1□→2○→2□→3○→3□',
      explanationEn:'○ increments then equal □ increments: 1○→1□→2○→2□→3○→3□' },
    {
      id:18, points:5, difficulty:'中',
      question:'●○●○○●○○○？\n接下来应该是什么？',
      questionEn:'●○●○○●○○○？\nWhat comes next?',
      options:['●','○','●○','○○'], correct:0,
      optionsEn:['●','○','●○','○○'],
      explanation:'●后跟随○数量递增加1：●○→●○○→●○○○→●... 下一个是●',
      explanationEn:'● followed by ○ count increasing by 1: ●○→●○○→●○○○→●..., next is ●' },

    // ============ Set D: 关系类比 (Q19-24, 中-中难) ============
    {
      id:19, points:5, difficulty:'中',
      question:'▲ : △ :: ◆ : ？\n▲变化为△（实变空），那么◆应该变化为什么？',
      questionEn:'▲ : △ :: ◆ : ？\n▲ becomes △ (solid to hollow), what should ◆ become?',
      options:['◆','◇','⬟','⬡'], correct:1,
      optionsEn:['◆','◇','⬟','⬡'],
      explanation:'实心变空心：◆变为◇',
      explanationEn:'Solid becomes hollow: ◆ becomes ◇' },
    {
      id:20, points:5, difficulty:'中',
      question:'● : ○ :: ■ : ？\n●变成○（实变空），■应该变成什么？',
      questionEn:'● : ○ :: ■ : ？\n● becomes ○ (solid to hollow), what should ■ become?',
      options:['■','□','▪','▫'], correct:1,
      optionsEn:['■','□','▪','▫'],
      explanation:'实心方变空心方：■变为□',
      explanationEn:'Solid square becomes hollow: ■ becomes □' },
    {
      id:21, points:5, difficulty:'中难',
      question:'●▲ : ○△ :: ■◆ : ？\n（所有实心变空心，那么■◆变成？）',
      questionEn:'●▲ : ○△ :: ■◆ : ？\n(All solid become hollow, what does ■◆ become?)',
      options:['■◆','□◇','□◆','■◇'], correct:1,
      optionsEn:['■◆','□◇','□◆','■◇'],
      explanation:'所有图形实心变空心：■变□，◆变◇，结果为□◇',
      explanationEn:'All solid figures become hollow: ■→□, ◆→◇, result is □◇' },
    {
      id:22, points:5, difficulty:'中难',
      question:'●○ : ○● :: ■□ : ？\n（左右位置互换，那么■□变成？）',
      questionEn:'●○ : ○● :: ■□ : ？\n(Positions swapped, what does ■□ become?)',
      options:['□■','■■','□□','■□'], correct:0,
      optionsEn:['□■','■■','□□','■□'],
      explanation:'两个图形位置互换：■和□交换位置→□■',
      explanationEn:'Two figures swap positions: ■□ becomes □■' },
    {
      id:23, points:6, difficulty:'中难',
      question:'●◆ : ◆● :: ▲★ : ？\n（图形顺序颠倒，那么▲★变成？）',
      questionEn:'●◆ : ◆● :: ▲★ : ？\n(Order reversed, what does ▲★ become?)',
      options:['★▲','▲★','☆★','▲☆'], correct:0,
      optionsEn:['★▲','▲★','☆★','▲☆'],
      explanation:'前后顺序颠倒：▲★变为★▲',
      explanationEn:'Front-back order reversed: ▲★ becomes ★▲' },
    {
      id:24, points:6, difficulty:'中难',
      question:'▲△ : === :: ●○ : ?\n（实心+空心拼合，●○拼合后类似什么？）',
      questionEn:'▲△ : === :: ●○ : ?\n(Solid+hollow combine, ●○ combination resembles what?)',
      options:['●○','◎','●○●','◎○'], correct:1,
      optionsEn:['●○','◎','●○●','◎○'],
      explanation:'▲△拼合成一个图形类似===（三个横线），●○拼合类似◎（实心+空心同心圆）',
      explanationEn:'▲△ combine like ===, ●○ combine like ◎ (solid+hollow concentric circle)' },

    // ============ Set E: 变换与编码 (Q25-30, 难) ============
    {
      id:25, points:6, difficulty:'难',
      question:'1 + ■ = 1■\n2 + ■■ = 2■■\n5 + ■■■ = ？',
      questionEn:'1 + ■ = 1■\n2 + ■■ = 2■■\n5 + ■■■ = ？',
      options:['5■■■','■■■5','8','5+3'], correct:0,
      optionsEn:['5■■■','■■■5','8','5+3'],
      explanation:'数字与方块数量拼接：5+■■■=5■■■',
      explanationEn:'Number concatenated with square count: 5+■■■=5■■■' },
    {
      id:26, points:6, difficulty:'难',
      question:'★ ☆☆ ★★★ ☆☆☆☆ ★★★★★ ？\n接下来应该有几个白星？',
      questionEn:'★ ☆☆ ★★★ ☆☆☆☆ ★★★★★ ？\nHow many white stars next?',
      options:['5个','6个','7个','8个'], correct:1,
      optionsEn:['5','6','7','8'],
      explanation:'黑星数量1→3→5（奇数递增），白星数量2→4→6（偶数递增），接下来白星=6个',
      explanationEn:'Black stars odd: 1→3→5, White stars even: 2→4→6, next white stars = 6' },
    {
      id:27, points:6, difficulty:'难',
      question:'■ △ ■■ △△ ■■■ ？\n问号处应该是什么？',
      questionEn:'■ △ ■■ △△ ■■■ ？\nWhat should come next?',
      options:['△△△','■■■■','■■■','△△△△'], correct:0,
      optionsEn:['△△△','■■■■','■■■','△△△△'],
      explanation:'■递增加1→△递增加1：1■→1△→2■→2△→3■→3△',
      explanationEn:'■ increments by 1, then △ increments by 1: 1■→1△→2■→2△→3■→3△' },
    {
      id:28, points:7, difficulty:'难',
      question:'●=1, ■=2, ▲=3\n●■=12, ■▲=23\n●■▲=？',
      questionEn:'●=1, ■=2, ▲=3\n●■=12, ■▲=23\n●■▲=？',
      options:['123','6','●■▲','132'], correct:0,
      optionsEn:['123','6','●■▲','132'],
      explanation:'符号对应的数字顺序拼接：●■▲=123',
      explanationEn:'Symbols map to digits concatenated in order: ●■▲=123' },
    {
      id:29, points:7, difficulty:'难',
      question:'1→●, 2→■■, 3→▲▲▲, 4→★★★★, 5→？',
      questionEn:'1→●, 2→■■, 3→▲▲▲, 4→★★★★, 5→？',
      options:['●●●●●','▲▲▲▲▲','★★★★★','◈◈◈◈◈'], correct:2,
      optionsEn:['●●●●●','▲▲▲▲▲','★★★★★','◈◈◈◈◈'],
      explanation:'数字对应图形：数字为几就用不同的图形重复几次。4用了★，5继续用★×5',
      explanationEn:'Number corresponds to a symbol repeated N times. 4 used ★, so 5 uses ★×5' },
    {
      id:30, points:7, difficulty:'难',
      question:'▲→△, ■→□, ◆→？\n问号处应该是什么？',
      questionEn:'▲→△, ■→□, ◆→？\nWhat should go in the ?',
      options:['◇','◆','⬟','⬡'], correct:0,
      optionsEn:['◇','◆','⬟','⬡'],
      explanation:'实心变空心：◆变为◇',
      explanationEn:'Solid becomes hollow: ◆ becomes ◇' },

    // ============ Set F: 综合推理 (Q31-36, 难-极难) ============
    {
      id:31, points:7, difficulty:'难',
      question:'●○对应12, ○●对应21\n■□对应？',
      questionEn:'●○ corresponds to 12, ○● corresponds to 21\n■□ corresponds to ?',
      options:['12','21','34','43'], correct:0,
      optionsEn:['12','21','34','43'],
      explanation:'实心=1，空心=2。●=实心圆=1，○=空心圆=2。同样■=实心方=1，□=空心方=2。所以■□=12',
      explanationEn:'Solid=1, Hollow=2. ●=1, ○=2. Likewise ■=1, □=2. So ■□=12' },
    {
      id:32, points:8, difficulty:'难',
      question:'2+■=2■, 3+■■=3■■, 5+■■■=？',
      questionEn:'2+■=2■, 3+■■=3■■, 5+■■■=？',
      options:['5■■■','■■■5','8','5+3'], correct:0,
      optionsEn:['5■■■','■■■5','8','5+3'],
      explanation:'数字后面拼接对应数量的方框：5+■■■=5■■■',
      explanationEn:'Number followed by that many squares concatenated: 5+■■■=5■■■' },
    {
      id:33, points:8, difficulty:'难',
      question:'如果 ■=A, ▲=B, ●=C\n那么 ■▲● 对应的字母组合是什么？',
      questionEn:'If ■=A, ▲=B, ●=C\nwhat letter combination does ■▲● represent?',
      options:['ABC','CBA','BCA','ACB'], correct:0,
      optionsEn:['ABC','CBA','BCA','ACB'],
      explanation:'直接代入：■=A, ▲=B, ●=C，所以■▲●=ABC',
      explanationEn:'Direct substitution: ■=A, ▲=B, ●=C, so ■▲●=ABC' },
    {
      id:34, points:8, difficulty:'难',
      question:'第一行：◆ ■ ▲\n第二行：◇ □ △\n第一行和第二行之间是什么关系？\n第三行：● ◆ ★\n第四行：？',
      questionEn:'Row1: ◆ ■ ▲\nRow2: ◇ □ △\nWhat is the relationship between rows?\nRow3: ● ◆ ★\nRow4: ?',
      options:['○ ◇ ☆','● ◆ ★','○ ◆ ☆','● ◇ ★'], correct:0,
      optionsEn:['○ ◇ ☆','● ◆ ★','○ ◆ ☆','● ◇ ★'],
      explanation:'每列都是实心变空心：◆→◇，■→□，▲→△。所以●→○，◆→◇，★→☆',
      explanationEn:'Each column: solid becomes hollow. ●→○, ◆→◇, ★→☆, result is ○ ◇ ☆' },
    {
      id:35, points:8, difficulty:'极难',
      question:'■→■ ■■→■■ ■■■→？\n（注意：这里的→表示变换规则）\n将整个图形做一次水平翻转，结果是什么？',
      questionEn:'■→■ ■■→■■ ■■■→？\n(Note: → indicates transformation rule)\nWhat is the result of horizontal flip?',
      options:['■■■','■■■■','◼◼◼','■■■'], correct:0,
      optionsEn:['■■■','■■■■','◼◼◼','■■■'],
      explanation:'水平翻转后对称图形不变，■■■翻转后仍是■■■',
      explanationEn:'Horizontal flip of symmetrical figure: ■■■ stays ■■■' },
    {
      id:36, points:8, difficulty:'极难',
      question:'○→●, □→■, △→▲\n那么 ▲→？, ■→？, ●→？\n整体规律是什么？',
      questionEn:'○→●, □→■, △→▲\nSo ▲→？, ■→？, ●→？\nWhat is the overall pattern?',
      options:['△□○','▲■●','▼◻◉','●■▲'], correct:0,
      optionsEn:['△□○','▲■●','▼◻◉','●■▲'],
      explanation:'规律是空心变实心。反向则实心变空心：▲→△, ■→□, ●→○，结果△□○',
      explanationEn:'Hollow becomes solid. Reverse: solid becomes hollow: ▲→△, ■→□, ●→○, result is △□○' }
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
    if (iq >= 130) return '你的抽象推理能力非常出色，能从复杂模式中快速提取规律，在人群中属于前2%。';
    if (iq >= 120) return '你的图形推理能力优秀，善于发现抽象规律和逻辑关系。';
    if (iq >= 110) return '你的抽象推理能力良好，具备较强的模式识别能力。';
    if (iq >= 90) return '你的推理能力处于正常范围，能处理大部分图形逻辑问题。';
    if (iq >= 80) return '你的抽象推理能力中下，可以多练习观察和总结规律。';
    return '测试分数偏低，可能受状态影响，建议休息后重测。';
  },
  getDescEn: function(iq) {
    if (iq >= 130) return 'Your abstract reasoning ability is outstanding. You can quickly extract patterns from complex configurations, placing you in the top 2% of the population.';
    if (iq >= 120) return 'Your figural reasoning ability is excellent. You excel at discovering abstract patterns and logical relationships.';
    if (iq >= 110) return 'Your abstract reasoning ability is good. You have strong pattern recognition skills.';
    if (iq >= 90) return 'Your reasoning ability is in the normal range. You can handle most figural logic problems.';
    if (iq >= 80) return 'Your abstract reasoning ability is below average. Practicing observation and pattern recognition may help.';
    return 'The test score is low, which may be affected by your state. Consider resting and retaking the test.';
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
    if (pct >= 85) return 'You excel at figural reasoning and can quickly identify underlying patterns in complex configurations.';
    if (pct >= 65) return 'You have good abstract reasoning ability and can handle most figural logic problems.';
    if (pct >= 45) return 'Your figural reasoning ability is at an average level. Basic pattern recognition is good, but complex patterns need improvement.';
    return 'There is room for improvement in pattern recognition. Practicing observing change patterns between figures will help.';
  },
  getRecommendation: function(result) {
    if (result.fsiq >= 130) return '建议挑战更高难度的抽象推理题目（如高级数独、逻辑谜题、编程算法），进一步锻炼思维能力。';
    if (result.fsiq >= 110) return '建议多做图形推理和逻辑思维训练，如数独、扫雷、棋类游戏等，可以进一步提升。';
    if (result.fsiq >= 90) return '建议平时多尝试逻辑谜题、观察图形规律的游戏，锻炼抽象思维能力。';
    return '可以从简单的图形匹配和模式观察开始练习，逐步挑战更复杂的推理问题。';
  },
  getRecommendationEn: function(result) {
    if (result.fsiq >= 130) return 'Consider challenging yourself with higher-level abstract reasoning problems (such as advanced Sudoku, logic puzzles, programming algorithms) to further sharpen your thinking skills.';
    if (result.fsiq >= 110) return 'Consider doing more figural reasoning and logical thinking training, such as Sudoku, Minesweeper, and strategy board games, to further improve.';
    if (result.fsiq >= 90) return 'Try logic puzzles and pattern observation games regularly to exercise your abstract thinking ability.';
    return 'Start with simple figure matching and pattern observation exercises, then gradually progress to more complex reasoning problems.';
  }
};
