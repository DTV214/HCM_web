"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle, X } from "lucide-react";

export function VideoSection() {
  // Quản lý trạng thái mở/đóng của video modal
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Link video Cloudinary của bạn
  const videoUrl =
    "https://res.cloudinary.com/dratbz8bh/video/upload/v1779353137/202605201335_bmqqda.mp4";

  return (
    <>
      <section className="relative flex h-[75vh] min-h-[500px] w-full items-center justify-center overflow-hidden bg-white">
        {/* Lớp Video Nền (Tự động phát, lặp lại, tắt tiếng) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>

        {/* Lớp phủ Gradient tạo chiều sâu Cinematic */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.1)_0%,rgba(30,64,175,0.06)_48%,transparent_75%)]" />

        {/* Nội dung Text & Nút Play nổi bần bật */}
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 text-center sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Nút Play nhấp nháy mờ ảo - Đã thêm sự kiện onClick */}
            <button
              onClick={() => setIsVideoOpen(true)}
              className="group relative mb-8 flex cursor-pointer items-center justify-center outline-none"
              aria-label="Xem video tư liệu"
            >
              <div className="absolute h-20 w-20 animate-ping rounded-full bg-red-500/20" />
              <div className="relative z-10 rounded-full bg-white/90 text-primary shadow-[0_16px_45px_rgba(220,38,38,0.18)] ring-1 ring-red-100 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_20px_55px_rgba(220,38,38,0.28)]">
                <PlayCircle className="size-20" strokeWidth={1} />
              </div>
            </button>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-primary">
              Tư liệu Video
            </p>

            <h2 className="text-gradient-cinematic text-4xl font-bold leading-tight sm:text-6xl mb-6">
              Khát Vọng Kỷ Nguyên Mới
            </h2>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-600">
              Từ khát vọng độc lập dân tộc thiêng liêng đến những bước tiến vững
              chãi làm chủ công nghệ, vươn mình ra biển lớn trong thời đại số
              4.0.
            </p>
          </motion.div>
        </div>

        {/* Khung viền mờ ánh sáng ở hai đầu trên dưới để nối mượt với các banner khác */}
        <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* MODAL PHÁT VIDEO */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950/70 px-4 backdrop-blur-md"
            onClick={() => setIsVideoOpen(false)} // Bấm ra ngoài viền để đóng
          >
            {/* Nút đóng (X) góc phải trên */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute right-6 top-6 z-[110] rounded-full bg-white/90 p-2 text-neutral-700 shadow-sm transition-colors hover:bg-primary hover:text-white"
              aria-label="Đóng video"
            >
              <X className="size-6" />
            </button>

            {/* Khung chứa Video */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-red-100 bg-black shadow-2xl shadow-red-900/20 aspect-video"
              onClick={(e) => e.stopPropagation()} // Ngăn chặn sự kiện click lan ra ngoài làm đóng video khi đang bấm các nút điều khiển
            >
              <video
                src={videoUrl}
                controls // Hiển thị thanh tiến trình, âm lượng, phóng to...
                autoPlay // Tự động phát khi mở modal
                className="h-full w-full object-contain outline-none"
              >
                Trình duyệt của bạn không hỗ trợ thẻ video.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
