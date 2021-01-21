import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPersonComponent } from './add-person/add-person.component';
import { PeopleComponent } from './people/people.component';
import { PersonRoutingModule } from './person-routing.module';



@NgModule({
  declarations: [
    AddPersonComponent,
    PeopleComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule
  ]
})
export class PersonModule { }
