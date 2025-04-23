const { PAGE_URL } = process.env;

const countSelector = '#click-count';

describe('Click Counter', () => {
  beforeAll(async () => {
    await page.goto(PAGE_URL, { waitUntil: 'networkidle2' });
  });

  it('Should be titled "Click Counter"', async () => {
    await expect(page.title()).resolves.toMatch('Click Counter');
  });

  it('Should increment count on every click', async () => {
    for (let index = 0; index < 10; index += 1) {
      // eslint-disable-next-line no-await-in-loop
      await page.click('[name="click-increment"]');
    }

    await page.waitForSelector(countSelector);
    const element = await page.$(countSelector);
    const textValue = await page.evaluate((searchElement) => searchElement.textContent, element);

    expect(textValue).toEqual('10');
  });
  // added be me (Marten)
  it('Should reset count to 0 with reset button', async () => {
    await page.click('[name="click-reset"]');
    await page.waitForSelector(countSelector);
    const element = await page.$(countSelector);
    const textValue = await page.evaluate((searchElement) => searchElement.textContent, element);
    expect(textValue).toEqual('0');
  });
});
