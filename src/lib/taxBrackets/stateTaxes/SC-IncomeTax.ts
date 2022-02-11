import { TaxBracket } from '../../../types';

const southCarolinaFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.00,
  taxTotalToThisBracket: 0,
};

const southCarolinaSecondBracket: TaxBracket = {
  minimumToQualify: 2971,
  taxRate: 0.03,
  taxTotalToThisBracket: (
    southCarolinaFirstBracket.taxTotalToThisBracket
          + (2970 - southCarolinaFirstBracket.minimumToQualify) * southCarolinaFirstBracket.taxRate
  ),
};

const southCarolinaThirdBracket: TaxBracket = {
  minimumToQualify: 5941,
  taxRate: 0.04,
  taxTotalToThisBracket: (
    southCarolinaSecondBracket.taxTotalToThisBracket
          + (5940 - southCarolinaSecondBracket.minimumToQualify) * southCarolinaSecondBracket.taxRate
  ),
};

const southCarolinaFourthBracket: TaxBracket = {
  minimumToQualify: 8911,
  taxRate: 0.05,
  taxTotalToThisBracket: (
    southCarolinaThirdBracket.taxTotalToThisBracket
          + (8910 - southCarolinaThirdBracket.minimumToQualify) * southCarolinaThirdBracket.taxRate
  ),
};

const southCarolinaFifthBracket: TaxBracket = {
  minimumToQualify: 11881,
  taxRate: 0.06,
  taxTotalToThisBracket: (
    southCarolinaFourthBracket.taxTotalToThisBracket
          + (11880 - southCarolinaFourthBracket.minimumToQualify) * southCarolinaFourthBracket.taxRate
  ),
};

const southCarolinaSixthBracket: TaxBracket = {
  minimumToQualify: 14861,
  taxRate: 0.07,
  taxTotalToThisBracket: (
    southCarolinaFifthBracket.taxTotalToThisBracket
          + (14860 - southCarolinaFifthBracket.minimumToQualify) * southCarolinaFifthBracket.taxRate
  ),
};

export const southCarolinaIncomeTaxBracketsArray: TaxBracket[] = [
  southCarolinaFirstBracket,
  southCarolinaSecondBracket,
  southCarolinaThirdBracket,
  southCarolinaFourthBracket,
  southCarolinaFifthBracket,
  southCarolinaSixthBracket,
];

export const southCarolinaIncomeTaxBracketsObject = {
  southCarolinaFirstBracket,
  southCarolinaSecondBracket,
  southCarolinaThirdBracket,
  southCarolinaFourthBracket,
  southCarolinaFifthBracket,
  southCarolinaSixthBracket,
};
