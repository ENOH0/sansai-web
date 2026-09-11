import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartWheelComponent } from '../smart-wheel/smart-wheel.component';
import { WheelItem } from '../smart-wheel/smart-wheel.markup';

/** วงล้อคุณภาพผู้เรียน: ใช้ตัวชี้วัด 1.1 จากข้อมูลด้านที่ 1 โดยตรง */
@Component({
  selector: 'app-student-quality-wheel',
  standalone: true,
  imports: [CommonModule, SmartWheelComponent],
  templateUrl: './student-quality-wheel.component.html',
  styleUrl: './student-quality-wheel.component.css'
})
export class StudentQualityWheelComponent {
  readonly items: WheelItem[] = [
    { letter: 'C', title: 'Continuous Improvement', detail: 'นำผลการประเมิน ข้อมูลสะท้อนกลับ และข้อเสนอแนะมาปรับปรุงหลักสูตร การสอน โครงการ และระบบสนับสนุนผู้เรียนอย่างต่อเนื่อง', x: 16, y: 50, light: false },
    { letter: 'A', title: 'Alignment with Standards', detail: 'วิเคราะห์และเชื่อมโยงนโยบาย มาตรฐาน หลักสูตร และเป้าหมายคุณภาพผู้เรียน เพื่อกำหนดผลที่ต้องการให้ชัดเจน', x: 25.96, y: 25.96, light: true },
    { letter: 'C', title: 'Curriculum Development', detail: 'พัฒนาและปรับปรุงหลักสูตรสถานศึกษา รายวิชาเพิ่มเติม กิจกรรมพัฒนาผู้เรียน และหลักสูตรท้องถิ่นให้สอดคล้องกับบริบทและศักยภาพของผู้เรียน', x: 50, y: 16, light: false },
    { letter: 'A', title: 'Active Learning', detail: 'ให้ครูออกแบบกิจกรรมที่ผู้เรียนได้คิด ตั้งคำถาม สืบค้น ทดลอง ลงมือปฏิบัติ แก้ปัญหา ทำงานร่วมกัน และสะท้อนผลการเรียนรู้', x: 74.04, y: 25.96, light: true },
    { letter: 'D', title: 'Data-driven Assessment', detail: 'ใช้ข้อมูลและผลการประเมินก่อนเรียน ระหว่างเรียน และหลังเรียน เพื่อปรับการสอน ซ่อมเสริม ส่งเสริมศักยภาพ และช่วยเหลือผู้เรียนได้ตรงตามความต้องการ', x: 84, y: 50, light: false },
    { letter: 'E', title: 'Educational Innovation', detail: 'ส่งเสริมการพัฒนานวัตกรรม สื่อ เทคโนโลยี และแพลตฟอร์มดิจิทัล เพื่อเพิ่มประสิทธิภาพและแรงจูงใจในการเรียนรู้', x: 74.04, y: 74.04, light: true },
    { letter: 'M', title: 'Monitoring & Mentoring', detail: 'ดำเนินการผ่านการนิเทศ กำกับ ติดตาม การแลกเปลี่ยนเรียนรู้ทางวิชาชีพ และการให้คำปรึกษาแก่ครูและผู้เรียน', x: 50, y: 84, light: false },
    { letter: 'I', title: 'Inclusive Learning', detail: 'จัดการเรียนรู้ที่คำนึงถึงความแตกต่างระหว่างบุคคล ปรับกิจกรรม สื่อ เวลา ภาระงาน และวิธีประเมินให้เหมาะสม เพื่อให้ผู้เรียนทุกคนเข้าถึงโอกาสการเรียนรู้อย่างเท่าเทียม', x: 25.96, y: 74.04, light: true }
  ];
}
