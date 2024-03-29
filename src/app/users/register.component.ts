import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserRepositoryService} from "../services/user-repository.service";
import {IUser} from "./user.model";
import {ServiceI1Service} from "../catalog/service-i1.service";

@Component({
  styleUrls: ['./register.component.css'],
  templateUrl: './register.component.html',
  providers: [ServiceI1Service]// here we will have a unique instance of the service
})

export class RegisterComponent {
  registerForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  saving: boolean = false;

  constructor(private router: Router, private dataRepository: UserRepositoryService, private serviceI1Service: ServiceI1Service) {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);

    this.registerForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    });
  }

  ngOnInit() {
    this.serviceI1Service.hello();
  }

  registerUser(user: IUser) {
    this.saving = true;
    this.dataRepository.saveUser(user)
      .subscribe({
        error: () => this.saving = false,
        complete: () => this.router.navigate(['/catalog'])
      });
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
