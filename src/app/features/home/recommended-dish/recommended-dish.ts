import { Component, signal } from "@angular/core";

import { ButtonModule } from "primeng/button";
import { CarouselModule } from "primeng/carousel";
import { CommonModule } from "@angular/common";
import { Divider } from "../../../shared/components/divider/divider";
import { IRecommendedDish } from "../../../shared/models/IRecommendedFood";
import { TagModule } from "primeng/tag";

interface Car {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
}

@Component({
  selector: "app-recommended-dish",
  imports: [Divider, CarouselModule, ButtonModule, TagModule, CommonModule],
  templateUrl: "./recommended-dish.html",
  styleUrl: "./recommended-dish.scss",
})
export class RecommendedDish {
  recommendedTitle = signal("پیشنهاد سرآشپز");
  recommendedDish: IRecommendedDish[] = [];

  cars: Car[] = [];
  responsiveOptions: any[] | undefined;

  constructor() {}

  ngOnInit() {
    this.cars = [
      {
        id: "1",
        name: "Bugatti",
        description: "Racing car",
        price: 800,
      },
      {
        id: "2",
        name: "Ferrari",
        description: "The Prancing Horse",
        price: 1500,
      },
      {
        id: "3",
        name: "Porsche",
        description: "Full spectrum",
        price: 10000,
      },
      {
        id: "4",
        name: "Ferrari",
        description: "The Prancing Horse",
        price: 1500,
      },
      {
        id: "5",
        name: "Porsche",
        description: "Full spectrum",
        price: 10000,
      },
    ];

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
        breakpoint: "425px", // screen <= 768px
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
