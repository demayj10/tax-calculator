import { TaxBracket } from '../../../types';

const oklahomaFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.005,
  taxTotalToThisBracket: 0,
};

const oklahomaSingleSecondBracket: TaxBracket = {
  minimumToQualify: 1000,
  taxRate: 0.01,
  taxTotalToThisBracket: 5,
};

const oklahomaSingleThirdBracket: TaxBracket = {
  minimumToQualify: 2500,
  taxRate: 0.02,
  taxTotalToThisBracket: 20,
};

const oklahomaSingleFourthBracket: TaxBracket = {
  minimumToQualify: 3750,
  taxRate: 0.03,
  taxTotalToThisBracket: 45,
};

const oklahomaSingleFifthBracket: TaxBracket = {
  minimumToQualify: 4900,
  taxRate: 0.04,
  taxTotalToThisBracket: 79.5,
};

const oklahomaSingleSixthBracket: TaxBracket = {
  minimumToQualify: 7200,
  taxRate: 0.05,
  taxTotalToThisBracket: 171.5,
};

const oklahomaMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 2000,
  taxRate: 0.01,
  taxTotalToThisBracket: 10,
};

const oklahomaMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 5000,
  taxRate: 0.02,
  taxTotalToThisBracket: 40,
};

const oklahomaMarriedFourthBracket: TaxBracket = {
  minimumToQualify: 7500,
  taxRate: 0.03,
  taxTotalToThisBracket: 90,
};

const oklahomaMarriedFifthBracket: TaxBracket = {
  minimumToQualify: 9800,
  taxRate: 0.04,
  taxTotalToThisBracket: 159,
};

const oklahomaMarriedSixthBracket: TaxBracket = {
  minimumToQualify: 12200,
  taxRate: 0.05,
  taxTotalToThisBracket: 255,
};

export const oklahomaSingleIncomeTaxBracketsArray: TaxBracket[] = [
  oklahomaFirstBracket,
  oklahomaSingleSecondBracket,
  oklahomaSingleThirdBracket,
  oklahomaSingleFourthBracket,
  oklahomaSingleFifthBracket,
  oklahomaSingleSixthBracket,
];

export const oklahomaSingleIncomeTaxBracketsObject = {
  oklahomaFirstBracket,
  oklahomaSingleSecondBracket,
  oklahomaSingleThirdBracket,
  oklahomaSingleFourthBracket,
  oklahomaSingleFifthBracket,
  oklahomaSingleSixthBracket,
};

export const oklahomaMarriedIncomeTaxBracketsArray: TaxBracket[] = [
  oklahomaFirstBracket,
  oklahomaMarriedSecondBracket,
  oklahomaMarriedThirdBracket,
  oklahomaMarriedFourthBracket,
  oklahomaMarriedFifthBracket,
  oklahomaMarriedSixthBracket,
];

export const oklahomaMarriedIncomeTaxBracketsObject = {
  oklahomaFirstBracket,
  oklahomaMarriedSecondBracket,
  oklahomaMarriedThirdBracket,
  oklahomaMarriedFourthBracket,
  oklahomaMarriedFifthBracket,
  oklahomaMarriedSixthBracket,
};
