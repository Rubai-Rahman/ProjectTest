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
  await page.getByPlaceholder("Type a message").click();
  await page.getByPlaceholder("Type a message").fill("playwright Test");
  await page.getByPlaceholder("Type a message").press("Enter");
  await page.getByPlaceholder("Type a message").click();
  await page
    .locator("div")
    .filter({ hasText: /^playwright Test$/ })
    .getByRole("button")
    .click();
  await page.getByRole("button", { name: "Edit" }).click();
  await page.getByRole("textbox").first().fill("Rubai");
  await page.getByRole("textbox").first().press("Enter");
  await page.getByRole("textbox").first().press("Enter");
  await page
    .locator("div")
    .filter({ hasText: /^Rubai 04:23:08 PM$/ })
    .getByRole("button")
    .click();
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("button", { name: "Delete" }).click();

 
  // await Logout.logout;
});
