import { TaxBracket } from '../../../types';

const oklahomaFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.005,
  taxTotalToThisBracket: 0,
};

const oklahomaSingleSecondBracket: TaxBracket = {
  minimumToQualify: 1001,
  taxRate: 0.01,
  taxTotalToThisBracket: (
    oklahomaFirstBracket.taxTotalToThisBracket
          + (1000 - oklahomaFirstBracket.minimumToQualify) * oklahomaFirstBracket.taxRate
  ),
};

const oklahomaSingleThirdBracket: TaxBracket = {
  minimumToQualify: 2501,
  taxRate: 0.02,
  taxTotalToThisBracket: (
    oklahomaSingleSecondBracket.taxTotalToThisBracket
          + (2500 - oklahomaSingleSecondBracket.minimumToQualify) * oklahomaSingleSecondBracket.taxRate
  ),
};

const oklahomaSingleFourthBracket: TaxBracket = {
  minimumToQualify: 3751,
  taxRate: 0.03,
  taxTotalToThisBracket: (
    oklahomaSingleThirdBracket.taxTotalToThisBracket
          + (3750 - oklahomaSingleThirdBracket.minimumToQualify) * oklahomaSingleThirdBracket.taxRate
  ),
};

const oklahomaSingleFifthBracket: TaxBracket = {
  minimumToQualify: 4901,
  taxRate: 0.04,
  taxTotalToThisBracket: (
    oklahomaSingleFourthBracket.taxTotalToThisBracket
          + (4900 - oklahomaSingleFourthBracket.minimumToQualify) * oklahomaSingleFourthBracket.taxRate
  ),
};

const oklahomaSingleSixthBracket: TaxBracket = {
  minimumToQualify: 7201,
  taxRate: 0.05,
  taxTotalToThisBracket: (
    oklahomaSingleFifthBracket.taxTotalToThisBracket
          + (7200 - oklahomaSingleFifthBracket.minimumToQualify) * oklahomaSingleFifthBracket.taxRate
  ),
};

const oklahomaSingleSeventhBracket: TaxBracket = {
  minimumToQualify: 8701,
  taxRate: 0.0525,
  taxTotalToThisBracket: (
    oklahomaSingleSixthBracket.taxTotalToThisBracket
          + (8700 - oklahomaSingleSixthBracket.minimumToQualify) * oklahomaSingleSixthBracket.taxRate
  ),
};

const oklahomaMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 2001,
  taxRate: 0.01,
  taxTotalToThisBracket: (
    oklahomaFirstBracket.taxTotalToThisBracket
          + (2000 - oklahomaFirstBracket.minimumToQualify) * oklahomaFirstBracket.taxRate
  ),
};

const oklahomaMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 5001,
  taxRate: 0.02,
  taxTotalToThisBracket: (
    oklahomaMarriedSecondBracket.taxTotalToThisBracket
          + (5000 - oklahomaMarriedSecondBracket.minimumToQualify) * oklahomaMarriedSecondBracket.taxRate
  ),
};

const oklahomaMarriedFourthBracket: TaxBracket = {
  minimumToQualify: 7501,
  taxRate: 0.03,
  taxTotalToThisBracket: (
    oklahomaMarriedThirdBracket.taxTotalToThisBracket
          + (7500 - oklahomaMarriedThirdBracket.minimumToQualify) * oklahomaMarriedThirdBracket.taxRate
  ),
};

const oklahomaMarriedFifthBracket: TaxBracket = {
  minimumToQualify: 9801,
  taxRate: 0.04,
  taxTotalToThisBracket: (
    oklahomaMarriedFourthBracket.taxTotalToThisBracket
          + (9800 - oklahomaMarriedFourthBracket.minimumToQualify) * oklahomaMarriedFourthBracket.taxRate
  ),
};

const oklahomaMarriedSixthBracket: TaxBracket = {
  minimumToQualify: 12201,
  taxRate: 0.05,
  taxTotalToThisBracket: (
    oklahomaMarriedFifthBracket.taxTotalToThisBracket
          + (12200 - oklahomaMarriedFifthBracket.minimumToQualify) * oklahomaMarriedFifthBracket.taxRate
  ),
};

const oklahomaMarriedSeventhBracket: TaxBracket = {
  minimumToQualify: 15001,
  taxRate: 0.0525,
  taxTotalToThisBracket: (
    oklahomaMarriedSixthBracket.taxTotalToThisBracket
          + (15000 - oklahomaMarriedSixthBracket.minimumToQualify) * oklahomaMarriedSixthBracket.taxRate
  ),
};

export const oklahomaSingleIncomeTaxBracketsArray: TaxBracket[] = [
  oklahomaFirstBracket,
  oklahomaSingleSecondBracket,
  oklahomaSingleThirdBracket,
  oklahomaSingleFourthBracket,
  oklahomaSingleFifthBracket,
  oklahomaSingleSixthBracket,
  oklahomaSingleSeventhBracket,
];

export const oklahomaSingleIncomeTaxBracketsObject = {
  oklahomaFirstBracket,
  oklahomaSingleSecondBracket,
  oklahomaSingleThirdBracket,
  oklahomaSingleFourthBracket,
  oklahomaSingleFifthBracket,
  oklahomaSingleSixthBracket,
  oklahomaSingleSeventhBracket,
};

export const oklahomaMarriedIncomeTaxBracketsArray: TaxBracket[] = [
  oklahomaFirstBracket,
  oklahomaMarriedSecondBracket,
  oklahomaMarriedThirdBracket,
  oklahomaMarriedFourthBracket,
  oklahomaMarriedFifthBracket,
  oklahomaMarriedSixthBracket,
  oklahomaMarriedSeventhBracket,
];

export const oklahomaMarriedIncomeTaxBracketsObject = {
  oklahomaFirstBracket,
  oklahomaMarriedSecondBracket,
  oklahomaMarriedThirdBracket,
  oklahomaMarriedFourthBracket,
  oklahomaMarriedFifthBracket,
  oklahomaMarriedSixthBracket,
  oklahomaMarriedSeventhBracket,
};
