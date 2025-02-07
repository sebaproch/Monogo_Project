import { BasePage } from "./BasePage";

export class CookiesPage extends BasePage {
  async acceptCookies(locator: string) {
    if (await this.page.locator(locator).isVisible()) {
      await this.page.locator(locator).click();
    }
  }
}