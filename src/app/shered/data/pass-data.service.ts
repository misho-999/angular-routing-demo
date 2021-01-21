import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassDataService {

  private dataSource = new BehaviorSubject<any>("Default message");
  currentData$ = this.dataSource.asObservable();
  constructor() { }

  ngOnInit(): void {
  }

  passData(data: any) {
    this.dataSource.next(data)
  }
}
