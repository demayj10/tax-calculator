import { TaxBracket } from '../../../types';

const louisianaFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.02,
  taxTotalToThisBracket: 0,
};

const louisianaSingleSecondBracket: TaxBracket = {
  minimumToQualify: 12501,
  taxRate: 0.04,
  taxTotalToThisBracket: (
    louisianaFirstBracket.taxTotalToThisBracket
          + (12500 - louisianaFirstBracket.minimumToQualify) * louisianaFirstBracket.taxRate
  ),
};

const louisianaSingleThirdBracket: TaxBracket = {
  minimumToQualify: 50001,
  taxRate: 0.06,
  taxTotalToThisBracket: (
    louisianaSingleSecondBracket.taxTotalToThisBracket
          + (50000 - louisianaSingleSecondBracket.minimumToQualify) * louisianaSingleSecondBracket.taxRate
  ),
};

const louisianaMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 25001,
  taxRate: 0.04,
  taxTotalToThisBracket: (
    louisianaFirstBracket.taxTotalToThisBracket
          + (25000 - louisianaFirstBracket.minimumToQualify) * louisianaFirstBracket.taxRate
  ),
};

const louisianaMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 100001,
  taxRate: 0.06,
  taxTotalToThisBracket: (
    louisianaMarriedSecondBracket.taxTotalToThisBracket
          + (100000 - louisianaMarriedSecondBracket.minimumToQualify) * louisianaMarriedSecondBracket.taxRate
  ),
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
