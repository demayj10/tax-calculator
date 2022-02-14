/* eslint-disable max-len */
/* eslint-disable jest/no-done-callback */
import { test, expect } from '@playwright/test';
import { SupportedStates } from '../src/lib/data/supportedStates';
import { MaritalStatus } from '../src/lib/data/maritalStatus';

test('Salary Income Tax Results', async ({ page, baseURL }) => {
  await page.goto(baseURL);

  const expectedGrossAnnualIncome = '100000';
  const expectedAnnualIncomeValue = '$100,000.00';
  const submitButton = page.locator('#submit');

  expect(submitButton).toBeDisabled();

  await page.fill('#grossAnnualIncome', expectedGrossAnnualIncome);
  await page.selectOption('#selectedState', SupportedStates.Alabama);
  await page.selectOption('#maritalStatus', MaritalStatus.Single);

  expect(submitButton).not.toBeDisabled();
  submitButton.click();
  expect(submitButton).toBeDisabled();

  const grossAnnualIncome = page.locator(
    '#resultData > div:nth-child(1) > div > div:nth-child(1) > div > h5.MuiTypography-root.MuiTypography-h5.dataItemValue.css-bezmlo-MuiTypography-root',
  );
  const federalTaxResults = page.locator('#federalResultDataContainer > div.MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded.MuiAccordionSummary-gutters.accordion-summary.css-t8r6u5-MuiButtonBase-root-MuiAccordionSummary-root > div > h5.MuiTypography-root.MuiTypography-h5.MuiTypography-alignRight.css-1rzgitx-MuiTypography-root');

  const totalTaxResults = page.locator('#resultData > div:nth-child(1) > div > div:nth-child(4) > div > h5.MuiTypography-root.MuiTypography-h5.dataItemValue.css-bezmlo-MuiTypography-root');

  const netAnnualIncome = page.locator('#resultData > div:nth-child(1) > div > div:nth-child(5) > div > h5.MuiTypography-root.MuiTypography-h5.dataItemValue.css-bezmlo-MuiTypography-root');

  await expect(grossAnnualIncome).toHaveText(expectedAnnualIncomeValue);
  expect(federalTaxResults).toBeDefined();
  expect(totalTaxResults).toBeDefined();
  expect(netAnnualIncome).toBeDefined();
});
