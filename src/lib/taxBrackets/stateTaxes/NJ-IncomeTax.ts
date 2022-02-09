import { TaxBracket } from '../../../types';

const newJerseyFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.014,
  taxTotalToThisBracket: 0,
};

const newJerseySecondBracket: TaxBracket = {
  minimumToQualify: 20001,
  taxRate: 0.0175,
  taxTotalToThisBracket: (
    newJerseyFirstBracket.taxTotalToThisBracket
          + (20000 - newJerseyFirstBracket.minimumToQualify) * newJerseyFirstBracket.taxRate
  ),
};

const newJerseySingleThirdBracket: TaxBracket = {
  minimumToQualify: 35001,
  taxRate: 0.035,
  taxTotalToThisBracket: (
    newJerseySecondBracket.taxTotalToThisBracket
          + (35000 - newJerseySecondBracket.minimumToQualify) * newJerseySecondBracket.taxRate
  ),
};

const newJerseySingleFourthBracket: TaxBracket = {
  minimumToQualify: 40001,
  taxRate: 0.05525,
  taxTotalToThisBracket: (
    newJerseySingleThirdBracket.taxTotalToThisBracket
          + (40000 - newJerseySingleThirdBracket.minimumToQualify) * newJerseySingleThirdBracket.taxRate
  ),
};

const newJerseySingleFifthBracket: TaxBracket = {
  minimumToQualify: 75001,
  taxRate: 0.0637,
  taxTotalToThisBracket: (
    newJerseySingleFourthBracket.taxTotalToThisBracket
          + (75000 - newJerseySingleFourthBracket.minimumToQualify) * newJerseySingleFourthBracket.taxRate
  ),
};

const newJerseySingleSixthBracket: TaxBracket = {
  minimumToQualify: 500001,
  taxRate: 0.0897,
  taxTotalToThisBracket: (
    newJerseySingleFifthBracket.taxTotalToThisBracket
          + (500000 - newJerseySingleFifthBracket.minimumToQualify) * newJerseySingleFifthBracket.taxRate
  ),
};

const newJerseySingleSeventhBracket: TaxBracket = {
  minimumToQualify: 5000001,
  taxRate: 0.1075,
  taxTotalToThisBracket: (
    newJerseySingleSixthBracket.taxTotalToThisBracket
          + (5000000 - newJerseySingleSixthBracket.minimumToQualify) * newJerseySingleSixthBracket.taxRate
  ),
};

const newJerseyMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 50001,
  taxRate: 0.0245,
  taxTotalToThisBracket: (
    newJerseySecondBracket.taxTotalToThisBracket
          + (50000 - newJerseySecondBracket.minimumToQualify) * newJerseySecondBracket.taxRate
  ),
};

const newJerseyMarriedFourthBracket: TaxBracket = {
  minimumToQualify: 70001,
  taxRate: 0.035,
  taxTotalToThisBracket: (
    newJerseyMarriedThirdBracket.taxTotalToThisBracket
          + (70000 - newJerseyMarriedThirdBracket.minimumToQualify) * newJerseyMarriedThirdBracket.taxRate
  ),
};

const newJerseyMarriedFifthBracket: TaxBracket = {
  minimumToQualify: 80001,
  taxRate: 0.05525,
  taxTotalToThisBracket: (
    newJerseyMarriedFourthBracket.taxTotalToThisBracket
          + (80000 - newJerseyMarriedFourthBracket.minimumToQualify) * newJerseyMarriedFourthBracket.taxRate
  ),
};

const newJerseyMarriedSixthBracket: TaxBracket = {
  minimumToQualify: 150001,
  taxRate: 0.0637,
  taxTotalToThisBracket: (
    newJerseyMarriedFifthBracket.taxTotalToThisBracket
          + (150000 - newJerseyMarriedFifthBracket.minimumToQualify) * newJerseyMarriedFifthBracket.taxRate
  ),
};

const newJerseyMarriedSeventhBracket: TaxBracket = {
  minimumToQualify: 500001,
  taxRate: 0.0897,
  taxTotalToThisBracket: (
    newJerseyMarriedSixthBracket.taxTotalToThisBracket
          + (500000 - newJerseyMarriedSixthBracket.minimumToQualify) * newJerseyMarriedSixthBracket.taxRate
  ),
};

const newJerseyMarriedEighthBracket: TaxBracket = {
  minimumToQualify: 5000001,
  taxRate: 0.1075,
  taxTotalToThisBracket: (
    newJerseyMarriedSeventhBracket.taxTotalToThisBracket
          + (5000000 - newJerseyMarriedSeventhBracket.minimumToQualify) * newJerseyMarriedSeventhBracket.taxRate
  ),
};

export const newJerseySingleIncomeTaxBracketsArray: TaxBracket[] = [
  newJerseyFirstBracket,
  newJerseySecondBracket,
  newJerseySingleThirdBracket,
  newJerseySingleFourthBracket,
  newJerseySingleFifthBracket,
  newJerseySingleSixthBracket,
  newJerseySingleSeventhBracket,
];

export const newJerseySingleIncomeTaxBracketsObject = {
  newJerseyFirstBracket,
  newJerseySecondBracket,
  newJerseySingleThirdBracket,
  newJerseySingleFourthBracket,
  newJerseySingleFifthBracket,
  newJerseySingleSixthBracket,
  newJerseySingleSeventhBracket,
};

export const newJerseyMarriedIncomeTaxBracketsArray: TaxBracket[] = [
  newJerseyFirstBracket,
  newJerseySecondBracket,
  newJerseyMarriedThirdBracket,
  newJerseyMarriedFourthBracket,
  newJerseyMarriedFifthBracket,
  newJerseyMarriedSixthBracket,
  newJerseyMarriedSeventhBracket,
  newJerseyMarriedEighthBracket,
];

export const newJerseyMarriedIncomeTaxBracketsObject = {
  newJerseyFirstBracket,
  newJerseySecondBracket,
  newJerseyMarriedThirdBracket,
  newJerseyMarriedFourthBracket,
  newJerseyMarriedFifthBracket,
  newJerseyMarriedSixthBracket,
  newJerseyMarriedSeventhBracket,
  newJerseyMarriedEighthBracket,
};
