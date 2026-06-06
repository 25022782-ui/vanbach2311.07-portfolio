const bai1Image = new URL("../../CNS/Tuan_1/Bai_tap_1.png", import.meta.url).href;
const bai1Pdf = new URL("../../CNS/Tuan_1/Bai_tap_1.pdf", import.meta.url).href;

const bai2Image = new URL("../../CNS/Tuan_2/Bai_tap_2.png", import.meta.url).href;
const bai2Pdf = new URL("../../CNS/Tuan_2/Bai_tap_2.pdf", import.meta.url).href;

const bai3Image = new URL("../../CNS/Tuan_3/Bai_tap_2.png", import.meta.url).href;
const bai3Pdf = new URL("../../CNS/Tuan_3/Bai_tap_2.pdf", import.meta.url).href;

const bai4Image = new URL("../../CNS/Tuan_4/Bai_tap_3.png", import.meta.url).href;
const bai4Pdf = new URL("../../CNS/Tuan_4/Bai_tap_3.pdf", import.meta.url).href;

const bai5Image = new URL("../../CNS/Tuan_5/Bai_tap_2.png", import.meta.url).href;
const bai5Pdf = new URL("../../CNS/Tuan_5/Bai_tap_2.pdf", import.meta.url).href;

const bai6Image = new URL("../../CNS/Tuan_6/Bai_tap_4.png", import.meta.url).href;
const bai6Pdf = new URL("../../CNS/Tuan_6/Bai_tap_4.pdf", import.meta.url).href;

export const assetMap = {
  bai1: {
    image: bai1Image,
    pdf: bai1Pdf,
    sourceFolder: "CNS/Tuan_1",
  },
  bai2: {
    image: bai2Image,
    pdf: bai2Pdf,
    sourceFolder: "CNS/Tuan_2",
  },
  bai3: {
    image: bai3Image,
    pdf: bai3Pdf,
    sourceFolder: "CNS/Tuan_3",
  },
  bai4: {
    image: bai4Image,
    pdf: bai4Pdf,
    sourceFolder: "CNS/Tuan_4",
  },
  bai5: {
    image: bai5Image,
    pdf: bai5Pdf,
    sourceFolder: "CNS/Tuan_5",
  },
  bai6: {
    image: bai6Image,
    pdf: bai6Pdf,
    sourceFolder: "CNS/Tuan_6",
  },
} as const;
