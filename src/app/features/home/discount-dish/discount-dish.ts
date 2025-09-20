import { Component, effect, inject, signal } from "@angular/core";

import { Carousel } from "primeng/carousel";
import { Divider } from "../../../shared/components/divider/divider";
import { IDisCountDish } from "../../../shared/models/IDisCountDish";
import { SpecialDiscountService } from "../../../core/services/special-discount-service";
import { TagModule } from "primeng/tag";

@Component({
  selector: "app-discount-dish",
  imports: [Divider, Carousel, TagModule],
  templateUrl: "./discount-dish.html",
  styleUrl: "./discount-dish.scss",
})
export class DiscountDish {
  discountTitle = signal("تخفیفات ویژه");
  responsiveOptions: any[] | undefined;
  specialService = inject(SpecialDiscountService);
  specialDish: IDisCountDish[] = [];

  constructor() {
    effect(() => {
      this.specialDish = this.specialService.getSpecialDishes();
      console.log(this.specialDish);
    });
  }

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: "1400px", // screen <= 1400px
        numVisible: 4,
        numScroll: 1,
      },
      {
        breakpoint: "768px", // screen <= 1024px
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: "500px", // screen <= 768px
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: "425px", // screen <= 768px
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
