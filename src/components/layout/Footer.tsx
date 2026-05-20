import { Heart, Book, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 pt-20 pb-10">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-4">
            <h3 className="text-xl font-black tracking-tighter text-neutral-900">
              HCM IDEOLOGY
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-sm">
              Dự án sáng tạo số về tư tưởng Hồ Chí Minh. Kết hợp giá trị lịch sử
              dân tộc với công nghệ hiện đại.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
              Điều hướng
            </h4>
            <ul className="space-y-3 text-sm text-neutral-700">
              <li>
                <a href="#cot-loi">Nội dung cốt lõi</a>
              </li>
              <li>
                <a href="#lich-su">Dòng chảy lịch sử</a>
              </li>
              <li>
                <Link href="/ai-usage">Tuyên bố AI</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
              Kết nối
            </h4>
            <div className="flex gap-4 text-neutral-500">
              <Book className="size-5 hover:text-secondary cursor-pointer" />
              <Mail className="size-5 hover:text-secondary cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-neutral-400">
          <p>© 2026 HCM IDEOLOGY PROJECT. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-2">
            Được thực hiện với{" "}
            <Heart className="size-3 text-red-600 fill-red-600" /> bởi Nhóm Sáng
            Tạo
          </div>
        </div>
      </div>
    </footer>
  );
}
