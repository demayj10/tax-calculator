/* eslint-disable max-len */
/* eslint-disable jest/no-done-callback */
import { test, expect } from '@playwright/test';
import { SupportedStates } from '../src/lib/data/supportedStates';
import { MaritalStatus } from '../src/lib/data/maritalStatus';

test('Hourly Income Tax Results', async ({ page, baseURL }) => {
  await page.goto(baseURL);

  const hourlyPay = '45';
  const hoursWorked = '40';
  const overtimeRate = '55';
  const overtimeHoursWorked = '20';
  const submitButton = page.locator('#submit');

  expect(submitButton).toBeDisabled();

  // Toggle to Hourly Input fields
  page.click('#input-items > div:nth-child(1) > fieldset > div > label:nth-child(2) > span.MuiRadio-root.MuiRadio-colorPrimary.MuiButtonBase-root.MuiRadio-root.MuiRadio-colorPrimary.PrivateSwitchBase-root.css-vqmohf-MuiButtonBase-root-MuiRadio-root > input');

  expect('#hourlyRate').toBeDefined();

  await page.fill('#hourlyRate', hourlyPay);
  await page.fill('#averageHoursWorked', hoursWorked);
  await page.fill('#overtimeRate', overtimeRate);
  await page.fill('#averageOvertimeHoursWorked', overtimeHoursWorked);
  await page.selectOption('#selectedState', SupportedStates.Alabama);
  await page.selectOption('#maritalStatus', MaritalStatus.Single);

  expect(submitButton).not.toBeDisabled();
  submitButton.click();
  await expect(submitButton).toBeDisabled();

  const grossAnnualIncome = page.locator(
    '#resultData > div:nth-child(1) > div > div:nth-child(1) > div > h5.MuiTypography-root.MuiTypography-h5.dataItemValue.css-bezmlo-MuiTypography-root',
  );
  const federalTaxResults = page.locator('#federalResultDataContainer > div.MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded.MuiAccordionSummary-gutters.accordion-summary.css-t8r6u5-MuiButtonBase-root-MuiAccordionSummary-root > div > h5.MuiTypography-root.MuiTypography-h5.MuiTypography-alignRight.css-1rzgitx-MuiTypography-root');

  const totalTaxResults = page.locator('#resultData > div:nth-child(1) > div > div:nth-child(4) > div > h5.MuiTypography-root.MuiTypography-h5.dataItemValue.css-bezmlo-MuiTypography-root');

  const netAnnualIncome = page.locator('#resultData > div:nth-child(1) > div > div:nth-child(5) > div > h5.MuiTypography-root.MuiTypography-h5.dataItemValue.css-bezmlo-MuiTypography-root');

  expect(grossAnnualIncome).toBeDefined();
  expect(federalTaxResults).toBeDefined();
  expect(totalTaxResults).toBeDefined();
  expect(netAnnualIncome).toBeDefined();
});
