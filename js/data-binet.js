// ============================================================
// 斯坦福-比奈智力测试 (SB-5) - 30题
// 参考 Stanford-Binet 5th Edition 架构
// ============================================================
const TEST_BINET = {
  id: 'binet',
  name: '斯坦福-比奈智力测试',
  icon: '📐',
  color: '#f093fb',
  timeLimit: 25 * 60,
  ringMax: 150,
  hasIndexes: true,
  indexTitle: '比奈五因子',
  indexConfig: {
    FR: { label: '流体推理', short: 'FR', color: '#f093fb' },
    KN: { label: '知识', short: 'KN', color: '#4facfe' },
    QR: { label: '数量推理', short: 'QR', color: '#f39c12' },
    VS: { label: '视觉空间', short: 'VS', color: '#27ae60' },
    WM: { label: '工作记忆', short: 'WM', color: '#e74c8b' }
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
    { id:1, type:'FR', subtest:'演绎推理', points:3, difficulty:'易',
      question:'所有鸟都有翅膀。企鹅是鸟。所以以下哪项是正确的？',
      options:['企鹅不会飞','企鹅有翅膀','所有有翅膀的都是鸟','企鹅是哺乳动物'], correct:1,
      explanation:'根据三段论：所有鸟都有翅膀→企鹅是鸟→企鹅有翅膀' },
    { id:2, type:'FR', subtest:'规律发现', points:4, difficulty:'中',
      question:'●△●△△●△△△？ 问号处应该是什么？',
      options:['●','△','●△','△△'], correct:0,
      explanation:'规律为●△、●△△、●△△△... 即黑圆后三角数量递增，下一个是●' },
    { id:3, type:'FR', subtest:'演绎推理', points:4, difficulty:'中',
      question:'如果 A > B 且 B > C，那么以下哪项必然正确？',
      options:['A < C','A = C','A > C','无法确定'], correct:2,
      explanation:'若A大于B且B大于C，则A必然大于C' },
    { id:4, type:'FR', subtest:'类比推理', points:4, difficulty:'中',
      question:'水滴 : 大海 :: 沙粒 : ？',
      options:['沙漠','石头','泥土','山峰'], correct:0,
      explanation:'水滴汇聚成大海，沙粒汇聚成沙漠' },
    { id:5, type:'FR', subtest:'分类', points:3, difficulty:'易',
      question:'以下哪个与其他三个不同类？',
      options:['石头','砖块','木头','水'], correct:3,
      explanation:'石头、砖块、木头都是固体，水是液体' },
    { id:6, type:'FR', subtest:'数列', points:5, difficulty:'难',
      question:'数列 2, 4, 8, 16, ? 的下一个数字是？',
      options:['18','24','30','32'], correct:3,
      explanation:'规律为乘以2：2×2=4, 4×2=8, 8×2=16, 16×2=32' },

    // ============ KN 知识 (6题) ============
    { id:7, type:'KN', subtest:'常识', points:3, difficulty:'易',
      question:'地球围绕什么运转？',
      options:['月球','太阳','自身','银河'], correct:1,
      explanation:'地球围绕太阳公转' },
    { id:8, type:'KN', subtest:'常识', points:3, difficulty:'易',
      question:'以下哪个不是国家？',
      options:['法国','巴黎','德国','日本'], correct:1,
      explanation:'巴黎是法国的一个城市，不是国家' },
    { id:9, type:'KN', subtest:'词汇', points:4, difficulty:'中',
      question:'"繁荣" 的反义词是：',
      options:['兴盛','发达','衰落','热闹'], correct:2,
      explanation:'繁荣指兴旺发达，反义词是衰落' },
    { id:10, type:'KN', subtest:'常识', points:4, difficulty:'中',
      question:'光合作用需要的主要能量来自：',
      options:['阳光','土壤','氧气','氮气'], correct:0,
      explanation:'光合作用是植物利用阳光将二氧化碳和水转化为有机物的过程' },
    { id:11, type:'KN', subtest:'常识', points:4, difficulty:'中',
      question:'电灯的主要发明者是：',
      options:['牛顿','爱迪生','爱因斯坦','瓦特'], correct:1,
      explanation:'爱迪生发明了实用电灯泡' },
    { id:12, type:'KN', subtest:'常识', points:5, difficulty:'难',
      question:'DNA 的主要功能是：',
      options:['提供能量','储存遗传信息','抵抗病毒','运输氧气'], correct:1,
      explanation:'DNA（脱氧核糖核酸）是生物遗传信息的载体' },

    // ============ QR 数量推理 (6题) ============
    { id:13, type:'QR', subtest:'百分比', points:3, difficulty:'易',
      question:'20 的 25% 是多少？',
      options:['4','5','8','10'], correct:1,
      explanation:'20 × 25% = 20 × 0.25 = 5' },
    { id:14, type:'QR', subtest:'数列', points:4, difficulty:'中',
      question:'数列 3, 6, 11, 18, ? 的下一个数字是？',
      extra:'提示：相邻两项的差值有什么规律？',
      options:['23','25','27','29'], correct:2,
      explanation:'差值递增：+3,+5,+7,+9 → 18+9=27' },
    { id:15, type:'QR', subtest:'方程', points:4, difficulty:'中',
      question:'如果 x + 5 = 12，那么 x 等于多少？',
      options:['5','6','7','8'], correct:2,
      explanation:'x+5=12 → x=12-5=7' },
    { id:16, type:'QR', subtest:'几何', points:4, difficulty:'中',
      question:'一个正方形的周长是 40 厘米，它的边长是多少厘米？',
      options:['8','9','10','12'], correct:2,
      explanation:'正方形有四条相等的边：40÷4=10' },
    { id:17, type:'QR', subtest:'比例', points:5, difficulty:'难',
      question:'如果甲:乙=2:3，乙:丙=4:5，那么甲:丙是多少？',
      extra:'提示：找到甲、乙、丙的公共比例',
      options:['2:5','3:4','8:15','15:8'], correct:2,
      explanation:'甲:乙=2:3=8:12，乙:丙=4:5=12:15 → 甲:丙=8:15' },
    { id:18, type:'QR', subtest:'概率', points:5, difficulty:'难',
      question:'抛一枚质地均匀的硬币两次，两次都正面朝上的概率是：',
      options:['1/2','1/3','1/4','1/6'], correct:2,
      explanation:'可能结果：正正、正反、反正、反反，都正面为1/4' },

    // ============ VS 视觉空间 (6题) ============
    { id:19, type:'VS', subtest:'空间认知', points:3, difficulty:'易',
      question:'一个立方体（正方体）有多少个顶点（角）？',
      options:['4个','6个','8个','12个'], correct:2,
      explanation:'立方体有8个顶点、6个面和12条棱' },
    { id:20, type:'VS', subtest:'图形规律', points:3, difficulty:'易',
      question:'●▲●▲●▲？ 问号处应该是什么？',
      options:['●','▲','●▲','▲●'], correct:0,
      explanation:'●和▲交替出现，下一个是●' },
    { id:21, type:'VS', subtest:'几何', points:4, difficulty:'中',
      question:'一个三角形有3条边，一个四边形有4条边。一个六边形有几条边？',
      options:['4条','5条','6条','8条'], correct:2,
      explanation:'六边形(Hexagon)有6条边' },
    { id:22, type:'VS', subtest:'对称', points:4, difficulty:'中',
      question:'以下哪个图形有对称轴？',
      options:['任意平行四边形','等腰三角形','不等边三角形','任意四边形'], correct:1,
      explanation:'等腰三角形有对称轴（中线），平行四边形没有（菱形除外）' },
    { id:23, type:'VS', subtest:'空间透视', points:5, difficulty:'难',
      question:'从正上方俯视一个圆柱体，看到的形状是：',
      options:['长方形','三角形','圆形','正方形'], correct:2,
      explanation:'从正上方看圆柱体，看到的是它的横截面——圆形' },
    { id:24, type:'VS', subtest:'空间操作', points:5, difficulty:'难',
      question:'一个正方形被沿对角线切一刀，得到两个：',
      options:['长方形','直角三角形','正方形','等边三角形'], correct:1,
      explanation:'沿对角线将正方形切开得到两个等腰直角三角形' },

    // ============ WM 工作记忆 (6题) ============
    { id:25, type:'WM', subtest:'数字倒序', points:3, difficulty:'中',
      question:'请看数字序列：6, 3, 9, 1。它的倒序是什么？',
      options:['1,9,3,6','6,3,9,1','1,3,9,6','9,3,6,1'], correct:0,
      explanation:'从后往前依次为1→9→3→6' },
    { id:26, type:'WM', subtest:'数字排序', points:3, difficulty:'中',
      question:'将以下数字从小到大排列：4, 7, 2, 9, 5。排列后的第三位是？',
      options:['4','5','7','9'], correct:1,
      explanation:'排序后为2,4,5,7,9，第三位是5' },
    { id:27, type:'WM', subtest:'数列记忆', points:4, difficulty:'中',
      question:'数列 1, 4, 9, 16, ? 的下一个数字是？',
      options:['20','23','25','30'], correct:2,
      explanation:'平方数列：1²=1, 2²=4, 3²=9, 4²=16, 5²=25' },
    { id:28, type:'WM', subtest:'心算', points:3, difficulty:'易',
      question:'小明买了一个3元的笔记本，付了10元，应找回多少元？',
      options:['5元','6元','7元','8元'], correct:2,
      explanation:'10−3=7' },
    { id:29, type:'WM', subtest:'运算', points:5, difficulty:'中',
      question:'8 + 4 × 2 = ？',
      options:['16','24','20','12'], correct:0,
      explanation:'先乘后加：4×2=8, 8+8=16' },
    { id:30, type:'WM', subtest:'注意力', points:5, difficulty:'难',
      question:'从1写到10，数字"1"一共出现了几次？',
      options:['1次','2次','3次','10次'], correct:1,
      explanation:'数字1出现在"1"和"10"中，共2次' }
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
  }
};
