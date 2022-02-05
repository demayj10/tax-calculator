import { TaxBracket } from '../../../types';

const alabamaFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.02,
  taxTotalToThisBracket: 0,
};

const alabamaSingleSecondBracket: TaxBracket = {
  minimumToQualify: 500,
  taxRate: 0.04,
  taxTotalToThisBracket: 10,
};

const alabamaSingleThirdBracket: TaxBracket = {
  minimumToQualify: 3000,
  taxRate: 0.05,
  taxTotalToThisBracket: 110,
};

const alabamaMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 1000,
  taxRate: 0.04,
  taxTotalToThisBracket: 20,
};

const alabamaMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 6000,
  taxRate: 0.05,
  taxTotalToThisBracket: 220,
};

export const alabamaSingleIncomeTaxBracketsArray: TaxBracket[] = [
  alabamaFirstBracket,
  alabamaSingleSecondBracket,
  alabamaSingleThirdBracket,
];

export const alabamaSingleIncomeTaxBracketsObject = {
  alabamaFirstBracket,
  alabamaSingleSecondBracket,
  alabamaSingleThirdBracket,
};

export const alabamaMarriedIncomeTaxBracketsArray: TaxBracket[] = [
  alabamaFirstBracket,
  alabamaMarriedSecondBracket,
  alabamaMarriedThirdBracket,
];

export const alabamaMarriedIncomeTaxBracketsObject = {
  alabamaFirstBracket,
  alabamaMarriedSecondBracket,
  alabamaMarriedThirdBracket,
};
