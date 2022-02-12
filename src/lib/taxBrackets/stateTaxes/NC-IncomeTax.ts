import { TaxBracket } from '../../../types';

const northCarolinaFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.0525,
  taxTotalToThisBracket: 0,
};

export const northCarolinaIncomeTaxBracketsArray: TaxBracket[] = [
  northCarolinaFirstBracket,
];

export const northCarolinaIncomeTaxBracketsObject = {
  northCarolinaFirstBracket,
};

export const NORTH_CAROLINA_SINGLE_STANDARD_DEDUCTION = 10750;
export const NORTH_CAROLINA_MARRIED_STANDARD_DEDUCTION = 21500;
