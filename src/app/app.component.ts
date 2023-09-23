import { Component } from '@angular/core';
import {ServiceI1Service} from "./catalog/service-i1.service";

@Component({
  selector: 'app-root',
  styles: [`
      .app {
        width: 1600px;
        margin: auto;
      }
      .main {
        background-color:white;
      }
    `],
  template: `
      <div class="app">
          <wb-nav-bar></wb-nav-bar>
          <div class="main">
              <router-outlet></router-outlet>
          </div>
      </div>
  `,
})
export class AppComponent {
  constructor(private serviceI1Service: ServiceI1Service) {
  }
}
