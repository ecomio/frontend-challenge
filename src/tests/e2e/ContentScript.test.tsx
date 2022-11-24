import puppeteer from "puppeteer";



describe("index.tsx", () => {
  let browser:any;
  let page:any

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  jest.setTimeout(300000);

  it("contains the budget btn", async () => {
    await page.goto("http://localhost:3000/extension");
    await page.waitForSelector(".budget-btn");
    const text = await page.$eval(".budget-btn", (e:any) => e.textContent);
    expect(text.trim()).toContain(" Budget-to-Beat: 351 €");
  });

  afterAll(() => browser.close());
});