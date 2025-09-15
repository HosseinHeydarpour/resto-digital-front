import { App } from "./app/app";
import { appConfig } from "./app/core/app.config";
import { bootstrapApplication } from "@angular/platform-browser";

const root = document.documentElement;

// Add 'dark' class if system prefers dark mode
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  root.classList.add("dark");
} else {
  root.classList.remove("dark");
}
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
