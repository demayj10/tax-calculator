import { TaxBracket } from '../../../types';

const mississippiZeroBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.00,
  taxTotalToThisBracket: 0,
};

const mississippiFirstBracket: TaxBracket = {
  minimumToQualify: 1001,
  taxRate: 0.03,
  taxTotalToThisBracket: 0,
};

const mississippiSecondBracket: TaxBracket = {
  minimumToQualify: 5001,
  taxRate: 0.04,
  taxTotalToThisBracket: 120,
};

const mississippiThirdBracket: TaxBracket = {
  minimumToQualify: 10001,
  taxRate: 0.05,
  taxTotalToThisBracket: 320,
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
