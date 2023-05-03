import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login";
import { LogOutPage } from "../pages/logout";

test("test", async ({ page }) => {
  const Login = new LoginPage(page);
  const Logout = new LogOutPage(page);

  await Login.gotoLoginPage();
  await Login.login("rubairahman1@gmail.com", "12345");
  // await Logout.logout;
  await page.getByRole("link", { name: "AddNewUser" }).click();
  await page.getByLabel("Name").click();
  await page.getByLabel("Name").fill("playwright");
  await page.getByLabel("Email").click();
  await page.getByLabel("Email").fill("playwright@gmail.com");
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("button", { name: "Create User" }).click();
  await page.getByRole("link", { name: "AllUser" }).click();
  await page.pause();
});
