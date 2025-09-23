import { Component, signal } from "@angular/core";

import { ContactCard } from "../../../shared/components/contact-card/contact-card";
import { Divider } from "../../../shared/components/divider/divider";

@Component({
  selector: "app-contact-us",
  imports: [ContactCard, Divider],
  templateUrl: "./contact-us.html",
  styleUrl: "./contact-us.scss",
})
export class ContactUs {
  contactUsTitle = signal("راه های ارتباطی با ترنج");

  telegramIcon = signal("pi pi-telegram");
  telegramTitle = signal("تلگرام");
  telegramUrl = signal("https://t.me/toranj");

  whatsappIcon = signal("pi pi-whatsapp");
  whatsappTitle = signal("واتساپ");
  whatsappUrl = signal("https://wa.me/1234567890"); // put your number

  instagramIcon = signal("pi pi-instagram");
  instagramTitle = signal("اینستاگرام");
  instagramUrl = signal("https://instagram.com/toranj");

  xIcon = signal("pi pi-twitter"); // PrimeIcons doesn’t have "X", so we use twitter
  xTitle = signal("ایکس");
  xUrl = signal("https://x.com/toranj");
}
