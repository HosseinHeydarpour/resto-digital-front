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
import { ButtonModule } from "primeng/button";
import { CommonModule } from "@angular/common";
import { InputTextModule } from "primeng/inputtext";
import { MessageService } from "primeng/api";
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
    ButtonModule,
  ],
  templateUrl: "./register-login.html",
  styleUrl: "./register-login.scss",
  providers: [MessageService],
})
export class RegisterLogin {
  showSignUp: boolean = true;
  @Output() modeChange = new EventEmitter<"signup" | "signin">();
  @Output() authSuccess = new EventEmitter<void>();

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
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required),
  });

  constructor(
    private authService: Authservice,
    private router: Router,
    private messageService: MessageService
  ) {}

  signUpFormSubmit() {
    if (this.signUpForm.valid) {
      this.authService.registerUser(this.signUpForm.value).subscribe({
        next: (response) => {
          console.log(response);
          this.authSuccess.emit();
          this.messageService.add({
            severity: "success",
            summary: "ثبت نام موفق",
            detail: "حساب کاربری شما با موفقیت ایجاد شد.",
          });
        },
        error: (error) => {
          console.error("Registration failed", error);
          // Extract specific error message from the backend if possible
          const errorMessage =
            error.error?.message || "خطا در ثبت نام. لطفا دوباره تلاش کنید.";
          this.messageService.add({
            severity: "error",
            summary: "خطا در ثبت نام",
            detail: errorMessage,
          });
        },
      });
    } else {
      this.messageService.add({
        severity: "warn",
        summary: "اطلاعات ناقص",
        detail: "لطفا تمامی فیلدهای الزامی را پر کنید.",
      });
    }
  }

  signInFormSubmit() {
    if (this.signInForm.valid) {
      this.authService.loginUser(this.signInForm.value).subscribe({
        next: (response) => {
          console.log(response);
          this.authSuccess.emit();
          this.messageService.add({
            severity: "success",
            summary: "ورود موفق",
            detail: "شما با موفقیت وارد شدید.",
          });
        },
        error: (error) => {
          console.error("Login failed", error);
          const errorMessage =
            error.error?.message || "خطا در ورود. لطفا دوباره تلاش کنید.";
          this.messageService.add({
            severity: "error",
            summary: "خطا در ورود",
            detail: errorMessage,
          });
        },
      });
    } else {
      this.messageService.add({
        severity: "warn",
        summary: "اطلاعات ناقص",
        detail: "لطفا تمامی فیلدهای الزامی را پر کنید.",
      });
    }
  }

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
