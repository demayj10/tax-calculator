import { TaxBracket } from '../../../types';

const marylandFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.02,
  taxTotalToThisBracket: 0,
};

const marylandSecondBracket: TaxBracket = {
  minimumToQualify: 1001,
  taxRate: 0.03,
  taxTotalToThisBracket: (
    marylandFirstBracket.taxTotalToThisBracket
          + (1000 - marylandFirstBracket.minimumToQualify) * marylandFirstBracket.taxRate
  ),
};

const marylandThirdBracket: TaxBracket = {
  minimumToQualify: 2001,
  taxRate: 0.04,
  taxTotalToThisBracket: (
    marylandSecondBracket.taxTotalToThisBracket
          + (2000 - marylandSecondBracket.minimumToQualify) * marylandSecondBracket.taxRate
  ),
};

const marylandFourthBracket: TaxBracket = {
  minimumToQualify: 3001,
  taxRate: 0.0475,
  taxTotalToThisBracket: (
    marylandThirdBracket.taxTotalToThisBracket
          + (3000 - marylandThirdBracket.minimumToQualify) * marylandThirdBracket.taxRate
  ),
};

const marylandSingleFifthBracket: TaxBracket = {
  minimumToQualify: 100001,
  taxRate: 0.05,
  taxTotalToThisBracket: (
    marylandFourthBracket.taxTotalToThisBracket
          + (100000 - marylandFourthBracket.minimumToQualify) * marylandFourthBracket.taxRate
  ),
};

const marylandSingleSixthBracket: TaxBracket = {
  minimumToQualify: 125001,
  taxRate: 0.0525,
  taxTotalToThisBracket: (
    marylandSingleFifthBracket.taxTotalToThisBracket
          + (125000 - marylandSingleFifthBracket.minimumToQualify) * marylandSingleFifthBracket.taxRate
  ),
};

const marylandSingleSeventhBracket: TaxBracket = {
  minimumToQualify: 150001,
  taxRate: 0.0550,
  taxTotalToThisBracket: (
    marylandSingleSixthBracket.taxTotalToThisBracket
          + (150000 - marylandSingleSixthBracket.minimumToQualify) * marylandSingleSixthBracket.taxRate
  ),
};

const marylandSingleEighthBracket: TaxBracket = {
  minimumToQualify: 250001,
  taxRate: 0.0575,
  taxTotalToThisBracket: (
    marylandSingleSeventhBracket.taxTotalToThisBracket
          + (250000 - marylandSingleSeventhBracket.minimumToQualify) * marylandSingleSeventhBracket.taxRate
  ),
};

const marylandMarriedFifthBracket: TaxBracket = {
  minimumToQualify: 150001,
  taxRate: 0.05,
  taxTotalToThisBracket: (
    marylandFourthBracket.taxTotalToThisBracket
          + (150000 - marylandFourthBracket.minimumToQualify) * marylandFourthBracket.taxRate
  ),
};

const marylandMarriedSixthBracket: TaxBracket = {
  minimumToQualify: 175001,
  taxRate: 0.0525,
  taxTotalToThisBracket: (
    marylandMarriedFifthBracket.taxTotalToThisBracket
          + (175000 - marylandMarriedFifthBracket.minimumToQualify) * marylandMarriedFifthBracket.taxRate
  ),
};

const marylandMarriedSeventhBracket: TaxBracket = {
  minimumToQualify: 225001,
  taxRate: 0.055,
  taxTotalToThisBracket: (
    marylandMarriedSixthBracket.taxTotalToThisBracket
          + (225000 - marylandMarriedSixthBracket.minimumToQualify) * marylandMarriedSixthBracket.taxRate
  ),
};

const marylandMarriedEighthBracket: TaxBracket = {
  minimumToQualify: 300001,
  taxRate: 0.0575,
  taxTotalToThisBracket: (
    marylandMarriedSeventhBracket.taxTotalToThisBracket
          + (300000 - marylandMarriedSeventhBracket.minimumToQualify) * marylandMarriedSeventhBracket.taxRate
  ),
};

export const marylandSingleIncomeTaxBracketsArray: TaxBracket[] = [
  marylandFirstBracket,
  marylandSecondBracket,
  marylandThirdBracket,
  marylandFourthBracket,
  marylandSingleFifthBracket,
  marylandSingleSixthBracket,
  marylandSingleSeventhBracket,
  marylandSingleEighthBracket,
];

export const marylandSingleIncomeTaxBracketsObject = {
  marylandFirstBracket,
  marylandSecondBracket,
  marylandThirdBracket,
  marylandFourthBracket,
  marylandSingleFifthBracket,
  marylandSingleSixthBracket,
  marylandSingleSeventhBracket,
  marylandSingleEighthBracket,
};

export const marylandMarriedIncomeTaxBracketsArray: TaxBracket[] = [
  marylandFirstBracket,
  marylandSecondBracket,
  marylandThirdBracket,
  marylandFourthBracket,
  marylandMarriedFifthBracket,
  marylandMarriedSixthBracket,
  marylandMarriedSeventhBracket,
  marylandMarriedEighthBracket,
];

export const marylandMarriedIncomeTaxBracketsObject = {
  marylandFirstBracket,
  marylandSecondBracket,
  marylandThirdBracket,
  marylandFourthBracket,
  marylandMarriedFifthBracket,
  marylandMarriedSixthBracket,
  marylandMarriedSeventhBracket,
  marylandMarriedEighthBracket,
};
