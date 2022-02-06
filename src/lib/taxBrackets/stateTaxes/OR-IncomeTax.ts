import { TaxBracket } from '../../../types';

const oregonFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.05,
  taxTotalToThisBracket: 0,
};

const oregonSingleSecondBracket: TaxBracket = {
  minimumToQualify: 3351,
  taxRate: 0.07,
  taxTotalToThisBracket: 167.50,
};

const oregonSingleThirdBracket: TaxBracket = {
  minimumToQualify: 8401,
  taxRate: 0.09,
  taxTotalToThisBracket: 520.93,
};

const oregonSingleFourthBracket: TaxBracket = {
  minimumToQualify: 125001,
  taxRate: 0.099,
  taxTotalToThisBracket: (
    oregonSingleThirdBracket.taxTotalToThisBracket + 10494
  ),
};

const oregonMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 6701,
  taxRate: 0.07,
  taxTotalToThisBracket: 335,
};

const oregonMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 16801,
  taxRate: 0.09,
  taxTotalToThisBracket: 706.93,
};

const oregonMarriedFourthBracket: TaxBracket = {
  minimumToQualify: 250001,
  taxRate: 0.099,
  taxTotalToThisBracket: (
    oregonMarriedThirdBracket.taxTotalToThisBracket + 20988
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
