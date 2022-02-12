import { TaxBracket } from '../../../types';

const idahoFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.01,
  taxTotalToThisBracket: 0,
};

const idahoSingleSecondBracket: TaxBracket = {
  minimumToQualify: 1589,
  taxRate: 0.031,
  taxTotalToThisBracket: (
    idahoFirstBracket.taxTotalToThisBracket
        + (1588 - idahoFirstBracket.minimumToQualify) * idahoFirstBracket.taxTotalToThisBracket
  ),
};

const idahoSingleThirdBracket: TaxBracket = {
  minimumToQualify: 4764,
  taxRate: 0.045,
  taxTotalToThisBracket: (
    idahoSingleSecondBracket.taxTotalToThisBracket
        + (4763 - idahoSingleSecondBracket.minimumToQualify) * idahoSingleSecondBracket.taxRate
  ),
};

const idahoSingleFourthBracket: TaxBracket = {
  minimumToQualify: 6352,
  taxRate: 0.055,
  taxTotalToThisBracket: (
    idahoSingleThirdBracket.taxTotalToThisBracket
            + (6351 - idahoSingleThirdBracket.minimumToQualify) * idahoSingleThirdBracket.taxRate
  ),
};

const idahoSingleFifthBracket: TaxBracket = {
  minimumToQualify: 7940,
  taxRate: 0.065,
  taxTotalToThisBracket: (
    idahoSingleFourthBracket.taxTotalToThisBracket
            + (7939 - idahoSingleFourthBracket.minimumToQualify) * idahoSingleFourthBracket.taxRate
  ),
};

const idahoMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 3177,
  taxRate: 0.031,
  taxTotalToThisBracket: (
    idahoFirstBracket.taxTotalToThisBracket
            + (3176 - idahoFirstBracket.minimumToQualify) * idahoFirstBracket.taxRate
  ),
};

const idahoMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 9527,
  taxRate: 0.045,
  taxTotalToThisBracket: (
    idahoMarriedSecondBracket.taxTotalToThisBracket
        + (9526 - idahoMarriedSecondBracket.minimumToQualify) * idahoMarriedSecondBracket.taxRate
  ),
};

const idahoMarriedFourthBracket: TaxBracket = {
  minimumToQualify: 12703,
  taxRate: 0.055,
  taxTotalToThisBracket: (
    idahoMarriedSecondBracket.taxTotalToThisBracket
        + (12702 - idahoMarriedThirdBracket.minimumToQualify) * idahoMarriedThirdBracket.taxRate
  ),
};

const idahoMarriedFifthBracket: TaxBracket = {
  minimumToQualify: 15879,
  taxRate: 0.065,
  taxTotalToThisBracket: (
    idahoMarriedFourthBracket.taxTotalToThisBracket
        + (15878 - idahoMarriedFourthBracket.minimumToQualify) * idahoMarriedFourthBracket.taxRate
  ),
};

export const idahoSingleIncomeTaxBracketsArray: TaxBracket[] = [
  idahoFirstBracket,
  idahoSingleSecondBracket,
  idahoSingleThirdBracket,
  idahoSingleFourthBracket,
  idahoSingleFifthBracket,
];

export const idahoSingleIncomeTaxBracketObject = {
  idahoFirstBracket,
  idahoSingleSecondBracket,
  idahoSingleThirdBracket,
  idahoSingleFourthBracket,
  idahoSingleFifthBracket,
};

export const idahoMarriedIncomeTaxBracketsArray: TaxBracket[] = [
  idahoFirstBracket,
  idahoMarriedSecondBracket,
  idahoMarriedThirdBracket,
  idahoMarriedFourthBracket,
  idahoMarriedFifthBracket,
];

export const idahoMarriedIncomeTaxBracketsObject = {
  idahoFirstBracket,
  idahoMarriedSecondBracket,
  idahoMarriedThirdBracket,
  idahoMarriedFourthBracket,
  idahoMarriedFifthBracket,
};

export const IDAHO_SINGLE_STANDARD_DEDUCTION = 12950;
export const IDAHO_MARRIED_STANDARD_DEDUCTION = 25900;
