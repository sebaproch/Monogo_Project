import { BasePage } from "./BasePage";
export class ValidationPage extends BasePage {
    async checkBrokenLinks(selector: string) {
      const failures: any = [];
      const links = await this.page.locator(selector);
      const linkCount = await links.count();
  
      for (let i = 0; i < linkCount; i++) {
        const link = links.nth(i);
        const href = await link.getAttribute("href");
        let url = href && !href.includes("http") ? "https://www.ploom.co.uk" + href : href;
        if (url) {
          try {
            const response = await fetch(url);
            if (response.status !== 200) failures.push(url);
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
      return failures;
    }
  
    async checkBrokenImages(selector: string) {
      const failures: any = [];
      const images = await this.page.locator(selector);
      const imageCount = await images.count();
  
      for (let i = 0; i < imageCount; i++) {
        const image = images.nth(i);
        const src = await image.getAttribute("src");
        let url = src && !src.includes("http") ? "https://www.ploom.co.uk" + src : src;
        if (url) {
          try {
            const response = await fetch(url);
            if (response.status !== 200) failures.push(url);
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
      return failures;
    }
  }