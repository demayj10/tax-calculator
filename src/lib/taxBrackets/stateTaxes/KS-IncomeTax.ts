import { TaxBracket } from '../../../types';

const kansasFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.0310,
  taxTotalToThisBracket: 0,
};

const kansasSingleSecondBracket: TaxBracket = {
  minimumToQualify: 15001,
  taxRate: 0.0525,
  taxTotalToThisBracket: (
    kansasFirstBracket.taxTotalToThisBracket
          + (15000 - kansasFirstBracket.minimumToQualify) * kansasFirstBracket.taxRate
  ),
};

const kansasSingleThirdBracket: TaxBracket = {
  minimumToQualify: 30001,
  taxRate: 0.0570,
  taxTotalToThisBracket: (
    kansasSingleSecondBracket.taxTotalToThisBracket
          + (30000 - kansasSingleSecondBracket.minimumToQualify) * kansasSingleSecondBracket.taxRate
  ),
};

const kansasMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 30001,
  taxRate: 0.0525,
  taxTotalToThisBracket: (
    kansasFirstBracket.taxTotalToThisBracket
          + (30000 - kansasFirstBracket.minimumToQualify) * kansasFirstBracket.taxRate
  ),
};

const kansasMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 60001,
  taxRate: 0.0570,
  taxTotalToThisBracket: (
    kansasMarriedSecondBracket.taxTotalToThisBracket
          + (60000 - kansasMarriedSecondBracket.minimumToQualify) * kansasMarriedSecondBracket.taxRate
  ),
};

export const kansasSingleIncomeTaxBracketsArray: TaxBracket[] = [
  kansasFirstBracket,
  kansasSingleSecondBracket,
  kansasSingleThirdBracket,
];

export const kansasSingleIncomeTaxBracketsObject = {
  kansasFirstBracket,
  kansasSingleSecondBracket,
  kansasSingleThirdBracket,
};

export const kansasMarriedIncomeTaxBracketsArray: TaxBracket[] = [
  kansasFirstBracket,
  kansasMarriedSecondBracket,
  kansasMarriedThirdBracket,
];

export const kansasMarriedIncomeTaxBracketsObject = {
  kansasFirstBracket,
  kansasMarriedSecondBracket,
  kansasMarriedThirdBracket,
};
