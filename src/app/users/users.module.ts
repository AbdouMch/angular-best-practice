import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import {RegisterComponent} from "./register.component";
import {SignInComponent} from "./sign-in.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    RegisterComponent,
    SignInComponent,
  ]
})
export class UsersModule { }
