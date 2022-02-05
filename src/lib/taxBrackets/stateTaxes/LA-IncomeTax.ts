import { TaxBracket } from '../../../types';

const louisianaFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.02,
  taxTotalToThisBracket: 0,
};

const louisianaSingleSecondBracket: TaxBracket = {
  minimumToQualify: 12501,
  taxRate: 0.04,
  taxTotalToThisBracket: 250,
};

const louisianaSingleThirdBracket: TaxBracket = {
  minimumToQualify: 50001,
  taxRate: 0.06,
  taxTotalToThisBracket: 1750,
};

const louisianaMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 25001,
  taxRate: 0.04,
  taxTotalToThisBracket: 500,
};

const louisianaMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 100001,
  taxRate: 0.06,
  taxTotalToThisBracket: 3500,
};

export const louisianaSingleIncomeTaxBracketsArray: TaxBracket[] = [
  louisianaFirstBracket,
  louisianaSingleSecondBracket,
  louisianaSingleThirdBracket,
];

export const louisianaSingleIncomeTaxBracketsObject = {
  louisianaFirstBracket,
  louisianaSingleSecondBracket,
  louisianaSingleThirdBracket,
};

export const louisianaMarriedIncomeTaxBracketsArray: TaxBracket[] = [
  louisianaFirstBracket,
  louisianaMarriedSecondBracket,
  louisianaMarriedThirdBracket,
];

export const louisianaMarriedIncomeTaxBracketsObject = {
  louisianaFirstBracket,
  louisianaMarriedSecondBracket,
  louisianaMarriedThirdBracket,
};
