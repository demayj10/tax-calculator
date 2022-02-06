import { TaxBracket } from '../../../types';

const oregonFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.05,
  taxTotalToThisBracket: 0,
};

const oregonSingleSecondBracket: TaxBracket = {
  minimumToQualify: 3351,
  taxRate: 0.07,
  taxTotalToThisBracket: (
    oregonFirstBracket.taxTotalToThisBracket
      + (3350 - oregonFirstBracket.minimumToQualify) * oregonFirstBracket.taxRate
  ),
};

const oregonSingleThirdBracket: TaxBracket = {
  minimumToQualify: 8401,
  taxRate: 0.09,
  taxTotalToThisBracket: (
    oregonSingleSecondBracket.taxTotalToThisBracket
      + (8400 - oregonSingleSecondBracket.minimumToQualify) * oregonSingleSecondBracket.taxRate
  ),
};

const oregonSingleFourthBracket: TaxBracket = {
  minimumToQualify: 125001,
  taxRate: 0.099,
  taxTotalToThisBracket: (
    oregonSingleThirdBracket.taxTotalToThisBracket
      + (125000 - oregonSingleThirdBracket.minimumToQualify) * oregonSingleThirdBracket.taxRate
  ),
};

const oregonMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 6701,
  taxRate: 0.07,
  taxTotalToThisBracket: (
    oregonFirstBracket.taxTotalToThisBracket
      + (6700 - oregonFirstBracket.minimumToQualify) * oregonFirstBracket.taxRate
  ),
};

const oregonMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 16801,
  taxRate: 0.09,
  taxTotalToThisBracket: (
    oregonMarriedSecondBracket.taxTotalToThisBracket
      + (16800 - oregonMarriedSecondBracket.minimumToQualify) * oregonMarriedSecondBracket.taxRate
  ),
};

const oregonMarriedFourthBracket: TaxBracket = {
  minimumToQualify: 250001,
  taxRate: 0.099,
  taxTotalToThisBracket: (
    oregonMarriedThirdBracket.taxTotalToThisBracket
      + (250000 - oregonMarriedThirdBracket.minimumToQualify) * oregonMarriedThirdBracket.taxRate
  ),
};

export const oregonSingleIncomeTaxBracketsArray: TaxBracket[] = [
  oregonFirstBracket,
  oregonSingleSecondBracket,
  oregonSingleThirdBracket,
  oregonSingleFourthBracket,
];

export const oregonSingleIncomeTaxBracketsObject = {
  oregonFirstBracket,
  oregonSingleSecondBracket,
  oregonSingleThirdBracket,
  oregonSingleFourthBracket,
};

export const oregonMarriedIncomeTaxBracketsArray: TaxBracket[] = [
  oregonFirstBracket,
  oregonMarriedSecondBracket,
  oregonMarriedThirdBracket,
  oregonMarriedFourthBracket,
];

export const oregonMarriedIncomeTaxBracketsObject = {
  oregonFirstBracket,
  oregonMarriedSecondBracket,
  oregonMarriedThirdBracket,
  oregonMarriedFourthBracket,
};
