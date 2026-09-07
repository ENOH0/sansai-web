// ============================================================
// ชนิดข้อมูล (interface) ที่ใช้ร่วมกันทั้งโปรเจกต์
// ============================================================

/** การ์ดตัวเลขสถิติ */
export interface Kpi {
  value: number;
  unit?: string;
  label: string;
  note?: string;
  decimals?: number;
}

/** ขั้นตอนหนึ่งขั้นในวงจรการดำเนินงาน 4 ขั้น */
export interface CycleStep {
  step: string;
  title: string;
  text: string;
  bullets?: string[];
}

/** แถวหนึ่งแถวในตารางข้อมูล */
export interface TableRow {
  cells: (string | number)[];
  total?: boolean;
}

/** ชุดข้อมูลหนึ่งเส้นในกราฟเส้น */
export interface LineSeries {
  name: string;
  values: number[];
  color?: string;
  /** true = วาดเป็นเส้นประ (ใช้กับค่าเฉลี่ยระดับประเทศหรือค่าเป้าหมาย) */
  dashed?: boolean;
}

/** ชุดข้อมูลหนึ่งชุดในกราฟแท่ง */
export interface BarSeries {
  name: string;
  values: number[];
  color?: string;
}

/** แถวหนึ่งแถวในแถบเปรียบเทียบแนวนอน */
export interface MeterRow {
  name: string;
  value: number;
  display?: string;
  color?: string;
}

/** จานสีมาตรฐานสำหรับกราฟทุกชนิด */
export const CHART_PALETTE = [
  '#1e4d9e', // น้ำเงินหลัก
  '#d4a537', // ทอง
  '#4f88d4', // น้ำเงินอ่อน
  '#0f7a4d', // เขียว
  '#8a4fbd', // ม่วง
  '#b4433a'  // แดง (ใช้กับเส้นค่าเป้าหมาย)
];
