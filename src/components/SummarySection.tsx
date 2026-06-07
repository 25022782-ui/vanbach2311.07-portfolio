import { BrainCircuit, Compass, Lightbulb, PenLine, Route, Sparkles, Sprout } from "lucide-react";
import { decorArt } from "../data/generatedArt";
import { FloatingDecor } from "./FloatingDecor";
import { GeneratedArtImage } from "./GeneratedArtImage";
import { ScrollReveal } from "./ScrollReveal";

const reflections = [
  {
    icon: Compass,
    title: "Hành trình đã đi qua",
    text: "Sáu bài tập giúp tôi nhìn môn học theo từng bước rõ ràng hơn: bắt đầu từ cách tổ chức dữ liệu, rồi đến tìm kiếm thông tin, dùng AI, hợp tác số, sáng tạo nội dung và cuối cùng là vấn đề an toàn, liêm chính học thuật.",
  },
  {
    icon: Lightbulb,
    title: "Kỹ năng tôi thấy rõ nhất",
    text: "Trước đây tôi thường lưu file khá tùy tiện. Sau các bài đầu, tôi bắt đầu chú ý hơn đến cách đặt tên, chia thư mục và ghi lại minh chứng. Điều này nhỏ nhưng giúp tôi đỡ mất thời gian khi cần tìm lại tài liệu.",
  },
  {
    icon: Route,
    title: "Khó khăn khi làm portfolio",
    text: "Phần khó nhất là biến nhiều báo cáo rời rạc thành một website có mạch trình bày thống nhất. Tôi phải đọc lại từng bài, chọn ý chính và viết lại bằng ngôn ngữ dễ hiểu hơn thay vì chỉ đặt file PDF lên trang.",
  },
  {
    icon: BrainCircuit,
    title: "Cách tôi nhìn AI sau môn học",
    text: "Khi làm các bài liên quan đến AI, tôi nhận ra prompt càng rõ thì kết quả càng dễ kiểm soát. Dù vậy, tôi vẫn phải đọc lại, kiểm chứng và chỉnh sửa. AI hỗ trợ tôi nghĩ nhanh hơn, nhưng không thay tôi chịu trách nhiệm với sản phẩm cuối cùng.",
  },
  {
    icon: Sprout,
    title: "Điều tôi muốn tiếp tục",
    text: "Sau môn học, tôi muốn giữ thói quen làm việc có minh chứng, ghi nguồn rõ ràng và trình bày bài làm mạch lạc hơn. Những kỹ năng này có thể dùng trong bài tập nhóm, báo cáo học phần và các dự án cá nhân sau này.",
  },
];

export function SummarySection() {
  return (
    <section className="section-band reflection-band single-summary-band" id="summary">
      <GeneratedArtImage className="summary-nearby-decor summary-rune-decoration" asset={decorArt.knowledgeRune} alt="" aria-hidden="true" />
      <GeneratedArtImage className="summary-nearby-decor summary-cloud-decoration" asset={decorArt.clouds} alt="" aria-hidden="true" />
      <GeneratedArtImage className="summary-nearby-decor summary-orbit-decoration" asset={decorArt.orbitB} alt="" aria-hidden="true" />
      <FloatingDecor variant="reflection" />
      <div className="section-inner">
        <ScrollReveal className="section-heading">
          <span className="eyebrow">
            <Sparkles size={16} strokeWidth={1.8} />
            Tổng kết cá nhân
          </span>
          <h2>Nhìn lại quá trình học</h2>
        </ScrollReveal>

        <div className="reflection-grid">
          {reflections.map((item, index) => {
            const Icon = item.icon;

            return (
              <ScrollReveal className="reflection-item" delay={index * 90} key={item.title}>
                <span className="block-icon">
                  <Icon size={22} />
                </span>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal className="personal-reflection-card" delay={180}>
          <span className="block-icon">
            <PenLine size={22} />
          </span>
          <div>
            <span className="eyebrow">Lời người viết</span>
            <h2>Cảm nhận cá nhân</h2>
            <p>
              Khi bắt đầu làm portfolio, tôi nghĩ công việc chính chỉ là gom các bài
              tập lại cho đủ. Nhưng trong lúc sắp xếp lại nội dung, tôi nhận ra mỗi bài
              đều phản ánh một kỹ năng khác nhau. Có bài thiên về thao tác, có bài cần
              đọc và đánh giá nguồn, có bài lại buộc tôi suy nghĩ kỹ hơn về việc dùng
              AI sao cho minh bạch.
            </p>
            <p>
              Điều tôi học được nhiều nhất là cách trình bày quá trình, không chỉ trình
              bày kết quả. Nếu chỉ nộp một file PDF, người xem khó thấy tôi đã làm gì
              và rút ra điều gì. Khi chuyển sang website, tôi phải viết lại, chọn ảnh
              minh chứng, đặt tiêu đề và sắp xếp ý theo một mạch dễ đọc hơn.
            </p>
            <p>
              Tôi vẫn còn muốn cải thiện thêm về thiết kế và cách viết, nhưng portfolio
              này giúp tôi thấy rõ sự tiến bộ của mình. Tôi sẽ áp dụng cách làm này cho
              các môn sau: lưu tài liệu có hệ thống, kiểm chứng thông tin và dùng AI như
              một công cụ hỗ trợ có kiểm soát.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
