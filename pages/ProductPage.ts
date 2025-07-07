import { BasePage } from "./BasePage";

export class ProductPage extends BasePage {
  async selectAllProducts(locator: string) {
    await this.page.locator(locator).first().click();
  }

  async selectProduct(locator: string) {
    if (await this.page.locator(locator).isVisible()) {
      await this.page.locator(locator).click({ force: true });
    }
  }

  async addToCart(locator: string) {
    await this.page.locator(locator).click();
  }

  async buyNow(locator: string) {
    //await this.page.waitForSelector(locator, { state: 'visible' });
    await this.page.locator(locator).click({ force: true });
  }
}
