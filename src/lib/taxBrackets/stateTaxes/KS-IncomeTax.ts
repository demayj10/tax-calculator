import { TaxBracket } from '../../../types';

export const kansasFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.0310,
  taxTotalToThisBracket: 0,
};

const kansasSingleSecondBracket: TaxBracket = {
  minimumToQualify: 15001,
  taxRate: 0.0525,
  taxTotalToThisBracket: 465,
};

const kansasSingleThirdBracket: TaxBracket = {
  minimumToQualify: 30001,
  taxRate: 0.0570,
  taxTotalToThisBracket: 2039.9475,
};

const kansasMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 30001,
  taxRate: 0.0525,
  taxTotalToThisBracket: 930,
};

const kansasMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 60001,
  taxRate: 0.0570,
  taxTotalToThisBracket: 2504.9475,
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
