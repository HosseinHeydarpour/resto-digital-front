import { Component, Input, Signal } from "@angular/core";

import { DividerModule } from "primeng/divider";

@Component({
  selector: "app-divider",
  imports: [DividerModule],
  templateUrl: "./divider.html",
  styleUrl: "./divider.scss",
})
export class Divider {
  @Input({ required: true }) title!: Signal<string>;
}
