// 学习机及移动学习终端三方对比研究 Empirical Dataset (2024-2026)

export interface DimensionInfo {
  id: string; // e.g., "D1"
  name: string; // e.g., "教学内容与资源"
  description: string;
  focusPointStandard: string; // 国标关注重点
  focusPointOfficial: string; // 官方宣传重点
  focusPointUser: string; // 用户反馈痛点
}

export const dimensions: DimensionInfo[] = [
  {
    id: "D1",
    name: "教学内容与资源",
    description: "涉及课本同步、AI名师精讲、各学段（学前、小学、初中、高中）资源覆盖率、题库质量及同步练。本维度是各方核心高频互动区。",
    focusPointStandard: "要求多学段覆盖度、资源合法合规、内容防错审校机制保障。",
    focusPointOfficial: "大肆宣扬‘学而思独家秘籍’、同步名师原班人马、全学科独家优势、海量免费题库等。",
    focusPointUser: "部分高中资源欠缺、初高中视频画质较旧、更新频次慢、一些试卷题库要二次收费引发吐槽。"
  },
  {
    id: "D2",
    name: "教学信息交互",
    description: "教学互动设备反馈、语音助手AI答疑、手写输入、屏幕多屏联动与学习进程反馈效率。",
    focusPointStandard: "重点规范交互界面响应时长、AI问答安全提示与错题智能分类归档。",
    focusPointOfficial: "推崇‘AI精准学’、智能诊断报告、‘哪里不会点哪里’、AR伴读机器人和AI语音伴学体验。",
    focusPointUser: "指读或语音识别率低，小孩子口齿不清时无法精确应答，多轮对话常陷入复读逻辑。"
  },
  {
    id: "D3",
    name: "教学过程管理",
    description: "护眼锁屏、学习时长限额、防沉迷锁、家长端远程伴学App控制、内容过滤机制。",
    focusPointStandard: "规范日常及作息期护眼强制休息时长、家长一键锁死和后台进程限制比例。",
    focusPointOfficial: "强调‘省心伴学’、家长手机一键管理、坐姿智能检测、纯净无游戏系统的守护设计。",
    focusPointUser: "部分坐姿检测过于敏感导致频繁警报，或者家长端小程序在后台存在较陡峭的断联、定位迟缓。"
  },
  {
    id: "D4",
    name: "用户个人信息保护",
    description: "人脸声纹特征脱敏、摄像头抓拍分析合规性、学情报告向第三方泄露风险和非必要权限获取限制。",
    focusPointStandard: "GB/T 规范内严禁擅自上传未成年人生物特征隐私，明示收集清单，权限最小化原则。",
    focusPointOfficial: "近乎失语状态。发布内容极少涉及底层加密或第三方共享条款，视隐私保护为‘既定常识’而不做宣传。",
    focusPointUser: "偶有提及联网后‘必须人脸验证’引发家长个人隐私恐慌，但在电商讨论中占比极低，属隐形盲区。"
  },
  {
    id: "D5",
    name: "视听健康",
    description: "类纸护眼屏、AG防眩光、智能调光、无频闪认证（莱茵双重认证）、光线声级自适应反馈。",
    focusPointStandard: "严格限定蓝光抑制比例、屏幕反射率指标、最大声压阈值防耳机震损。",
    focusPointOfficial: "营销核心：主打‘11层类纸润眼屏’、‘红光造眼’、‘无眩光黑科技’、多重权威防蓝光认证书展示。",
    focusPointUser: "部分用户表示买回去孩子玩久了依然眼睛酸痛，对类纸屏的灰暗显色、反光磨砂质感表示‘亮度不够、费眼’。"
  },
  {
    id: "D6",
    name: "硬件基础能力",
    description: "内存配置、电池容量续航时间、指读支架结构、电磁笔书写阻尼感、整机防摔耐用性及运行流畅度。",
    focusPointStandard: "基础主控芯片耐候性能、续航不低于最低连续工作小时、抗跌落冲击级别规范。",
    focusPointOfficial: "主要对新发旗舰机的高刷屏幕、护眼厚度比、以及附带的阻尼质感手写笔做包装性宣传。",
    focusPointUser: "硬件性价比较低，买完1年即出现电池亏电快、开机卡顿，支架松弛跌落易碎，维修费昂贵。"
  },
  {
    id: "D7",
    name: "售后服务",
    description: "退换货效率、价保时效（降价补偿）、客服响应速度、保修维保条款落地、官方平台履约承诺等。",
    focusPointStandard: "不作具体强制性约束（超出功能定义范畴），由常规消法或合同法覆盖。",
    focusPointOfficial: "极少提及，仅偶尔在‘双11’和开学促销中提及‘终身免收资源费’。”",
    focusPointUser: "第二大痛点集中区！直指‘买完即降价（价格背刺）’、‘售后推诿、屏幕碎裂维修索要上千元’、‘人工客服排队难’、‘退换运费高’。"
  }
];

