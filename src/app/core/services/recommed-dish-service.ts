import { Injectable, signal } from "@angular/core";

import { IRecommendedDish } from "../../shared/models/IRecommendedFood";

@Injectable({
  providedIn: "root",
})
export class RecommendedDishService {
  private signalRecDish = signal<IRecommendedDish | null>(null);
}
