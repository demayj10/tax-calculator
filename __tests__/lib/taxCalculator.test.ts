import { generateTaxReport } from '../../src/lib/taxCalculator';
import { TaxBreakdown } from '../../src/types';
import {
  MARRIED_SEPARATELY_STANDARD_DEDUCTION_2022,
  MARRIED_STANDARD_DEDUCTION_2022,
  MEDICARE_TAX_RATE,
  ONE_HUNDRED_THOUSAND,
  SOCIAL_SECURITY_TAX_RATE,
} from '../../src/lib/taxBrackets/constants';
import { SupportedStates } from '../../src/lib/data/supportedStates';
import { MaritalStatus } from '../../src/lib/data/maritalStatus';
import {
  federalFirstBracket,
} from '../../src/lib/taxBrackets/Federal-IncomeTax-Single';
import { ohioIncomeTaxBracketsObject } from '../../src/lib/taxBrackets/stateTaxes/OH-IncomeTax';
import {
  federalIncomeTaxMarriedJointlyObject,
  federalIncomeTaxMarriedSeparateObject,
} from '../../src/lib/taxBrackets/Federal-IncomeTax-Married';

describe('test generateTaxReport', () => {
  test('should generate the report for income - $0 in a state with no income tax', () => {
    const state = SupportedStates.Washington;
    const maritalStatus = MaritalStatus.Single;
    const annualIncome = 0;
    const expectedFederalIncomeTaxRate = federalFirstBracket.taxRate;
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

  test('should generate the report for income - $100,000 in a state with no income tax - married', () => {
    const state = SupportedStates.Washington;
    const maritalStatus = MaritalStatus.MarriedJointly;
    const annualIncome: number = ONE_HUNDRED_THOUSAND;
    const adjustedAnnualIncome = annualIncome - MARRIED_STANDARD_DEDUCTION_2022;
    const {
      minimumToQualify: expectedBracketMinimumToQualify,
      taxRate: expectedBracketTaxRate,
      taxTotalToThisBracket: expectedBracketTaxTotalToThisBracket,
    } = federalIncomeTaxMarriedJointlyObject.secondBracket;

    const taxAmountInTopBracket = (adjustedAnnualIncome - expectedBracketMinimumToQualify) * expectedBracketTaxRate;
    const expectedFederalIncomeTaxAmount = taxAmountInTopBracket + expectedBracketTaxTotalToThisBracket;

    const expectedSocialSecurityTax: number = adjustedAnnualIncome * SOCIAL_SECURITY_TAX_RATE;
    const expectedMedicareTax: number = adjustedAnnualIncome * MEDICARE_TAX_RATE;
    const expectedTotalFederalTaxAmount: number = expectedFederalIncomeTaxAmount
                                                  + expectedSocialSecurityTax
                                                  + expectedMedicareTax;
    const expectedStateIncomeTaxRate = 0;
    const expectedStateIncomeTaxAmount = 0;
    const expectedTotalStateTaxAmount: number = expectedStateIncomeTaxAmount;
    const expectedTotalTaxes: number = expectedTotalFederalTaxAmount + expectedTotalStateTaxAmount;
    const expectedNetAnnualIncome: number = annualIncome - expectedTotalTaxes;

    const expectedReport: TaxBreakdown = {
      federal: {
        federalIncomeTaxRate: expectedBracketTaxRate,
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

  test('should generate the report for income - $100,000 in a state with income tax - married, separately', () => {
    const state = SupportedStates.Ohio;
    const maritalStatus = MaritalStatus.MarriedSeparately;
    const annualIncome: number = ONE_HUNDRED_THOUSAND;
    const adjustedAnnualIncome = annualIncome - MARRIED_SEPARATELY_STANDARD_DEDUCTION_2022;
    const {
      minimumToQualify: expectedFederalBracketMinimumToQualify,
      taxRate: expectedFederalBracketTaxRate,
      taxTotalToThisBracket: expectedFederalBracketTaxTotalToThisBracket,
    } = federalIncomeTaxMarriedSeparateObject.fourthBracket;

    const federalTaxAmountInTopBracket = (
      adjustedAnnualIncome - expectedFederalBracketMinimumToQualify
    ) * expectedFederalBracketTaxRate;
    const expectedFederalIncomeTaxAmount = federalTaxAmountInTopBracket + expectedFederalBracketTaxTotalToThisBracket;

    const expectedSocialSecurityTax: number = adjustedAnnualIncome * SOCIAL_SECURITY_TAX_RATE;
    const expectedMedicareTax: number = adjustedAnnualIncome * MEDICARE_TAX_RATE;
    const expectedTotalFederalTaxAmount: number = expectedFederalIncomeTaxAmount
                                                  + expectedSocialSecurityTax
                                                  + expectedMedicareTax;

    const {
      minimumToQualify: expectedStateBracketMinimumToQualify,
      taxRate: expectedStateBracketTaxRate,
      taxTotalToThisBracket: expectedStateBracketTaxTotalToThisBracket,
    } = ohioIncomeTaxBracketsObject.seventhBracket;

    const stateTaxAmountInTopBracket = (
      adjustedAnnualIncome - expectedStateBracketMinimumToQualify
    ) * expectedStateBracketTaxRate;
    const expectedTotalStateIncomeTaxAmount = stateTaxAmountInTopBracket + expectedStateBracketTaxTotalToThisBracket;

    const expectedTotalTaxes: number = expectedTotalFederalTaxAmount + expectedTotalStateIncomeTaxAmount;
    const expectedNetAnnualIncome: number = annualIncome - expectedTotalTaxes;

    const expectedReport: TaxBreakdown = {
      federal: {
        federalIncomeTaxRate: expectedFederalBracketTaxRate,
        federalIncomeTaxAmount: expectedFederalIncomeTaxAmount,
        socialSecurityTaxRate: SOCIAL_SECURITY_TAX_RATE,
        socialSecurityTaxAmount: expectedSocialSecurityTax,
        medicareTaxRate: MEDICARE_TAX_RATE,
        medicareTaxAmount: expectedMedicareTax,
        totalFederalTaxAmount: expectedTotalFederalTaxAmount,
      },
      state: {
        stateIncomeTaxRate: expectedStateBracketTaxRate,
        stateIncomeTaxAmount: expectedTotalStateIncomeTaxAmount,
        totalStateTaxAmount: expectedTotalStateIncomeTaxAmount,
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
