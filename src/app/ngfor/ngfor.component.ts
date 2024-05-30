import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css'],
})
export class NgforComponent implements OnInit {
  country = [
    { name: 'India', states:['Maharashtra', 'Kerala', 'Delhi', 'Punjab', 'Rajasthan']},
    { name: 'USA', states : ['California', 'Florida', 'New York', 'Texas', 'Washington']},
  ];

  states : string[] = []

  constructor() {}

  ngOnInit(): void {}

  onCountryChange(value : string) {
    const country = this.country.find(c => c.name == value)
    this.states = country ? country.states : []
  }
}
