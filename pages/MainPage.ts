import { BasePage } from "./BasePage";

export class MainPage extends BasePage {
  async goToShop(locator: string) {
    await this.page.locator(locator).first().click();
  }
}