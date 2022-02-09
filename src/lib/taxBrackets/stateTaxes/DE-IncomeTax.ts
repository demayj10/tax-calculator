import { TaxBracket } from '../../../types';

const delawareFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.0,
  taxTotalToThisBracket: 0,
};

const delawareSecondBracket: TaxBracket = {
  minimumToQualify: 2001,
  taxRate: 0.022,
  taxTotalToThisBracket: (
    delawareFirstBracket.taxTotalToThisBracket
          + (2000 - delawareFirstBracket.minimumToQualify) * delawareFirstBracket.taxRate
  ),
};

const delawareThirdBracket: TaxBracket = {
  minimumToQualify: 5001,
  taxRate: 0.039,
  taxTotalToThisBracket: (
    delawareSecondBracket.taxTotalToThisBracket
          + (5000 - delawareSecondBracket.minimumToQualify) * delawareSecondBracket.taxRate
  ),
};

const delawareFourthBracket: TaxBracket = {
  minimumToQualify: 10001,
  taxRate: 0.048,
  taxTotalToThisBracket: (
    delawareThirdBracket.taxTotalToThisBracket
          + (10000 - delawareThirdBracket.minimumToQualify) * delawareThirdBracket.taxRate
  ),
};

const delawareFifthBracket: TaxBracket = {
  minimumToQualify: 20001,
  taxRate: 0.052,
  taxTotalToThisBracket: (
    delawareFourthBracket.taxTotalToThisBracket
          + (20000 - delawareFourthBracket.minimumToQualify) * delawareFourthBracket.taxRate
  ),
};

const delawareSixthBracket: TaxBracket = {
  minimumToQualify: 25001,
  taxRate: 0.055,
  taxTotalToThisBracket: (
    delawareFifthBracket.taxTotalToThisBracket
          + (25000 - delawareFifthBracket.minimumToQualify) * delawareFifthBracket.taxRate
  ),
};

const delawareSeventhBracket: TaxBracket = {
  minimumToQualify: 60001,
  taxRate: 0.066,
  taxTotalToThisBracket: (
    delawareSixthBracket.taxTotalToThisBracket
          + (60000 - delawareSixthBracket.minimumToQualify) * delawareSixthBracket.taxRate
  ),
};

export const delawareIncomeTaxBracketsArray: TaxBracket[] = [
  delawareFirstBracket,
  delawareSecondBracket,
  delawareThirdBracket,
  delawareFourthBracket,
  delawareFifthBracket,
  delawareSixthBracket,
  delawareSeventhBracket,
];

export const delawareIncomeTaxBracketsObject = {
  delawareFirstBracket,
  delawareSecondBracket,
  delawareThirdBracket,
  delawareFourthBracket,
  delawareFifthBracket,
  delawareSixthBracket,
  delawareSeventhBracket,
};
