import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { Subscription, filter } from "rxjs";

import { Authservice } from "../../core/services/authservice";
import { ButtonModule } from "primeng/button";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Dialog } from "primeng/dialog";
import { MessageService } from "primeng/api";
import { RegisterLogin } from "../../features/auth/register-login/register-login";

@Component({
  selector: "app-sticky-menu",
  imports: [CommonModule, Dialog, RegisterLogin, ButtonModule],
  templateUrl: "./sticky-menu.html",
  styleUrl: "./sticky-menu.scss",
})
export class StickyMenu {
  activeLink: string = "home";
  dialogHeader = "ایجاد حساب کاربری"; // default header
  displayLoginDialog: boolean = false;
  isLoggedIn: boolean = false;
  private routerSubscription!: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: Authservice,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isTokenValid();

    // Listen to router events to determine if the dialog should be open
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkRouteForAuthDialog();
      });
    this.checkRouteForAuthDialog();
  }

  setActive(link: string) {
    this.activeLink = link;
  }

  handleProfileClick(): void {
    this.setActive("profile");
  }

  onModeChange(mode: "signup" | "signin") {
    this.dialogHeader =
      mode === "signup" ? "ایجاد حساب کاربری" : "ورود به حساب کاربری";

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { mode: mode },
      queryParamsHandling: "merge",
    });
  }

  // This method is called when the PrimeNG dialog's (onHide) event fires
  onDialogHide(): void {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { authDialog: null, mode: null }, // Remove query parameters
      queryParamsHandling: "merge",
    });
  }

  // Called when user successfully registers or logs in
  onAuthSuccess(): void {
    this.displayLoginDialog = false;
    this.isLoggedIn = true;
  }
  private checkRouteForAuthDialog(): void {
    const authDialogParam =
      this.activatedRoute.snapshot.queryParamMap.get("authDialog");
    const modeParam = this.activatedRoute.snapshot.queryParamMap.get("mode");

    if (
      authDialogParam === "true" ||
      modeParam === "login" ||
      modeParam === "signup"
    ) {
      this.displayLoginDialog = true;
      if (modeParam === "signup") {
        this.dialogHeader = "ایجاد حساب کاربری";
      } else if (modeParam === "login") {
        this.dialogHeader = "ورود به حساب کاربری";
      }
    } else {
      this.displayLoginDialog = false;
    }
  }

  // 👇 Call your service logout
  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;

    this.messageService.add({
      severity: "success",
      summary: "خروج موفق",
      detail: "شما با موفقیت از حساب کاربری خارج شدید.",
      life: 3000,
    });
  }

  // Renamed to be more descriptive of its new functionality
  showAuthDialog(): void {
    this.displayLoginDialog = true;
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { authDialog: "true", mode: "login" }, // Set initial mode
      queryParamsHandling: "merge",
    });
  }
}
