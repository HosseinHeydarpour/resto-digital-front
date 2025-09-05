import { ButtonModule } from "primeng/button";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import menu from "./menu.json";

@Component({
  selector: "app-header",
  imports: [ButtonModule, CommonModule],
  templateUrl: "./header.html",
  styleUrl: "./header.scss",
})
export class Header {
  isOpen = false;
  searchText = "";

  menuItems: any[] = menu;

  toggleSearch() {
    this.isOpen = !this.isOpen;
    if (!this.isOpen) {
      this.searchText = "";
    }
  }
}
