import React, { useState } from "react";
import { Shield, BookOpen, Layers, Users, Database, FileText, ArrowRight, GitFork, Search, Sparkles, Scale } from "lucide-react";
import { dimensions } from "../data/mockData";

export default function Framework() {
  const [selectedDimension, setSelectedDimension] = useState<string>("D1");

  const dataSources = [
    { source: "淘宝客评数据 (TB)", count: "7,827 条", period: "2024.01 - 2026.03", type: "消费者文本", usage: "LDA/BERTopic情感分析、痛点特征提取" },
    { source: "京东客评数据 (JD)", count: "1,490 条", period: "2024.01 - 2026.03", type: "消费者文本", usage: "差异化质保履约情绪对照、售后痛点校验" },
    { source: "学而思官方微博宣发", count: "212 篇", period: "2024.01 - 2026.03", type: "官方硬广宣发", usage: "微博营销文本编码、优势主题识别" },
    { source: "知乎深度软广/评测", count: "30 篇", period: "约 13.5 万字", type: "官方软性渗透员", usage: "高权重护眼、AI课程利益契合编码" },
    { source: "新国标功能文本 (GB/T 46348)", count: "1 份", period: "2025年最新发布", type: "监管指引标准", usage: "新国标要求拆编、7维合规控制矩阵映射" },
  ];

  const flowsteps = [
    { title: "文本预处理", desc: "采用 Jieba 分词、停用词去除、文本降噪（剔除垃圾抽奖微博及纯表情评论），保障文本向量可读性。" },
    { title: "主题建模 (BERTopic)", desc: "基于 BERT 语义表征与 HDBSCAN 聚类。提取官方 5 个、好评 4 个、差评 4 个高聚集主题。" },
    { title: "语义维度映射", desc: "通过 Sentence-BERT 语义相似度比对，将散落的主题科学聚类归入规范的 7 大实证维度。" },
    { title: "SnowNLP 情感分析", desc: "对评论和微博段落切片。计算 0.0 ~ 1.0 情感倾向概率值（0: 极反感, 1: 极正向）。" },
    { title: "时序演化分析", desc: "按自然月份统计各维度频数。在关键电商促销和长假用眼周期追踪各方情感的浮现与衰落。" }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="border-b border-slate-100 pb-5">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 font-sans">
          研究理论基础与实证数据源
        </h1>
        <p className="mt-1.5 text-sm text-slate-500">
          全功能社会理论（FFST）下的多利益主体三角对齐框架与近万条多维语料库构成
        </p>
      </div>

      {/* Grid of Theory & Method */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Theory Card */}
        <div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-6 space-y-4">
          <h2 className="text-md font-semibold text-slate-905 flex items-center gap-2">
            <Scale className="h-5 w-5 text-indigo-500" />
            利益相关者理论 & 全功能社会理论 (FFST)
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            移动智能学习终端并不仅仅是普通的电子产品，它是嵌入在<strong>中国当代家庭育儿</strong>、<strong>基础学科分流焦虑</strong>与<strong>未成年人健康监管</strong>多维张力网之中的功能核心。
            根据利益相关者理论和全功能社会理论，智能终端不仅需要追求硬核的经济营销和教学体验，还必须承担社会与健康合规责任。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
            <div className="border border-slate-150 rounded-lg p-3 bg-indigo-50/20">
              <span className="text-[10px] font-mono font-bold text-indigo-500 uppercase">1. 国家监管 (Law)</span>
              <h4 className="text-xs font-bold text-slate-800 mt-1">底线性合规要求</h4>
              <p className="text-[11px] text-slate-500 mt-1">强制确保生理及视听健康、物理防护与最严格的数据及儿童信息隐私底线。</p>
            </div>
            <div className="border border-slate-150 rounded-lg p-3 bg-emerald-50/20">
              <span className="text-[10px] font-mono font-bold text-emerald-505 uppercase">2. 企业销售 (Market)</span>
              <h4 className="text-xs font-bold text-slate-800 mt-1">高期望利益承诺</h4>
              <p className="text-[11px] text-slate-500 mt-1">大肆宣扬教学课程资源的优质度和智能化交互体验，激发溢价购买欲望。</p>
            </div>
            <div className="border border-slate-150 rounded-lg p-3 bg-red-50/20">
              <span className="text-[10px] font-mono font-bold text-rose-500 uppercase">3. 用户反馈 (Life)</span>
              <h4 className="text-xs font-bold text-slate-800 mt-1">真实使用环境痛楚</h4>
              <p className="text-[11px] text-slate-500 mt-1">承载了售后服务、降价背刺、电池坏损以及护眼承诺是否名副其实的考验。</p>
            </div>
          </div>
          
          <div className="text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100 italic">
            💡 本平台的研究任务即在于揭示：“立规者期望”与“营销承诺”脱钩、以及“完美预期承诺”与“最终差劲使用评价”错位的机制和重灾区维度。
          </div>
        </div>

        {/* Database Metric Board */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-md font-semibold text-slate-900 flex items-center gap-2">
              <Database className="h-5 w-5 text-blue-500" />
              语料库底层统计
            </h2>
            <div className="space-y-3.5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="text-xs text-slate-500">爬取消费者总评论量:</span>
                <span className="text-sm font-bold text-slate-800 font-mono">9,317 条</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="text-xs text-slate-500">微博官方营销文章:</span>
                <span className="text-sm font-bold text-slate-800 font-mono">212 条</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="text-xs text-slate-500">知乎评测软文总计数:</span>
                <span className="text-sm font-bold text-slate-800 font-mono">30 篇 (约13.5万字)</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="text-xs text-slate-500">分析跨度区间:</span>
                <span className="text-sm font-bold text-slate-800 font-mono">2024.01 - 2026.03</span>
              </div>
            </div>
          </div>
          <div className="text-center rounded-lg p-2.5 bg-slate-50 border border-slate-100/65 mt-4">
            <span className="text-[10px] font-mono text-slate-400">Total Tokens: ~1,245,000 字</span>
          </div>
        </div>

      </div>

      {/* Dataset Sources & Scope Details */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-sm font-semibold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
          <BookOpen className="h-4.5 w-4.5 text-slate-500" />
          全链路研究语料底池明细
        </h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600 font-sans border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50 text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-wider">
                <th className="py-2.5 px-3">语料来源渠道</th>
                <th className="py-2.5 px-3">样本容量</th>
                <th className="py-2.5 px-3">时间周期</th>
                <th className="py-2.5 px-3 text-indigo-500">数据角色归属</th>
                <th className="py-2.5 px-3">对应学术研究场景</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {dataSources.map((ds, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 px-3 font-semibold text-slate-800">{ds.source}</td>
                  <td className="py-3 px-3 font-mono text-slate-900">{ds.count}</td>
                  <td className="py-3 px-3 font-mono text-slate-500">{ds.period}</td>
                  <td className="py-3 px-3">
                    <span className="inline-flex rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-medium text-indigo-700 border border-indigo-100">
                      {ds.type}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-slate-500">{ds.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Interactive Seven Dimensions Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left column list */}
        <div className="lg:col-span-1 rounded-xl border border-slate-200 bg-white p-5 space-y-2">
          <h3 className="text-sm font-semibold text-slate-900 border-b border-slate-100 pb-2.5">
            研究定义的 7 大考量维度
          </h3>
          <div className="space-y-1 pt-1">
            {dimensions.map((dim) => (
              <button
                key={dim.id}
                className={`w-full text-left text-xs px-3.5 py-3 rounded-lg flex items-center justify-between font-medium transition-all ${
                  selectedDimension === dim.id
                    ? "bg-blue-600 text-white font-bold shadow-xs shadow-blue-500/10"
                    : "hover:bg-slate-50 text-slate-600"
                }`}
                onClick={() => setSelectedDimension(dim.id)}
              >
                <span>{dim.id} {dim.name}</span>
                <ArrowRight className="h-3.5 w-3.5 opacity-50" />
              </button>
            ))}
          </div>
        </div>

        {/* Right column detailed display */}
        <div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-6 flex flex-col justify-between">
          {(() => {
            const curDim = dimensions.find(d => d.id === selectedDimension)!;
            return (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                      {curDim.id}
                    </span>
                    <h4 className="text-md font-bold text-slate-800">{curDim.name}</h4>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">Stakeholder Conflict matrix</span>
                </div>

                <div>
                  <h5 className="text-xs font-semibold text-slate-400">维度定义及学术内涵：</h5>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">{curDim.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
                  <div className="p-3 rounded-lg bg-indigo-50/40 border border-indigo-100/50">
                    <h6 className="text-[10px] font-mono font-bold text-indigo-700 flex items-center gap-1">
                      <Shield className="h-3.5 w-3.5" /> 国标对齐要求
                    </h6>
                    <p className="text-[11px] text-slate-600 mt-1.5 leading-relaxed">
                      {curDim.focusPointStandard}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-50/40 border border-emerald-100/50">
                    <h6 className="text-[10px] font-mono font-bold text-emerald-700 flex items-center gap-1">
                      <Sparkles className="h-3.5 w-3.5" /> 官方溢价营销预期
                    </h6>
                    <p className="text-[11px] text-slate-600 mt-1.5 leading-relaxed">
                      {curDim.focusPointOfficial}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-red-50/40 border border-red-100/50">
                    <h6 className="text-[10px] font-mono font-bold text-red-700 flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" /> 终端客评核心反冲
                    </h6>
                    <p className="text-[11px] text-slate-600 mt-1.5 leading-relaxed">
                      {curDim.focusPointUser}
                    </p>
                  </div>
                </div>
              </div>
            );
          })()}

          <div className="border-t border-slate-100 pt-3 mt-4 text-[10px] text-slate-400 font-mono">
            * 维度设定以全功能社会理论为主轴，融合了计算社会科学（Computational Social Science）的研究成果。
          </div>
        </div>

      </div>

      {/* Advanced Research Text Flowchart */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-sm font-semibold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
          <GitFork className="h-4.5 w-4.5 text-slate-500" />
          自然语言处理（NLP）学术清洗与建模工艺流程
        </h3>
        <p className="text-xs text-slate-500 mt-2">
          从采集语料到生成多维错位结论，平台在本地和服务器层部署了完整的文本预处理、时序趋势切片以及多模态语义分类：
        </p>
        
        <div className="mt-5 grid grid-cols-1 md:grid-cols-5 gap-3 relative">
          {flowsteps.map((f, idx) => (
            <div key={idx} className="border border-slate-150 rounded-xl p-4 bg-slate-50/50 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400">STEP 0{idx + 1}</span>
                <h4 className="text-xs font-bold text-slate-800 mt-1">{f.title}</h4>
                <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">{f.desc}</p>
              </div>
              <div className="pt-3 flex justify-end">
                {idx < 4 && <ArrowRight className="h-4 w-4 text-slate-300 hidden md:block" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
