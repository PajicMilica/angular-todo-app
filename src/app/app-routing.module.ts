import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {TodoAddComponent} from "./todo-add/todo-add.component";
import {UrgentAddComponent} from "./urgent-add/urgent-add.component";

const routes: Routes = [
 {path: '', component: HomepageComponent},
 {path: 'add/todo', component: TodoAddComponent},
 {path: 'add/urgent', component: UrgentAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
