import { assignmentCoverArt } from "./generatedArt";
import week1Prompt from "../../CNS/Tuan_1/Bai_tap_1.png";
import week1Report from "../../CNS/Tuan_1/Bai_tap_1.pdf?url";
import week2Prompt from "../../CNS/Tuan_2/Bai_tap_2.png";
import week2Report from "../../CNS/Tuan_2/Bai_tap_2.pdf?url";
import week3Prompt from "../../CNS/Tuan_3/Bai_tap_2.png";
import week3Report from "../../CNS/Tuan_3/Bai_tap_2.pdf?url";
import week4Prompt from "../../CNS/Tuan_4/Bai_tap_3.png";
import week4Report from "../../CNS/Tuan_4/Bai_tap_3.pdf?url";
import week5Prompt from "../../CNS/Tuan_5/Bai_tap_2.png";
import week5Report from "../../CNS/Tuan_5/Bai_tap_2.pdf?url";
import week6Prompt from "../../CNS/Tuan_6/Bai_tap_4.png";
import week6Report from "../../CNS/Tuan_6/Bai_tap_4.pdf?url";

export type HighlightCriterion = {
  title: string;
  description: string;
  expression: string;
};

export type Assignment = {
  id: string;
  slug: string;
  number: number;
  week: string;
  title: string;
  chapter: string;
  shortDescription: string;
  overview: string;
  skills: string[];
  badges: string[];
  tools: string[];
  coverImage: string;
  coverFallbackImage: string;
  coverImageFileName: string;
  objectives: string[];
  process: string[];
  result: string[];
  highlightCriteria: HighlightCriterion[];
  competencies: string[];
  evidenceNotes: string[];
  personalInsight: string;
  futureApplication: string;
  reflection: string[];
  mainActivities: string[];
  coreLesson: string;
  promptImage: string | null;
  reportPdf: string | null;
  dateRange: string;
  timelineWeekLabel: string;
  detailUrl: string;
};

type AssignmentRecord = Omit<
  Assignment,
  | "mainActivities"
  | "coreLesson"
  | "promptImage"
  | "reportPdf"
  | "dateRange"
  | "timelineWeekLabel"
  | "detailUrl"
>;

const timelineMetaById: Record<
  Assignment["id"],
  Pick<Assignment, "mainActivities" | "coreLesson" | "promptImage" | "reportPdf" | "dateRange" | "timelineWeekLabel">
> = {
  "bai-1": {
    mainActivities: [
      "Thực hành tạo, đổi tên, sao chép, di chuyển, xóa và khôi phục tệp trong File Explorer.",
      "Sắp xếp thư mục ThucHanh_NongVanBach, thư mục con TaiLieu và các tệp thực hành theo đúng trình tự.",
    ],
    coreLesson:
      "Tôi nhận ra quản lý file không phải việc phụ. Khi tên file và thư mục rõ ràng, việc tìm lại tài liệu, kiểm tra phiên bản và nộp bài sau này nhẹ hơn rất nhiều.",
    promptImage: week1Prompt,
    reportPdf: week1Report,
    dateRange: "23/02/2026 - 08/03/2026",
    timelineWeekLabel: "Tuần 1-2",
  },
  "bai-2": {
    mainActivities: [
      "Thu thập 13 tài liệu về thiên kiến, đạo đức và tính công bằng trong mô hình ngôn ngữ lớn.",
      "Đánh giá nguồn theo 5 tiêu chí: tác giả, cơ quan xuất bản, phương pháp, trích dẫn và tính cập nhật.",
    ],
    coreLesson:
      "Tìm kiếm tốt không chỉ là gõ từ khóa đúng. Tôi cần biết mình đang cần loại nguồn nào, nguồn đó có được bình duyệt hay không và phải đối chiếu trước khi dùng làm luận cứ.",
    promptImage: week2Prompt,
    reportPdf: week2Report,
    dateRange: "09/03/2026 - 22/03/2026",
    timelineWeekLabel: "Tuần 3-4",
  },
  "bai-3": {
    mainActivities: [
      "So sánh prompt cơ bản, prompt có cấu trúc và prompt nâng cao cho 3 tác vụ học tập.",
      "Áp dụng CO-STAR, RACE, Chain-of-Thought, Bloom và Feynman để kiểm soát đầu ra AI.",
    ],
    coreLesson:
      "AI giúp tôi có thêm góc nhìn, nhưng kết quả chỉ đáng dùng khi tôi biết đặt câu hỏi rõ, yêu cầu định dạng cụ thể và kiểm chứng lại bằng hiểu biết của mình.",
    promptImage: week3Prompt,
    reportPdf: week3Report,
    dateRange: "23/03/2026 - 05/04/2026",
    timelineWeekLabel: "Tuần 5-6",
  },
  "bai-4": {
    mainActivities: [
      "Điều phối dự án video nhóm 14 về AI và công nghệ số trong kỹ thuật - công nghệ.",
      "Quản lý nhiệm vụ, tài liệu, họp trực tuyến, sản xuất video và xử lý sự cố âm thanh.",
    ],
    coreLesson:
      "Làm việc nhóm online hiệu quả nhất khi mọi người thống nhất nơi lưu tài liệu, cách đặt tên file, cách cập nhật tiến độ và cách phản hồi khi có vấn đề phát sinh.",
    promptImage: week4Prompt,
    reportPdf: week4Report,
    dateRange: "06/04/2026 - 19/04/2026",
    timelineWeekLabel: "Tuần 7-8",
  },
  "bai-5": {
    mainActivities: [
      "Tạo infographic 'AI trong học tập: trợ lý, không thay thế tư duy' bằng quy trình lặp nhiều vòng.",
      "Dùng ChatGPT, Gemini, DALL-E và Canva AI để gợi ý, phản biện, tham khảo hình ảnh và bố cục.",
    ],
    coreLesson:
      "AI có thể giúp mở ý tưởng nhanh hơn, nhưng sản phẩm cuối vẫn cần sự chọn lọc, viết lại, chỉnh bố cục và trách nhiệm của người làm.",
    promptImage: week5Prompt,
    reportPdf: week5Report,
    dateRange: "20/04/2026 - 03/05/2026",
    timelineWeekLabel: "Tuần 9-10",
  },
  "bai-6": {
    mainActivities: [
      "Phân tích chính sách VinUniversity về GenAI, đối chiếu với RMIT Vietnam và tham chiếu UNESCO.",
      "Xây dựng bộ 7 nguyên tắc cá nhân và infographic về sử dụng AI có trách nhiệm trong học thuật.",
    ],
    coreLesson:
      "Dùng AI có trách nhiệm không chỉ là ghi một dòng có sử dụng AI. Tôi cần nói rõ dùng ở đâu, kiểm chứng thế nào, chỉnh sửa ra sao và phần nào là đóng góp của mình.",
    promptImage: week6Prompt,
    reportPdf: week6Report,
    dateRange: "04/05/2026 - 17/05/2026",
    timelineWeekLabel: "Tuần 11-12",
  },
};

