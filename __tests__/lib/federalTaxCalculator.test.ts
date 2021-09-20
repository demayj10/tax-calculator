import {
  federalIncomeSingleTaxBracketsArray,
  federalIncomeSingleTaxBracketsObject,
} from '../../src/lib/taxBrackets/Federal-IncomeTax-Single';
import {
  ONE_HUNDRED_THOUSAND,
  ONE_MILLION,
  TEN_THOUSAND,
} from '../../src/lib/taxBrackets/constants';
import { TaxBracket, TaxPayload } from '../../src/types';
import {
  calculateFederalIncomeTax,
  calculateMedicareTax,
  calculateSocialSecurityTax,
  findFederalIncomeTaxBracket, findFederalIncomeTaxBracketList,
} from '../../src/lib/federalTaxCalculator';
import { MaritalStatus } from '../../src/lib/data/maritalStatus';
import {
  federalIncomeTaxMarriedJointlyArray,
  federalIncomeTaxMarriedSeparateArray,
} from '../../src/lib/taxBrackets/Federal-IncomeTax-Married';

describe('test findFederalIncomeTaxBracketList', () => {
  test('should return expected array for "Single"', () => {
    const maritalStatus = MaritalStatus.Single;
    const expectedFederalIncomeTaxBracketList: TaxBracket[] = federalIncomeSingleTaxBracketsArray;

    const actualFederalIncomeTaxBracketList: TaxBracket[] = findFederalIncomeTaxBracketList(
      maritalStatus,
    );
    expect(actualFederalIncomeTaxBracketList).toEqual(expectedFederalIncomeTaxBracketList);
  });

  test('should return expected array for "Married Jointly"', () => {
    const maritalStatus = MaritalStatus.MarriedJointly;
    const expectedFederalIncomeTaxBracketList: TaxBracket[] = federalIncomeTaxMarriedJointlyArray;

    const actualFederalIncomeTaxBracketList: TaxBracket[] = findFederalIncomeTaxBracketList(
      maritalStatus,
    );
    expect(actualFederalIncomeTaxBracketList).toEqual(expectedFederalIncomeTaxBracketList);
  });

  test('should return expected array for "Married Separately"', () => {
    const maritalStatus = MaritalStatus.MarriedSeparately;
    const expectedFederalIncomeTaxBracketList: TaxBracket[] = federalIncomeTaxMarriedSeparateArray;

    const actualFederalIncomeTaxBracketList: TaxBracket[] = findFederalIncomeTaxBracketList(
      maritalStatus,
    );
    expect(actualFederalIncomeTaxBracketList).toEqual(expectedFederalIncomeTaxBracketList);
  });

  test('should return expected empty array for "Default"', () => {
    const maritalStatus = MaritalStatus.DefaultForTesting;
    const expectedFederalIncomeTaxBracketList: TaxBracket[] = [];

    const actualFederalIncomeTaxBracketList: TaxBracket[] = findFederalIncomeTaxBracketList(
      maritalStatus,
    );
    expect(actualFederalIncomeTaxBracketList).toEqual(expectedFederalIncomeTaxBracketList);
  });
});

describe('test findFederalIncomeTaxBracket', () => {
  const expectedTaxBracketList: TaxBracket[] = federalIncomeSingleTaxBracketsArray;
  test('should find the correct tax bracket - $0', () => {
    const annualIncome = 0;

    const actualResponse = findFederalIncomeTaxBracket(annualIncome, expectedTaxBracketList);
    expect(actualResponse).toEqual(federalIncomeSingleTaxBracketsObject.firstBracket);
  });

  test('should find the correct tax bracket - $10,000', () => {
    const annualIncome: number = TEN_THOUSAND;

    const actualResponse = findFederalIncomeTaxBracket(annualIncome, expectedTaxBracketList);
    expect(actualResponse).toEqual(federalIncomeSingleTaxBracketsObject.secondBracket);
  });

  test('should find the correct tax bracket - $100,000', () => {
    const annualIncome: number = ONE_HUNDRED_THOUSAND;

    const actualResponse = findFederalIncomeTaxBracket(annualIncome, expectedTaxBracketList);
    expect(actualResponse).toEqual(federalIncomeSingleTaxBracketsObject.fourthBracket);
  });

  test('should find the correct tax bracket - $1,000,000', () => {
    const annualIncome: number = ONE_MILLION;

    const actualResponse = findFederalIncomeTaxBracket(annualIncome, expectedTaxBracketList);
    expect(actualResponse).toEqual(federalIncomeSingleTaxBracketsObject.seventhBracket);
  });
});

describe('test calculateFederalIncomeTax', () => {
  const expectedMaritalStatus = MaritalStatus.Single;
  test('should find the total tax paid for income - $0', () => {
    const annualIncome = 0;

    const expectedResponse: TaxPayload = {
      taxRate: 0.10,
      taxAmount: 0,
    };
    const actualResponse: TaxPayload = calculateFederalIncomeTax(
      annualIncome,
      expectedMaritalStatus,
    );

    expect(actualResponse).toEqual(expectedResponse);
  });

  test('should find the total tax paid for income - $10,000', () => {
    const annualIncome: number = TEN_THOUSAND;

    const expectedResponse: TaxPayload = {
      taxRate: 0.12,
      taxAmount: 1002.38,
    };
    const actualResponse: TaxPayload = calculateFederalIncomeTax(
      annualIncome,
      expectedMaritalStatus,
    );

    expect(actualResponse).toEqual(expectedResponse);
  });

  test('should find the total tax paid for income - $100,000', () => {
    const annualIncome: number = ONE_HUNDRED_THOUSAND;

    const expectedResponse: TaxPayload = {
      taxRate: 0.24,
      taxAmount: 18079.26,
    };
    const actualResponse: TaxPayload = calculateFederalIncomeTax(
      annualIncome,
      expectedMaritalStatus,
    );

    expect(actualResponse).toEqual(expectedResponse);
  });

  test('should find the total tax paid for income - $1,000,000', () => {
    const annualIncome: number = ONE_MILLION;

    const expectedResponse: TaxPayload = {
      taxRate: 0.37,
      taxAmount: 334426.63,
    };
    const actualResponse: TaxPayload = calculateFederalIncomeTax(
      annualIncome,
      expectedMaritalStatus,
    );

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
