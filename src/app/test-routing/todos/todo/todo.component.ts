import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from 'src/app/shered/dto/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo: ITodo;

  constructor() { }

  ngOnInit(): void {
  }

}
