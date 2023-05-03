import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login";
//import { LogOutPage } from "../pages/logout";

test.beforeEach(async ({ page }) => {
  const Login = new LoginPage(page);

  await Login.gotoLoginPage();
  await Login.login("rubairahman1@gmail.com", "12345");
});

test.skip("Chat_Test", async ({ page }) => {
  await page
    .getByRole("row", { name: "Team 2 April 07, 2023 10:10:57 AM View Users" })
    .getByRole("button", { name: "View Users" })
    .click();
  await page.getByPlaceholder("Type a message").click();
  await page.getByPlaceholder("Type a message").fill("testing Playwright");
  await page.getByPlaceholder("Type a message").press("Enter");
});
//message_test

test.skip("message_test", async ({ page }) => {
  await page
    .getByRole("row", { name: "Team4" })
    .getByRole("button", { name: "View Users" })
    .click();

  await page.locator("div:nth-child(13) > div > button").click();
  await page.getByRole("button", { name: "Edit" }).click();
  await page.getByRole("textbox").first().fill("playwright");
  await page.getByRole("textbox").first().press("Enter");
  await page.getByRole("textbox").first().press("Enter");
  await expect(page.getByRole("button", { name: "Edit" })).toHaveText("Edit");
  await page.pause();
});

//delete message
test("message_delete", async ({ page }) => {
  await page
    .getByRole("row", { name: "Team 2" })
    .getByRole("button", { name: "View Users" })
    .click();
  await page.locator("div:nth-child(13) > div > button").click();
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("button", { name: "Delete" }).click();
  await page.pause();
});
