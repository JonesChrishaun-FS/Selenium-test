const { Builder, By, Key, until } = require("selenium-webdriver");

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

  it("Test Email input and Email response", async () => {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("http://localhost:3000/contact");

    let textbox = await driver.findElement(By.id("formInput"));
    let btn = await driver.findElement(By.id("formSubmit"));

    await textbox.sendKeys("Chrishaun Jones");
    await btn.click();

    let message = await driver.findElement(By.id("formMessage"));
    let value = await message.getText();
    assert.equal("More info coming to Chrishaun Jones", value);

    await driver.quit();
  });
});
