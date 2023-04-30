import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login";
test("test", async ({ page }) => {
  const Login = new LoginPage(page);

  await Login.gotoLoginPage();
  await Login.login("rubairahman1@gmail.com", "12345");

  // await page.goto("https://company-comunication-eight.vercel.app/");
  // await page.getByLabel("Email address").click();
  // await page.getByLabel("Email address").fill("rubairahman1@gmail.com");
  // await page.getByLabel("Password").click();
  // await page.getByLabel("Password").fill("12345");
  // await page.getByLabel("Password").click();
  // await page.getByRole("button", { name: "Log in" }).click();
});
