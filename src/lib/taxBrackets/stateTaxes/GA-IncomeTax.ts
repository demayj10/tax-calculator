import { TaxBracket } from '../../../types';

const georgiaFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.01,
  taxTotalToThisBracket: 0,
};

const georgiaSingleSecondBracket: TaxBracket = {
  minimumToQualify: 751,
  taxRate: 0.02,
  taxTotalToThisBracket: (
    georgiaFirstBracket.taxTotalToThisBracket
          + (750 - georgiaFirstBracket.minimumToQualify) * georgiaFirstBracket.taxRate
  ),
};

const georgiaSingleThirdBracket: TaxBracket = {
  minimumToQualify: 2251,
  taxRate: 0.03,
  taxTotalToThisBracket: (
    georgiaSingleSecondBracket.taxTotalToThisBracket
          + (2250 - georgiaSingleSecondBracket.minimumToQualify) * georgiaSingleSecondBracket.taxRate
  ),
};

const georgiaSingleFourthBracket: TaxBracket = {
  minimumToQualify: 3751,
  taxRate: 0.04,
  taxTotalToThisBracket: (
    georgiaSingleThirdBracket.taxTotalToThisBracket
          + (3750 - georgiaSingleThirdBracket.minimumToQualify) * georgiaSingleThirdBracket.taxRate
  ),
};

const georgiaSingleFifthBracket: TaxBracket = {
  minimumToQualify: 5251,
  taxRate: 0.05,
  taxTotalToThisBracket: (
    georgiaSingleFourthBracket.taxTotalToThisBracket
          + (5250 - georgiaSingleFourthBracket.minimumToQualify) * georgiaSingleFourthBracket.taxRate
  ),
};

const georgiaSingleSixthBracket: TaxBracket = {
  minimumToQualify: 7001,
  taxRate: 0.0575,
  taxTotalToThisBracket: (
    georgiaSingleFifthBracket.taxTotalToThisBracket
          + (7000 - georgiaSingleFifthBracket.minimumToQualify) * georgiaSingleFifthBracket.taxRate
  ),
};

const georgiaMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 1001,
  taxRate: 0.02,
  taxTotalToThisBracket: (
    georgiaFirstBracket.taxTotalToThisBracket
          + (1000 - georgiaFirstBracket.minimumToQualify) * georgiaFirstBracket.taxRate
  ),
};

const georgiaMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 3001,
  taxRate: 0.03,
  taxTotalToThisBracket: (
    georgiaMarriedSecondBracket.taxTotalToThisBracket
          + (3000 - georgiaMarriedSecondBracket.minimumToQualify) * georgiaMarriedSecondBracket.taxRate
  ),
};

const georgiaMarriedFourthBracket: TaxBracket = {
  minimumToQualify: 5001,
  taxRate: 0.04,
  taxTotalToThisBracket: (
    georgiaMarriedThirdBracket.taxTotalToThisBracket
          + (5000 - georgiaMarriedThirdBracket.minimumToQualify) * georgiaMarriedThirdBracket.taxRate
  ),
};

const georgiaMarriedFifthBracket: TaxBracket = {
  minimumToQualify: 7001,
  taxRate: 0.05,
  taxTotalToThisBracket: (
    georgiaMarriedFourthBracket.taxTotalToThisBracket
          + (7000 - georgiaMarriedFourthBracket.minimumToQualify) * georgiaMarriedFourthBracket.taxRate
  ),
};

const georgiaMarriedSixthBracket: TaxBracket = {
  minimumToQualify: 10001,
  taxRate: 0.0575,
  taxTotalToThisBracket: (
    georgiaMarriedFifthBracket.taxTotalToThisBracket
          + (10000 - georgiaMarriedFifthBracket.minimumToQualify) * georgiaMarriedFifthBracket.taxRate
  ),
};

export const georgiaSingleIncomeTaxBracketsArray: TaxBracket[] = [
  georgiaFirstBracket,
  georgiaSingleSecondBracket,
  georgiaSingleThirdBracket,
  georgiaSingleFourthBracket,
  georgiaSingleFifthBracket,
  georgiaSingleSixthBracket,
];

export const georgiaSingleIncomeTaxBracketsObject = {
  georgiaFirstBracket,
  georgiaSingleSecondBracket,
  georgiaSingleThirdBracket,
  georgiaSingleFourthBracket,
  georgiaSingleFifthBracket,
  georgiaSingleSixthBracket,
};

export const georgiaMarriedIncomeTaxBracketsArray: TaxBracket[] = [
  georgiaFirstBracket,
  georgiaMarriedSecondBracket,
  georgiaMarriedThirdBracket,
  georgiaMarriedFourthBracket,
  georgiaMarriedFifthBracket,
  georgiaMarriedSixthBracket,
];

export const georgiaMarriedIncomeTaxBracketsObject = {
  georgiaFirstBracket,
  georgiaMarriedSecondBracket,
  georgiaMarriedThirdBracket,
  georgiaMarriedFourthBracket,
  georgiaMarriedFifthBracket,
  georgiaMarriedSixthBracket,
};

export const GEORGIA_SINGLE_STANDARD_DEDUCTION = 5400;
export const GEORGIA_MARRIED_STANDARD_DEDUCTION = 7100;
