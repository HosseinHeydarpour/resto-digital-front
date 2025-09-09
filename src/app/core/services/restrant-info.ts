import { HttpClient } from "@angular/common/http";
import { IRestaurant } from "../../shared/models/IRestaurantInfo";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class RestrantInfo {
  private apiUrl = `${environment.MAIN_SITE_URL}/api/v1/restaurants/60d5ec49f72e9a3d8c8a8a8a`;
  restaurant!: IRestaurant[];

  constructor(private http: HttpClient) {}

  // get all information
  getAllRestaurantInfo(): Observable<IRestaurant[]> {
    return this.http.get<IRestaurant[]>(this.apiUrl);
  }
}
