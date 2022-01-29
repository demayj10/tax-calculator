import { TaxBracket } from '../../../types';

export const wisconsinFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.04,
  taxTotalToThisBracket: 0,
};

const wisconsinSingleSecondBracket: TaxBracket = {
  minimumToQualify: 11091,
  taxRate: 0.0584,
  taxTotalToThisBracket: 443.6,
};

const wisconsinSingleThirdBracket: TaxBracket = {
  minimumToQualify: 22191,
  taxRate: 0.0627,
  taxTotalToThisBracket: 1091.7816,
};

const wisconsinSingleFourthBracket: TaxBracket = {
  minimumToQualify: 244271,
  taxRate: 0.0765,
  taxTotalToThisBracket: 15016.1349,
};

const wisconsinMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 14791,
  taxRate: 0.0584,
  taxTotalToThisBracket: 591.6,
};

const wisconsinMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 29581,
  taxRate: 0.0627,
  taxTotalToThisBracket: 1455.2776,
};

const wisconsinMarriedFourthBracket: TaxBracket = {
  minimumToQualify: 325701,
  taxRate: 0.0765,
  taxTotalToThisBracket: 20021.9389,
};

export const wisconsinSingleIncomeTaxBracketsArray: TaxBracket[] = [
  wisconsinFirstBracket,
  wisconsinSingleSecondBracket,
  wisconsinSingleThirdBracket,
  wisconsinSingleFourthBracket,
];

export const wisconsinSingleIncomeTaxBracketsObject = {
  wisconsinFirstBracket,
  wisconsinSingleSecondBracket,
  wisconsinSingleThirdBracket,
  wisconsinSingleFourthBracket,
};

export const wisconsinMarriedIncomeTaxBracketsArray: TaxBracket[] = [
  wisconsinFirstBracket,
  wisconsinMarriedSecondBracket,
  wisconsinMarriedThirdBracket,
  wisconsinMarriedFourthBracket,
];

export const wisconsinMarriedIncomeTaxBracketsObject = {
  wisconsinFirstBracket,
  wisconsinMarriedSecondBracket,
  wisconsinMarriedThirdBracket,
  wisconsinMarriedFourthBracket,
};
