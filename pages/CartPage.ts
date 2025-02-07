import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
  async openCart(locator: string) {
    await this.page.locator(locator).click();
  }

  async verifyCartQuantity(locator: string, expectedValue: number) {
    await this.page.locator(locator);
    let basketCountValue = parseInt(await this.page.inputValue(locator));
    return basketCountValue === expectedValue;
  }

  async updateCartQuantity(
    plusLocator: string,
    minusLocator: string,
    cartQuantLocator: string,
    expectedValue: number
  ) {
    await this.page.locator(plusLocator).last().click();
    await this.page.locator(cartQuantLocator);
    let basketCountValue = parseInt(
      await this.page.inputValue(cartQuantLocator)
    );
    if (basketCountValue === expectedValue) {
      await this.page.locator(minusLocator).last().click();
    }
  }

  async checkProductInBasket(itemBasketLocator: string, expectedValue: number) {
    await this.page.locator(itemBasketLocator);
    const itemBasketText = await this.page.innerText(itemBasketLocator);
    const itemBasketIntValue = parseInt(itemBasketText.split(" ")[0]);
    return itemBasketIntValue;
  }

  async removeItem(removeLocator: string, confirmLocator: string) {
    await this.page.locator(removeLocator).last().click();
    await this.page.locator(confirmLocator).click();
  }
}
