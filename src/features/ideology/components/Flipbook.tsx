"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Book,
  BookOpen,
  X,
  Compass,
  History,
  ArrowRight,
  Shield,
  Flame,
  Coins,
  Atom,
  PenTool,
  Quote,
} from "lucide-react";

import { ideologyMuseumData, LifeStageCard } from "../data/content-flipbook";
import "./flipbook.css";

const quoteIcons = {
  Shield,
  Flame,
  Coins,
  Atom,
  PenTool,
};

export function Flipbook() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [selectedCard, setSelectedCard] = useState<LifeStageCard | null>(null);

  return (
    <>
      <section className="relative py-32 overflow-hidden bg-white">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-100 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[420px] bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.07)_0%,rgba(30,64,175,0.04)_45%,transparent_72%)] pointer-events-none" />

        <div className="mx-auto flex max-w-7xl flex-col items-center px-4 text-center sm:px-6 relative z-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary mb-3">
            Tư liệu lịch sử
          </p>
          <h2 className="text-gradient-cinematic mt-3 text-4xl font-bold tracking-tight sm:text-5xl mb-16 max-w-2xl">
            Cánh Cửa Không Gian & Thời Gian
          </h2>

          {/* INITIAL VIEW: Cuốn sách Historical bìa da vàng mạ */}
          <motion.button
            onClick={() => setIsRevealed(true)}
            className="group relative h-[380px] w-full max-w-[300px] rounded-r-2xl [perspective:1000px] outline-none book-historical-texture border border-red-200 shadow-[18px_16px_45px_rgba(23,23,23,0.14)] transition-transform duration-700 hover:scale-105"
            whileHover={{ y: -15 }}
          >
            <div className="absolute top-2 right-2 size-8 border-r-2 border-t-2 border-red-300/70" />
            <div className="absolute bottom-2 right-2 size-8 border-r-2 border-b-2 border-blue-300/70" />
            <div className="absolute top-0 bottom-0 left-0 w-8 bg-red-900/10 border-r border-red-200 rounded-l-md shadow-inner" />

            <div className="flex h-full flex-col items-center justify-center p-6 text-center border border-white/70 rounded-r-xl">
              <Book className="size-14 text-primary mb-8 drop-shadow-sm group-hover:scale-110 group-hover:text-secondary transition-all" />

              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-2">
                {ideologyMuseumData.book.coverEyebrow}
              </p>

              <h3 className="text-3xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-br from-red-700 via-primary to-secondary">
                {ideologyMuseumData.book.coverTitle}
              </h3>

              <p className="mt-4 text-xs font-mono text-neutral-500 tracking-widest">
                {ideologyMuseumData.book.coverSource}
              </p>

              <div className="mt-8 flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 text-primary text-xs font-bold border border-red-100 shadow-sm transition-colors group-hover:bg-primary group-hover:text-white">
                <BookOpen className="size-3" />
                {ideologyMuseumData.book.callToAction}
              </div>
            </div>
          </motion.button>
        </div>
      </section>

      {/* MAGICAL REVEAL MODAL: Bảo tàng số tương tác */}
      <AnimatePresence>
        {isRevealed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex flex-col bg-white/95 px-4 backdrop-blur-xl overflow-y-auto pt-24 pb-16"
          >
            <button
              onClick={() => setIsRevealed(false)}
              className="fixed right-6 top-6 z-[110] rounded-full bg-white border border-neutral-200 p-3 text-neutral-500 shadow-sm transition-all hover:bg-primary hover:text-white hover:rotate-90"
            >
              <X className="size-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-7xl mx-auto flex flex-col gap-24 my-auto"
            >
              {/* PHẦN 1: Orbiting Carousel */}
              <div className="w-full flex flex-col items-center">
                <div className="text-center mb-16">
                  <p className="text-xs font-bold text-primary tracking-[0.3em] uppercase">
                    Quỹ đạo Tư tưởng
                  </p>
                  <h3 className="text-gradient-cinematic text-4xl sm:text-5xl font-bold mt-3 leading-tight">
                    Tuyệt Tác Vượt Thời Gian
                  </h3>
                </div>

                <div className="relative w-full max-w-3xl aspect-square sm:aspect-video flex items-center justify-center [perspective:2000px] scale-75 sm:scale-100">
                  <div className="absolute grid place-items-center">
                    <Compass className="size-48 text-primary/10 rotate-12" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.08)_0%,rgba(30,64,175,0.06)_45%,transparent_70%)] blur-2xl" />
                  </div>

                  {/* Trục chính quay 360 độ */}
                  <motion.div
                    animate={{ rotateY: [0, 360] }}
                    transition={{
                      repeat: Infinity,
                      duration: 40,
                      ease: "linear",
                    }}
                    className="absolute inset-0 flex items-center justify-center [transform-style:preserve-3d]"
                  >
                    {ideologyMuseumData.orbitingQuotes.map((item, index) => {
                      const Icon =
                        quoteIcons[item.icon as keyof typeof quoteIcons] ||
                        Quote;
                      const angle =
                        (360 / ideologyMuseumData.orbitingQuotes.length) *
                        index;
                      const radius = 350;

                      return (
                        <div
                          key={item.year}
                          className="absolute inset-0 flex items-center justify-center [transform-style:preserve-3d]"
                          style={{
                            transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                          }}
                        >
                          <motion.div
                            animate={{ rotateY: [-angle, -angle - 360] }}
                            transition={{
                              repeat: Infinity,
                              duration: 40,
                              ease: "linear",
                            }}
                            className="absolute w-[280px] h-[170px] glass-effect rounded-xl border border-red-100 bg-white/90 p-5 text-left flex flex-col justify-between shadow-[0_18px_45px_rgba(23,23,23,0.12)]"
                            whileHover={{
                              scale: 1.1,
                              borderColor: "rgba(220, 38, 38, 0.6)",
                            }}
                          >
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <Icon className="size-5 text-primary" />
                                <span className="text-xs font-mono font-bold text-secondary tracking-wider">
                                  Năm {item.year}
                                </span>
                              </div>
                              <blockquote className="text-xs sm:text-[13px] font-medium leading-relaxed text-neutral-700 italic mb-1.5 line-clamp-3">
                                “{item.quote}”
                              </blockquote>
                            </div>
                            <cite className="text-[11px] text-neutral-500 not-italic block border-l-2 border-red-200 pl-3 truncate">
                              — {item.context}
                            </cite>
                          </motion.div>
                        </div>
                      );
                    })}
                  </motion.div>
                </div>
              </div>

              {/* PHẦN 2: Thư viện ảnh Lịch sử */}
              <div className="relative w-full pb-10">
                <div className="text-center mb-12">
                  <div className="flex items-center gap-3 justify-center text-primary text-sm font-bold uppercase tracking-widest mb-2">
                    <History className="size-4" />
                    <span>Chiều dài Lịch sử</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-neutral-950">
                    5 Giai Đoạn Của Khát Vọng
                  </h3>
                  <p className="text-neutral-600 mt-3 text-sm">
                    Hãy đưa chuột vào để dừng lại và nhấp để xem chi tiết
                  </p>
                </div>

                <div className="relative flex overflow-hidden group/marquee py-6">
                  <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-white via-transparent to-white" />

                  <div className="animate-flipbook-marquee flex gap-6 group-hover/marquee:[animation-play-state:paused] pr-6">
                    {[
                      ...ideologyMuseumData.lifeGallery,
                      ...ideologyMuseumData.lifeGallery,
                    ].map((item, index) => (
                      <div
                        key={`${item.id}-${index}`}
                        onClick={() => setSelectedCard(item)}
                        className="relative w-[300px] sm:w-[340px] h-[450px] flex-shrink-0 group/card overflow-hidden rounded-2xl border border-neutral-200 transition-all duration-700 hover:scale-[1.03] hover:border-primary/40 hover:shadow-[0_24px_55px_rgba(220,38,38,0.14)] cursor-pointer bg-neutral-100"
                      >
                        <Image
                          src={item.image}
                          alt={item.stage}
                          fill
                          className="object-cover opacity-70 mix-blend-luminosity transition-all duration-1000 group-hover/card:scale-110 group-hover/card:opacity-100 group-hover/card:mix-blend-normal"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                        <div className="absolute bottom-6 left-6 right-6 z-10 transition-transform duration-500 group-hover/card:translate-y-[-10px]">
                          <span className="text-red-200 text-xs font-bold uppercase tracking-[0.2em] block mb-2">
                            {item.stage}
                          </span>
                          <div className="w-8 h-px bg-red-200/70 mb-3" />
                          <p className="text-sm text-neutral-300 leading-relaxed line-clamp-3 group-hover/card:line-clamp-none group-hover/card:text-white transition-all duration-500">
                            {item.description}
                          </p>
                          <div className="flex items-center gap-2 mt-4 opacity-0 group-hover/card:opacity-100 transition-all duration-500 text-red-100">
                            <span className="text-xs font-bold uppercase">
                              Xem chi tiết
                            </span>
                            <ArrowRight className="size-4" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL XEM CHI TIẾT GIAI ĐOẠN LỊCH SỬ */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-neutral-950/60 backdrop-blur-md px-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-white border border-red-100 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 right-4 z-10 rounded-full bg-white/85 p-2 text-neutral-700 hover:bg-primary hover:text-white transition-colors backdrop-blur"
              >
                <X className="size-5" />
              </button>

              <div className="w-full md:w-1/2 relative h-[250px] md:h-auto">
                <Image
                  src={selectedCard.image}
                  alt={selectedCard.stage}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-transparent to-transparent" />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h4 className="text-primary font-bold tracking-widest uppercase text-xs mb-3">
                  Giai đoạn lịch sử
                </h4>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 mb-6 leading-snug">
                  {selectedCard.stage}
                </h2>
                <div className="w-12 h-1 bg-primary mb-6" />
                <p className="text-neutral-700 leading-relaxed text-base sm:text-lg">
                  {selectedCard.description}
                </p>
                <button
                  onClick={() => setSelectedCard(null)}
                  className="mt-10 self-start px-6 py-2 rounded-full border border-red-100 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  Quay lại Không gian
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
