import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";

import {CatalogComponent} from "./catalog.component";
import {CatalogRepositoryService} from "./catalog-reapository.service";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    RouterModule,
    SharedModule,
  ],
  declarations: [CatalogComponent],
  providers: [CatalogRepositoryService]
})
export class CatalogModule { }
