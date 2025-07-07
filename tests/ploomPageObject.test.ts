import { test, expect } from "@playwright/test";
import { markets } from "../utils/market";
import { getMarketSelectors } from "../utils/functions";
import { CookiesPage } from "../pages/CookiesPage";
import { MainPage } from "../pages/MainPage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";
import { ValidationPage } from "../pages/ValidationPage";

test.describe('Group1', ()=> {
for (const market in markets) {
  test(`Verifying adding product to cart in ${market} market`, async ({
    page,
  }) => {
    const locators = getMarketSelectors(market);
    const cookiesPage = new CookiesPage(page);
    const mainPage = new MainPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    await cookiesPage.navigate(locators.baseUrl);
    await page.waitForLoadState;
    await page.waitForTimeout(3000)
    await cookiesPage.acceptCookies(locators.cookiesAcceptanceLocator);
    
    if (await page.locator(locators.ageVerificationLocator).isVisible()) {
      await page.locator(locators.ageVerificationLocator).click();
    }

    await mainPage.goToShop(locators.shopButtonLocator);
    if (market == "UK") {
      await productPage.selectAllProducts(locators.allProductsLocator);
    }
    await page.waitForSelector(locators.productSkuLocator, { state: 'visible' });
    await productPage.selectProduct(locators.productSkuLocator);

    if (market == "PL") {
      await productPage.buyNow(locators.buyNowLocator);
    }
    await productPage.addToCart(locators.addToCartLocator);
    await cartPage.verifyCartQuantity(locators.cartQuantityLocator, 1);
    expect(
      await cartPage.verifyCartQuantity(locators.cartQuantityLocator, 1)
    ).toBeTruthy();
    await cartPage.openCart(locators.basketButtonLocator);
    expect(
      await cartPage.checkProductInBasket(locators.itemBasketLocator, 1)
    ).toEqual(1);
    await cartPage.updateCartQuantity(
      locators.quantityPlusLocator,
      locators.quantityMinusLocator,
      locators.cartQuantityLocator,
      2
    );
    expect(
      await cartPage.verifyCartQuantity(locators.cartQuantityLocator, 1)
    ).toBeTruthy();
    await page.waitForTimeout(2000)
    await cartPage.removeItem(
      locators.removeItemLocator,
      locators.confirmRemovingLocator
    );
    await page.waitForTimeout(2000)
    const emptyCartText = await page.innerText(locators.emptyCartLocator);
    expect(emptyCartText).toEqual(
      market === "UK"
        ? "You have no items in your shopping cart at the moment."
        : "W tym momencie Twój koszyk jest pusty."
    );
  });
}

test.describe('Group2', ()=> {
test("Verifying broken links", async ({ page }) => {
  const validationPage = new ValidationPage(page);
  await validationPage.navigate("https://www.ploom.co.uk/en");
  const failures = await validationPage.checkBrokenLinks("a");
  expect.soft(failures.length).toBe(0);
});
});

test.describe('Group3', ()=> {
test("Verifying broken images", async ({ page }) => {
  const validationPage = new ValidationPage(page);
  await validationPage.navigate("https://www.ploom.co.uk/en");
  const failures = await validationPage.checkBrokenImages("img");
  expect.soft(failures.length).toBe(0);
});
});
});
