export type ScannedCnsFile = {
  assignmentId?: string;
  kind: "portfolio-requirement" | "prompt-image" | "report-pdf";
  path: string;
};

// Snapshot tu ket qua quet de quy CNS/ tai thoi diem tao website.
// File goc trong CNS/ khong bi sao chep, sua, xoa hay ghi de.
export const scannedCnsFiles: ScannedCnsFile[] = [
  { kind: "portfolio-requirement", path: "CNS/Yêu cầu Portfolio.pdf" },
  { assignmentId: "bai-1", kind: "prompt-image", path: "CNS/Tuan_1/Bai_tap_1.png" },
  { assignmentId: "bai-1", kind: "report-pdf", path: "CNS/Tuan_1/Bai_tap_1.pdf" },
  { assignmentId: "bai-2", kind: "prompt-image", path: "CNS/Tuan_2/Bai_tap_2.png" },
  { assignmentId: "bai-2", kind: "report-pdf", path: "CNS/Tuan_2/Bai_tap_2.pdf" },
  { assignmentId: "bai-3", kind: "prompt-image", path: "CNS/Tuan_3/Bai_tap_2.png" },
  { assignmentId: "bai-3", kind: "report-pdf", path: "CNS/Tuan_3/Bai_tap_2.pdf" },
  { assignmentId: "bai-4", kind: "prompt-image", path: "CNS/Tuan_4/Bai_tap_3.png" },
  { assignmentId: "bai-4", kind: "report-pdf", path: "CNS/Tuan_4/Bai_tap_3.pdf" },
  { assignmentId: "bai-5", kind: "prompt-image", path: "CNS/Tuan_5/Bai_tap_2.png" },
  { assignmentId: "bai-5", kind: "report-pdf", path: "CNS/Tuan_5/Bai_tap_2.pdf" },
  { assignmentId: "bai-6", kind: "prompt-image", path: "CNS/Tuan_6/Bai_tap_4.png" },
  { assignmentId: "bai-6", kind: "report-pdf", path: "CNS/Tuan_6/Bai_tap_4.pdf" },
];
