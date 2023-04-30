export class LogOutPage {
  page: any;
  modal_button: any;
  logout_button: any;

  constructor(page: any) {
    this.page = page;
    this.modal_button = page
      .getByRole("navigation")
      .filter({ hasText: "Log In As: Rubai Rahman" })
      .getByRole("button");
    this.logout_button = page.getByRole("button", { name: "LogOut" });
  }

  async logout() {
    await this.modal_button.click();
    await this.logout_button.click();
  }
}
