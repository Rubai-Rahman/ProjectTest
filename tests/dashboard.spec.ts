import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login";
import { LogOutPage } from "../pages/logout";

test("test", async ({ page }) => {
  const Login = new LoginPage(page);
  const Logout = new LogOutPage(page);

  await Login.gotoLoginPage();
  await Login.login("rubairahman1@gmail.com", "12345");
  await page
    .getByRole("row", {
      name: "Team 2 Rubai Rahman April 07, 2023 10:10:57 AM View Users",
    })
    .getByRole("button", { name: "View Users" })
    .click();
  await page.getByRole("link", { name: "Team 2" }).click();
  await page.pause();
  // await Logout.logout;
});
