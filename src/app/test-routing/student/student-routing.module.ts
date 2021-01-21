import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'all'
      },
      {
        path: 'add',
        component: AddStudentComponent,
        //   canActivate: [PermissionGuard],
        data: {
          permissions: ['DEVICE_CREATE']
        }
      },
      {
        path: 'all',
        component: StudentsComponent,
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
export class StudentRoutingModule { }

