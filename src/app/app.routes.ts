import { Home } from "./features/home/home";
import { Protected } from "./features/home/protected-page/protected/protected";
import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: "", component: Home },
  { path: "protected", component: Protected },
];
