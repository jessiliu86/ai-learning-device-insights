import React, { useState } from "react";
import { ShieldCheck, MessageSquare, Megaphone, HelpCircle, Layers, ArrowRight, CornerDownRight, AlertTriangle, Info } from "lucide-react";
import { dimensions, triPartyAttention } from "../data/mockData";

export default function Overview({ onNavigate }: { onNavigate: (page: number) => void }) {
  const [activeSide, setActiveSide] = useState<"standard" | "official" | "user" | null>(null);

  const stats = [
    { title: "消费者评论总量", value: "9,317", unit: "条", subtitle: "淘宝偏售后, 京东更看重品质", icon: MessageSquare, color: "text-red-500 bg-red-50" },
    { title: "官方宣发文本", value: "242", unit: "篇", subtitle: "微博硬广 + 知乎深度软文", icon: Megaphone, color: "text-emerald-500 bg-emerald-50" },
    { title: "国家监管标准", value: "GB/T 46348", unit: "2025", subtitle: "新一代移动学习终端规范", icon: ShieldCheck, color: "text-indigo-500 bg-indigo-50" },
    { title: "跨界对齐维度", value: "7", unit: "个", subtitle: "全功能社会理论(FFST)模型", icon: Layers, color: "text-blue-500 bg-blue-50" },
  ];

  const sidebarDetail = {
    standard: {
      title: "【立规端】国家标准 (GB/T 46348-2025)",
      role: "秩序重构与合规则律",
      focus: "D1 教学内容资源 (55.5%) 与 D2 信息交互 (19.9%)",
      desc: "聚焦数字内容的‘三审三校’合法合规。着重强调未成年人生物传感器数据（人脸、人眼、声纹）的最小化调取、本地化加密存储，以及刚性休眠时长以守护青少年视听状态。"
    },
    official: {
      title: "【宣传端】企业官方（学而思品牌公关）",
      role: "完美虚设与高调营销",
      focus: "D1 精准原班人马课程 (57.5%) 与 D3 纯净环境管理 (14.7%)",
      desc: "极力构设‘清北名校名师带回家’、‘11层红光润眼屏幕黑科技’的完美陪伴景象。高配描述售后与功能安全（情感达1.00满分），主动隐匿可能引发争议的维修退换代价及底层隐私泄露合规条目。"
    },
    user: {
      title: "【反响端】终端消费者（淘宝、京东评论群）",
      role: "现实挣扎与刚性诉求",
      focus: "D1 同步资源获取 (47.3%) 与 D5 视听反馈痛点 (13.1%)",
      desc: "既享受网课解放双手的便捷，又深受降价价格背刺（D7 差评之首）、低效电池尿崩、摔触后高达1600元的天价类纸屏幕更换费等体验背叛。人脸验证及过度定位也是其隐秘不安全感的来源。"
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="border-b border-slate-100 pb-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 font-sans">
              移动学习终端的功能期望与现实反馈
            </h1>
            <p className="mt-1.5 text-sm text-slate-500">
              国家标准-企业宣传-消费者反馈三方三角对齐研究数据展示驾驶舱
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-mono font-medium text-slate-600">
            数据更新日期: 2026.03
          </span>
        </div>
      </div>

      {/* Main Highlights Card */}
      <div className="rounded-xl border border-blue-100 bg-linear-to-r from-blue-50/50 via-indigo-50/20 to-white p-6 shadow-xs">
        <h2 className="flex items-center gap-2 text-md font-semibold text-slate-900">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-500 text-xs font-bold text-white">!</span>
          核心研究共识
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700">
          本研究发现，学而思学习机在<strong>国家标准监督</strong>、<strong>官方大肆宣传</strong>与<strong>终端消费者体验</strong>之间存在显著的
          <span className="text-red-500 font-semibold px-0.5">结构性沟通偏移</span>。
          尽管三方在“D1 教学内容与资源”维度达成了极高共识（均占其核心要件的主力大额篇幅），但官方品牌宣传极力
          <strong>回避并美化</strong>了消费者最为关切的<strong>售后退换时效、机器维修高代价（D7）</strong>以及国家强制规范的<strong>个人信息私密权限保护（D4）</strong>。
          完美的“拟态营销环境”与残缺的用户“使用日常体验”构成了强烈反差。
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 rounded bg-red-100/70 px-2.5 py-1 text-xs font-medium text-red-700">
            <AlertTriangle className="h-3 w-3" />
            最大错位：售后服务情感落差达 0.27
          </span>
          <span className="inline-flex items-center gap-1 rounded bg-amber-100/70 px-2.5 py-1 text-xs font-medium text-amber-700">
            <ShieldCheck className="h-3 w-3" />
            合规盲区：个人信息保护讨论度低于 0.3%
          </span>
          <span className="inline-flex items-center gap-1 rounded bg-indigo-100/70 px-2.5 py-1 text-xs font-medium text-indigo-700">
            <Layers className="h-3 w-3" />
            双峰效应：寒暑假高负荷与双十一促销是情绪震荡波
          </span>
        </div>
      </div>

      {/* Statistical Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div key={idx} className="academic-card rounded-xl border border-slate-200/80 bg-white p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">{item.title}</span>
                <div className={`p-1.5 rounded-lg ${item.color}`}>
                  <IconComp className="h-4 w-4" />
                </div>
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl font-bold tracking-tight text-slate-900 font-mono">{item.value}</span>
                <span className="text-xs text-slate-400 font-mono">{item.unit}</span>
              </div>
              <p className="mt-2 text-xs text-slate-500">{item.subtitle}</p>
            </div>
          );
        })}
      </div>

      {/* Triangulation Diagnostic Model View */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3 rounded-xl border border-slate-200 bg-white p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-1.5">
                <span>三方利益相关者利益错位三角模型</span>
                <span className="cursor-help text-slate-400" title="点击三角节点即可呼出深度利益分析">
                  <HelpCircle className="h-4.5 w-4.5" />
                </span>
              </h3>
              <span className="text-xs text-slate-400">点击下方节点交互探索 🧭</span>
            </div>
            <p className="my-2.5 text-xs text-slate-500">
              全功能社会理论（FFST）指出，健康的科技生态系统应当达成行业规范、官方宣言与消费者切身经验的事实对齐。点击三角形任意极点查看对应实证数据轮廓：
            </p>
          </div>

          {/* Interactive SVG Diagram */}
          <div className="relative py-4 flex items-center justify-center bg-slate-50/50 rounded-lg border border-dashed border-slate-100 my-2">
            <svg viewBox="0 0 400 320" className="w-[340px] h-[272px] drop-shadow-xs transition-all">
              {/* Triangular grid background */}
              <polygon points="200,40 60,260 340,260" fill="none" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4" />
              <circle cx="200" cy="180" r="60" fill="none" stroke="#F1F5F9" strokeWidth="1" />

              {/* Central Connection Lines (Tension system) */}
              <line x1="200" y1="40" x2="200" y2="183" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="60" y1="260" x2="200" y2="183" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="340" y1="260" x2="200" y2="183" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />

              {/* Triangle Centers indicator */}
              <g className="opacity-70">
                <circle cx="200" cy="183" r="4" fill="#64748B" />
                <text x="210" y="187" className="text-[10px] font-mono fill-slate-400 font-semibold">Tension Core</text>
              </g>

              {/* Node 1: National Standards (Top) */}
              <g 
                className="cursor-pointer group select-none" 
                onClick={() => setActiveSide(activeSide === "standard" ? null : "standard")}
              >
                <circle cx="200" cy="40" r="28" fill={activeSide === "standard" ? "#4F46E5" : "#EEF2FF"} stroke="#4F46E5" strokeWidth={activeSide === "standard" ? "3" : "2"} className="transition-all duration-300" />
                <path d="M195,34 L205,34 M195,38 L205,38 M197,42 L203,42" stroke={activeSide === "standard" ? "#FFF" : "#4F46E5"} strokeWidth="2" />
                <text x="200" y="85" textAnchor="middle" className={`text-xs font-bold transition-colors ${activeSide === "standard" ? "fill-indigo-600 font-extrabold" : "fill-slate-700"}`}>国家标准 (规范)</text>
                <text x="200" y="99" textAnchor="middle" className="text-[9px] font-mono fill-indigo-400 font-semibold">GB/T 46348-2025</text>
              </g>

              {/* Node 2: Official Marketing (Bottom Left) */}
              <g 
                className="cursor-pointer group select-none" 
                onClick={() => setActiveSide(activeSide === "official" ? null : "official")}
              >
                <circle cx="60" cy="260" r="28" fill={activeSide === "official" ? "#10B981" : "#ECFDF5"} stroke="#10B981" strokeWidth={activeSide === "official" ? "3" : "2"} className="transition-all duration-300" />
                <path d="M52,254 L62,254 L64,264 L54,264 Z" fill="none" stroke={activeSide === "official" ? "#FFF" : "#10B981"} strokeWidth="2" />
                <text x="60" y="302" textAnchor="middle" className={`text-xs font-bold transition-colors ${activeSide === "official" ? "fill-emerald-600 font-extrabold" : "fill-slate-700"}`}>官方宣传 (期望)</text>
                <text x="60" y="314" textAnchor="middle" className="text-[9px] font-mono fill-emerald-500 font-semibold">微博 / 知乎宣发</text>
              </g>

              {/* Node 3: Real Reviews (Bottom Right) */}
              <g 
                className="cursor-pointer group select-none" 
                onClick={() => setActiveSide(activeSide === "user" ? null : "user")}
              >
                <circle cx="340" cy="260" r="28" fill={activeSide === "user" ? "#EF4444" : "#FEF2F2"} stroke="#EF4444" strokeWidth={activeSide === "user" ? "3" : "2"} className="transition-all duration-300" />
                <path d="M334,254 Q340,248 346,254 Q350,266 334,266" fill="none" stroke={activeSide === "user" ? "#FFF" : "#EF4444"} strokeWidth="2" />
                <text x="340" y="302" textAnchor="middle" className={`text-xs font-bold transition-colors ${activeSide === "user" ? "fill-red-600 font-extrabold" : "fill-slate-700"}`}>消费者评论 (现实)</text>
                <text x="340" y="314" textAnchor="middle" className="text-[9px] font-mono fill-red-400 font-semibold">TB & JD (9317条)</text>
              </g>
            </svg>

            {/* Quick Helper Floating Text */}
            {!activeSide && (
              <div className="absolute top-2.5 right-2.5 flex items-center gap-1 bg-blue-100 text-blue-800 text-[10px] px-2 py-0.5 rounded-sm font-semibold animate-pulse">
                <Info className="h-3 w-3" /> 点击角点探索冲突详情
              </div>
            )}
          </div>

          <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg border border-slate-100">
            <div className="text-[11px] text-slate-500 font-mono">
              ★ 三方汇合交涉力 D1 主页最强 (均占位超过47%)；售后 D7 与合规 D4 发生完全断层。
            </div>
            <button 
              className="text-xs font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1"
              onClick={() => onNavigate(2)} // To Framework page
            > 
              查看学术研究框架 <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Selected Stakeholder Information Card */}
        <div className="lg:col-span-2 flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-1">
              <Layers className="h-4.5 w-4.5 text-blue-500" />
              利益主体深度剖析面板
            </h3>

            {activeSide ? (
              <div className="space-y-4 animate-fadeIn">
                <div className="rounded-lg p-3 bg-linear-to-b from-slate-50 to-white border border-slate-100">
                  <div className="text-xs font-bold text-slate-400 font-mono uppercase tracking-widest">Selected Entity</div>
                  <div className="text-md font-bold text-slate-800 mt-0.5">{sidebarDetail[activeSide].title}</div>
                  <div className="inline-flex mt-1.5 rounded-full bg-blue-100 text-blue-700 font-bold px-2 py-0.5 text-[10px]">
                    研究角色：{sidebarDetail[activeSide].role}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-400">主要涉及维度及权重关注点：</div>
                  <p className="mt-1 text-sm text-slate-800 font-medium">{sidebarDetail[activeSide].focus}</p>
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-400">实证文献/文本表现摘要：</div>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed font-sans bg-slate-50 p-2.5 rounded-md border border-slate-100/80">
                    {sidebarDetail[activeSide].desc}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-12 text-slate-400 bg-slate-50/50 rounded-lg border border-dashed border-slate-200">
                <HelpCircle className="h-10 w-10 text-slate-300 stroke-1" />
                <span className="mt-2 text-xs font-semibold text-slate-600">选择左侧三角模型的任一级点</span>
                <span className="mt-1 text-[11px] max-w-[200px]">调阅该主体的学术立场、文本抽取总量及核心痛点。</span>
              </div>
            )}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100">
            <div className="text-xs font-bold text-slate-800">重要研究事实指示:</div>
            <ul className="mt-2 space-y-1.5 text-xs text-slate-500">
              <li className="flex items-start gap-1">
                <CornerDownRight className="h-3.5 w-3.5 text-indigo-500 shrink-0 mt-0.5" />
                <span><strong>7个功能维度</strong>全面覆盖学习机日常软硬核心考量。</span>
              </li>
              <li className="flex items-start gap-1">
                <CornerDownRight className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>国标蓝、官方绿、用户红</strong>：全平台图表一律采用此严格配色以利对照。</span>
              </li>
              <li className="flex items-start gap-1">
                <CornerDownRight className="h-3.5 w-3.5 text-red-500 shrink-0 mt-0.5" />
                <span><strong>雷达错位图</strong>展示官方温阁营销与售后价格背刺的强烈反差。</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Triangulation Diagnostic Highlight List */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-sm font-semibold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-1.5">
          <Layers className="h-4.5 w-4.5 text-slate-500" />
          平台七大维度特征透视图（核心数据一览）
        </h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600 font-sans border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50 text-[11px] font-mono font-semibold text-slate-500 uppercase tracking-wider">
                <th className="py-2.5 px-3">研究维度 ID</th>
                <th className="py-2.5 px-3">维度内涵</th>
                <th className="py-2.5 px-3 text-indigo-600">国家标准 (GB/T)</th>
                <th className="py-2.5 px-3 text-emerald-600">企业官方微博宣发</th>
                <th className="py-2.5 px-3 text-red-600">消费者真实痛点</th>
                <th className="py-2.5 px-3 text-center">探知错位度</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {dimensions.map((dim) => {
                // Find matching percents in triPartyAttention
                const att = triPartyAttention.find(a => a.dimensionId === dim.id);
                const stdPct = att ? att.standard : 0;
                const offPct = att ? att.official : 0;
                const usrPct = att ? att.user : 0;

                // Calculate gross mismatch
                const mG = Math.abs(offPct - usrPct).toFixed(1);

                return (
                  <tr key={dim.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 px-3 font-mono font-bold text-slate-900">{dim.id}</td>
                    <td className="py-3 px-3">
                      <div className="font-semibold text-slate-800">{dim.name}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5 max-w-[280px] line-clamp-1" title={dim.description}>
                        {dim.description}
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <div className="text-slate-800 font-mono font-medium">{stdPct}%</div>
                      <div className="text-[10px] text-slate-400 max-w-[150px] line-clamp-1" title={dim.focusPointStandard}>
                        {dim.focusPointStandard}
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <div className="text-slate-800 font-mono font-medium">{offPct}%</div>
                      <div className="text-[10px] text-slate-400 max-w-[150px] line-clamp-1" title={dim.focusPointOfficial}>
                        {dim.focusPointOfficial}
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <div className="text-slate-800 font-mono font-medium">{usrPct}%</div>
                      <div className="text-[10px] text-slate-400 max-w-[150px] line-clamp-1" title={dim.focusPointUser}>
                        {dim.focusPointUser}
                      </div>
                    </td>
                    <td className="py-3 px-3 text-center">
                      <span className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-mono font-semibold ${
                        Number(mG) > 10 ? "bg-red-50 text-red-600" : "bg-slate-100 text-slate-600"
                      }`}>
                        Δ {mG}%
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
