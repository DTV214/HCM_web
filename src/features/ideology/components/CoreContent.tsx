"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bookmark, Hourglass, CheckCircle2, ArrowRight } from "lucide-react";
import { ideologyContent } from "../data/content";

export function CoreContent() {
  const [activeTab, setActiveTab] = useState(0);
  const topics = ideologyContent.coreTopics;

  return (
    <section id="cot-loi" className="relative py-32 overflow-hidden bg-white">
      {/* Vầng sáng hồng nhạt chìm phía bên trái tạo chiều sâu tinh tế trên nền trắng */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-red-100/50 rounded-full blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Khung Tiêu Đề Banner */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary mb-3">
            Hệ thống lý luận
          </p>
          <h2 className="text-gradient-cinematic text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Nội Dung Bản Chất & Thời Kỳ Quá Độ
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed">
            Phân tích chiều sâu hệ thống luận điểm toàn diện của Chủ tịch Hồ Chí
            Minh về bản chất xã hội mới và lộ trình kiến thiết đất nước từ một
            quốc gia nông nghiệp.
          </p>
        </div>

        {/* Hệ Thống Tab Điều Hướng Tương Tác */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16 max-w-2xl mx-auto">
          {topics.map((topic, index) => {
            const Icon = index === 0 ? Bookmark : Hourglass;
            const isActive = activeTab === index;

            return (
              <button
                key={topic.title}
                onClick={() => setActiveTab(index)}
                className={`group relative w-full flex items-center gap-4 p-5 rounded-xl border text-left transition-all duration-300 overflow-hidden cursor-pointer ${
                  isActive
                    ? "border-primary/30 bg-red-50 shadow-[0_4px_20px_rgba(220,38,38,0.08)]"
                    : "border-neutral-100 bg-neutral-50 hover:border-neutral-200 hover:bg-neutral-100"
                }`}
              >
                {/* Lớp phủ vầng sáng chuyển động */}
                {isActive && (
                  <motion.div
                    layoutId="coreTabGlow"
                    className="absolute inset-0 bg-gradient-to-r from-red-100/50 to-transparent pointer-events-none"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                <div
                  className={`p-3 rounded-lg transition-colors duration-300 ${
                    isActive
                      ? "bg-primary text-white"
                      : "bg-neutral-200 text-neutral-600 group-hover:text-neutral-900"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="block text-xs font-mono tracking-widest text-neutral-500 uppercase">
                    Nội dung 0{index + 1}
                  </span>
                  <span
                    className={`block font-bold mt-0.5 text-lg truncate ${isActive ? "text-neutral-900" : "text-neutral-600 group-hover:text-neutral-900"}`}
                  >
                    {topic.title}
                  </span>
                </div>

                <ArrowRight
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isActive
                      ? "text-primary translate-x-0"
                      : "text-neutral-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Khung Hiển Thị Chi Tiết Lý Luận */}
        <div className="rounded-2xl border border-neutral-100 p-8 sm:p-12 relative overflow-hidden bg-white shadow-sm">
          {/* Đường chỉ góc trang trí mỹ thuật */}
          <div className="absolute top-0 left-0 w-20 h-[1px] bg-gradient-to-r from-primary to-transparent" />
          <div className="absolute top-0 left-0 w-[1px] h-20 bg-gradient-to-b from-primary to-transparent" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid lg:grid-cols-[0.42fr_0.58fr] gap-12 items-start"
            >
              {/* CỘT TRÁI */}
              <div className="lg:sticky lg:top-24">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-red-50 border border-red-100 text-primary mb-4 uppercase tracking-wider">
                  Tóm tắt cốt lõi
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 mb-6 leading-tight">
                  {topics[activeTab].title}
                </h3>
                <p className="text-neutral-600 leading-relaxed text-base">
                  {topics[activeTab].summary}
                </p>
              </div>

              {/* CỘT PHẢI */}
              <div className="space-y-4 w-full">
                <span className="inline-block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Các tiêu chí & Nhiệm vụ cụ thể
                </span>

                {topics[activeTab].points.map((point, pIndex) => {
                  const parts = point.split(":");
                  const hasPrefix = parts.length > 1;
                  const prefix = hasPrefix ? parts[0] + ":" : "";
                  const bodyText = hasPrefix ? parts.slice(1).join(":") : point;

                  return (
                    <motion.div
                      key={pIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: pIndex * 0.08 }}
                      className="flex items-start gap-4 p-5 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-300 group"
                    >
                      <div className="mt-1 shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-secondary/60 group-hover:text-secondary transition-colors duration-300" />
                      </div>
                      <div className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                        {hasPrefix && (
                          <span className="font-extrabold text-neutral-950 mr-2 block sm:inline">
                            {prefix}
                          </span>
                        )}
                        <span>{bodyText}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
