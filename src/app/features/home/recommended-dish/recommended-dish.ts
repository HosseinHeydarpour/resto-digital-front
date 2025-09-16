import { Component, signal } from "@angular/core";

import { Divider } from "../../../shared/components/divider/divider";

@Component({
  selector: "app-recommended-dish",
  imports: [Divider],
  templateUrl: "./recommended-dish.html",
  styleUrl: "./recommended-dish.scss",
})
export class RecommendedDish {
  recommendedTitle = signal("پیشنهاد سرآشپز");
}
