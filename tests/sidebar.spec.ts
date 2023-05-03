import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login";
import { LogOutPage } from "../pages/logout";

test("sidebar Test", async ({ page }) => {
  const Login = new LoginPage(page);
  const Logout = new LogOutPage(page);

  await Login.gotoLoginPage();
  await Login.login("rubairahman1@gmail.com", "12345");
  await page.getByRole("link", { name: "Dashboard" }).click();
  await page.getByRole("link", { name: "AllUser" }).click();
  await page.getByRole("link", { name: "AddNewUser" }).click();
  await page.getByRole("link", { name: "Create Team" }).click();
  await page.getByRole("link", { name: "Manage Team" }).click();
  await page.locator("button").first().click();
  await page.getByRole("navigation").getByRole("button").first().click();
  await expect(page.getByRole("link", { name: "Dashboard" })).toHaveText('Dashboard');
  //await page.pause();
  // await Logout.logout;
});
