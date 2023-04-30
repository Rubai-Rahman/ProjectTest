import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login";
import { LogOutPage } from "../pages/logout";

test("test", async ({ page }) => {
  const Login = new LoginPage(page);
  const Logout = new LogOutPage(page);

  await Login.gotoLoginPage();
  await Login.login("rubairahman1@gmail.com", "12345");
  await page.pause();
  await Logout.logout;
  // await page
  //   .getByRole("navigation")
  //   .filter({ hasText: "Log In As: Rubai Rahman" })
  //   .getByRole("button")
  //   .click();
  // await page.getByRole("button", { name: "LogOut" }).click();
});
