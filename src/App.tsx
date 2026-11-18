/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  BarChart2, 
  BookOpen, 
  Layers, 
  MessageSquareDiff, 
  HelpCircle, 
  Calendar, 
  TrendingUp, 
  Tv2, 
  UserCheck, 
  Fingerprint, 
  Activity, 
  Sliders, 
  Inbox,
  User
} from "lucide-react";

// Import all analytical page screens
import Overview from "./components/Overview";
import Framework from "./components/Framework";
import TopicExtractor from "./components/TopicExtractor";
import AttentionRadar from "./components/AttentionRadar";
import PlatformSentiment from "./components/PlatformSentiment";
import SentimentGap from "./components/SentimentGap";
import TimelineEvolution from "./components/TimelineEvolution";

export default function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  // Nav configuration
  const menuItems = [
    { id: 1, label: "总览首页", subtitle: "研究结论与核心指标", icon: Tv2 },
    { id: 2, label: "研究框架与数据源", subtitle: "理论假设和七大维度", icon: BookOpen },
    { id: 3, label: "主题提取分析", subtitle: "BERTopic语义聚类", icon: Sliders },
    { id: 4, label: "三方维度关注度对比", subtitle: "国标、官方与用户对齐率", icon: BarChart2 },
    { id: 5, label: "平台情绪分析对比", subtitle: "淘宝 vs 京东情感反冲", icon: MessageSquareDiff },
    { id: 6, label: "官方与用户情感错位", subtitle: "极度差异与落归矩阵", icon: TrendingUp },
    { id: 7, label: "时序演化脉络", subtitle: "大促销与用眼期波动", icon: Calendar }
  ];

  // Render active screen
  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <Overview onNavigate={(pg) => setCurrentPage(pg)} />;
      case 2:
        return <Framework />;
      case 3:
        return <TopicExtractor />;
      case 4:
        return <AttentionRadar />;
      case 5:
        return <PlatformSentiment />;
      case 6:
        return <SentimentGap />;
      case 7:
        return <TimelineEvolution />;
      default:
        return <Overview onNavigate={(pg) => setCurrentPage(pg)} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans antialiased text-slate-800">
      
      {/* Persistent Sticky Sidebar */}
      <aside 
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } shrink-0 bg-white border-r border-slate-200 flex flex-col justify-between transition-all duration-300 relative z-30`}
      >
        <div className="flex flex-col">
          {/* Sidebar Top Brand Header */}
          <div className="h-16 px-4 border-b border-slate-100 flex items-center justify-between">
            <div className={`flex items-center gap-2.5 overflow-hidden ${!sidebarOpen && "justify-center w-full"}`}>
              <div className="h-9 w-9 rounded-xl bg-linear-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold tracking-tight shadow-md shrink-0">
                L
              </div>
              {sidebarOpen && (
                <div className="flex flex-col">
                  <span className="text-xs font-extrabold text-slate-900 tracking-tight font-sans leading-tight">学习机三方错位研究</span>
                  <span className="text-[9px] font-mono font-bold text-slate-400 capitalize whitespace-nowrap">Triangulation Platform</span>
                </div>
              )}
            </div>
            
            {/* Collapse toggle */}
            {sidebarOpen && (
              <button 
                onClick={() => setSidebarOpen(false)}
                className="hidden lg:flex items-center justify-center h-6 w-6 rounded-md hover:bg-slate-50 text-slate-450 border border-slate-150 text-slate-400"
                title="折叠菜单"
              >
                ◀
              </button>
            )}
          </div>

          {/* Nav Items List */}
          <nav className="p-3 space-y-1">
            {menuItems.map((item) => {
              const IconComp = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-left ${
                    isActive 
                      ? "bg-slate-900 text-white shadow-sm font-semibold" 
                      : "hover:bg-slate-100 text-slate-600"
                  }`}
                >
                  <IconComp className={`h-4.5 w-4.5 shrink-0 ${isActive ? "text-blue-400" : "text-slate-400"}`} />
                  {sidebarOpen && (
                    <div className="overflow-hidden">
                      <div className="text-xs tracking-wide font-semibold truncate leading-none">{item.label}</div>
                      <div className={`text-[9px] font-mono truncate mt-1 ${isActive ? "text-slate-350" : "text-slate-400"}`}>
                        {item.subtitle}
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Bottom Footer Credits */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50">
          {sidebarOpen ? (
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono">
                <Fingerprint className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                <span className="truncate">github.com/jessiliu86</span>
              </div>
              <div className="text-[9px] text-slate-400 font-sans leading-normal">
                计算社会科学实践研究会小组 · 学术特供 🎓
              </div>
            </div>
          ) : (
            <button 
              onClick={() => setSidebarOpen(true)}
              className="w-full flex justify-center text-slate-400 hover:text-slate-900 font-bold"
              title="展开外部菜单"
            >
              ▶
            </button>
          )}
        </div>
      </aside>

      {/* Right Content Area */}
      <div className="grow flex flex-col min-w-0">
        
        {/* Top Navbar Header */}
        <header className="h-16 px-6 bg-white border-b border-slate-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            {/* If sidebar is collapsed on desktop, allow quick expand button */}
            {!sidebarOpen && (
              <button 
                onClick={() => setSidebarOpen(true)}
                className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 shrink-0 border border-slate-205"
              >
                👁️‍ Let's Expand
              </button>
            )}
            <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-50 px-2.5 py-1 text-xs font-mono font-medium text-blue-700 border border-blue-100">
              <Activity className="h-3 w-3 animate-pulse" /> Triangulation CSS Grid
            </span>
          </div>

          {/* Academic Researcher Meta details */}
          <div className="flex items-center gap-3.5 text-right font-mono">
            <div className="hidden sm:flex flex-col text-xs leading-tight">
              <span className="font-semibold text-slate-800 flex items-center gap-1 justify-end">
                <User className="h-3.5 w-3.5 text-slate-400" />
                github.com/jessiliu86
              </span>
              <span className="text-[10px] text-slate-400 font-bold mt-0.5">Researcher Role</span>
            </div>
            <div className="h-8 w-px bg-slate-200 hidden sm:block" />
            <div className="flex flex-col text-xs text-left leading-tight">
              <span className="font-bold text-slate-850">2026-06-07 04:49:00 UTC</span>
              <span className="text-[10px] text-slate-400 font-bold mt-0.5">Platform Scientific Time</span>
            </div>
          </div>
        </header>

        {/* Dynamic Page Viewer Container */}
        <main className="grow p-6 overflow-y-auto max-w-[1200px] w-full mx-auto">
          {renderPage()}
        </main>

        {/* Dynamic App Footer */}
        <footer className="h-12 border-t border-slate-100 bg-white/50 px-6 flex items-center justify-between font-mono text-[10px] text-slate-450 shrink-0">
          <span>© 2026 计算社会科学实践课程学术课题级呈现</span>
          <span>课程展示数据 · Prepared visualization data</span>
        </footer>

      </div>

    </div>
  );
}

