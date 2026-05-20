import Link from "next/link";
import {
  ArrowLeft,
  BrainCircuit,
  ShieldCheck,
  Code2,
  Sparkles,
} from "lucide-react";

export default function AIUsagePage() {
  return (
    <main className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-white text-foreground">
      {/* Nền Cinematic */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.08)_0%,rgba(30,64,175,0.05)_45%,transparent_72%)] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-100 to-transparent" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          Trở về Trang chủ
        </Link>

        <div className="glass-effect rounded-3xl p-8 sm:p-12 border border-neutral-100 shadow-[0_24px_70px_rgba(23,23,23,0.08)]">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-primary text-sm font-bold tracking-widest uppercase mb-8">
            <Sparkles className="size-4" />
            Tuyên bố Trách nhiệm & Công nghệ
          </div>

          <h1 className="text-gradient-cinematic text-4xl sm:text-5xl font-bold mb-8 leading-tight">
            Ứng dụng Trí tuệ Nhân tạo <br />
            trong Dự án Sáng tạo
          </h1>

          <div className="space-y-8 text-lg text-neutral-600 leading-relaxed">
            <p>
              Dự án nghiên cứu này là sự kết hợp giữa{" "}
              <strong>chiều sâu học thuật của môn Tư tưởng Hồ Chí Minh</strong>{" "}
              và <strong>sức mạnh công nghệ của thời đại 4.0</strong>. Nhằm mang
              lại một trải nghiệm thị giác (UX/UI) đột phá, dự án có sự hỗ trợ
              của Trí tuệ Nhân tạo (AI) trong quá trình phát triển.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 transition-colors hover:border-red-100 hover:bg-red-50/30">
                <Code2 className="size-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-neutral-950 mb-3">
                  Tối ưu hóa Giao diện (UI)
                </h3>
                <p className="text-sm text-neutral-600">
                  AI được sử dụng để hỗ trợ viết mã nguồn (Code Generation) bằng
                  Next.js, Tailwind CSS và Framer Motion, giúp tạo ra các hiệu
                  ứng cuộn, chuyển động 3D và bố cục cinematic sắc nét mà không
                  làm giảm hiệu năng của trang web.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 transition-colors hover:border-blue-100 hover:bg-blue-50/40">
                <BrainCircuit className="size-8 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-neutral-950 mb-3">
                  Sáng tạo Hình ảnh & Media
                </h3>
                <p className="text-sm text-neutral-600">
                  Một số tài nguyên hình ảnh minh họa và video cấu trúc trong dự
                  án được tinh chỉnh và xử lý thông qua các công cụ AI (như
                  Cloudinary AI, Midjourney...) để đảm bảo chất lượng hình ảnh
                  nghệ thuật cao nhất.
                </p>
              </div>
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-red-50/70 border border-red-100">
              <div className="flex items-start gap-4">
                <ShieldCheck className="size-8 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-neutral-950 mb-2">
                    Tính Toàn vẹn của Nội dung
                  </h3>
                  <p className="text-sm text-neutral-700">
                    <strong>Đặc biệt lưu ý:</strong> AI chỉ đóng vai trò là
                    công cụ hỗ trợ trình bày. Toàn bộ nội dung cốt lõi, các
                    phân tích triết học, dẫn chứng lịch sử và sự vận dụng thực
                    tiễn đều do{" "}
                    <strong>
                      tác giả trực tiếp nghiên cứu, biên soạn và thẩm định
                    </strong>{" "}
                    dựa trên Giáo trình Tư tưởng Hồ Chí Minh chuẩn mực.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
