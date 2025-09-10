import { Component, inject } from "@angular/core";

import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RestrantInfo } from "../../../core/services/restrant-info";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: "./hero.html",
  styleUrl: "./hero.scss",
})
export class Hero {
  resInfo: any = [];
  loading = true;

  private restaurantInfo = inject(RestrantInfo);

  constructor() {}
  ngOnInit(): void {
    this.restaurantInfo.getAllRestaurantInfo().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.error("Error fetching restaurant info:", err);
        this.loading = false;
      },
    });
  }
}
