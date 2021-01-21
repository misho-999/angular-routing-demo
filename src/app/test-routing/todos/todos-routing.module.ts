import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos.component';




const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'all'
      },
      {
        path: 'create',
        component: CreateTodoComponent,
        //   canActivate: [PermissionGuard],
        data: {
          permissions: ['DEVICE_CREATE']
        }
      },
      {
        path: ':id',
        component: TodoComponent,
        //   canActivate: [PermissionGuard],
        data: {
          permissions: ['DEVICE_READ']
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TodosRoutingModule { }

