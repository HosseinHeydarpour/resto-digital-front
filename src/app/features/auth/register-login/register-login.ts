import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Component, EventEmitter, Output } from "@angular/core";

import { CommonModule } from "@angular/common";
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
  @Output() modeChange = new EventEmitter<"signup" | "signin">();

  signUpForm = new FormGroup(
    {
      name: new FormControl("", Validators.required),
      lastname: new FormControl("", Validators.required),
      phone: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required),
      confirmPassword: new FormControl("", [Validators.required]),
    },
    {
      validators: this.passwordMatchValidator,
    }
  );

  signInForm = new FormGroup({
    phone: new FormControl(),
    password: new FormControl(),
  });

  formSubmit() {}
  redirectToSignUp() {
    this.showSignUp = true;
    this.modeChange.emit("signup");
  }
  redirectToSignIn() {
    this.showSignUp = false;
    this.modeChange.emit("signin");
  }

  passwordMatchValidator(control: AbstractControl) {
    return control.get("password")?.value ===
      control.get("confirmPassword")?.value
      ? null
      : { mismatch: true };
  }
}
