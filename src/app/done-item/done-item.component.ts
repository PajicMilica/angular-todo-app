import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-done-item',
  templateUrl: './done-item.component.html',
  styleUrls: ['./done-item.component.css']
})
export class DoneItemComponent implements OnInit {

  @Input()
  doneItem: string;

  @Output()
  deleteDoneEvent: EventEmitter<string> =new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteDone() {
    this.deleteDoneEvent.emit(this.doneItem);
  }
}
