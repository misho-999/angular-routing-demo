import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { ITodo } from './dto/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(
    private dataService: DataService,
  ) { }

  getAllTodos(): Observable<ITodo[]> {
    return this.dataService.get<ITodo[]>('todos');
  }
}
