import { TaxBracket } from '../../../types';

export const northDakotaFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.011,
  taxTotalToThisBracket: 0,
};

const northDakotaSingleSecondBracket: TaxBracket = {
  minimumToQualify: 39450,
  taxRate: 0.0204,
  taxTotalToThisBracket: 434.049,
};

const northDakotaSingleThirdBracket: TaxBracket = {
  minimumToQualify: 95500,
  taxRate: 0.0227,
  taxTotalToThisBracket: 1577.4486,
};

const northDakotaSingleFourthBracket: TaxBracket = {
  minimumToQualify: 199250,
  taxRate: 0.0264,
  taxTotalToThisBracket: 3932.5509,
};

const northDakotaSingleFifthBracket: TaxBracket = {
  minimumToQualify: 433200,
  taxRate: 0.0290,
  taxTotalToThisBracket: 10108.8045,
};

const northDakotaMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 65900,
  taxRate: 0.0204,
  taxTotalToThisBracket: 720.489,
};

const northDakotaMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 159200,
  taxRate: 0.0227,
  taxTotalToThisBracket: 2623.7886,
};

const northDakotaMarriedFourthBracket: TaxBracket = {
  minimumToQualify: 242550,
  taxRate: 0.0264,
  taxTotalToThisBracket: 4515.8109,
};

const northDakotaMarriedFifthBracket: TaxBracket = {
  minimumToQualify: 433200,
  taxRate: 0.0290,
  taxTotalToThisBracket: 9548.9445,
};

export const northDakotaSingleIncomeTaxBracketsArray: TaxBracket[] = [
  northDakotaFirstBracket,
  northDakotaSingleSecondBracket,
  northDakotaSingleThirdBracket,
  northDakotaSingleFourthBracket,
  northDakotaSingleFifthBracket,
];

export const northDakotaSingleIncomeTaxBracketsObject = {
  northDakotaFirstBracket,
  northDakotaSingleSecondBracket,
  northDakotaSingleThirdBracket,
  northDakotaSingleFourthBracket,
  northDakotaSingleFifthBracket,
};

export const northDakotaMarriedIncomeTaxBracketsArray: TaxBracket[] = [
  northDakotaFirstBracket,
  northDakotaMarriedSecondBracket,
  northDakotaMarriedThirdBracket,
  northDakotaMarriedFourthBracket,
  northDakotaMarriedFifthBracket,
];

export const northDakotaMarriedIncomeTaxBracketsObject = {
  northDakotaFirstBracket,
  northDakotaMarriedSecondBracket,
  northDakotaMarriedThirdBracket,
  northDakotaMarriedFourthBracket,
  northDakotaMarriedFifthBracket,
};
