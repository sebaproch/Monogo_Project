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
      //ageVerificationLocator: '//span[contains(text(), " Potwierdź ")]',
      ageVerificationLocator: '//button[@data-testid="confirm-button"]',
      shopButtonLocator: '//a[@href="/pl/sklep"]',
      allProductsLocator: '//span[@class="aem-button__text"]',
      // productSkuLocator: '//span[contains(text(), "Ploom X Advanced")]',
      productSkuLocator: '//span[normalize-space()="Ploom X Advanced"]',
      buyNowLocator: '(//a[contains(@class,"Button-module-cta-2FuVM Button-module-medium-Ifuch Button-module-primary-1_Q50 light-theme")])[15]',
      //buyNowLocator: '(//a)[61]',
      //buyNowLocator: 'a/span[contains(text(), "Kup teraz")]',
      //buyNowLocator: '(//span[contains(text(),"Kup teraz")])[18]',
      addToCartLocator: '//button[@data-testid="pdpAddToProduct"]',
      cartQuantityLocator: '//input[@class="QuantityInput-module-input-7n5dx"]',
      basketButtonLocator: '//button[@data-testid="miniCartCheckoutButton"]',
      //itemBasketLocator: '//*[@id="aem-checkout"]/div[2]/div/div[2]/span',
      //itemBasketLocator: '//div[@class="RegularItem-module-product-jRsvg"]//div[@class="ProductMiniature-module-name-iyA8t"]//a',
      itemBasketLocator: '//div[@class="RegularItem-module-quantity-KBnhq"]//input',
      quantityPlusLocator: '//button[@data-testid="quantityPlus"]',
      quantityMinusLocator: '//button[@data-testid="quantityMinus"]',
      removeItemLocator: '//span[text()="Usuń produkt"]',
      confirmRemovingLocator:
        '//button[@data-testid="remove-item-submit-button"]',
      emptyCartLocator:
        '//*[contains(text(), "W tym momencie Twój koszyk jest pusty.")]',
    },
  };

  