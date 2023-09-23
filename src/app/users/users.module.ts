import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import {RegisterComponent} from "./register.component";
import {SignInComponent} from "./sign-in.component";
import {SharedModule} from "../shared/shared.module";
import {ServiceI1Service} from "../catalog/service-i1.service";
import {UsersRoutingModule} from "./users-routing.module";
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    UsersRoutingModule,
    SharedModule
  ],
  declarations: [
    RegisterComponent,
    SignInComponent,
    UsersComponent,
  ],
  providers: [ServiceI1Service]// In lazy-loading of a Module we get a new instance of the service
})
export class UsersModule {
  constructor() {
    console.log("hello")
  }
}
