import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { DoneItemComponent } from './done-item/done-item.component';
import { UrgentItemComponent } from './urgent-item/urgent-item.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { UrgentAddComponent } from './urgent-add/urgent-add.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TodoItemComponent,
    DoneItemComponent,
    UrgentItemComponent,
    TodoAddComponent,
    UrgentAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
