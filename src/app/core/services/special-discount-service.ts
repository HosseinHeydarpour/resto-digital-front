import { Injectable, signal } from "@angular/core";

import { DiscountedRecommended } from "../dev-data/mock-discount-dish";
import { IDisCountDish } from "../../shared/models/IDisCountDish";

@Injectable({
  providedIn: "root",
})
export class SpecialDiscountService {
  // Mock data coming from dev-data folder
  private recDishData = signal<IDisCountDish[]>(DiscountedRecommended);

  // Read OP
  getSpecialDishes() {
    return this.recDishData();
  }
}
