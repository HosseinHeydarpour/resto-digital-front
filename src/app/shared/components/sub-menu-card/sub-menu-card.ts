import { Component, signal } from "@angular/core";

import { DecimalPipe } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { DividerModule } from "primeng/divider";

@Component({
  selector: "app-sub-menu-card",
  imports: [CardModule, ButtonModule, DividerModule, DecimalPipe],
  templateUrl: "./sub-menu-card.html",
  styleUrl: "./sub-menu-card.scss",
})
export class SubMenuCard {
  quantity = signal(0); // use Angular signal for reactive updates

  increment() {
    this.quantity.set(this.quantity() + 1);
  }

  decrement() {
    if (this.quantity() > 0) {
      this.quantity.set(this.quantity() - 1);
    }
  }
}
