import React, { useState } from "react";
import { HelpCircle, Scale, MessageSquare, ShieldCheck, HeartCrack, ChevronRight, Zap, RefreshCw, ShoppingCart } from "lucide-react";
import { platformSentiment, PlatformSentimentData } from "../data/mockData";

export default function PlatformSentiment() {
  const [selectedDimId, setSelectedDimId] = useState<string>("D7");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Sorting dimensions based on Delta gap (JD - Taobao) descendant order
  const sortedByDelta = [...platformSentiment].sort((a, b) => b.diff - a.diff);

  const explanations: Record<string, { title: string; focus: string; text: string }> = {
    D7: {
      title: "D7 售后服务 (JD-TB 巨大落差 +0.21)",
      focus: "自营极速更换体系 vs 商家推脱拉锯战",
      text: "这是全剧中最具对比反差的数据！京东得益于‘自营售后送水上门、京东物流原包上门速换、官方自购保退险’，将大部分降价纠纷和屏幕摔折悲剧转化为‘快速更换’的利落闭环，维持了高达 0.90 的优秀情感分。而淘宝用户身陷第三方卖家复杂的协商折回拉锯战、甚至自付高昂折返运费、遭遇客服机器人复读话术，其情感指数仅为 0.69。"
    },
    D6: {
      title: "D6 硬件基础能力 (JD-TB 对照落差 +0.09)",
      focus: "品质敏感度与性能损耗耐受",
      text: "京东购买人群对电器数码有更稳固的‘正品高要求’习惯，由于物流零挤压、仓储安全保障，到手设备的硬件故障率低于淘宝卖家拼单寄出的产品。淘宝消费者在电池衰减、开机卡死上吐槽更为尖锐（0.87分）。"
    },
    D4: {
      title: "D4 个人信息保护 (JD-TB 对照落差 +0.10)",
      focus: "淘宝平台的小程序强制绑定与家长反感",
      text: "信息安全分在淘宝侧陷入 0.77 谷底。用户发声多围绕‘由于淘宝商家优惠赠品，必须要求下载非官方绑定的不知名第三方小程序注册’、‘必须二次扫脸登录’，激发了极度敏感的网络信息隐私警觉，相比之下京东履约通道较少此层裹挟。"
    },
    D1: {
      title: "D1 教学内容与资源 (+0.02 极小差距)",
      focus: "教学软件一致性免于服务割裂",
      text: "两平台对名师资源的教材同步、双语标准英音、拼读好玩体验一致维持接近 0.97 大写满意，表明无论是在何处购买，学而思引以为傲的底层教研优势保持稳定输出，未受到平台履约性质带来的实质性摩擦影响。"
    },
    D2: {
      title: "D2 教学信息交互 (+0.02 稳定共鸣)",
      focus: "通用交互软核不受物流制约",
      text: "手写笔反馈延迟、指读识字、语音AI识别准确率作为标准化、机载系统固有的软件算法，其评价在京东（0.98）和淘宝（0.96）相差甚微。产品本位质量决定了两者的评分上限。"
    },
    D3: {
      title: "D3 教学过程管理 (+0.02 优质保障)",
      focus: "家长控制端的软件高闭合度评价",
      text: "由于自带纯净锁频系统和家长控制App具有全国一致的服务后台，用户体验两端契合（均&gt;0.97）。"
    },
    D5: {
      title: "D5 视听健康 (+0.02 极佳体感)",
      focus: "类纸屏高质护眼宣贯效果稳健",
      text: "虽然少数人认为类纸护眼亮度稍弱，但对防反射、莱茵蓝光双护眼防眩屏幕本身，买家好评重合率均稳居 0.96 以上高区。"
    }
  };

  const selectedExplanation = explanations[selectedDimId] || explanations["D7"];

  // Custom Lollipop Chart SVG calculations
  const chartWidth = 580;
  const chartHeight = 260;
  const paddingLeft = 140;
  const paddingRight = 40;
  const paddingTop = 30;
  const paddingBottom = 20;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="border-b border-slate-100 pb-5">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 font-sans">
          消费者不同平台的情感得分对比分析
        </h1>
        <p className="mt-1.5 text-sm text-slate-500">
          淘宝(TB) vs 京东(JD)：探究电商平台自身的履约履职网络是否会放大或平复用户对产品痛点的情感反应
        </p>
      </div>

      {/* Main Comparative View and Data Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

        {/* Visual Lollipop Comparison Chart */}
        <div className="lg:col-span-3 rounded-xl border border-slate-200 bg-white p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-3 gap-2">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-1.5">
                <Zap className="h-4.5 w-4.5 text-amber-500" />
                不同平台多维情感分对比（Lollipop 棒棒糖关系图）
              </h3>
              <p className="text-[11px] text-slate-400 mt-0.5">X 轴为情感系数[0.0 ~ 1.0]，棒棒糖的两头连线代表两平台的情感分落差线</p>
            </div>
            {/* Legend */}
            <div className="flex items-center gap-3 text-[10px] font-mono font-semibold">
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span> 淘宝客评</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span> 京东客评</span>
            </div>
          </div>

          {/* SVG Lollipop Plot */}
          <div className="relative w-full overflow-x-auto">
            <svg viewBox={`0 0 ${chartWidth} ${chartHeight + paddingTop + paddingBottom}`} className="w-[580px] h-[310px] mx-auto">
              
              {/* X Axis grid ticks [0.6 to 1.0] since all score is above 0.6 */}
              {[0.6, 0.7, 0.8, 0.9, 1.0].map((tick) => {
                const x = paddingLeft + ((tick - 0.6) / 0.4) * (chartWidth - paddingLeft - paddingRight);
                return (
                  <g key={tick} className="opacity-40">
                    <line x1={x} y1={paddingTop} x2={x} y2={chartHeight + paddingTop} stroke="#EBEEF5" strokeWidth="1" strokeDasharray="3 3" />
                    <text x={x} y={paddingTop - 10} textAnchor="middle" className="text-[10px] font-mono fill-slate-400 font-semibold">{tick.toFixed(1)}</text>
                  </g>
                );
              })}

              {/* Draw lollipops lines & circles for D1-D7 */}
              {platformSentiment.map((item, index) => {
                const rowHeight = chartHeight / platformSentiment.length;
                const y = paddingTop + index * rowHeight + rowHeight / 2;

                // Scale Taobao and JD to [0.6 - 1.0] viewport
                const xTaobao = paddingLeft + ((item.taobao - 0.6) / 0.4) * (chartWidth - paddingLeft - paddingRight);
                const xJD = paddingLeft + ((item.jd - 0.6) / 0.4) * (chartWidth - paddingLeft - paddingRight);

                const isSelected = selectedDimId === item.dimensionId;

                return (
                  <g key={item.dimensionId} className="transition-all">
                    {/* Hover Box */}
                    <rect
                      x={5}
                      y={y - rowHeight / 2}
                      width={chartWidth - 10}
                      height={rowHeight}
                      fill={isSelected ? "rgba(59, 130, 246, 0.04)" : "transparent"}
                      stroke={isSelected ? "rgba(59, 130, 246, 0.1)" : "transparent"}
                      strokeWidth="1"
                      className="cursor-pointer transition-colors"
                      onClick={() => setSelectedDimId(item.dimensionId)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    />

                    {/* Dimension Label */}
                    <text
                      x={paddingLeft - 12}
                      y={y + 4}
                      textAnchor="end"
                      className={`text-xs font-sans transition-colors ${
                        isSelected ? "fill-blue-600 font-extrabold" : "fill-slate-600 font-medium"
                      }`}
                    >
                      {item.dimension.split(" ")[0]}
                    </text>

                    {/* Connecting Gap bar between TB and JD */}
                    <line
                      x1={xTaobao}
                      y1={y}
                      x2={xJD}
                      y2={y}
                      stroke={isSelected ? "#3B82F6" : "#E2E8F0"}
                      strokeWidth={isSelected ? "5.5" : "3.5"}
                      strokeLinecap="round"
                      className="transition-all"
                    />

                    {/* Taobao Bubble (Blue) */}
                    <circle
                      cx={xTaobao}
                      cy={y}
                      r={isSelected ? "6" : "4.5"}
                      fill="#3B82F6"
                      stroke="#FFF"
                      strokeWidth="1.5"
                      className="transition-all"
                    />

                    {/* JD Bubble (Red) */}
                    <circle
                      cx={xJD}
                      cy={y}
                      r={isSelected ? "6" : "4.5"}
                      fill="#EF4444"
                      stroke="#FFF"
                      strokeWidth="1.5"
                      className="transition-all"
                    />

                    {/* Hover value indicators above lines */}
                    {isSelected && (
                      <g className="pointer-events-none">
                        {/* Taobao Score label */}
                        <text x={xTaobao} y={y - 10} textAnchor="middle" className="text-[9px] font-mono font-bold fill-blue-600 bg-white px-1">
                          {item.taobao.toFixed(2)}
                        </text>
                        {/* JD Score label */}
                        <text x={xJD} y={y - 10} textAnchor="middle" className="text-[9px] font-mono font-bold fill-red-600 bg-white px-1">
                          {item.jd.toFixed(2)}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}

              {/* Y Axis line */}
              <line x1={paddingLeft} y1={paddingTop} x2={paddingLeft} y2={chartHeight + paddingTop} stroke="#CBD5E1" strokeWidth="1" />
            </svg>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-3 rounded-lg text-xs text-slate-500">
            📌 <strong>棒棒糖连线长度：</strong> 代表淘宝和京东用户的情感差距。线长意味着该功能受两方物流履约售后和生态约束的影响极大。
          </div>
        </div>

        {/* Right Column - Empirical Delta Ranks */}
        <div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-900 border-b border-slate-100 pb-2.5 flex items-center gap-1.5">
              <Scale className="h-4.5 w-4.5 text-slate-500" />
              平台情感净差异度 (JD - TB Δ Delta)
            </h3>
            
            <p className="text-xs text-slate-500">自营物流渠道、保价响应效率在关键痛点上产生了巨大的社会缓震和净化机制：</p>

            <div className="space-y-2 max-h-[196px] overflow-y-auto pr-1">
              {sortedByDelta.map((ds, dIdx) => {
                const isSelected = selectedDimId === ds.dimensionId;
                return (
                  <div
                    key={ds.dimensionId}
                    onClick={() => setSelectedDimId(ds.dimensionId)}
                    className={`flex items-center justify-between p-2.5 rounded-lg border text-xs cursor-pointer transition-all ${
                      isSelected
                        ? "bg-slate-50 border-blue-200 ring-1 ring-blue-50"
                        : "bg-white hover:bg-slate-50/50 border-slate-150"
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-[9px] text-slate-400 font-bold">#0{dIdx + 1}</span>
                      <span className="font-semibold text-slate-800">{ds.dimension.split(" ")[0]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-400">({ds.jd.toFixed(2)} vs {ds.taobao.toFixed(2)})</span>
                      <span className={`inline-flex rounded-sm px-1.5 py-0.5 text-[10px] font-mono font-bold ${
                        ds.diff > 0.05
                          ? "bg-red-50 text-red-600"
                          : "bg-slate-100 text-slate-500"
                      }`}>
                        +{ds.diff.toFixed(2)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Platform explanation popup below list */}
            {selectedExplanation && (
              <div className="rounded-xl border border-blue-50 bg-blue-50/20 p-3.5 space-y-2 animate-fadeIn">
                <span className="inline-flex rounded-full bg-blue-105 border border-blue-150 text-blue-700 px-2 py-0.5 text-[9px] font-semibold">
                  错位成因剖析
                </span>
                <h4 className="text-xs font-bold text-slate-900">{selectedExplanation.title}</h4>
                <div className="text-[10px] text-blue-800 font-semibold font-mono tracking-wide">
                  冲突实质：{selectedExplanation.focus}
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed font-sans">{selectedExplanation.text}</p>
              </div>
            )}
          </div>

          <div className="mt-4 pt-3.5 border-t border-slate-100">
            <span className="text-[10px] text-slate-400 font-mono">
              * 情感分析利用 SnowNLP 面向智能学习机训练的微调词库。
            </span>
          </div>
        </div>

      </div>

      {/* Extended Comparative Insight block */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 space-y-4">
        <h3 className="text-sm font-semibold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-1.5">
          <ShoppingCart className="h-4.5 w-4.5 text-slate-500" />
          平台履约溢色效应对质：自营缓冲 vs 淘系拉锯
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          分析表明，平台情感差异并不均匀分布。D1(教学资源)、D2交互、D3过程管理等<strong>‘软件体验’</strong>在两平台几乎保持高满意水平，代表只要开机使用，学而思课程本身是优秀和具备品牌黏性的。
          真正的断开层发生在 D7 (售后价格补偿) 这一物理消费节点——京东自营物流送货和极速赔付充当了良性隔离层，极大地平息和吸收了硬件碎屏和降价引发的痛苦情绪；而淘系商家的扯皮客服大大加重了用户在同一软硬件痛点上的创伤，最终导致同一维度发生高达 <strong>0.21 分的情绪断崖式雪崩</strong>。
        </p>
      </div>

    </div>
  );
}
