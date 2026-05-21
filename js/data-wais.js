// ============================================================
// 韦氏成人智力测验 (WAIS) - 30题
// 参考 WAIS-IV 架构
// ============================================================
const TEST_WAIS = {
  id: 'wais',
  name: '韦氏成人智力测验',
  nameEn: 'WAIS Adult Intelligence Test',
  icon: '🧑',
  color: '#667eea',
  timeLimit: 25 * 60,
  ringMax: 150,
  hasIndexes: true,
  indexTitle: '韦氏四指数',
  indexTitleEn: 'WAIS Four Indexes',
  indexConfig: {
    VCI: { label: '言语理解', labelEn: 'Verbal Comprehension', short: 'VCI', shortEn: 'VCI', color: '#667eea' },
    PRI: { label: '知觉推理', labelEn: 'Perceptual Reasoning', short: 'PRI', shortEn: 'PRI', color: '#e74c8b' },
    WMI: { label: '工作记忆', labelEn: 'Working Memory', short: 'WMI', shortEn: 'WMI', color: '#27ae60' },
    PSI: { label: '加工速度', labelEn: 'Processing Speed', short: 'PSI', shortEn: 'PSI', color: '#e67e22' }
  },

  reminderItems: [
    '本测试共 <strong>30</strong> 道题，参考 <strong>韦氏成人智力量表 (WAIS-IV)</strong> 架构',
    '覆盖四大认知维度：<strong>言语理解 (VCI)</strong>、<strong>知觉推理 (PRI)</strong>、<strong>工作记忆 (WMI)</strong>、<strong>加工速度 (PSI)</strong>',
    '答题时限为 <strong>25 分钟</strong>，页面顶部显示倒计时',
    '每道题有 <strong>4 个选项</strong>，选择你认为最正确的答案',
    '答题过程中可以 <strong>返回修改</strong> 之前的答案',
    '超时系统将 <strong>自动提交</strong> 已答题目',
    '建议在 <strong>安静、无干扰</strong> 的环境下一次性完成',
    '<strong>注意：</strong>测试结果仅供参考，不能作为临床智力评估依据'
  ],

  questions: [
    // ============ VCI 言语理解 (10题) ============
    { id:1, type:'VCI', subtest:'类同', subtestEn:'Similarities', points:3, difficulty:'易',
      question:'"苹果" 和 "香蕉" 的共同点是：',
      questionEn:'What do "apple" and "banana" have in common?',
      options:['都是红色','都是水果','都很甜','都长在树上'], correct:1,
      optionsEn:['They are both red','They are both fruits','They are both sweet','They both grow on trees'],
      explanation:'苹果和香蕉都属于水果类别',
      explanationEn:'Apples and bananas both belong to the fruit category' },
    { id:2, type:'VCI', subtest:'类同', subtestEn:'Similarities', points:3, difficulty:'易',
      question:'"桌子" 和 "椅子" 的共同点是：',
      questionEn:'What do "table" and "chair" have in common?',
      options:['都是木制的','都有四条腿','都是家具','都在室内使用'], correct:2,
      optionsEn:['They are both made of wood','They both have four legs','They are both furniture','They are both used indoors'],
      explanation:'桌子和椅子都属于家具类别',
      explanationEn:'Tables and chairs both belong to the furniture category' },
    { id:3, type:'VCI', subtest:'类同', subtestEn:'Similarities', points:4, difficulty:'中',
      question:'"数字" 与 "字母" 的共同点是：',
      questionEn:'What do "numbers" and "letters" have in common?',
      options:['都可以计算','都是表示信息的符号','都有26个','都起源于拉丁文'], correct:1,
      optionsEn:['Both can be used for calculation','Both are symbols that represent information','Both have 26','Both originated from Latin'],
      explanation:'数字和字母都是用于记录和传递信息的符号系统',
      explanationEn:'Numbers and letters are both symbol systems used for recording and transmitting information' },
    { id:4, type:'VCI', subtest:'词汇', subtestEn:'Vocabulary', points:3, difficulty:'易',
      question:'"深邃" 最接近的意思是：',
      questionEn:'The closest meaning of "shensui" (deep/profound) is:',
      options:['浅显','幽深','明亮','狭窄'], correct:1,
      optionsEn:['Shallow','Deep and profound','Bright','Narrow'],
      explanation:'深邃指深而幽远，与"幽深"同义',
      explanationEn:'"Shensui" means deep and far-reaching, synonymous with "youshen"' },
    { id:5, type:'VCI', subtest:'词汇', subtestEn:'Vocabulary', points:3, difficulty:'易',
      question:'"踌躇" 最接近的意思是：',
      questionEn:'The closest meaning of "chouchu" (hesitate) is:',
      options:['果断','犹豫','快速','勇敢'], correct:1,
      optionsEn:['Decisive','Hesitant','Fast','Brave'],
      explanation:'踌躇意为犹豫不决、拿不定主意',
      explanationEn:'"Chouchu" means hesitant and unable to make up one\'s mind' },
    { id:6, type:'VCI', subtest:'词汇', subtestEn:'Vocabulary', points:3, difficulty:'中',
      question:'"荒谬" 最接近的意思是：',
      questionEn:'The closest meaning of "huangmiu" (absurd) is:',
      options:['合理','可笑','严肃','复杂'], correct:1,
      optionsEn:['Reasonable','Ridiculous','Serious','Complicated'],
      explanation:'荒谬指极端错误、非常不合情理',
      explanationEn:'"Huangmiu" refers to something extremely wrong and unreasonable' },
    { id:7, type:'VCI', subtest:'常识', subtestEn:'General Knowledge', points:3, difficulty:'中',
      question:'一年中哪个月份有 28 天？',
      questionEn:'Which month of the year has 28 days?',
      options:['只有二月','每个月都有','二月和十二月','只有平年的二月'], correct:1,
      optionsEn:['Only February','Every month does','February and December','Only February in non-leap years'],
      explanation:'每个月都有至少28天',
      explanationEn:'Every month has at least 28 days' },
    { id:8, type:'VCI', subtest:'常识', subtestEn:'General Knowledge', points:3, difficulty:'易',
      question:'地球的天然卫星是：',
      questionEn:'Earth\'s natural satellite is:',
      options:['太阳','月球','火星','金星'], correct:1,
      optionsEn:['The Sun','The Moon','Mars','Venus'],
      explanation:'月球是地球唯一的天然卫星',
      explanationEn:'The Moon is Earth\'s only natural satellite' },
    { id:9, type:'VCI', subtest:'常识', subtestEn:'General Knowledge', points:3, difficulty:'易',
      question:'正常成年人的安静状态体温约为：',
      questionEn:'The normal resting body temperature of a healthy adult is approximately:',
      options:['35°C','37°C','39°C','41°C'], correct:1,
      optionsEn:['35°C','37°C','39°C','41°C'],
      explanation:'正常人体体温约为36°C~37°C',
      explanationEn:'Normal human body temperature is approximately 36°C to 37°C' },
    { id:10, type:'VCI', subtest:'常识', subtestEn:'General Knowledge', points:3, difficulty:'易',
      question:'水在标准大气压下的沸点是：',
      questionEn:'The boiling point of water at standard atmospheric pressure is:',
      options:['80°C','90°C','100°C','110°C'], correct:2,
      optionsEn:['80°C','90°C','100°C','110°C'],
      explanation:'标准大气压下水的沸点为100°C',
      explanationEn:'The boiling point of water at standard atmospheric pressure is 100°C' },

    // ============ PRI 知觉推理 (8题) ============
    { id:11, type:'PRI', subtest:'矩阵推理', subtestEn:'Matrix Reasoning', points:4, difficulty:'中',
      question:'观察图形规律：●○●○○●○○○？ 问号处应该是什么？',
      questionEn:'Observe the pattern: ●○●○○●○○○? What should go in place of the question mark?',
      options:['●','○','●○','○○'], correct:0,
      optionsEn:['●','○','●○','○○'],
      explanation:'规律为●、○、●、○○、●、○○○、●... 即黑圆后白圆数量递增',
      explanationEn:'The pattern is ●, ○, ●, ○○, ●, ○○○, ●... where the number of white circles after each black circle increases by one' },
    { id:12, type:'PRI', subtest:'矩阵推理', subtestEn:'Matrix Reasoning', points:3, difficulty:'易',
      question:'观察序列：○□△○□△？ 问号处应该是什么？',
      questionEn:'Observe the sequence: ○□△○□△? What should go in place of the question mark?',
      options:['○','□','△','◇'], correct:0,
      optionsEn:['○','□','△','◇'],
      explanation:'序列以○□△三个为一组循环',
      explanationEn:'The sequence repeats the three-symbol group ○□△' },
    { id:13, type:'PRI', subtest:'矩阵推理', subtestEn:'Matrix Reasoning', points:4, difficulty:'中',
      question:'观察序列：■□■■□■■■□？ 问号处应该是什么？',
      questionEn:'Observe the sequence: ■□■■□■■■□? What should go in place of the question mark?',
      options:['■','□','■■','■■■'], correct:0,
      optionsEn:['■','□','■■','■■■'],
      explanation:'规律为■□、■■□、■■■□... 黑方数量递增',
      explanationEn:'The pattern is ■□, ■■□, ■■■□... the number of black squares increases by one each time' },
    { id:14, type:'PRI', subtest:'矩阵推理', subtestEn:'Matrix Reasoning', points:5, difficulty:'难',
      question:'数列 1, 11, 21, 1211, ? 的下一个数字是？',
      questionEn:'What is the next number in the sequence 1, 11, 21, 1211, ??',
      extra:'提示：外观数列（每个数描述前一个数的构成）',
      options:['111221','112211','122111','111211'], correct:0,
      optionsEn:['111221','112211','122111','111211'],
      explanation:'1→"1个1"→11→"2个1"→21→"1个2,1个1"→1211→"1个1,1个2,2个1"→111221',
      explanationEn:'1 → "one 1" → 11 → "two 1s" → 21 → "one 2, one 1" → 1211 → "one 1, one 2, two 1s" → 111221' },
    { id:15, type:'PRI', subtest:'分类', subtestEn:'Classification', points:3, difficulty:'易',
      question:'找出与其它三个不同类的一项：',
      questionEn:'Which one is different from the other three?',
      options:['正方形','圆形','等边三角形','长方形'], correct:1,
      optionsEn:['Square','Circle','Equilateral triangle','Rectangle'],
      explanation:'圆形没有角和边',
      explanationEn:'A circle has no angles or sides' },
    { id:16, type:'PRI', subtest:'分类', subtestEn:'Classification', points:3, difficulty:'易',
      question:'找出与其它三个不同类的一项：',
      questionEn:'Which one is different from the other three?',
      options:['三角形','正方形','五边形','球体'], correct:3,
      optionsEn:['Triangle','Square','Pentagon','Sphere'],
      explanation:'三角形、正方形、五边形都是平面多边形，球体是立体图形',
      explanationEn:'Triangles, squares, and pentagons are all planar polygons; a sphere is a three-dimensional shape' },
    { id:17, type:'PRI', subtest:'类比', subtestEn:'Analogy', points:4, difficulty:'中',
      question:'正方形 对于 长方形，相当于 等边三角形 对于：',
      questionEn:'Square is to rectangle as equilateral triangle is to:',
      extra:'提示：考虑"特殊"与"一般"的关系',
      options:['直角三角形','等腰三角形','三角形','等腰直角三角形'], correct:1,
      optionsEn:['Right triangle','Isosceles triangle','Triangle','Isosceles right triangle'],
      explanation:'正方形是特殊的长方形，等边三角形是特殊的等腰三角形',
      explanationEn:'A square is a special type of rectangle; an equilateral triangle is a special type of isosceles triangle' },
    { id:18, type:'PRI', subtest:'符号推理', subtestEn:'Symbol Reasoning', points:2, difficulty:'易',
      question:'如果 ▲ = 1，■ = 2，● = 3，那么符号序列 ▲■● 代表什么？',
      questionEn:'If ▲ = 1, ■ = 2, and ● = 3, what does the symbol sequence ▲■● represent?',
      options:['123','6','▲■●','132'], correct:0,
      optionsEn:['123','6','▲■●','132'],
      explanation:'符号▲■●按顺序对应数字1,2,3',
      explanationEn:'The symbols ▲■● correspond to the numbers 1, 2, 3 in order' },

    // ============ WMI 工作记忆 (7题) ============
    { id:19, type:'WMI', subtest:'数字倒序', subtestEn:'Digit Reversal', points:3, difficulty:'中',
      question:'请看数字序列：5, 2, 8, 3, 1, 9。以下哪项是它的倒序？',
      questionEn:'Look at this number sequence: 5, 2, 8, 3, 1, 9. Which of the following is its reverse order?',
      options:['9,1,3,8,2,5','9,3,1,8,2,5','9,1,3,2,8,5','5,2,8,3,1,9'], correct:0,
      optionsEn:['9,1,3,8,2,5','9,3,1,8,2,5','9,1,3,2,8,5','5,2,8,3,1,9'],
      explanation:'从后往前依次为9→1→3→8→2→5',
      explanationEn:'From back to front: 9 → 1 → 3 → 8 → 2 → 5' },
    { id:20, type:'WMI', subtest:'数字排序', subtestEn:'Digit Ordering', points:3, difficulty:'中',
      question:'将以下数字从小到大排列：7, 4, 2, 9, 6。排列后的第三位数字是？',
      questionEn:'Arrange these numbers from smallest to largest: 7, 4, 2, 9, 6. What is the third number after sorting?',
      options:['4','6','7','9'], correct:1,
      optionsEn:['4','6','7','9'],
      explanation:'排序后为2,4,6,7,9，第三位是6',
      explanationEn:'Sorted: 2, 4, 6, 7, 9. The third number is 6' },
    { id:21, type:'WMI', subtest:'数字推理', subtestEn:'Number Reasoning', points:3, difficulty:'易',
      question:'数字序列 3, 6, 9, ?, 15 中问号处应填入什么？',
      questionEn:'What number should fill the question mark in the sequence 3, 6, 9, ?, 15?',
      options:['10','11','12','13'], correct:2,
      optionsEn:['10','11','12','13'],
      explanation:'每次增加3：3,6,9,12,15',
      explanationEn:'Increases by 3 each time: 3, 6, 9, 12, 15' },
    { id:22, type:'WMI', subtest:'算术', subtestEn:'Arithmetic', points:3, difficulty:'易',
      question:'小明有12个苹果，给了小红5个，又从小刚那里拿了3个。小明现在有几个苹果？',
      questionEn:'Xiao Ming has 12 apples. He gives 5 to Xiao Hong and takes 3 from Xiao Gang. How many apples does Xiao Ming have now?',
      options:['8个','10个','12个','14个'], correct:1,
      optionsEn:['8','10','12','14'],
      explanation:'12−5+3=10',
      explanationEn:'12 − 5 + 3 = 10' },
    { id:23, type:'WMI', subtest:'算术', subtestEn:'Arithmetic', points:4, difficulty:'中',
      question:'一本书原价24元，打75折出售。现在售价是多少元？',
      questionEn:'A book originally costs 24 yuan. It is now sold at 75% of the original price. What is the current price?',
      options:['16元','18元','20元','22元'], correct:1,
      optionsEn:['16 yuan','18 yuan','20 yuan','22 yuan'],
      explanation:'24×0.75=18',
      explanationEn:'24 × 0.75 = 18' },
    { id:24, type:'WMI', subtest:'算术', subtestEn:'Arithmetic', points:4, difficulty:'中',
      question:'一个长方形的长是8厘米，宽是5厘米。它的周长是多少厘米？',
      questionEn:'A rectangle is 8 cm long and 5 cm wide. What is its perimeter in centimeters?',
      extra:'周长=2×(长+宽)',
      options:['26厘米','28厘米','30厘米','40厘米'], correct:0,
      optionsEn:['26 cm','28 cm','30 cm','40 cm'],
      explanation:'2×(8+5)=26',
      explanationEn:'2 × (8 + 5) = 26' },
    { id:25, type:'WMI', subtest:'算术', subtestEn:'Arithmetic', points:5, difficulty:'难',
      question:'甲、乙两人合作完成一项工作需要6天。甲单独工作需要10天。乙单独工作需要几天？',
      questionEn:'Person A and Person B working together can complete a task in 6 days. Person A working alone needs 10 days. How many days does Person B need working alone?',
      extra:'提示：合作效率=各人效率之和',
      options:['12天','14天','15天','18天'], correct:2,
      optionsEn:['12 days','14 days','15 days','18 days'],
      explanation:'1/10+1/x=1/6→1/x=1/6−1/10=1/15→x=15',
      explanationEn:'1/10 + 1/x = 1/6 → 1/x = 1/6 − 1/10 = 1/15 → x = 15' },

    // ============ PSI 加工速度 (5题) ============
    { id:26, type:'PSI', subtest:'快速比较', subtestEn:'Rapid Comparison', points:3, difficulty:'易',
      question:'以下两组数字是否完全相同？\n58293714　和　58293714',
      questionEn:'Are the following two sets of numbers exactly the same?\n58293714 and 58293714',
      options:['完全相同','不相同','无法判断','长度不同'], correct:0,
      optionsEn:['Exactly the same','Not the same','Cannot determine','Different lengths'],
      explanation:'两组数字完全一致',
      explanationEn:'The two sets of numbers are identical' },
    { id:27, type:'PSI', subtest:'快速计数', subtestEn:'Rapid Counting', points:3, difficulty:'中',
      question:'以下单词中出现了几个字母"A"（不区分大小写）？\nABRACADABRA',
      questionEn:'How many times does the letter "A" appear in the following word (case-insensitive)?\nABRACADABRA',
      options:['3个','4个','5个','6个'], correct:2,
      optionsEn:['3','4','5','6'],
      explanation:'A-B-R-A-C-A-D-A-B-R-A，字母A出现5次',
      explanationEn:'A-B-R-A-C-A-D-A-B-R-A, the letter A appears 5 times' },
    { id:28, type:'PSI', subtest:'快速比较', subtestEn:'Rapid Comparison', points:3, difficulty:'易',
      question:'数字367和637之间的关系是：',
      questionEn:'The relationship between the numbers 367 and 637 is:',
      options:['完全相同','数字相同顺序不同','完全不同','和相等'], correct:1,
      optionsEn:['Exactly the same','Same digits, different order','Completely different','Their sums are equal'],
      explanation:'两个数字都由3,6,7组成，排列顺序不同',
      explanationEn:'Both numbers consist of the digits 3, 6, and 7, arranged in different orders' },
    { id:29, type:'PSI', subtest:'快速计数', subtestEn:'Rapid Counting', points:3, difficulty:'易',
      question:'单词"BANANA"中出现了几个字母"N"？',
      questionEn:'How many times does the letter "N" appear in the word "BANANA"?',
      options:['1个','2个','3个','4个'], correct:1,
      optionsEn:['1','2','3','4'],
      explanation:'B-A-N-A-N-A，字母N出现2次',
      explanationEn:'B-A-N-A-N-A, the letter N appears 2 times' },
    { id:30, type:'PSI', subtest:'快速扫描', subtestEn:'Rapid Scan', points:3, difficulty:'中',
      question:'以下数字序列中，数字7共出现了几次？\n3,7,1,7,9,4,7,2,8,7,0,7',
      questionEn:'How many times does the digit 7 appear in the following number sequence?\n3, 7, 1, 7, 9, 4, 7, 2, 8, 7, 0, 7',
      options:['4次','5次','6次','7次'], correct:1,
      optionsEn:['4 times','5 times','6 times','7 times'],
      explanation:'数字7出现在第2,4,7,10,12位，共5次',
      explanationEn:'The digit 7 appears at positions 2, 4, 7, 10, and 12 — 5 times in total' }
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
    if (iq >= 130) return '你的总体智力处于非常优秀的水平（人群中约占2%），认知能力全面出色。';
    if (iq >= 120) return '你的智力水平高于大部分人群（约占10%），具备优秀的学习和问题解决能力。';
    if (iq >= 110) return '你的智力水平处于中上水平，认知功能良好。';
    if (iq >= 90) return '你的智力水平处于正常范围，各项认知能力均衡。';
    if (iq >= 80) return '你的智力水平中下，部分领域有提升空间。';
    return '测试分数偏低，可能受状态影响，建议休息后重测。';
  },
  getDescEn: function(iq) {
    if (iq >= 130) return 'Your overall intelligence is at a very superior level (approximately top 2% of the population), with excellent cognitive abilities across all domains.';
    if (iq >= 120) return 'Your intelligence level is above that of most people (approximately top 10%), demonstrating strong learning and problem-solving abilities.';
    if (iq >= 110) return 'Your intelligence level is in the high average range, with good cognitive functioning.';
    if (iq >= 90) return 'Your intelligence level is within the normal range, with balanced cognitive abilities.';
    if (iq >= 80) return 'Your intelligence level is in the low average range, with some areas that could be improved.';
    return 'The test score is relatively low, which may be affected by your current state. We recommend resting and retaking the test.';
  },
  getProfile: function(result) {
    const s = result.indexScores;
    const entries = Object.entries(s).sort((a,b) => b[1]-a[1]);
    const h=entries[0], l=entries[entries.length-1];
    const gap = h[1]-l[1];
    const hName = this.indexConfig[h[0]].label;
    const lName = this.indexConfig[l[0]].label;
    if (gap < 10) return '四个认知维度水平接近，发展均衡，无明显强弱差异。';
    if (gap < 20) return hName + '（' + h[1] + '）略高于' + lName + '（' + l[1] + '），差异在正常范围内。';
    return hName + '（' + h[1] + '分）是优势维度，' + lName + '（' + l[1] + '分）有提升空间，相差' + gap + '分。';
  },
  getProfileEn: function(result) {
    const s = result.indexScores;
    const entries = Object.entries(s).sort((a,b) => b[1]-a[1]);
    const h=entries[0], l=entries[entries.length-1];
    const gap = h[1]-l[1];
    const hName = this.indexConfig[h[0]].labelEn;
    const lName = this.indexConfig[l[0]].labelEn;
    if (gap < 10) return 'Your four cognitive dimensions are closely matched, with a well-balanced profile and no significant strengths or weaknesses.';
    if (gap < 20) return hName + ' (' + h[1] + ') is slightly higher than ' + lName + ' (' + l[1] + '), with the difference within a normal range.';
    return hName + ' (' + h[1] + ') is your strength, while ' + lName + ' (' + l[1] + ') has room for improvement — a difference of ' + gap + ' points.';
  },
  getRecommendation: function(result) {
    const s = result.indexScores;
    const sorted = Object.entries(s).sort((a,b) => a[1]-b[1]);
    const weakest = sorted[0][0];
    const minScore = sorted[0][1];
    if (result.fsiq >= 130) return '建议在擅长的领域持续深耕，同时挑战跨学科的学习任务，充分发展你的认知潜力。';
    if (minScore < 90) {
      const name = this.indexConfig[weakest].label;
      const recs = {
        WMI: '建议通过心算练习、数独、记忆训练等方式提升工作记忆能力。',
        PSI: '建议通过限时游戏、快速阅读训练、注意力练习等方式提升信息处理速度。',
        VCI: '建议通过广泛阅读、词汇积累、参与讨论等方式提升语言理解和表达能力。',
        PRI: '建议通过拼图、棋类游戏、图形设计等活动锻炼空间推理和非言语思维能力。'
      };
      return name + '相对较弱。' + (recs[weakest] || '建议加强相关训练。');
    }
    return '建议保持多样化的学习和思维训练，定期挑战新领域维持大脑活跃度。';
  },
  getRecommendationEn: function(result) {
    const s = result.indexScores;
    const sorted = Object.entries(s).sort((a,b) => a[1]-b[1]);
    const weakest = sorted[0][0];
    const minScore = sorted[0][1];
    if (result.fsiq >= 130) return 'We recommend continuing to deepen your expertise in areas you excel in, while also challenging yourself with interdisciplinary tasks to fully develop your cognitive potential.';
    if (minScore < 90) {
      const name = this.indexConfig[weakest].labelEn;
      const recs = {
        WMI: 'We recommend improving working memory through mental arithmetic practice, Sudoku, and memory training exercises.',
        PSI: 'We recommend enhancing processing speed through timed games, speed reading practice, and attention exercises.',
        VCI: 'We recommend improving verbal comprehension through extensive reading, vocabulary building, and participating in discussions.',
        PRI: 'We recommend developing spatial reasoning and nonverbal thinking skills through puzzles, board games, and graphic design activities.'
      };
      return name + ' is relatively weak. ' + (recs[weakest] || 'We recommend targeted training in this area.');
    }
    return 'We recommend maintaining diverse learning and mental training activities, regularly challenging yourself with new areas to keep your brain active.';
  }
};
