import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login";
import { LogOutPage } from "../pages/logout";

test("Manage Team Test", async ({ page }) => {
  const Login = new LoginPage(page);
  const Logout = new LogOutPage(page);

  await Login.gotoLoginPage();
  await Login.login("rubairahman1@gmail.com", "12345");
  // await Logout.logout;
   await page.getByRole("link", { name: "Manage Team" }).click();
   await page
     .getByRole("row", {
       name: "playwright Add Participant Remove Participant Delete",
     })
     .getByRole("button", { name: "Add Participant" })
     .click();
   await page
     .getByRole("combobox", { name: "Name" })
     .selectOption("playwright");
   page.once("dialog", (dialog) => {
     console.log(`Dialog message: ${dialog.message()}`);
     dialog.dismiss().catch(() => {});
   });
   await page.getByRole("button", { name: "ADD Participant" }).click();
   await page.getByRole("link", { name: "Manage Team" }).click();
   await page
     .getByRole("row", {
       name: "playwright Add Participant Remove Participant Delete",
     })
     .getByRole("button", { name: "Remove Participant" })
     .click();
   page.once("dialog", (dialog) => {
     console.log(`Dialog message: ${dialog.message()}`);
     dialog.dismiss().catch(() => {});
   });
   await page.getByRole("button", { name: "Delete" }).click();
   await page.getByRole("link", { name: "Manage Team" }).click();
   await page
     .getByRole("row", {
       name: "playwright Add Participant Remove Participant Delete",
     })
     .getByRole("button", { name: "Add Participant" })
     .click();
   await page.getByRole("link", { name: "Manage Team" }).click();
   page.once("dialog", (dialog) => {
     console.log(`Dialog message: ${dialog.message()}`);
     dialog.dismiss().catch(() => {});
   });
   await page
     .getByRole("row", {
       name: "playwright Add Participant Remove Participant Delete",
     })
     .getByRole("button", { name: "Delete" })
     .click();
   await page.getByRole("link", { name: "Manage Team" }).click();
  await page.pause();
});

