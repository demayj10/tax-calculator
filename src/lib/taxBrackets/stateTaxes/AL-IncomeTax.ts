import { TaxBracket } from '../../../types';

const alabamaFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.02,
  taxTotalToThisBracket: 0,
};

const alabamaSingleSecondBracket: TaxBracket = {
  minimumToQualify: 500,
  taxRate: 0.04,
  taxTotalToThisBracket: (
    alabamaFirstBracket.taxTotalToThisBracket
          + (499 - alabamaFirstBracket.minimumToQualify) * alabamaFirstBracket.taxRate
  ),
};

const alabamaSingleThirdBracket: TaxBracket = {
  minimumToQualify: 3000,
  taxRate: 0.05,
  taxTotalToThisBracket: (
    alabamaSingleSecondBracket.taxTotalToThisBracket
          + (2999 - alabamaSingleSecondBracket.minimumToQualify) * alabamaSingleSecondBracket.taxRate
  ),
};

const alabamaMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 1000,
  taxRate: 0.04,
  taxTotalToThisBracket: (
    alabamaFirstBracket.taxTotalToThisBracket
          + (999 - alabamaFirstBracket.minimumToQualify) * alabamaFirstBracket.taxRate
  ),
};

const alabamaMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 6000,
  taxRate: 0.05,
  taxTotalToThisBracket: (
    alabamaMarriedSecondBracket.taxTotalToThisBracket
          + (5999 - alabamaMarriedSecondBracket.minimumToQualify) * alabamaMarriedSecondBracket.taxRate
  ),
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
