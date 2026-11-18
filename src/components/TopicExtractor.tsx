import React, { useState } from "react";
import { HelpCircle, Star, AlertTriangle, Layers, Tag, Bookmark, CheckCircle, Search, Info } from "lucide-react";
import { triPartyTopics, TopicItem } from "../data/mockData";

export default function TopicExtractor() {
  const [activeTab, setActiveTab] = useState<"standard" | "official" | "userPositive" | "userNegative">("standard");
  const [selectedTopicId, setSelectedTopicId] = useState<number>(0);

  const tabs = [
    { key: "standard", label: "新国标功能主题 (GB/T)", icon: Bookmark, badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-100" },
    { key: "official", label: "官方品牌宣发主题", icon: Tag, badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100" },
    { key: "userPositive", label: "消费者好评提取", icon: Star, badgeColor: "bg-blue-50 text-blue-700 border-blue-100" },
    { key: "userNegative", label: "消费者差评/恶评爆发", icon: AlertTriangle, badgeColor: "bg-rose-50 text-rose-700 border-rose-100" },
  ];

  const currentTopicsList: TopicItem[] = triPartyTopics[activeTab];
  // Auto-correct selected topic ID if it falls out of range on tab switch
  const selectedTopic = currentTopicsList.find(t => t.id === selectedTopicId) || currentTopicsList[0];

  // Colors based on Tab
  const getThemeColors = () => {
    switch (activeTab) {
      case "standard": return { primary: "indigo", bg: "bg-indigo-500", text: "text-indigo-600", border: "border-indigo-100" };
      case "official": return { primary: "emerald", bg: "bg-emerald-500", text: "text-emerald-600", border: "border-emerald-100" };
      case "userPositive": return { primary: "blue", bg: "bg-blue-500", text: "text-blue-600", border: "border-blue-100" };
      case "userNegative": return { primary: "rose", bg: "bg-rose-500", text: "text-rose-600", border: "border-rose-100" };
    }
  };

  const colors = getThemeColors();

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="border-b border-slate-100 pb-5">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 font-sans">
          多方文本语料主题模型提取
        </h1>
        <p className="mt-1.5 text-sm text-slate-500">
          基于 BERTopic & LDA 主题聚类的文本挖掘结果：解析国家规范、企业造势和用户痛点的语义网络
        </p>
      </div>

      {/* Tabs Selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {tabs.map((t) => {
          const IconComp = t.icon;
          return (
            <button
              key={t.key}
              onClick={() => {
                setActiveTab(t.key as any);
                setSelectedTopicId(0); // Reset selection
              }}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-xs font-semibold tracking-wide transition-all ${
                activeTab === t.key
                  ? `bg-white border-slate-300 shadow-sm text-slate-900 font-bold ring-2 ring-blue-500/10`
                  : `bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-500`
              }`}
            >
              <IconComp className={`h-4.5 w-4.5 shrink-0`} />
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Main Board */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

        {/* Left Topics List */}
        <div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-5 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
            <span className="text-xs font-bold text-slate-400 font-mono tracking-widest uppercase">Topics Mined ({currentTopicsList.length})</span>
            <span className="text-[10px] text-slate-400 font-mono">BERTopic Clustering</span>
          </div>

          <div className="space-y-2 pt-1 max-h-[360px] overflow-y-auto pr-1">
            {currentTopicsList.map((topic) => {
              const isSelected = selectedTopic && selectedTopic.id === topic.id;
              return (
                <div
                  key={topic.id}
                  onClick={() => setSelectedTopicId(topic.id)}
                  className={`academic-card group cursor-pointer border rounded-xl p-3.5 transition-all text-left ${
                    isSelected
                      ? `bg-slate-50/80 border-slate-300 ring-1 ring-slate-100`
                      : `bg-white hover:bg-slate-50/40 border-slate-200/80`
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-slate-400">THEME #{topic.id}</span>
                    <span className="font-mono text-xs font-bold text-slate-800">
                      占比 {topic.percentage}%
                    </span>
                  </div>
                  <h4 className="mt-1.5 text-xs font-bold text-slate-800 leading-snug line-clamp-2">
                    {topic.title}
                  </h4>
                  <div className="mt-2.5 flex items-center justify-between">
                    <span className="inline-flex rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-mono font-medium text-slate-500">
                      {topic.dimension.split(" ")[0]}
                    </span>
                    <span className={`text-[10px] font-bold ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5`}>
                      深入细节 →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="rounded-lg p-3 bg-slate-50 text-[11px] text-slate-500 font-mono border border-slate-100">
            <strong>📊 提示：</strong> 算法从淘宝京东抓取全维度差评聚类出以 D7 售后与价格、D6 硬件卡顿电池短命为首的主题，而好评则几乎全落位在 D1 同步课程名师英语资源。
          </div>
        </div>

        {/* Right Topic Details */}
        <div className="lg:col-span-3 rounded-xl border border-slate-200 bg-white p-6 flex flex-col justify-between">
          {selectedTopic ? (
            <div className="space-y-5 animate-fadeIn">
              
              {/* Header Box */}
              <div className="border-b border-slate-100 pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] rounded-sm text-white px-2 py-0.5 font-mono ${colors.bg}`}>
                      TOPIC {selectedTopic.id}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-150">
                      语料覆盖率: {selectedTopic.percentage}%
                    </span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-400">
                    分类归属: {selectedTopic.dimension}
                  </span>
                </div>
                <h3 className="mt-3.5 text-md font-bold text-slate-905 tracking-tight leading-snug">
                  {selectedTopic.title}
                </h3>
              </div>

              {/* Summary Description */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 font-mono tracking-widest uppercase">学术内涵阐发 & 语义摘要：</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100 font-sans">
                  {selectedTopic.summary}
                </p>
              </div>

              {/* Keywords weights section */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 font-mono tracking-widest uppercase mb-3">高权重语义特征词 TF-IDF 分布：</h4>
                <div className="space-y-2.5">
                  {selectedTopic.keywords.map((kw, kIdx) => (
                    <div key={kIdx} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono font-medium text-slate-700 flex items-center gap-1.5">
                          <CheckCircle className={`h-3.5 w-3.5 ${colors.text}`} />
                          {kw.word}
                        </span>
                        <span className="font-mono text-slate-400 font-semibold">{kw.weight.toFixed(2)}</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${colors.bg}`}
                          style={{ width: `${kw.weight * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ) : (
            <div className="text-center py-20 text-slate-400">
              <CheckCircle className="h-10 w-10 mx-auto text-slate-300 stroke-1" />
              <p className="mt-2 text-xs">请在左侧选择对应的主题，查看核心特征词的权重分布。</p>
            </div>
          )}

          <div className="border-t border-slate-100 pt-3.5 mt-5 flex flex-col sm:flex-row items-center justify-between gap-2.5">
            <span className="text-[10px] text-slate-400 font-mono">
              * BERTopic 基于双向Transformer模型的自适应表征提取，能过滤传统LDA易导致的语义碎片化，保证词组的高连贯性。
            </span>
          </div>

        </div>

      </div>

      {/* Semantic Grid / Word Tags cloud component */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-sm font-semibold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-1.5">
          <Layers className="h-4.5 w-4.5 text-slate-500" />
          多方高频共鸣词云聚类快照
        </h3>
        <p className="text-xs text-slate-500 mt-2">
          以下展示跨越三方通道、语义权重最高的高频共鸣和对立热词标签。字号大小与多维语料库中挖掘的置信度成正比：
        </p>

        <div className="mt-4 flex flex-wrap gap-2.5 justify-center py-4 bg-slate-50 rounded-lg border border-dashed border-slate-150 p-4">
          <span className="text-[10px] font-mono font-bold uppercase text-indigo-700 bg-indigo-50 px-2 py-1.5 rounded cursor-pointer hover:scale-105 transition-transform border border-indigo-100">GB/T 内容合法合规 (0.88)</span>
          <span className="text-[14px] font-mono font-extrabold uppercase text-indigo-700 bg-indigo-50 px-2.5 py-1.5 rounded cursor-pointer hover:scale-105 transition-transform border border-indigo-100">GB/T 个人健康休眠 (0.91)</span>
          <span className="text-[11px] font-mono font-bold uppercase text-indigo-700 bg-indigo-50 px-2.5 py-1.5 rounded cursor-pointer hover:scale-105 transition-transform border border-indigo-100">GB/T 生态脱敏隔离 (0.82)</span>

          <span className="text-[16px] font-mono font-extrabold uppercase text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded cursor-pointer hover:scale-105 transition-transform border border-emerald-100">学而思清北原班名师 (0.94)</span>
          <span className="text-[13px] font-mono font-extrabold uppercase text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded cursor-pointer hover:scale-105 transition-transform border border-emerald-100">学而思11层类纸防眩 (0.89)</span>
          <span className="text-[11px] font-mono font-bold uppercase text-emerald-700 bg-emerald-50 px-2 py-1.5 rounded cursor-pointer hover:scale-105 transition-transform border border-emerald-100">学而思AI提分闭环 (0.81)</span>

          <span className="text-[15px] font-mono font-extrabold uppercase text-blue-700 bg-blue-50 px-3 py-1.5 rounded cursor-pointer hover:scale-105 transition-transform border border-blue-100">TB/JD 家长省心辅导 (0.91)</span>
          <span className="text-[12px] font-mono font-bold uppercase text-blue-700 bg-blue-50 px-2 py-1.5 rounded cursor-pointer hover:scale-105 transition-transform border border-blue-100">TB/JD 类纸色彩柔黄色 (0.85)</span>

          <span className="text-[17px] font-mono font-extrabold uppercase text-red-700 bg-red-50 px-3.5 py-1.5 rounded cursor-pointer hover:scale-105 transition-transform border border-red-100">TB/JD 双十一差价背刺 (-0.95)</span>
          <span className="text-[12px] font-mono font-bold uppercase text-red-700 bg-red-50 px-2.5 py-1.5 rounded cursor-pointer hover:scale-105 transition-transform border border-red-100">TB/JD 电池一年亏电尿崩 (-0.86)</span>
          <span className="text-[13px] font-mono font-bold uppercase text-red-700 bg-red-50 px-2.5 py-1.5 rounded cursor-pointer hover:scale-105 transition-transform border border-red-100">TB/JD 维修1600元天价屏 (-0.87)</span>
        </div>
      </div>
    </div>
  );
}
