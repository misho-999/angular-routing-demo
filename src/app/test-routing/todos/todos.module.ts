import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { TodosDetailsComponent } from './todos-details/todos-details.component';
import { TodosCreateComponent } from './todos-create/todos-create.component';



@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent,
    CreateTodoComponent,
    TodosDetailsComponent,
    TodosCreateComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule
  ]
})
export class TodosModule { }
