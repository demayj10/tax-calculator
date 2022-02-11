import { TaxBracket } from '../../../types';

const arkansasFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.009,
  taxTotalToThisBracket: 0,
};

const arkansasSecondBracket: TaxBracket = {
  minimumToQualify: 4300,
  taxRate: 0.024,
  taxTotalToThisBracket: (
    arkansasFirstBracket.taxTotalToThisBracket
          + (4299 - arkansasFirstBracket.minimumToQualify) * arkansasFirstBracket.taxRate
  ),
};

const arkansasThirdBracket: TaxBracket = {
  minimumToQualify: 8400,
  taxRate: 0.034,
  taxTotalToThisBracket: (
    arkansasSecondBracket.taxTotalToThisBracket
          + (8399 - arkansasSecondBracket.minimumToQualify) * arkansasSecondBracket.taxRate
  ),
};

const arkansasFourthBracket: TaxBracket = {
  minimumToQualify: 12700,
  taxRate: 0.044,
  taxTotalToThisBracket: (
    arkansasSecondBracket.taxTotalToThisBracket
          + (12699 - arkansasSecondBracket.minimumToQualify) * arkansasSecondBracket.taxRate
  ),
};

const arkansasFifthBracket: TaxBracket = {
  minimumToQualify: 21100,
  taxRate: 0.06,
  taxTotalToThisBracket: (
    arkansasSecondBracket.taxTotalToThisBracket
          + (21099 - arkansasSecondBracket.minimumToQualify) * arkansasSecondBracket.taxRate
  ),
};

const arkansasSixthBracket: TaxBracket = {
  minimumToQualify: 35300,
  taxRate: 0.07,
  taxTotalToThisBracket: (
    arkansasThirdBracket.taxTotalToThisBracket
          + (35299 - arkansasThirdBracket.minimumToQualify) * arkansasThirdBracket.taxRate
  ),
};

export const arkansasIncomeTaxBracketsArray: TaxBracket[] = [
  arkansasFirstBracket,
  arkansasSecondBracket,
  arkansasThirdBracket,
  arkansasFourthBracket,
  arkansasFifthBracket,
  arkansasSixthBracket,
];

export const arkansasIncomeTaxBracketsObject = {
  arkansasFirstBracket,
  arkansasSecondBracket,
  arkansasThirdBracket,
  arkansasFourthBracket,
  arkansasFifthBracket,
  arkansasSixthBracket,
};
