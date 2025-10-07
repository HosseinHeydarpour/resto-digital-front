import { ActivatedRoute, Router } from "@angular/router";

import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Dialog } from "primeng/dialog";
import { RegisterLogin } from "../../features/auth/register-login/register-login";

@Component({
  selector: "app-sticky-menu",
  imports: [CommonModule, Dialog, RegisterLogin],
  templateUrl: "./sticky-menu.html",
  styleUrl: "./sticky-menu.scss",
})
export class StickyMenu {
  activeLink: string = "home";
  dialogHeader = "ایجاد حساب کاربری"; // default header
  displayLoginDialog: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  setActive(link: string) {
    this.activeLink = link;
  }

  handleProfileClick(): void {
    this.setActive("profile");
    this.displayLoginDialog = true;
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
}
