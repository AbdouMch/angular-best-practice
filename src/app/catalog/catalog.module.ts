import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";

import {CatalogComponent} from "./catalog.component";
import {SharedModule} from "../shared/shared.module";
import {ServiceI1Service} from "./service-i1.service";
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  imports: [
    RouterModule,
    SharedModule,
  ],
  declarations: [CatalogComponent, OrderByPipe],
  providers: [ServiceI1Service]// here we register the service in the root injector, the same instance that is provided in the UsersModule
})
export class CatalogModule { }
