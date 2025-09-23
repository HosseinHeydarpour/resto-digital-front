import { Component, Input, Signal } from "@angular/core";

import { Router } from "@angular/router";

@Component({
  selector: "app-contact-card",
  imports: [],
  templateUrl: "./contact-card.html",
  styleUrl: "./contact-card.scss",
})
export class ContactCard {
  @Input({ required: true }) icon!: Signal<string>;
  @Input({ required: true }) title!: Signal<string>;

  @Input() route?: Signal<string>; // for internal navigation
  @Input({ required: true }) url?: Signal<string>; // for external links

  constructor(private router: Router) {}

  navigate() {
    if (this.route) {
      this.router.navigate([this.route]);
    } else if (this.url) {
      window.open(this.url(), "_blank");
    }
  }
}
