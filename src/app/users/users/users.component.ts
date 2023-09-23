import { Component } from '@angular/core';
import {ServiceI1Service} from "../../catalog/service-i1.service";

@Component({
  selector: 'wb-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor(private serviceI1Service: ServiceI1Service) {
  }

  ngOnInit() {
    this.serviceI1Service.hello();
  }
}
