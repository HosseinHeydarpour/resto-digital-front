import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";

import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";

@Component({
  selector: "app-register-login",
  imports: [
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    PasswordModule,
    CommonModule,
  ],
  templateUrl: "./register-login.html",
  styleUrl: "./register-login.scss",
})
export class RegisterLogin {
  showSignUp: boolean = true;

  signUpForm = new FormGroup({
    name: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    repeatPassword: new FormControl(),
  });

  signInForm = new FormGroup({
    phone: new FormControl(),
    password: new FormControl(),
  });

  formSubmit() {}
  redirectToSignUp() {
    this.showSignUp = true;
  }
  redirectToSignIn() {
    this.showSignUp = false;
  }
}
