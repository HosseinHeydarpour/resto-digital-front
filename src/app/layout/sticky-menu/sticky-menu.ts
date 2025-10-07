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
  displayLoginDialog: boolean = false;

  setActive(link: string) {
    this.activeLink = link;
  }

  handleProfileClick(): void {
    this.setActive("profile");
    this.displayLoginDialog = true;
  }
}
