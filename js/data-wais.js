// ============================================================
// 韦氏成人智力测验 (WAIS) - 30题
// 参考 WAIS-IV 架构
// ============================================================
const TEST_WAIS = {
  id: 'wais',
  name: '韦氏成人智力测验',
  icon: '🧑',
  color: '#667eea',
  timeLimit: 25 * 60,
  ringMax: 150,
  hasIndexes: true,
  indexTitle: '韦氏四指数',
  indexConfig: {
    VCI: { label: '言语理解', short: 'VCI', color: '#667eea' },
    PRI: { label: '知觉推理', short: 'PRI', color: '#e74c8b' },
    WMI: { label: '工作记忆', short: 'WMI', color: '#27ae60' },
    PSI: { label: '加工速度', short: 'PSI', color: '#e67e22' }
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
    { id:1, type:'VCI', subtest:'类同', points:3, difficulty:'易',
      question:'"苹果" 和 "香蕉" 的共同点是：',
      options:['都是红色','都是水果','都很甜','都长在树上'], correct:1,
      explanation:'苹果和香蕉都属于水果类别' },
    { id:2, type:'VCI', subtest:'类同', points:3, difficulty:'易',
      question:'"桌子" 和 "椅子" 的共同点是：',
      options:['都是木制的','都有四条腿','都是家具','都在室内使用'], correct:2,
      explanation:'桌子和椅子都属于家具类别' },
    { id:3, type:'VCI', subtest:'类同', points:4, difficulty:'中',
      question:'"数字" 与 "字母" 的共同点是：',
      options:['都可以计算','都是表示信息的符号','都有26个','都起源于拉丁文'], correct:1,
      explanation:'数字和字母都是用于记录和传递信息的符号系统' },
    { id:4, type:'VCI', subtest:'词汇', points:3, difficulty:'易',
      question:'"深邃" 最接近的意思是：',
      options:['浅显','幽深','明亮','狭窄'], correct:1,
      explanation:'深邃指深而幽远，与"幽深"同义' },
    { id:5, type:'VCI', subtest:'词汇', points:3, difficulty:'易',
      question:'"踌躇" 最接近的意思是：',
      options:['果断','犹豫','快速','勇敢'], correct:1,
      explanation:'踌躇意为犹豫不决、拿不定主意' },
    { id:6, type:'VCI', subtest:'词汇', points:3, difficulty:'中',
      question:'"荒谬" 最接近的意思是：',
      options:['合理','可笑','严肃','复杂'], correct:1,
      explanation:'荒谬指极端错误、非常不合情理' },
    { id:7, type:'VCI', subtest:'常识', points:3, difficulty:'中',
      question:'一年中哪个月份有 28 天？',
      options:['只有二月','每个月都有','二月和十二月','只有平年的二月'], correct:1,
      explanation:'每个月都有至少28天' },
    { id:8, type:'VCI', subtest:'常识', points:3, difficulty:'易',
      question:'地球的天然卫星是：',
      options:['太阳','月球','火星','金星'], correct:1,
      explanation:'月球是地球唯一的天然卫星' },
    { id:9, type:'VCI', subtest:'常识', points:3, difficulty:'易',
      question:'正常成年人的安静状态体温约为：',
      options:['35°C','37°C','39°C','41°C'], correct:1,
      explanation:'正常人体体温约为36°C~37°C' },
    { id:10, type:'VCI', subtest:'常识', points:3, difficulty:'易',
      question:'水在标准大气压下的沸点是：',
      options:['80°C','90°C','100°C','110°C'], correct:2,
      explanation:'标准大气压下水的沸点为100°C' },

    // ============ PRI 知觉推理 (8题) ============
    { id:11, type:'PRI', subtest:'矩阵推理', points:4, difficulty:'中',
      question:'观察图形规律：●○●○○●○○○？ 问号处应该是什么？',
      options:['●','○','●○','○○'], correct:0,
      explanation:'规律为●、○、●、○○、●、○○○、●... 即黑圆后白圆数量递增' },
    { id:12, type:'PRI', subtest:'矩阵推理', points:3, difficulty:'易',
      question:'观察序列：○□△○□△？ 问号处应该是什么？',
      options:['○','□','△','◇'], correct:0,
      explanation:'序列以○□△三个为一组循环' },
    { id:13, type:'PRI', subtest:'矩阵推理', points:4, difficulty:'中',
      question:'观察序列：■□■■□■■■□？ 问号处应该是什么？',
      options:['■','□','■■','■■■'], correct:0,
      explanation:'规律为■□、■■□、■■■□... 黑方数量递增' },
    { id:14, type:'PRI', subtest:'矩阵推理', points:5, difficulty:'难',
      question:'数列 1, 11, 21, 1211, ? 的下一个数字是？',
      extra:'提示：外观数列（每个数描述前一个数的构成）',
      options:['111221','112211','122111','111211'], correct:0,
      explanation:'1→"1个1"→11→"2个1"→21→"1个2,1个1"→1211→"1个1,1个2,2个1"→111221' },
    { id:15, type:'PRI', subtest:'分类', points:3, difficulty:'易',
      question:'找出与其它三个不同类的一项：',
      options:['正方形','圆形','等边三角形','长方形'], correct:1,
      explanation:'圆形没有角和边' },
    { id:16, type:'PRI', subtest:'分类', points:3, difficulty:'易',
      question:'找出与其它三个不同类的一项：',
      options:['三角形','正方形','五边形','球体'], correct:3,
      explanation:'三角形、正方形、五边形都是平面多边形，球体是立体图形' },
    { id:17, type:'PRI', subtest:'类比', points:4, difficulty:'中',
      question:'正方形 对于 长方形，相当于 等边三角形 对于：',
      extra:'提示：考虑"特殊"与"一般"的关系',
      options:['直角三角形','等腰三角形','三角形','等腰直角三角形'], correct:1,
      explanation:'正方形是特殊的长方形，等边三角形是特殊的等腰三角形' },
    { id:18, type:'PRI', subtest:'符号推理', points:2, difficulty:'易',
      question:'如果 ▲ = 1，■ = 2，● = 3，那么符号序列 ▲■● 代表什么？',
      options:['123','6','▲■●','132'], correct:0,
      explanation:'符号▲■●按顺序对应数字1,2,3' },

    // ============ WMI 工作记忆 (7题) ============
    { id:19, type:'WMI', subtest:'数字倒序', points:3, difficulty:'中',
      question:'请看数字序列：5, 2, 8, 3, 1, 9。以下哪项是它的倒序？',
      options:['9,1,3,8,2,5','9,3,1,8,2,5','9,1,3,2,8,5','5,2,8,3,1,9'], correct:0,
      explanation:'从后往前依次为9→1→3→8→2→5' },
    { id:20, type:'WMI', subtest:'数字排序', points:3, difficulty:'中',
      question:'将以下数字从小到大排列：7, 4, 2, 9, 6。排列后的第三位数字是？',
      options:['4','6','7','9'], correct:1,
      explanation:'排序后为2,4,6,7,9，第三位是6' },
    { id:21, type:'WMI', subtest:'数字推理', points:3, difficulty:'易',
      question:'数字序列 3, 6, 9, ?, 15 中问号处应填入什么？',
      options:['10','11','12','13'], correct:2,
      explanation:'每次增加3：3,6,9,12,15' },
    { id:22, type:'WMI', subtest:'算术', points:3, difficulty:'易',
      question:'小明有12个苹果，给了小红5个，又从小刚那里拿了3个。小明现在有几个苹果？',
      options:['8个','10个','12个','14个'], correct:1,
      explanation:'12−5+3=10' },
    { id:23, type:'WMI', subtest:'算术', points:4, difficulty:'中',
      question:'一本书原价24元，打75折出售。现在售价是多少元？',
      options:['16元','18元','20元','22元'], correct:1,
      explanation:'24×0.75=18' },
    { id:24, type:'WMI', subtest:'算术', points:4, difficulty:'中',
      question:'一个长方形的长是8厘米，宽是5厘米。它的周长是多少厘米？',
      extra:'周长=2×(长+宽)',
      options:['26厘米','28厘米','30厘米','40厘米'], correct:0,
      explanation:'2×(8+5)=26' },
    { id:25, type:'WMI', subtest:'算术', points:5, difficulty:'难',
      question:'甲、乙两人合作完成一项工作需要6天。甲单独工作需要10天。乙单独工作需要几天？',
      extra:'提示：合作效率=各人效率之和',
      options:['12天','14天','15天','18天'], correct:2,
      explanation:'1/10+1/x=1/6→1/x=1/6−1/10=1/15→x=15' },

    // ============ PSI 加工速度 (5题) ============
    { id:26, type:'PSI', subtest:'快速比较', points:3, difficulty:'易',
      question:'以下两组数字是否完全相同？\n58293714　和　58293714',
      options:['完全相同','不相同','无法判断','长度不同'], correct:0,
      explanation:'两组数字完全一致' },
    { id:27, type:'PSI', subtest:'快速计数', points:3, difficulty:'中',
      question:'以下单词中出现了几个字母"A"（不区分大小写）？\nABRACADABRA',
      options:['3个','4个','5个','6个'], correct:2,
      explanation:'A-B-R-A-C-A-D-A-B-R-A，字母A出现5次' },
    { id:28, type:'PSI', subtest:'快速比较', points:3, difficulty:'易',
      question:'数字367和637之间的关系是：',
      options:['完全相同','数字相同顺序不同','完全不同','和相等'], correct:1,
      explanation:'两个数字都由3,6,7组成，排列顺序不同' },
    { id:29, type:'PSI', subtest:'快速计数', points:3, difficulty:'易',
      question:'单词"BANANA"中出现了几个字母"N"？',
      options:['1个','2个','3个','4个'], correct:1,
      explanation:'B-A-N-A-N-A，字母N出现2次' },
    { id:30, type:'PSI', subtest:'快速扫描', points:3, difficulty:'中',
      question:'以下数字序列中，数字7共出现了几次？\n3,7,1,7,9,4,7,2,8,7,0,7',
      options:['4次','5次','6次','7次'], correct:1,
      explanation:'数字7出现在第2,4,7,10,12位，共5次' }
  ],

  getLabel: function(iq) {
    if (iq >= 130) return '非常优秀'; if (iq >= 120) return '优秀';
    if (iq >= 110) return '中上'; if (iq >= 90) return '中等';
    if (iq >= 80) return '中下'; if (iq >= 70) return '临界';
    return '待提升';
  },
  getDesc: function(iq) {
    if (iq >= 130) return '你的总体智力处于非常优秀的水平（人群中约占2%），认知能力全面出色。';
    if (iq >= 120) return '你的智力水平高于大部分人群（约占10%），具备优秀的学习和问题解决能力。';
    if (iq >= 110) return '你的智力水平处于中上水平，认知功能良好。';
    if (iq >= 90) return '你的智力水平处于正常范围，各项认知能力均衡。';
    if (iq >= 80) return '你的智力水平中下，部分领域有提升空间。';
    return '测试分数偏低，可能受状态影响，建议休息后重测。';
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
  }
};
