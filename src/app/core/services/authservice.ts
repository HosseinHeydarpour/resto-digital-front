import { Observable, tap } from "rxjs";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";

export interface AuthSuccessResponse {
  status: string;
  token: string;
  user: {
    role: string;
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    password?: string; // optional for security; backend may omit
    mobileNumber: string;
    __v?: number;
  };
}

@Injectable({
  providedIn: "root",
})
export class Authservice {
  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    const { confirmPassword, ...dataToSend } = userData;
    return this.http
      .post<AuthSuccessResponse>(environment.API.USERS.SIGNUP, dataToSend)
      .pipe(
        tap((response) => {
          if (response && response?.token) {
            const now = new Date();
            const expiryDate = new Date(
              now.getTime() + 90 * 24 * 60 * 60 * 1000
            ); // 90 days

            localStorage.setItem("authToken", response.token);
            localStorage.setItem("tokenExpiry", expiryDate.toISOString());
          }
        })
      );
  }

  loginUser(credentials: any): Observable<AuthSuccessResponse> {
    return this.http
      .post<AuthSuccessResponse>(environment.API.USERS.LOGIN, credentials)
      .pipe(
        tap((response) => {
          if (response?.token) {
            const now = new Date();
            const expiryDate = new Date(
              now.getTime() + 90 * 24 * 60 * 60 * 1000
            );

            localStorage.setItem("authToken", response.token);
            localStorage.setItem("tokenExpiry", expiryDate.toISOString());
          }
        })
      );
  }

  // 🕒 Optional helper: Check if token is still valid
  isTokenValid(): boolean {
    const token = localStorage.getItem("authToken");
    const expiry = localStorage.getItem("tokenExpiry");

    if (!token || !expiry) return false;

    const expiryDate = new Date(expiry);
    return expiryDate > new Date();
  }

  // 🚪 Optional: Logout (clear token)
  logout(): void {
    localStorage.removeItem("authToken");
    localStorage.removeItem("tokenExpiry");
  }
}
