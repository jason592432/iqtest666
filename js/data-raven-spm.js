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
    const correct = result.correctCount;
    const total = result.total;

    // 各系列得分情况分析
    var seriesBreakdown = '';
    try {
      var seriesScores = {};
      for (var si = 0; si < this.questions.length; si++) {
        var sq = this.questions[si];
        if (!seriesScores[sq.series]) seriesScores[sq.series] = { total: 0, correct: 0 };
        seriesScores[sq.series].total++;
        if (result._rawAnswers && result._rawAnswers[si] === sq.correct) {
          seriesScores[sq.series].correct++;
        }
      }
      // fallback: recalc from answers array
      if (!result._rawAnswers) {
        seriesScores = {};
        // We don't have the original answers here, so skip breakdown
      }
    } catch(e) {}

    var mainProfile = '';
    if (pct >= 85) mainProfile = '🎯 你在图形推理方面表现卓越！60道题答对' + correct + '道（' + pct + '%），能够快速识别复杂模式中的内在规律，人群中属于前2%的水平。';
    else if (pct >= 75) mainProfile = '💪 非常出色的表现！60道题答对' + correct + '道（' + pct + '%），你具备优秀的抽象推理能力，能轻松处理大部分图形逻辑问题。';
    else if (pct >= 65) mainProfile = '👍 良好的表现！60道题答对' + correct + '道（' + pct + '%），你具备良好的抽象推理能力，能处理大多数图形逻辑问题。';
    else if (pct >= 45) mainProfile = '📊 中等水平。60道题答对' + correct + '道（' + pct + '%），你的图形推理能力处于正常范围，基础模式识别能力较好。';
    else if (pct >= 30) mainProfile = '📝 分数偏低。60道题答对' + correct + '道（' + pct + '%），你在模式识别方面有提升空间，多练习观察图形之间的变化规律会有所帮助。';
    else mainProfile = '😅 今天可能不太在状态？60道题答对' + correct + '道（' + pct + '%）。建议休息好后重新测试，或者先从简单的图形匹配题开始练习。';

    // 各系列表现分析
    var seriesAnalysis = '';
    try {
      var seriesOrder = ['A','B','C','D','E'];
      var seriesLabels = { 'A': '连续模式', 'B': '类比推理', 'C': '递进变化', 'D': '系统性排列', 'E': '逻辑解析' };
      var seriesLabelsEn = { 'A': 'Continuous Patterns', 'B': 'Analogy', 'C': 'Progressive Change', 'D': 'Systematic Arrangement', 'E': 'Logical Resolution' };
      var hasSeriesData = false;
      for (var sii = 0; sii < seriesOrder.length; sii++) {
        var s = seriesOrder[sii];
      }
      // Recalculate from scratch
      var rawSeries = { 'A':0,'B':0,'C':0,'D':0,'E':0 };
      var maxSeries = { 'A':0,'B':0,'C':0,'D':0,'E':0 };
      for (var siii = 0; siii < this.questions.length; siii++) {
        var sqq = this.questions[siii];
        maxSeries[sqq.series]++;
        if (result._rawAnswers && result._rawAnswers[siii] === sqq.correct) {
          rawSeries[sqq.series]++;
        }
      }
      // try to recalc using raw data
      var foundAny = false;
      for (var sss in rawSeries) { if (rawSeries[sss] > 0) foundAny = true; }
      if (!foundAny) {
        // distribute proportionally if we only have total
      }
    } catch(e) {}

    var extra = '';
    if (pct >= 85) extra = '\n\n🧠 你的大脑就像一台高速模式识别机器，Set D（系统性排列）和 Set E（逻辑解析）这样高难度的题目对你来说也不是问题。';
    else if (pct >= 65) extra = '\n\n🧠 建议关注 Set D-E 的高难度题目，这些题需要运用多重逻辑规则，是提升的关键。';
    else if (pct >= 45) extra = '\n\n🧠 接下来的提升重点可以放在 Set C（递进变化）和 Set D（系统性排列）上，这些题目考察的是组合推理能力。';
    else extra = '\n\n🧠 建议从 Set A-B 的基础模式识别入手，掌握连续补全和类比推理的基本规律，再逐步挑战更难的题目。';

    return mainProfile + extra;
  },
  getProfileEn: function(result) {
    const pct = Math.round((result.totalRaw / result.maxRaw) * 100);
    const correct = result.correctCount;
    const total = result.total;
    var mainProfile = '';
    if (pct >= 85) mainProfile = '🎯 Outstanding figural reasoning! ' + correct + '/' + total + ' (' + pct + '%), top 2% of the population.';
    else if (pct >= 75) mainProfile = '💪 Excellent performance! ' + correct + '/' + total + ' (' + pct + '%), strong abstract reasoning.';
    else if (pct >= 65) mainProfile = '👍 Good performance! ' + correct + '/' + total + ' (' + pct + '%), solid reasoning ability.';
    else if (pct >= 45) mainProfile = '📊 Average level. ' + correct + '/' + total + ' (' + pct + '%), normal pattern recognition.';
    else if (pct >= 30) mainProfile = '📝 Below average. ' + correct + '/' + total + ' (' + pct + '%), room for improvement.';
    else mainProfile = '😅 Might be off today? ' + correct + '/' + total + ' (' + pct + '%). Rest and retry.';

    var extra = '';
    if (pct >= 85) extra = '\n\n🧠 Your brain is a pattern recognition machine - Set D and E are no match for you.';
    else if (pct >= 65) extra = '\n\n🧠 Focus on Sets D-E for further improvement.';
    else if (pct >= 45) extra = '\n\n🧠 Focus on Sets C-D to improve combinatorial reasoning.';
    else extra = '\n\n🧠 Start with Sets A-B, master basic patterns, then progress gradually.';

    return mainProfile + extra;
  },
  getRecommendation: function(result) {
    var rec = '';
    if (result.fsiq >= 130) rec = '🎯 建议挑战更高难度的抽象推理：高级数独、编程算法、国际象棋、密室逃脱。你的大脑需要更刺激的挑战！';
    else if (result.fsiq >= 120) rec = '💪 推荐训练：多做逻辑谜题、策略类游戏（围棋/象棋）、学习一门新语言，保持大脑活跃。';
    else if (result.fsiq >= 110) rec = '👍 推荐练习：图形推理题、数独、扫雷游戏，每周坚持2-3次，逻辑思维还能再上一层楼。';
    else if (result.fsiq >= 90) rec = '📊 建议多玩一些烧脑小游戏：数独、逻辑谜题、推理类桌游。大脑就像肌肉，越练越强！';
    else if (result.fsiq >= 80) rec = '📝 从简单的图形匹配和模式观察开始练习，网上有很多免费资源。每天10分钟，坚持一个月就能看到进步！';
    else rec = '😊 不用灰心！休息好后再测一次。平时可以多看一些图案观察类游戏，慢慢找到规律的感觉。';

    rec += '\n\n💡 瑞文推理测验主要考察的是抽象推理能力，不代表你的全部智力水平。语言能力、创造力、情商等其他方面的能力同样重要！';
    return rec;
  },
  getRecommendationEn: function(result) {
    var rec = '';
    if (result.fsiq >= 130) rec = '🎯 Challenge yourself with advanced puzzles: sudoku, coding algorithms, chess, escape rooms.';
    else if (result.fsiq >= 120) rec = '💪 Practice with logic puzzles, strategy games, learning a new language.';
    else if (result.fsiq >= 110) rec = '👍 Try figural reasoning puzzles, sudoku, minesweeper - 2-3 times per week.';
    else if (result.fsiq >= 90) rec = '📊 Play logic puzzles, sudoku, deduction board games regularly.';
    else if (result.fsiq >= 80) rec = '📝 Start with simple pattern matching, 10 minutes daily. Progress gradually!';
    else rec = '😊 Rest and retry. Try pattern observation games to build your skills.';

    rec += '\n\n💡 The Raven SPM primarily measures abstract reasoning - it does not represent your full intellectual capacity.';
    return rec;
  }
};
