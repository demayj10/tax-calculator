import { TaxBracket } from '../../../types';

const newYorkFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.04,
  taxTotalToThisBracket: 0,
};

const newYorkSecondBracket: TaxBracket = {
  minimumToQualify: 8501,
  taxRate: 0.045,
  taxTotalToThisBracket: (
    newYorkFirstBracket.taxTotalToThisBracket
          + (8500 - newYorkFirstBracket.minimumToQualify) * newYorkFirstBracket.taxRate
  ),
};

const newYorkThirdBracket: TaxBracket = {
  minimumToQualify: 11701,
  taxRate: 0.0525,
  taxTotalToThisBracket: (
    newYorkSecondBracket.taxTotalToThisBracket
          + (11700 - newYorkSecondBracket.minimumToQualify) * newYorkSecondBracket.taxRate
  ),
};

const newYorkFourthBracket: TaxBracket = {
  minimumToQualify: 13901,
  taxRate: 0.059,
  taxTotalToThisBracket: (
    newYorkThirdBracket.taxTotalToThisBracket
          + (13900 - newYorkThirdBracket.minimumToQualify) * newYorkThirdBracket.taxRate
  ),
};

const newYorkFifthBracket: TaxBracket = {
  minimumToQualify: 21401,
  taxRate: 0.0633,
  taxTotalToThisBracket: (
    newYorkFourthBracket.taxTotalToThisBracket
          + (21400 - newYorkFourthBracket.minimumToQualify) * newYorkFourthBracket.taxRate
  ),
};

const newYorkSixthBracket: TaxBracket = {
  minimumToQualify: 80651,
  taxRate: 0.0657,
  taxTotalToThisBracket: (
    newYorkFifthBracket.taxTotalToThisBracket
          + (80650 - newYorkFifthBracket.minimumToQualify) * newYorkFifthBracket.taxRate
  ),
};

const newYorkSeventhBracket: TaxBracket = {
  minimumToQualify: 215401,
  taxRate: 0.0685,
  taxTotalToThisBracket: (
    newYorkSixthBracket.taxTotalToThisBracket
          + (80650 - newYorkSixthBracket.minimumToQualify) * newYorkSixthBracket.taxRate
  ),
};

const newYorkEighthBracket: TaxBracket = {
  minimumToQualify: 1077551,
  taxRate: 0.0882,
  taxTotalToThisBracket: (
    newYorkSeventhBracket.taxTotalToThisBracket
          + (1077550 - newYorkSeventhBracket.minimumToQualify) * newYorkSeventhBracket.taxRate
  ),
};

export const newYorkIncomeTaxBracketsArray: TaxBracket[] = [
  newYorkFirstBracket,
  newYorkSecondBracket,
  newYorkThirdBracket,
  newYorkFourthBracket,
  newYorkFifthBracket,
  newYorkSixthBracket,
  newYorkSeventhBracket,
  newYorkEighthBracket,
];

export const newYorkIncomeTaxBracketsObject = {
  newYorkFirstBracket,
  newYorkSecondBracket,
  newYorkThirdBracket,
  newYorkFourthBracket,
  newYorkFifthBracket,
  newYorkSixthBracket,
  newYorkSeventhBracket,
  newYorkEighthBracket,
};

export const NEW_YORK_SINGLE_STANDARD_DEDUCTION = 8000;
export const NEW_YORK_MARRIED_STANDARD_DEDUCTION = 16050;
