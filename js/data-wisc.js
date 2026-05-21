// ============================================================
// 韦氏儿童智力测验 (WISC) - 30题
// 参考 WISC-V 架构，适合6-16岁
// ============================================================
const TEST_WISC = {
  id: 'wisc',
  name: '韦氏儿童智力测验',
  nameEn: 'WISC Child Intelligence Test',
  icon: '🧒',
  color: '#11998e',
  timeLimit: 25 * 60,
  ringMax: 150,
  hasIndexes: true,
  indexTitle: '韦氏四指数',
  indexTitleEn: 'WISC Four Indexes',
  indexConfig: {
    VCI: { label: '言语理解', labelEn: 'Verbal Comprehension', short: 'VCI', shortEn: 'VCI', color: '#11998e' },
    PRI: { label: '知觉推理', labelEn: 'Perceptual Reasoning', short: 'PRI', shortEn: 'PRI', color: '#e74c8b' },
    WMI: { label: '工作记忆', labelEn: 'Working Memory', short: 'WMI', shortEn: 'WMI', color: '#f39c12' },
    PSI: { label: '加工速度', labelEn: 'Processing Speed', short: 'PSI', shortEn: 'PSI', color: '#9b59b6' }
  },

  reminderItems: [
    '本测试共 <strong>30</strong> 道题，参考 <strong>韦氏儿童智力量表 (WISC-V)</strong> 架构',
    '覆盖 <strong>言语理解</strong>、<strong>知觉推理</strong>、<strong>工作记忆</strong>、<strong>加工速度</strong> 四大维度',
    '适合 <strong>6-16 岁</strong> 儿童和青少年',
    '答题时限为 <strong>25 分钟</strong>，页面顶部显示倒计时',
    '每道题有 <strong>4 个选项</strong>，选择你认为最正确的答案',
    '如遇到不会的题目可以先跳过，之后可以返回修改',
    '超时系统将 <strong>自动提交</strong> 已答题目',
    '<strong>注意：</strong>测试结果仅供参考，不能作为临床智力评估依据'
  ],

  questions: [
    // ============ VCI 言语理解 (10题) ============
    { id:1, type:'VCI', subtest:'类同', subtestEn:'Similarities', points:3, difficulty:'易',
      question:'"猫" 和 "狗" 的共同点是：',
      questionEn:'What do "cat" and "dog" have in common?',
      options:['都会游泳','都是宠物/动物','都能看家','都是白色'],
      optionsEn:['Both can swim','Both are pets / animals','Both can guard the house','Both are white'], correct:1,
      explanation:'猫和狗都是人们常见的宠物，也是动物',
      explanationEn:'Cats and dogs are both common pets that people keep, and they are also animals.' },
    { id:2, type:'VCI', subtest:'类同', subtestEn:'Similarities', points:3, difficulty:'易',
      question:'"铅笔" 和 "蜡笔" 的共同点是：',
      questionEn:'What do "pencil" and "crayon" have in common?',
      options:['都是红色','都可以写字画画','都是木头做的','都很长'],
      optionsEn:['Both are red','Both can be used for writing and drawing','Both are made of wood','Both are long'], correct:1,
      explanation:'铅笔和蜡笔都是可以用来写字和画画的工具',
      explanationEn:'Pencils and crayons are both tools we use for writing and drawing.' },
    { id:3, type:'VCI', subtest:'类同', subtestEn:'Similarities', points:4, difficulty:'中',
      question:'"春天" 和 "秋天" 的共同点是：',
      questionEn:'What do "spring" and "autumn" have in common?',
      options:['都很热','都是季节','都有落叶','白天都很长'],
      optionsEn:['Both are hot','Both are seasons','Both have falling leaves','Both have long days'], correct:1,
      explanation:'春天和秋天都是一年中的季节',
      explanationEn:'Spring and autumn are both seasons of the year.' },
    { id:4, type:'VCI', subtest:'词汇', subtestEn:'Vocabulary', points:3, difficulty:'易',
      question:'"勇敢" 最接近的意思是：',
      questionEn:'What is the closest meaning of "brave"?',
      options:['害怕','胆小','不怕困难','生气'],
      optionsEn:['Afraid','Cowardly','Not afraid of difficulty','Angry'], correct:2,
      explanation:'勇敢就是不怕困难，敢于面对挑战',
      explanationEn:'Being brave means you are not afraid of difficulties and you dare to face challenges.' },
    { id:5, type:'VCI', subtest:'词汇', subtestEn:'Vocabulary', points:3, difficulty:'中',
      question:'"骄傲" 最接近的意思是：',
      questionEn:'What is the closest meaning of "proud"?',
      options:['谦虚','自豪','难过','害怕'],
      optionsEn:['Humble','Proud of yourself','Sad','Afraid'], correct:1,
      explanation:'骄傲指为自己取得的成绩感到自豪',
      explanationEn:'Being proud means feeling good about what you have achieved.' },
    { id:6, type:'VCI', subtest:'词汇', subtestEn:'Vocabulary', points:3, difficulty:'中',
      question:'"奇妙" 最接近的意思是：',
      questionEn:'What is the closest meaning of "wonderful"?',
      options:['普通','神奇','无聊','讨厌'],
      optionsEn:['Ordinary','Magical / amazing','Boring','Annoying'], correct:1,
      explanation:'奇妙指非常神奇、令人惊奇的',
      explanationEn:'Something wonderful is very magical and makes you feel amazed.' },
    { id:7, type:'VCI', subtest:'常识', subtestEn:'General Knowledge', points:3, difficulty:'易',
      question:'一年有多少个月？',
      questionEn:'How many months are there in a year?',
      options:['10个月','11个月','12个月','13个月'],
      optionsEn:['10 months','11 months','12 months','13 months'], correct:2,
      explanation:'一年共有12个月',
      explanationEn:'There are 12 months in a year.' },
    { id:8, type:'VCI', subtest:'常识', subtestEn:'General Knowledge', points:3, difficulty:'易',
      question:'太阳从哪边升起？',
      questionEn:'Which direction does the sun rise from?',
      options:['西方','南方','北方','东方'],
      optionsEn:['West','South','North','East'], correct:3,
      explanation:'太阳每天从东方升起',
      explanationEn:'The sun rises from the east every day.' },
    { id:9, type:'VCI', subtest:'常识', subtestEn:'General Knowledge', points:3, difficulty:'中',
      question:'一周有几天？',
      questionEn:'How many days are there in a week?',
      options:['5天','6天','7天','8天'],
      optionsEn:['5 days','6 days','7 days','8 days'], correct:2,
      explanation:'一周共有7天',
      explanationEn:'There are 7 days in a week.' },
    { id:10, type:'VCI', subtest:'常识', subtestEn:'General Knowledge', points:3, difficulty:'中',
      question:'中国的首都是哪个城市？',
      questionEn:'Which city is the capital of China?',
      options:['上海','广州','北京','深圳'],
      optionsEn:['Shanghai','Guangzhou','Beijing','Shenzhen'], correct:2,
      explanation:'中国的首都是北京',
      explanationEn:'The capital of China is Beijing.' },

    // ============ PRI 知觉推理 (8题) ============
    { id:11, type:'PRI', subtest:'矩阵推理', subtestEn:'Matrix Reasoning', points:4, difficulty:'中',
      question:'观察图形规律：●○●○●○？ 问号处应该是什么？',
      questionEn:'Look at the pattern: ●○●○●○? What should go in the blank?',
      options:['●','○','●○','○●'],
      optionsEn:['●','○','●○','○●'], correct:0,
      explanation:'规律为●和○交替出现，下一个是●',
      explanationEn:'The pattern alternates between ● and ○, so the next one is ●.' },
    { id:12, type:'PRI', subtest:'矩阵推理', subtestEn:'Matrix Reasoning', points:3, difficulty:'易',
      question:'观察序列：△□△□□△□□□？ 问号处应该是什么？',
      questionEn:'Look at this sequence: △□△□□△□□□? What should go in the blank?',
      options:['△','□','△□','□□'],
      optionsEn:['△','□','△□','□□'], correct:0,
      explanation:'规律为△后□数量递增：△□、△□□、△□□□... 下一个是△',
      explanationEn:'The pattern is △ followed by more □\'s each time: △□, △□□, △□□□... Next is △.' },
    { id:13, type:'PRI', subtest:'矩阵推理', subtestEn:'Matrix Reasoning', points:4, difficulty:'中',
      question:'下面缺少哪个数字？\n2, 4, 6, ?, 10, 12',
      questionEn:'Which number is missing below?\n2, 4, 6, ?, 10, 12',
      options:['5','7','8','9'],
      optionsEn:['5','7','8','9'], correct:2,
      explanation:'每次增加2：2,4,6,8,10,12',
      explanationEn:'Add 2 each time: 2, 4, 6, 8, 10, 12.' },
    { id:14, type:'PRI', subtest:'矩阵推理', subtestEn:'Matrix Reasoning', points:5, difficulty:'难',
      question:'观察下面的数字金字塔规律：\n第1行：1\n第2行：1+2=3\n第3行：1+2+3=6\n第4行：1+2+3+4=?\n第4行的答案是多少？',
      questionEn:'Look at this number pyramid pattern:\nRow 1: 1\nRow 2: 1+2=3\nRow 3: 1+2+3=6\nRow 4: 1+2+3+4=?\nWhat is the answer for Row 4?',
      options:['8','9','10','12'],
      optionsEn:['8','9','10','12'], correct:2,
      explanation:'1+2+3+4=10',
      explanationEn:'1+2+3+4=10' },
    { id:15, type:'PRI', subtest:'分类', subtestEn:'Classification', points:3, difficulty:'易',
      question:'找出与其它三个不同类的一项：',
      questionEn:'Find the one that does NOT belong with the others:',
      options:['苹果','香蕉','桌子','橙子'],
      optionsEn:['Apple','Banana','Table','Orange'], correct:2,
      explanation:'苹果、香蕉、橙子都是水果，桌子是家具',
      explanationEn:'Apple, banana, and orange are all fruits. A table is furniture.' },
    { id:16, type:'PRI', subtest:'分类', subtestEn:'Classification', points:3, difficulty:'中',
      question:'找出与其它三个不同类的一项：',
      questionEn:'Find the one that does NOT belong with the others:',
      options:['红色','蓝色','三角形','绿色'],
      optionsEn:['Red','Blue','Triangle','Green'], correct:2,
      explanation:'红色、蓝色、绿色都是颜色，三角形是形状',
      explanationEn:'Red, blue, and green are all colors. A triangle is a shape.' },
    { id:17, type:'PRI', subtest:'类比', subtestEn:'Analogies', points:4, difficulty:'中',
      question:'手 : 手套 :: 脚 : ？\n（"手"对应"手套"，那么"脚"对应什么？）',
      questionEn:'Hand : Glove :: Foot : ?\n(Hand goes with glove, so what goes with foot?)',
      options:['袜子','鞋子','裤子','帽子'],
      optionsEn:['Socks','Shoes','Pants','Hat'], correct:1,
      explanation:'手戴手套，脚穿鞋子，功能对应',
      explanationEn:'You wear a glove on your hand, and you wear a shoe on your foot — they match in the same way.' },
    { id:18, type:'PRI', subtest:'类比', subtestEn:'Analogies', points:3, difficulty:'易',
      question:'小鸟 : 翅膀 :: 鱼 : ？\n（"小鸟"用"翅膀"飞，那么"鱼"用什么游？）',
      questionEn:'Bird : Wings :: Fish : ?\n(A bird uses wings to fly, so what does a fish use to swim?)',
      options:['鳍','尾巴','鳞片','嘴'],
      optionsEn:['Fins','Tail','Scales','Mouth'], correct:0,
      explanation:'鱼用鳍游泳，就像小鸟用翅膀飞翔',
      explanationEn:'A fish swims with its fins, just like a bird flies with its wings.' },

    // ============ WMI 工作记忆 (7题) ============
    { id:19, type:'WMI', subtest:'数字倒序', subtestEn:'Digit Span Backward', points:3, difficulty:'中',
      question:'请看这组数字：3, 7, 1, 8。以下哪项是它的倒序？',
      questionEn:'Look at these numbers: 3, 7, 1, 8. Which one is the reverse order?',
      options:['8,1,7,3','3,7,1,8','8,3,1,7','1,7,3,8'],
      optionsEn:['8,1,7,3','3,7,1,8','8,3,1,7','1,7,3,8'], correct:0,
      explanation:'从后往前依次为8→1→7→3',
      explanationEn:'Reading from the end to the beginning: 8, 1, 7, 3.' },
    { id:20, type:'WMI', subtest:'数字排序', subtestEn:'Number Ordering', points:3, difficulty:'中',
      question:'将以下数字从小到大排列：5, 2, 8, 3, 6。排列后的第三位是？',
      questionEn:'Arrange these numbers from smallest to largest: 5, 2, 8, 3, 6. What is the third number?',
      options:['3','5','6','8'],
      optionsEn:['3','5','6','8'], correct:1,
      explanation:'排序后为2,3,5,6,8，第三位是5',
      explanationEn:'Put in order: 2, 3, 5, 6, 8. The third one is 5.' },
    { id:21, type:'WMI', subtest:'数字推理', subtestEn:'Number Reasoning', points:3, difficulty:'易',
      question:'数字序列 5, 10, 15, ?, 25 中问号处应填入什么？',
      questionEn:'In the number sequence 5, 10, 15, ?, 25, what number should fill the blank?',
      options:['16','18','20','22'],
      optionsEn:['16','18','20','22'], correct:2,
      explanation:'每次加5：5,10,15,20,25',
      explanationEn:'Add 5 each time: 5, 10, 15, 20, 25.' },
    { id:22, type:'WMI', subtest:'算术', subtestEn:'Arithmetic', points:3, difficulty:'易',
      question:'小明有8颗糖，吃了3颗，还剩几颗？',
      questionEn:'Xiao Ming has 8 candies. He eats 3. How many are left?',
      options:['3颗','4颗','5颗','6颗'],
      optionsEn:['3','4','5','6'], correct:2,
      explanation:'8−3=5',
      explanationEn:'8 minus 3 equals 5.' },
    { id:23, type:'WMI', subtest:'算术', subtestEn:'Arithmetic', points:4, difficulty:'中',
      question:'一箱牛奶有12盒，每天喝2盒，可以喝几天？',
      questionEn:'A box has 12 cartons of milk. If you drink 2 cartons each day, how many days will it last?',
      options:['4天','5天','6天','7天'],
      optionsEn:['4 days','5 days','6 days','7 days'], correct:2,
      explanation:'12÷2=6',
      explanationEn:'12 divided by 2 equals 6.' },
    { id:24, type:'WMI', subtest:'算术', subtestEn:'Arithmetic', points:4, difficulty:'中',
      question:'妈妈买了3斤苹果，每斤4元，一共花了多少元？',
      questionEn:'Mom bought 3 jin of apples. Each jin costs 4 yuan. How much did she spend in total?',
      options:['7元','10元','12元','14元'],
      optionsEn:['7 yuan','10 yuan','12 yuan','14 yuan'], correct:2,
      explanation:'3×4=12',
      explanationEn:'3 times 4 equals 12.' },
    { id:25, type:'WMI', subtest:'算术', subtestEn:'Arithmetic', points:5, difficulty:'难',
      question:'一个班级有30个同学，分成5组做游戏，每组人数相同。每组有几个人？',
      questionEn:'A class has 30 students. They are divided into 5 equal groups to play a game. How many students are in each group?',
      options:['4个','5个','6个','7个'],
      optionsEn:['4','5','6','7'], correct:2,
      explanation:'30÷5=6',
      explanationEn:'30 divided by 5 equals 6.' },

    // ============ PSI 加工速度 (5题) ============
    { id:26, type:'PSI', subtest:'快速比较', subtestEn:'Quick Comparison', points:3, difficulty:'易',
      question:'以下两组数字是否完全相同？\n5842　和　5842',
      questionEn:'Are these two sets of numbers exactly the same?\n5842 and 5842',
      options:['完全相同','不相同','不能确定','没有关系'],
      optionsEn:['Exactly the same','Not the same','Cannot tell','No relation'], correct:0,
      explanation:'两组数字都是5842',
      explanationEn:'Both sets of numbers are 5842.' },
    { id:27, type:'PSI', subtest:'快速计数', subtestEn:'Quick Counting', points:3, difficulty:'中',
      question:'单词"BANANA"中有几个字母"A"？',
      questionEn:'How many letter "A"s are in the word "BANANA"?',
      options:['2个','3个','4个','5个'],
      optionsEn:['2','3','4','5'], correct:1,
      explanation:'B-A-N-A-N-A，字母A出现3次',
      explanationEn:'B-A-N-A-N-A — the letter A appears 3 times.' },
    { id:28, type:'PSI', subtest:'快速比较', subtestEn:'Quick Comparison', points:3, difficulty:'易',
      question:'数字539和593之间的关系是：',
      questionEn:'What is the relationship between the numbers 539 and 593?',
      options:['完全相同','数字相同顺序不同','完全不同','和相等'],
      optionsEn:['Exactly the same','Same digits, different order','Completely different','Their sums are equal'], correct:1,
      explanation:'两个数字都由5,3,9组成，但顺序不同',
      explanationEn:'Both numbers are made up of 5, 3, and 9, but in a different order.' },
    { id:29, type:'PSI', subtest:'快速计数', subtestEn:'Quick Counting', points:3, difficulty:'易',
      question:'"GOOD"中有几个字母"O"？',
      questionEn:'How many letter "O"s are in "GOOD"?',
      options:['1个','2个','3个','4个'],
      optionsEn:['1','2','3','4'], correct:1,
      explanation:'G-O-O-D，字母O出现2次',
      explanationEn:'G-O-O-D — the letter O appears 2 times.' },
    { id:30, type:'PSI', subtest:'快速扫描', subtestEn:'Quick Scanning', points:3, difficulty:'中',
      question:'下面数字中数字5出现了几次？\n5, 2, 5, 8, 5, 3, 5, 1',
      questionEn:'How many times does the number 5 appear below?\n5, 2, 5, 8, 5, 3, 5, 1',
      options:['2次','3次','4次','5次'],
      optionsEn:['2 times','3 times','4 times','5 times'], correct:2,
      explanation:'数字5出现在第1,3,5,7位，共4次',
      explanationEn:'The number 5 is at positions 1, 3, 5, and 7 — 4 times in total.' }
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
    if (iq >= 130) return '孩子的智力水平非常优秀，认知能力超越同龄人，建议提供更有挑战性的学习内容。';
    if (iq >= 120) return '孩子的智力水平优秀，学习能力强，在学校的表现通常会比较突出。';
    if (iq >= 110) return '孩子的智力水平中上，认知功能良好，有不错的潜力。';
    if (iq >= 90) return '孩子的智力水平处于正常范围，各方面发展均衡。';
    if (iq >= 80) return '孩子的智力水平中下，某些方面可能需要额外的帮助和鼓励。';
    return '测试分数偏低。儿童智力发展有快有慢，建议在轻松环境下再试。';
  },
  getDescEn: function(iq) {
    if (iq >= 130) return 'Your child has a very superior level of intelligence, with thinking skills far beyond others their age. Try giving them more challenging things to learn.';
    if (iq >= 120) return 'Your child has a superior level of intelligence and learns quickly. They will often do very well in school.';
    if (iq >= 110) return 'Your child has a high average level of intelligence. Their thinking skills are good and they have nice potential to grow.';
    if (iq >= 90) return 'Your child\'s intelligence is in the average range, with balanced growth across different areas.';
    if (iq >= 80) return 'Your child\'s intelligence is in the low average range. Some areas may need a little extra help and encouragement.';
    return 'The test score is on the lower side. Every child grows at their own pace. We recommend trying again in a relaxed, comfortable setting.';
  },
  getProfile: function(result) {
    const s = result.indexScores;
    const entries = Object.entries(s).sort((a,b) => b[1]-a[1]);
    const h=entries[0], l=entries[entries.length-1];
    const gap = h[1]-l[1];
    const hN=this.indexConfig[h[0]].label, lN=this.indexConfig[l[0]].label;
    if (gap < 10) return '各项认知能力发展均衡，没有明显的优势和弱点。';
    if (gap < 20) return hN + '略优于' + lN + '，在正常范围内。';
    return hN + '是孩子的优势（' + h[1] + '分），' + lN + '相对较弱（' + l[1] + '分），相差' + gap + '分。';
  },
  getProfileEn: function(result) {
    const s = result.indexScores;
    const entries = Object.entries(s).sort((a,b) => b[1]-a[1]);
    const h=entries[0], l=entries[entries.length-1];
    const gap = h[1]-l[1];
    const hN=this.indexConfig[h[0]].labelEn, lN=this.indexConfig[l[0]].labelEn;
    if (gap < 10) return 'All cognitive abilities are developing evenly, with no clear strengths or weaknesses.';
    if (gap < 20) return hN + ' is slightly stronger than ' + lN + ', which is within the normal range.';
    return hN + ' is your child\'s strength (' + h[1] + ' points), while ' + lN + ' is relatively weaker (' + l[1] + ' points), a difference of ' + gap + ' points.';
  },
  getRecommendation: function(result) {
    const s = result.indexScores;
    const sorted = Object.entries(s).sort((a,b) => a[1]-b[1]);
    const w = sorted[0][0], min = sorted[0][1];
    if (result.fsiq >= 130) return '建议为孩子提供有挑战性的学习内容，如奥数、编程、科学实验等，保持其学习热情。';
    if (min < 90) {
      const recs = {
        WMI:'可以尝试记忆游戏、复述故事、心算练习来提升工作记忆能力。',
        PSI:'可以尝试限时拼图、找不同游戏、快速反应练习来提升加工速度。',
        VCI:'可以鼓励多阅读、讲故事、玩词语接龙等游戏来提升语言能力。',
        PRI:'可以多玩拼图、乐高、积木、七巧板等玩具来锻炼空间推理能力。'
      };
      return this.indexConfig[w].label + '相对偏弱。' + (recs[w] || '建议通过相关游戏和练习来加强。');
    }
    return '建议保持阅读和思考的习惯，多接触不同类型的游戏和学习活动。';
  },
  getRecommendationEn: function(result) {
    const s = result.indexScores;
    const sorted = Object.entries(s).sort((a,b) => a[1]-b[1]);
    const w = sorted[0][0], min = sorted[0][1];
    if (result.fsiq >= 130) return 'Try giving your child challenging learning materials like math puzzles, coding, and science experiments to keep their passion for learning alive.';
    if (min < 90) {
      const recs = {
        WMI:'Try memory games, retelling stories, and mental math exercises to strengthen working memory.',
        PSI:'Try timed puzzles, spot-the-difference games, and quick reaction exercises to improve processing speed.',
        VCI:'Encourage more reading, storytelling, and word games to build language skills.',
        PRI:'Try puzzles, LEGO, building blocks, and tangrams to develop spatial reasoning skills.'
      };
      return this.indexConfig[w].labelEn + ' is relatively weaker. ' + (recs[w] || 'Try related games and exercises to strengthen this area.');
    }
    return 'Keep up good reading and thinking habits, and try out different kinds of games and learning activities.';
  }
};
