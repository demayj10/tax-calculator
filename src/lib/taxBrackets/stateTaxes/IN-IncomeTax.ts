import { TaxBracket } from '../../../types';

const indianaTaxBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.0323,
  taxTotalToThisBracket: 0,
};

export const indianaIncomeTaxBracketsArray: TaxBracket[] = [
  indianaTaxBracket,
];

export const indianaIncomeTaxBracketsObject = {
  indianaTaxBracket,
};

export const INDIANA_SINGLE_STANDARD_DEDUCTION = 0;
export const INDIANA_MARRIED_STANDARD_DEDUCTION = 0;
