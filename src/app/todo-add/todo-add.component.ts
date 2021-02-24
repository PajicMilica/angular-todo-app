import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  static TODO_STORAGE_KEY = 'todo-list';
  todoInput: string;
  showErrorMessage: boolean;

  constructor() { }

  ngOnInit(): void {
    this.showErrorMessage = false;
  }

  saveTodoItem(event): void {
    // ako nije uneta vrednost otkazujemo submit forme
    if(!this.todoInput || this.todoInput === '') {
      this.showErrorMessage = true;
      event.preventDefault();
      return;
    }
    // dodajemo u skladiste
    var todoListArrayString = localStorage.getItem(TodoAddComponent.TODO_STORAGE_KEY);
    if (todoListArrayString){
      let todoListArray = JSON.parse(todoListArrayString);
      for (let item of todoListArray){
        if(item === this.todoInput){
          alert("This item already exists, please enter something else");
          return;
        }
      }
      todoListArray.push(this.todoInput);
      console.log(todoListArray);
      localStorage.setItem(TodoAddComponent.TODO_STORAGE_KEY, JSON.stringify(todoListArray));
    } else {
      const newTodoArray = [this.todoInput];
      console.log(newTodoArray);
      localStorage.setItem(TodoAddComponent.TODO_STORAGE_KEY, JSON.stringify(newTodoArray));
    }
    alert("Todo item sucessfully added: " + this.todoInput);

    this.todoInput = "";
  }
}
