import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSubjectService {

  private messageSource = new BehaviorSubject<any>(null);
  currentMessage$ = this.messageSource.asObservable();

  constructor() { }

  ngOnInit(): void {
  }

  changeMessage(message: any) {
    this.messageSource.next(message)
  }
}
