import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student-app',
  templateUrl: './student-app.component.html',
  styleUrls: ['./student-app.component.css']
})
export class StudentAppComponent implements OnInit {

  message = 'Update Successful!';
  alertMessage = '';
  name = '';
  gender = '';
  course = '';
  year = '';
  bgcolor:string = '';
  isUpdated = false;
  students:any = [];
  
  constructor(private studentService:StudentService) { }
  
  ngOnInit(): void {
    this.fetchStudents();
  }


  displayAlert(message: string){
    alert(message);
  }

  clearStudentInputs() {
    this.name = '';
    this.gender = '';
    this.course = '';
    this.year = '';
  }

  fetchStudents(){
    this.students = this.studentService.getStudents();
  }

  addStudent(name: string, gender: string, course: string, year: string) {
    const student = {
      name: name,
      gender: gender,
      course: course,
      year: year,
      //isUpdated: false
      bgcolor: "white"
    };

    this.studentService.addStudents(student);
    this.clearStudentInputs();
  }

  updateStudent(index: number, name: string, gender: string, course: string, year: string){
    const student = {
      name: name,
      gender: gender,
      course: course,
      year: year,
      bgcolor: 'lightpink'
    };

    this.name = this.students[index].name;
    this.gender = this.students[index].gender;
    this.course = this.students[index].course;
    this.year = this.students[index].year;

    this.studentService.updateStudent(index, student);
    //this.isUpdated = true;
    //this.clearStudentInputs();
  }

  deleteStudent(index: number) {
    this.studentService.deleteStudent(index);
  }
}

