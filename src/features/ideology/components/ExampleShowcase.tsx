"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Shield,
  Coins,
  Palette,
  Atom,
  Flame,
  Quote,
  History,
  Cpu,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { ideologyContent } from "../data/content";

const domainIcons = [Shield, Coins, Palette, Atom, Flame];

const domainImages = [
  "https://res.cloudinary.com/dratbz8bh/image/upload/v1779246739/4d10d1fce5727135de92d66f70d71343_apkhdm.jpg",
  "https://res.cloudinary.com/dratbz8bh/image/upload/v1779246876/2e2c5c940d551c347b7feeaf4d66e06d_eeujit.jpg",
  "https://res.cloudinary.com/dratbz8bh/image/upload/v1779247133/5e3b0ec30fe4347c9beb80f680a4776c_zmblmu.jpg",
  "https://res.cloudinary.com/dratbz8bh/image/upload/v1779247320/1fd7e9f4b54ea7c1b1d0a50159092f1a_v3kt4y.jpg",
  "https://res.cloudinary.com/dratbz8bh/image/upload/v1779247418/4b0d2379f0650e6d8d04105f77f0dc31_zzfsds.jpg",
];

export function ExampleShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const examples = ideologyContent.ideologyExamples;

  return (
    <section className="relative py-32 overflow-hidden bg-white">
      {/* Vầng sáng nền nhạt */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-red-50 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-20">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary mb-3">
            Minh chứng thực tiễn
          </p>
          <h2 className="text-gradient-cinematic text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Luận Điểm Gắn Liền Với Đời Sống
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed">
            Hệ thống hóa các câu nói kinh điển của Chủ tịch Hồ Chí Minh qua từng
            lĩnh vực cụ thể, đối chiếu sinh động bằng hình ảnh và thực tiễn kỷ
            nguyên số.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.35fr_0.65fr] gap-8 items-start">
          {/* CỘT TRÁI: Thanh Chọn Lĩnh Vực */}
          <div className="space-y-3 w-full lg:sticky lg:top-24">
            {examples.map((item, index) => {
              const Icon = domainIcons[index % domainIcons.length];
              const isActive = activeIdx === index;

              return (
                <button
                  key={item.domain}
                  onClick={() => setActiveIdx(index)}
                  className={`relative w-full flex items-center gap-4 p-4 sm:p-5 rounded-xl border text-left transition-all duration-300 group cursor-pointer overflow-hidden ${
                    isActive
                      ? "border-primary/30 bg-red-50 shadow-sm"
                      : "border-neutral-100 bg-neutral-50 hover:border-neutral-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-primary"
                    />
                  )}

                  <div
                    className={`p-3 rounded-lg transition-all ${
                      isActive
                        ? "bg-primary text-white"
                        : "bg-neutral-200 text-neutral-600 group-hover:text-neutral-900"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-widest text-neutral-500">
                      Lĩnh vực 0{index + 1}
                    </span>
                    <h3
                      className={`font-bold mt-0.5 text-base sm:text-lg truncate ${isActive ? "text-neutral-950" : "text-neutral-600 group-hover:text-neutral-900"}`}
                    >
                      {item.domain}
                    </h3>
                  </div>

                  <ChevronRight
                    className={`hidden sm:block w-4 h-4 transition-all ${
                      isActive
                        ? "text-primary translate-x-0"
                        : "text-neutral-400 opacity-0 -translate-x-2"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* CỘT PHẢI: Khung trình chiếu sáng */}
          <div className="relative min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-6 h-full"
              >
                {/* 1. Khối Hình Ảnh */}
                <div className="relative h-[280px] sm:h-[340px] w-full rounded-2xl overflow-hidden shadow-lg border border-neutral-100">
                  <Image
                    src={domainImages[activeIdx]}
                    alt={examples[activeIdx].domain}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                    <Quote
                      className="size-8 text-primary mb-3"
                      fill="currentColor"
                    />
                    <blockquote className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white leading-snug mb-3">
                      {examples[activeIdx].quote}
                    </blockquote>
                    <cite className="text-sm font-medium text-neutral-200 block border-l-2 border-primary pl-3 not-italic">
                      Nguồn: {examples[activeIdx].source}
                    </cite>
                  </div>
                </div>

                {/* 2. Khối Bản chất cốt lõi */}
                <div className="flex items-start sm:items-center gap-3 px-5 py-4 rounded-xl bg-neutral-100/50 border border-neutral-200">
                  <Sparkles className="size-5 text-secondary shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-neutral-700">
                    <span className="font-bold text-secondary mr-2 uppercase tracking-wide text-xs">
                      Bản chất cốt lõi:
                    </span>
                    {examples[activeIdx].explanation}
                  </p>
                </div>

                {/* 3. Khối Đối chiếu */}
                <div className="grid sm:grid-cols-2 gap-5 flex-1">
                  <div className="rounded-xl p-6 bg-neutral-50 border border-neutral-100">
                    <h4 className="font-bold text-amber-700 uppercase text-xs tracking-widest mb-4">
                      Góc nhìn lịch sử
                    </h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {examples[activeIdx].historicalExample}
                    </p>
                  </div>

                  <div className="rounded-xl p-6 bg-blue-50/50 border border-blue-100">
                    <h4 className="font-bold text-secondary uppercase text-xs tracking-widest mb-4">
                      Thực tiễn 4.0
                    </h4>
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      {examples[activeIdx].modernExample}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
