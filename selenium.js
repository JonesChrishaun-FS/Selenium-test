const { Builder, By } = require("selenium-webdriver");

const assert = require("assert");

describe("Email site tests", () => {
  it("Open homepage - and check title is 'Home'", async () => {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("http://localhost:3000/");

    let title = await driver.getTitle();
    assert.equal("Home", title);

    await driver.quit();
  });

  it("Open contact page and check if title is 'Contact Us'", async () => {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("http://localhost:3000/");
    const element = await driver.findElement(By.id("contactLink"));

    await element.click();

    let title = await driver.getTitle();
    assert.equal("Contact Us", title);

    await driver.quit();
  });
});
