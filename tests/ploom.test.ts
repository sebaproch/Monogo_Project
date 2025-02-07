import { test, expect, type Page, chromium, selectors } from "@playwright/test";
import { markets } from "../utils/market";
import { getMarketSelectors } from "../utils/functions";

for (const market in markets) {
  test(`Verifying adding product to cart in ${market} market`, async ({
    page,
  }) => {
    const locators = getMarketSelectors(`${market}`);
    // Visit the Ploom website: Ploom Website: Buy Heated Tobacco Products, Devices and Kits.
    await page.goto(locators.baseUrl);
    if (await page.locator(locators.cookiesAcceptanceLocator).isVisible()) {
      await page.locator(locators.cookiesAcceptanceLocator).click();
    }
    if (await page.locator(locators.ageVerificationLocator).isVisible()) {
      await page.locator(locators.ageVerificationLocator).click();
    }
    await page.waitForLoadState();

    // Click on "Shop".
    await page.locator(locators.shopButtonLocator).first().click();

    // Open the product page by SKU
    if (market == "UK") {
      await page.locator(locators.allProductsLocator).first().click();
      const linkPloomXAdvanced = await page
        .locator('//a[@class="aem-productTeaserComponent__link"]')
        .evaluateAll((elements) =>
          elements.map((element) => element.getAttribute("href"))
        )
        .then((elements) =>
          elements.filter((el) => el?.includes("ploom-x-advanced"))
        );
      expect(linkPloomXAdvanced[0]).toContain("ploom-x-advanced");
    }
    if (await page.locator(locators.productSkuLocator).isVisible()) {
      await page.locator(locators.productSkuLocator).click({ force: true });
    }

    // Add to cart
    if (market == "PL") {
      await page.locator(locators.buyNowLocator).first().click();
    }
    await page.locator(locators.addToCartLocator).click();

    // Check the basket count
    const cartQuantityLocator = await page.locator(
      locators.cartQuantityLocator
    );
    let basketCountValue = parseInt(await cartQuantityLocator.inputValue());
    expect(basketCountValue).toBeGreaterThan(0);

    // Open the basket
    await page.locator(locators.basketButtonLocator).click();

    // Check if the product is in the basket.
    const itemBasketLokator = await page.locator(locators.itemBasketLocator);
    const itemBasketText = await page.innerText(locators.itemBasketLocator);
    const itemBasketIntValue = parseInt(itemBasketText.split(" ")[0]);
    expect(itemBasketIntValue).toEqual(1);

    // Check if the basket count is updated correctly
    await page.locator(locators.quantityPlusLocator).last().click();
    await page.locator(locators.cartQuantityLocator);
    basketCountValue = parseInt(
      await page.inputValue(locators.cartQuantityLocator)
    );
    expect(basketCountValue).toEqual(2);
    await page.locator(locators.quantityMinusLocator).last().click();
    basketCountValue = parseInt(
      await page.inputValue(locators.cartQuantityLocator)
    );
    expect(basketCountValue).toEqual(1);

    // Remove the product from the cart
    await page.locator(locators.removeItemLocator).last().click();
    await page.locator(locators.confirmRemovingLocator).click();

    // Verify that the product is no longer in the cart
    const emptyCart = await page.locator(locators.emptyCartLocator);
    const emptyCartText = await page.innerText(locators.emptyCartLocator);
    if (market == "UK") {
      expect(emptyCartText).toEqual(
        "You have no items in your shopping cart at the moment."
      );
    } else {
      expect(emptyCartText).toEqual("W tym momencie Twój koszyk jest pusty.");
    }
  });
}
test(`Verifying if there are any broken links on the product page.`, async ({
  page,
}) => {
  const failures: any = [];
  await page.goto("https://www.ploom.co.uk/en");
  const selectors = {
    // All anchor tags
    allLinksSelector: "a",
  };
  const links = await page.locator(selectors.allLinksSelector);
  const linkCount = await links.count();
  console.log(`Found ${linkCount} links on the product page.`);

  // Check each link
  for (let i = 0; i < linkCount; i++) {
    const link = links.nth(i);
    const href = await link.getAttribute("href");
    let url;
    if (href && !href.includes("http")) {
      url = "https://www.ploom.co.uk" + href;
    } else {
      url = href;
    }
    if (url) {
      try {
        const response = await fetch(url);
        if (response.status !== 200) {
          failures.push(url);
        }
      } catch (error) {
        failures.push(error.message);
      }
    }
  }
  if (failures.length > 0) {
    console.log("Some links failed to load:");
    failures.forEach((failure) => console.log(failure));
  } else {
    console.log("All links loaded successfully!");
  }
  expect(failures.length).toBe(0);
});
test(`Verifying if there are any broken images on the product page.`, async ({
  page,
}) => {
  const failures: any = [];
  await page.goto("https://www.ploom.co.uk/en");
  const selectors = {
    // All image tags
    allImagesSelector: "img",
  };
  const images = await page.locator(selectors.allImagesSelector);
  const imageCount = await images.count();
  console.log(`Found ${imageCount} images on the product page.`);

  // Check each image
  for (let i = 0; i < imageCount; i++) {
    const image = images.nth(i);
    const src = await image.getAttribute("src");
    let url;
    if (src && !src.includes("http")) {
      url = "https://www.ploom.co.uk" + src;
    } else {
      url = src;
    }
    if (url) {
      try {
        const response = await fetch(url);
        if (response.status !== 200) {
          failures.push(url);
        }
      } catch (error) {
        failures.push(error.message);
      }
    }
  }
  if (failures.length > 0) {
    console.log("Some images failed to load:");
    failures.forEach((failure) => console.log(failure));
  } else {
    console.log("All images loaded successfully!");
  }
  expect(failures.length).toBe(0);
});