export interface TriPartyAttentionData {
  dimension: string;
  dimensionId: string;
  standard: number; // 国标文本占比（%）
  official: number; // 官方宣传占比（%）
  user: number;     // 真实用户评论占比（%）
}

export const triPartyAttention: TriPartyAttentionData[] = [
  { dimension: "D1 教学内容与资源", dimensionId: "D1", standard: 55.5, official: 57.5, user: 47.3 },
  { dimension: "D2 教学信息交互", dimensionId: "D2", standard: 19.9, official: 21.9, user: 12.7 },
  { dimension: "D3 教学过程管理", dimensionId: "D3", standard: 5.8, official: 14.7, user: 10.6 },
  { dimension: "D4 个人信息保护", dimensionId: "D4", standard: 3.7, official: 0.3, user: 0.2 },
  { dimension: "D5 视听健康", dimensionId: "D5", standard: 9.9, official: 3.1, user: 13.1 },
  { dimension: "D6 硬件基础能力", dimensionId: "D6", standard: 5.2, official: 1.9, user: 8.8 },
  { dimension: "D7 售后服务", dimensionId: "D7", standard: 0.0, official: 0.6, user: 7.4 }
];

export interface PlatformSentimentData {
  dimension: string;
  dimensionId: string;
  taobao: number; // 淘宝情感得分 [0, 1]
  jd: number;     // 京东情感得分 [0, 1]
  diff: number;   // 差异 (jd - taobao)
}

export const platformSentiment: PlatformSentimentData[] = [
  { dimension: "D1 教学内容与资源", dimensionId: "D1", taobao: 0.96, jd: 0.98, diff: 0.02 },
  { dimension: "D2 教学信息交互", dimensionId: "D2", taobao: 0.96, jd: 0.98, diff: 0.02 },
  { dimension: "D3 教学过程管理", dimensionId: "D3", taobao: 0.97, jd: 0.99, diff: 0.02 },
  { dimension: "D4 个人信息保护", dimensionId: "D4", taobao: 0.77, jd: 0.87, diff: 0.10 },
  { dimension: "D5 视听健康", dimensionId: "D5", taobao: 0.96, jd: 0.98, diff: 0.02 },
  { dimension: "D6 硬件基础能力", dimensionId: "D6", taobao: 0.87, jd: 0.96, diff: 0.09 },
  { dimension: "D7 售后服务", dimensionId: "D7", taobao: 0.69, jd: 0.90, diff: 0.21 }
];

export interface SentimentGapData {
  dimension: string;
  dimensionId: string;
  official: number; // 官方情感分 [0, 1]
  user: number;     // 用户情感分 [0, 1]
  gap: number;      // 错位落差 (official - user)
}

