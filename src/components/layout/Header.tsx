"use client";

import { Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Trang chủ" },
  { href: "#cot-loi", label: "Cốt lõi" },
  { href: "#lich-su", label: "Lịch sử" },
  { href: "#hien-dai", label: "Hiện đại" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "glass-effect border-b border-neutral-200" : "bg-transparent py-2"}`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-black text-xl tracking-tighter"
        >
          <span className="text-red-600">HCM</span>
          <span className="text-neutral-900">IDEOLOGY</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[13px] font-bold uppercase tracking-widest text-neutral-600">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-secondary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Link
          href="/ai-usage"
          className="flex items-center gap-2 bg-secondary text-white px-5 py-2.5 rounded-full text-[12px] font-bold hover:bg-blue-800 transition shadow-lg shadow-blue-500/20"
        >
          <Sparkles className="size-3.5" />
          AI USAGE
        </Link>
      </div>
    </header>
  );
}
