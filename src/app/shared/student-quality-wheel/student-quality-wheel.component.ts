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
      letter: 'C', title: 'Continuous Improvement', x: 16, y: 50, light: false,
      evidence: [
        { src: '/evidence/academic-model/continuous-improvement/01-plan.png', caption: 'P - ประชุมคณะกรรมการดำเนินการในการนิเทศ ติดตามผลการดำเนินการตามโครงการ' },
        { src: '/evidence/academic-model/continuous-improvement/02-do.png', caption: 'D - รายงานการดำเนินงานโครงการต่าง ๆ ของโรงเรียนสันทรายวิทยาคม' },
        { src: '/evidence/academic-model/continuous-improvement/03-check.png', caption: 'C - วิเคราะห์ผลการดำเนินกิจกรรมโครงการ' },
        { src: '/evidence/academic-model/continuous-improvement/04-act.png', caption: 'A - นำผลการวิเคราะห์มาหาแนวทางในการพัฒนาในปีการศึกษาต่อไป' }
      ]
    },
    {
      letter: 'A', title: 'Alignment with Standards', x: 25.96, y: 25.96, light: true,
      evidence: [
        { src: '/evidence/academic-model/alignment/01-plan.png', caption: 'P - การประชุมเพื่อแนวทางการวิเคราะห์มาตรฐาน หลักสูตร และเป้าหมายคุณภาพผู้เรียน ระหว่างคณะกรรมการสถานศึกษาขั้นพื้นฐาน ผู้บริหาร และคณะครูโรงเรียนสันทรายวิทยาคม' },
        { src: '/evidence/academic-model/alignment/02-do.png', caption: 'D - จัดทำแผนปฏิบัติการประจำปี' },
        { src: '/evidence/academic-model/alignment/03-check.png', caption: 'C - มีการดำเนินการตามแผนปฏิบัติการ' },
        { src: '/evidence/academic-model/alignment/04-act.png', caption: 'A - ตามลำดับ' }
      ]
    },
    {
      letter: 'C', title: 'Curriculum Development', x: 50, y: 16, light: false,
      evidence: [
        { src: '/evidence/academic-model/curriculum/01-plan.png', caption: 'P - ประชุมวางแผนการพัฒนาหลักสูตรสถานศึกษาอิงฐานสมรรถนะของโรงเรียนในโครงการพื้นที่นวัตกรรม' },
        { src: '/evidence/academic-model/curriculum/02-do.png', caption: 'D - การอบรมพัฒนาหลักสูตรสถานศึกษาอิงฐานสมรรถนะของโรงเรียนในโครงการพื้นที่นวัตกรรม' },
        { src: '/evidence/academic-model/curriculum/03-check.png', caption: 'C - หลักสูตรสถานศึกษา' },
        { src: '/evidence/academic-model/curriculum/04-act.png', caption: 'A - การสรุปผลการใช้หลักสูตรสถานศึกษา' }
      ]
    },
    {
      letter: 'A', title: 'Active Learning', x: 74.04, y: 25.96, light: true,
      evidence: [
        { src: '/evidence/academic-model/active-learning/01-plan.png', caption: 'P - วางแผนการดำเนินการออกแบบกิจกรรม' },
        { src: '/evidence/academic-model/active-learning/02-do.png', caption: 'D - จัดกิจกรรมตามโครงการ' },
        { src: '/evidence/academic-model/active-learning/03-check.png', caption: 'C - การสรุปผลการดำเนินการโครงการ' },
        { src: '/evidence/academic-model/active-learning/04-act.png', caption: 'A - ผลการประเมินความพึงพอใจของนักเรียนเข้าร่วมกิจกรรมรักการอ่าน' }
      ]
    },
    {
      letter: 'D', title: 'Data-driven Assessment', x: 84, y: 50, light: false,
      evidence: [
        { src: '/evidence/academic-model/data-assessment/01-plan.png', caption: 'P - วางแผนการดำเนินการจัดการคัดกรองผู้เรียนเป็นรายบุคคล' },
        { src: '/evidence/academic-model/data-assessment/02-do.png', caption: 'D - การคัดกรองนักเรียนเป็นรายบุคคล' },
        { src: '/evidence/academic-model/data-assessment/03-check.png', caption: 'C - การสรุปผลการวิเคราะห์ผู้เรียน' },
        { src: '/evidence/academic-model/data-assessment/04-act.png', caption: 'A - นำผลการวิเคราะห์ไปจัดกิจกรรมที่ส่งเสริมความสามารถในการอ่าน เขียน สื่อสาร และการคิดคำนวณ' }
      ]
    },
    {
      letter: 'E', title: 'Educational Innovation', x: 74.04, y: 74.04, light: true,
      evidence: [
        { src: '/evidence/academic-model/educational-innovation/01-plan.png', caption: 'P - คณะกรรมการดำเนินงานสำรวจการใช้สื่อเทคโนโลยีเพื่อการเรียนรู้ และแหล่งเรียนรู้ของโรงเรียน' },
        { src: '/evidence/academic-model/educational-innovation/02-do.png', caption: 'D - การประชุมคณะครูและให้ความรู้ด้านการใช้สื่อ เทคโนโลยี เพื่อการเรียนรู้และแหล่งเรียนรู้' },
        { src: '/evidence/academic-model/educational-innovation/03-check.png', caption: 'C - การจัดการเรียนรู้รายวิชาระบบอัตโนมัติ' },
        { src: '/evidence/academic-model/educational-innovation/04-act.png', caption: 'A - แบบสรุปการใช้สื่อ เทคโนโลยี และแหล่งเรียนรู้' }
      ]
    },
    {
      letter: 'M', title: 'Monitoring & Mentoring', x: 50, y: 84, light: false,
      evidence: [
        { src: '/evidence/academic-model/monitoring-mentoring/01-plan.png', caption: 'P - วางแผน วางปฏิทินในการนิเทศกำกับติดตามในกระบวนการจัดการเรียนรู้' },
        { src: '/evidence/academic-model/monitoring-mentoring/02-do.png', caption: 'D - ดำเนินการนิเทศ กำกับ ติดตามครูผู้สอนในชั้นเรียน โดยการนิเทศโดยครูและครู และผู้บริหารนิเทศครู' },
        { src: '/evidence/academic-model/monitoring-mentoring/03-check.png', caption: 'C - ติดตามกระบวนการจัดการเรียนรู้โดยใช้โครงการสอน แผนการจัดการเรียนรู้ และนิเทศในชั้นเรียน รวมทั้งมีการแลกเปลี่ยนเรียนรู้ระหว่างกลุ่มสาระ' },
        { src: '/evidence/academic-model/monitoring-mentoring/04-act.png', caption: 'A - ให้ผลสะท้อนเกี่ยวกับกระบวนการจัดการเรียนการสอน สะท้อนผลสิ่งที่นักเรียนได้รับ และสิ่งที่ควรปรับปรุงในกระบวนการจัดการเรียนรู้' }
      ]
    },
    {
      letter: 'I', title: 'Inclusive Learning', x: 25.96, y: 74.04, light: true,
      evidence: [
        { src: '/evidence/academic-model/inclusive-learning/01-plan.png', caption: 'P - วางแผนการออกแบบกิจกรรมให้กับนักเรียนที่มีความแตกต่างระหว่างบุคคล' },
        { src: '/evidence/academic-model/inclusive-learning/02-do.png', caption: 'D - จัดกิจกรรมให้เหมาะสมกับผู้เรียน' },
        { src: '/evidence/academic-model/inclusive-learning/03-check.png', caption: 'C - มีการถอดบทเรียนในการจัดกิจกรรมเพื่อให้นักเรียนมีทางเลือกในการศึกษา' },
        { src: '/evidence/academic-model/inclusive-learning/04-act.png', caption: 'A - นำผลที่ได้จากการถอดบทเรียนมาพัฒนาการจัดกิจกรรมให้เหมาะสมกับผู้เรียน' }
      ]
    }
  ];
}
