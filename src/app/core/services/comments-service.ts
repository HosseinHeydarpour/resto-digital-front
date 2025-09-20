import { Injectable, signal } from "@angular/core";

import { COMMENTS } from "../dev-data/mock-customer-comments";
import { IComments } from "../../shared/models/ICustomComment";

@Injectable({
  providedIn: "root",
})
export class CommentsService {
  // Mock data coming from dev-data folder
  private commentData = signal<IComments[]>(COMMENTS);

  // Read OP
  getAllComments() {
    return this.commentData();
  }
}
