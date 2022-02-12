import { TaxBracket } from '../../../types';

const northDakotaFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.011,
  taxTotalToThisBracket: 0,
};

const northDakotaSingleSecondBracket: TaxBracket = {
  minimumToQualify: 39451,
  taxRate: 0.0204,
  taxTotalToThisBracket: (
    northDakotaFirstBracket.taxTotalToThisBracket
          + (39450 - northDakotaFirstBracket.minimumToQualify) * northDakotaFirstBracket.taxRate
  ),
};

const northDakotaSingleThirdBracket: TaxBracket = {
  minimumToQualify: 95501,
  taxRate: 0.0227,
  taxTotalToThisBracket: (
    northDakotaSingleSecondBracket.taxTotalToThisBracket
          + (95500 - northDakotaSingleSecondBracket.minimumToQualify) * northDakotaSingleSecondBracket.taxRate
  ),
};

const northDakotaSingleFourthBracket: TaxBracket = {
  minimumToQualify: 199251,
  taxRate: 0.0264,
  taxTotalToThisBracket: (
    northDakotaSingleThirdBracket.taxTotalToThisBracket
          + (199250 - northDakotaSingleThirdBracket.minimumToQualify) * northDakotaSingleThirdBracket.taxRate
  ),
};

const northDakotaSingleFifthBracket: TaxBracket = {
  minimumToQualify: 433201,
  taxRate: 0.0290,
  taxTotalToThisBracket: (
    northDakotaSingleFourthBracket.taxTotalToThisBracket
          + (433200 - northDakotaSingleFourthBracket.minimumToQualify) * northDakotaSingleFourthBracket.taxRate
  ),
};

const northDakotaMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 65901,
  taxRate: 0.0204,
  taxTotalToThisBracket: (
    northDakotaFirstBracket.taxTotalToThisBracket
          + (65900 - northDakotaFirstBracket.minimumToQualify) * northDakotaFirstBracket.taxRate
  ),
};

const northDakotaMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 159201,
  taxRate: 0.0227,
  taxTotalToThisBracket: (
    northDakotaMarriedSecondBracket.taxTotalToThisBracket
          + (159200 - northDakotaMarriedSecondBracket.minimumToQualify) * northDakotaMarriedSecondBracket.taxRate
  ),
};

const northDakotaMarriedFourthBracket: TaxBracket = {
  minimumToQualify: 242551,
  taxRate: 0.0264,
  taxTotalToThisBracket: (
    northDakotaMarriedThirdBracket.taxTotalToThisBracket
          + (242550 - northDakotaMarriedThirdBracket.minimumToQualify) * northDakotaMarriedThirdBracket.taxRate
  ),
};

const northDakotaMarriedFifthBracket: TaxBracket = {
  minimumToQualify: 433201,
  taxRate: 0.0290,
  taxTotalToThisBracket: (
    northDakotaMarriedFourthBracket.taxTotalToThisBracket
          + (433200 - northDakotaMarriedFourthBracket.minimumToQualify) * northDakotaMarriedFourthBracket.taxRate
  ),
};

export const northDakotaSingleIncomeTaxBracketsArray: TaxBracket[] = [
  northDakotaFirstBracket,
  northDakotaSingleSecondBracket,
  northDakotaSingleThirdBracket,
  northDakotaSingleFourthBracket,
  northDakotaSingleFifthBracket,
];

export const northDakotaSingleIncomeTaxBracketsObject = {
  northDakotaFirstBracket,
  northDakotaSingleSecondBracket,
  northDakotaSingleThirdBracket,
  northDakotaSingleFourthBracket,
  northDakotaSingleFifthBracket,
};

export const northDakotaMarriedIncomeTaxBracketsArray: TaxBracket[] = [
  northDakotaFirstBracket,
  northDakotaMarriedSecondBracket,
  northDakotaMarriedThirdBracket,
  northDakotaMarriedFourthBracket,
  northDakotaMarriedFifthBracket,
];

export const northDakotaMarriedIncomeTaxBracketsObject = {
  northDakotaFirstBracket,
  northDakotaMarriedSecondBracket,
  northDakotaMarriedThirdBracket,
  northDakotaMarriedFourthBracket,
  northDakotaMarriedFifthBracket,
};

export const NORTH_DAKOTA_SINGLE_STANDARD_DEDUCTION = 12950;
export const NORTH_DAKOTA_MARRIED_STANDARD_DEDUCTION = 25900;
