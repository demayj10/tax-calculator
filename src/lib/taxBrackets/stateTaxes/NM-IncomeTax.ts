import { TaxBracket } from '../../../types';

const newMexicoFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.017,
  taxTotalToThisBracket: 0,
};

const newMexicoSingleSecondBracket: TaxBracket = {
  minimumToQualify: 5501,
  taxRate: 0.032,
  taxTotalToThisBracket: (
    newMexicoFirstBracket.taxTotalToThisBracket
          + (5500 - newMexicoFirstBracket.minimumToQualify) * newMexicoFirstBracket.taxRate
  ),
};

const newMexicoSingleThirdBracket: TaxBracket = {
  minimumToQualify: 11001,
  taxRate: 0.047,
  taxTotalToThisBracket: (
    newMexicoSingleSecondBracket.taxTotalToThisBracket
          + (11000 - newMexicoSingleSecondBracket.minimumToQualify) * newMexicoSingleSecondBracket.taxRate
  ),
};

const newMexicoSingleFourthBracket: TaxBracket = {
  minimumToQualify: 16001,
  taxRate: 0.049,
  taxTotalToThisBracket: (
    newMexicoSingleThirdBracket.taxTotalToThisBracket
          + (16000 - newMexicoSingleThirdBracket.minimumToQualify) * newMexicoSingleThirdBracket.taxRate
  ),
};

const newMexicoMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 8001,
  taxRate: 0.032,
  taxTotalToThisBracket: (
    newMexicoFirstBracket.taxTotalToThisBracket
          + (8000 - newMexicoFirstBracket.minimumToQualify) * newMexicoFirstBracket.taxRate
  ),
};

const newMexicoMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 16001,
  taxRate: 0.047,
  taxTotalToThisBracket: (
    newMexicoMarriedSecondBracket.taxTotalToThisBracket
          + (16000 - newMexicoMarriedSecondBracket.minimumToQualify) * newMexicoMarriedSecondBracket.taxRate
  ),
};

const newMexicoMarriedFourthBracket: TaxBracket = {
  minimumToQualify: 24001,
  taxRate: 0.049,
  taxTotalToThisBracket: (
    newMexicoMarriedThirdBracket.taxTotalToThisBracket
          + (24000 - newMexicoMarriedThirdBracket.minimumToQualify) * newMexicoMarriedThirdBracket.taxRate
  ),
};

const newMexicoMarriedFilingSeparatelySecondBracket: TaxBracket = {
  minimumToQualify: 4001,
  taxRate: 0.032,
  taxTotalToThisBracket: (
    newMexicoFirstBracket.taxTotalToThisBracket
          + (4000 - newMexicoFirstBracket.minimumToQualify) * newMexicoFirstBracket.taxRate
  ),
};

const newMexicoMarriedFilingSeparatelyThirdBracket: TaxBracket = {
  minimumToQualify: 8001,
  taxRate: 0.047,
  taxTotalToThisBracket: (
    newMexicoMarriedFilingSeparatelySecondBracket.taxTotalToThisBracket
          + (8000 - newMexicoMarriedFilingSeparatelySecondBracket.minimumToQualify)
            * newMexicoMarriedFilingSeparatelySecondBracket.taxRate
  ),
};

const newMexicoMarriedFilingSeparatelyFourthBracket: TaxBracket = {
  minimumToQualify: 12001,
  taxRate: 0.049,
  taxTotalToThisBracket: (
    newMexicoMarriedFilingSeparatelyThirdBracket.taxTotalToThisBracket
          + (12000 - newMexicoMarriedFilingSeparatelyThirdBracket.minimumToQualify)
            * newMexicoMarriedFilingSeparatelyThirdBracket.taxRate
  ),
};

export const newMexicoSingleIncomeTaxBracketsArray: TaxBracket[] = [
  newMexicoFirstBracket,
  newMexicoSingleSecondBracket,
  newMexicoSingleThirdBracket,
  newMexicoSingleFourthBracket,
];

export const newMexicoSingleIncomeTaxBracketsObject = {
  newMexicoFirstBracket,
  newMexicoSingleSecondBracket,
  newMexicoSingleThirdBracket,
  newMexicoSingleFourthBracket,
};

export const newMexicoMarriedIncomeTaxBracketsArray: TaxBracket[] = [
  newMexicoFirstBracket,
  newMexicoMarriedSecondBracket,
  newMexicoMarriedThirdBracket,
  newMexicoMarriedFourthBracket,
];

export const newMexicoMarriedIncomeTaxBracketsObject = {
  newMexicoFirstBracket,
  newMexicoMarriedSecondBracket,
  newMexicoMarriedThirdBracket,
  newMexicoMarriedFourthBracket,
};

export const newMexicoMarriedFilingSeparatelyIncomeTaxBracketsArray: TaxBracket[] = [
  newMexicoFirstBracket,
  newMexicoMarriedFilingSeparatelySecondBracket,
  newMexicoMarriedFilingSeparatelyThirdBracket,
  newMexicoMarriedFilingSeparatelyFourthBracket,
];

export const newMexicoMarriedFilingSeparatelyIncomeTaxBracketsObject = {
  newMexicoFirstBracket,
  newMexicoMarriedFilingSeparatelySecondBracket,
  newMexicoMarriedFilingSeparatelyThirdBracket,
  newMexicoMarriedFilingSeparatelyFourthBracket,
};

export const NEW_MEXICO_SINGLE_STANDARD_DEDUCTION = 12950;
export const NEW_MEXICO_MARRIED_STANDARD_DEDUCTION = 25900;
