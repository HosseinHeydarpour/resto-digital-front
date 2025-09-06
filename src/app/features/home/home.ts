import { Component } from "@angular/core";
import { Header } from "../../layout/header/header";
import { Hero } from "./hero/hero";

@Component({
  selector: "app-home",
  imports: [Header, Hero],
  templateUrl: "./home.html",
  styleUrl: "./home.scss",
})
export class Home {}
