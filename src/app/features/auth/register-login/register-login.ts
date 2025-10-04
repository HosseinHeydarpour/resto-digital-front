import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Component, EventEmitter, Output } from "@angular/core";

import { Authservice } from "../../../core/services/authservice";
import { CommonModule } from "@angular/common";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { Router } from "@angular/router";

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
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      mobileNumber: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9]{11}$"),
      ]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required),
      passwordConfirm: new FormControl("", [Validators.required]),
    },
    {
      validators: this.passwordMatchValidator,
    }
  );

  signInForm = new FormGroup({
    phone: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });

  constructor(private authService: Authservice, private router: Router) {}

  signUpFormSubmit() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
      this.authService.registerUser(this.signUpForm.value).subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(["/protected"]);
        },
        error: (error) => {
          console.error("Registration failed", error);
        },
      });
    }
  }
  registerFormSubmit() {}
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
      control.get("passwordConfirm")?.value
      ? null
      : { mismatch: true };
  }

  allowOnlyNumbers(event: KeyboardEvent) {
    const charCode = event.key.charCodeAt(0);
    if (charCode < 48 || charCode > 57) {
      event.preventDefault(); // block non-numeric
    }
  }
}
