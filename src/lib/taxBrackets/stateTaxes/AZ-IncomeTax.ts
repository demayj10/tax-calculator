import { TaxBracket } from '../../../types';

const arizonaFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.0259,
  taxTotalToThisBracket: 0,
};

const arizonaSingleSecondBracket: TaxBracket = {
  minimumToQualify: 27273,
  taxRate: 0.0334,
  taxTotalToThisBracket: (
    arizonaFirstBracket.taxTotalToThisBracket
          + (27272 - arizonaFirstBracket.minimumToQualify) * arizonaFirstBracket.taxRate
  ),
};

const arizonaSingleThirdBracket: TaxBracket = {
  minimumToQualify: 54545,
  taxRate: 0.0417,
  taxTotalToThisBracket: (
    arizonaSingleSecondBracket.taxTotalToThisBracket
          + (54544 - arizonaSingleSecondBracket.minimumToQualify) * arizonaSingleSecondBracket.taxRate
  ),
};

const arizonaSingleFourthBracket: TaxBracket = {
  minimumToQualify: 163633,
  taxRate: 0.045,
  taxTotalToThisBracket: (
    arizonaSingleThirdBracket.taxTotalToThisBracket
          + (163632 - arizonaSingleThirdBracket.minimumToQualify) * arizonaSingleThirdBracket.taxRate
  ),
};

const arizonaMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 54545,
  taxRate: 0.0334,
  taxTotalToThisBracket: (
    arizonaFirstBracket.taxTotalToThisBracket
          + (54544 - arizonaFirstBracket.minimumToQualify) * arizonaFirstBracket.taxRate
  ),
};

const arizonaMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 109089,
  taxRate: 0.0417,
  taxTotalToThisBracket: (
    arizonaMarriedSecondBracket.taxTotalToThisBracket
          + (109088 - arizonaMarriedSecondBracket.minimumToQualify) * arizonaMarriedSecondBracket.taxRate
  ),
};

const arizonaMarriedFourthBracket: TaxBracket = {
  minimumToQualify: 327264,
  taxRate: 0.045,
  taxTotalToThisBracket: (
    arizonaMarriedThirdBracket.taxTotalToThisBracket
          + (327263 - arizonaMarriedThirdBracket.minimumToQualify) * arizonaMarriedThirdBracket.taxRate
  ),
};

export const arizonaSingleIncomeTaxBracketsArray: TaxBracket[] = [
  arizonaFirstBracket,
  arizonaSingleSecondBracket,
  arizonaSingleThirdBracket,
  arizonaSingleFourthBracket,
];

export const arizonaSingleIncomeTaxBracketsObject = {
  arizonaFirstBracket,
  arizonaSingleSecondBracket,
  arizonaSingleThirdBracket,
  arizonaSingleFourthBracket,
};

export const arizonaMarriedIncomeTaxBracketsArray: TaxBracket[] = [
  arizonaFirstBracket,
  arizonaMarriedSecondBracket,
  arizonaMarriedThirdBracket,
  arizonaMarriedFourthBracket,
];

export const arizonaMarriedIncomeTaxBracketsObject = {
  arizonaFirstBracket,
  arizonaMarriedSecondBracket,
  arizonaMarriedThirdBracket,
  arizonaMarriedFourthBracket,
};
