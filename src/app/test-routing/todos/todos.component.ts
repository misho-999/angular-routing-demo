import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/shered/dto/todo';
import { TodosService } from 'src/app/shered/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Array<ITodo>
  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.getAllTodos().subscribe((data)=> {
      this.todos = data;
    })
  }

}
