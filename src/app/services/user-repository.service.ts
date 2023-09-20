import { Injectable } from '@angular/core';
import { Observable, EMPTY, throwError, timer } from 'rxjs';

import { IUser } from '../users/user.model';

@Injectable()
export class UserRepositoryService {
  currentUser: IUser | null = null;

  constructor() { }

  saveUser(user: IUser): Observable<any> {
    user.classes = user.classes || [];
    this.currentUser = user;

    return timer(1000);
  }

  signIn(credentials: any): Observable<any> {
    //Never, ever check credentials in client-side code.
    //This code is only here to supply a fake endpoint for signing in.
    if (credentials.email !== 'me@whitebeards.edu' || credentials.password !== 'super-secret')
      return throwError(() => new Error('Invalid login'));

    this.currentUser = {
      userId: 'e61aebed-dbc5-437a-b514-02b8380d8efc',
      firstName: 'Jim',
      lastName: 'Cooper',
      email: 'me@whitebeards.edu',
      classes: []
    };

    return EMPTY;
  }
}
