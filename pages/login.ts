export class LoginPage {
  page: any;
  email_textbox: any;
  password_textbox: any;
  login_button: any;

  constructor(page: any) {
    this.page = page;
    this.email_textbox = page.getByLabel("Email address");
    this.password_textbox = page.getByLabel("Password");
    this.login_button = page.getByRole("button", { name: "Log in" });
  }

  async gotoLoginPage() {
    await this.page.goto("https://company-comunication-eight.vercel.app/");
  }
  async login(email, password) {
    await this.email_textbox.fill(email);
    await this.password_textbox.fill(password);
    await this.login_button.click();
  }
}
