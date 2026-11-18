import React, { useState } from "react";
import { HelpCircle, Sparkles, Scale, RefreshCw, StarHalf, AlertTriangle, ShieldAlert, ArrowDownRight, CornerDownRight } from "lucide-react";
import { officialUserSentimentGap, SentimentGapData } from "../data/mockData";

export default function SentimentGap() {
  const [selectedDimId, setSelectedDimId] = useState<string>("D7");

  const mismatchDetails: Record<string, { subtitle: string; dangerLevel: "critical" | "warning" | "low"; explanation: string }> = {
    D7: {
      subtitle: "D7 售后服务 (差额大爆发 0.27)",
      dangerLevel: "critical",
      explanation: "官方将其视为购机协议的一环，微博里宣示‘千元赠礼保修、名师网课永久续免服务’，情感饱和度达满分。而用户面对‘碎一角即需全自费更换类纸屏高达1600元’，以及‘购机7天以上即不补700元降价差额’，引发了买家群强烈的价格背刺与背叛情愫，情感得分断流至 0.73。这是典型的商业期望落空重灾区。"
    },
    D4: {
      subtitle: "D4 个人信息保护 (合规安全错位 0.21)",
      dangerLevel: "critical",
      explanation: "新国标红线重规处。官方自认处于合规安全的高地（1.00评级），极少主动进行信任沟通。而消费者需要人脸打卡检测坐姿或要求注册不知名第三方平台，从而激发对未成年人隐私和摄像头持续偷拍的暗地惶恐。这凸显了品牌与公众在信任建设层面的虚浮。"
    },
    D6: {
      subtitle: "D6 硬件基础能力 (硬件低代偿 0.04)",
      dangerLevel: "warning",
      explanation: "学而思主打‘外观精致阻尼拉丝拉环’。然而用眼和做练习是多频、重负荷的高频行为。用了一整年之后出现的开机蓝屏假死、用一节网课即亏电报警的‘真痛点’，暴露出外壳小精致与底层芯片耐用度不够之间的失调。"
    },
    D1: {
      subtitle: "D1 教学内容与资源 (小幅磨损 0.03)",
      dangerLevel: "low",
      explanation: "名师资源是学而思的核心高阶护城河。官方将其捧上神坛（0.99），而大众对大语文教研、原班外教拼读也保持 0.96 的一致认可，属于实质对齐性最高的极强板块。唯有初高中考卷更新较慢和部分高中网课二次自费买卷遭遇零星不快。"
    },
    D2: {
      subtitle: "D2 教学信息交互 (高阶智能落差 0.02)",
      dangerLevel: "low",
      explanation: "官方夸称‘指读机器人伴学、AI智能多轮对局问答’。日常反馈中由于孩子幼嫩发音、口齿欠清导致的死板词条机械式复读、偶尔指读慢卡顿，与高昂的AI溢价值相比稍显降格，但没有影响主流顺畅感。"
    },
    D3: {
      subtitle: "D3 教学过程管理 (纯净生态高度对齐 0.00)",
      dangerLevel: "low",
      explanation: "完美对齐！不管是官方宣称一键锁屏远程绿色限额，还是现实中家长利用微信小程序给孩子做硬性日常熄屏、作息时防沉迷干预控制，均获得了接近满分的契合评级。该功能对职场爸妈具有十足的说服力和统治级好评。"
    },
    D5: {
      subtitle: "D5 视听健康 (护眼承诺的微小磨砂 0.02)",
      dangerLevel: "low",
      explanation: "学而思在微博与抖音中铺排‘红光护眼黑科技、11层无眩光滤纸润目’。虽然部分买家买回家反馈长期做卷阅读，眼睛依旧会出现疲劳干涩感，但两方总体对此项类纸屏幕质量对冲好感不低（0.97）。"
    }
  };

  const selectedMesh = mismatchDetails[selectedDimId] || mismatchDetails["D7"];

  // Custom visual Divergent progress bars
  const maxGap = 0.3; // max visual scale for the gap

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="border-b border-slate-100 pb-5">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 font-sans">
          官方宣传情感与用户真实情感对应错位分析
        </h1>
        <p className="mt-1.5 text-sm text-slate-500">
          对比研究“完美公关温室期望”与“现实柴米油盐反馈”。当差异过高（落差值 Δ &gt; 0.10）时，将产生强烈的逆反心理
        </p>
      </div>

      {/* Discrepancy Multi-component panels */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

        {/* Horizontal Divergent Bar Chart - Visual offset graph */}
        <div className="lg:col-span-3 rounded-xl border border-slate-200 bg-white p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-3 gap-2">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-1.5">
                <Scale className="h-4.5 w-4.5 text-indigo-500" />
                各维度真实情感落差分布直观对照轴（Δ Value）
              </h3>
              <p className="text-[11px] text-slate-400 mt-0.5">连线指示官方公关（绿 ⬤）与真实体验（红 ⬤）的情感缺口：越长代表落差感越痛</p>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-mono font-semibold">
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></span> 官方理想预期</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-red-400 rounded-full"></span> 现实体验评价</span>
            </div>
          </div>

          {/* Interactive Gap axis list */}
          <div className="space-y-4.5 py-2">
            {officialUserSentimentGap.map((item) => {
              const isSelected = selectedDimId === item.dimensionId;
              
              // Map scores in [0.7 to 1.0] to direct percentage scales for pristine css layout
              const officialPct = ((item.official - 0.7) / 0.3) * 100;
              const userPct = ((item.user - 0.7) / 0.3) * 100;

              return (
                <div
                  key={item.dimensionId}
                  onClick={() => setSelectedDimId(item.dimensionId)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? "bg-slate-50 border-slate-350 shadow-xs"
                      : "bg-white hover:bg-slate-50/40 border-slate-205/60"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-semibold mb-2 text-slate-700">
                    <span className="font-mono text-slate-900">{item.dimension.split(" ")[0]}</span>
                    <span className="font-mono text-slate-500">
                      官方 {item.official.toFixed(2)} vs 用户 {item.user.toFixed(2)}
                      <span className={`ml-2 px-1.5 py-0.5 font-bold rounded ${
                        item.gap > 0.10 ? "bg-red-50 text-red-600" : "bg-slate-100 text-slate-500"
                      }`}>
                        落差 Δ {item.gap.toFixed(2)}
                      </span>
                    </span>
                  </div>

                  {/* Dual Dot relative slider tracks */}
                  <div className="relative w-full bg-slate-100 h-2.5 rounded-full mt-3">
                    {/* Connecting bridge line in slider track */}
                    <div
                      className={`absolute h-full rounded-full transition-all ${
                        item.gap > 0.10 ? "bg-red-400" : "bg-slate-300"
                      }`}
                      style={{
                        left: `${Math.min(officialPct, userPct)}%`,
                        width: `${Math.abs(officialPct - userPct)}%`
                      }}
                    />

                    {/* User Sentiment Node (Red dot) */}
                    <div
                      className="absolute -top-1 w-4.5 h-4.5 bg-red-400 border border-white rounded-full shadow-xs transition-all hover:scale-125"
                      style={{ left: `calc(${userPct}% - 9px)` }}
                      title={`用户评价: ${item.user.toFixed(2)}`}
                    />

                    {/* Official Sentiment Node (Emerald dot) */}
                    <div
                      className="absolute -top-1 w-4.5 h-4.5 bg-emerald-500 border border-white rounded-full shadow-xs transition-all hover:scale-125"
                      style={{ left: `calc(${officialPct}% - 9px)` }}
                      title={`官方定位: ${item.official.toFixed(2)}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-slate-50 border border-slate-150 p-3 rounded-lg flex items-center justify-between text-xs text-slate-500">
            <span>🖱️ <strong>点击任何维度长条</strong> 调阅为何有些期望高耸、售后却崩溃的归因。</span>
            <span className="font-mono text-[9px]">Calculated offset index</span>
          </div>
        </div>

        {/* Right Column - Deep Discrepancy Diagnostics */}
        <div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-900 border-b border-slate-100 pb-2.5 flex items-center gap-1.5">
              <ShieldAlert className="h-4.5 w-4.5 text-slate-600" />
              期望错位与履约深度诊断面板
            </h3>

            {/* Quick selectors for D1-D7 internally for ease of use */}
            <div className="flex flex-wrap gap-1.5">
              {officialUserSentimentGap.map(dim => (
                <button
                  key={dim.dimensionId}
                  onClick={() => setSelectedDimId(dim.dimensionId)}
                  className={`text-[10px] px-2 py-1 rounded transition-all font-mono font-bold ${
                    selectedDimId === dim.dimensionId
                      ? "bg-slate-850 text-white"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                  }`}
                >
                  {dim.dimensionId}
                </button>
              ))}
            </div>

            {selectedMesh ? (
              <div className="space-y-4 animate-fadeIn">
                <div className={`p-3.5 rounded-xl border ${
                  selectedMesh.dangerLevel === "critical"
                    ? "bg-red-50 text-red-900 border-red-200"
                    : selectedMesh.dangerLevel === "warning"
                    ? "bg-amber-50 text-amber-900 border-amber-200"
                    : "bg-slate-50 text-slate-900 border-slate-200"
                }`}>
                  <span className={`inline-flex rounded-full px-2 py-0.5 text-[9px] font-mono font-extrabold uppercase tracking-widest ${
                    selectedMesh.dangerLevel === "critical"
                      ? "bg-red-100 text-red-700"
                      : selectedMesh.dangerLevel === "warning"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-slate-200 text-slate-600"
                  }`}>
                    错位预警级: {selectedMesh.dangerLevel === "critical" ? "CRITICAL (极重度)" : selectedMesh.dangerLevel === "warning" ? "WARNING (高位)" : "STANDARD (对准)"}
                  </span>
                  <h4 className="text-xs font-bold mt-2 font-sans">{selectedMesh.subtitle}</h4>
                </div>

                <div>
                  <h5 className="text-[10px] font-bold text-slate-400 font-mono uppercase tracking-widest">立论错综矛盾机理剖析：</h5>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed font-sans bg-slate-50/50 p-3 rounded-lg border border-slate-100">
                    {selectedMesh.explanation}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-xs text-slate-400">请选择上面的维度以查看归因深度报告。</p>
            )}
          </div>

          <div className="mt-5 pt-3.5 border-t border-slate-100">
            <div className="text-[11px] font-bold text-slate-800">期望违背（Expectance Disconfirmation）效应:</div>
            <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed font-sans">
              根据社会契约理论，官方宣誓期望越高，用户买回家应对质量下滑的容忍度反而一降到底。这能合理解释为什么同在售后端（D7），缺乏公关掩饰的部分反而能获得冷静对应，而官方大张旗鼓吹嘘的部分一有磨损便引爆了极度高热差评（淘宝0.69）。
            </p>
          </div>
        </div>

      </div>

      {/* Discrepancy Matrix grid table with full summary */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-sm font-semibold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-1.5">
          <Scale className="h-4.5 w-4.5 text-indigo-500" />
          官方vs用户七个维度错位矩阵（Discrepancy Matrix）
        </h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600 font-sans border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50 text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-wider">
                <th className="py-2.5 px-3">研究维度</th>
                <th className="py-2.5 px-3 uppercase text-emerald-600 font-bold">官方情感度 (PR)</th>
                <th className="py-2.5 px-3 uppercase text-red-500 font-bold">用户反馈情感 (TB/JD)</th>
                <th className="py-2.5 px-3 uppercase">落差值 (Δ Gap)</th>
                <th className="py-2.5 px-3">错位性质状态</th>
                <th className="py-2.5 px-3">战略建议</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {officialUserSentimentGap.map((gapItem) => (
                <tr key={gapItem.dimensionId} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 px-3 font-semibold text-slate-800">{gapItem.dimension}</td>
                  <td className="py-3 px-3 font-mono font-semibold text-emerald-600">{gapItem.official.toFixed(2)}</td>
                  <td className="py-3 px-3 font-mono font-semibold text-rose-500">{gapItem.user.toFixed(2)}</td>
                  <td className="py-3 px-3 font-mono font-extrabold text-slate-900">
                    <span className={`rounded px-1.5 py-0.5 text-[10px] ${
                      gapItem.gap > 0.10 ? "bg-red-50 text-red-600 font-extrabold" : "bg-slate-100 text-slate-600"
                    }`}>
                      Δ {gapItem.gap.toFixed(2)}
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[9px] font-mono font-bold ${
                      gapItem.gap >= 0.20
                        ? "bg-red-50 text-red-700"
                        : gapItem.gap > 0.02
                        ? "bg-amber-50 text-amber-700"
                        : "bg-emerald-50 text-emerald-700"
                    }`}>
                      {gapItem.gap >= 0.20 ? "重度利益撕裂" : gapItem.gap > 0.02 ? "局部期望倾覆" : "良性预期对齐"}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-[11px] text-slate-500 max-w-[280px]">
                    {gapItem.gap >= 0.20 
                      ? "急需建立低代价维保换屏体系、明确补偿承诺" 
                      : gapItem.gap > 0.02 
                      ? "减少宣传中的夸张字眼、真实披露晶圆照度消耗" 
                      : "保持极富竞争力课程原班优势，常态保活"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
