// ============================================================
// 国际化 / Internationalization (i18n)
// ============================================================

const SUPPORTED_LANGUAGES = [
  { code: 'zh-CN', name: '简体中文', dir: 'ltr' },
  { code: 'en',    name: 'English',   dir: 'ltr' },
];

const TRANSLATIONS = {};

// ---- Chinese (Simplified) ----
TRANSLATIONS['zh-CN'] = {
  'selector.title': '免费IQ智力测验',
  'selector.subtitle': '基于经典推理题型 · 30分钟趣味自测 · 仅供参考',
  'wais.name': '韦氏成人智力测验',
  'wais.desc': '参考WAIS-IV架构，评估言语理解、知觉推理、工作记忆与加工速度',
  'wais.meta': '30 题 · 25 分钟 · 16岁+',
  'wisc.name': '韦氏儿童智力测验',
  'wisc.desc': '参考WISC-V架构，专为6-16岁儿童设计，评估核心认知能力',
  'wisc.meta': '30 题 · 25 分钟 · 6-16岁',
  'binet.name': '斯坦福-比奈智力测试',
  'binet.desc': '参考SB-5架构，评估流体推理、知识、数量推理、视觉空间与工作记忆',
  'binet.meta': '30 题 · 25 分钟 · 6岁+',
  'raven.name': '瑞文推理测验',
  'raven.desc': '参考瑞文标准推理测验(SPM)，全图形模式识别，不受语言文化影响',
  'raven.meta': '36 题 · 30 分钟 · 6岁+',
  'reminder.back': '返回选择',
  'reminder.start': '准备好了，开始答题',
  'reminder.item1': '本测试共 <strong>{n}</strong> 道题',
  'reminder.item2': '时限 <strong>{n}</strong> 分钟',
  'reminder.item3': '每道题有多个选项，选择你认为最正确的答案',
  'reminder.item4': '答题过程中可以返回修改之前的答案',
  'reminder.item5': '超时系统将自动提交已答题目',
  'reminder.item6': '建议在安静、无干扰的环境下一次性完成',
  'reminder.item7': '<strong>注意：</strong>测试结果仅供参考，不能作为临床评估依据',
  'quiz.prev': '上一题',
  'quiz.question': '第 {n} 题',
  'timeout.title': '答题时间已到',
  'timeout.text': '系统将提交你已完成的答案。',
  'timeout.viewResult': '查看结果',
  'result.fsiq': '总智商 (FSIQ)',
  'result.indexTitle': '各维度分数',
  'result.detail': '答题详情',
  'result.errorAnalysis': '错题汇总与分析',
  'result.profile': '综合结论',
  'result.back': '返回首页',
  'result.restart': '重新测试',
  'error.allCorrect': '🎉 全部答对，没有错题！',
  'error.correct': '正确',
  'error.wrong': '错误',
  'error.unanswered': '未答',
  'error.total': '总计',
  'error.accuracy': '正确率：<strong>{p}%</strong>（{c}/{a} 已答）',
  'error.difficulty': '难度分布：',
  'error.domain': '维度分布：',
  'error.yourAnswer': '你的答案：',
  'error.correctAnswer': '正确答案：',
  'error.explanation': '解析：',
  'error.expand': '展开查看全部 {n} 道错题',
  'error.collapse': '收起错题列表',
  'detail.correct': '✓ +{n}分',
  'detail.wrong': '✗ 选{user}（正解{correct}）',
  'detail.unanswered': '未作答',
  'profile.label': '能力轮廓：',
  'profile.balanced': '各认知维度水平接近，发展均衡。',
  'profile.slightGap': '{high}略高于{low}，差异在正常范围内。',
  'profile.significantGap': '{high}（{hScore}分）为优势维度，{low}（{lScore}分）有提升空间，相差{gap}分。',
  'profile.general': '本次测试主要评估抽象推理能力。',
  'rec.high': '建议在擅长的领域持续深耕，挑战跨学科任务，充分发挥认知潜力。',
  'rec.normal': '建议保持多样化的学习和思维训练，均衡发展各项认知能力。',
  'iq.veryHigh': '非常优秀',
  'iq.high': '优秀',
  'iq.aboveAvg': '中上',
  'iq.average': '中等',
  'iq.belowAvg': '中下',
  'iq.borderline': '临界',
  'iq.improve': '待提升',
  'iq.desc.veryHigh': '智力水平非常优秀（人群中约占2%），认知能力全面出色。',
  'iq.desc.high': '智力水平高于大部分人群（约占10%），学习和问题解决能力强。',
  'iq.desc.aboveAvg': '智力水平中上，认知功能良好，学习效率较高。',
  'iq.desc.average': '智力水平处于正常范围，各项认知能力均衡。',
  'iq.desc.belowAvg': '智力水平中下，部分领域有提升空间。',
  'iq.desc.borderline': '智力水平临界，建议关注认知训练。',
  'iq.desc.improve': '测试分数偏低，可能受状态影响，建议休息后重测。',
  'affiliate.title': '— 推荐阅读 · 提升认知 —',
  'affiliate.go': '去看看',
  'lang.label': '语言',
  'home.confirm': '确定要返回首页吗？当前进度将丢失。',
  'home.btn': '返回首页',
  'bookmark.text': '收藏本站',
  'bookmark.tip': '按 Ctrl+D 将本站加入浏览器收藏夹',
  'share.title': '分享你的测评结果',
  'share.poster': '生成海报',
  'share.copy': '复制链接',
  'share.copied': '链接已复制！',
  'share.posterTitle': '我的IQ测评结果',
  'share.saveHint': '长按或截图保存海报，分享到朋友圈',
  'share.footer': '分享网站',
  'share.choose': '分享到',
};

