import { TaxBracket } from '../../../types';

const michiganTaxBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.0425,
  taxTotalToThisBracket: 0,
};

export const michiganIncomeTaxBracketsArray: TaxBracket[] = [
  michiganTaxBracket,
];

export const michiganIncomeTaxBracketsObject = {
  michiganTaxBracket,
};

export const MICHIGAN_SINGLE_STANDARD_DEDUCTION = 0;
export const MICHIGAN_MARRIED_STANDARD_DEDUCTION = 0;