export const officialUserSentimentGap: SentimentGapData[] = [
  { dimension: "D1 教学内容与资源", dimensionId: "D1", official: 0.99, user: 0.96, gap: 0.03 },
  { dimension: "D2 教学信息交互", dimensionId: "D2", official: 0.99, user: 0.97, gap: 0.02 },
  { dimension: "D3 教学过程管理", dimensionId: "D3", official: 0.97, user: 0.97, gap: 0.00 },
  { dimension: "D4 个人信息保护", dimensionId: "D4", official: 1.00, user: 0.79, gap: 0.21 },
  { dimension: "D5 视听健康", dimensionId: "D5", official: 0.99, user: 0.97, gap: 0.02 },
  { dimension: "D6 硬件基础能力", dimensionId: "D6", official: 0.93, user: 0.89, gap: 0.04 },
  { dimension: "D7 售后服务", dimensionId: "D7", official: 1.00, user: 0.73, gap: 0.27 }
];

export interface TopicItem {
  id: number;
  title: string;
  percentage: number;
  keywords: { word: string; weight: number }[];
  dimension: string;
  summary: string;
}

export interface TripleTopicData {
  standard: TopicItem[];
  official: TopicItem[];
  userPositive: TopicItem[];
  userNegative: TopicItem[];
}

