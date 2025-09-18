import { Component, effect, inject, signal } from "@angular/core";

import { ButtonModule } from "primeng/button";
import { CarouselModule } from "primeng/carousel";
import { CommonModule } from "@angular/common";
import { Divider } from "../../../shared/components/divider/divider";
import { IRecommendedDish } from "../../../shared/models/IRecommendedFood";
import { RecommendedDishService } from "../../../core/services/recommended-dish-service";
import { SeeAllButton } from "../../../shared/components/see-all-button/see-all-button";
import { TagModule } from "primeng/tag";

@Component({
  selector: "app-recommended-dish",
  imports: [
    Divider,
    CarouselModule,
    ButtonModule,
    TagModule,
    CommonModule,
    SeeAllButton,
  ],
  templateUrl: "./recommended-dish.html",
  styleUrl: "./recommended-dish.scss",
})
export class RecommendedDish {
  recommendedTitle = signal("پیشنهاد سرآشپز");
  recDishService = inject(RecommendedDishService);
  recommendedDish: IRecommendedDish[] = [];

  responsiveOptions: any[] | undefined;

  constructor() {
    effect(() => {
      this.recommendedDish = this.recDishService.getRecDishes();
    });
  }

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: "1400px", // screen <= 1400px
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: "768px", // screen <= 1024px
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: "500px", // screen <= 768px
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
