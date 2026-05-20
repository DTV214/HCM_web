"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const imageUrl =
  "https://res.cloudinary.com/dratbz8bh/image/upload/v1779246600/98b12d98966866a47404f7f179047382_oqc2cn.jpg";

export function IntroductionSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Cột Trái: Nội dung Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">
            Đặt vấn đề
          </p>
          <h2 className="text-gradient-cinematic mb-6 text-4xl font-bold leading-tight sm:text-5xl">
            Tư tưởng Hồ Chí Minh về Độc lập dân tộc & Chủ nghĩa xã hội
          </h2>
          <blockquote className="border-l-4 border-primary pl-6 py-2">
            <p className="text-lg text-neutral-600 leading-relaxed italic">
              "Chủ nghĩa xã hội là làm sao cho dân giàu, nước mạnh, mọi người đều có cơm ăn, áo mặc, ai cũng được học hành"
            </p>
          </blockquote>
        </motion.div>

        {/* Cột Phải: Hình ảnh nghệ thuật */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-neutral-100 shadow-xl shadow-neutral-200">
            <Image
              src={imageUrl}
              alt="Hình ảnh lịch sử tư tưởng Hồ Chí Minh"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Lớp overlay trắng nhạt để tạo sự tinh tế thay vì đen huyền bí */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
