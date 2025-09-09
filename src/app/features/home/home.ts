import { Component } from "@angular/core";
import { Header } from "../../layout/header/header";
import { Hero } from "./hero/hero";
import { MenuCards } from "./menu-cards/menu-cards";

@Component({
  selector: "app-home",
  imports: [Header, Hero, MenuCards],
  templateUrl: "./home.html",
  styleUrl: "./home.scss",
})
export class Home {}
