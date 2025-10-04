import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class Authservice {
  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    // Use the SIGNUP URL directly from the environment
    return this.http.post(environment.API.USERS.SIGNUP, userData);
  }

  loginUser(credentials: any): Observable<any> {
    // Use the LOGIN URL directly from the environment
    return this.http.post(environment.API.USERS.LOGIN, credentials);
  }
}
