import { TaxBracket } from '../../../types';

const alabamaFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.02,
  taxTotalToThisBracket: 0,
};

const alabamaSingleSecondBracket: TaxBracket = {
  minimumToQualify: 501,
  taxRate: 0.04,
  taxTotalToThisBracket: (
    alabamaFirstBracket.taxTotalToThisBracket
          + (500 - alabamaFirstBracket.minimumToQualify) * alabamaFirstBracket.taxRate
  ),
};

const alabamaSingleThirdBracket: TaxBracket = {
  minimumToQualify: 3001,
  taxRate: 0.05,
  taxTotalToThisBracket: (
    alabamaSingleSecondBracket.taxTotalToThisBracket
          + (3000 - alabamaSingleSecondBracket.minimumToQualify) * alabamaSingleSecondBracket.taxRate
  ),
};

const alabamaMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 1001,
  taxRate: 0.04,
  taxTotalToThisBracket: (
    alabamaFirstBracket.taxTotalToThisBracket
          + (1000 - alabamaFirstBracket.minimumToQualify) * alabamaFirstBracket.taxRate
  ),
};

const alabamaMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 6001,
  taxRate: 0.05,
  taxTotalToThisBracket: (
    alabamaMarriedSecondBracket.taxTotalToThisBracket
          + (6000 - alabamaMarriedSecondBracket.minimumToQualify) * alabamaMarriedSecondBracket.taxRate
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

export const ALABAMA_SINGLE_STANDARD_DEDUCTION = 2500;
export const ALABAMA_MARRIED_STANDARD_DEDUCTION = 7500;
