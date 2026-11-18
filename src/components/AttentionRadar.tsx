import React, { useState } from "react";
import { HelpCircle, AlertOctagon, TrendingUp, Sparkles, AlertTriangle, Layers, ShieldX, EyeOff, LayoutList } from "lucide-react";
import { triPartyAttention, TriPartyAttentionData } from "../data/mockData";

export default function AttentionRadar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedDimId, setSelectedDimId] = useState<string>("D1");

  // Detailed textual mismatch diagnostics
  const gapAnalysisObj: Record<string, { type: string; title: string; colorClass: string; desc: string; gapValue: string }> = {
    D1: {
      type: "三方共识区 (Consensus Zone)",
      title: "教学资源主导地位共振",
      colorClass: "bg-blue-50 text-blue-800 border-blue-200",
      desc: "教学内容与大纲同步资源是绝对的核心。无论是新国标强调多学段配置、企业销售宣誓辅导原班人马、或是家长购买时最在意的提分效果，在此处形成了大比例的一致。学而思产品教辅优势也是基于此展开。",
      gapValue: "国标 55.5% | 官方 57.5% | 用户 47.3%"
    },
    D2: {
      type: "高关注匹配 (Aligned Care)",
      title: "学习交互中枢保障",
      colorClass: "bg-emerald-50 text-emerald-800 border-emerald-200",
      desc: "教学信息交互主要是人机语音、触屏响应，国标、官方和用户关注度顺次匹配。官方对AI精准测练的宣传甚至超过了国标指标，而家长对其基本识别性能有常态期待。",
      gapValue: "国标 19.9% | 官方 21.9% | 用户 12.7%"
    },
    D3: {
      type: "企业宣传溢出 (Corporate Over-宣示)",
      title: "‘家长解放’的远程拟态托管圈粉",
      colorClass: "bg-purple-50 text-purple-805 border-purple-200",
      desc: "过程管理在官方宣发中占比 14.7%，明显高于国标的 5.8% 和用户的 10.6%。说明商家试图通过大书特书‘纯净防游戏锁’、‘坐姿纠正与时间远程锁死’等字眼吸引缺乏时间的城市中产家长，将其作为重磅溢销产品点。",
      gapValue: "官方溢出监管达 8.9%"
    },
    D4: {
      type: "红线合规盲区 (Compliance Blind Spot)",
      title: "隐私权限讨论陷入‘休眠假死’",
      colorClass: "bg-indigo-50 text-indigo-805 border-indigo-200",
      desc: "新国标花费极大篇幅限制人脸和未成年人视频录制权限收集，但学而思宣明条款在官方极度沉寂（0.3%），而家长也几乎对此无感知（0.2%），只有偶发的安全验证强制绑定引发零星不快，形成了典型的合规认知黑洞。",
      gapValue: "国标重视 3.7% vs 官方/用户忽略 0.2%"
    },
    D5: {
      type: "期望错落 (Expectation Disconnect)",
      title: "‘红光润屏’光环后的用眼争议",
      colorClass: "bg-amber-50 text-amber-805 border-amber-200",
      desc: "视听健康在用户端讨论度（13.1%）明显跑赢了官方的（3.1%）。新国标亦做出了高达 9.9% 的硬反光限制。说明类纸屏幕的折损和光线反射疲劳，是消费群用眼底线的刚性关注，官方简单的莱茵认证书难以抵消用户实际买回去的视疲劳酸涩感。",
      gapValue: "用户高出官方关注 10.0%"
    },
    D6: {
      type: "硬件价值剪刀差 (Hardware Squeeze)",
      title: "性能亏用与低性价折磨",
      colorClass: "bg-pink-50 text-pink-805 border-pink-200",
      desc: "由于机器极高溢价多来自于内容教辅资源，整机成本中硬件基础硬件比并不高。买家买回一两年后暴露出的电量崩溃、卡机闪退严重（8.8%），远超厂商在宣发新品外壳阻尼时的微小点缀（1.9%）。",
      gapValue: "用户对硬件的实际骂物理体验高出8倍"
    },
    D7: {
      type: "极度空白断裂点 (The Severe Void)",
      title: "‘天价碎屏’与降价背刺的重组痛点",
      colorClass: "bg-red-50 text-red-800 border-red-200",
      desc: "售后服务在国标条款中由于超纲而为 0.0%，官方因为营销唯胜也将其维持在近乎无字言（0.6%），但在用户反馈中却高达 7.4%！‘降价退差迟缓、自费换屏近1600元近乎机价一半’，是第二大买家抱怨爆发地，这暴露商家对预期管理与履约退保上的冰点空洞。",
      gapValue: "官方冷水 0.6% vs 用户烈火 7.4%"
    }
  };

  const selectedAnalysis = gapAnalysisObj[selectedDimId];

  // Render variables for premium responsive SVG column chart
  const paddingLeft = 45;
  const paddingRight = 20;
  const paddingTop = 40;
  const paddingBottom = 40;
  const chartHeight = 240;
  const chartWidth = 620;

  // Grid helpers
  const yTicks = [0, 15, 30, 45, 60];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="border-b border-slate-100 pb-5">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 font-sans">
          国家标准、官方宣发、消费者反馈维度关注度对比
        </h1>
        <p className="mt-1.5 text-sm text-slate-500">
          通过三类文本的大面积文本归一化词频统计，揭露不同利益主体对产品特性的关注落差
        </p>
      </div>

      {/* Main Dual Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

        {/* Left Column - Grouped Column Chart */}
        <div className="lg:col-span-3 rounded-xl border border-slate-200 bg-white p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-1.5">
                <TrendingUp className="h-4.5 w-4.5 text-blue-500" />
                三方语义关注比重（百分数对比直方图）
              </h3>
              <p className="text-[11px] text-slate-400 mt-0.5">X 轴为 7 个维度领域，Y 轴为该组文本内部相关提及词句比例（%）</p>
            </div>
            {/* Color Legend inside chart header */}
            <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold font-mono">
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-[#4F46E5] rounded-xs"></span> 国家标准</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-[#10B981] rounded-xs"></span> 官方微博</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-[#EF4444] rounded-xs"></span> 消费者词云</span>
            </div>
          </div>

          {/* SVG Grouped Column Chart */}
          <div className="relative w-full overflow-x-auto">
            <svg viewBox={`0 0 ${chartWidth} ${chartHeight + paddingTop + paddingBottom}`} className="w-[620px] h-[320px] mx-auto select-none">
              {/* Y Grid lines */}
              {yTicks.map((val) => {
                const y = paddingTop + chartHeight - (val / 60) * chartHeight;
                return (
                  <g key={val} className="opacity-40">
                    <line x1={paddingLeft} y1={y} x2={chartWidth - paddingRight} y2={y} stroke="#EBEEF5" strokeWidth="1" />
                    <text x={paddingLeft - 8} y={y + 4} textAnchor="end" className="text-[10px] font-mono fill-slate-400 font-semibold">{val}%</text>
                  </g>
                );
              })}

              {/* Draw columns */}
              {triPartyAttention.map((item, index) => {
                const groupWidth = (chartWidth - paddingLeft - paddingRight) / triPartyAttention.length;
                const groupX = paddingLeft + index * groupWidth;
                
                // Column specs
                const colWidth = (groupWidth - 14) / 3;

                // Heights with 60% as maximum
                const stdY = paddingTop + chartHeight - (item.standard / 60) * chartHeight;
                const stdH = (item.standard / 60) * chartHeight;

                const offY = paddingTop + chartHeight - (item.official / 60) * chartHeight;
                const offH = (item.official / 60) * chartHeight;

                const usrY = paddingTop + chartHeight - (item.user / 60) * chartHeight;
                const usrH = (item.user / 60) * chartHeight;

                const isSelected = selectedDimId === item.dimensionId;

                return (
                  <g key={item.dimensionId} className="transition-all">
                    {/* Hover feedback background */}
                    <rect
                      x={groupX}
                      y={paddingTop - 10}
                      width={groupWidth}
                      height={chartHeight + 20}
                      fill={isSelected ? "rgba(241, 143, 143, 0.05)" : "transparent"}
                      stroke={isSelected ? "rgba(241, 143, 143, 0.15)" : "transparent"}
                      strokeWidth="1"
                      className="cursor-pointer transition-colors"
                      onClick={() => setSelectedDimId(item.dimensionId)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    />

                    {/* standard bar (blueish) */}
                    <rect
                      x={groupX + 4}
                      y={stdY}
                      width={colWidth}
                      height={Math.max(stdH, 1)}
                      fill="#4F46E5"
                      className="transition-all duration-300"
                      rx="2"
                    />

                    {/* official bar (emerald) */}
                    <rect
                      x={groupX + 4 + colWidth + 2}
                      y={offY}
                      width={colWidth}
                      height={Math.max(offH, 1)}
                      fill="#10B981"
                      className="transition-all duration-300"
                      rx="2"
                    />

                    {/* user bar (red) */}
                    <rect
                      x={groupX + 4 + (colWidth + 2) * 2}
                      y={usrY}
                      width={colWidth}
                      height={Math.max(usrH, 1)}
                      fill="#EF4444"
                      className="transition-all duration-300"
                      rx="2"
                    />

                    {/* Dimension label below X-axis */}
                    <text
                      x={groupX + groupWidth / 2}
                      y={paddingTop + chartHeight + 18}
                      textAnchor="middle"
                      className={`text-[10px] font-sans transition-colors cursor-pointer ${
                        isSelected ? "fill-blue-600 font-extrabold" : "fill-slate-500 font-medium"
                      }`}
                      onClick={() => setSelectedDimId(item.dimensionId)}
                    >
                      {item.dimensionId}
                    </text>
                  </g>
                );
              })}

              {/* X axis baseline */}
              <line
                x1={paddingLeft}
                y1={paddingTop + chartHeight}
                x2={chartWidth - paddingRight}
                y2={paddingTop + chartHeight}
                stroke="#64748B"
                strokeWidth="1.5"
              />

              {/* Floating Tooltip in SVG to explain details if hovered */}
              {hoveredIndex !== null && (
                <g className="pointer-events-none">
                  <rect
                    key="tooltip"
                    x={Math.min(paddingLeft + hoveredIndex * ((chartWidth - paddingLeft - paddingRight) / triPartyAttention.length) + 10, chartWidth - 165)}
                    y={5}
                    width="155"
                    height="98"
                    rx="4"
                    fill="rgba(15, 23, 42, 0.95)"
                    className="shadow-md"
                  />
                  <text
                    x={Math.min(paddingLeft + hoveredIndex * ((chartWidth - paddingLeft - paddingRight) / triPartyAttention.length) + 20, chartWidth - 155)}
                    y={22}
                    className="text-[10px] fill-slate-300 font-bold"
                  >
                    {triPartyAttention[hoveredIndex].dimension}
                  </text>
                  <text
                    x={Math.min(paddingLeft + hoveredIndex * ((chartWidth - paddingLeft - paddingRight) / triPartyAttention.length) + 20, chartWidth - 155)}
                    y={42}
                    className="text-[10px] fill-indigo-300 font-mono"
                  >
                    ● 国家强制标: {triPartyAttention[hoveredIndex].standard}%
                  </text>
                  <text
                    x={Math.min(paddingLeft + hoveredIndex * ((chartWidth - paddingLeft - paddingRight) / triPartyAttention.length) + 20, chartWidth - 155)}
                    y={60}
                    className="text-[10px] fill-emerald-300 font-mono"
                  >
                    ● 官方主宣发: {triPartyAttention[hoveredIndex].official}%
                  </text>
                  <text
                    x={Math.min(paddingLeft + hoveredIndex * ((chartWidth - paddingLeft - paddingRight) / triPartyAttention.length) + 20, chartWidth - 155)}
                    y={78}
                    className="text-[10px] fill-red-300 font-mono"
                  >
                    ● 用户客评句: {triPartyAttention[hoveredIndex].user}%
                  </text>
                </g>
              )}
            </svg>
          </div>

          {/* Guide Helper list */}
          <div className="bg-slate-50 border border-slate-100 p-3 rounded-lg flex items-center justify-between text-xs text-slate-500">
            <span>🖱️ <strong>点击柱形图</strong> 任意维度，右侧控制面板将联动呈现精确错位学术分析。</span>
            <span className="font-mono text-[10px]">Total N = 9760 texts</span>
          </div>
        </div>

        {/* Right Column - Academic Conflict Explanation */}
        <div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-900 border-b border-slate-100 pb-2.5 flex items-center gap-1.5">
              <LayoutList className="h-4.5 w-4.5 text-slate-500" />
              维度对齐质量深度鉴析卡
            </h3>

            {/* Quick Dimension tabs internally just for ease of nav */}
            <div className="flex flex-wrap gap-1.5 pb-1">
              {triPartyAttention.map(att => (
                <button
                  key={att.dimensionId}
                  onClick={() => setSelectedDimId(att.dimensionId)}
                  className={`text-[10px] px-2 py-1 rounded transition-all font-mono font-bold ${
                    selectedDimId === att.dimensionId
                      ? "bg-slate-800 text-white"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                  }`}
                >
                  {att.dimensionId}
                </button>
              ))}
            </div>

            {selectedAnalysis ? (
              <div className="space-y-4 animate-fadeIn">
                <div className={`p-3 rounded-xl border ${selectedAnalysis.colorClass}`}>
                  <div className="text-[10px] font-mono font-bold uppercase tracking-widest opacity-80">
                    维度定位：{selectedAnalysis.type}
                  </div>
                  <h4 className="text-sm font-bold mt-1">
                    {selectedDimId} - {selectedAnalysis.title}
                  </h4>
                  <div className="text-[11px] font-mono font-bold mt-1 text-slate-700">
                    [三方数据值]: {selectedAnalysis.gapValue}
                  </div>
                </div>

                <div>
                  <h5 className="text-xs font-semibold text-slate-400 font-mono uppercase tracking-widest">学术洞察阐论:</h5>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed font-sans bg-slate-50/50 p-3 rounded-lg border border-slate-100">
                    {selectedAnalysis.desc}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-xs text-slate-400">选择维度以调阅详细错位透析报告。</p>
            )}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100">
            <div className="text-[11px] font-bold text-slate-800">重要理论总结:</div>
            <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed font-sans">
              企业宣发（官方绿）极其渴望扮演“教导+护眼伴侣”的最优拟像以支撑销售。但在售后服务（D7）和硬件耐久（D6）等“物质消耗层”完全失防，这引发了消费群的情感反冲，构成了对拟态营销的“刺碎回击”。
            </p>
          </div>
        </div>

      </div>

      {/* Mismatch Risk Ledger Component */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-sm font-semibold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-1.5">
          <AlertOctagon className="h-4.5 w-4.5 text-red-500" />
          期望阻断与核心错位预警台 (Risk Ledger)
        </h3>
        <p className="text-xs text-slate-500 mt-2">
          基于三方数据，我们提取出三类严重对立的“功能盲区与沟通深渊”。建议将其置于行业改善的首要议题：
        </p>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="border border-red-150 rounded-xl p-4 bg-red-50/10">
            <div className="flex items-center gap-2 text-xs font-bold text-red-700">
              <ShieldX className="h-4.5 w-4.5 shrink-0" />
              <span>D7 售后与价格: 重度断裂缺口</span>
            </div>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              <strong>表现形式：</strong> 国标不介入 + 品牌极端回避（0.6%）+ 消费者高比例控诉（7.4%）。
              在产品极高利润背景下，降价价格背刺和折损保维的天价换屏费频频发生，成为摧毁品牌长期复购的头号元凶。
            </p>
          </div>

          <div className="border border-indigo-150 rounded-xl p-4 bg-indigo-50/10">
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-700">
              <EyeOff className="h-4.5 w-4.5 shrink-0" />
              <span>D4 隐私保护: 规约与体感的双重盲区</span>
            </div>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              <strong>表现形式：</strong> 国标耗费极高笔墨刚性约束（3.7%）+ 企业与家长大面积默然无声（&lt;0.3%）。
              这预示着未成年人生物隐私数据的获取虽然符合监管红线，但在消费侧和商业侧并未转化为成熟的主动沟通，风险隐患在暗中游移。
            </p>
          </div>

          <div className="border border-amber-150 rounded-xl p-4 bg-amber-50/10">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
              <Sparkles className="h-4.5 w-4.5 shrink-0" />
              <span>D5 视觉宣誓: 绿幕背后的体验虚妄</span>
            </div>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              <strong>表现形式：</strong> 官方主打类纸高黑科技卖点，但在日常重荷眼力使用场景中防干涩不及预期。
              企业过于依赖纸张般的屏幕涂层概念，容易忽视硬件磨砂面带来的照度与晶莹通透性损耗。
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
