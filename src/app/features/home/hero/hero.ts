import { HttpClient, HttpClientModule } from "@angular/common/http";

import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { IRestaurant } from "../../../shared/models/IRestaurantInfo";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: "./hero.html",
  styleUrl: "./hero.scss",
})
export class Hero {
  restaurants!: IRestaurant;
  loading = true;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get(
        "https://resto-digital.onrender.com/api/v1/restaurants/60d5ec49f72e9a3d8c8a8a8a"
      )
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.error("Error fetching restaurants:", err);
          this.loading = false;
        },
      });
  }
}
