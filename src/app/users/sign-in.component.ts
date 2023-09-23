import {Component} from '@angular/core';
import {Router} from '@angular/router'

import {UserRepositoryService} from '../services/user-repository.service'
import {ServiceI1Service} from "../catalog/service-i1.service";

@Component({
  styleUrls: ['./sign-in.component.css'],
  templateUrl: './sign-in.component.html',
  providers: [ServiceI1Service]// here we will have a unique instance of the service
})
export class SignInComponent {
  credentials: any = {};

  constructor(private router: Router, private dataRepository: UserRepositoryService, private serviceI1Service: ServiceI1Service) {
  }

  signIn(credentials: any) {
    this.dataRepository.signIn(credentials)
      .subscribe({
        error: (err) => { console.error(err, 'Error') },
        complete: () => this.router.navigate(['/catalog'])
      })
  }

  cancel() {
    this.router.navigate(['/'])
  }
}
