import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Student } from '../student.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  imports:[FormsModule],
  standalone:true
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];
  newStudent: Student = {
    schoolName: '',
    // studentName: '',
    // studentEmail: '',
  };

  constructor(private studentsService: StudentsService) {}

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents() {
    this.studentsService.getStudents().subscribe((data) => {
      this.students = data;
    });
  }

  onSubmit() {
    this.studentsService.addStudent(this.newStudent).subscribe(() => {
      this.loadStudents(); 
      this.newStudent = {
        schoolName: '',
        //studentName: '',
       // studentEmail: '',
      };
    });
  }
}
