import { Component, EventEmitter, Input, Output } from "@angular/core";

import { CommonModule } from "@angular/common";
import { IFoodItem } from "../../models/IFoodList";

@Component({
  selector: "app-card",
  imports: [CommonModule],
  templateUrl: "./card.html",
  styleUrl: "./card.scss",
})
export class Card {
  @Input() item!: IFoodItem;
  @Input() selected: boolean = false;
  @Output() selectedCard = new EventEmitter();

  cardSelected() {
    this.selectedCard.emit(this.item.name);
  }
}
