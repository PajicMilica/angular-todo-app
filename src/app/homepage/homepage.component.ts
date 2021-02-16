import {Component, OnInit} from '@angular/core';
import {UrgentItem} from "../urgent-add/urgent-add.component";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  static URGENT_KEY = 'urgent-todo-list';
  static TODO_STORAGE_KEY = 'todo-list';
  static DONE_STORAGE_KEY = 'done-list';

  todoList: string[];
  urgentList: UrgentItem[];
  doneList: string[];

  constructor() { }


  ngOnInit(): void {
    this.todoList = this.getTodoList();
    this.urgentList = this.getUrgentList();
    this.doneList = this.getDoneList();
  }

  getTodoList(): string[] {
    let todoArrayString= localStorage.getItem(HomepageComponent.TODO_STORAGE_KEY);
    return JSON.parse(todoArrayString);
  }

  getUrgentList(): UrgentItem[] {
    let urgentArrayString=localStorage.getItem(HomepageComponent.URGENT_KEY);
    return JSON.parse(urgentArrayString);
  }

  getDoneList(): string[]{
    let doneArrayString =localStorage.getItem(HomepageComponent.DONE_STORAGE_KEY);
    return JSON.parse(doneArrayString);
  }


}
