import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { DividerModule } from "primeng/divider";

@Component({
  selector: "app-sub-menu-card",
  imports: [CardModule, ButtonModule, DividerModule],
  templateUrl: "./sub-menu-card.html",
  styleUrl: "./sub-menu-card.scss",
})
export class SubMenuCard {}
