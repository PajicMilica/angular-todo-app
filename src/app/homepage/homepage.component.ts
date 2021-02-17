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

  constructor() {
  }


  ngOnInit(): void {
    this.todoList = this.getTodoList();
    this.urgentList = this.getUrgentList();
    this.doneList = this.getDoneList();
  }

  getTodoList(): string[] {
    let todoArrayString = localStorage.getItem(HomepageComponent.TODO_STORAGE_KEY);
    if (todoArrayString) {
      return JSON.parse(todoArrayString);
    } else {
      return [];
    }
  }

  getUrgentList(): UrgentItem[] {
    let urgentArrayString = localStorage.getItem(HomepageComponent.URGENT_KEY);
    if (urgentArrayString) {
      return JSON.parse(urgentArrayString);
    } else {
      return [];
    }
  }

  getDoneList(): string[] {
    let doneArrayString = localStorage.getItem(HomepageComponent.DONE_STORAGE_KEY);
    if (doneArrayString) {
      return JSON.parse(doneArrayString);
    } else {
      return [];
    }
  }


  markTodoAsDone(todoItem: string) {
    // dodavanje item-a u done skladiste
    console.log(todoItem);
    let doneArrayString = localStorage.getItem(HomepageComponent.DONE_STORAGE_KEY);
    if (doneArrayString) {
      let doneArray = JSON.parse(doneArrayString);
      doneArray.push(todoItem);
      localStorage.setItem(HomepageComponent.DONE_STORAGE_KEY, JSON.stringify(doneArray));
      this.doneList = doneArray;
    } else {
      const doneTodo = [todoItem];
      localStorage.setItem(HomepageComponent.DONE_STORAGE_KEY, JSON.stringify(doneTodo));
      this.doneList = doneTodo;
    }
    //izbacivanje
    let newArray = [];
    for (let item of this.todoList) {
      if (item === todoItem) {
        continue;
      }
      newArray.push(item);
    }
    localStorage.setItem(HomepageComponent.TODO_STORAGE_KEY, JSON.stringify(newArray));
    this.todoList = newArray;
  }


  markTodoUrgentAsDone(todoUrgent: string) {
    let doneArrayString = localStorage.getItem(HomepageComponent.DONE_STORAGE_KEY);
    if (doneArrayString) {
      let doneArray = JSON.parse(doneArrayString);
      doneArray.push(todoUrgent);
      localStorage.setItem(HomepageComponent.DONE_STORAGE_KEY, JSON.stringify(doneArray));
      this.doneList = doneArray;
    }else {
      const doneTodo = [todoUrgent];
      localStorage.setItem(HomepageComponent.DONE_STORAGE_KEY, JSON.stringify(doneTodo));
      this.doneList = doneTodo;
    }
    let newUrgentArray=[];
    for(let item of this.urgentList){
      if(item.item === todoUrgent){
        continue;
      }
      newUrgentArray.push(item);
      localStorage.setItem(HomepageComponent.URGENT_KEY,JSON.stringify(newUrgentArray));
    }
    this.urgentList=newUrgentArray;
  }

  deleteTodo(deleteTodoItem: string) {
    let newArray=[];
    for(let item of this.todoList){
      if(item === deleteTodoItem){
        continue;
      }
      newArray.push(item);
    }
    localStorage.setItem(HomepageComponent.TODO_STORAGE_KEY,JSON.stringify(newArray));
    this.todoList=newArray;
  }

  deleteUrgent(urgentItem: UrgentItem) {
    let newUrgentArray=[];
    for (let item of this.urgentList){
      if(item === urgentItem){
        continue;
      }
      newUrgentArray.push(item);
    }
    localStorage.setItem(HomepageComponent.URGENT_KEY,JSON.stringify(newUrgentArray));
    this.urgentList=newUrgentArray;
  }

  deleteDone(doneItem: string) {
    let newDoneArray=[];
    let brojac=0;
    for(let item of this.doneList){
      if(item=== doneItem || brojac ===0){
        brojac=brojac+1;
        continue;
      }
      newDoneArray.push(item);
    }
    localStorage.setItem(HomepageComponent.DONE_STORAGE_KEY,JSON.stringify(newDoneArray));
    this.doneList=newDoneArray;
  }
}
