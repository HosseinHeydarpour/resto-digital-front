import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-sticky-menu",
  imports: [CommonModule],
  templateUrl: "./sticky-menu.html",
  styleUrl: "./sticky-menu.scss",
})
export class StickyMenu {
  activeLink: string = "home";

  setActive(link: string) {
    this.activeLink = link;
  }
}
