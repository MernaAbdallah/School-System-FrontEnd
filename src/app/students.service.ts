import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private apiUrl = environment.baseApi ;

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  addStudent(studentData: Student): Observable<Student> {
    return this.http.post<Student>(`${this.apiUrl}'InsertStudentCourseTeacher`, studentData);
  }
}
