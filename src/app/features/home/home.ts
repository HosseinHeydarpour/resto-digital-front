import { Component } from "@angular/core";
import { DiscountDish } from "./discount-dish/discount-dish";
import { Footer } from "../../layout/footer/footer";
import { Header } from "../../layout/header/header";
import { Hero } from "./hero/hero";
import { MenuCards } from "./menu-cards/menu-cards";
import { RecommendedDish } from "./recommended-dish/recommended-dish";

@Component({
  selector: "app-home",
  imports: [Header, Hero, MenuCards, Footer, RecommendedDish, DiscountDish],
  templateUrl: "./home.html",
  styleUrl: "./home.scss",
})
export class Home {}
