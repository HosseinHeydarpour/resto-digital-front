import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";

@Component({
  selector: "app-sub-menu-card",
  imports: [CardModule, ButtonModule],
  templateUrl: "./sub-menu-card.html",
  styleUrl: "./sub-menu-card.scss",
})
export class SubMenuCard {}
