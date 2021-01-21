import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentsComponent } from './students/students.component';
import { StudentRoutingModule } from './student-routing.module';



@NgModule({
  declarations: [
    AddStudentComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
