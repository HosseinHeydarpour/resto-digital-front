import { Component } from "@angular/core";
import { Footer } from "../../layout/footer/footer";
import { Header } from "../../layout/header/header";
import { Hero } from "./hero/hero";
import { MenuCards } from "./menu-cards/menu-cards";
import { RecommendedDish } from "./recommended-dish/recommended-dish";

@Component({
  selector: "app-home",
  imports: [Header, Hero, MenuCards, Footer, RecommendedDish],
  templateUrl: "./home.html",
  styleUrl: "./home.scss",
})
export class Home {}
