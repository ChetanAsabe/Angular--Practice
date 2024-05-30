import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

  isClicked = false;

  buttonStyle = {
    'color' : this.isClicked ? 'red' : 'green'
  }

  colorValue = 'red'

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isClicked = !this.isClicked;
    this.buttonStyle = { 'color': this.isClicked ? 'red': 'green' }
  }

}
