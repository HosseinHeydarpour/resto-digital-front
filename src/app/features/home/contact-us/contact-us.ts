import { Component } from "@angular/core";
import { ContactCard } from "../../../shared/components/contact-card/contact-card";

@Component({
  selector: "app-contact-us",
  imports: [ContactCard],
  templateUrl: "./contact-us.html",
  styleUrl: "./contact-us.scss",
})
export class ContactUs {}
