import { ButtonModule } from "primeng/button";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Dialog } from "primeng/dialog";
import { Register } from "../../features/auth/register/register";
import menu from "./menu.json";

@Component({
  selector: "app-header",
  imports: [ButtonModule, CommonModule, Dialog, Register],
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

  /**
   * Sets the active icon index.
   *
   * @param index - The index of the icon to mark as active.
   *
   * Updates the `activeIndex` property to track which icon is currently active.
   * This is typically used to highlight the selected icon in the UI.
   */
  setActiveIconIndex(index: number) {
    this.activeIndex = index;
  }

  toggleSearch() {
    this.isOpen = !this.isOpen;
    if (!this.isOpen) {
      this.searchText = "";
    }
  }

  showDialog() {
    this.visible = true;
  }
}
