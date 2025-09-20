import { Component, effect, inject, signal } from "@angular/core";

import { Carousel } from "primeng/carousel";
import { CommentsService } from "../../../core/services/comments-service";
import { Divider } from "../../../shared/components/divider/divider";
import { IComments } from "../../../shared/models/ICustomComment";
import { TagModule } from "primeng/tag";

@Component({
  selector: "app-customers-comments",
  imports: [Carousel, Divider, TagModule],
  templateUrl: "./customers-comments.html",
  styleUrl: "./customers-comments.scss",
})
export class CustomersComments {
  commentsTitle = signal("نظرات مشتریان");
  responsiveOptions: any[] | undefined;
  commentsService = inject(CommentsService);
  comments: IComments[] = [];

  constructor() {
    effect(() => {
      this.comments = this.commentsService.getAllComments();
      console.log(this.comments);
    });
  }

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: "1400px", // screen <= 1400px
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: "768px", // screen <= 768px
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: "426px", // screen <= 426px
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
