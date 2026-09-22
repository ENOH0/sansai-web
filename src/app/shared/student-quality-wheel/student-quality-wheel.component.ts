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
    {
      letter: 'C', title: 'Continuous Improvement', detail: 'การนำผลการประเมิน ข้อมูลสะท้อนกลับ และข้อเสนอแนะมาปรับปรุงหลักสูตร การสอน โครงการ และระบบสนับสนุนผู้เรียนอย่างต่อเนื่อง', thaiTitle: 'การพัฒนาอย่างต่อเนื่อง', x: 16, y: 50, light: false,
      evidence: [
        { src: '/evidence/academic-model/continuous-improvement/01-plan.jpg', caption: 'P - วิเคราะห์ผลการดำเนินงานที่ผ่านมา ระบุจุดเด่น จุดที่ควรพัฒนา และกำหนดเป้าหมายการพัฒนาในรอบต่อไป' },
        { src: '/evidence/academic-model/continuous-improvement/02-do.jpg', caption: 'D - ดำเนินการตามแผนพัฒนา โดยปรับปรุงหลักสูตร การจัดการเรียนรู้ โครงการ นวัตกรรม และระบบสนับสนุนผู้เรียน' },
        { src: '/evidence/academic-model/continuous-improvement/03-check.jpg', caption: 'C - ติดตามและประเมินผลการปรับปรุง โดยใช้ข้อมูลเชิงปริมาณและเชิงคุณภาพเปรียบเทียบกับค่าเป้าหมาย' },
        { src: '/evidence/academic-model/continuous-improvement/04-act.jpg', caption: 'A - สรุปผล ถอดบทเรียน จัดทำแนวปฏิบัติที่ดี ขยายผลสิ่งที่ประสบความสำเร็จ และนำประเด็นที่ยังต้องพัฒนาเข้าสู่วงจร PDCA รอบใหม่' }
      ]
    },
    {
      letter: 'A', title: 'Alignment with Standards', detail: 'การวิเคราะห์และเชื่อมโยงนโยบาย มาตรฐาน หลักสูตร และเป้าหมายคุณภาพผู้เรียน เพื่อกำหนดผลที่ต้องการให้ชัดเจน ทั้งด้านผลสัมฤทธิ์ สมรรถนะ คุณลักษณะ และทักษะแห่งอนาคต', thaiTitle: 'การเชื่อมโยงเป้าหมายสู่มาตรฐาน', x: 25.96, y: 25.96, light: true,
      evidence: [
        { src: '/evidence/academic-model/alignment/01-plan-v2.jpg', caption: 'P - วิเคราะห์นโยบาย มาตรฐานการศึกษา หลักสูตรแกนกลาง บริบทสถานศึกษา และข้อมูลคุณภาพผู้เรียน เพื่อกำหนดเป้าหมาย ตัวชี้วัด และผลลัพธ์ที่ต้องการ' },
        { src: '/evidence/academic-model/alignment/02-do-n1.jpg', caption: 'D - ถ่ายทอดเป้าหมายและมาตรฐานสู่แผนพัฒนาคุณภาพ หลักสูตรสถานศึกษา แผนงาน โครงการ และแผนการจัดการเรียนรู้' },
        { src: '/evidence/academic-model/alignment/03-check-revised.jpg', caption: 'C - ตรวจสอบความสอดคล้องระหว่างนโยบาย มาตรฐาน เป้าหมายของสถานศึกษา และผลลัพธ์ที่เกิดขึ้นกับผู้เรียน' },
        { src: '/evidence/academic-model/alignment/04-act-v2.jpg', caption: 'A - ปรับปรุงเป้าหมาย ตัวชี้วัด และแนวทางดำเนินงานให้เหมาะสมกับบริบทและการเปลี่ยนแปลงทางการศึกษา' }
      ]
    },
    {
      letter: 'C', title: 'Curriculum Development', detail: 'พัฒนาและปรับปรุงหลักสูตรสถานศึกษา รายวิชาเพิ่มเติม กิจกรรมพัฒนาผู้เรียน และหลักสูตรท้องถิ่นให้สอดคล้องกับบริบท ความสนใจ ความถนัด และศักยภาพของผู้เรียน รวมทั้งเชื่อมโยงกับชีวิตจริง การศึกษาต่อ และการประกอบอาชีพ', thaiTitle: 'การพัฒนาหลักสูตรให้ตอบโจทย์ผู้เรียน', x: 50, y: 16, light: false,
      evidence: [
        { src: '/evidence/academic-model/curriculum/01-plan-n1.jpg', caption: 'P - วิเคราะห์หลักสูตรเดิม ความต้องการของผู้เรียน ชุมชน สังคม และตลาดแรงงาน เพื่อกำหนดแนวทางพัฒนาหลักสูตร' },
        { src: '/evidence/academic-model/curriculum/02-do-n1.jpg', caption: 'D - พัฒนาและนำหลักสูตรสถานศึกษา รายวิชาเพิ่มเติม กิจกรรมพัฒนาผู้เรียน และหลักสูตรท้องถิ่นไปใช้จริง' },
        { src: '/evidence/academic-model/curriculum/03-check-n1.jpg', caption: 'C - ประเมินคุณภาพและประสิทธิผลของหลักสูตรจากผลสัมฤทธิ์ สมรรถนะ ความพึงพอใจ และข้อมูลสะท้อนกลับของผู้เกี่ยวข้อง' },
        { src: '/evidence/academic-model/curriculum/04-act-n1.jpg', caption: 'A - ปรับปรุงโครงสร้างหลักสูตร เนื้อหา กิจกรรม เวลาเรียน และแนวทางประเมินผลให้ทันสมัยและตอบสนองผู้เรียนมากขึ้น' }
      ]
    },
    {
      letter: 'A', title: 'Active Learning', detail: 'ครูออกแบบกิจกรรมที่ผู้เรียนได้คิด ตั้งคำถาม สืบค้น ทดลอง ลงมือปฏิบัติ แก้ปัญหา ทำงานร่วมกัน และสะท้อนผลการเรียนรู้ ครูทำหน้าที่เป็นผู้อำนวยความสะดวกและสนับสนุนให้ผู้เรียนสร้างความรู้ด้วยตนเอง', thaiTitle: 'การเรียนรู้ผ่านการลงมือปฏิบัติ', x: 74.04, y: 25.96, light: true,
      evidence: [
        { src: '/evidence/academic-model/active-learning/01-plan-n1.jpg', caption: 'P - วิเคราะห์ผู้เรียนและกำหนดผลลัพธ์การเรียนรู้ พร้อมออกแบบกิจกรรมเชิงรุกที่เหมาะสมกับเนื้อหาและความแตกต่างระหว่างบุคคล' },
        { src: '/evidence/academic-model/active-learning/02-do-n1.jpg', caption: 'D - จัดกิจกรรมให้ผู้เรียนได้คิด ตั้งคำถาม สืบค้น ทดลอง ลงมือปฏิบัติ แก้ปัญหา ทำงานร่วมกัน และสะท้อนการเรียนรู้' },
        { src: '/evidence/academic-model/active-learning/03-check-n1.jpg', caption: 'C - ประเมินการมีส่วนร่วม กระบวนการคิด ผลงาน สมรรถนะ และพฤติกรรมการเรียนรู้ของผู้เรียนด้วยวิธีการที่หลากหลาย' },
        { src: '/evidence/academic-model/active-learning/04-act-n1.jpg', caption: 'A - นำผลการประเมินมาปรับกิจกรรม สื่อ คำถาม บทบาทของครู และวิธีสนับสนุนผู้เรียนให้เกิดการเรียนรู้ที่มีประสิทธิภาพยิ่งขึ้น' }
      ]
    },
    {
      letter: 'D', title: 'Data-driven Assessment', detail: 'การใช้ข้อมูลและผลการประเมินก่อนเรียน ระหว่างเรียน และหลังเรียน เพื่อปรับการสอน ซ่อมเสริม ส่งเสริมศักยภาพ และช่วยเหลือผู้เรียนได้ตรงตามความต้องการ', thaiTitle: 'การใช้ข้อมูลพัฒนาผู้เรียน', x: 84, y: 50, light: false,
      evidence: [
        { src: '/evidence/academic-model/data-assessment/01-plan-n1.jpg', caption: 'P - กำหนดข้อมูลที่จำเป็น เครื่องมือประเมิน เกณฑ์ ตัวชี้วัด และช่วงเวลาในการเก็บข้อมูลให้สอดคล้องกับเป้าหมายการเรียนรู้' },
        { src: '/evidence/academic-model/data-assessment/02-do-n1.jpg', caption: 'D - เก็บรวบรวมข้อมูลก่อนเรียน ระหว่างเรียน และหลังเรียน ข้อมูลผลสัมฤทธิ์ พฤติกรรม สมรรถนะ และคุณลักษณะของผู้เรียน' },
        { src: '/evidence/academic-model/data-assessment/03-check-n1.jpg', caption: 'C - วิเคราะห์ เปรียบเทียบ และแปลผลข้อมูล เพื่อค้นหาจุดเด่น จุดที่ควรพัฒนา และความต้องการจำเป็นของผู้เรียนแต่ละคน' },
        { src: '/evidence/academic-model/data-assessment/04-act-n1.jpg', caption: 'A - ใช้ผลการวิเคราะห์ปรับการสอน จัดกิจกรรมซ่อมเสริม ส่งเสริมศักยภาพ และวางแผนช่วยเหลือผู้เรียนเป็นรายบุคคล' }
      ]
    },
    {
      letter: 'E', title: 'Educational Innovation', detail: 'ส่งเสริมการพัฒนานวัตกรรม สื่อ เทคโนโลยี และแพลตฟอร์มดิจิทัล เพื่อเพิ่มประสิทธิภาพและแรงจูงใจในการเรียนรู้', thaiTitle: 'การสร้างนวัตกรรมการเรียนรู้', x: 74.04, y: 74.04, light: true,
      evidence: [
        { src: '/evidence/academic-model/educational-innovation/01-plan-n1.jpg', caption: 'P - วิเคราะห์ปัญหาและความต้องการในการจัดการเรียนรู้ เพื่อออกแบบหรือเลือกนวัตกรรม สื่อ เทคโนโลยี และแพลตฟอร์มที่เหมาะสม' },
        { src: '/evidence/academic-model/educational-innovation/02-do-n1.jpg', caption: 'D - พัฒนา ทดลอง และนำนวัตกรรมไปใช้ในการจัดการเรียนรู้ เพื่อเพิ่มประสิทธิภาพและแรงจูงใจของผู้เรียน' },
        { src: '/evidence/academic-model/educational-innovation/03-check-n1.jpg', caption: 'C - ประเมินคุณภาพ ความเหมาะสม ความสะดวกในการใช้ และผลที่เกิดขึ้นกับการเรียนรู้ของผู้เรียน' },
        { src: '/evidence/academic-model/educational-innovation/04-act.jpg', caption: 'A - ปรับปรุงนวัตกรรมจากผลการประเมินและข้อเสนอแนะ ก่อนขยายผล แลกเปลี่ยนเรียนรู้ และเผยแพร่แนวปฏิบัติที่มีประสิทธิผล' }
      ]
    },
    {
      letter: 'M', title: 'Monitoring & Mentoring', detail: 'การนิเทศ กำกับ ติดตาม การแลกเปลี่ยนเรียนรู้ทางวิชาชีพ และการให้คำปรึกษาแก่ครูและผู้เรียน', thaiTitle: 'การติดตาม ดูแล และให้คำปรึกษา', x: 50, y: 84, light: false,
      evidence: [
        { src: '/evidence/academic-model/monitoring-mentoring/01-plan.jpg', caption: 'P - กำหนดเป้าหมาย ประเด็น เครื่องมือ ปฏิทิน และผู้รับผิดชอบในการนิเทศ กำกับ ติดตาม และให้คำปรึกษา' },
        { src: '/evidence/academic-model/monitoring-mentoring/02-do.jpg', caption: 'D - ดำเนินการนิเทศชั้นเรียน สังเกตการสอน เยี่ยมชั้นเรียน จัดชุมชนการเรียนรู้ทางวิชาชีพ และให้คำปรึกษาแก่ครูและผู้เรียน' },
        { src: '/evidence/academic-model/monitoring-mentoring/03-check.jpg', caption: 'C - ตรวจสอบความก้าวหน้า ปัญหา อุปสรรค และผลการดำเนินงาน โดยเปรียบเทียบกับเป้าหมายและตัวชี้วัดที่กำหนดไว้' },
        { src: '/evidence/academic-model/monitoring-mentoring/04-act.jpg', caption: 'A - นำผลการติดตามมาปรับแผนการ สะท้อนผลเกี่ยวกับกระบวนการจัดการเรียนการสอน สะท้อนผลสิ่งที่นักเรียนได้รับ สิ่งที่ควรปรับปรุงในกระบวนการจัดการเรียนรู้' }
      ]
    },
    {
      letter: 'I', title: 'Inclusive Learning', detail: 'จัดการเรียนรู้ที่คำนึงถึงความแตกต่างระหว่างบุคคล ปรับกิจกรรม สื่อ เวลา ภาระงาน และวิธีประเมินให้เหมาะสม เพื่อให้ผู้เรียนทุกคนเข้าถึงโอกาสการเรียนรู้อย่างเท่าเทียม', thaiTitle: 'การเปิดโอกาสให้ทุกคนเรียนรู้', x: 25.96, y: 74.04, light: true,
      evidence: [
        { src: '/evidence/academic-model/inclusive-learning/01-plan.jpg', caption: 'P - วิเคราะห์ความแตกต่างระหว่างบุคคล ความสามารถ ความถนัด ความสนใจ พื้นฐาน และความต้องการจำเป็นของผู้เรียน' },
        { src: '/evidence/academic-model/inclusive-learning/02-do.jpg', caption: 'D - จัดกิจกรรม สื่อ เวลา ภาระงาน สภาพแวดล้อม และวิธีประเมินที่ยืดหยุ่น เพื่อให้ผู้เรียนทุกกลุ่มเข้าถึงการเรียนรู้' },
        { src: '/evidence/academic-model/inclusive-learning/03-check.jpg', caption: 'C - มีการถอดบทเรียนในการจัดกิจกรรมเพื่อให้นักเรียนมีทางเลือกในการศึกษา ตรวจสอบการเข้าถึง การมีส่วนร่วม ความก้าวหน้า และผลการเรียนรู้ของผู้เรียนแต่ละกลุ่ม' },
        { src: '/evidence/academic-model/inclusive-learning/04-act.jpg', caption: 'A - นำผลที่ได้จากการถอดบทเรียนมาพัฒนาการจัดกิจกรรมให้เหมาะสม ปรับวิธีสอน สื่อ สิ่งอำนวยความสะดวก และระบบช่วยเหลือรายบุคคล' }
      ]
    }
  ];
}
