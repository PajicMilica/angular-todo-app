import {Component, Input, OnInit} from '@angular/core';
import {UrgentItem} from "../urgent-add/urgent-add.component";

@Component({
  selector: 'app-urgent-item',
  templateUrl: './urgent-item.component.html',
  styleUrls: ['./urgent-item.component.css']
})
export class UrgentItemComponent implements OnInit {

  @Input()
  urgentItem: UrgentItem;

  constructor() {
  }

  ngOnInit(): void {
  }

}
