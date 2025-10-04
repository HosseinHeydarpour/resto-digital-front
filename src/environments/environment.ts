// src/environments/environment.ts
export const environment = {
  production: false, // Set to true for your production environment
  MAIN_SITE_URL: "https://resto-digital.onrender.com",
  API: {
    USERS: {
      SIGNUP: "https://resto-digital.onrender.com/api/v1/users/signup",
      LOGIN: "https://resto-digital.onrender.com/api/v1/users/login",
    },
    // You can add other API endpoints here as your project grows
  },
};
