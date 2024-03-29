import { Injectable } from '@angular/core';
import { Observable, EMPTY, throwError, timer } from 'rxjs';

import { IUser } from '../users/user.model';

@Injectable({
  // indicates that the service is registered in the Root dependency Injector
  // This will tell Angular that the service will be provided to the entire app as a Singleton
  providedIn: 'root',
})
export class UserRepositoryService {
  currentUser: IUser | null = null;

  constructor() { }

  saveUser(user: IUser): Observable<any> {
    let classes = user.classes || [];
    this.currentUser = { ...user, classes: [...classes] };

    return timer(1000);
  }

  signIn(credentials: any): Observable<any> {
    //Never, ever check credentials in client-side code.
    //This code is only here to supply a fake endpoint for signing in.
    if (credentials.email !== 'user' || credentials.password !== 'user')
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
