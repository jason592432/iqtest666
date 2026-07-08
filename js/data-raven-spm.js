// ============================================================
// 瑞文标准推理测验 (Raven's SPM) - 60题全图形版
// 5个系列 × 12题 = 60题
// 题目来源：开源项目 open-rpm-web (GPL v3)
// ============================================================
const TEST_RAVEN_SPM = {
  id: 'raven-spm',
  name: '瑞文标准推理测验',
  nameEn: "Raven's Standard Progressive Matrices",
  icon: '🔷',
  color: '#4facfe',
  timeLimit: 40 * 60,
  ringMax: 150,
  hasIndexes: false,
  isSvgTest: true,  // 标记为SVG图形化测试

  reminderItems: [
    '本测试共 <strong>60</strong> 道题，采用 <strong>瑞文标准推理测验 (SPM)</strong> 架构',
    '每道题是一个 <strong>3×3 图形矩阵</strong>，右下角缺了一块',
    '请从下方选项中选出最能补全矩阵规律的一个',
    '答题时限为 <strong>40 分钟</strong>，页面顶部显示倒计时',
    'Set A-B 每题 <strong>6</strong> 个选项，Set C-E 每题 <strong>8</strong> 个选项',
    '题目从简单到复杂递进，越往后越有挑战性',
    '如果不会可以先跳过，之后可以返回修改',
    '超时系统将 <strong>自动提交</strong> 已答题目',
    '<strong>注意：</strong>测试结果仅供参考，不能作为临床智力评估依据'
  ],

  questions: [
    // ============ Set A (Q1-12): 连续模式补全, 6选项 ============
    { id:1,  points:1, svg:'/raven-spm/1.svg',  optCount:6, correct:3, series:'A' },
    { id:2,  points:1, svg:'/raven-spm/2.svg',  optCount:6, correct:4, series:'A' },
    { id:3,  points:1, svg:'/raven-spm/3.svg',  optCount:6, correct:0, series:'A' },
    { id:4,  points:1, svg:'/raven-spm/4.svg',  optCount:6, correct:1, series:'A' },
    { id:5,  points:1, svg:'/raven-spm/5.svg',  optCount:6, correct:5, series:'A' },
    { id:6,  points:1, svg:'/raven-spm/6.svg',  optCount:6, correct:2, series:'A' },
    { id:7,  points:1, svg:'/raven-spm/7.svg',  optCount:6, correct:5, series:'A' },
    { id:8,  points:1, svg:'/raven-spm/8.svg',  optCount:6, correct:1, series:'A' },
    { id:9,  points:1, svg:'/raven-spm/9.svg',  optCount:6, correct:0, series:'A' },
    { id:10, points:1, svg:'/raven-spm/10.svg', optCount:6, correct:2, series:'A' },
    { id:11, points:1, svg:'/raven-spm/11.svg', optCount:6, correct:3, series:'A' },
    { id:12, points:1, svg:'/raven-spm/12.svg', optCount:6, correct:4, series:'A' },

    // ============ Set B (Q13-24): 类比推理, 6选项 ============
    { id:13, points:1, svg:'/raven-spm/13.svg', optCount:6, correct:1, series:'B' },
    { id:14, points:1, svg:'/raven-spm/14.svg', optCount:6, correct:5, series:'B' },
    { id:15, points:1, svg:'/raven-spm/15.svg', optCount:6, correct:0, series:'B' },
    { id:16, points:1, svg:'/raven-spm/16.svg', optCount:6, correct:1, series:'B' },
    { id:17, points:1, svg:'/raven-spm/17.svg', optCount:6, correct:0, series:'B' },
    { id:18, points:1, svg:'/raven-spm/18.svg', optCount:6, correct:2, series:'B' },
    { id:19, points:1, svg:'/raven-spm/19.svg', optCount:6, correct:4, series:'B' },
    { id:20, points:1, svg:'/raven-spm/20.svg', optCount:6, correct:5, series:'B' },
    { id:21, points:1, svg:'/raven-spm/21.svg', optCount:6, correct:3, series:'B' },
    { id:22, points:1, svg:'/raven-spm/22.svg', optCount:6, correct:2, series:'B' },
    { id:23, points:1, svg:'/raven-spm/23.svg', optCount:6, correct:3, series:'B' },
    { id:24, points:1, svg:'/raven-spm/24.svg', optCount:6, correct:4, series:'B' },

    // ============ Set C (Q25-36): 递进变化, 8选项 ============
    { id:25, points:1, svg:'/raven-spm/25.svg', optCount:8, correct:7, series:'C' },
    { id:26, points:1, svg:'/raven-spm/26.svg', optCount:8, correct:1, series:'C' },
    { id:27, points:1, svg:'/raven-spm/27.svg', optCount:8, correct:2, series:'C' },
    { id:28, points:1, svg:'/raven-spm/28.svg', optCount:8, correct:7, series:'C' },
    { id:29, points:1, svg:'/raven-spm/29.svg', optCount:8, correct:6, series:'C' },
    { id:30, points:1, svg:'/raven-spm/30.svg', optCount:8, correct:3, series:'C' },
    { id:31, points:1, svg:'/raven-spm/31.svg', optCount:8, correct:4, series:'C' },
    { id:32, points:1, svg:'/raven-spm/32.svg', optCount:8, correct:0, series:'C' },
    { id:33, points:1, svg:'/raven-spm/33.svg', optCount:8, correct:6, series:'C' },
    { id:34, points:1, svg:'/raven-spm/34.svg', optCount:8, correct:5, series:'C' },
    { id:35, points:1, svg:'/raven-spm/35.svg', optCount:8, correct:0, series:'C' },
    { id:36, points:1, svg:'/raven-spm/36.svg', optCount:8, correct:1, series:'C' },

    // ============ Set D (Q37-48): 系统性排列, 8选项 ============
    { id:37, points:1, svg:'/raven-spm/37.svg', optCount:8, correct:2, series:'D' },
    { id:38, points:1, svg:'/raven-spm/38.svg', optCount:8, correct:3, series:'D' },
    { id:39, points:1, svg:'/raven-spm/39.svg', optCount:8, correct:2, series:'D' },
    { id:40, points:1, svg:'/raven-spm/40.svg', optCount:8, correct:6, series:'D' },
    { id:41, points:1, svg:'/raven-spm/41.svg', optCount:8, correct:7, series:'D' },
    { id:42, points:1, svg:'/raven-spm/42.svg', optCount:8, correct:5, series:'D' },
    { id:43, points:1, svg:'/raven-spm/43.svg', optCount:8, correct:4, series:'D' },
    { id:44, points:1, svg:'/raven-spm/44.svg', optCount:8, correct:3, series:'D' },
    { id:45, points:1, svg:'/raven-spm/45.svg', optCount:8, correct:0, series:'D' },
    { id:46, points:1, svg:'/raven-spm/46.svg', optCount:8, correct:1, series:'D' },
    { id:47, points:1, svg:'/raven-spm/47.svg', optCount:8, correct:4, series:'D' },
    { id:48, points:1, svg:'/raven-spm/48.svg', optCount:8, correct:5, series:'D' },

    // ============ Set E (Q49-60): 逻辑解析, 8选项 ============
    { id:49, points:1, svg:'/raven-spm/49.svg', optCount:8, correct:6, series:'E' },
    { id:50, points:1, svg:'/raven-spm/50.svg', optCount:8, correct:5, series:'E' },
    { id:51, points:1, svg:'/raven-spm/51.svg', optCount:8, correct:7, series:'E' },
    { id:52, points:1, svg:'/raven-spm/52.svg', optCount:8, correct:1, series:'E' },
    { id:53, points:1, svg:'/raven-spm/53.svg', optCount:8, correct:0, series:'E' },
    { id:54, points:1, svg:'/raven-spm/54.svg', optCount:8, correct:4, series:'E' },
    { id:55, points:1, svg:'/raven-spm/55.svg', optCount:8, correct:0, series:'E' },
    { id:56, points:1, svg:'/raven-spm/56.svg', optCount:8, correct:5, series:'E' },
    { id:57, points:1, svg:'/raven-spm/57.svg', optCount:8, correct:2, series:'E' },
    { id:58, points:1, svg:'/raven-spm/58.svg', optCount:8, correct:1, series:'E' },
    { id:59, points:1, svg:'/raven-spm/59.svg', optCount:8, correct:3, series:'E' },
    { id:60, points:1, svg:'/raven-spm/60.svg', optCount:8, correct:4, series:'E' },
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
    if (iq >= 130) return '你在抽象推理方面表现卓越，能从复杂图形中快速提取规律，人群中属于前2%。';
    if (iq >= 120) return '你的图形推理能力优秀，善于发现抽象规律和逻辑关系。';
    if (iq >= 110) return '你的抽象推理能力良好，具备较强的模式识别能力。';
    if (iq >= 90) return '你的推理能力处于正常范围，能处理大部分图形逻辑问题。';
    if (iq >= 80) return '你的抽象推理能力中下，可以多练习观察和总结规律。';
    return '测试分数偏低，可能受状态影响，建议休息后重测。';
  },
  getDescEn: function(iq) {
    if (iq >= 130) return 'Your abstract reasoning is outstanding, top 2% of the population.';
    if (iq >= 120) return 'Your figural reasoning is excellent.';
    if (iq >= 110) return 'Your abstract reasoning is good.';
    if (iq >= 90) return 'Your reasoning is in the normal range.';
    if (iq >= 80) return 'Below average, practice pattern recognition.';
    return 'Score may be affected by your state; rest and retry.';
  },
  getProfile: function(result) {
    const pct = Math.round((result.totalRaw / result.maxRaw) * 100);
    if (pct >= 85) return '你在图形推理方面表现卓越，能够快速识别复杂模式中的内在规律。';
    if (pct >= 65) return '你具备良好的抽象推理能力，能处理大多数图形逻辑问题。';
    if (pct >= 45) return '你的图形推理能力处于中等水平，基础模式识别能力较好。';
    return '你在模式识别方面有提升空间，多练习观察图形之间的变化规律会有所帮助。';
  },
  getProfileEn: function(result) {
    const pct = Math.round((result.totalRaw / result.maxRaw) * 100);
    if (pct >= 85) return 'You excel at figural reasoning.';
    if (pct >= 65) return 'You have good abstract reasoning ability.';
    if (pct >= 45) return 'Your figural reasoning is average.';
    return 'Practice pattern observation for improvement.';
  },
  getRecommendation: function(result) {
    if (result.fsiq >= 130) return '建议挑战更高难度的抽象推理题目，如高级数独、逻辑谜题、编程算法等。';
    if (result.fsiq >= 110) return '建议多做图形推理和逻辑思维训练，如数独、棋类游戏等。';
    if (result.fsiq >= 90) return '建议多尝试逻辑谜题、图形规律游戏，锻炼抽象思维能力。';
    return '从简单的图形匹配和模式观察开始练习，逐步挑战更复杂的推理问题。';
  },
  getRecommendationEn: function(result) {
    if (result.fsiq >= 130) return 'Challenge yourself with advanced puzzles and algorithms.';
    if (result.fsiq >= 110) return 'Practice figural reasoning with puzzles and strategy games.';
    if (result.fsiq >= 90) return 'Try logic puzzles and pattern games regularly.';
    return 'Start with simple pattern matching and progress gradually.';
  }
};
