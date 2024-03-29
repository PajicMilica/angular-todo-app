import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todoItem: string;

  @Output()
  markAsDone: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  deleteTodoEvent: EventEmitter<string> =new  EventEmitter<string>();


  isChecked: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isChecked = false;
  }

  checkValue(): void {
    if(this.isChecked){
      this.markAsDone.emit(this.todoItem);
    }
  }

  deleteTodo() : void{
    this.deleteTodoEvent.emit(this.todoItem);
  }
}
