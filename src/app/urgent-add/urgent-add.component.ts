import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-urgent-add',
  templateUrl: './urgent-add.component.html',
  styleUrls: ['./urgent-add.component.css']
})

export class UrgentAddComponent implements OnInit {

  static TODO_URGENT_KEY = 'urgent-todo-list';
  urgentInput: string;
  finalDate: string;
  showMessageError: boolean;
  minDate: string;

  constructor() {
  }

  ngOnInit(): void {
    this.showMessageError = false;
    this.minDate = this.getMinDate();
  }

  saveTodoUrgentItem(event) {
    if (!this.urgentInput || this.urgentInput === '' || !this.finalDate || this.finalDate === '') {
      this.showMessageError = true;
      event.preventDefault();
      return;
    }

    //ubaci u skladiste
    var todoUrgentListArrayString = localStorage.getItem(UrgentAddComponent.TODO_URGENT_KEY);

    if(todoUrgentListArrayString) {
      let urgent: UrgentItem = {
        item: this.urgentInput,
        date: this.finalDate
      }
      let todoUrgentListArray = JSON.parse(todoUrgentListArrayString);
      for(let itemU of todoUrgentListArray){
        if(itemU.item===urgent.item && itemU.date===urgent.date){
          alert("This item already exists, please enter something else");
          return;
        }
      }
      todoUrgentListArray.push(urgent);
      console.log(todoUrgentListArray);
      localStorage.setItem(UrgentAddComponent.TODO_URGENT_KEY, JSON.stringify(todoUrgentListArray));
    }else{
      let urgent: UrgentItem = {
        item: this.urgentInput,
        date: this.finalDate
      }
      const urgentToDo= [urgent];
      console.log(urgentToDo);
      localStorage.setItem(UrgentAddComponent.TODO_URGENT_KEY,JSON.stringify(urgentToDo));
    }
    alert("Todo urgent item sucessfully added: " + this.urgentInput + " until: " + this.finalDate);
    this.urgentInput = "";
    this.finalDate = "";
  }

  getMinDate(): string {
    const date = new Date();
    const dateString = date.toISOString().slice(0, 10);
    console.log(dateString);
    return dateString;
  }
}

export interface UrgentItem {
  item: string;
  date: string;
}
