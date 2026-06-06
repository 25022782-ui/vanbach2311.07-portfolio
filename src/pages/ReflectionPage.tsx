import { Compass, Lightbulb, Route, ShieldCheck, Sprout } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";

const reflections = [
  {
    icon: Compass,
    title: "Trải nghiệm thực hiện portfolio",
    text: "Quá trình xây dựng portfolio giúp tôi nhìn lại môn học như một hành trình có cấu trúc, thay vì chỉ là chuỗi bài nộp rời rạc. Khi phải chọn ảnh minh chứng, viết lại mục tiêu, mô tả quá trình và liên kết PDF gốc, tôi hiểu rõ hơn sản phẩm nào thể hiện kỹ năng nào và vì sao nó quan trọng.",
  },
  {
    icon: Lightbulb,
    title: "Kiến thức và kỹ năng đã học",
    text: "Tôi rèn được nhiều kỹ năng nền tảng: quản lý tệp, tìm kiếm và đánh giá thông tin học thuật, thiết kế prompt, hợp tác trực tuyến, sáng tạo nội dung số và sử dụng AI có trách nhiệm. Điểm chung của các kỹ năng này là yêu cầu người học biết tổ chức, kiểm chứng và giải thích quyết định của mình.",
  },
  {
    icon: Route,
    title: "Khó khăn gặp phải",
    text: "Khó khăn lớn nhất là biến các minh chứng và báo cáo PDF thành một câu chuyện học tập mạch lạc. Mỗi bài có định dạng khác nhau, có bài thiên về thao tác kỹ thuật, có bài thiên về phân tích chính sách hoặc sáng tạo nội dung. Nếu chỉ đặt file lên website, portfolio sẽ chưa thể hiện đầy đủ quá trình học.",
  },
  {
    icon: ShieldCheck,
    title: "Cách khắc phục",
    text: "Tôi xử lý bằng cách chuẩn hóa mỗi bài theo cùng một khung: mục tiêu, quá trình, kết quả, hình ảnh minh họa, kiến thức rút ra và minh chứng gốc. Cách làm này giúp người xem dễ theo dõi, đồng thời buộc tôi phải đọc lại sản phẩm của mình và diễn giải bằng ngôn ngữ rõ ràng hơn.",
  },
  {
    icon: Sprout,
    title: "Định hướng sau môn học",
    text: "Sau môn học, tôi muốn tiếp tục phát triển năng lực học tập số theo hướng có trách nhiệm: biết dùng AI để hỗ trợ tư duy, nhưng không phụ thuộc vào AI; biết tạo nội dung hấp dẫn, nhưng vẫn giữ chuẩn mực học thuật; biết hợp tác trực tuyến, nhưng luôn minh bạch về vai trò và đóng góp cá nhân.",
  },
];

export function ReflectionPage() {
  return (
    <>
      <section className="page-hero reflection-hero">
        <div className="section-inner">
          <span className="eyebrow">
            <Compass size={16} strokeWidth={1.8} />
            Trang tổng kết cá nhân
          </span>
          <h1>Nhìn lại hành trình và phần tri thức đã kết tinh</h1>
          <p>
            Portfolio này là sản phẩm tổng hợp thể hiện quá trình học tập, cách tổ chức
            minh chứng và năng lực phản tư, không chỉ là nơi nộp bài.
          </p>
        </div>
      </section>

      <section className="section-band reflection-band">
        <div className="section-inner reflection-grid">
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
      </section>

      <section className="section-band closing-band">
        <div className="section-inner closing-copy">
          <ScrollReveal>
            <h2>Kết luận</h2>
            <p>
              Qua portfolio, tôi nhận ra công nghệ số và AI không chỉ là công cụ để làm
              nhanh hơn, mà còn là môi trường yêu cầu người học có trách nhiệm hơn với dữ
              liệu, nguồn tin, sản phẩm và chính quá trình tư duy của mình. Khi mỗi bài tập
              được đặt vào một hệ thống chung, portfolio trở thành dấu mốc ghi lại sự tiến
              bộ cá nhân trong học tập số.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
