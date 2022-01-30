import { TaxBracket } from '../../../types';

const newMexicoFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.017,
  taxTotalToThisBracket: 0,
};

const newMexicoSingleSecondBracket: TaxBracket = {
  minimumToQualify: 5501,
  taxRate: 0.032,
  taxTotalToThisBracket: 93.50,
};

const newMexicoSingleThirdBracket: TaxBracket = {
  minimumToQualify: 11001,
  taxRate: 0.047,
  taxTotalToThisBracket: 269.468,
};

const newMexicoSingleFourthBracket: TaxBracket = {
  minimumToQualify: 16001,
  taxRate: 0.049,
  taxTotalToThisBracket: 504.421,
};

const newMexicoMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 8001,
  taxRate: 0.032,
  taxTotalToThisBracket: 136,
};

const newMexicoMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 16001,
  taxRate: 0.047,
  taxTotalToThisBracket: 391.968,
};

const newMexicoMarriedFourthBracket: TaxBracket = {
  minimumToQualify: 24001,
  taxRate: 0.049,
  taxTotalToThisBracket: 767.921,
};

const newMexicoMarriedFilingSeparatelySecondBracket: TaxBracket = {
  minimumToQualify: 4001,
  taxRate: 0.032,
  taxTotalToThisBracket: 68,
};

const newMexicoMarriedFilingSeparatelyThirdBracket: TaxBracket = {
  minimumToQualify: 8001,
  taxRate: 0.047,
  taxTotalToThisBracket: 195.968,
};

const newMexicoMarriedFilingSeparatelyFourthBracket: TaxBracket = {
  minimumToQualify: 12001,
  taxRate: 0.049,
  taxTotalToThisBracket: 383.921,
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
