import { Component, signal } from "@angular/core";

import { MessageService } from "primeng/api";
import { RouterOutlet } from "@angular/router";
import { ToastModule } from "primeng/toast";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, ToastModule],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
  providers: [MessageService],
})
export class App {
  protected readonly title = signal("resto-digital");
}
