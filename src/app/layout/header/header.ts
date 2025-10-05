import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { Subscription, filter } from "rxjs";

import { Authservice } from "../../core/services/authservice";
import { ButtonModule } from "primeng/button";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Dialog } from "primeng/dialog";
import { RegisterLogin } from "../../features/auth/register-login/register-login";
import menu from "./menu.json";

@Component({
  selector: "app-header",
  imports: [ButtonModule, CommonModule, Dialog, RegisterLogin],
  templateUrl: "./header.html",
  styleUrl: "./header.scss",
})
export class Header {
  isOpen = false;
  searchText = "";
  menuItems: any[] = menu;
  // Make first item active by default
  activeIndex: number = 0;

  visible: boolean = false;
  dialogHeader = "ایجاد حساب کاربری"; // default header
  isLoggedIn = false;

  private routerSubscription!: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: Authservice
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

  private checkRouteForAuthDialog(): void {
    const authDialogParam =
      this.activatedRoute.snapshot.queryParamMap.get("authDialog");
    const modeParam = this.activatedRoute.snapshot.queryParamMap.get("mode");

    if (
      authDialogParam === "true" ||
      modeParam === "login" ||
      modeParam === "signup"
    ) {
      this.visible = true;
      if (modeParam === "signup") {
        this.dialogHeader = "ایجاد حساب کاربری";
      } else if (modeParam === "login") {
        this.dialogHeader = "ورود به حساب کاربری";
      }
    } else {
      this.visible = false;
    }
  }

  setActiveIconIndex(index: number) {
    this.activeIndex = index;
  }

  toggleSearch() {
    this.isOpen = !this.isOpen;
    if (!this.isOpen) {
      this.searchText = "";
    }
  }

  // Renamed to be more descriptive of its new functionality
  showAuthDialog(): void {
    this.visible = true;
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { authDialog: "true", mode: "login" }, // Set initial mode
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

  onModeChange(mode: "signup" | "signin") {
    this.dialogHeader =
      mode === "signup" ? "ایجاد حساب کاربری" : "ورود به حساب کاربری";

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { mode: mode },
      queryParamsHandling: "merge",
    });
  }

  // Called when user successfully registers or logs in
  onAuthSuccess(): void {
    this.visible = false;
    this.isLoggedIn = true;
  }

  // 👇 Call your service logout
  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
  }
}