// ---- English ----
TRANSLATIONS['en'] = {
  'selector.title': 'Free IQ Test',
  'selector.subtitle': 'Fun IQ Self-Test · 30 Min · For Reference Only',
  'wais.name': 'WAIS Adult Intelligence',
  'wais.desc': 'Based on WAIS-IV, assessing verbal comprehension, perceptual reasoning, working memory & processing speed',
  'wais.meta': '30 items · 25 min · 16+',
  'wisc.name': 'WISC Children Intelligence',
  'wisc.desc': 'Based on WISC-V, designed for children 6-16, assessing core cognitive abilities',
  'wisc.meta': '30 items · 25 min · 6-16',
  'binet.name': 'Stanford-Binet Test',
  'binet.desc': 'Based on SB-5, assessing fluid reasoning, knowledge, quantitative reasoning, visual-spatial & working memory',
  'binet.meta': '30 items · 25 min · 6+',
  'raven.name': 'Raven\'s Progressive Matrices',
  'raven.desc': 'Based on Raven\'s SPM, pure图形 pattern recognition, culture-fair assessment',
  'raven.meta': '36 items · 30 min · 6+',
  'reminder.back': 'Back',
  'reminder.start': 'Ready, Start Test',
  'reminder.item1': 'This test contains <strong>{n}</strong> questions',
  'reminder.item2': 'Time limit: <strong>{n}</strong> minutes',
  'reminder.item3': 'Each question has multiple choices — select the best answer',
  'reminder.item4': 'You may go back to revise previous answers during the test',
  'reminder.item5': 'Answers will be auto-submitted when time runs out',
  'reminder.item6': 'Complete the test in a quiet, distraction-free environment',
  'reminder.item7': '<strong>Note:</strong> Results are for reference only and do not constitute a clinical assessment',
  'quiz.prev': 'Previous',
  'quiz.question': 'Q {n}',
  'timeout.title': 'Time\'s Up',
  'timeout.text': 'Your answers will be submitted automatically.',
  'timeout.viewResult': 'View Results',
  'result.fsiq': 'Full Scale IQ (FSIQ)',
  'result.indexTitle': 'Index Scores',
  'result.detail': 'Answer Details',
  'result.errorAnalysis': 'Error Analysis',
  'result.profile': 'Profile Summary',
  'result.back': 'Home',
  'result.restart': 'Retake Test',
  'error.allCorrect': '🎉 All correct — no mistakes!',
  'error.correct': 'Correct',
  'error.wrong': 'Wrong',
  'error.unanswered': 'Unanswered',
  'error.total': 'Total',
  'error.accuracy': 'Accuracy: <strong>{p}%</strong> ({c}/{a} answered)',
  'error.difficulty': 'Difficulty breakdown:',
  'error.domain': 'Domain breakdown:',
  'error.yourAnswer': 'Your answer: ',
  'error.correctAnswer': 'Correct answer: ',
  'error.explanation': 'Explanation: ',
  'error.expand': 'Show all {n} incorrect items',
  'error.collapse': 'Hide list',
  'detail.correct': '✓ +{n} pts',
  'detail.wrong': '✗ You chose {user} (correct: {correct})',
  'detail.unanswered': 'Not answered',
  'profile.label': 'Ability Profile: ',
  'profile.balanced': 'Cognitive abilities are well-balanced across all domains.',
  'profile.slightGap': '{high} is slightly above {low}, within normal variation.',
  'profile.significantGap': '{high} ({hScore}) is a strength area; {low} ({lScore}) has room for improvement, a gap of {gap} points.',
  'profile.general': 'This test primarily assesses abstract reasoning ability.',
  'rec.high': 'Continue challenging yourself in your areas of strength. Pursue interdisciplinary tasks to fully realize your cognitive potential.',
  'rec.normal': 'Maintain diverse learning and thinking exercises to develop all cognitive abilities in a balanced way.',
  'iq.veryHigh': 'Very Superior',
  'iq.high': 'Superior',
  'iq.aboveAvg': 'High Average',
  'iq.average': 'Average',
  'iq.belowAvg': 'Low Average',
  'iq.borderline': 'Borderline',
  'iq.improve': 'Needs Improvement',
  'iq.desc.veryHigh': 'Exceptionally high intelligence (top ~2% of population), outstanding cognitive abilities across all domains.',
  'iq.desc.high': 'Above most of the population (top ~10%), strong learning and problem-solving skills.',
  'iq.desc.aboveAvg': 'Above average intelligence, good cognitive function and learning efficiency.',
  'iq.desc.average': 'Intelligence within the normal range, balanced cognitive abilities.',
  'iq.desc.belowAvg': 'Below average intelligence, some areas may benefit from development.',
  'iq.desc.borderline': 'Borderline range — consider cognitive training and activities to support development.',
  'iq.desc.improve': 'Score is lower than expected. This may be affected by your state; consider resting and retaking.',
  'affiliate.title': '— Recommended Reading —',
  'affiliate.go': 'Learn More',
  'lang.label': 'Language',
  'home.confirm': 'Return to home? Your progress will be lost.',
  'home.btn': 'Home',
  'bookmark.text': 'Bookmark',
  'bookmark.tip': 'Press Ctrl+D to bookmark this page',
  'share.title': 'Share Your Result',
  'share.poster': 'Generate Poster',
  'share.copy': 'Copy Link',
  'share.copied': 'Link Copied!',
  'share.posterTitle': 'My IQ Result',
  'share.saveHint': 'Screenshot to save and share',
  'share.footer': 'Share Site',
  'share.choose': 'Share to',
};

