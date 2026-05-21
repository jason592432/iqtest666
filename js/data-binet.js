// ============================================================
// 斯坦福-比奈智力测试 (SB-5) - 30题
// 参考 Stanford-Binet 5th Edition 架构
// ============================================================
const TEST_BINET = {
  id: 'binet',
  name: '斯坦福-比奈智力测试',
  nameEn: 'Stanford-Binet Intelligence Test',
  icon: '📐',
  color: '#f093fb',
  timeLimit: 25 * 60,
  ringMax: 150,
  hasIndexes: true,
  indexTitle: '比奈五因子',
  indexTitleEn: 'SB-5 Five Factors',
  indexConfig: {
    FR: { label: '流体推理', short: 'FR', color: '#f093fb', labelEn: 'Fluid Reasoning', shortEn: 'FR' },
    KN: { label: '知识', short: 'KN', color: '#4facfe', labelEn: 'Knowledge', shortEn: 'KN' },
    QR: { label: '数量推理', short: 'QR', color: '#f39c12', labelEn: 'Quantitative Reasoning', shortEn: 'QR' },
    VS: { label: '视觉空间', short: 'VS', color: '#27ae60', labelEn: 'Visual-Spatial', shortEn: 'VS' },
    WM: { label: '工作记忆', short: 'WM', color: '#e74c8b', labelEn: 'Working Memory', shortEn: 'WM' }
  },

  reminderItems: [
    '本测试共 <strong>30</strong> 道题，参考 <strong>斯坦福-比奈智力量表 (SB-5)</strong> 架构',
    '覆盖五大认知因子：<strong>流体推理</strong>、<strong>知识</strong>、<strong>数量推理</strong>、<strong>视觉空间</strong>、<strong>工作记忆</strong>',
    '适合 <strong>6 岁以上</strong> 儿童及成人',
    '答题时限为 <strong>25 分钟</strong>，页面顶部显示倒计时',
    '每道题有 <strong>4 个选项</strong>，选择最正确的答案',
    '答题过程中可以 <strong>返回修改</strong> 之前的答案',
    '超时系统将 <strong>自动提交</strong> 已答题目',
    '<strong>注意：</strong>测试结果仅供参考，不能作为临床智力评估依据'
  ],

  questions: [
    // ============ FR 流体推理 (6题) ============
    { id:1, type:'FR', subtest:'演绎推理', subtestEn:'Deductive Reasoning', points:3, difficulty:'易',
      question:'所有鸟都有翅膀。企鹅是鸟。所以以下哪项是正确的？',
      questionEn:'All birds have wings. Penguins are birds. Which of the following is correct?',
      options:['企鹅不会飞','企鹅有翅膀','所有有翅膀的都是鸟','企鹅是哺乳动物'],
      optionsEn:['Penguins cannot fly','Penguins have wings','Everything with wings is a bird','Penguins are mammals'],
      correct:1,
      explanation:'根据三段论：所有鸟都有翅膀→企鹅是鸟→企鹅有翅膀',
      explanationEn:'According to syllogism: all birds have wings → penguins are birds → penguins have wings' },
    { id:2, type:'FR', subtest:'规律发现', subtestEn:'Pattern Recognition', points:4, difficulty:'中',
      question:'●△●△△●△△△？ 问号处应该是什么？',
      questionEn:'●△●△△●△△△ ? What should come at the question mark?',
      options:['●','△','●△','△△'],
      optionsEn:['●','△','●△','△△'],
      correct:0,
      explanation:'规律为●△、●△△、●△△△... 即黑圆后三角数量递增，下一个是●',
      explanationEn:'The pattern is ●△, ●△△, ●△△△... Triangles increase after each black circle, so the next is ●' },
    { id:3, type:'FR', subtest:'演绎推理', subtestEn:'Deductive Reasoning', points:4, difficulty:'中',
      question:'如果 A > B 且 B > C，那么以下哪项必然正确？',
      questionEn:'If A > B and B > C, then which of the following must be true?',
      options:['A < C','A = C','A > C','无法确定'],
      optionsEn:['A < C','A = C','A > C','Cannot be determined'],
      correct:2,
      explanation:'若A大于B且B大于C，则A必然大于C',
      explanationEn:'If A is greater than B and B is greater than C, then A is necessarily greater than C' },
    { id:4, type:'FR', subtest:'类比推理', subtestEn:'Analogical Reasoning', points:4, difficulty:'中',
      question:'水滴 : 大海 :: 沙粒 : ？',
      questionEn:'Water drop : Ocean :: Grain of sand : ?',
      options:['沙漠','石头','泥土','山峰'],
      optionsEn:['Desert','Stone','Soil','Mountain peak'],
      correct:0,
      explanation:'水滴汇聚成大海，沙粒汇聚成沙漠',
      explanationEn:'Water drops gather to form oceans; grains of sand gather to form deserts' },
    { id:5, type:'FR', subtest:'分类', subtestEn:'Classification', points:3, difficulty:'易',
      question:'以下哪个与其他三个不同类？',
      questionEn:'Which of the following is different from the other three?',
      options:['石头','砖块','木头','水'],
      optionsEn:['Stone','Brick','Wood','Water'],
      correct:3,
      explanation:'石头、砖块、木头都是固体，水是液体',
      explanationEn:'Stone, brick, and wood are solids; water is a liquid' },
    { id:6, type:'FR', subtest:'数列', subtestEn:'Number Sequences', points:5, difficulty:'难',
      question:'数列 2, 4, 8, 16, ? 的下一个数字是？',
      questionEn:'What is the next number in the sequence 2, 4, 8, 16, ?',
      options:['18','24','30','32'],
      optionsEn:['18','24','30','32'],
      correct:3,
      explanation:'规律为乘以2：2×2=4, 4×2=8, 8×2=16, 16×2=32',
      explanationEn:'The pattern is multiplying by 2: 2×2=4, 4×2=8, 8×2=16, 16×2=32' },

    // ============ KN 知识 (6题) ============
    { id:7, type:'KN', subtest:'常识', subtestEn:'General Knowledge', points:3, difficulty:'易',
      question:'地球围绕什么运转？',
      questionEn:'What does the Earth revolve around?',
      options:['月球','太阳','自身','银河'],
      optionsEn:['The Moon','The Sun','Itself','The Milky Way'],
      correct:1,
      explanation:'地球围绕太阳公转',
      explanationEn:'The Earth revolves around the Sun' },
    { id:8, type:'KN', subtest:'常识', subtestEn:'General Knowledge', points:3, difficulty:'易',
      question:'以下哪个不是国家？',
      questionEn:'Which of the following is not a country?',
      options:['法国','巴黎','德国','日本'],
      optionsEn:['France','Paris','Germany','Japan'],
      correct:1,
      explanation:'巴黎是法国的一个城市，不是国家',
      explanationEn:'Paris is a city in France, not a country' },
    { id:9, type:'KN', subtest:'词汇', subtestEn:'Vocabulary', points:4, difficulty:'中',
      question:'"繁荣" 的反义词是：',
      questionEn:'The antonym of "prosperity" is:',
      options:['兴盛','发达','衰落','热闹'],
      optionsEn:['Thriving','Developed','Decline','Lively'],
      correct:2,
      explanation:'繁荣指兴旺发达，反义词是衰落',
      explanationEn:'Prosperity means flourishing and thriving; its antonym is decline' },
    { id:10, type:'KN', subtest:'常识', subtestEn:'General Knowledge', points:4, difficulty:'中',
      question:'光合作用需要的主要能量来自：',
      questionEn:'The main energy source required for photosynthesis comes from:',
      options:['阳光','土壤','氧气','氮气'],
      optionsEn:['Sunlight','Soil','Oxygen','Nitrogen'],
      correct:0,
      explanation:'光合作用是植物利用阳光将二氧化碳和水转化为有机物的过程',
      explanationEn:'Photosynthesis is the process by which plants use sunlight to convert carbon dioxide and water into organic matter' },
    { id:11, type:'KN', subtest:'常识', subtestEn:'General Knowledge', points:4, difficulty:'中',
      question:'电灯的主要发明者是：',
      questionEn:'The main inventor of the electric light bulb is:',
      options:['牛顿','爱迪生','爱因斯坦','瓦特'],
      optionsEn:['Newton','Edison','Einstein','Watt'],
      correct:1,
      explanation:'爱迪生发明了实用电灯泡',
      explanationEn:'Edison invented the practical electric light bulb' },
    { id:12, type:'KN', subtest:'常识', subtestEn:'General Knowledge', points:5, difficulty:'难',
      question:'DNA 的主要功能是：',
      questionEn:'The primary function of DNA is:',
      options:['提供能量','储存遗传信息','抵抗病毒','运输氧气'],
      optionsEn:['Provide energy','Store genetic information','Fight viruses','Transport oxygen'],
      correct:1,
      explanation:'DNA（脱氧核糖核酸）是生物遗传信息的载体',
      explanationEn:'DNA (Deoxyribonucleic Acid) carries the genetic information of living organisms' },

    // ============ QR 数量推理 (6题) ============
    { id:13, type:'QR', subtest:'百分比', subtestEn:'Percentages', points:3, difficulty:'易',
      question:'20 的 25% 是多少？',
      questionEn:'What is 25% of 20?',
      options:['4','5','8','10'],
      optionsEn:['4','5','8','10'],
      correct:1,
      explanation:'20 × 25% = 20 × 0.25 = 5',
      explanationEn:'20 × 25% = 20 × 0.25 = 5' },
    { id:14, type:'QR', subtest:'数列', subtestEn:'Number Sequences', points:4, difficulty:'中',
      question:'数列 3, 6, 11, 18, ? 的下一个数字是？',
      questionEn:'What is the next number in the sequence 3, 6, 11, 18, ?',
      extra:'提示：相邻两项的差值有什么规律？',
      options:['23','25','27','29'],
      optionsEn:['23','25','27','29'],
      correct:2,
      explanation:'差值递增：+3,+5,+7,+9 → 18+9=27',
      explanationEn:'Differences increase: +3, +5, +7, +9 → 18+9=27' },
    { id:15, type:'QR', subtest:'方程', subtestEn:'Equations', points:4, difficulty:'中',
      question:'如果 x + 5 = 12，那么 x 等于多少？',
      questionEn:'If x + 5 = 12, what is the value of x?',
      options:['5','6','7','8'],
      optionsEn:['5','6','7','8'],
      correct:2,
      explanation:'x+5=12 → x=12-5=7',
      explanationEn:'x+5=12 → x=12-5=7' },
    { id:16, type:'QR', subtest:'几何', subtestEn:'Geometry', points:4, difficulty:'中',
      question:'一个正方形的周长是 40 厘米，它的边长是多少厘米？',
      questionEn:'The perimeter of a square is 40 cm. What is the length of one side in cm?',
      options:['8','9','10','12'],
      optionsEn:['8','9','10','12'],
      correct:2,
      explanation:'正方形有四条相等的边：40÷4=10',
      explanationEn:'A square has four equal sides: 40÷4=10' },
    { id:17, type:'QR', subtest:'比例', subtestEn:'Ratios', points:5, difficulty:'难',
      question:'如果甲:乙=2:3，乙:丙=4:5，那么甲:丙是多少？',
      questionEn:'If A:B=2:3 and B:C=4:5, what is A:C?',
      extra:'提示：找到甲、乙、丙的公共比例',
      options:['2:5','3:4','8:15','15:8'],
      optionsEn:['2:5','3:4','8:15','15:8'],
      correct:2,
      explanation:'甲:乙=2:3=8:12，乙:丙=4:5=12:15 → 甲:丙=8:15',
      explanationEn:'A:B=2:3=8:12, B:C=4:5=12:15 → A:C=8:15' },
    { id:18, type:'QR', subtest:'概率', subtestEn:'Probability', points:5, difficulty:'难',
      question:'抛一枚质地均匀的硬币两次，两次都正面朝上的概率是：',
      questionEn:'If a fair coin is tossed twice, what is the probability of getting heads both times?',
      options:['1/2','1/3','1/4','1/6'],
      optionsEn:['1/2','1/3','1/4','1/6'],
      correct:2,
      explanation:'可能结果：正正、正反、反正、反反，都正面为1/4',
      explanationEn:'Possible outcomes: HH, HT, TH, TT; both heads is 1/4' },

    // ============ VS 视觉空间 (6题) ============
    { id:19, type:'VS', subtest:'空间认知', subtestEn:'Spatial Awareness', points:3, difficulty:'易',
      question:'一个立方体（正方体）有多少个顶点（角）？',
      questionEn:'How many vertices (corners) does a cube have?',
      options:['4个','6个','8个','12个'],
      optionsEn:['4','6','8','12'],
      correct:2,
      explanation:'立方体有8个顶点、6个面和12条棱',
      explanationEn:'A cube has 8 vertices, 6 faces, and 12 edges' },
    { id:20, type:'VS', subtest:'图形规律', subtestEn:'Pattern Recognition', points:3, difficulty:'易',
      question:'●▲●▲●▲？ 问号处应该是什么？',
      questionEn:'●△●△●△ ? What should come at the question mark?',
      options:['●','▲','●▲','▲●'],
      optionsEn:['●','△','●△','△●'],
      correct:0,
      explanation:'●和▲交替出现，下一个是●',
      explanationEn:'● and △ alternate; the next is ●' },
    { id:21, type:'VS', subtest:'几何', subtestEn:'Geometry', points:4, difficulty:'中',
      question:'一个三角形有3条边，一个四边形有4条边。一个六边形有几条边？',
      questionEn:'A triangle has 3 sides, a quadrilateral has 4 sides. How many sides does a hexagon have?',
      options:['4条','5条','6条','8条'],
      optionsEn:['4','5','6','8'],
      correct:2,
      explanation:'六边形(Hexagon)有6条边',
      explanationEn:'A hexagon has 6 sides' },
    { id:22, type:'VS', subtest:'对称', subtestEn:'Symmetry', points:4, difficulty:'中',
      question:'以下哪个图形有对称轴？',
      questionEn:'Which of the following shapes has an axis of symmetry?',
      options:['任意平行四边形','等腰三角形','不等边三角形','任意四边形'],
      optionsEn:['Any parallelogram','Isosceles triangle','Scalene triangle','Any quadrilateral'],
      correct:1,
      explanation:'等腰三角形有对称轴（中线），平行四边形没有（菱形除外）',
      explanationEn:'An isosceles triangle has an axis of symmetry (the median); a parallelogram does not (except a rhombus)' },
    { id:23, type:'VS', subtest:'空间透视', subtestEn:'Spatial Perspective', points:5, difficulty:'难',
      question:'从正上方俯视一个圆柱体，看到的形状是：',
      questionEn:'When looking straight down from above at a cylinder, what shape do you see?',
      options:['长方形','三角形','圆形','正方形'],
      optionsEn:['Rectangle','Triangle','Circle','Square'],
      correct:2,
      explanation:'从正上方看圆柱体，看到的是它的横截面——圆形',
      explanationEn:'Looking down at a cylinder from above, you see its cross-section — a circle' },
    { id:24, type:'VS', subtest:'空间操作', subtestEn:'Spatial Manipulation', points:5, difficulty:'难',
      question:'一个正方形被沿对角线切一刀，得到两个：',
      questionEn:'If a square is cut along one of its diagonals, what two shapes do you get?',
      options:['长方形','直角三角形','正方形','等边三角形'],
      optionsEn:['Rectangles','Right triangles','Squares','Equilateral triangles'],
      correct:1,
      explanation:'沿对角线将正方形切开得到两个等腰直角三角形',
      explanationEn:'Cutting a square along its diagonal yields two isosceles right triangles' },

    // ============ WM 工作记忆 (6题) ============
    { id:25, type:'WM', subtest:'数字倒序', subtestEn:'Reverse Digit Span', points:3, difficulty:'中',
      question:'请看数字序列：6, 3, 9, 1。它的倒序是什么？',
      questionEn:'Look at this number sequence: 6, 3, 9, 1. What is its reverse order?',
      options:['1,9,3,6','6,3,9,1','1,3,9,6','9,3,6,1'],
      optionsEn:['1, 9, 3, 6','6, 3, 9, 1','1, 3, 9, 6','9, 3, 6, 1'],
      correct:0,
      explanation:'从后往前依次为1→9→3→6',
      explanationEn:'Reading from back to front: 1 → 9 → 3 → 6' },
    { id:26, type:'WM', subtest:'数字排序', subtestEn:'Number Sequencing', points:3, difficulty:'中',
      question:'将以下数字从小到大排列：4, 7, 2, 9, 5。排列后的第三位是？',
      questionEn:'Arrange these numbers from smallest to largest: 4, 7, 2, 9, 5. What is the third number after sorting?',
      options:['4','5','7','9'],
      optionsEn:['4','5','7','9'],
      correct:1,
      explanation:'排序后为2,4,5,7,9，第三位是5',
      explanationEn:'After sorting: 2, 4, 5, 7, 9; the third is 5' },
    { id:27, type:'WM', subtest:'数列记忆', subtestEn:'Sequence Memory', points:4, difficulty:'中',
      question:'数列 1, 4, 9, 16, ? 的下一个数字是？',
      questionEn:'What is the next number in the sequence 1, 4, 9, 16, ?',
      options:['20','23','25','30'],
      optionsEn:['20','23','25','30'],
      correct:2,
      explanation:'平方数列：1²=1, 2²=4, 3²=9, 4²=16, 5²=25',
      explanationEn:'Square numbers: 1²=1, 2²=4, 3²=9, 4²=16, 5²=25' },
    { id:28, type:'WM', subtest:'心算', subtestEn:'Mental Arithmetic', points:3, difficulty:'易',
      question:'小明买了一个3元的笔记本，付了10元，应找回多少元？',
      questionEn:'Xiao Ming buys a notebook for 3 yuan and pays with a 10 yuan bill. How much change should he get?',
      options:['5元','6元','7元','8元'],
      optionsEn:['5 yuan','6 yuan','7 yuan','8 yuan'],
      correct:2,
      explanation:'10−3=7',
      explanationEn:'10 − 3 = 7' },
    { id:29, type:'WM', subtest:'运算', subtestEn:'Arithmetic Operations', points:5, difficulty:'中',
      question:'8 + 4 × 2 = ？',
      questionEn:'8 + 4 × 2 = ?',
      options:['16','24','20','12'],
      optionsEn:['16','24','20','12'],
      correct:0,
      explanation:'先乘后加：4×2=8, 8+8=16',
      explanationEn:'Multiplication before addition: 4×2=8, 8+8=16' },
    { id:30, type:'WM', subtest:'注意力', subtestEn:'Attention', points:5, difficulty:'难',
      question:'从1写到10，数字"1"一共出现了几次？',
      questionEn:'When writing the numbers from 1 to 10, how many times does the digit "1" appear?',
      options:['1次','2次','3次','10次'],
      optionsEn:['1 time','2 times','3 times','10 times'],
      correct:1,
      explanation:'数字1出现在"1"和"10"中，共2次',
      explanationEn:'The digit 1 appears in "1" and "10", 2 times total' }
  ],

  getLabel: function(iq) {
    if (iq >= 130) return '非常优秀'; if (iq >= 120) return '优秀';
    if (iq >= 110) return '中上'; if (iq >= 90) return '中等';
    if (iq >= 80) return '中下'; if (iq >= 70) return '临界';
    return '待提升';
  },
  getDesc: function(iq) {
    if (iq >= 130) return '认知能力全面出色，在人群中属于顶尖水平（前2%）。';
    if (iq >= 120) return '认知能力优秀，流体推理和知识获取能力超出大部分人群。';
    if (iq >= 110) return '认知功能良好，学习和解决问题的能力处于中上水平。';
    if (iq >= 90) return '认知能力处于正常范围，各因子发展均衡。';
    if (iq >= 80) return '认知能力中下，某些因子存在提升空间。';
    return '测试分数偏低，建议休息后在状态好时重新测试。';
  },
  getProfile: function(result) {
    const s = result.indexScores;
    const entries = Object.entries(s).sort((a,b) => b[1]-a[1]);
    const h=entries[0], l=entries[entries.length-1];
    const gap = h[1]-l[1];
    const hN=this.indexConfig[h[0]].label, lN=this.indexConfig[l[0]].label;
    if (gap < 10) return '五个认知因子水平接近，发展均衡。';
    if (gap < 20) return hN + '（' + h[1] + '）略优于' + lN + '（' + l[1] + '），差异在正常范围内。';
    return hN + '（' + h[1] + '分）是优势因子，' + lN + '（' + l[1] + '分）有提升空间，相差' + gap + '分。';
  },
  getRecommendation: function(result) {
    const s = result.indexScores;
    const sorted = Object.entries(s).sort((a,b) => a[1]-b[1]);
    const w=sorted[0][0], wScore=sorted[0][1];
    const h=sorted[sorted.length-1][0];
    if (result.fsiq >= 130) return '综合认知能力突出。建议在自己感兴趣的领域深入发展，同时注意拓展其他认知领域的锻炼。';
    if (wScore < 90) {
      const recs = {
        FR:'流体推理较弱：建议多玩逻辑谜题、推理游戏、象棋等，锻炼抽象思维能力。',
        KN:'知识储备较弱：建议广泛阅读，拓展知识面，关注科学、历史、文化等不同领域。',
        QR:'数量推理较弱：建议多做数学趣味题、练习心算和估算，理解数学概念的应用。',
        VS:'视觉空间较弱：建议多做拼图、迷宫、积木搭建等空间类活动。',
        WM:'工作记忆较弱：建议练习复述信息、玩记忆卡片游戏、做多步骤心算。'
      };
      return this.indexConfig[w].label + '相对偏弱。' + (recs[w] || '建议加强训练。');
    }
    const hN = this.indexConfig[h].label;
    return '各项认知因子发展良好，其中' + hN + '表现尤佳。建议继续保持多元化的学习和思维锻炼。';
  },
  getLabelEn: function(iq) {
    if (iq >= 130) return 'Very Superior'; if (iq >= 120) return 'Superior';
    if (iq >= 110) return 'High Average'; if (iq >= 90) return 'Average';
    if (iq >= 80) return 'Low Average'; if (iq >= 70) return 'Borderline';
    return 'Very Low';
  },
  getDescEn: function(iq) {
    if (iq >= 130) return 'Exceptional cognitive ability across all domains, placing you in the top 2% of the population.';
    if (iq >= 120) return 'Superior cognitive ability, with fluid reasoning and knowledge acquisition exceeding most of the population.';
    if (iq >= 110) return 'Good cognitive function, with learning and problem-solving skills in the high average range.';
    if (iq >= 90) return 'Cognitive ability is within the normal range, with balanced development across all factors.';
    if (iq >= 80) return 'Cognitive ability in the low average range; certain factors have room for improvement.';
    return 'Your score is on the lower side. Consider resting and retaking the test when you are feeling your best.';
  },
  getProfileEn: function(result) {
    const s = result.indexScores;
    const entries = Object.entries(s).sort((a,b) => b[1]-a[1]);
    const h=entries[0], l=entries[entries.length-1];
    const gap = h[1]-l[1];
    const hN=this.indexConfig[h[0]].labelEn, lN=this.indexConfig[l[0]].labelEn;
    if (gap < 10) return 'The five cognitive factors are closely matched, indicating balanced development.';
    if (gap < 20) return hN + ' (' + h[1] + ') slightly outperforms ' + lN + ' (' + l[1] + '), a difference within the normal range.';
    return hN + ' (' + h[1] + ' pts) is your strength, while ' + lN + ' (' + l[1] + ' pts) has room for improvement—a gap of ' + gap + ' points.';
  },
  getRecommendationEn: function(result) {
    const s = result.indexScores;
    const sorted = Object.entries(s).sort((a,b) => a[1]-b[1]);
    const w=sorted[0][0], wScore=sorted[0][1];
    const h=sorted[sorted.length-1][0];
    if (result.fsiq >= 130) return 'Outstanding overall cognitive ability. Consider deepening your expertise in areas of interest while also challenging yourself across other cognitive domains.';
    if (wScore < 90) {
      const recs = {
        FR:'Fluid Reasoning is relatively weak: try logic puzzles, reasoning games, chess, and other activities that exercise abstract thinking.',
        KN:'Knowledge is relatively weak: read widely across different fields to broaden your knowledge base, including science, history, and culture.',
        QR:'Quantitative Reasoning is relatively weak: practice fun math problems, mental arithmetic, and estimation to build your understanding of mathematical concepts.',
        VS:'Visual-Spatial skills are relatively weak: engage in puzzles, mazes, block-building, and other spatial activities.',
        WM:'Working Memory is relatively weak: practice repeating information, play memory card games, and do multi-step mental arithmetic.'
      };
      return this.indexConfig[w].labelEn + ' is relatively weak. ' + (recs[w] || 'Consider targeted training.');
    }
    const hN = this.indexConfig[h].labelEn;
    return 'All cognitive factors are developing well, with ' + hN + ' performing particularly strongly. Continue engaging in diverse learning and mental exercises.';
  }
};
