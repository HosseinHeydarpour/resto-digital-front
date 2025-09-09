import { Component } from "@angular/core";
import { ScrollPanelModule } from "primeng/scrollpanel";

@Component({
  selector: "app-card",
  imports: [ScrollPanelModule],
  templateUrl: "./card.html",
  styleUrl: "./card.scss",
})
export class Card {}
