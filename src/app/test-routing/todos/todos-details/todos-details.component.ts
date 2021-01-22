import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITodo } from 'src/app/shered/dto/todo';
import { TodosService } from 'src/app/shered/todos.service';

@Component({
  selector: 'app-todos-details',
  templateUrl: './todos-details.component.html',
  styleUrls: ['./todos-details.component.css']
})
export class TodosDetailsComponent implements OnInit {
  currentTodo: ITodo;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    console.log(userId);
  }
}
