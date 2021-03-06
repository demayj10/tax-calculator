import { TaxBracket } from '../../../types';

const mississippiZeroBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.00,
  taxTotalToThisBracket: 0,
};

const mississippiFirstBracket: TaxBracket = {
  minimumToQualify: 3001,
  taxRate: 0.03,
  taxTotalToThisBracket: (
    mississippiZeroBracket.taxTotalToThisBracket
          + (3000 - mississippiZeroBracket.minimumToQualify) * mississippiZeroBracket.taxRate
  ),
};

const mississippiSecondBracket: TaxBracket = {
  minimumToQualify: 5001,
  taxRate: 0.04,
  taxTotalToThisBracket: (
    mississippiFirstBracket.taxTotalToThisBracket
          + (5000 - mississippiFirstBracket.minimumToQualify) * mississippiFirstBracket.taxRate
  ),
};

const mississippiThirdBracket: TaxBracket = {
  minimumToQualify: 10001,
  taxRate: 0.05,
  taxTotalToThisBracket: (
    mississippiSecondBracket.taxTotalToThisBracket
          + (10000 - mississippiSecondBracket.minimumToQualify) * mississippiSecondBracket.taxRate
  ),
};

export const mississippiIncomeTaxBracketsArray: TaxBracket[] = [
  mississippiZeroBracket,
  mississippiFirstBracket,
  mississippiSecondBracket,
  mississippiThirdBracket,
];

export const mississippiIncomeTaxBracketsObject = {
  mississippiZeroBracket,
  mississippiFirstBracket,
  mississippiSecondBracket,
  mississippiThirdBracket,
};

export const MISSISSIPPI_SINGLE_STANDARD_DEDUCTION = 2300;
export const MISSISSIPPI_MARRIED_STANDARD_DEDUCTION = 4600;