// ---- Current language state ----
let currentLangCode = localStorage.getItem('iqLang') || 'zh-CN';

function t(key, params) {
  const langData = TRANSLATIONS[currentLangCode] || TRANSLATIONS['zh-CN'];
  let str = langData[key];
  if (str === undefined) {
    // Fallback to Chinese
    str = TRANSLATIONS['zh-CN'][key] || key;
  }
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      str = str.replace(new RegExp('\\{' + k + '\\}', 'g'), v);
    }
  }
  return str;
}

function setLanguage(code) {
  if (!TRANSLATIONS[code]) return;
  currentLangCode = code;
  localStorage.setItem('iqLang', code);
  document.documentElement.lang = code;
  document.documentElement.dir = SUPPORTED_LANGUAGES.find(l => l.code === code)?.dir || 'ltr';
  // Re-render current page
  const activePage = document.querySelector('.page.active');
  if (activePage) {
    if (activePage.id === 'selector') renderSelector();
    else if (activePage.id === 'reminder') { /* re-rendered on entry */ }
    else if (activePage.id === 'quiz') renderQuestion();
    else if (activePage.id === 'result') showResult();
  }
}

function getCurrentLang() {
  return currentLangCode;
}

function getLangName(code) {
  const lang = SUPPORTED_LANGUAGES.find(l => l.code === code);
  return lang ? lang.name : code;
}
