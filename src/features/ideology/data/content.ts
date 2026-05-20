import type { ComponentType, SVGProps } from "react";
import { Icons } from "@/components/Icons";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export type Principle = {
  title: string;
  description: string;
  icon: IconComponent;
};

export type CoreTopic = {
  title: string;
  summary: string;
  points: string[];
};

// Kiểu dữ liệu mới dành riêng cho Banner 4.5 (Ví dụ minh chứng & Trích dẫn)
export type IdeologyExample = {
  domain: string;
  quote: string;
  source: string;
  explanation: string;
  historicalExample: string;
  modernExample: string;
};

export type ContextItem = {
  title: string;
  description: string;
  points?: string[]; // Thêm mảng points để chứa các gạch đầu dòng chi tiết
};

export type HistoryTimelineItem = {
  year: string;
  title: string;
  description: string;
};

export const ideologyContent = {
  hero: {
    eyebrow: "Nghiên cứu Tư tưởng",
    title: "Tư tưởng Hồ Chí Minh về Độc lập dân tộc & Chủ nghĩa xã hội",
    description:
      'Khám phá tính thời đại và giá trị thực tiễn của khát vọng "Dân giàu, nước mạnh" trong bối cảnh Toàn cầu hóa, Kinh tế thị trường và Cách mạng Công nghiệp 4.0.',
    coverImage:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1765771607/cover-bai-hthu-1397x786_vrwvlu.jpg",
    stats: [
      { value: "04", label: "trục nội dung" },
      { value: "4.0", label: "bối cảnh vận dụng" },
      { value: "01", label: "giá trị cốt lõi" },
    ],
  },

  // Phần II: Nội dung cơ bản & Thời kỳ quá độ
  coreTopics: [
    {
      title: "Bản chất của Chủ nghĩa xã hội",
      summary:
        "Nói một cách tóm tắt, mộc mạc, chủ nghĩa xã hội trước hết nhằm làm cho nhân dân lao động thoát nạn bần cùng, có công ăn việc làm, được ấm no và sống hạnh phúc. Chủ nghĩa xã hội là làm sao cho dân giàu, nước mạnh.",
      points: [
        "Xã hội không còn áp bức, bóc lột, do nhân dân lao động làm chủ.",
        "Con người sống ấm no, tự do, hạnh phúc.",
        "Quyền lợi của cá nhân và tập thể vừa thống nhất, vừa gắn bó chặt chẽ với nhau.",
      ],
    },
    {
      title: "Thời kỳ quá độ lên CNXH ở Việt Nam",
      summary:
        "Là một quá trình cải biến sâu sắc, lâu dài và gian khổ; đi thẳng lên CNXH từ một nước nông nghiệp lạc hậu, đan xen cái cũ và cái mới, với phương châm làm dần dần, không nóng vội.",
      points: [
        "Chính trị: Đấu tranh xóa bỏ cũ, xây dựng mới, kiên quyết chống chủ nghĩa cá nhân.",
        "Kinh tế: Xây dựng nền tảng kỹ thuật hiện đại cho nền kinh tế.",
        "Văn hóa: Xây dựng nền văn hóa mang tính dân tộc, khoa học và đại chúng.",
        "Quan hệ xã hội: Đảm bảo công bằng, hài hòa lợi ích giữa các tầng lớp.",
      ],
    },
  ] satisfies CoreTopic[],

  // Dữ liệu ĐỘC QUYỀN cho Banner 4.5: Ví dụ minh chứng từ các lĩnh vực
  ideologyExamples: [
    {
      domain: "Chính trị",
      quote:
        "Nước ta là nước dân chủ. Bao nhiêu lợi ích đều vì dân. Bao nhiêu quyền hạn đều của dân.",
      source: "Tác phẩm 'Dân vận' (1949)",
      explanation: "Quyền lực và lợi ích hoàn toàn thuộc về nhân dân.",
      historicalExample:
        "Thành lập hệ thống Hội đồng nhân dân các cấp sau Cách mạng tháng Tám nhằm trao quyền tự quyết vào tay quần chúng nhân dân lao động thay vì giai cấp thống trị.",
      modernExample:
        "Người dân trực tiếp đóng góp ý kiến sửa đổi Hiến pháp qua cổng thông tin điện tử; triển khai chính quyền số giúp tăng minh bạch, thực hiện 'Dân biết, dân bàn, dân làm, dân kiểm tra'.",
    },
    {
      domain: "Kinh tế",
      quote:
        "Chủ nghĩa xã hội là lấy nhà máy, xe lửa, ngân hàng... làm của chung. Ai làm nhiều thì ăn nhiều, ai làm ít thì ăn ít, ai không làm thì không ăn.",
      source: "Nói chuyện tại lớp hướng dẫn giáo viên cấp II, cấp III (7/1956)",
      explanation:
        "Sở hữu chung về tư liệu sản xuất chính, phân phối theo lao động.",
      historicalExample:
        "Quốc hữu hóa các huyết mạch kinh tế của thực dân (hệ thống đường sắt Bắc-Nam, Ngân hàng Quốc gia) để phục vụ lợi ích chung của đất nước.",
      modernExample:
        "Nhà nước giữ quyền sở hữu, chi phối các hạ tầng chiến lược (truyền tải điện, mạng viễn thông 5G, hạ tầng dữ liệu quốc gia) để đảm bảo an ninh, không để tư bản thao túng.",
    },
    {
      domain: "Văn hóa",
      quote:
        "Nói tóm lại, để phục vụ sự nghiệp cách mạng xã hội chủ nghĩa thì văn hóa phải xã hội chủ nghĩa về nội dung và dân tộc về hình thức.",
      source:
        "Đại hội toàn quốc lần thứ III của Đảng Lao động Việt Nam (9/1960)",
      explanation: "Nội dung XHCN, hình thức dân tộc.",
      historicalExample:
        "Các tác phẩm nghệ thuật thời kháng chiến sử dụng làn điệu dân ca quen thuộc để tuyên truyền lòng yêu nước, bài trừ hủ tục lạc hậu.",
      modernExample:
        "Số hóa di sản (bảo tàng ảo 3D, phim hoạt hình lịch sử, âm nhạc dân gian phối khí điện tử) giúp lan tỏa văn hóa Việt Nam ra toàn cầu trên không gian mạng.",
    },
    {
      domain: "Khoa học - Kỹ thuật",
      quote:
        "Chủ nghĩa xã hội cộng với khoa học, chắc chắn sẽ đưa loài người đến hạnh phúc vô tận.",
      source: "Đại hội sinh viên Việt Nam lần thứ II (5/1958)",
      explanation: "Động lực đưa loài người đến hạnh phúc vô tận.",
      historicalExample:
        "Phong trào bình dân học vụ xóa mù chữ thần tốc; ngành quân y tự nghiên cứu sản xuất vaccine trong điều kiện thiếu thốn của chiến khu.",
      modernExample:
        "Ứng dụng Trí tuệ nhân tạo (AI) và Big Data vào y tế khám chữa bệnh từ xa, nông nghiệp thông minh (IoT) giúp tối ưu sản lượng cây trồng cho nông dân.",
    },
    {
      domain: "Động lực phát triển",
      quote:
        "Thi đua là yêu nước, yêu nước thì phải thi đua. Và những người thi đua là những người yêu nước nhất.",
      source:
        "Đại hội các chiến sĩ thi đua và cán bộ gương mẫu toàn quốc (1/5/1952)",
      explanation:
        "Thi đua yêu nước; kết hợp nội lực (tự lực cánh sinh) và ngoại lực (hợp tác quốc tế).",
      historicalExample:
        "Các phong trào 'Ba sẵn sàng', 'Ba đảm đang', 'Hũ gạo cứu đói' tạo ra động lực tinh thần khổng lồ chiến thắng thiên tai, địch họa.",
      modernExample:
        "Chiến dịch thi đua chuyển đổi số quốc gia; các cuộc thi Hackathon đổi mới sáng tạo nhằm khơi dậy tinh thần tự lực vươn lên thành cường quốc công nghệ.",
    },
  ] satisfies IdeologyExample[],

  // Phần III: Tính phù hợp trong bối cảnh hiện đại
  modernContext: [
    {
      title: "Sự tương thích với Cách mạng Công nghiệp 4.0",
      description:
        "Người từng nói: 'Chủ nghĩa xã hội cộng với khoa học, chắc chắn sẽ đưa loài người đến hạnh phúc vô tận'. Ngày nay, 'khoa học' chính là lõi nguồn của CMCN 4.0 (AI, Big Data, IoT).",
      points: [
        "Về lực lượng sản xuất: Cách mạng 4.0 là công cụ, động lực vật chất mạnh mẽ nhất để tối ưu hóa sản xuất, tạo ra của cải khổng lồ để 'dân giàu, nước mạnh' nhanh chóng.",
        "Về bản chất mục tiêu: Công nghệ không phải để tối đa hóa lợi nhuận cho tập đoàn tư bản, mà để phục vụ con người, nâng cao chất lượng y tế, giáo dục và an sinh xã hội.",
      ],
    },
    {
      title: "Sự tương thích với Toàn cầu hóa",
      description:
        "Toàn cầu hóa mở ra cơ hội lớn nhưng đi kèm nguy cơ mất bản sắc. Việc vận dụng nguyên tắc quan hệ quốc tế của Bác là kim chỉ nam tối thượng.",
      points: [
        "Phát huy nội lực làm gốc: 'Một dân tộc không tự lực cánh sinh... thì không xứng đáng được độc lập'. Quốc gia phải tự chủ kinh tế, có năng lực cạnh tranh cốt lõi.",
        "Tranh thủ ngoại lực khôn khéo: Tận dụng sự hợp tác, viện trợ trên tinh thần tôn trọng độc lập, chủ quyền của nhau.",
        "Hội nhập nhưng không hòa tan: Bác từng nói 'Ta không thể giống Liên Xô... vì có lịch sử địa lý khác'. Đoàn kết, học tập kinh nghiệm nước bạn nhưng không máy móc, giữ vững tự chủ.",
      ],
    },
    {
      title: "Sự tương thích với Kinh tế thị trường",
      description:
        "Mô hình nền kinh tế thị trường định hướng XHCN đã được manh nha trong tư tưởng của Bác từ gần 100 năm trước.",
      points: [
        "Năm 1924, Bác đã viết về việc thực hành chính sách 'Tân kinh tế' - chấp nhận thị trường, thương mại tự do để khôi phục kinh tế.",
        "Năm 1953, trong 'Thường thức kinh tế học', Bác đề cập thiết kế ban đầu của nền kinh tế nhiều thành phần.",
        "Năm 1986, Đại hội VI khởi động hành trình đổi mới, chuyển sang nền kinh tế thị trường dưới sự quản lý của Nhà nước, hiện thực hóa tầm nhìn của Người.",
      ],
    },
  ] satisfies ContextItem[],

  // Phần IV: Nguyên tắc vận dụng (Thay thế cho Conclusion cũ)
  conclusion: {
    title: "Nguyên tắc Vận dụng Thực tiễn",
    principles: [
      {
        title: "Kiên định nền tảng & Mục tiêu",
        desc: "Lấy chủ nghĩa Mác - Lênin làm nền tảng tư tưởng, vận dụng sáng tạo. Giữ vững độc lập dân tộc gắn liền với CNXH.",
      },
      {
        title: "Phát huy Sức mạnh & Dân chủ",
        desc: "Thực hiện công thức: 'Dân biết, dân bàn, dân làm, dân kiểm tra' gắn liền với pháp chế. Giữ vững sự lãnh đạo thống nhất của Đảng.",
      },
      {
        title: "Phương pháp 'Xây' đi đôi với 'Chống'",
        desc: "Đấu tranh chống suy thoái, 'tự diễn biến'. Quét sạch chủ nghĩa cá nhân — 'kẻ địch bên trong' đẻ ra tham nhũng, tiêu cực.",
      },
    ],
    glossary: [
      {
        term: "Tự diễn biến",
        meaning:
          "Quá trình tự thay đổi về tư tưởng chính trị, đạo đức và lối sống theo hướng tiêu cực.",
      },
      {
        term: "Tự chuyển hóa",
        meaning:
          "Sự suy thoái từ bên trong cá nhân, làm xa rời các chuẩn mực và lý tưởng cách mạng ban đầu.",
      },
      {
        term: "Kẻ địch bên trong",
        meaning:
          "Những thói hư tật xấu, tham ô, lãng phí, quan liêu, và các biểu hiện của chủ nghĩa cá nhân.",
      },
    ],
  },

  // Giữ nguyên dòng thời gian để không làm vỡ Banner Timeline
  historyTimeline: [
    {
      year: "1911",
      title: "Ra đi tìm đường cứu nước",
      description:
        "Nguyễn Tất Thành rời Bến Nhà Rồng, đặt nền móng cho tư duy độc lập, tự chủ.",
    },
    {
      year: "1930",
      title: "Thành lập Đảng Cộng sản VN",
      description:
        "Cương lĩnh chính trị đầu tiên xác định nhiệm vụ giải phóng dân tộc gắn với định hướng đi lên chủ nghĩa xã hội.",
    },
    {
      year: "1945",
      title: "Tuyên ngôn Độc lập",
      description:
        "Nước Việt Nam Dân chủ Cộng hòa ra đời, mở ra kỷ nguyên nhân dân làm chủ đất nước.",
    },
    {
      year: "1986",
      title: "Đổi mới đất nước",
      description:
        "Chuyển sang vận hành nền kinh tế theo các quy luật của thị trường dưới sự quản lý của Nhà nước.",
    },
  ] satisfies HistoryTimelineItem[],
};
