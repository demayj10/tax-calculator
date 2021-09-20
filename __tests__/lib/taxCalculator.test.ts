import { generateTaxReport } from '../../src/lib/taxCalculator';
import { TaxBreakdown } from '../../src/types';
import {
  MEDICARE_TAX_RATE,
  ONE_HUNDRED_THOUSAND,
  SOCIAL_SECURITY_TAX_RATE,
} from '../../src/lib/taxBrackets/constants';
import { SupportedStates } from '../../src/lib/data/supportedStates';
import {MaritalStatus} from "../../src/lib/data/maritalStatus";

describe('test generateTaxReport', () => {
  test('should generate the report for income - $0 in a state with no income tax', () => {
    const state = SupportedStates.Washington;
    const maritalStatus = MaritalStatus.Single;
    const annualIncome = 0;
    const expectedFederalIncomeTaxRate = 0.10;
    const expectedFederalIncomeTaxAmount = 0;
    const expectedSocialSecurityTaxAmount = 0;
    const expectedMedicareTaxAmount = 0;
    const expectedTotalFederalTaxAmount = expectedFederalIncomeTaxAmount
                                          + expectedSocialSecurityTaxAmount
                                          + expectedMedicareTaxAmount;
    const expectedStateIncomeTaxRate = 0;
    const expectedStateIncomeTaxAmount = 0;
    const expectedReport: TaxBreakdown = {
      federal: {
        federalIncomeTaxRate: expectedFederalIncomeTaxRate,
        federalIncomeTaxAmount: expectedFederalIncomeTaxAmount,
        socialSecurityTaxRate: SOCIAL_SECURITY_TAX_RATE,
        socialSecurityTaxAmount: expectedSocialSecurityTaxAmount,
        medicareTaxRate: MEDICARE_TAX_RATE,
        medicareTaxAmount: expectedMedicareTaxAmount,
        totalFederalTaxAmount: expectedTotalFederalTaxAmount,
      },
      state: {
        stateIncomeTaxRate: expectedStateIncomeTaxRate,
        stateIncomeTaxAmount: expectedStateIncomeTaxAmount,
        totalStateTaxAmount: expectedStateIncomeTaxAmount,
        hasStateIncomeTax: false,
      },
      grossAnnualIncome: annualIncome,
      totalTaxes: 0,
      netAnnualIncome: 0,
    };
    const actualReport: TaxBreakdown = generateTaxReport(state, annualIncome, maritalStatus);

    expect(actualReport).toEqual(expectedReport);
  });

  test('should generate the report for income - $100,000 in a state with no income tax', () => {
    const state = SupportedStates.Washington;
    const maritalStatus = MaritalStatus.Single;
    const annualIncome: number = ONE_HUNDRED_THOUSAND;
    const expectedFederalIncomeTaxRate = 0.24;
    const expectedFederalIncomeTaxAmount = 18079.26;
    const expectedSocialSecurityTax = 6200;
    const expectedMedicareTax = 1450;
    const expectedTotalFederalTaxAmount: number = expectedFederalIncomeTaxAmount
                                                  + expectedSocialSecurityTax
                                                  + expectedMedicareTax;
    const expectedStateIncomeTaxRate = 0;
    const expectedStateIncomeTaxAmount = 0;
    const expectedTotalStateTaxAmount = expectedStateIncomeTaxAmount;
    const expectedTotalTaxes: number = expectedTotalFederalTaxAmount + expectedTotalStateTaxAmount;
    const expectedNetAnnualIncome: number = annualIncome - expectedTotalTaxes;

    const expectedReport: TaxBreakdown = {
      federal: {
        federalIncomeTaxRate: expectedFederalIncomeTaxRate,
        federalIncomeTaxAmount: expectedFederalIncomeTaxAmount,
        socialSecurityTaxRate: SOCIAL_SECURITY_TAX_RATE,
        socialSecurityTaxAmount: expectedSocialSecurityTax,
        medicareTaxRate: MEDICARE_TAX_RATE,
        medicareTaxAmount: expectedMedicareTax,
        totalFederalTaxAmount: expectedTotalFederalTaxAmount,
      },
      state: {
        stateIncomeTaxRate: expectedStateIncomeTaxRate,
        stateIncomeTaxAmount: expectedStateIncomeTaxAmount,
        totalStateTaxAmount: expectedTotalStateTaxAmount,
        hasStateIncomeTax: false,
      },
      grossAnnualIncome: annualIncome,
      totalTaxes: expectedTotalTaxes,
      netAnnualIncome: expectedNetAnnualIncome,
    };
    const actualReport: TaxBreakdown = generateTaxReport(state, annualIncome, maritalStatus);

    expect(actualReport).toEqual(expectedReport);
  });

  test('should generate the report for income - $100,000 in a state with income tax', () => {
    const state = SupportedStates.Ohio;
    const maritalStatus = MaritalStatus.Single;
    const annualIncome: number = ONE_HUNDRED_THOUSAND;
    const expectedFederalIncomeTaxRate = 0.24;
    const expectedFederalIncomeTaxAmount = 18079.26;
    const expectedSocialSecurityTax = 6200;
    const expectedMedicareTax = 1450;
    const expectedTotalFederalTaxAmount: number = expectedFederalIncomeTaxAmount
                                                  + expectedSocialSecurityTax
                                                  + expectedMedicareTax;
    const expectedStateIncomeTaxRate = 0.03960;
    const expectedTotalStateIncomeTaxAmount = 1846.1;
    const expectedTotalStateTaxAmount = expectedTotalStateIncomeTaxAmount;
    const expectedTotalTaxes: number = expectedTotalFederalTaxAmount + expectedTotalStateTaxAmount;
    const expectedNetAnnualIncome: number = annualIncome - expectedTotalTaxes;

    const expectedReport: TaxBreakdown = {
      federal: {
        federalIncomeTaxRate: expectedFederalIncomeTaxRate,
        federalIncomeTaxAmount: expectedFederalIncomeTaxAmount,
        socialSecurityTaxRate: SOCIAL_SECURITY_TAX_RATE,
        socialSecurityTaxAmount: expectedSocialSecurityTax,
        medicareTaxRate: MEDICARE_TAX_RATE,
        medicareTaxAmount: expectedMedicareTax,
        totalFederalTaxAmount: expectedTotalFederalTaxAmount,
      },
      state: {
        stateIncomeTaxRate: expectedStateIncomeTaxRate,
        stateIncomeTaxAmount: expectedTotalStateIncomeTaxAmount,
        totalStateTaxAmount: expectedTotalStateTaxAmount,
        hasStateIncomeTax: true,
      },
      grossAnnualIncome: annualIncome,
      totalTaxes: expectedTotalTaxes,
      netAnnualIncome: expectedNetAnnualIncome,
    };
    const actualReport: TaxBreakdown = generateTaxReport(state, annualIncome, maritalStatus);

    expect(actualReport).toEqual(expectedReport);
  });
});
