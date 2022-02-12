import { TaxBracket } from '../../../types';

const connecticutFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.03,
  taxTotalToThisBracket: 0,
};

const connecticutSingleSecondBracket: TaxBracket = {
  minimumToQualify: 10001,
  taxRate: 0.05,
  taxTotalToThisBracket: (
    connecticutFirstBracket.taxTotalToThisBracket
            + (10000 - connecticutFirstBracket.minimumToQualify) * connecticutFirstBracket.taxRate
  ),
};

const connecticutSingleThirdBracket: TaxBracket = {
  minimumToQualify: 50001,
  taxRate: 0.055,
  taxTotalToThisBracket: (
    connecticutSingleSecondBracket.taxTotalToThisBracket
            + (50000 - connecticutSingleSecondBracket.minimumToQualify) * connecticutSingleSecondBracket.taxRate
  ),
};

const connecticutSingleFourthBracket: TaxBracket = {
  minimumToQualify: 100001,
  taxRate: 0.06,
  taxTotalToThisBracket: (
    connecticutSingleThirdBracket.taxTotalToThisBracket
            + (100000 - connecticutSingleThirdBracket.minimumToQualify) * connecticutSingleThirdBracket.taxRate
  ),
};

const connecticutSingleFifthBracket: TaxBracket = {
  minimumToQualify: 200001,
  taxRate: 0.065,
  taxTotalToThisBracket: (
    connecticutSingleFourthBracket.taxTotalToThisBracket
            + (200000 - connecticutSingleFourthBracket.minimumToQualify) * connecticutSingleFourthBracket.taxRate
  ),
};

const connecticutSingleSixthBracket: TaxBracket = {
  minimumToQualify: 250001,
  taxRate: 0.069,
  taxTotalToThisBracket: (
    connecticutSingleFifthBracket.taxTotalToThisBracket
            + (250000 - connecticutSingleFifthBracket.minimumToQualify) * connecticutSingleFifthBracket.taxRate
  ),
};

const connecticutSingleSeventhBracket: TaxBracket = {
  minimumToQualify: 500001,
  taxRate: 0.0699,
  taxTotalToThisBracket: (
    connecticutSingleSixthBracket.taxTotalToThisBracket
            + (500000 - connecticutSingleFifthBracket.minimumToQualify) * connecticutSingleSixthBracket.taxRate
  ),
};

const connecticutMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 20001,
  taxRate: 0.05,
  taxTotalToThisBracket: (
    connecticutFirstBracket.taxTotalToThisBracket
            + (20000 - connecticutFirstBracket.minimumToQualify) * connecticutFirstBracket.taxRate
  ),
};

const connecticutMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 100001,
  taxRate: 0.055,
  taxTotalToThisBracket: (
    connecticutMarriedSecondBracket.taxTotalToThisBracket
            + (100000 - connecticutMarriedSecondBracket.minimumToQualify) * connecticutMarriedSecondBracket.taxRate
  ),
};

const connecticutMarriedFourthBracket: TaxBracket = {
  minimumToQualify: 200001,
  taxRate: 0.06,
  taxTotalToThisBracket: (
    connecticutMarriedThirdBracket.taxTotalToThisBracket
            + (200000 - connecticutMarriedThirdBracket.minimumToQualify) * connecticutMarriedThirdBracket.taxRate
  ),
};

const connecticutMarriedFifthBracket: TaxBracket = {
  minimumToQualify: 400001,
  taxRate: 0.065,
  taxTotalToThisBracket: (
    connecticutMarriedFourthBracket.taxTotalToThisBracket
            + (20000 - connecticutMarriedFourthBracket.minimumToQualify) * connecticutMarriedFourthBracket.taxRate
  ),
};

const connecticutMarriedSixthBracket: TaxBracket = {
  minimumToQualify: 500001,
  taxRate: 0.069,
  taxTotalToThisBracket: (
    connecticutMarriedFifthBracket.taxTotalToThisBracket
            + (500000 - connecticutMarriedFifthBracket.minimumToQualify) * connecticutMarriedFifthBracket.taxRate
  ),
};

const connecticutMarriedSeventhBracket: TaxBracket = {
  minimumToQualify: 1000001,
  taxRate: 0.0699,
  taxTotalToThisBracket: (
    connecticutMarriedSixthBracket.taxTotalToThisBracket
            + (1000000 - connecticutMarriedSixthBracket.minimumToQualify) * connecticutMarriedSixthBracket.taxRate
  ),
};

export const connecticutSingleIncomeTaxBracketsArray: TaxBracket[] = [
  connecticutFirstBracket,
  connecticutSingleSecondBracket,
  connecticutSingleThirdBracket,
  connecticutSingleFourthBracket,
  connecticutSingleFifthBracket,
  connecticutSingleSixthBracket,
  connecticutSingleSeventhBracket,
];

export const connecticutSingleIncomeTaxBracketsObject = {
  connecticutFirstBracket,
  connecticutSingleSecondBracket,
  connecticutSingleThirdBracket,
  connecticutSingleFourthBracket,
  connecticutSingleFifthBracket,
  connecticutSingleSixthBracket,
  connecticutSingleSeventhBracket,
};

export const connecticutMarriedIncomeTaxBracketsArray: TaxBracket[] = [
  connecticutFirstBracket,
  connecticutMarriedSecondBracket,
  connecticutMarriedThirdBracket,
  connecticutMarriedFourthBracket,
  connecticutMarriedFifthBracket,
  connecticutMarriedSixthBracket,
  connecticutMarriedSeventhBracket,
];

export const connecticutMarriedIncomeTaxBracketsObject = {
  connecticutFirstBracket,
  connecticutMarriedSecondBracket,
  connecticutMarriedThirdBracket,
  connecticutMarriedFourthBracket,
  connecticutMarriedFifthBracket,
  connecticutMarriedSixthBracket,
  connecticutMarriedSeventhBracket,
};

export const CONNECTICUT_SINGLE_STANDARD_DEDUCTION = 0;
export const CONNECTICUT_MARRIED_STANDARD_DEDUCTION = 0;
