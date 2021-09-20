import {
  FederalTaxBreakdown,
  TaxBracket,
  TaxPayload,
} from '../types';
import {
  MEDICARE_TAX_RATE,
  SOCIAL_SECURITY_TAX_RATE,
  SOCIAL_SECURITY_TAX_WAGE_LIMIT,
} from './taxBrackets/constants';
import {
  federalFirstBracket,
  federalIncomeSingleTaxBracketsArray,
} from './taxBrackets/Federal-IncomeTax-Single';
import { MaritalStatus } from './data/maritalStatus';
import {
  federalIncomeTaxMarriedJointlyArray,
  federalIncomeTaxMarriedSeparateArray,
} from './taxBrackets/Federal-IncomeTax-Married';

export const findFederalIncomeTaxBracketList = (maritalStatus: string): TaxBracket[] => {
  switch (maritalStatus) {
    case MaritalStatus.Single:
      return federalIncomeSingleTaxBracketsArray;
    case MaritalStatus.MarriedJointly:
      return federalIncomeTaxMarriedJointlyArray;
    case MaritalStatus.MarriedSeparately:
      return federalIncomeTaxMarriedSeparateArray;
    default:
      return [];
  }
};

export const findFederalIncomeTaxBracket = (
  annualIncome: number,
  federalIncomeTaxBracketList: TaxBracket[],
): TaxBracket => {
  let maxMinimum: TaxBracket = federalFirstBracket;
  federalIncomeTaxBracketList.forEach((bracket) => {
    if (annualIncome > bracket.minimumToQualify
            && bracket.minimumToQualify > maxMinimum.minimumToQualify) {
      maxMinimum = bracket;
    }
  });

  return maxMinimum;
};

export const calculateFederalIncomeTax = (
  annualIncome: number,
  maritalStatus: string,
): TaxPayload => {
  const federalIncomeTaxBracketList: TaxBracket[] = findFederalIncomeTaxBracketList(maritalStatus);
  const {
    minimumToQualify,
    taxRate,
    taxTotalToThisBracket,
  }: TaxBracket = findFederalIncomeTaxBracket(annualIncome, federalIncomeTaxBracketList);

  const amountTaxed: number = annualIncome - minimumToQualify;
  const taxAmount: number = (amountTaxed * taxRate) + taxTotalToThisBracket;

  return { taxRate, taxAmount };
};

export const calculateSocialSecurityTax = (annualIncome: number): number => {
  if (annualIncome > SOCIAL_SECURITY_TAX_WAGE_LIMIT) {
    return SOCIAL_SECURITY_TAX_WAGE_LIMIT * SOCIAL_SECURITY_TAX_RATE;
  }
  return annualIncome * SOCIAL_SECURITY_TAX_RATE;
};

export const calculateMedicareTax = (
  annualIncome: number,
): number => annualIncome * MEDICARE_TAX_RATE;

export const calculateFederalTaxes = (
  annualIncome: number,
  maritalStatus: string,
): FederalTaxBreakdown => {
  const {
    taxRate: federalIncomeTaxRate,
    taxAmount: federalIncomeTaxAmount,
  } = calculateFederalIncomeTax(annualIncome, maritalStatus);
  const socialSecurityTaxAmount: number = calculateSocialSecurityTax(annualIncome);
  const medicareTaxAmount: number = calculateMedicareTax(annualIncome);

  const totalFederalTaxAmount: number = (
    federalIncomeTaxAmount
        + socialSecurityTaxAmount
        + medicareTaxAmount
  );

  return {
    federalIncomeTaxRate,
    federalIncomeTaxAmount,
    socialSecurityTaxRate: SOCIAL_SECURITY_TAX_RATE,
    socialSecurityTaxAmount,
    medicareTaxRate: MEDICARE_TAX_RATE,
    medicareTaxAmount,
    totalFederalTaxAmount,
  };
};
