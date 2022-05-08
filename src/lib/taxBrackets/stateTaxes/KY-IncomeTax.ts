import { TaxBracket } from '../../../types';

const kentuckyFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.05,
  taxTotalToThisBracket: 0,
};

export const kentuckyIncomeTaxBracketsArray: TaxBracket[] = [
  kentuckyFirstBracket,
];

export const kentuckyIncomeTaxBracketsObject = {
  kentuckyFirstBracket,
};

export const KENTUCKY_SINGLE_STANDARD_DEDUCTION = 2690;
export const KENTUCKY_MARRIED_STANDARD_DEDUCTION = 5380;
