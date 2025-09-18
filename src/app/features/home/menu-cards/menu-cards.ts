import { Component, signal } from "@angular/core";

import { Card } from "../../../shared/components/card/card";
import { Divider } from "../../../shared/components/divider/divider";
import { IFoodItem } from "../../../shared/models/IFoodList";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { SeeAllButton } from "../../../shared/components/see-all-button/see-all-button";
import { SubMenuCard } from "../../../shared/components/sub-menu-card/sub-menu-card";
import foodList from "./food-list.json";

@Component({
  selector: "app-menu-cards",
  imports: [Card, ScrollPanelModule, SubMenuCard, Divider, SeeAllButton],
  templateUrl: "./menu-cards.html",
  styleUrl: "./menu-cards.scss",
})
export class MenuCards {
  list: IFoodItem[] = foodList;
  selectedIndex: number = 0;

  menuTitle = signal("ساندویچ");

  selectCard(id: number) {
    this.selectedIndex = id;
  }
}
