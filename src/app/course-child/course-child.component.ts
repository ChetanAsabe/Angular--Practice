import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-child',
  templateUrl: './course-child.component.html',
  styleUrls: ['./course-child.component.css']
})
export class CourseChildComponent implements OnInit {

  course = {
    name : 'Angular',
    instructor : 'Dnyanesh sir',
    duration : 4,
    time : '7.30AM - 9.00AM'
  }

  @Output() courseData  = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.courseData.emit(this.course);
  }

}
