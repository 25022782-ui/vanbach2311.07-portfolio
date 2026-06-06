import { assetMap } from "../utils/assetMap";

export type Assignment = {
  id: string;
  number: number;
  title: string;
  chapter: string;
  shortDescription: string;
  skills: string[];
  image?: string;
  pdf?: string;
  sourceFolder: string;
  objectives: string[];
  process: string[];
  result: string[];
  reflection: string[];
};

// Mapping dựa trên rubric trong CNS/Yêu cầu Portfolio.pdf và cấu trúc tuần.
// Một số file có tên lặp lại như Bai_tap_2, vì vậy folder Tuan_* là tín hiệu chính để ghép đúng bài.
export const assignments: Assignment[] = [
  {
    id: "bai-1",
    number: 1,
    title: "Máy tính và các thiết bị ngoại vi",
    chapter: "Bài tập 1 - Mục 1.4: Thao tác cơ bản với tệp tin và thư mục",
    shortDescription:
      "Làm quen môi trường máy tính, File Explorer và quy trình tổ chức tệp/thư mục theo một cấu trúc rõ ràng.",
    skills: ["File Explorer", "Quản lý thư mục", "Đặt tên tệp", "Sao chép và di chuyển dữ liệu"],
    image: assetMap.bai1.image,
    pdf: assetMap.bai1.pdf,
    sourceFolder: assetMap.bai1.sourceFolder,
    objectives: [
      "Hiểu vai trò của máy tính như công cụ làm việc số và biết thao tác an toàn với tệp dữ liệu.",
      "Thực hành tạo thư mục, tạo tệp văn bản, đổi tên, sao chép, di chuyển và xóa tệp.",
      "Hình thành thói quen đặt tên và tổ chức tài liệu có quy tắc để phục vụ học tập lâu dài.",
    ],
    process: [
      "Mở File Explorer, chọn không gian làm việc phù hợp và tạo thư mục ThucHanh_NongVanBach.",
      "Tạo tệp GhiChu.txt, đổi tên thành GhiChuQuanTrong.txt, sau đó tạo thư mục con TaiLieu.",
      "Thực hiện copy/paste để tạo bản sao, cut/paste để di chuyển tệp và quan sát sự khác nhau giữa hai thao tác.",
      "Xóa tệp không cần thiết và kiểm tra lại cấu trúc thư mục sau mỗi bước để tránh nhầm bản.",
    ],
    result: [
      "Sản phẩm là cấu trúc thư mục thực hành có tệp gốc, bản sao và thư mục con được sắp xếp theo đúng yêu cầu.",
      "Ảnh minh chứng thể hiện quy trình thao tác, bảng tự đánh giá và kết quả hoàn thành trong bài nộp.",
      "Báo cáo PDF ghi lại tuần tự từng bước, giúp người xem tái hiện lại quy trình thực hành.",
    ],
    reflection: [
      "Bài tập cho thấy kỹ năng cơ bản với tệp và thư mục là nền tảng của mọi sản phẩm số sau này.",
      "Điểm quan trọng không chỉ là biết bấm lệnh, mà là biết giữ dữ liệu có trật tự, dễ tìm và ít rủi ro thất lạc.",
      "Từ thao tác nhỏ như đặt tên tệp, người học bắt đầu xây dựng tác phong làm việc số có kỷ luật.",
    ],
  },
  {
    id: "bai-2",
    number: 2,
    title: "Khai thác dữ liệu và thông tin",
    chapter: "Bài tập 2 - Mục 2.4: Tìm kiếm và đánh giá thông tin học thuật",
    shortDescription:
      "Đánh giá độ tin cậy của nguồn tài liệu về thiên kiến, đạo đức và tính công bằng trong các mô hình ngôn ngữ lớn.",
    skills: ["Tìm kiếm học thuật", "Đánh giá nguồn", "Trích dẫn", "Tư duy phản biện"],
    image: assetMap.bai2.image,
    pdf: assetMap.bai2.pdf,
    sourceFolder: assetMap.bai2.sourceFolder,
    objectives: [
      "Rèn năng lực tìm kiếm tài liệu học thuật bằng tiêu chí rõ ràng thay vì chỉ dựa vào kết quả đầu tiên trên mạng.",
      "Phân biệt bài báo bình duyệt, kỷ yếu hội nghị, báo cáo tổ chức, sách học thuật, preprint và blog.",
      "Đánh giá chủ đề đạo đức AI theo năm tiêu chí: tác giả, cơ quan xuất bản, phương pháp, trích dẫn và tính cập nhật.",
    ],
    process: [
      "Chọn chủ đề thiên kiến và công bằng trong Large Language Models vì đây là vấn đề vừa kỹ thuật vừa xã hội.",
      "Thu thập 13 tài liệu thuộc 6 nhóm nguồn khác nhau, trong đó có 7 bài báo khoa học chất lượng cao.",
      "So sánh các nguồn như PNAS, FAccT, EMNLP, Stanford HAI, Cambridge University Press, arXiv và blog chuyên đề.",
      "Xếp hạng độ tin cậy theo bảng tiêu chí, đồng thời ghi rõ ưu điểm và giới hạn của từng loại nguồn.",
    ],
    result: [
      "Bảng đánh giá nguồn cho thấy hội nghị/tạp chí uy tín và báo cáo tổ chức lớn thường đáng tin cậy hơn blog hoặc preprint chưa bình duyệt.",
      "Báo cáo kết luận rằng tài liệu mới có thể hữu ích, nhưng phải được đối chiếu chéo trước khi dùng làm luận cứ học thuật.",
      "Sản phẩm giúp chuyển hoạt động tìm kiếm thông tin thành một quy trình kiểm chứng có hệ thống.",
    ],
    reflection: [
      "Bài học lớn nhất là không xem mọi kết quả tìm kiếm như nhau; độ tin cậy phụ thuộc vào ngữ cảnh xuất bản và phương pháp nghiên cứu.",
      "Với chủ đề AI thay đổi nhanh, tài liệu cập nhật rất quan trọng nhưng không thay thế được chuẩn mực bình duyệt.",
      "Kỹ năng đánh giá nguồn giúp giảm rủi ro trích dẫn sai và tăng chất lượng lập luận trong các bài học thuật sau này.",
    ],
  },
  {
    id: "bai-3",
    number: 3,
    title: "Tổng quan về trí tuệ nhân tạo",
    chapter: "Bài tập 2 - Mục 3.4: Viết prompt hiệu quả cho các tác vụ học tập",
    shortDescription:
      "Khảo sát cách thiết kế prompt để biến AI từ công cụ trả lời nhanh thành đối tác hỗ trợ học tập có cấu trúc.",
    skills: ["Prompt Engineering", "CO-STAR", "RACE", "Chain-of-Thought", "Bloom"],
    image: assetMap.bai3.image,
    pdf: assetMap.bai3.pdf,
    sourceFolder: assetMap.bai3.sourceFolder,
    objectives: [
      "Ứng dụng các khung kỹ nghệ câu lệnh tiêu chuẩn vào tác vụ học tập thực tế.",
      "So sánh prompt cơ bản với prompt được cấu trúc bằng vai trò, bối cảnh, mục tiêu và định dạng đầu ra.",
      "Đề xuất nguyên tắc sử dụng AI như thought partner, đồng thời giảm nguy cơ hallucination.",
    ],
    process: [
      "Thiết kế ba nhóm tác vụ: tóm tắt bài báo Attention Is All You Need, giải thích vướng víu lượng tử và tạo câu hỏi ôn tập Cách mạng Pháp.",
      "Mỗi tác vụ được thử với ba cấp prompt: zero-shot cơ bản, prompt cải tiến và prompt nâng cao.",
      "Áp dụng CO-STAR, RACE, Chain-of-Thought, Feynman Technique và Bloom's Taxonomy để định hướng đầu ra.",
      "So sánh kết quả theo độ sâu nhận thức, cấu trúc trình bày và mức độ kiểm soát rủi ro thông tin sai.",
    ],
    result: [
      "Prompt nâng cao tạo câu trả lời có cấu trúc hơn, phù hợp đối tượng học tập và có khả năng dẫn dắt suy luận tốt hơn.",
      "Bảng so sánh chỉ ra prompt cơ bản thường dừng ở mức ghi nhớ, còn prompt có khung có thể đạt tới phân tích, đánh giá và sáng tạo.",
      "Bài nộp đúc kết năm nguyên tắc, trong đó nổi bật là rõ ràng hơn thông minh và luôn cung cấp bối cảnh đủ hẹp.",
    ],
    reflection: [
      "AI trả lời tốt hơn khi người học biết đặt nhiệm vụ rõ, nêu tiêu chí đánh giá và yêu cầu định dạng cụ thể.",
      "Kỹ nghệ prompt thực chất là một dạng tư duy phản biện: người học phải biết mình muốn kiểm tra điều gì và vì sao.",
      "Không nên giao toàn bộ quyền suy luận cho AI; prompt tốt cần đi kèm bước đọc lại, phản biện và kiểm chứng.",
    ],
  },
  {
    id: "bai-4",
    number: 4,
    title: "Giao tiếp và hợp tác trong môi trường số",
    chapter: "Bài tập 3 - Mục 4.4: Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    shortDescription:
      "Phân tích vai trò cá nhân trong dự án video nhóm và cách các công cụ số giúp quản lý nhiệm vụ, tài liệu, họp trực tuyến.",
    skills: ["Quản lý dự án", "Tài liệu cộng tác", "Lưu trữ đám mây", "Họp trực tuyến", "Hậu kỳ video"],
    image: assetMap.bai4.image,
    pdf: assetMap.bai4.pdf,
    sourceFolder: assetMap.bai4.sourceFolder,
    objectives: [
      "Chứng minh năng lực phối hợp trong dự án nhóm bằng công cụ hợp tác trực tuyến.",
      "Ghi lại vai trò cá nhân trong dự án video Hành Trình Khám Phá AI & Công Nghệ Số Trong Kỹ Thuật - Công Nghệ.",
      "Phân tích hiệu quả của công cụ đối với quản lý tiến độ, tài liệu, trao đổi nhóm và xử lý vấn đề phát sinh.",
    ],
    process: [
      "Sử dụng Trello/Planner để theo dõi nhiệm vụ, trạng thái, deadline và các nhãn như kịch bản, quay hình, hậu kỳ.",
      "Soạn thảo kịch bản bằng Google Docs/Office Online để giữ lịch sử chỉnh sửa và phản hồi của thành viên.",
      "Tổ chức tài nguyên trên Drive/OneDrive theo nhóm tệp kịch bản, hình ảnh, âm thanh, video thô và bản nộp cuối.",
      "Trao đổi qua Teams, Discord hoặc Google Meet; kết hợp Gemini, Gamma AI, CapCut và Overleaf trong sản xuất nội dung.",
    ],
    result: [
      "Báo cáo ghi nhận vai trò trưởng nhóm: quản lý tiến độ, xây dựng kịch bản tổng thể, làm MC, quay hình và xử lý hậu kỳ.",
      "Dự án có minh chứng về bảng nhiệm vụ, lịch sử chỉnh sửa, cấu trúc thư mục, kênh trao đổi, phiên họp và poster video.",
      "Các sự cố như tạp âm, phân tán tài liệu và đồng bộ tiến độ được xử lý bằng thu âm lại, lọc tiếng ồn, quy ước đặt tên và họp ngắn.",
    ],
    reflection: [
      "Hợp tác trực tuyến hiệu quả không nằm ở số lượng công cụ, mà ở việc thiết kế một quy trình chung dễ theo dõi.",
      "Khi nhiệm vụ, tài liệu và trao đổi được đặt trong một hệ thống thống nhất, vai trò cá nhân minh bạch hơn.",
      "Bài tập giúp rèn năng lực lãnh đạo nhóm, giao tiếp số và kiểm soát phiên bản trong sản phẩm đa phương tiện.",
    ],
  },
  {
    id: "bai-5",
    number: 5,
    title: "Sáng tạo nội dung số",
    chapter: "Bài tập 2 - Mục 5.4: Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    shortDescription:
      "Thiết kế infographic AI trong học tập: trợ lý, không thay thế tư duy, bằng quy trình lặp có prompt, phản biện và tự chỉnh sửa.",
    skills: ["AI tạo sinh", "Infographic", "Thiết kế nội dung", "Phản biện AI", "Đạo đức số"],
    image: assetMap.bai5.image,
    pdf: assetMap.bai5.pdf,
    sourceFolder: assetMap.bai5.sourceFolder,
    objectives: [
      "Tạo một sản phẩm nội dung số hoàn chỉnh có thông điệp học thuật rõ ràng về việc dùng AI trong học tập.",
      "Ghi lại quá trình dùng AI từ prompt ban đầu, phản hồi, phiên bản trung gian đến chỉnh sửa cá nhân.",
      "Phân tích vai trò và giới hạn của các công cụ AI trong sáng tạo nội dung.",
    ],
    process: [
      "Dùng ChatGPT để tạo khung 5 nguyên tắc sử dụng AI có trách nhiệm cho sinh viên năm nhất.",
      "Dùng Google Gemini để phản biện bản nháp theo góc nhìn giảng viên, bổ sung yếu tố đạo đức, bảo mật và đóng góp cá nhân.",
      "Dùng DALL-E để tham khảo hướng hình ảnh sinh viên, laptop và mạng nút AI, nhưng không dùng ảnh như sản phẩm cuối.",
      "Dùng Canva AI để tham khảo bố cục poster dọc, sau đó tự chỉnh lại tiếng Việt, màu sắc, thứ tự thẻ và thông điệp cuối.",
    ],
    result: [
      "Sản phẩm cuối là infographic dọc với năm nguyên tắc: đặt mục tiêu, kiểm chứng nguồn, không sao chép, bảo vệ dữ liệu và minh bạch khi dùng AI.",
      "Báo cáo thể hiện quy trình sáng tạo theo vòng lặp: tạo nháp, phản biện, chỉnh sửa, rà soát và hoàn thiện.",
      "Phần so sánh công cụ nêu rõ điểm mạnh, giới hạn và phần người học tự chỉnh sửa ở mỗi công cụ.",
    ],
    reflection: [
      "AI hữu ích nhất ở giai đoạn mở rộng ý tưởng và phản biện, nhưng sản phẩm tốt vẫn cần người học chọn lọc và viết lại.",
      "Thiết kế nội dung số không chỉ là làm đẹp; thông điệp, đạo đức và khả năng kiểm chứng phải đi cùng nhau.",
      "Bài tập giúp nhìn AI như chất liệu sáng tạo, không phải người thay thế trách nhiệm học thuật của sinh viên.",
    ],
  },
  {
    id: "bai-6",
    number: 6,
    title: "An toàn và liêm chính học thuật trong môi trường số",
    chapter: "Bài tập 4 - Mục 6.4: Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    shortDescription:
      "Nghiên cứu chính sách VinUniversity, đối chiếu RMIT Vietnam và UNESCO để xây dựng nguyên tắc cá nhân khi dùng AI.",
    skills: ["Liêm chính học thuật", "Chính sách AI", "Minh bạch", "Kiểm chứng", "An toàn dữ liệu"],
    image: assetMap.bai6.image,
    pdf: assetMap.bai6.pdf,
    sourceFolder: assetMap.bai6.sourceFolder,
    objectives: [
      "Trả lời câu hỏi dùng AI đến mức nào thì vẫn giữ được liêm chính học thuật và năng lực cá nhân.",
      "Phân tích chính sách VinUniversity về GenAI trong học tập, nghiên cứu và đánh giá.",
      "Đối chiếu với RMIT Vietnam và khung UNESCO để rút ra nguyên tắc sử dụng AI có trách nhiệm.",
    ],
    process: [
      "Đọc nguồn chính thức về chính sách GenAI, liêm chính học thuật và trách nhiệm kiểm chứng của người học.",
      "Dùng AI để hỗ trợ lập khung và phản biện, sau đó kiểm chứng từng nhận định bằng nguồn chính sách.",
      "Phân tích các tiêu chí: mức độ cho phép, minh bạch, trách nhiệm tri thức, năng lực người học, an toàn và sở hữu trí tuệ.",
      "Ghi lại prompt, đầu ra, cách đánh giá và phần chỉnh sửa để chứng minh AI chỉ hỗ trợ chứ không làm thay.",
    ],
    result: [
      "Báo cáo chỉ ra điểm cốt lõi không phải cấm hay cho phép AI tuyệt đối, mà là xác định mức AI được phép tham gia trong từng nhiệm vụ.",
      "Phần nghiên cứu nhấn mạnh nghĩa vụ khai báo công cụ, prompt, đầu ra được sử dụng, mức độ chỉnh sửa và phần AI ảnh hưởng tới sản phẩm.",
      "Sản phẩm cuối gồm bộ nguyên tắc cá nhân và infographic minh họa để chuyển yêu cầu đạo đức thành hành động học tập cụ thể.",
    ],
    reflection: [
      "Sử dụng AI có trách nhiệm đòi hỏi người học giữ quyền kiểm soát lập luận, dữ liệu và ngôn ngữ cuối cùng.",
      "Minh bạch không chỉ là một câu ghi nhận cuối bài; nó là nhật ký quá trình học, kiểm chứng và chỉnh sửa.",
      "Bài tập giúp nhận ra rằng liêm chính học thuật trong thời AI là năng lực giải thích được cách mình tạo ra sản phẩm.",
    ],
  },
];

export const getAssignmentById = (id?: string) =>
  assignments.find((assignment) => assignment.id === id);
