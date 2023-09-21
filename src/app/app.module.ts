import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from "./catalog/catalog.component";
import { SignInComponent } from "./users/sign-in.component";
import { LoadingComponent } from "./components/loading-spinner.component";
import {RegisterComponent} from "./users/register.component";
import {CatalogRepositoryService} from "./catalog/catalog-reapository.service";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    RegisterComponent,
    SignInComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule,
  ],
  providers: [CatalogRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
