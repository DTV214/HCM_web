// Định nghĩa kiểu dữ liệu cho 5 câu nói vĩ đại chạy quanh Quỹ đạo (Orbiting Carousel)
export type OrbitingQuote = {
  year: string;
  quote: string;
  context: string;
  icon: string;
};

// Định nghĩa kiểu dữ liệu cho Thư viện ảnh 5 Giai đoạn lịch sử (Marquee Grid)
export type LifeStageCard = {
  id: number;
  stage: string;
  description: string;
  image: string;
};

export const ideologyMuseumData = {
  book: {
    coverTitle: "Lịch sử Vang bóng",
    coverEyebrow: "Khát vọng Độc lập & CNXH",
    coverSource: "1911 - 1986+",
    callToAction: "Chạm để Mở cửa Thời gian",
  },

  // Tuyển tập 5 câu nói mang tính bước ngoặt lịch sử từ kho tư liệu của bạn
  orbitingQuotes: [
    {
      year: "1949",
      quote:
        "Nước ta là nước dân chủ. Bao nhiêu lợi ích đều vì dân. Bao nhiêu quyền hạn đều của dân.",
      context: "Trích tác phẩm văn kiện lịch sử 'Dân vận'",
      icon: "Shield",
    },
    {
      year: "1952",
      quote:
        "Thi đua là yêu nước, yêu nước thì phải thi đua. Và những người thi đua là những người yêu nước nhất.",
      context: "Lời khai mạc Đại hội các chiến sĩ thi đua toàn quốc",
      icon: "Flame",
    },
    {
      year: "1956",
      quote:
        "Chủ nghĩa xã hội là lấy nhà máy, xe lửa, ngân hàng, v.v. làm của chung. Ai làm nhiều thì ăn nhiều, ai làm ít thì ăn ít.",
      context: "Bài nói chuyện tại lớp hướng dẫn giáo viên Hội nghị Sư phạm",
      icon: "Coins",
    },
    {
      year: "1958",
      quote:
        "Chủ nghĩa xã hội cộng với khoa học, chắc chắn sẽ đưa loài người đến hạnh phúc vô tận.",
      context:
        "Bài phát biểu mang tính tầm nhìn tại Đại hội sinh viên VN lần II",
      icon: "Atom",
    },
    {
      year: "1969",
      quote:
        "Điều mong muốn cuối cùng của tôi là: Toàn Đảng, toàn dân ta đoàn kết phấn đấu, xây dựng một nước Việt Nam hòa bình, thống nhất...",
      context: "Trích đoạn Tâm nguyện thiêng liêng từ Bản Di chúc Lịch sử",
      icon: "PenTool",
    },
  ] satisfies OrbitingQuote[],

  // Trục chiều dài lịch sử qua 5 chặng đường mang tính biểu tượng cốt lõi
  lifeGallery: [
    {
      id: 1,
      stage: "Khởi nguồn (1911-1930)",
      description:
        "Người thanh niên yêu nước Nguyễn Tất Thành rời Bến Nhà Rồng, bôn ba khắp năm châu tìm con đường giải phóng độc lập thực tiễn cho dân tộc.",
      image:
        "https://res.cloudinary.com/dratbz8bh/image/upload/v1779247810/7a846fcde31b627f6e853664c3a10410_dtlvn0.jpg",
    },
    {
      id: 2,
      stage: "Cương lĩnh đầu tiên (1930)",
      description:
        "Thành lập Đảng Cộng sản Việt Nam, đặt nền móng lý luận đầu tiên gắn liền Độc lập dân tộc mật thiết với định hướng đi lên Chủ nghĩa xã hội.",
      image:
        "https://res.cloudinary.com/dratbz8bh/image/upload/v1779247879/3e142fc7fe6e34af18b19d5f5c2b4c4e_rv4a9t.jpg",
    },
    {
      id: 3,
      stage: "Khai sinh đất nước (1945)",
      description:
        "Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập tại quảng trường Ba Đình, chính thức đưa nhân dân lao động lên địa vị làm chủ đất nước.",
      image:
        "https://res.cloudinary.com/dratbz8bh/image/upload/v1779247951/5e6d75ae871e579d14b7bec2343138be_rgrovk.jpg",
    },
    {
      id: 4,
      stage: "Thi đua kiến thiết (1950-1960)",
      description:
        "Vừa kháng chiến vừa kiến quốc, khơi dậy tinh thần tự lực cánh sinh thông qua các phong trào thi đua yêu nước và phát triển văn hóa dân tộc.",
      image:
        "https://res.cloudinary.com/dratbz8bh/image/upload/v1779248096/chu_20tich_20hcm_fni8or.png",
    },
    {
      id: 5,
      stage: "Kỷ nguyên số hội nhập (Hiện nay)",
      description:
        "Vận dụng sáng tạo lõi nguồn khoa học tri thức của Bác, đưa Việt Nam vươn mình làm chủ công nghệ 4.0 và chuyển đổi số trên trường quốc tế.",
      image:
        "https://res.cloudinary.com/dratbz8bh/image/upload/v1779248221/68eab32e82d506d267ed3b92b88c84fe_rt3d6o.jpg",
    },
  ] satisfies LifeStageCard[],
};
