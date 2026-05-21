// ============================================================
// 瑞文推理测验 (Raven's SPM) - 36题
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
    // ============ Set A: 模式补全 (Q1-6) ============
    { id:1, points:2, difficulty:'易',
      question:'■ ■ ■ ■ ■ ？ 接下来应该是什么？\n(注：所有图形相同)',
      questionEn:'■ ■ ■ ■ ■ ？ What comes next?\n(Note: all figures are the same)',
      options:['■','□','▲','△'], correct:0,
      optionsEn:['■','□','▲','△'],
      explanation:'所有图形都是黑色方块，下一个也应是■',
      explanationEn:'All figures are black squares, the next should be ■' },
    { id:2, points:2, difficulty:'易',
      question:'● ● ● ● ？ 问号处应该是什么？',
      questionEn:'● ● ● ● ？ What should be in place of the question mark?',
      options:['○','●','●○','● ●'], correct:1,
      optionsEn:['○','●','●○','● ●'],
      explanation:'所有图形都是黑色圆点，下一个也应是●',
      explanationEn:'All figures are black circles, the next should be ●' },
    { id:3, points:2, difficulty:'易',
      question:'◆ ◆ ◆ ◆ ？ 问号处应该是什么？',
      questionEn:'◆ ◆ ◆ ◆ ？ What should be in place of the question mark?',
      options:['◇','◆','◆◇','◆ ◆'], correct:1,
      optionsEn:['◇','◆','◆◇','◆ ◆'],
      explanation:'所有图形都是黑色菱形，下一个也应是◆',
      explanationEn:'All figures are black diamonds, the next should be ◆' },
    { id:4, points:2, difficulty:'易',
      question:'★ ★ ★ ★ ？ 问号处应该是什么？',
      questionEn:'★ ★ ★ ★ ？ What should be in place of the question mark?',
      options:['☆','★','★☆','★ ★'], correct:1,
      optionsEn:['☆','★','★☆','★ ★'],
      explanation:'所有图形都是黑色五角星，下一个也应是★',
      explanationEn:'All figures are black stars, the next should be ★' },
    { id:5, points:2, difficulty:'易',
      question:'♥ ♥ ♥ ♥ ？ 问号处应该是什么？',
      questionEn:'♥ ♥ ♥ ♥ ？ What should be in place of the question mark?',
      options:['♡','♥','♥♡','♥ ♥'], correct:1,
      optionsEn:['♡','♥','♥♡','♥ ♥'],
      explanation:'所有图形都是黑色桃心，下一个也应是♥',
      explanationEn:'All figures are black hearts, the next should be ♥' },
    { id:6, points:2, difficulty:'易',
      question:'▲ ▲ ▲ ▲ ？ 问号处应该是什么？',
      questionEn:'▲ ▲ ▲ ▲ ？ What should be in place of the question mark?',
      options:['△','▲','▲△','▲ ▲'], correct:1,
      optionsEn:['△','▲','▲△','▲ ▲'],
      explanation:'所有图形都是黑色三角，下一个也应是▲',
      explanationEn:'All figures are black triangles, the next should be ▲' },

    // ============ Set B: 交替规律 (Q7-12) ============
    { id:7, points:3, difficulty:'易',
      question:'● ○ ● ○ ● ？ 问号处应该是什么？',
      questionEn:'● ○ ● ○ ● ？ What should be in place of the question mark?',
      options:['●','○','●○','○●'], correct:0,
      optionsEn:['●','○','●○','○●'],
      explanation:'黑白交替规律：黑白交替，下一个是●',
      explanationEn:'Alternating black and white: black/white alternate, next is ●' },
    { id:8, points:3, difficulty:'易',
      question:'■ □ ■ □ ■ ？ 问号处应该是什么？',
      questionEn:'■ □ ■ □ ■ ？ What should be in place of the question mark?',
      options:['■','□','■□','□■'], correct:0,
      optionsEn:['■','□','■□','□■'],
      explanation:'黑白方块交替：黑白交替，下一个是■',
      explanationEn:'Alternating black and white squares: black/white alternate, next is ■' },
    { id:9, points:3, difficulty:'易',
      question:'▲ △ ▲ △ ▲ ？ 问号处应该是什么？',
      questionEn:'▲ △ ▲ △ ▲ ？ What should be in place of the question mark?',
      options:['▲','△','▲△','△▲'], correct:0,
      optionsEn:['▲','△','▲△','△▲'],
      explanation:'黑白三角交替：黑白交替，下一个是▲',
      explanationEn:'Alternating black and white triangles: black/white alternate, next is ▲' },
    { id:10, points:3, difficulty:'中',
      question:'◆ ◇ ◆ ◇ ◆ ？ 问号处应该是什么？',
      questionEn:'◆ ◇ ◆ ◇ ◆ ？ What should be in place of the question mark?',
      options:['◆','◇','◆◇','◇◆'], correct:0,
      optionsEn:['◆','◇','◆◇','◇◆'],
      explanation:'黑白菱形交替：黑白交替，下一个是◆',
      explanationEn:'Alternating black and white diamonds: black/white alternate, next is ◆' },
    { id:11, points:3, difficulty:'中',
      question:'★ ☆ ★ ☆ ★ ？ 问号处应该是什么？',
      questionEn:'★ ☆ ★ ☆ ★ ？ What should be in place of the question mark?',
      options:['★','☆','★☆','☆★'], correct:0,
      optionsEn:['★','☆','★☆','☆★'],
      explanation:'黑白星星交替：黑白交替，下一个是★',
      explanationEn:'Alternating black and white stars: black/white alternate, next is ★' },
    { id:12, points:3, difficulty:'中',
      question:'●○●○●○ ？ 问号处应该是什么？（注：成对出现）',
      questionEn:'●○●○●○ ？ What should be in place of the question mark?\n(Note: appears in pairs)',
      options:['●','○','●○','○●'], correct:2,
      optionsEn:['●','○','●○','○●'],
      explanation:'●○成对出现，下一个成对应为●○',
      explanationEn:'●○ appears in pairs, the next pair should be ●○' },

    // ============ Set C: 递增规律 (Q13-18) ============
    { id:13, points:4, difficulty:'中',
      question:'● ●● ●●● ？ 问号处应该有几个黑圆？',
      questionEn:'● ●● ●●● ？ How many black circles?',
      options:['●','●●','●●●','●●●●'], correct:3,
      optionsEn:['●','●●','●●●','●●●●'],
      explanation:'黑圆数量递增：1,2,3,4个',
      explanationEn:'Black circle count increases: 1, 2, 3, 4' },
    { id:14, points:4, difficulty:'中',
      question:'■ ■■ ■■■ ？ 问号处应该有几个黑方？',
      questionEn:'■ ■■ ■■■ ？ How many black squares?',
      options:['■','■■','■■■','■■■■'], correct:3,
      optionsEn:['■','■■','■■■','■■■■'],
      explanation:'黑方数量递增：1,2,3,4个',
      explanationEn:'Black square count increases: 1, 2, 3, 4' },
    { id:15, points:4, difficulty:'中',
      question:'▲ ▲▲ ▲▲▲ ？ 问号处应该有几个黑三角？',
      questionEn:'▲ ▲▲ ▲▲▲ ？ How many black triangles?',
      options:['▲','▲▲','▲▲▲','▲▲▲▲'], correct:3,
      optionsEn:['▲','▲▲','▲▲▲','▲▲▲▲'],
      explanation:'黑三角数量递增：1,2,3,4个',
      explanationEn:'Black triangle count increases: 1, 2, 3, 4' },
    { id:16, points:4, difficulty:'中',
      question:'●○ ●●○○ ●●●○○○ ？ 下面应该是什么？',
      questionEn:'●○ ●●○○ ●●●○○○ ？ What comes next?',
      options:['●●●●○','●●●●○○○○','●●●○○○','●●●●○○○'], correct:1,
      optionsEn:['●●●●○','●●●●○○○○','●●●○○○','●●●●○○○'],
      explanation:'黑圆和白圆数量同步递增：1黑1白→2黑2白→3黑3白→4黑4白',
      explanationEn:'Black and white circle counts increase together: 1B1W → 2B2W → 3B3W → 4B4W' },
    { id:17, points:4, difficulty:'中',
      question:'● ■ ●● ■■ ●●● ？ 问号处应该是什么？',
      questionEn:'● ■ ●● ■■ ●●● ？ What should be in place of the question mark?',
      options:['■■■','■■■■','■','●●●●'], correct:0,
      optionsEn:['■■■','■■■■','■','●●●●'],
      explanation:'黑圆递增后跟等量黑方，下一组为3个黑方■■■',
      explanationEn:'Black circles increase then equal black squares, next group is 3 black squares ■■■' },
    { id:18, points:5, difficulty:'中',
      question:'○ □ ○○ □□ ○○○ ？ 问号处应该是什么？',
      questionEn:'○ □ ○○ □□ ○○○ ？ What should be in place of the question mark?',
      options:['□□□','□□□□','○○○○','□○'], correct:0,
      optionsEn:['□□□','□□□□','○○○○','□○'],
      explanation:'空心圆递增后跟等量空心方，下一组为3个空心方□□□',
      explanationEn:'White circles increase then equal white squares, next group is 3 white squares □□□' },

    // ============ Set D: 关系类比 (Q19-24) ============
    { id:19, points:5, difficulty:'中',
      question:'● : ○ :: ■ : ? \n（实心圆→空心圆，类似地实心方→？）',
      questionEn:'● : ○ :: ■ : ? \n(Solid circle → empty circle, similarly solid square → ?)',
      options:['■','□','▲','△'], correct:1,
      optionsEn:['■','□','▲','△'],
      explanation:'实变成空的规律：实心方变成空心方',
      explanationEn:'Rule: solid becomes empty, solid square becomes empty square' },
    { id:20, points:5, difficulty:'中',
      question:'▲ : △ :: ◆ : ? \n（实心三角→空心三角，实心菱形→？）',
      questionEn:'▲ : △ :: ◆ : ? \n(Solid triangle → empty triangle, solid diamond → ?)',
      options:['◆','◇','■','□'], correct:1,
      optionsEn:['◆','◇','■','□'],
      explanation:'实变成空的规律：实心菱形变成空心菱形',
      explanationEn:'Rule: solid becomes empty, solid diamond becomes empty diamond' },
    { id:21, points:5, difficulty:'中难',
      question:'●● : ○○ :: ■■ : ? \n（两个黑圆→两个白圆，两个黑方→？）',
      questionEn:'●● : ○○ :: ■■ : ? \n(Two black circles → two white circles, two black squares → ?)',
      options:['■■','□□','□','■'], correct:1,
      optionsEn:['■■','□□','□','■'],
      explanation:'色相反转且数量不变：两个黑方变成两个白方',
      explanationEn:'Color inversion with same count: two black squares become two white squares' },
    { id:22, points:5, difficulty:'中难',
      question:'●○ : ○● :: ■□ : ? \n（黑白互换位置：黑圆白圆→白圆黑圆，黑方白方→？）',
      questionEn:'●○ : ○● :: ■□ : ? \n(Swap positions: black white circle → white black circle, black white square → ?)',
      options:['□■','■■','□□','■□'], correct:0,
      optionsEn:['□■','■■','□□','■□'],
      explanation:'图形顺序颠倒：■□变为□■',
      explanationEn:'Figure order reversed: ■□ becomes □■' },
    { id:23, points:5, difficulty:'中难',
      question:'○● : ●○ :: △▲ : ? \n（空心实心互换位置）',
      questionEn:'○● : ●○ :: △▲ : ? \n(Swap empty and solid positions)',
      options:['▲△','△▲','▲▲','△△'], correct:0,
      optionsEn:['▲△','△▲','▲▲','△△'],
      explanation:'位置互换且颜色对调：△▲变为▲△',
      explanationEn:'Positions swapped and colors reversed: △▲ becomes ▲△' },
    { id:24, points:6, difficulty:'中难',
      question:'●◆ 对应 ◆●，那么 ▲★ 对应什么？',
      questionEn:'●◆ corresponds to ◆●, so what does ▲★ correspond to?',
      options:['★▲','▲★','☆★','▲☆'], correct:0,
      optionsEn:['★▲','▲★','☆★','▲☆'],
      explanation:'两个图形位置互换：▲★变为★▲',
      explanationEn:'Two figures swap positions: ▲★ becomes ★▲' },

    // ============ Set E: 复杂关系 (Q25-30) ============
    { id:25, points:6, difficulty:'难',
      question:'1 + ■ = 1■\n1 + ■■ = 1■■\n1 + ■■■ = ?',
      questionEn:'1 + ■ = 1■\n1 + ■■ = 1■■\n1 + ■■■ = ?',
      options:['1■■■','■■■1','4','1+3'], correct:0,
      optionsEn:['1■■■','■■■1','4','1+3'],
      explanation:'1与后续方块拼接，1+■■■=1■■■',
      explanationEn:'1 concatenated with following squares: 1+■■■=1■■■' },
    { id:26, points:6, difficulty:'难',
      question:'■ △ ■■ △△ ■■■ ？ 问号处应该是什么？',
      questionEn:'■ △ ■■ △△ ■■■ ？ What should be in place of the question mark?',
      options:['△△△','■■■■','■■■','△△△△'], correct:0,
      optionsEn:['△△△','■■■■','■■■','△△△△'],
      explanation:'黑方递增后跟等量白三角递增：3黑方后跟3白三角',
      explanationEn:'Black squares increase then equal white triangles increase: 3 black squares followed by 3 white triangles' },
    { id:27, points:6, difficulty:'难',
      question:'●○●○○●○○○？ 问号处应该是什么？（注：注意序列的模式）',
      questionEn:'●○●○○●○○○？ What should be in place of the question mark?\n(Note: pay attention to the sequence pattern)',
      options:['●','○','●○','○○'], correct:0,
      optionsEn:['●','○','●○','○○'],
      explanation:'●、○、●、○○、●、○○○、●... 黑圆后白圆数量递增',
      explanationEn:'●, ○, ●, ○○, ●, ○○○, ●... Black circle followed by increasing white circles' },
    { id:28, points:6, difficulty:'难',
      question:'▲△▲▲△▲▲▲△？ 接下来应该是什么？',
      questionEn:'▲△▲▲△▲▲▲△？ What comes next?',
      options:['▲','△','▲▲','△△'], correct:0,
      optionsEn:['▲','△','▲▲','△△'],
      explanation:'黑三角递增后跟一个白三角：▲,△,▲▲,△,▲▲▲,△,▲▲▲▲... 下一个是▲',
      explanationEn:'Black triangles increase then one white triangle: ▲,△,▲▲,△,▲▲▲,△,▲▲▲▲... next is ▲' },
    { id:29, points:6, difficulty:'难',
      question:'★ ☆☆ ★★★ ☆☆☆☆ ？ 接下来应该有几个黑星？',
      questionEn:'★ ☆☆ ★★★ ☆☆☆☆ ？ How many black stars next?',
      options:['4个','5个','6个','7个'], correct:1,
      optionsEn:['4','5','6','7'],
      explanation:'黑星数量递增（1,3,5...奇数），白星数量递增（2,4,6...偶数），下一个为5个黑星',
      explanationEn:'Black stars increase (1,3,5... odd), white stars increase (2,4,6... even), next is 5 black stars' },
    { id:30, points:6, difficulty:'难',
      question:'■□■□□■□□□■ ？ 接下来应该是什么？',
      questionEn:'■□■□□■□□□■ ？ What should be in place of the question mark?',
      options:['■','□','■□','□□'], correct:0,
      optionsEn:['■','□','■□','□□'],
      explanation:'■后跟□递增：■□、■□□、■□□□、■... 下一个是■',
      explanationEn:'■ followed by increasing □: ■□, ■□□, ■□□□, ■... next is ■' },

    // ============ Set F: 综合推理 (Q31-36) ============
    { id:31, points:7, difficulty:'难',
      question:'●=1, ■=2, ▲=3, ●■=12, ■▲=23, ●■▲=?',
      questionEn:'●=1, ■=2, ▲=3, ●■=12, ■▲=23, ●■▲=?',
      options:['123','6','●■▲','132'], correct:0,
      optionsEn:['123','6','●■▲','132'],
      explanation:'符号连接对应数字连接：●■▲=123',
      explanationEn:'Symbol concatenation corresponds to digit concatenation: ●■▲=123' },
    { id:32, points:7, difficulty:'难',
      question:'1→●, 2→■■, 3→▲▲▲, 4→? 问号处应该是什么？',
      questionEn:'1→●, 2→■■, 3→▲▲▲, 4→? What should be in place of the question mark?',
      options:['●●●●','◆◆◆◆','■■■■','★★★★'], correct:3,
      optionsEn:['●●●●','◆◆◆◆','■■■■','★★★★'],
      explanation:'数字对应图形数量递增：4对应4个★（新图形）',
      explanationEn:'Number corresponds to increasing symbol count: 4 corresponds to 4 ★ (a new symbol)' },
    { id:33, points:7, difficulty:'难',
      question:'●○ 对应 12，○● 对应 21，■□ 对应 ？',
      questionEn:'●○ corresponds to 12, ○● corresponds to 21, ■□ corresponds to ?',
      options:['12','21','34','43'], correct:1,
      optionsEn:['12','21','34','43'],
      explanation:'黑=1,白=2, 第一个图形是黑方(1)白方(2)→21',
      explanationEn:'Black=1, White=2, first figure is black square(1) white square(2)→21' },
    { id:34, points:7, difficulty:'难',
      question:'●→○,  ■→□,  ▲→? 问号处应该是什么？',
      questionEn:'●→○,  ■→□,  ▲→? What should be in place of the question mark?',
      options:['△','▲','■','●'], correct:0,
      optionsEn:['△','▲','■','●'],
      explanation:'规律：实心变空心，▲变成△',
      explanationEn:'Rule: solid becomes empty, ▲ becomes △' },
    { id:35, points:7, difficulty:'难',
      question:'●+○=●○,  ■+□=■□,  ▲+△=?',
      questionEn:'●+○=●○,  ■+□=■□,  ▲+△=?',
      options:['▲△','△▲','▲▲','△△'], correct:0,
      optionsEn:['▲△','△▲','▲▲','△△'],
      explanation:'实心在前空心在后拼接：▲+△=▲△',
      explanationEn:'Solid before empty concatenation: ▲+△=▲△' },
    { id:36, points:8, difficulty:'难',
      question:'2+■=2■, 3+■■=3■■, 5+■■■=?',
      questionEn:'2+■=2■, 3+■■=3■■, 5+■■■=?',
      options:['5■■■','■■■5','8','5+3'], correct:0,
      optionsEn:['5■■■','■■■5','8','5+3'],
      explanation:'数字与方块拼接：5+■■■=5■■■',
      explanationEn:'Number concatenated with squares: 5+■■■=5■■■' }
  ],

  getLabel: function(iq) {
    if (iq >= 130) return '非常优秀'; if (iq >= 120) return '优秀';
    if (iq >= 110) return '中上'; if (iq >= 90) return '中等';
    if (iq >= 80) return '中下'; if (iq >= 70) return '临界';
    return '待提升';
  },
  getDesc: function(iq) {
    if (iq >= 130) return '你的抽象推理能力非常出色，能从复杂模式中快速提取规律，在人群中属于前2%。';
    if (iq >= 120) return '你的图形推理能力优秀，善于发现抽象规律和逻辑关系。';
    if (iq >= 110) return '你的抽象推理能力良好，具备较强的模式识别能力。';
    if (iq >= 90) return '你的推理能力处于正常范围，能处理大部分图形逻辑问题。';
    if (iq >= 80) return '你的抽象推理能力中下，可以多练习观察和总结规律。';
    return '测试分数偏低，可能受状态影响，建议休息后重测。';
  },
  getProfile: function(result) {
    const pct = Math.round((result.totalRaw / result.maxRaw) * 100);
    if (pct >= 85) return '你在图形推理方面表现卓越，能够快速识别复杂模式中的内在规律。';
    if (pct >= 65) return '你具备良好的抽象推理能力，能处理大多数图形逻辑问题。';
    if (pct >= 45) return '你的图形推理能力处于中等水平，基础模式识别能力较好，复杂规律有待加强。';
    return '你在模式识别方面有提升空间，多练习观察图形之间的变化规律会有所帮助。';
  },
  getRecommendation: function(result) {
    const score = result.totalRaw;
    const maxRaw = result.maxRaw;
    if (result.fsiq >= 130) return '建议挑战更高难度的抽象推理题目（如高级数独、逻辑谜题、编程算法），进一步锻炼思维能力。';
    if (result.fsiq >= 110) return '建议多做图形推理和逻辑思维训练，如数独、扫雷、棋类游戏等，可以进一步提升。';
    if (result.fsiq >= 90) return '建议平时多尝试逻辑谜题、观察图形规律的游戏，锻炼抽象思维能力。';
    return '可以从简单的图形匹配和模式观察开始练习，逐步挑战更复杂的推理问题。';
  },
  getLabelEn: function(iq) {
    if (iq >= 130) return 'Very Superior'; if (iq >= 120) return 'Superior';
    if (iq >= 110) return 'High Average'; if (iq >= 90) return 'Average';
    if (iq >= 80) return 'Low Average'; if (iq >= 70) return 'Borderline';
    return 'Very Low';
  },
  getDescEn: function(iq) {
    if (iq >= 130) return 'Your abstract reasoning ability is outstanding. You can quickly extract patterns from complex configurations, placing you in the top 2% of the population.';
    if (iq >= 120) return 'Your figural reasoning ability is excellent. You excel at discovering abstract patterns and logical relationships.';
    if (iq >= 110) return 'Your abstract reasoning ability is good. You have strong pattern recognition skills.';
    if (iq >= 90) return 'Your reasoning ability is in the normal range. You can handle most figural logic problems.';
    if (iq >= 80) return 'Your abstract reasoning ability is below average. Practicing observation and pattern recognition may help.';
    return 'The test score is low, which may be affected by your state. Consider resting and retaking the test.';
  },
  getProfileEn: function(result) {
    const pct = Math.round((result.totalRaw / result.maxRaw) * 100);
    if (pct >= 85) return 'You excel at figural reasoning and can quickly identify underlying patterns in complex configurations.';
    if (pct >= 65) return 'You have good abstract reasoning ability and can handle most figural logic problems.';
    if (pct >= 45) return 'Your figural reasoning ability is at an average level. Basic pattern recognition is good, but complex patterns need improvement.';
    return 'There is room for improvement in pattern recognition. Practicing observing change patterns between figures will help.';
  },
  getRecommendationEn: function(result) {
    const score = result.totalRaw;
    const maxRaw = result.maxRaw;
    if (result.fsiq >= 130) return 'Consider challenging yourself with higher-level abstract reasoning problems (such as advanced Sudoku, logic puzzles, programming algorithms) to further sharpen your thinking skills.';
    if (result.fsiq >= 110) return 'Consider doing more figural reasoning and logical thinking training, such as Sudoku, Minesweeper, and strategy board games, to further improve.';
    if (result.fsiq >= 90) return 'Try logic puzzles and pattern observation games regularly to exercise your abstract thinking ability.';
    return 'Start with simple figure matching and pattern observation exercises, then gradually progress to more complex reasoning problems.';
  }
};
