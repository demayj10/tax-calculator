/* eslint-disable jest/no-done-callback */
import { test, expect } from '@playwright/test';

test('basic test', async ({ page, baseURL }) => {
  await page.goto(baseURL);
  const title = page.locator('#submit');
  await expect(title).toHaveText('Submit');
});
