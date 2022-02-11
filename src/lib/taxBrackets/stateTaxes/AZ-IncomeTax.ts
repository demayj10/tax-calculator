import { TaxBracket } from '../../../types';

const arizonaFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.0259,
  taxTotalToThisBracket: 0,
};

const arizonaSingleSecondBracket: TaxBracket = {
  minimumToQualify: 27809,
  taxRate: 0.0334,
  taxTotalToThisBracket: (
    arizonaFirstBracket.taxTotalToThisBracket
          + (27808 - arizonaFirstBracket.minimumToQualify) * arizonaFirstBracket.taxRate
  ),
};

const arizonaSingleThirdBracket: TaxBracket = {
  minimumToQualify: 55616,
  taxRate: 0.0417,
  taxTotalToThisBracket: (
    arizonaSingleSecondBracket.taxTotalToThisBracket
          + (55615 - arizonaSingleSecondBracket.minimumToQualify) * arizonaSingleSecondBracket.taxRate
  ),
};

const arizonaSingleFourthBracket: TaxBracket = {
  minimumToQualify: 166844,
  taxRate: 0.045,
  taxTotalToThisBracket: (
    arizonaSingleThirdBracket.taxTotalToThisBracket
          + (166843 - arizonaSingleThirdBracket.minimumToQualify) * arizonaSingleThirdBracket.taxRate
  ),
};

const arizonaSingleFifthBracket: TaxBracket = {
  minimumToQualify: 250001,
  taxRate: 0.01,
  taxTotalToThisBracket: (
    arizonaSingleFourthBracket.taxTotalToThisBracket
          + (250000 - arizonaSingleFourthBracket.minimumToQualify) * arizonaSingleFourthBracket.taxRate
  ),
};

const arizonaMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 55616,
  taxRate: 0.0334,
  taxTotalToThisBracket: (
    arizonaFirstBracket.taxTotalToThisBracket
          + (55615 - arizonaFirstBracket.minimumToQualify) * arizonaFirstBracket.taxRate
  ),
};

const arizonaMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 111230,
  taxRate: 0.0417,
  taxTotalToThisBracket: (
    arizonaMarriedSecondBracket.taxTotalToThisBracket
          + (111229 - arizonaMarriedSecondBracket.minimumToQualify) * arizonaMarriedSecondBracket.taxRate
  ),
};

const arizonaMarriedFourthBracket: TaxBracket = {
  minimumToQualify: 333685,
  taxRate: 0.045,
  taxTotalToThisBracket: (
    arizonaMarriedThirdBracket.taxTotalToThisBracket
          + (333684 - arizonaMarriedThirdBracket.minimumToQualify) * arizonaMarriedThirdBracket.taxRate
  ),
};

const arizonaMarriedFifthBracket: TaxBracket = {
  minimumToQualify: 500001,
  taxRate: 0.01,
  taxTotalToThisBracket: (
    arizonaMarriedFourthBracket.taxTotalToThisBracket
          + (500000 - arizonaMarriedThirdBracket.minimumToQualify) * arizonaMarriedThirdBracket.taxRate
  ),
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
