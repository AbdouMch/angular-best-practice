import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import {RegisterComponent} from "./register.component";
import {SignInComponent} from "./sign-in.component";
import {SharedModule} from "../shared/shared.module";
import {ServiceI1Service} from "../catalog/service-i1.service";

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
  ],
  providers: [ServiceI1Service]// TODO: test lazy-loading of Modules to know if we get the same instance provided in the CatalogModule
})
export class UsersModule { }
