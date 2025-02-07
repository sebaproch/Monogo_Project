export const markets = {
    UK: {
      baseUrl: "https://www.ploom.co.uk/en",
      cookiesAcceptanceLocator: "button#onetrust-accept-btn-handler",
      ageVerificationLocator: '//span[contains(text(), " Yes, discover more ")]',
      shopButtonLocator: '//a[@href="/en/shop"]',
      allProductsLocator: '//span[@class="aem-button__text"]',
      productSkuLocator: '//div[@data-sku="ploom-x-advanced"]',
      addToCartLocator: '//button[@data-testid="pdpAddToProduct"]',
      cartQuantityLocator: '//input[@class="QuantityInput-module-input-7n5dx"]',
      basketButtonLocator: '//button[@data-testid="miniCartCheckoutButton"]',
      itemBasketLocator: '//strong[@data-testid="page-layout-subtitle"]',
      quantityPlusLocator: '//button[@data-testid="quantityPlus"]',
      quantityMinusLocator: '//button[@data-testid="quantityMinus"]',
      removeItemLocator: '//span[text()="Remove Item"]',
      confirmRemovingLocator:
        '//button[@data-testid="remove-item-submit-button"]',
      emptyCartLocator:
        '//*[contains(text(), "You have no items in your shopping cart at the moment.")]',
    },
    PL: {
      baseUrl: "https://www.ploom.pl/pl",
      cookiesAcceptanceLocator: "button#onetrust-accept-btn-handler",
      ageVerificationLocator: '//span[contains(text(), " Potwierdź ")]',
      shopButtonLocator: '//a[@href="/pl/sklep"]',
      allProductsLocator: '//span[@class="aem-button__text"]',
      productSkuLocator: '//span[contains(text(), "Ploom X Advanced")]',
      buyNowLocator: '//span[contains(text(), "Kup teraz")]',
      addToCartLocator: '//button[@data-testid="pdpAddToProduct"]',
      cartQuantityLocator: '//input[@class="QuantityInput-module-input-7n5dx"]',
      basketButtonLocator: '//button[@data-testid="miniCartCheckoutButton"]',
      itemBasketLocator: '//*[@id="aem-checkout"]/div[2]/div/div[2]/span',
      quantityPlusLocator: '//button[@data-testid="quantityPlus"]',
      quantityMinusLocator: '//button[@data-testid="quantityMinus"]',
      removeItemLocator: '//span[text()="Usuń produkt"]',
      confirmRemovingLocator:
        '//button[@data-testid="remove-item-submit-button"]',
      emptyCartLocator:
        '//*[contains(text(), "W tym momencie Twój koszyk jest pusty.")]',
    },
  };

  