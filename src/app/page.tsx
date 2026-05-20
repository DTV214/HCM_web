import {
  Conclusion,
  CoreContent,
  ExampleShowcase,
  Flipbook,
  HeroSection,
  HistoryTimeline,
  ModernContext,
  VideoSection,
} from "@/features/ideology";

// ⚠️ Lưu ý: 2 component này chúng ta chuẩn bị tạo, tạm thời import sẵn
import { IntroductionSection } from "@/features/ideology/components/IntroductionSection";
//import { VideoSection } from "@/features/ideology/components/VideoSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      {/* Banner 1: Hero Carousel (Đã hoàn thiện) */}
      <HeroSection />
      {/* Banner 2: Đặt vấn đề & Câu hỏi lớn (Sắp code) */}
      <IntroductionSection />
      {/* Banner 3: Video Text Overlay (Sắp code) */}
      <VideoSection />
      {/* Banner 4: Nội dung cốt lõi */}
      <CoreContent />
      <ExampleShowcase />
      {/* Banner 5: Chiều dài lịch sử */}
      <HistoryTimeline />
      {/* Banner 6: Bối cảnh hiện đại */}
      <ModernContext />
      <Flipbook />
      {/* Banner 7: Kết luận */}
      <Conclusion />
    </main>
  );
}
