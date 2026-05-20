"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, Globe2, TrendingUp, CheckCircle2 } from "lucide-react";
import { ideologyContent } from "../data/content";

// Gán icon tương ứng chính xác cho 3 bối cảnh
const contextIcons = [Cpu, Globe2, TrendingUp];

const imageUrl =
  "https://res.cloudinary.com/dratbz8bh/image/upload/v1779247572/ab0823fd366b7db8c30baa5b256f6a1d_b4xxlv.jpg";

export function ModernContext() {
  const contextItems = ideologyContent.modernContext;

  return (
    <section id="hien-dai" className="relative py-32 overflow-hidden bg-white">
      {/* Ánh sáng nền nhạt tạo sự cân bằng */}
      <div className="absolute top-0 right-0 w-full max-w-4xl h-full bg-[radial-gradient(ellipse_at_right,rgba(220,38,38,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Tiêu đề Banner */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary mb-3">
            Bối cảnh hiện đại
          </p>
          <h2 className="text-gradient-cinematic mt-3 text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Giá Trị Tư Tưởng Trong Kỷ Nguyên Mới
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed">
            Sự chuyển hóa mạnh mẽ từ những triết lý cốt lõi thành hành động thực
            tiễn trong thời đại công nghệ số 4.0, hội nhập quốc tế và kinh tế
            thị trường.
          </p>
        </div>

        {/* Hệ thống Thẻ khổng lồ xếp xen kẽ */}
        <div className="space-y-24">
          {contextItems.map((item, index) => {
            const Icon = contextIcons[index % contextIcons.length];
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col gap-10 lg:gap-16 lg:items-center ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Cột 1: Hình ảnh */}
                <div className="w-full lg:w-[45%]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-neutral-100 shadow-lg group">
                    <Image
                      src={imageUrl}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    {/* Overlay trắng mờ tinh tế */}
                    <div className="absolute inset-0 bg-white/20 transition-opacity group-hover:opacity-0" />
                  </div>
                </div>

                {/* Cột 2: Nội dung */}
                <div className="w-full lg:w-[55%]">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 mb-6 border border-blue-100">
                    <Icon className="size-7 text-secondary" />
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold text-neutral-950 mb-6 leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                    {item.description}
                  </p>

                  {item.points && item.points.length > 0 && (
                    <div className="space-y-4">
                      {item.points.map((point, pIndex) => {
                        const parts = point.split(":");
                        const hasPrefix = parts.length > 1;
                        const prefix = hasPrefix ? parts[0] + ":" : "";
                        const text = hasPrefix
                          ? parts.slice(1).join(":")
                          : point;

                        return (
                          <div
                            key={pIndex}
                            className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-blue-100 hover:bg-blue-50/50 transition-colors"
                          >
                            <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                              {hasPrefix && (
                                <span className="font-bold text-neutral-950 mr-1.5">
                                  {prefix}
                                </span>
                              )}
                              <span>{text}</span>
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
