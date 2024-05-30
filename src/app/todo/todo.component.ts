import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  titleInput : string = '';
  descriptionInput : string = '';

  todo : {title : string, description : string}[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {
    this.todo.push({title : this.titleInput, description:this.descriptionInput});

    console.log(this.todo);
  }

}
