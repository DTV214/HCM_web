"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const imageUrl2 =
  "https://res.cloudinary.com/dratbz8bh/image/upload/v1779246484/ebdc58a7f65243608ccffe32715d0073_guoopd.jpg";
const imageUrl1 =
  "https://res.cloudinary.com/dratbz8bh/image/upload/v1779246009/33_rtotul.jpg";
const imageUrl =
  "https://res.cloudinary.com/dratbz8bh/image/upload/v1779246092/d46b40dd240eb671741ff2ac688a7086_swyy4e.jpg";

const slides = [
  {
    title: "Độc lập dân tộc",
    description:
      "Khát vọng tự do, chủ quyền và quyền tự quyết của dân tộc là nền tảng xuyên suốt trong tư tưởng Hồ Chí Minh.",
    image: imageUrl,
  },
  {
    title: "Xây dựng Chủ nghĩa xã hội",
    description:
      "Độc lập chỉ thật sự có ý nghĩa khi nhân dân được sống trong ấm no, công bằng, dân chủ và văn minh.",
    image: imageUrl1,
  },
  {
    title: "Kỷ nguyên số 4.0",
    description:
      "Tinh thần tự lực, sáng tạo và hội nhập giúp thế hệ hôm nay vận dụng giá trị tư tưởng trong thời đại công nghệ.",
    image: imageUrl2,
  },
];

export function HeroSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  return (
    <section className="relative h-[100vh] overflow-hidden bg-white text-foreground">
      <div ref={emblaRef} className="h-full overflow-hidden">
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.title}
              className="relative h-full min-w-0 flex-[0_0_100%]"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
              {/* Overlay làm tối ảnh để chữ trắng nổi bật */}
              <div className="absolute inset-0 bg-black/40" />

              {selectedIndex === index ? (
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="absolute bottom-20 left-10 max-w-2xl pr-8"
                >
                  <h1 className="text-4xl font-bold text-white sm:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="mt-4 text-lg text-neutral-100">
                    {slide.description}
                  </p>
                </motion.div>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      {/* Indicators sử dụng màu Primary (Đỏ) */}
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Chuyển đến slide ${index + 1}`}
            onClick={() => scrollTo(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              selectedIndex === index
                ? "w-8 bg-primary"
                : "w-2.5 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
