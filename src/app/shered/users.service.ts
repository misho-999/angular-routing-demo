import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data/data.service';
import { IUser } from './dto/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private dataService: DataService,
  ) { }

  getAllUsers(): Observable<IUser[]> {
    return this.dataService.get<IUser[]>('users');
  }

  getUserById(userId: string) {
    return this.dataService.get<IUser>(`users/${userId}`);
  }
}
