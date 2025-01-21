import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { users } from '../utils/fake-data';

@Injectable()
export class UserService {
  private users = new BehaviorSubject<User[]>(users);

  getUsers() {
    return this.users.asObservable();
  }

  addUser(user: any) {
    const currentUsers = this.users.getValue();
    this.users.next([user, ...currentUsers]);
  }

  deleteUser(userId: number) {
    const updatedUsers = this.users
      .getValue()
      .filter((user) => user.ID !== userId);
    this.users.next(updatedUsers);
  }

  editUser(updatedUser: User) {
    const currentUsers = this.users.getValue();
    const userIndex = currentUsers.findIndex(
      (user) => user.ID === updatedUser.ID
    );
    if (userIndex !== -1) {
      currentUsers[userIndex] = { ...currentUsers[userIndex], ...updatedUser };
      this.users.next([...currentUsers]);
    } else {
      console.error('User not found with ID:', updatedUser.ID);
    }
  }
}
