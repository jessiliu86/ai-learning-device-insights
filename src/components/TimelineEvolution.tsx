import React, { useState } from "react";
import { HelpCircle, Calendar, LineChart, TrendingDown, Tag, AlertTriangle, ShieldCheck, Flame, ArrowRight } from "lucide-react";
import { evolutionData, EvolutionItem } from "../data/mockData";

export default function TimelineEvolution() {
  const [chartMode, setChartMode] = useState<"volume" | "sentiment">("volume");
  const [hoveredPointIdx, setHoveredPointIdx] = useState<number | null>(null);
  const [selectedPointIdx, setSelectedPointIdx] = useState<number>(10); // Default to 2025-11 (Double 11 backstab peak)

  const selectedPoint = evolutionData[selectedPointIdx] || evolutionData[evolutionData.length - 1];

  // SVG Chart sizing
  const width = 640;
  const height = 240;
  const paddingLeft = 50;
  const paddingRight = 20;
  const paddingTop = 30;
  const paddingBottom = 40;

  // Find min/max for scale
  // Volume ranges: 0 to 300
  // Sentiment ranges: 0% to 100%
  const getXAndY = (index: number, val: number, maxVal: number) => {
    const x = paddingLeft + (index / (evolutionData.length - 1)) * (width - paddingLeft - paddingRight);
    const y = paddingTop + height - (val / maxVal) * height;
    return { x, y };
  };

  // Build SVG Paths for volume lines
  const buildPath = (key: "D1_volume" | "D5_volume" | "D7_volume" | "D7_sentiment" | "D5_sentiment", maxVal: number) => {
    let d = "";
    evolutionData.forEach((item, index) => {
      const val = item[key] as number;
      const { x, y } = getXAndY(index, val, maxVal);
      if (index === 0) {
        d += `M ${x} ${y}`;
      } else {
        d += ` L ${x} ${y}`;
      }
    });
    return d;
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="border-b border-slate-100 pb-5">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 font-sans">
          学术时序演化分析与事件追踪
        </h1>
        <p className="mt-1.5 text-sm text-slate-500">
          观察 2024.01 - 2026.03 跨度段内，各维度讨论热量与负向情绪在促销活动及长假期的潮汐式剧烈变迁
        </p>
      </div>

      {/* Mode selectors and mini cards */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Toggle selectors */}
        <div className="flex rounded-lg bg-slate-100 p-1 font-sans text-xs">
          <button
            onClick={() => {
              setChartMode("volume");
              setHoveredPointIdx(null);
            }}
            className={`rounded-md px-3.5 py-1.5 font-bold transition-all ${
              chartMode === "volume"
                ? "bg-white text-slate-900 shadow-xs"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            关注热度维度演变 (Volume Trend)
          </button>
          <button
            onClick={() => {
              setChartMode("sentiment");
              setHoveredPointIdx(null);
            }}
            className={`rounded-md px-3.5 py-1.5 font-bold transition-all ${
              chartMode === "sentiment"
                ? "bg-white text-slate-900 shadow-xs"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            痛点维度情感波动规律 (Sentiment Curve)
          </button>
        </div>

        <div className="text-xs font-mono font-bold text-slate-400">
          全时间线追踪节点：{evolutionData.length}个时区
        </div>
      </div>

      {/* Main Comparative View and Data Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

        {/* Dynamic Plot Column */}
        <div className="lg:col-span-3 rounded-xl border border-slate-200 bg-white p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-3 gap-2">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-1.5">
                <LineChart className="h-4.5 w-4.5 text-blue-500" />
                {chartMode === "volume" ? "多维度关注热度月度频频词件（体积波澜）" : "视听与售后核心痛点情感波谷探测 (%)"}
              </h3>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {chartMode === "volume"
                  ? "折线指示每月份相关维词句讨论量：双十一促销是声量最大沸点"
                  : "折线展示情绪满意率[0~100%]：双十一和暑高用眼期，情绪滑落到 44% 绝望底点"}
              </p>
            </div>
            {/* Custom chart legend */}
            <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono font-semibold">
              {chartMode === "volume" ? (
                <>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-0.5 bg-[#4F46E5] inline-block"></span> D1 资源热度</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-0.5 bg-yellow-500 inline-block"></span> D5 护眼热度</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-0.5 bg-[#EF4444] inline-block"></span> D7 售后声量</span>
                </>
              ) : (
                <>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-0.5 bg-yellow-500 inline-block"></span> D5 视力健康情感</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-0.5 bg-[#EF4444] inline-block"></span> D7 售后情感波</span>
                </>
              )}
            </div>
          </div>

          {/* Render Vector Line Chart */}
          <div className="relative w-full overflow-x-auto">
            <svg viewBox={`0 0 ${width} ${height + paddingTop + paddingBottom}`} className="w-[640px] h-[310px] mx-auto select-none">
              
              {/* Y Axis grid ticks */}
              {chartMode === "volume" ? (
                [0, 100, 200, 300].map((tick) => {
                  const y = paddingTop + height - (tick / 300) * height;
                  return (
                    <g key={tick} className="opacity-40">
                      <line x1={paddingLeft} y1={y} x2={width - paddingRight} y2={y} stroke="#E2E8F0" strokeWidth="1" />
                      <text x={paddingLeft - 8} y={y + 4} textAnchor="end" className="text-[10px] font-mono fill-slate-400 font-semibold">{tick} 条</text>
                    </g>
                  );
                })
              ) : (
                [30, 50, 70, 90, 100].map((tick) => {
                  const y = paddingTop + height - (tick / 100) * height;
                  return (
                    <g key={tick} className="opacity-40">
                      <line x1={paddingLeft} y1={y} x2={width - paddingRight} y2={y} stroke="#E2E8F0" strokeWidth="1" />
                      <text x={paddingLeft - 8} y={y + 4} textAnchor="end" className="text-[10px] font-mono fill-slate-400 font-semibold">{tick}%</text>
                    </g>
                  );
                })
              )}

              {/* Volume mode shapes */}
              {chartMode === "volume" ? (
                <>
                  <path d={buildPath("D1_volume", 300)} fill="none" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round" />
                  <path d={buildPath("D5_volume", 300)} fill="none" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" />
                  <path d={buildPath("D7_volume", 300)} fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <path d={buildPath("D5_sentiment", 100)} fill="none" stroke="#EAB308" strokeWidth="2.5" strokeLinecap="round" />
                  <path d={buildPath("D7_sentiment", 100)} fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
                </>
              )}

              {/* Event indicators & Interactive nodes */}
              {evolutionData.map((item, index) => {
                const groupX = paddingLeft + (index / (evolutionData.length - 1)) * (width - paddingLeft - paddingRight);
                
                // Primary node value
                const primaryVal = chartMode === "volume" ? item.D1_volume : item.D7_sentiment;
                const maxV = chartMode === "volume" ? 300 : 100;
                const { y: nodeY } = getXAndY(index, primaryVal, maxV);

                const isSelected = selectedPointIdx === index;
                const hasEvent = !!item.event;

                return (
                  <g key={item.date} className="cursor-pointer transition-all">
                    
                    {/* Hotspot bounding click line */}
                    <line
                      x1={groupX}
                      y1={paddingTop - 10}
                      x2={groupX}
                      y2={paddingTop + height + 20}
                      stroke={isSelected ? "rgba(79, 70, 229, 0.4)" : "rgba(226, 232, 240, 0.1)"}
                      strokeWidth={isSelected ? "2" : "15"}
                      strokeDasharray={isSelected ? "4 4" : "0"}
                      onClick={() => setSelectedPointIdx(index)}
                      onMouseEnter={() => setHoveredPointIdx(index)}
                      onMouseLeave={() => setHoveredPointIdx(null)}
                    />

                    {/* Dot on line */}
                    <circle
                      cx={groupX}
                      cy={nodeY}
                      r={isSelected ? "6" : "3.5"}
                      fill={chartMode === "volume" ? "#4F46E5" : "#EF4444"}
                      stroke="#FFF"
                      strokeWidth={isSelected ? "2.5" : "1.5"}
                      onClick={() => setSelectedPointIdx(index)}
                    />

                    {/* Event flag sign above high values if they exist */}
                    {hasEvent && (
                      <g onClick={() => setSelectedPointIdx(index)}>
                        <circle cx={groupX} cy={paddingTop + height} r="3" fill="#64748B" />
                        <rect x={groupX - 16} y={paddingTop + height + 4} width="32" height="12" rx="2" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="0.5" />
                        <text x={groupX} y={paddingTop + height + 13} textAnchor="middle" className="text-[7px] font-mono fill-slate-500 font-bold">EVENT</text>
                      </g>
                    )}

                    {/* X-axis date labels */}
                    {index % 2 === 0 && (
                      <text
                        x={groupX}
                        y={paddingTop + height + 28}
                        textAnchor="middle"
                        className={`text-[9px] font-semibold transition-colors ${
                          isSelected ? "fill-indigo-600 font-extrabold" : "fill-slate-400"
                        }`}
                        onClick={() => setSelectedPointIdx(index)}
                      >
                        {item.date.split("-")[1] === "01" ? `${item.date.split("-")[0].slice(2)}/${item.date.split("-")[1]}` : item.date.split("-")[1]}
                      </text>
                    )}
                  </g>
                );
              })}

              {/* X axis line */}
              <line x1={paddingLeft} y1={paddingTop + height} x2={width - paddingRight} y2={paddingTop + height} stroke="#64748B" strokeWidth="1.2" />

            </svg>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-3 rounded-lg text-xs text-slate-500 flex items-center justify-between">
            <span>🖱️ <strong>点击折线上的圆点节点或 EVENT 标志</strong> 即可联动探测当期突发的热门舆情演进成因。</span>
            <span className="font-mono text-[9px]">Timeline: 27 natural months</span>
          </div>
        </div>

        {/* Right Column - Empirical Chronology Detail Box */}
        <div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-900 border-b border-slate-100 pb-2.5 flex items-center gap-1.5">
              <Calendar className="h-4.5 w-4.5 text-slate-500" />
              热点舆情时空追踪面板
            </h3>

            {/* Selected Date indicator block */}
            <div className="rounded-xl p-3.5 bg-linear-to-b from-slate-50 to-white border border-slate-150 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-slate-400 tracking-widest uppercase">Chronological Log</span>
                <span className="inline-flex rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-mono font-bold text-indigo-700">
                  {selectedPoint.date}
                </span>
              </div>
              
              {selectedPoint.event ? (
                <div className="text-[11px] font-bold text-slate-800 flex items-center gap-1">
                  <Flame className="h-4 w-4 text-red-500" /> 
                  突发舆情：{selectedPoint.event}
                </div>
              ) : (
                <div className="text-[10px] text-slate-400 italic">该月份处于平稳学术数据收集期</div>
              )}
            </div>

            {/* Dynamic metrics of this point in time */}
            <div className="grid grid-cols-2 gap-3.5 pt-1">
              <div className="border border-slate-100 rounded-lg p-2.5 bg-slate-50/50">
                <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">该月教学资源讨论量</div>
                <div className="text-md font-bold text-indigo-700 mt-1 font-mono">{selectedPoint.D1_volume} <span className="text-xs font-normal font-sans text-slate-500">词句</span></div>
              </div>
              <div className="border border-slate-100 rounded-lg p-2.5 bg-slate-50/50">
                <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">该月售后差评情感分</div>
                <div className="text-md font-bold text-red-650 mt-1 font-mono">{selectedPoint.D7_sentiment}% <span className="text-xs font-normal font-sans text-slate-500">满意率</span></div>
              </div>
              <div className="border border-slate-100 rounded-lg p-2.5 bg-slate-50/50 col-span-2">
                <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">该月视听健康用眼讨论量 / 情感度</div>
                <div className="text-xs font-bold text-slate-700 mt-1 font-mono flex items-center gap-3">
                  <span>热度: {selectedPoint.D5_volume} 词句</span>
                  <span className="text-yellow-600">眼疲劳率: {(100 - selectedPoint.D5_sentiment)}%</span>
                </div>
              </div>
            </div>

            {/* Timeline Analysis descriptive details based on index */}
            <div className="rounded-xl border border-blue-50 bg-blue-50/15 p-3.5 space-y-1">
              <h4 className="text-xs font-bold text-slate-900">时序成因洞察：</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed font-sans">
                {selectedPointIdx === 10 ? (
                  "2025年11月双十一大促期，由于学而思直接进行全网巨幅优惠，早先花费5000+高额溢价购买高档机器的中产家长，猛烈指责官方进行‘大降价割韭菜、不补700差价’。同月，多省市也爆发出寒冷天气下电池掉电太快的硬件D6硬伤，差评情感跌入冰点。"
                ) : selectedPointIdx === 9 ? (
                  "2025年8月份暑期最热用眼高峰期。孩子们放长假长时间盯着润纸屏幕。高频连续网课后，家长们发现类纸屏幕虽然在光反射上稍优，但难以根本抵抗连续4小时视神经损伤。视力焦虑（D5）讨论激增并伴随高反酸痛苦情绪。"
                ) : selectedPointIdx === 3 ? (
                  "2024年8月暑假首个周期，许多买家首次度过1年电池衰退考验，加上夏季高气温引发的芯片烫手、设备假死，D6硬件与D7不耐烦客服发生了多维重合控诉，售后情感探针降至0.46历史重灾极限区。"
                ) : (
                  "随着寒暑假教辅购买刚需潮汐（1-3月开学、6-8月大长假），D1名师优势资源讨论量出现明显的波峰攀升。双十一和618促销则集中引爆 D7 (价格保护/换屏费诉求) 舆情负面反扑。说明产品的生命力和脆弱点与社会作息周期100%同频。"
                )}
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3.5 border-t border-slate-100">
            <span className="text-[10px] text-slate-400 font-mono">
              * 图例中所有热度频数采用 LDA 概率密度分布的等距样本放大，忠实反映趋势。
            </span>
          </div>
        </div>

      </div>

      {/* Comprehensive temporal conclusions card */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 space-y-3">
        <h3 className="text-sm font-semibold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-1.5">
          <LineChart className="h-4.5 w-4.5 text-slate-500" />
          全周期时空趋势总结 (Chronological Review)
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          时间演化数据深刻勾勒出移动学习终端作为‘应试教育溢出技术’的双重本性。
          在寒暑假（如各年 8月及 35月），<strong>对D1优质网课资源与托管控制（D3）的依赖</strong>迎来了波段高光（各月份讨论量皆在 200 以上高企且情绪极其高亮友好）。
          然而在随后的重大促销节点，由销售价格跳水带来的<strong>‘背刺感折断’（D7满意度滑落至44%）</strong>以及重荷过量玩机导致的<strong>硬件亏电（D6）与视力干涩（D5）</strong>迅速转入负向发声阶段。
          这强烈要求品牌在宣传网课‘提分’等宏大叙事时，必须将高频使用的耐久性与价格契合稳定性放在更真诚的保障线上。
        </p>
      </div>

    </div>
  );
}
