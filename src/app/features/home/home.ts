import { Component } from "@angular/core";
import { ContactUs } from "./contact-us/contact-us";
import { CopyRight } from "./copy-right/copy-right";
import { CustomersComments } from "./customers-comments/customers-comments";
import { DiscountDish } from "./discount-dish/discount-dish";
import { Footer } from "../../layout/footer/footer";
import { Header } from "../../layout/header/header";
import { Hero } from "./hero/hero";
import { MenuCards } from "./menu-cards/menu-cards";
import { RecommendedDish } from "./recommended-dish/recommended-dish";
import { StickyMenu } from "../../layout/sticky-menu/sticky-menu";

@Component({
  selector: "app-home",
  imports: [
    Header,
    Hero,
    MenuCards,
    Footer,
    RecommendedDish,
    DiscountDish,
    CustomersComments,
    CopyRight,
    ContactUs,
    StickyMenu,
  ],
  templateUrl: "./home.html",
  styleUrl: "./home.scss",
})
export class Home {}
