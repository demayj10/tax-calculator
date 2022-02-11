import { TaxBracket } from '../../../types';

const arkansasFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.02,
  taxTotalToThisBracket: 0,
};

const arkansasSecondBracket: TaxBracket = {
  minimumToQualify: 4000,
  taxRate: 0.04,
  taxTotalToThisBracket: (
    arkansasFirstBracket.taxTotalToThisBracket
          + (3999 - arkansasFirstBracket.minimumToQualify) * arkansasFirstBracket.taxRate
  ),
};

const arkansasThirdBracket: TaxBracket = {
  minimumToQualify: 8000,
  taxRate: 0.059,
  taxTotalToThisBracket: (
    arkansasSecondBracket.taxTotalToThisBracket
          + (7999 - arkansasSecondBracket.minimumToQualify) * arkansasSecondBracket.taxRate
  ),
};

const arkansasFourthBracket: TaxBracket = {
  minimumToQualify: 79300,
  taxRate: 0.066,
  taxTotalToThisBracket: (
    arkansasThirdBracket.taxTotalToThisBracket
          + (79299 - arkansasThirdBracket.minimumToQualify) * arkansasThirdBracket.taxRate
  ),
};

export const arkansasIncomeTaxBracketsArray: TaxBracket[] = [
  arkansasFirstBracket,
  arkansasSecondBracket,
  arkansasThirdBracket,
  arkansasFourthBracket,
];

export const arkansasIncomeTaxBracketsObject = {
  arkansasFirstBracket,
  arkansasSecondBracket,
  arkansasThirdBracket,
  arkansasFourthBracket,
};
