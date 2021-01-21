import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';



@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent,
    CreateTodoComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule
  ]
})
export class TodosModule { }
