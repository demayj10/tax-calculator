import { TaxBracket } from '../../../types';

const arizonaFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.0259,
  taxTotalToThisBracket: 0,
};

const arizonaSingleSecondBracket: TaxBracket = {
  minimumToQualify: 27809,
  taxRate: 0.0334,
  taxTotalToThisBracket: 720,
};

const arizonaSingleThirdBracket: TaxBracket = {
  minimumToQualify: 55616,
  taxRate: 0.0417,
  taxTotalToThisBracket: 1649,
};

const arizonaSingleFourthBracket: TaxBracket = {
  minimumToQualify: 166844,
  taxRate: 0.045,
  taxTotalToThisBracket: 6287,
};

const arizonaSingleFifthBracket: TaxBracket = {
  minimumToQualify: 250001,
  taxRate: 0.01,
  taxTotalToThisBracket: 10029,
};

const arizonaMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 55616,
  taxRate: 0.0334,
  taxTotalToThisBracket: 1440,
};

const arizonaMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 111230,
  taxRate: 0.0417,
  taxTotalToThisBracket: 3298,
};

const arizonaMarriedFourthBracket: TaxBracket = {
  minimumToQualify: 333685,
  taxRate: 0.045,
  taxTotalToThisBracket: 12574,
};

const arizonaMarriedFifthBracket: TaxBracket = {
  minimumToQualify: 500001,
  taxRate: 0.01,
  taxTotalToThisBracket: 20059,
};

export const arizonaSingleIncomeTaxBracketsArray: TaxBracket[] = [
  arizonaFirstBracket,
  arizonaSingleSecondBracket,
  arizonaSingleThirdBracket,
  arizonaSingleFourthBracket,
  arizonaSingleFifthBracket,
];

export const arizonaSingleIncomeTaxBracketsObject = {
  arizonaFirstBracket,
  arizonaSingleSecondBracket,
  arizonaSingleThirdBracket,
  arizonaSingleFourthBracket,
  arizonaSingleFifthBracket,
};

export const arizonaMarriedIncomeTaxBracketsArray: TaxBracket[] = [
  arizonaFirstBracket,
  arizonaMarriedSecondBracket,
  arizonaMarriedThirdBracket,
  arizonaMarriedFourthBracket,
  arizonaMarriedFifthBracket,
];

export const arizonaMarriedIncomeTaxBracketsObject = {
  arizonaFirstBracket,
  arizonaMarriedSecondBracket,
  arizonaMarriedThirdBracket,
  arizonaMarriedFourthBracket,
  arizonaMarriedFifthBracket,
};
