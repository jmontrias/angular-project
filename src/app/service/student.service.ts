import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students:any = [
    {
      'name': 'Jona',
      'gender': 'F',
      'course': 'CPE',
      'year': 1,
    }
  ];

  constructor() { }

  getStudents() {
    return this.students;
  }

  addStudents(student:any){
    this.students.push(student);
  }

  deleteStudent(index:number){
    this.students.splice(index, 1);
  }

  updateStudent(index:number, student:any){
    this.students[index] = student;
  }
}
