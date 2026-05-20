"use client";

import { motion } from "framer-motion";
import { ideologyContent } from "../data/content";

const timelineItems = ideologyContent.historyTimeline;

export function HistoryTimeline() {
  return (
    <section id="lich-su" className="relative py-28 overflow-hidden bg-white">
      {/* Vầng sáng nhẹ, tinh tế thay cho lớp sương mờ tối */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.03)_0%,transparent_80%)] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Tiêu đề Banner */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            Dòng chảy lịch sử
          </p>
          <h2 className="text-gradient-cinematic mt-3 text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Từ Khởi Nguồn Đến Kỷ Nguyên Số
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed">
            Hành trình vĩ đại của dân tộc Việt Nam, nơi Độc lập dân tộc luôn gắn
            liền với khát vọng Chủ nghĩa xã hội qua từng thời kỳ.
          </p>
        </div>

        {/* Trục thời gian (Timeline) */}
        <div className="relative">
          {/* Đường Line chẻ dọc */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 bg-neutral-200" />

          <div className="space-y-12 md:space-y-24">
            {timelineItems.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={`${item.year}-${item.title}`}
                  className={`relative flex flex-col md:flex-row items-start md:items-center justify-between group ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Điểm mốc thời gian (Dot) */}
                  <div className="absolute left-[28px] md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10 size-5 rounded-full bg-white border-4 border-primary shadow-sm transition-transform duration-500 group-hover:scale-125" />

                  {/* Thẻ Nội dung */}
                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="w-full md:w-[calc(50%-3.5rem)] pl-20 md:pl-0"
                  >
                    <div className="relative overflow-hidden rounded-2xl p-6 sm:p-8 bg-white border border-neutral-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-100">
                      <span className="inline-block px-3 py-1 mb-4 rounded-full text-xs font-bold tracking-widest bg-red-50 text-primary border border-red-100">
                        {item.year}
                      </span>

                      <h3 className="mt-2 text-xl sm:text-2xl font-bold text-neutral-950 leading-tight">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-600 relative z-10">
                        {item.description}
                      </p>
                    </div>
                  </motion.article>

                  {/* Khung trống ép thẻ sang 1 bên */}
                  <div className="hidden md:block w-[calc(50%-3.5rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
