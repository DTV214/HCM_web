"use client";

import { motion } from "framer-motion";
import {
  Scale,
  Users,
  ShieldAlert,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import { ideologyContent } from "../data/content";

// Khai báo icon cho 3 nguyên tắc vận dụng
const principleIcons = [Scale, Users, ShieldAlert];

export function Conclusion() {
  const { title, principles, glossary } = ideologyContent.conclusion;

  return (
    <section id="ket-luan" className="relative py-32 overflow-hidden bg-white">
      {/* Vầng sáng đỏ tỏa lên từ đáy trang tạo cảm giác nền móng vững chắc */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-[radial-gradient(ellipse_at_bottom,rgba(220,38,38,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Khung Tiêu Đề Banner */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary mb-3">
            Tổng kết
          </p>
          <h2 className="text-gradient-cinematic text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            {title}
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed">
            Những nguyên tắc cốt lõi để giữ vững thành quả cách mạng, phát huy
            sức mạnh thời đại và bảo vệ bản chất tốt đẹp của chế độ trước những
            biến động phức tạp.
          </p>
        </div>

        {/* Cấu trúc 3 Thẻ Nguyên Tắc Vận Dụng */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {principles.map((item, index) => {
            const Icon = principleIcons[index];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="rounded-2xl p-8 bg-neutral-50 border border-neutral-100 relative group hover:border-primary/30 hover:bg-red-50/30 transition-all duration-500"
              >
                {/* Thanh vạch đỏ chạy phía trên thẻ */}
                <div className="absolute top-0 left-8 w-16 h-[2px] bg-primary/40 group-hover:bg-primary transition-colors duration-500" />

                <div className="mb-8 inline-flex p-4 rounded-2xl bg-white text-primary shadow-sm border border-neutral-100">
                  <Icon className="size-8" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 mb-4 leading-snug">
                  {item.title}
                </h3>

                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bảng Chú Giải Thuật Ngữ (Glossary) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl border border-red-100 bg-red-50/50 p-8 sm:p-12 relative overflow-hidden shadow-sm">
            {/* Họa tiết Icon in chìm */}
            <BookOpen className="absolute -bottom-10 -right-10 size-64 text-primary/[0.03] pointer-events-none rotate-12" />

            <div className="flex items-center gap-4 mb-8 border-b border-red-200 pb-6">
              <div className="p-2 bg-white rounded-lg border border-red-100 shadow-sm">
                <BookOpen className="size-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-neutral-950 uppercase tracking-widest">
                Bảng chú giải thuật ngữ
              </h4>
            </div>

            <div className="space-y-6 relative z-10">
              {glossary.map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <ChevronRight className="size-5 text-primary shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                  <div>
                    <span className="font-bold text-primary block sm:inline mr-2 text-base sm:text-lg">
                      {item.term}:
                    </span>
                    <span className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                      {item.meaning}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