const assignmentRecords: AssignmentRecord[] = [
  {
    id: "bai-1",
    slug: "bai-1",
    number: 1,
    week: "Tuần 1",
    title: "Máy tính và các thiết bị ngoại vi",
    chapter: "Bài tập 1 - Mục 1.4: Thao tác cơ bản với tệp tin và thư mục",
    shortDescription:
      "Bài tập này giúp tôi làm quen lại với những thao tác tưởng đơn giản như tạo thư mục, đổi tên file, sao chép, di chuyển và khôi phục dữ liệu. Tôi tập trung vào việc làm đúng thao tác và hiểu vì sao cách tổ chức file ảnh hưởng trực tiếp đến quá trình học.",
    overview:
      "Báo cáo tuần 1 ghi lại một chuỗi thao tác thực hành trên File Explorer: mở không gian lưu trữ, tạo thư mục ThucHanh_NongVanBach, tạo tệp GhiChu.txt, đổi tên thành GhiChuQuanTrong.txt, tạo thư mục TaiLieu, sao chép, di chuyển, xóa, xóa vĩnh viễn và khôi phục từ Recycle Bin. Nội dung không phức tạp về lý thuyết, nhưng giúp tôi nhìn rõ một thói quen quan trọng: làm việc số cần có trật tự ngay từ bước lưu trữ.",
    skills: ["File Explorer", "Quản lý thư mục", "Đặt tên tệp", "Sao chép dữ liệu"],
    badges: ["Tổ chức dữ liệu", "Tư duy hệ thống", "Kỷ luật số"],
    tools: ["Windows + E / File Explorer", "Thư mục ThucHanh_NongVanBach", "Thư mục con TaiLieu", "Recycle Bin"],
    coverImage: assignmentCoverArt.bai1.src,
    coverFallbackImage: assignmentCoverArt.bai1.fallback,
    coverImageFileName: assignmentCoverArt.bai1.fileName,
    objectives: [
      "Thực hành đúng các thao tác cơ bản với tệp và thư mục trên máy tính.",
      "Phân biệt rõ sao chép, di chuyển, xóa tạm thời, xóa vĩnh viễn và khôi phục tệp.",
      "Hình thành thói quen đặt tên file dễ hiểu để giảm nhầm lẫn khi có nhiều tài liệu học tập.",
    ],
    process: [
      "Tôi mở File Explorer, chọn ổ đĩa hoặc thư mục Documents rồi tạo thư mục ThucHanh_NongVanBach làm không gian thực hành.",
      "Trong thư mục đó, tôi tạo tệp GhiChu.txt, sau đó đổi tên thành GhiChuQuanTrong.txt để tên file thể hiện rõ vai trò của nội dung.",
      "Tôi tạo thư mục con TaiLieu, sao chép GhiChuQuanTrong.txt vào đó để hiểu sự khác nhau giữa bản gốc và bản sao.",
      "Tiếp theo, tôi tạo DiChuyen.txt, dùng Cut/Paste để chuyển tệp sang TaiLieu và quan sát việc tệp biến mất khỏi vị trí cũ.",
      "Cuối cùng, tôi thực hành Delete, Shift + Delete và Restore từ Recycle Bin để hiểu mức độ rủi ro của từng cách xóa.",
    ],
    result: [
      "Tạo được một cấu trúc thư mục thực hành có thư mục chính, thư mục con, tệp được đổi tên, tệp được sao chép và tệp được di chuyển.",
      "Hiểu rõ hơn sự khác nhau giữa Copy/Paste và Cut/Paste, nhất là tác động của chúng đến vị trí của tệp gốc.",
      "Biết rằng xóa qua Recycle Bin vẫn có thể khôi phục, còn Shift + Delete cần cẩn trọng hơn vì bỏ qua thùng rác.",
      "Có thể áp dụng quy trình này để lưu báo cáo, ảnh minh chứng và bản nộp cuối theo từng tuần học.",
    ],
    highlightCriteria: [
      {
        title: "Cấu trúc thư mục khoa học",
        description:
          "Bài làm thể hiện rõ thư mục chính, thư mục con và vai trò của từng tệp thay vì chỉ hoàn thành thao tác rời rạc.",
        expression: "Minh chứng trong báo cáo là thư mục ThucHanh_NongVanBach, thư mục TaiLieu và các bước copy/cut/paste.",
      },
      {
        title: "Quy tắc đặt tên dễ hiểu",
        description:
          "Việc đổi GhiChu.txt thành GhiChuQuanTrong.txt cho thấy tên file nên gợi được nội dung hoặc mức độ quan trọng.",
        expression: "Tên tệp được đổi theo chức năng, giúp nhận biết mà không cần mở file.",
      },
      {
        title: "Hiểu sâu hơn về quản lý dữ liệu",
        description:
          "Bài tập giúp tôi thấy quản lý dữ liệu không chỉ là lưu file, mà còn là biết bản nào đang ở đâu và có thể khôi phục hay không.",
        expression: "Báo cáo có đủ bước Delete, Shift + Delete và Restore từ Recycle Bin.",
      },
    ],
    competencies: ["Tổ chức dữ liệu", "Quản lý phiên bản", "Thao tác hệ điều hành", "Cẩn trọng khi xóa dữ liệu"],
    evidenceNotes: [
      "PDF tuần 1 là báo cáo thao tác từng bước với File Explorer, từ mở thư mục đến khôi phục từ Recycle Bin.",
      "Ảnh PNG tuần 1 chỉ được dùng ở phần Đề bài gốc, không dùng làm cover hay banner chính.",
    ],
    personalInsight:
      "Qua bài này, tôi nhận ra mình không nên xem việc đặt tên file là chuyện phụ. Nếu ngay từ đầu file đã được đặt tên rõ và nằm đúng thư mục, những tuần sau sẽ dễ tìm lại hơn và ít bị nhầm giữa bản nháp với bản cuối.",
    futureApplication:
      "Tôi có thể dùng cách tổ chức này khi lưu tài liệu đại học, làm bài tập nhóm, đặt tên phiên bản báo cáo và chuẩn bị minh chứng cho portfolio cá nhân.",
    reflection: [
      "Kỹ năng cơ bản với tệp và thư mục là nền cho mọi sản phẩm học tập số.",
      "Điều quan trọng nhất không phải là thao tác nhanh, mà là giữ dữ liệu có trật tự, dễ tìm và ít rủi ro mất nhầm.",
    ],
  },
  {
    id: "bai-2",
    slug: "bai-2",
    number: 2,
    week: "Tuần 2",
    title: "Khai thác dữ liệu và thông tin",
    chapter: "Bài tập 2 - Mục 2.4: Tìm kiếm và đánh giá thông tin học thuật",
    shortDescription:
      "Báo cáo tuần 2 đánh giá độ tin cậy của các nguồn tài liệu về thiên kiến, đạo đức và tính công bằng trong mô hình ngôn ngữ lớn. Tôi học cách chọn nguồn có căn cứ hơn thay vì chỉ lấy kết quả tìm kiếm xuất hiện đầu tiên.",
    overview:
      "PDF tuần 2 thu thập 13 tài liệu thuộc 6 loại nguồn: tạp chí khoa học, kỷ yếu hội nghị, tiền ấn bản, báo cáo tổ chức, sách học thuật và blog/website. Báo cáo đánh giá từng nguồn theo 5 tiêu chí gồm tác giả, cơ quan xuất bản, phương pháp nghiên cứu, trích dẫn và tính cập nhật. Phần này giúp tôi hiểu rằng tìm kiếm thông tin học thuật là một quá trình lọc và kiểm chứng, không chỉ là gom đường dẫn.",
    skills: ["Tìm kiếm học thuật", "Toán tử tìm kiếm", "Đánh giá nguồn", "Trích dẫn"],
    badges: ["Tư duy phản biện", "Nguồn học thuật", "Kiểm chứng thông tin"],
    tools: ["Google Search nâng cao", "Google Scholar", "site:", "filetype:", "AND/OR", "Dấu ngoặc kép", "Dấu trừ"],
    coverImage: assignmentCoverArt.bai2.src,
    coverFallbackImage: assignmentCoverArt.bai2.fallback,
    coverImageFileName: assignmentCoverArt.bai2.fileName,
    objectives: [
      "Xây dựng một chiến lược tìm kiếm tài liệu cho chủ đề thiên kiến, đạo đức và công bằng trong LLM.",
      "Đánh giá nguồn theo tiêu chí rõ ràng thay vì dựa vào cảm giác tin cậy ban đầu.",
      "Biết phân biệt nguồn đã bình duyệt, báo cáo tổ chức, preprint và bài viết web khi dùng làm luận cứ học thuật.",
    ],
    process: [
      "Tôi xác định phạm vi chủ đề là nguồn gốc, cách đo lường và biện pháp giảm thiểu thiên kiến trong AI.",
      "Tôi dùng nhiều kiểu truy vấn nâng cao để thu hẹp kết quả, ví dụ tìm theo cụm từ chính xác, giới hạn theo website học thuật hoặc lọc loại file.",
      "Sau khi thu thập tài liệu, tôi phân nhóm nguồn và đọc thông tin về tác giả, nơi xuất bản, phương pháp, trích dẫn và năm công bố.",
      "Tôi xếp hạng nguồn theo mức độ tin cậy, trong đó các nguồn như PNAS, FAccT, EMNLP, Stanford HAI được đánh giá cao hơn blog hoặc preprint chưa bình duyệt.",
      "Cuối cùng, tôi viết phần kết luận để nêu rõ nguồn nào nên dùng làm bằng chứng chính và nguồn nào chỉ nên dùng để tham khảo thêm.",
    ],
    result: [
      "Bảng tổng hợp 13 nguồn cho thấy tài liệu bình duyệt và báo cáo của tổ chức uy tín thường đáng tin cậy hơn nguồn blog.",
      "Báo cáo nêu rõ ưu điểm và hạn chế của từng nhóm nguồn, ví dụ preprint cập nhật nhanh nhưng cần đối chiếu chéo.",
      "Tôi hiểu rõ hơn vai trò của tài liệu nền tảng như Bender et al. (2021) và các báo cáo cập nhật như Stanford AI Index 2025.",
      "Sản phẩm cuối không chỉ liệt kê tài liệu mà còn giải thích vì sao tài liệu đó đáng tin hoặc cần thận trọng.",
    ],
    highlightCriteria: [
      {
        title: "Dùng linh hoạt trên 4 toán tử",
        description:
          "Quá trình tìm kiếm có dùng nhiều toán tử để lọc kết quả theo cụm từ, miền nguồn, định dạng file và quan hệ giữa các từ khóa.",
        expression: "Các toán tử như dấu ngoặc kép, site:, filetype:, AND/OR và dấu trừ giúp giảm nhiễu khi tìm tài liệu.",
      },
      {
        title: "Chiến lược đánh giá nguồn rõ ràng",
        description:
          "Mỗi nguồn được xem xét theo 5 tiêu chí, giúp việc chọn tài liệu có lý do cụ thể hơn.",
        expression: "PDF trình bày 5 tiêu chí: tác giả, cơ quan xuất bản, phương pháp, trích dẫn và tính cập nhật.",
      },
      {
        title: "Biết phân loại mức độ tin cậy",
        description:
          "Bài làm phân biệt nguồn rất cao, cao, khá, trung bình và thấp để tránh dùng sai loại tài liệu.",
        expression: "Bảng xếp hạng đặt PNAS, FAccT, Stanford HAI ở nhóm rất cao, còn blog ở nhóm thấp hơn.",
      },
    ],
    competencies: ["Tìm kiếm nâng cao", "Đọc nguồn học thuật", "Đánh giá độ tin cậy", "Trích dẫn có trách nhiệm"],
    evidenceNotes: [
      "PDF tuần 2 là báo cáo đánh giá độ tin cậy nguồn tài liệu, có bảng xếp hạng 13 nguồn.",
      "Ảnh PNG tuần 2 được giữ ở phần Đề bài gốc; PDF là minh chứng báo cáo ở cuối chi tiết.",
    ],
    personalInsight:
      "Điều tôi thấy hữu ích nhất là biết đặt câu hỏi trước khi tìm: mình cần nguồn nghiên cứu, nguồn tổng quan hay ví dụ thực tế. Khi mục tiêu rõ hơn, việc chọn tài liệu bớt cảm tính và lập luận trong bài cũng chắc hơn.",
    futureApplication:
      "Kỹ năng này sẽ giúp tôi khi viết báo cáo, làm bài tập nhóm, đọc tài liệu nghiên cứu và tránh dùng những thông tin nghe có vẻ đúng nhưng thiếu căn cứ.",
    reflection: [
      "Không nên xem mọi kết quả tìm kiếm như nhau; độ tin cậy phụ thuộc vào nơi xuất bản và phương pháp nghiên cứu.",
      "Với chủ đề AI thay đổi nhanh, nguồn mới rất hữu ích nhưng vẫn cần đối chiếu với nguồn đã bình duyệt hoặc nguồn tổ chức uy tín.",
    ],
  },
  {
    id: "bai-3",
    slug: "bai-3",
    number: 3,
    week: "Tuần 3",
    title: "Tổng quan về trí tuệ nhân tạo",
    chapter: "Bài tập 2 - Mục 3.4: Viết prompt hiệu quả cho các tác vụ học tập",
    shortDescription:
      "Báo cáo tuần 3 so sánh prompt cơ bản, prompt cải tiến và prompt nâng cao cho các tác vụ học tập. Qua đó tôi hiểu rằng prompt tốt không chỉ dài hơn, mà phải có bối cảnh, mục tiêu, vai trò, định dạng và tiêu chí kiểm chứng.",
    overview:
      "PDF tuần 3 tập trung vào kỹ nghệ câu lệnh trong học tập. Báo cáo dùng các khung CO-STAR, RACE, Chain-of-Thought, Bloom và Feynman để thiết kế prompt cho 3 tác vụ: tóm tắt bài báo 'Attention Is All You Need', giải thích sự vướng víu lượng tử và tạo bộ câu hỏi ôn tập Cách mạng Pháp. Thay vì chỉ hỏi AI một câu ngắn, bài làm thử nhiều cấp độ prompt để so sánh độ sâu, cấu trúc và rủi ro ảo giác.",
    skills: ["Prompt Engineering", "CO-STAR", "RACE", "Chain-of-Thought", "Bloom"],
    badges: ["AI có kiểm chứng", "Đối tác tư duy", "Tư duy prompt"],
    tools: ["ChatGPT / công cụ AI tạo sinh", "CO-STAR", "RACE", "Chain-of-Thought", "Bloom's Taxonomy", "Feynman Technique"],
    coverImage: assignmentCoverArt.bai3.src,
    coverFallbackImage: assignmentCoverArt.bai3.fallback,
    coverImageFileName: assignmentCoverArt.bai3.fileName,
    objectives: [
      "Khảo sát và áp dụng các khung kỹ nghệ câu lệnh vào nhiệm vụ học tập thực tế.",
      "So sánh prompt zero-shot với prompt có cấu trúc, role-prompting và Chain-of-Thought.",
      "Rút ra nguyên tắc dùng AI như đối tác tư duy, đồng thời giảm rủi ro hallucination.",
    ],
    process: [
      "Tôi bắt đầu với prompt cơ bản cho từng tác vụ để quan sát phản hồi tự nhiên của AI.",
      "Sau đó tôi thêm vai trò, đối tượng người đọc, mục tiêu và định dạng đầu ra theo CO-STAR hoặc RACE.",
      "Với prompt nâng cao, tôi yêu cầu AI suy nghĩ theo từng bước, dùng ví dụ đời thường hoặc tạo câu hỏi theo 6 cấp độ Bloom.",
      "Tôi so sánh kết quả theo độ sâu nhận thức, cấu trúc trình bày và mức độ kiểm soát rủi ro AI bịa thông tin.",
      "Cuối cùng, tôi đúc kết 5 nguyên tắc: rõ ràng hơn thông minh, có cấu trúc, tinh chỉnh theo vòng lặp, quản lý ảo giác và dùng động từ tư duy bậc cao.",
    ],
    result: [
      "Prompt cơ bản thường cho câu trả lời ngắn, dễ dàn trải và chủ yếu ở mức ghi nhớ.",
      "Prompt cải tiến giúp câu trả lời có bố cục rõ hơn, phù hợp đối tượng người học và dễ dùng để ôn tập.",
      "Prompt nâng cao giúp AI lập luận tuần tự hơn, tạo bảng so sánh, rubric hoặc giải thích theo từng bước.",
      "Tôi thấy việc yêu cầu nguồn, giới hạn phạm vi và nói rõ nếu không chắc chắn là cách cần thiết để giảm hallucination.",
    ],
    highlightCriteria: [
      {
        title: "Áp dụng Prompt Engineering",
        description:
          "Bài làm không chỉ dùng một prompt mà thử nhiều khung để thấy rõ tác động của cách đặt lệnh.",
        expression: "PDF có các prompt cơ bản, cải tiến và nâng cao cho 3 tác vụ học tập.",
      },
      {
        title: "So sánh cơ chế hoạt động của AI",
        description:
          "Bảng đánh giá cho thấy AI phản hồi khác nhau khi prompt thay đổi về vai trò, bối cảnh và yêu cầu suy luận.",
        expression: "Tiêu chí so sánh gồm độ sâu nhận thức, cấu trúc/định dạng và nguy cơ ảo giác.",
      },
      {
        title: "Người học chịu trách nhiệm cuối",
        description:
          "Bài làm nhấn mạnh AI là trợ lý học tập, còn người học phải đặt mục tiêu, kiểm chứng và chỉnh sửa.",
        expression: "Phần nguyên tắc yêu cầu kiểm chứng thông tin quan trọng và không phóng đại năng lực AI.",
      },
    ],
    competencies: ["Thiết kế prompt", "Đánh giá đầu ra AI", "Tư duy phản biện", "Học tập có hỗ trợ AI"],
    evidenceNotes: [
      "PDF tuần 3 có ví dụ prompt cho bài báo Transformer, vướng víu lượng tử và câu hỏi Cách mạng Pháp.",
      "Ảnh PNG tuần 3 được dùng trong phần Đề bài gốc; PDF vẫn chỉ là minh chứng cuối bài.",
    ],
    personalInsight:
      "Qua bài này, tôi thấy prompt tốt buộc chính tôi phải nghĩ rõ hơn. Nếu tôi không biết mình cần gì, AI cũng trả lời rất chung. Khi prompt có bối cảnh, vai trò và tiêu chí, câu trả lời dễ kiểm soát hơn nhiều.",
    futureApplication:
      "Tôi có thể dùng kỹ năng này khi đọc tài liệu khó, lập dàn ý báo cáo, tạo câu hỏi ôn tập hoặc nhờ AI phản biện bản nháp trước khi nộp.",
    reflection: [
      "Prompt Engineering là kỹ năng tư duy, không chỉ là mẹo công nghệ.",
      "AI hữu ích nhất khi người học biết đặt nhiệm vụ rõ, đánh giá đầu ra và tự chịu trách nhiệm với phần sử dụng.",
    ],
  },
  {
    id: "bai-4",
    slug: "bai-4",
    number: 4,
    week: "Tuần 4",
    title: "Giao tiếp và hợp tác trong môi trường số",
    chapter: "Bài tập 3 - Mục 4.4: Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    shortDescription:
      "Báo cáo tuần 4 trình bày quá trình hợp tác trực tuyến trong dự án video nhóm 14. Tôi giữ vai trò trưởng nhóm, phụ trách tiến độ, kịch bản tổng thể, MC, quay hình và xử lý hậu kỳ.",
    overview:
      "PDF tuần 4 không chỉ liệt kê công cụ nhóm đã dùng, mà phân tích cách các công cụ đó hỗ trợ một dự án thật. Nhóm sử dụng Trello/Planner để quản lý nhiệm vụ, Google Docs/Office Online để viết kịch bản, Drive/OneDrive để lưu tệp, Teams/Discord/Google Meet để trao đổi, cùng Gemini, Gamma AI, CapCut và Overleaf cho sản xuất nội dung. Báo cáo ghi rõ timeline 20/04, 23/04, 26/04, 29/04 và 02/05, đồng thời nêu cách xử lý tạp âm, phân tán tài liệu và đồng bộ tiến độ.",
    skills: ["Quản lý dự án", "Tài liệu cộng tác", "Lưu trữ đám mây", "Họp trực tuyến"],
    badges: ["Cộng tác số", "Quản lý tiến độ", "Vai trò nhóm"],
    tools: ["Trello/Planner", "Google Docs/Office Online", "Google Drive/OneDrive", "Teams/Discord/Google Meet", "Gemini", "Gamma AI", "CapCut", "Overleaf"],
    coverImage: assignmentCoverArt.bai4.src,
    coverFallbackImage: assignmentCoverArt.bai4.fallback,
    coverImageFileName: assignmentCoverArt.bai4.fileName,
    objectives: [
      "Thể hiện cách dùng công cụ trực tuyến để điều phối một dự án nhóm có sản phẩm cuối là video.",
      "Mô tả vai trò cá nhân trong quản lý tiến độ, kịch bản, quay hình và hậu kỳ.",
      "Phân tích cách nhóm xử lý các vấn đề như tạp âm, phân tán tài liệu, lệch tiến độ và nội dung kỹ thuật rời rạc.",
    ],
    process: [
      "Nhóm chọn đề tài AI trong khoa học tự nhiên, kỹ thuật và công nghệ, sau đó phân công nhiệm vụ ban đầu vào ngày 20/04.",
      "Ngày 23/04, nhóm chốt kịch bản, diễn tập và chỉnh phần Gamma/Gemini cho sát thực tế hơn.",
      "Ngày 26/04, nhóm quay video chính thức, phát hiện vấn đề tạp âm và chuyển sang thu âm lại, lọc tiếng ồn, thêm phụ đề.",
      "Trong quá trình làm, tài liệu được chia theo thư mục kịch bản, hình ảnh, âm thanh, video thô và bản nộp cuối.",
      "Tôi theo dõi tiến độ bằng bảng nhiệm vụ, nhắc deadline, ghi nhận phản hồi và kiểm tra bản xuất trước khi nộp.",
    ],
    result: [
      "Sản phẩm nhóm là video học thuật 'Hành Trình Khám Phá AI & Công Nghệ Số Trong Kỹ Thuật - Công Nghệ'.",
      "Báo cáo có 9 hình minh chứng: bảng nhiệm vụ, lịch sử chỉnh sửa, thư mục lưu trữ, kênh trao đổi, phiên họp, timeline, quy trình sản xuất, đóng góp cá nhân và poster.",
      "Quy trình nhóm cho thấy công cụ số giúp kiểm soát tiến độ, quản lý tài nguyên và minh bạch vai trò cá nhân.",
      "Các thách thức được xử lý bằng thu âm lại, lọc tiếng ồn, quy ước đặt tên file, họp ngắn và chỉnh lại kịch bản.",
    ],
    highlightCriteria: [
      {
        title: "Tích hợp công cụ nâng cao",
        description:
          "Nhóm dùng nhiều lớp công cụ: quản lý nhiệm vụ, soạn thảo cộng tác, lưu trữ, họp trực tuyến và sản xuất nội dung.",
        expression: "PDF nêu Trello/Planner, Docs, Drive, Teams/Discord/Meet, Gemini, Gamma AI, CapCut và Overleaf.",
      },
      {
        title: "Tối ưu quy trình làm việc nhóm",
        description:
          "Công việc được chia theo giai đoạn rõ ràng, có mốc thời gian và có phần việc cá nhân của trưởng nhóm.",
        expression: "Timeline có các mốc 20/04, 23/04, 26/04, 29/04 và 02/05.",
      },
      {
        title: "Có giải pháp cho vấn đề phát sinh",
        description:
          "Báo cáo không né khó khăn mà chỉ ra tạp âm, phân tán tài liệu, đồng bộ tiến độ và chất lượng kịch bản.",
        expression: "Bảng thách thức đi kèm cách giải quyết như thu âm lại, lọc tiếng ồn, đặt tên file và họp ngắn.",
      },
    ],
    competencies: ["Giao tiếp số", "Điều phối nhóm", "Quản lý tài nguyên", "Kiểm soát phiên bản"],
    evidenceNotes: [
      "PDF tuần 4 là báo cáo cá nhân về hợp tác trực tuyến trong dự án nhóm 14.",
      "PDF ghi rõ vai trò cá nhân: trưởng nhóm, kịch bản tổng thể, MC 1, quay hình và hậu kỳ video.",
    ],
    personalInsight:
      "Tôi thấy làm việc nhóm online hiệu quả không phải là dùng thật nhiều ứng dụng, mà là thống nhất cách dùng. Khi mọi người biết nhiệm vụ nằm ở đâu, tài liệu lưu ở đâu và khi nào cần phản hồi, việc phối hợp nhẹ hơn rất nhiều.",
    futureApplication:
      "Tôi có thể áp dụng quy trình này cho các bài tập nhóm sau này, đặc biệt là dự án có nhiều bản nháp, tài nguyên đa phương tiện và yêu cầu phản hồi thường xuyên.",
    reflection: [
      "Công cụ số chỉ phát huy tác dụng khi nhóm có quy ước chung.",
      "Một quy trình rõ giúp mọi người bớt phụ thuộc vào trí nhớ hoặc tin nhắn rời rạc.",
    ],
  },
  {
    id: "bai-5",
    slug: "bai-5",
    number: 5,
    week: "Tuần 5",
    title: "Sáng tạo nội dung số",
    chapter: "Bài tập 2 - Mục 5.4: Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    shortDescription:
      "Báo cáo tuần 5 trình bày dự án infographic 'AI trong học tập: trợ lý, không thay thế tư duy'. Tôi dùng AI để gợi ý, phản biện và tham khảo bố cục, nhưng phần chọn lọc, viết lại và hoàn thiện là phần tự làm.",
    overview:
      "PDF tuần 5 ghi lại đầy đủ quá trình sáng tạo nội dung bằng AI tạo sinh. Sản phẩm cuối là một infographic dọc gồm 5 nguyên tắc sử dụng AI có trách nhiệm trong học tập. Quy trình được thực hiện theo dạng lặp: đặt mục tiêu, hỏi AI, đọc kết quả, phản biện, tự chỉnh sửa và kiểm tra lại. Điểm quan trọng là báo cáo không xem đầu ra AI là sản phẩm cuối, mà chỉ xem nó như vật liệu để người học chọn lọc và phát triển.",
    skills: ["AI tạo sinh", "Infographic", "Thiết kế nội dung", "Phản biện AI"],
    badges: ["Sáng tạo số", "AI tạo sinh", "Thiết kế có trách nhiệm"],
    tools: ["ChatGPT", "Google Gemini", "DALL-E", "Canva AI"],
    coverImage: assignmentCoverArt.bai5.src,
    coverFallbackImage: assignmentCoverArt.bai5.fallback,
    coverImageFileName: assignmentCoverArt.bai5.fileName,
    objectives: [
      "Tạo một infographic có thông điệp rõ: AI là trợ lý học tập, không thay thế tư duy của người học.",
      "Ghi lại vai trò của từng công cụ AI trong quá trình tạo ý tưởng, phản biện, tham khảo hình ảnh và bố cục.",
      "Chỉ ra phần người học tự chỉnh sửa để sản phẩm cuối không phụ thuộc hoàn toàn vào AI.",
    ],
    process: [
      "Tôi dùng ChatGPT để tạo khung 5 nguyên tắc cho sinh viên năm nhất, sau đó rút gọn câu chữ và chuyển thành hành động cụ thể.",
      "Tôi dùng Gemini để phản biện bản nháp theo góc nhìn giảng viên, bổ sung yếu tố quy trình, đạo đức, bảo mật và đóng góp cá nhân.",
      "Tôi dùng DALL-E để tham khảo hướng hình ảnh sinh viên, laptop và mạng nút AI, nhưng không dùng ảnh đó làm sản phẩm cuối.",
      "Tôi dùng Canva AI để tham khảo bố cục poster dọc dạng thẻ, rồi tự chỉnh lại tiếng Việt, màu sắc, khoảng trắng và thứ tự nội dung.",
      "Ở bước rà soát cuối, tôi giảm chữ, làm rõ thông điệp và kiểm tra lại sản phẩm theo tiêu chí đạo đức, minh bạch và phù hợp sinh viên năm nhất.",
    ],
    result: [
      "Sản phẩm cuối là infographic dọc với 5 nguyên tắc sử dụng AI có trách nhiệm trong học tập.",
      "Báo cáo có các phiên bản trung gian: bản thô từ ChatGPT, bản sau phản biện Gemini, hướng hình ảnh DALL-E và bố cục tham khảo Canva AI.",
      "Phần so sánh công cụ nêu rõ điểm mạnh, hạn chế và phần tôi tự chỉnh sửa ở mỗi công cụ.",
      "Bài làm chỉ ra AI làm tốt nhất ở giai đoạn mở rộng ý tưởng và phản biện, còn sản phẩm cuối cần người học kiểm soát.",
    ],
    highlightCriteria: [
      {
        title: "Sản phẩm sáng tạo có thông điệp rõ",
        description:
          "Infographic không chỉ đẹp về hình thức mà có mục tiêu giáo dục: nhắc sinh viên dùng AI có trách nhiệm.",
        expression: "Sản phẩm xoay quanh thông điệp 'AI trong học tập: trợ lý, không thay thế tư duy'.",
      },
      {
        title: "Tận dụng nhiều công cụ AI",
        description:
          "Mỗi công cụ được dùng ở một vai trò riêng: ChatGPT tạo ý, Gemini phản biện, DALL-E gợi hình, Canva AI gợi bố cục.",
        expression: "PDF có phần công cụ AI đã sử dụng và quy trình prompt cho từng bước.",
      },
      {
        title: "Có phần người học tự hoàn thiện",
        description:
          "Báo cáo nêu rõ không dùng nguyên xi đầu ra AI, mà chọn lọc, viết lại, chỉnh màu, chỉnh bố cục và thông điệp cuối.",
        expression: "Phần phiên bản trung gian và so sánh công cụ ghi rõ phần người học tự chỉnh sửa.",
      },
    ],
    competencies: ["Sáng tạo nội dung", "Thiết kế infographic", "Phản biện AI", "Đạo đức sáng tạo"],
    evidenceNotes: [
      "PDF tuần 5 có prompt ChatGPT, Gemini, DALL-E, Canva AI và các bước chỉnh sửa cá nhân.",
      "Ảnh PNG tuần 5 chỉ dùng làm đề bài gốc/minh chứng, không dùng làm ảnh cover chính.",
    ],
    personalInsight:
      "Qua bài này, tôi thấy AI rất hữu ích ở giai đoạn mở ý tưởng, nhưng nếu dùng nguyên đầu ra AI thì sản phẩm dễ chung chung. Phần làm cho sản phẩm giống của mình hơn chính là chọn ý, bỏ ý thừa, viết lại tiếng Việt và quyết định thông điệp cuối.",
    futureApplication:
      "Tôi có thể dùng kinh nghiệm này khi làm poster học thuật, slide thuyết trình, nội dung truyền thông nhóm hoặc tài liệu học tập trực quan.",
    reflection: [
      "Sáng tạo nội dung số cần cả ý tưởng, bố cục và trách nhiệm với thông tin đưa ra.",
      "AI giúp nhanh hơn, nhưng người học vẫn phải là người quyết định thông điệp cuối cùng.",
    ],
  },
  {
    id: "bai-6",
    slug: "bai-6",
    number: 6,
    week: "Tuần 6",
    title: "An toàn và liêm chính học thuật trong môi trường số",
    chapter: "Bài tập 4 - Mục 6.4: Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    shortDescription:
      "Báo cáo tuần 6 phân tích chính sách sử dụng AI có trách nhiệm trong học tập, lấy VinUniversity làm trường hợp chính và đối chiếu với RMIT Vietnam, UNESCO. Trọng tâm là minh bạch, kiểm chứng và giữ trách nhiệm cá nhân.",
    overview:
      "PDF tuần 6 là báo cáo học thuật về sử dụng AI có trách nhiệm và đạo đức trong học tập, nghiên cứu. Báo cáo không trả lời đơn giản là nên hay không nên dùng AI, mà đặt câu hỏi dùng AI đến mức nào thì vẫn giữ được liêm chính học thuật. Nội dung gồm nghiên cứu chính sách VinUniversity, so sánh với RMIT Vietnam, tham chiếu UNESCO, ghi lại một nhiệm vụ học tập có AI hỗ trợ, phân tích các vấn đề đạo đức và xây dựng bộ 7 nguyên tắc cá nhân.",
    skills: ["Liêm chính học thuật", "Chính sách AI", "Minh bạch", "An toàn dữ liệu"],
    badges: ["Đạo đức AI", "An toàn số", "Bộ nguyên tắc"],
    tools: ["Chính sách VinUniversity", "Hướng dẫn RMIT Vietnam", "UNESCO Guidance", "ChatGPT hỗ trợ lập khung/phản biện", "Nhật ký prompt"],
    coverImage: assignmentCoverArt.bai6.src,
    coverFallbackImage: assignmentCoverArt.bai6.fallback,
    coverImageFileName: assignmentCoverArt.bai6.fileName,
    objectives: [
      "Phân tích ranh giới sử dụng AI trong học tập và nghiên cứu theo chính sách của VinUniversity.",
      "Đối chiếu với hướng dẫn của RMIT Vietnam và khung UNESCO để nhìn vấn đề từ nhiều góc độ.",
      "Xây dựng bộ nguyên tắc cá nhân giúp dùng AI minh bạch, có kiểm chứng và không thay thế năng lực học tập.",
    ],
    process: [
      "Tôi đọc nguồn chính sách VinUniversity về GenAI và liêm chính học thuật, sau đó trích xuất các nhóm quy định quan trọng.",
      "Tôi đối chiếu với hướng dẫn RMIT Vietnam để thấy sự khác nhau giữa khung chính sách chính thức và ví dụ thực hành gần với sinh viên.",
      "Tôi dùng AI như trợ lý phản biện: gợi ý khung phân tích, tóm tắt chính sách, so sánh nguồn và rà soát bộ nguyên tắc.",
      "Mỗi đầu ra AI đều được kiểm tra lại bằng nguồn chính thức, chỉnh sửa lại bằng ngôn ngữ của người học và ghi vào nhật ký prompt.",
      "Tôi phân tích các vấn đề đạo đức như ranh giới hỗ trợ/gian lận, sở hữu trí tuệ, dữ liệu cá nhân, thiên kiến và ảo giác AI.",
    ],
    result: [
      "Báo cáo kết luận vấn đề cốt lõi không phải là cấm hay cho phép AI tuyệt đối, mà là xác định mức AI được phép tham gia trong từng nhiệm vụ.",
      "Sản phẩm có bộ 7 nguyên tắc cá nhân: hỏi quyền trước, đặt mục tiêu trước prompt, không nộp điều mình không hiểu, kiểm chứng nguồn, ghi lại dấu vết AI, bảo vệ dữ liệu/quyền tác giả và dùng AI để học sâu hơn.",
      "Báo cáo có câu ghi nhận cách dùng AI, nhật ký prompt và infographic minh họa việc sử dụng AI có trách nhiệm.",
      "Phần thảo luận nêu hạn chế và khuyến nghị cho sinh viên, giảng viên, nhà trường khi thiết kế việc học có AI.",
    ],
    highlightCriteria: [
      {
        title: "Bộ nguyên tắc chi tiết",
        description:
          "Bộ 7 nguyên tắc không dừng ở khẩu hiệu, mà có hành động cụ thể và lý do đạo đức cho từng nguyên tắc.",
        expression: "PDF trình bày bảng nguyên tắc gồm hành động cụ thể và lý do đạo đức.",
      },
      {
        title: "Tư duy phản biện cao",
        description:
          "Bài làm so sánh VinUniversity với RMIT Vietnam và UNESCO, đồng thời nêu nhận định cá nhân về điểm mạnh và hạn chế.",
        expression: "Phần nghiên cứu chính sách có so sánh, nhận xét và khuyến nghị thực hành.",
      },
      {
        title: "Giải pháp cho thách thức đạo đức",
        description:
          "Các rủi ro như gian lận, trích dẫn sai, dữ liệu cá nhân, thiên kiến và hallucination đều được gắn với cách xử lý.",
        expression: "PDF có phần phân tích đạo đức và khuyến nghị giữ nhật ký prompt, kiểm chứng nguồn, bảo vệ dữ liệu.",
      },
    ],
    competencies: ["Liêm chính học thuật", "An toàn thông tin", "Minh bạch AI", "Phản biện đạo đức"],
    evidenceNotes: [
      "PDF tuần 6 đọc được đầy đủ, có nghiên cứu chính sách, nhật ký dùng AI, bộ nguyên tắc và tài liệu tham khảo.",
      "PDF được giữ ở phần Minh chứng báo cáo; nội dung chính đã được biên tập lại thành các section trên web.",
    ],
    personalInsight:
      "Tôi nhận ra minh bạch khi dùng AI không chỉ là ghi một câu cuối bài. Quan trọng hơn là mình phải giải thích được đã dùng AI ở bước nào, kiểm chứng ra sao, bỏ phần nào, giữ phần nào và phần nào là suy nghĩ của mình.",
    futureApplication:
      "Tôi sẽ dùng các nguyên tắc này khi viết báo cáo, làm nghiên cứu nhỏ, tạo nội dung bằng AI hoặc tham gia bài đánh giá có yêu cầu rõ về liêm chính học thuật.",
    reflection: [
      "Dùng AI có trách nhiệm cần sự trung thực với chính quá trình làm bài của mình.",
      "An toàn số và liêm chính học thuật không phải phần phụ, mà là điều giúp sản phẩm học tập đáng tin hơn.",
    ],
  },
];

export const assignments: Assignment[] = assignmentRecords.map((assignment) => ({
  ...assignment,
  ...timelineMetaById[assignment.id],
  detailUrl: `/projects/${assignment.slug}`,
}));
