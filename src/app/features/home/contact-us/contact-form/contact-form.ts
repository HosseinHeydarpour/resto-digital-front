import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Select, SelectModule } from "primeng/select";

import { Component } from "@angular/core";
import { InputNumberModule } from "primeng/inputnumber";
import { InputTextModule } from "primeng/inputtext";
import { Message } from "primeng/message";
import { TextareaModule } from "primeng/textarea";
import { Toast } from "primeng/toast";

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
    Message,
    Toast,
    SelectModule,
    TextareaModule,
  ],
  templateUrl: "./contact-form.html",
  styleUrl: "./contact-form.scss",
})
export class ContactForm {
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
}
