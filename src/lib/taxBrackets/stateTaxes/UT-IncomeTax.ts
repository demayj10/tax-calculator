import { TaxBracket } from '../../../types';

const utahFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.05,
  taxTotalToThisBracket: 0,
};

export const utahIncomeTaxBracketsArray: TaxBracket[] = [
  utahFirstBracket,
];

export const utahIncomeTaxBracketsObject = {
  utahFirstBracket,
};

export const UTAH_SINGLE_STANDARD_DEDUCTION = 0;
export const UTAH_MARRIED_STANDARD_DEDUCTION = 0;
