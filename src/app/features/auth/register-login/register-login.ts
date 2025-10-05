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
})
export class RegisterLogin {
  showSignUp: boolean = true;
  isLoadingSignUp: boolean = false; // Add this property to manage button state
  @Output() modeChange = new EventEmitter<"signup" | "signin">();
  @Output() authSuccess = new EventEmitter<void>();

  isLoading: boolean = false; // Add this property to manage button state

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
    this.isLoading = true; // Set loading to true when form is submitted

    if (this.signUpForm.valid) {
      this.isLoadingSignUp = true;
      this.authService.registerUser(this.signUpForm.value).subscribe({
        next: (response) => {
          console.log(response);
          this.authSuccess.emit();
          this.messageService.add({
            severity: "success",
            summary: "ثبت نام موفق",
            detail: "حساب کاربری شما با موفقیت ایجاد شد.",
          });
          this.isLoading = false; // Reset loading on success
          this.isLoadingSignUp = false; // Reset loading on success
        },
        error: (error) => {
          console.error("Registration failed", error);
          let errorMessage = "خطا در ثبت نام. لطفا دوباره تلاش کنید."; // Default error message

          // --- IMPORTANT: Check for duplicate email error ---
          if (
            error.error &&
            error.error.error &&
            error.error.error.code === 11000 &&
            error.error.error.keyPattern &&
            error.error.error.keyPattern.email === 1
          ) {
            errorMessage =
              "این ایمیل قبلاً ثبت نام شده است. لطفا با ایمیل دیگری تلاش کنید.";
            // Optionally, you can also mark the email field as invalid
            this.signUpForm.get("email")?.setErrors({ duplicateEmail: true });
            this.signUpForm.get("email")?.markAsTouched();
          } else if (error.error?.message) {
            // If the backend sends a more generic error message
            errorMessage = error.error.message;
          }

          this.messageService.add({
            severity: "error",
            summary: "خطا در ثبت نام",
            detail: errorMessage,
          });
          this.isLoading = false; // Reset loading on error
          this.isLoadingSignUp = false; // Reset loading on error
        },
      });
    } else {
      this.messageService.add({
        severity: "warn",
        summary: "اطلاعات ناقص",
        detail: "لطفا تمامی فیلدهای الزامی را پر کنید.",
      });
      this.isLoading = false; // Reset loading if form is invalid before submission
      this.isLoadingSignUp = false; // Reset loading if form is invalid before submission
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
          this.messageService.add({
            severity: "error",
            summary: "خطا در ورود",
            detail: "رمز عبور یا ایمیل اشتباه است",
          });
        },
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
