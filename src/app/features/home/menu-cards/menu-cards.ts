import { Component } from "@angular/core";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { Card } from "../../../shared/components/card/card";
import { IFoodItem } from "../../../shared/models/IFoodList";
import foodList from "./food-list.json";

@Component({
  selector: "app-menu-cards",
  imports: [Card, ScrollPanelModule],
  templateUrl: "./menu-cards.html",
  styleUrl: "./menu-cards.scss",
})
export class MenuCards {
  list: IFoodItem[] = foodList;
  selectedIndex: number = 0;

  selectCard(id: number) {
    this.selectedIndex = id;
  }
}
