import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login";

// test("test", async ({ page }) => {
//   const Login = new LoginPage(page);

//   await Login.gotoLoginPage();
//   await Login.login("rubairahman1@gmail.com", "12345");

// });

test.beforeAll(async ({ page }) => {
  const Login = new LoginPage(page);
  await Login.gotoLoginPage();
  await Login.login("rubairahman1@gmail.com", "12345");
});
