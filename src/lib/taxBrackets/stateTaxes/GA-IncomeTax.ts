import { TaxBracket } from '../../../types';

const georgiaFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.01,
  taxTotalToThisBracket: 0,
};

const georgiaSingleSecondBracket: TaxBracket = {
  minimumToQualify: 750,
  taxRate: 0.02,
  taxTotalToThisBracket: 7.50,
};

const georgiaSingleThirdBracket: TaxBracket = {
  minimumToQualify: 2250,
  taxRate: 0.03,
  taxTotalToThisBracket: 37.50,
};

const georgiaSingleFourthBracket: TaxBracket = {
  minimumToQualify: 3750,
  taxRate: 0.04,
  taxTotalToThisBracket: 82.50,
};

const georgiaSingleFifthBracket: TaxBracket = {
  minimumToQualify: 5250,
  taxRate: 0.05,
  taxTotalToThisBracket: 142.50,
};

const georgiaSingleSixthBracket: TaxBracket = {
  minimumToQualify: 7000,
  taxRate: 0.0575,
  taxTotalToThisBracket: 230,
};

const georgiaMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 1000,
  taxRate: 0.02,
  taxTotalToThisBracket: 20,
};

const georgiaMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 3000,
  taxRate: 0.03,
  taxTotalToThisBracket: 60,
};

const georgiaMarriedFourthBracket: TaxBracket = {
  minimumToQualify: 5000,
  taxRate: 0.04,
  taxTotalToThisBracket: 120,
};

const georgiaMarriedFifthBracket: TaxBracket = {
  minimumToQualify: 7000,
  taxRate: 0.05,
  taxTotalToThisBracket: 200,
};

const georgiaMarriedSixthBracket: TaxBracket = {
  minimumToQualify: 10000,
  taxRate: 0.0575,
  taxTotalToThisBracket: 350,
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
