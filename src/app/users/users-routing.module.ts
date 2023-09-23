import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './sign-in.component';
import {RegisterComponent} from "./register.component";
import {UsersComponent} from "./users/users.component";

const routes: Routes = [
  { path: 'register', component: RegisterComponent, },
  { path: 'sign-in', component: SignInComponent, },
  { path: 'list', component: UsersComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
