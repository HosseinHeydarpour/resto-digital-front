import { Component, Input, Signal, signal } from "@angular/core";

@Component({
  selector: "app-card",
  imports: [],
  templateUrl: "./card.html",
  styleUrl: "./card.scss",
})
export class Card {
  @Input() set item(value: { name: string; imageUrl: string }) {
    this._item.set(value);
  }

  // Internal signal
  readonly _item = signal<{ name: string; imageUrl: string }>({
    name: "",
    imageUrl: "",
  });

  // You can expose it as a readonly signal for the template
  readonly itemSignal: Signal<{ name: string; imageUrl: string }> = this._item;
}
