import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-done-item',
  templateUrl: './done-item.component.html',
  styleUrls: ['./done-item.component.css']
})
export class DoneItemComponent implements OnInit {

  @Input()
  doneItem: string;

  constructor() { }

  ngOnInit(): void {
  }

}