export const triPartyTopics: TripleTopicData = {
  standard: [
    {
      id: 0,
      title: "产品基本合规、多学段划分与合法内容审核机制",
      percentage: 35.2,
      keywords: [
        { word: "内容审核", weight: 0.88 },
        { word: "学段", weight: 0.75 },
        { word: "合法合规", weight: 0.68 },
        { word: "安全审查", weight: 0.62 },
        { word: "分级", weight: 0.54 }
      ],
      dimension: "D1 教学内容与资源",
      summary: "规定学习终端必须配置完备的内容三审三校机制，覆盖学龄前至高中学段的课本内容库，并且严禁违法、违规、暴力及倾向不健康的信息进入，在底层数据安全上构筑最高防线。"
    },
    {
      id: 1,
      title: "人脸声纹生物隐私数据本地存储、使用限度规约",
      percentage: 22.4,
      keywords: [
        { word: "个人信息", weight: 0.92 },
        { word: "生物特征", weight: 0.82 },
        { word: "加密存储", weight: 0.79 },
        { word: "摄像头权限", weight: 0.71 },
        { word: "明示同意", weight: 0.65 }
      ],
      dimension: "D4 个人信息保护",
      summary: "规定为了坐姿或AR指读而调用的摄像头、麦克风等。其搜集的人脸图形与声纹数据，必须进行本地设备化脱敏或加密。未经监护人明示同意（多级触发确认），严禁私自上传至第三方服务器。"
    },
    {
      id: 2,
      title: "视听健康、AG防眩光系数与莱茵低蓝光硬件认证标准",
      percentage: 18.1,
      keywords: [
        { word: "屏幕反射率", weight: 0.85 },
        { word: "蓝光抑制", weight: 0.81 },
        { word: "最大声频", weight: 0.76 },
        { word: "防眩光", weight: 0.70 },
        { word: "声压限额", weight: 0.58 }
      ],
      dimension: "D5 视听健康",
      summary: "从多项物理指标规范屏幕反光度，减少暗处阅读对黄斑区的损害。对于附带的耳麦等耳机装置设定了严格的分贝限制阈值，防止高频强声物理性损伤未成年人听力。"
    },
    {
      id: 3,
      title: "多屏互动、手写笔阻尼性能及语音助手交互反馈延迟",
      percentage: 14.3,
      keywords: [
        { word: "交互延迟", weight: 0.79 },
        { word: "手写阻尼", weight: 0.73 },
        { word: "多屏联动", weight: 0.69 },
        { word: "识别率", weight: 0.64 }
      ],
      dimension: "D2 教学信息交互",
      summary: "约束手写笔的灵敏度，减少视觉轨迹和手书之间的位移差，提升高频错题抓取和多场景语音互动的顺畅体验。"
    },
    {
      id: 4,
      title: "防沉迷系统后台强制干预与家长一键接管协议",
      percentage: 10.0,
      keywords: [
        { word: "合理干预", weight: 0.84 },
        { word: "一键锁死", weight: 0.79 },
        { word: "时长限制", weight: 0.74 },
        { word: "进程保活", weight: 0.51 }
      ],
      dimension: "D3 教学过程管理",
      summary: "规定终端操作系统层面不应留给孩子自行卸载或规避防沉迷管控的安全漏洞，家长端小程序应享有最高级别远程挂接控制权限，能在后台实时监控和休眠整机设备。"
    }
  ],
  official: [
    {
      id: 0,
      title: "名师原班人马独家讲解、名校教研秘诀与中高考考点覆盖",
      percentage: 42.1,
      keywords: [
        { word: "学而思独家", weight: 0.94 },
        { word: "清北名师", weight: 0.89 },
        { word: "中考高频", weight: 0.82 },
        { word: "全科同步", weight: 0.78 },
        { word: "真题演练", weight: 0.70 }
      ],
      dimension: "D1 教学内容与资源",
      summary: "企业公关最为浓墨重彩的卖点。在微博硬广和知乎软文中，围绕‘买学习机就是把清北名校名师搬回家’、‘独家黑科技大语文、思维体系教研’构建完美的教导温室，吸引望子成龙的父母。"
    },
    {
      id: 1,
      title: "11层类纸润眼屏、权威医用防眩光推荐与‘红光护眼’黑科技",
      percentage: 23.5,
      keywords: [
        { word: "类纸护眼屏", weight: 0.96 },
        { word: "红光调节", weight: 0.88 },
        { word: "莱茵认证", weight: 0.85 },
        { word: "零眩光", weight: 0.80 },
        { word: "医用推荐", weight: 0.61 }
      ],
      dimension: "D5 视听健康",
      summary: "宣传海报标配。用精致的科技原理图层，解析11层滤光和散射设计、独创红光主动视网膜修复，向家长传递‘多看多用反而保护眼睛’的完美体验预期，化解家长对电子屏幕的抵触心结。"
    },
    {
      id: 2,
      title: "AI精准学测练、全链路千人千面诊断报告、快速定位知识薄弱点",
      percentage: 18.2,
      keywords: [
        { word: "AI精准学", weight: 0.92 },
        { word: "薄弱诊断", weight: 0.86 },
        { word: "提分闭环", weight: 0.81 },
        { word: "千人千面", weight: 0.73 }
      ],
      dimension: "D2 教学信息交互",
      summary: "主推‘AI精准诊断’。只需孩子做 3 道题即可绘制多维知识图谱库。精准判定知识落后点并进行定向名师讲解推送，大幅度宣扬‘去粗取精，从此不搞题海战术’。"
    },
    {
      id: 3,
      title: "家长小程序省心无忧伴学、无游戏系统纯净净土、安全绿色可防篡改",
      percentage: 11.2,
      keywords: [
        { word: "省心伴学", weight: 0.86 },
        { word: "家长一键", weight: 0.82 },
        { word: "绿色过滤", weight: 0.75 },
        { word: "纯净系统", weight: 0.68 }
      ],
      dimension: "D3 教学过程管理",
      summary: "主要解决双职工家长无法看护辅导难题。官方极力刻画‘智能托管’体验，强调设备自带有高精度坐姿报警纠正和网络环境强力过滤，家长在办公室看手机即可轻松管控设备。"
    },
    {
      id: 4,
      title: "大促多重购机大礼包、新品旗舰限量降临抽奖、终身免学习资源款",
      percentage: 5.0,
      keywords: [
        { word: "抽奖发售", weight: 0.91 },
        { word: "新品旗舰", weight: 0.87 },
        { word: "终身免费", weight: 0.81 },
        { word: "超级大促", weight: 0.72 }
      ],
      dimension: "D7 售后服务",
      summary: "穿插于日常宣发，用大量的明星代言人、知名父母博主评测、以及购机限量赠送AI伴读机器人、保温杯、文具超级大礼包拉动成交，而售后维保退换政策则隐藏在最后一行小字。"
    }
  ],
  userPositive: [
    {
      id: 0,
      title: "课程体系完善好评：同步更新快、辅导练习省时省心、发音正宗",
      percentage: 45.4,
      keywords: [
        { word: "教材同步", weight: 0.91 },
        { word: "发音非常标准", weight: 0.86 },
        { word: "不用辅导", weight: 0.83 },
        { word: "省心", weight: 0.77 },
        { word: "体系合理", weight: 0.62 }
      ],
      dimension: "D1 教学内容与资源",
      summary: "买家最满意的部分。反馈集中在‘孩子很喜欢跟着里面的老师读英语，发音正宗’，‘终身不要买名师网课太划算了’、‘英语和数学的教研真好，大人可以不插手辅导，家庭矛盾减少’。"
    },
    {
      id: 1,
      title: "纸润感护眼防反光满意、柔和度好不伤眼、自适应调光明暗适中",
      percentage: 28.1,
      keywords: [
        { word: "护眼屏幕", weight: 0.89 },
        { word: "反光很弱", weight: 0.85 },
        { word: "眼睛不干", weight: 0.79 },
        { word: "纸质感觉", weight: 0.71 }
      ],
      dimension: "D5 视听健康",
      summary: "买家在看中护眼配置后的实质评价。称赞学习机类纸屏不仅反射率极低，光线也呈现柔和的黄色质地，孩子在光线变换的学习桌上阅读较之用iPad眼睛不易干涩疲劳。"
    },
    {
      id: 2,
      title: "客服及物流送货上门高效、顺丰配送快速、高端包装大体有面",
      percentage: 16.5,
      keywords: [
        { word: "顺丰送货", weight: 0.93 },
        { word: "客服热情", weight: 0.87 },
        { word: "包装精美", weight: 0.80 },
        { word: "隔天送到", weight: 0.74 }
      ],
      dimension: "D7 售后服务",
      summary: "顺丰高效配送大受好评，购买当晚寄出、次日上午即可凭精细的天地盖礼盒送货上门，赠礼或开机第一印象极具奢侈学术品牌的尊贵感。"
    },
    {
      id: 3,
      title: "AI指读精准反应快、AR识别试题准、错题本汇总高效",
      percentage: 10.0,
      keywords: [
        { word: "精准指读", weight: 0.84 },
        { word: "错题秒记", weight: 0.80 },
        { word: "孩子爱用", weight: 0.75 },
        { word: "智能反应", weight: 0.69 }
      ],
      dimension: "D2 教学信息交互",
      summary: "指读英语和语文生词时，前置反射镜能迅速在屏幕一侧调出字义发音，孩子能够快速跟随纠错，省却查厚重大字典的时间。"
    }
  ],
  userNegative: [
    {
      id: 0,
      title: "售后服务与价格背刺极其反感、差价补偿推辞不合理、维修费天价",
      percentage: 38.6,
      keywords: [
        { word: "降价背刺", weight: 0.95 },
        { word: "客服推脱", weight: 0.89 },
        { word: "自费维修", weight: 0.87 },
        { word: "拒退差价", weight: 0.81 },
        { word: "天价屏费", weight: 0.74 }
      ],
      dimension: "D7 售后服务",
      summary: "买家的头号愤怒来源。集中在‘买完不到两周直接降价700，客服居然以过了7天保价为由拒补，体验恶心！’‘孩子不小心碰摔了一下，类纸屏幕碎裂要返厂维修自费1600元，等同于大半个新机费！’"
    },
    {
      id: 1,
      title: "硬件续航极速尿崩、1年后卡顿明显、支架阻尼松弛松塌垮",
      percentage: 24.3,
      keywords: [
        { word: "电量极快", weight: 0.92 },
        { word: "1年卡顿", weight: 0.86 },
        { word: "支架松塌", weight: 0.81 },
        { word: "发虚模糊", weight: 0.78 },
        { word: "充电发烫", weight: 0.69 }
      ],
      dimension: "D6 硬件基础能力",
      summary: "硬件短板痛点。买家发帖子抱怨：‘买回来前几个月很好，过了1年电池严重亏电，只上一节1.5小时直播网课就报警闪退。’‘屏幕分辨率其实不高，凑近看边缘全是锯齿，磨砂纸感牺牲了清晰度。’"
    },
    {
      id: 2,
      title: "部分高级学科资源收费及深度功能鸡肋后悔、多学段资源更新龟速",
      percentage: 20.1,
      keywords: [
        { word: "二次收费", weight: 0.90 },
        { word: "资源鸡肋", weight: 0.84 },
        { word: "初高中太旧", weight: 0.81 },
        { word: "后悔买", weight: 0.75 }
      ],
      dimension: "D1 教学内容与资源",
      summary: "高期望错位体现。家长发现，小学资源极为丰美，但一到了初三和高中，网课质量和套卷更新就大幅度滑水，有些考前密卷或拔尖课程居然需要额外交‘特费’购买，令买家产生上当受骗感。"
    },
    {
      id: 3,
      title: "家长小程序频繁离线断连、不时强行人脸采集引发数据安全忧患",
      percentage: 17.0,
      keywords: [
        { word: "断连离线", weight: 0.83 },
        { word: "强行人脸占拍", weight: 0.79 },
        { word: "定位假死", weight: 0.74 },
        { word: "不安全", weight: 0.68 }
      ],
      dimension: "D4 个人信息保护",
      summary: "隐私安全性质疑：‘系统总是偷偷拍照，孩子做小动作就会被记录并发微信，是不是太没有安全保障了！’‘软件更新必须要验证全家的真实身份以及人脸声纹，感觉侵犯了底线隐私。’"
    }
  ]
};

