import { federalIncomeTaxBrackets } from '../../src/lib/taxBrackets/Federal-IncomeTax';
import {
  ONE_HUNDRED_THOUSAND,
  ONE_MILLION,
  TEN_THOUSAND,
} from '../../src/lib/taxBrackets/constants';
import { TaxPayload } from '../../src/types';
import {
  calculateFederalIncomeTax,
  calculateMedicareTax,
  calculateSocialSecurityTax,
  findFederalIncomeTaxBracket,
} from '../../src/lib/federalTaxCalculator';

describe('test findFederalIncomeTaxBracket', () => {
  test('should find the correct tax bracket - $0', () => {
    const annualIncome = 0;

    const actualResponse = findFederalIncomeTaxBracket(annualIncome);
    expect(actualResponse).toEqual(federalIncomeTaxBrackets.firstBracket);
  });

  test('should find the correct tax bracket - $10,000', () => {
    const annualIncome: number = TEN_THOUSAND;

    const actualResponse = findFederalIncomeTaxBracket(annualIncome);
    expect(actualResponse).toEqual(federalIncomeTaxBrackets.secondBracket);
  });

  test('should find the correct tax bracket - $100,000', () => {
    const annualIncome: number = ONE_HUNDRED_THOUSAND;

    const actualResponse = findFederalIncomeTaxBracket(annualIncome);
    expect(actualResponse).toEqual(federalIncomeTaxBrackets.fourthBracket);
  });

  test('should find the correct tax bracket - $1,000,000', () => {
    const annualIncome: number = ONE_MILLION;

    const actualResponse = findFederalIncomeTaxBracket(annualIncome);
    expect(actualResponse).toEqual(federalIncomeTaxBrackets.seventhBracket);
  });
});

describe('test calculateFederalIncomeTax', () => {
  test('should find the total tax paid for income - $0', () => {
    const annualIncome = 0;

    const expectedResponse: TaxPayload = {
      taxRate: 0.10,
      taxAmount: 0,
    };
    const actualResponse: TaxPayload = calculateFederalIncomeTax(annualIncome);

    expect(actualResponse).toEqual(expectedResponse);
  });

  test('should find the total tax paid for income - $10,000', () => {
    const annualIncome: number = TEN_THOUSAND;

    const expectedResponse: TaxPayload = {
      taxRate: 0.12,
      taxAmount: 1002.38,
    };
    const actualResponse: TaxPayload = calculateFederalIncomeTax(annualIncome);

    expect(actualResponse).toEqual(expectedResponse);
  });

  test('should find the total tax paid for income - $100,000', () => {
    const annualIncome: number = ONE_HUNDRED_THOUSAND;

    const expectedResponse: TaxPayload = {
      taxRate: 0.24,
      taxAmount: 18079.26,
    };
    const actualResponse: TaxPayload = calculateFederalIncomeTax(annualIncome);

    expect(actualResponse).toEqual(expectedResponse);
  });

  test('should find the total tax paid for income - $1,000,000', () => {
    const annualIncome: number = ONE_MILLION;

    const expectedResponse: TaxPayload = {
      taxRate: 0.37,
      taxAmount: 334426.63,
    };
    const actualResponse: TaxPayload = calculateFederalIncomeTax(annualIncome);

    expect(actualResponse).toEqual(expectedResponse);
  });
});

describe('test calculateSocialSecurityTax', () => {
  test('should find the total social security tax to be paid for income - $0', () => {
    const annualIncome = 0;

    const expectedResponse = 0;
    const actualResponse: number = calculateSocialSecurityTax(annualIncome);

    expect(actualResponse).toEqual(expectedResponse);
  });

  test('should find the total social security tax to be paid for income - $100,000', () => {
    const annualIncome: number = ONE_HUNDRED_THOUSAND;

    const expectedResponse = 6200;
    const actualResponse: number = calculateSocialSecurityTax(annualIncome);

    expect(actualResponse).toEqual(expectedResponse);
  });

  test('should find the total social security tax to be paid for income - $1,000,000', () => {
    const annualIncome: number = ONE_MILLION;

    const expectedResponse = 8853.6;
    const actualResponse: number = calculateSocialSecurityTax(annualIncome);

    expect(actualResponse).toEqual(expectedResponse);
  });
});

describe('test calculateMedicareTax', () => {
  test('should find the total medicare tax to be paid for income - $0', () => {
    const annualIncome = 0;

    const expectedResponse = 0;
    const actualResponse: number = calculateMedicareTax(annualIncome);

    expect(actualResponse).toEqual(expectedResponse);
  });

  test('should find the total medicare tax to be paid for income - $100,000', () => {
    const annualIncome: number = ONE_HUNDRED_THOUSAND;

    const expectedResponse = 1450;
    const actualResponse: number = calculateMedicareTax(annualIncome);

    expect(actualResponse).toEqual(expectedResponse);
  });

  test('should find the total medicare tax to be paid for income - $1,000,000', () => {
    const annualIncome: number = ONE_MILLION;

    const expectedResponse = 14500;
    const actualResponse: number = calculateMedicareTax(annualIncome);

    expect(actualResponse).toEqual(expectedResponse);
  });
});
