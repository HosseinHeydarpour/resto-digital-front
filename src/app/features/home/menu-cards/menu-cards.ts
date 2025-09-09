import { Card } from "../../../shared/components/card/card";
import { Component } from "@angular/core";
import { IFoodItem } from "../../../shared/models/IFoodList";
import { ScrollPanelModule } from "primeng/scrollpanel";
import foodList from "./food-list.json";

@Component({
  selector: "app-menu-cards",
  imports: [Card, ScrollPanelModule],
  templateUrl: "./menu-cards.html",
  styleUrl: "./menu-cards.scss",
})
export class MenuCards {
  list: IFoodItem[] = foodList;
}
