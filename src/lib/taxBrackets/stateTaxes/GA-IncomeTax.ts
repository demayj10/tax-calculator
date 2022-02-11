import { TaxBracket } from '../../../types';

const georgiaFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.01,
  taxTotalToThisBracket: 0,
};

const georgiaSingleSecondBracket: TaxBracket = {
  minimumToQualify: 750,
  taxRate: 0.02,
  taxTotalToThisBracket: (
    georgiaFirstBracket.taxTotalToThisBracket
          + (749 - georgiaFirstBracket.minimumToQualify) * georgiaFirstBracket.taxRate
  ),
};

const georgiaSingleThirdBracket: TaxBracket = {
  minimumToQualify: 2250,
  taxRate: 0.03,
  taxTotalToThisBracket: (
    georgiaSingleSecondBracket.taxTotalToThisBracket
          + (2249 - georgiaSingleSecondBracket.minimumToQualify) * georgiaSingleSecondBracket.taxRate
  ),
};

const georgiaSingleFourthBracket: TaxBracket = {
  minimumToQualify: 3750,
  taxRate: 0.04,
  taxTotalToThisBracket: (
    georgiaSingleThirdBracket.taxTotalToThisBracket
          + (3749 - georgiaSingleThirdBracket.minimumToQualify) * georgiaSingleThirdBracket.taxRate
  ),
};

const georgiaSingleFifthBracket: TaxBracket = {
  minimumToQualify: 5250,
  taxRate: 0.05,
  taxTotalToThisBracket: (
    georgiaSingleFourthBracket.taxTotalToThisBracket
          + (5249 - georgiaSingleFourthBracket.minimumToQualify) * georgiaSingleFourthBracket.taxRate
  ),
};

const georgiaSingleSixthBracket: TaxBracket = {
  minimumToQualify: 7000,
  taxRate: 0.0575,
  taxTotalToThisBracket: (
    georgiaSingleFifthBracket.taxTotalToThisBracket
          + (6999 - georgiaSingleFifthBracket.minimumToQualify) * georgiaSingleFifthBracket.taxRate
  ),
};

const georgiaMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 1000,
  taxRate: 0.02,
  taxTotalToThisBracket: (
    georgiaFirstBracket.taxTotalToThisBracket
          + (999 - georgiaFirstBracket.minimumToQualify) * georgiaFirstBracket.taxRate
  ),
};

const georgiaMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 3000,
  taxRate: 0.03,
  taxTotalToThisBracket: (
    georgiaMarriedSecondBracket.taxTotalToThisBracket
          + (2999 - georgiaMarriedSecondBracket.minimumToQualify) * georgiaMarriedSecondBracket.taxRate
  ),
};

const georgiaMarriedFourthBracket: TaxBracket = {
  minimumToQualify: 5000,
  taxRate: 0.04,
  taxTotalToThisBracket: (
    georgiaMarriedThirdBracket.taxTotalToThisBracket
          + (4999 - georgiaMarriedThirdBracket.minimumToQualify) * georgiaMarriedThirdBracket.taxRate
  ),
};

const georgiaMarriedFifthBracket: TaxBracket = {
  minimumToQualify: 7000,
  taxRate: 0.05,
  taxTotalToThisBracket: (
    georgiaMarriedFourthBracket.taxTotalToThisBracket
          + (6999 - georgiaMarriedFourthBracket.minimumToQualify) * georgiaMarriedFourthBracket.taxRate
  ),
};

const georgiaMarriedSixthBracket: TaxBracket = {
  minimumToQualify: 10000,
  taxRate: 0.0575,
  taxTotalToThisBracket: (
    georgiaMarriedFifthBracket.taxTotalToThisBracket
          + (9999 - georgiaMarriedFifthBracket.minimumToQualify) * georgiaMarriedFifthBracket.taxRate
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
