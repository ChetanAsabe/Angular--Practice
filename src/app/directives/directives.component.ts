import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  isChecked : boolean =  false;

  Courses : any[] = [
    {name : "Angular", duration: "5 Months"},
    {name : "React", duration: "6 Months"},
    {name : "Java", duration: "8 Months"}
  ]


  months : any[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  monthNum : number = new Date().getMonth();
  month : string = this.months[this.monthNum];

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event : any) {
    this.isChecked = event.target.checked;
  }

}