export interface EvolutionItem {
  date: string; // "YYYY-MM"
  D1_volume: number; // 教学内容关注度
  D5_volume: number; // 视听健康关注度
  D7_volume: number; // 售后服务关注度
  D7_sentiment: number; // 售后服务情感 [0-100%]
  D5_sentiment: number; // 视听健康情感 [0-100%]
  event?: string; // 偶发大时间点标注
}

export const evolutionData: EvolutionItem[] = [
  { date: "2024-01", D1_volume: 85, D5_volume: 42, D7_volume: 21, D7_sentiment: 82, D5_sentiment: 92 },
  { date: "2024-03", D1_volume: 110, D5_volume: 48, D7_volume: 28, D7_sentiment: 79, D5_sentiment: 93, event: "春季开学季" },
  { date: "2024-05", D1_volume: 95, D5_volume: 38, D7_volume: 24, D7_sentiment: 81, D5_sentiment: 90 },
  { date: "2024-08", D1_volume: 165, D5_volume: 98, D7_volume: 72, D7_sentiment: 46, D5_sentiment: 81, event: "暑假高频用眼与空调房高故障" },
  { date: "2024-10", D1_volume: 120, D5_volume: 59, D7_volume: 45, D7_sentiment: 68, D5_sentiment: 86 },
  { date: "2024-11", D1_volume: 210, D5_volume: 130, D7_volume: 96, D7_sentiment: 59, D5_sentiment: 85, event: "双十一降价与赠品纠纷" },
  { date: "2025-01", D1_volume: 140, D5_volume: 68, D7_volume: 42, D7_sentiment: 72, D5_sentiment: 88 },
  { date: "2025-03", D1_volume: 195, D5_volume: 85, D7_volume: 58, D7_sentiment: 70, D5_sentiment: 90, event: "春季返校" },
  { date: "2025-06", D1_volume: 172, D5_volume: 74, D7_volume: 50, D7_sentiment: 67, D5_sentiment: 82, event: "暑期促销波次" },
  { date: "2025-08", D1_volume: 220, D5_volume: 154, D7_volume: 92, D7_sentiment: 52, D5_sentiment: 74, event: "暑期长假高负荷玩机突显疲劳" },
  { date: "2025-11", D1_volume: 284, D5_volume: 195, D7_volume: 144, D7_sentiment: 44, D5_sentiment: 82, event: "双十一超级降价引爆‘背刺’抗议" },
  { date: "2026-01", D1_volume: 152, D5_volume: 81, D7_volume: 64, D7_sentiment: 58, D5_sentiment: 84 },
  { date: "2026-03", D1_volume: 188, D5_volume: 99, D7_volume: 87, D7_sentiment: 61, D5_sentiment: 85, event: "数据截止时点，维权持续" }
];
