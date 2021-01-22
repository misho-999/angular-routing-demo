import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoComponent } from './todo/todo.component';
import { TodosCreateComponent } from './todos-create/todos-create.component';
import { TodosDetailsComponent } from './todos-details/todos-details.component';
import { TodosComponent } from './todos.component';




const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TodosComponent
  },
  {
    path: 'details/:id',
    component: TodosDetailsComponent
  },
  {
    path: 'create',
    component: TodosCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TodosRoutingModule { }

