import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { DoneItemComponent } from './done-item/done-item.component';
import { UrgentItemComponent } from './urgent-item/urgent-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TodoItemComponent,
    DoneItemComponent,
    UrgentItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
