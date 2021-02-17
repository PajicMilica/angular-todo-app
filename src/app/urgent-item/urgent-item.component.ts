import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UrgentItem} from "../urgent-add/urgent-add.component";

@Component({
  selector: 'app-urgent-item',
  templateUrl: './urgent-item.component.html',
  styleUrls: ['./urgent-item.component.css']
})
export class UrgentItemComponent implements OnInit {

  @Input()
  urgentItem: UrgentItem;

  @Output()
  markAsDoneUrgent: EventEmitter<string>=new EventEmitter<string>();

  @Output()
  deleteUrgentEvent : EventEmitter<UrgentItem>=new EventEmitter<UrgentItem>();
  isChecked: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.isChecked=false;
  }

  checkValue() : void {
    if(this.isChecked){
      this.markAsDoneUrgent.emit(this.urgentItem.item);
    }
  }

  deleteUrgent() : void {
    this.deleteUrgentEvent.emit(this.urgentItem);
  }
}
