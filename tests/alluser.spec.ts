import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login";
import { LogOutPage } from "../pages/logout";

test("test", async ({ page }) => {
  const Login = new LoginPage(page);
  const Logout = new LogOutPage(page);

  await Login.gotoLoginPage();
  await Login.login("rubairahman1@gmail.com", "12345");
  // await Logout.logout;
  await page.getByRole("link", { name: "AllUser" }).click();
  await page
    .getByRole("row", { name: "asraful asraful@jannat.com member Edit Delete" })
    .getByRole("button", { name: "Edit" })
    .click();
  await page.getByLabel("Name").click();
  await page.getByLabel("Name").fill("playwright");
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("button", { name: "Save" }).click();
  await page.pause();
});
