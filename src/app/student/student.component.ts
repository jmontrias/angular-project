import { Component, OnInit, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, OnChanges, OnDestroy {
  @Input() student: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.student)
  }

  ngOnChanges(): void {
    console.log('Student Updated');
    console.log(this.student);
  }

  ngOnDestroy(): void {
    console.log('Student Deleted');
    console.log(this.student);
  }

}
