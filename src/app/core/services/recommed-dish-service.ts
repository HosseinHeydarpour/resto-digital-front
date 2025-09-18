import { Injectable, signal } from "@angular/core";

import { IRecommendedDish } from "../../shared/models/IRecommendedFood";
import { Recommended } from "../dev-data/mock-recommended-dish";

@Injectable({
  providedIn: "root",
})
export class RecommendedDishService {
  // Mock data coming from dev-data folder
  private recDishData = signal<IRecommendedDish[]>(Recommended);
}
