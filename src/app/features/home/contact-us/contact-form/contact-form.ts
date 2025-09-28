import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Select, SelectModule } from "primeng/select";

import { Component } from "@angular/core";
import { GoogleMapsModule } from "@angular/google-maps";
import { InputNumberModule } from "primeng/inputnumber";
import { InputTextModule } from "primeng/inputtext";
import { TextareaModule } from "primeng/textarea";

interface RequestSubject {
  name: string;
  code: string;
}

@Component({
  selector: "app-contact-form",
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    Select,
    SelectModule,
    TextareaModule,
    GoogleMapsModule,
  ],
  templateUrl: "./contact-form.html",
  styleUrl: "./contact-form.scss",
})
export class ContactForm {
  // related to google map
  center: google.maps.LatLngLiteral = { lat: 29.885194, lng: 52.305056 };
  zoom = 18;
  markers: { position: google.maps.LatLngLiteral; title: string }[] = [];
  //
  requests: RequestSubject[] = [
    { name: "انتقاد", code: "Feedback" },
    { name: "پیشنهاد", code: "Suggestion" },
  ];

  contactForm = new FormGroup({
    name: new FormControl(""),
    phone: new FormControl("", [
      Validators.required,
      Validators.pattern(/^0\d{10}$/), // starts with 0, followed by 9–10 digits
    ]),
    reqSubject: new FormControl("Feedback"),
    message: new FormControl(""),
    // city: ["", Validators.required],
  });

  formSubmit() {}
  onMapClick(event: google.maps.MapMouseEvent): void {
    if (event.latLng) {
      const position = event.latLng.toJSON();

      this.markers.push({
        position,
        title: "Marker at (${position.lat}, ${position.lng}) ",
      });
    }
  }
}
