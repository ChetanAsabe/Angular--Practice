import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-parent',
  templateUrl: './course-parent.component.html',
  styleUrls: ['./course-parent.component.css']
})
export class CourseParentComponent implements OnInit {

  recievedObj !: any;

  constructor() { }

  ngOnInit(): void {
  }

  getCourseData(data : any) {
    console.log(data);
    this.recievedObj = data;
  }

}
