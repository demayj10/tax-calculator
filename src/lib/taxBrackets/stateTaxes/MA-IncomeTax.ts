import { TaxBracket } from '../../../types';

const massachusettsZeroBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.0,
  taxTotalToThisBracket: 0,
};

const massachusettsFirstBracket: TaxBracket = {
  minimumToQualify: 8000,
  taxRate: 0.05,
  taxTotalToThisBracket: (
    massachusettsZeroBracket.taxTotalToThisBracket
          + (7999 - massachusettsZeroBracket.minimumToQualify) * massachusettsZeroBracket.taxRate
  ),
};

export const massachusettsIncomeTaxBracketsArray: TaxBracket[] = [
  massachusettsZeroBracket,
  massachusettsFirstBracket,
];

export const massachusettsIncomeTaxBracketsObject = {
  massachusettsZeroBracket,
  massachusettsFirstBracket,
};

export const MASSACHUSETTS_SINGLE_STANDARD_DEDUCTION = 0;
export const MASSACHUSETTS_MARRIED_STANDARD_DEDUCTION = 0;
