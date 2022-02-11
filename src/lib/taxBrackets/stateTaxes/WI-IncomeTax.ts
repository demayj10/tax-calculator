import { TaxBracket } from '../../../types';

const wisconsinFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.04,
  taxTotalToThisBracket: 0,
};

const wisconsinSingleSecondBracket: TaxBracket = {
  minimumToQualify: 11091,
  taxRate: 0.0584,
  taxTotalToThisBracket: (
    wisconsinFirstBracket.taxTotalToThisBracket
          + (11090 - wisconsinFirstBracket.minimumToQualify) * wisconsinFirstBracket.taxRate
  ),
};

const wisconsinSingleThirdBracket: TaxBracket = {
  minimumToQualify: 22191,
  taxRate: 0.0627,
  taxTotalToThisBracket: (
    wisconsinSingleSecondBracket.taxTotalToThisBracket
          + (22190 - wisconsinSingleSecondBracket.minimumToQualify) * wisconsinFirstBracket.taxRate
  ),
};

const wisconsinSingleFourthBracket: TaxBracket = {
  minimumToQualify: 244271,
  taxRate: 0.0765,
  taxTotalToThisBracket: (
    wisconsinSingleThirdBracket.taxTotalToThisBracket
          + (244270 - wisconsinSingleThirdBracket.minimumToQualify) * wisconsinSingleThirdBracket.taxRate
  ),
};

const wisconsinMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 14791,
  taxRate: 0.0584,
  taxTotalToThisBracket: (
    wisconsinFirstBracket.taxTotalToThisBracket
          + (14790 - wisconsinFirstBracket.minimumToQualify) * wisconsinFirstBracket.taxRate
  ),
};

const wisconsinMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 29581,
  taxRate: 0.0627,
  taxTotalToThisBracket: (
    wisconsinMarriedSecondBracket.taxTotalToThisBracket
          + (29580 - wisconsinFirstBracket.minimumToQualify) * wisconsinFirstBracket.taxRate
  ),
};

const wisconsinMarriedFourthBracket: TaxBracket = {
  minimumToQualify: 325701,
  taxRate: 0.0765,
  taxTotalToThisBracket: (
    wisconsinMarriedSecondBracket.taxTotalToThisBracket
          + (325700 - wisconsinMarriedSecondBracket.minimumToQualify) * wisconsinMarriedSecondBracket.taxRate
  ),
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
