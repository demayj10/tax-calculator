import { TaxBracket } from '../../../types';

const minnesotaFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.0535,
  taxTotalToThisBracket: 0,
};

const minnesotaSingleSecondBracket: TaxBracket = {
  minimumToQualify: 27231,
  taxRate: 0.0680,
  taxTotalToThisBracket: (
    minnesotaFirstBracket.taxTotalToThisBracket
          + (27230 - minnesotaFirstBracket.minimumToQualify) * minnesotaFirstBracket.taxRate
  ),
};

const minnesotaSingleThirdBracket: TaxBracket = {
  minimumToQualify: 89441,
  taxRate: 0.0785,
  taxTotalToThisBracket: (
    minnesotaSingleSecondBracket.taxTotalToThisBracket
          + (89440 - minnesotaSingleSecondBracket.minimumToQualify) * minnesotaSingleSecondBracket.taxRate
  ),
};

const minnesotaSingleFourthBracket: TaxBracket = {
  minimumToQualify: 166041,
  taxRate: 0.0985,
  taxTotalToThisBracket: (
    minnesotaSingleThirdBracket.taxTotalToThisBracket
          + (166040 - minnesotaSingleThirdBracket.minimumToQualify) * minnesotaSingleThirdBracket.taxRate
  ),
};

const minnesotaMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 39811,
  taxRate: 0.0680,
  taxTotalToThisBracket: (
    minnesotaFirstBracket.taxTotalToThisBracket
          + (39810 - minnesotaFirstBracket.minimumToQualify) * minnesotaFirstBracket.taxRate
  ),
};

const minnesotaMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 158141,
  taxRate: 0.0785,
  taxTotalToThisBracket: (
    minnesotaMarriedSecondBracket.taxTotalToThisBracket
          + (158140 - minnesotaMarriedSecondBracket.minimumToQualify) * minnesotaMarriedSecondBracket.taxRate
  ),
};

const minnesotaMarriedFourthBracket: TaxBracket = {
  minimumToQualify: 276201,
  taxRate: 0.0985,
  taxTotalToThisBracket: (
    minnesotaMarriedThirdBracket.taxTotalToThisBracket
          + (276200 - minnesotaMarriedThirdBracket.minimumToQualify) * minnesotaMarriedThirdBracket.taxRate
  ),
};

export const minnesotaSingleIncomeTaxBracketsArray: TaxBracket[] = [
  minnesotaFirstBracket,
  minnesotaSingleSecondBracket,
  minnesotaSingleThirdBracket,
  minnesotaSingleFourthBracket,
];

export const minnesotaSingleIncomeTaxBracketsObject = {
  minnesotaFirstBracket,
  minnesotaSingleSecondBracket,
  minnesotaSingleThirdBracket,
  minnesotaSingleFourthBracket,
};

export const minnesotaMarriedIncomeTaxBracketsArray: TaxBracket[] = [
  minnesotaFirstBracket,
  minnesotaMarriedSecondBracket,
  minnesotaMarriedThirdBracket,
  minnesotaMarriedFourthBracket,
];

export const minnesotaMarriedIncomeTaxBracketsObject = {
  minnesotaFirstBracket,
  minnesotaMarriedSecondBracket,
  minnesotaMarriedThirdBracket,
  minnesotaMarriedFourthBracket,
};

export const MINNESOTA_SINGLE_STANDARD_DEDUCTION = 12950;
export const MINNESOTA_MARRIED_STANDARD_DEDUCTION = 25900;
