import { TaxBracket } from '../../../types';

export const minnesotaFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.0535,
  taxTotalToThisBracket: 0,
};

const minnesotaSingleSecondBracket: TaxBracket = {
  minimumToQualify: 27231,
  taxRate: 0.0680,
  taxTotalToThisBracket: 1456.805,
};

const minnesotaSingleThirdBracket: TaxBracket = {
  minimumToQualify: 89441,
  taxRate: 0.0785,
  taxTotalToThisBracket: 5687.017,
};

const minnesotaSingleFourthBracket: TaxBracket = {
  minimumToQualify: 166041,
  taxRate: 0.0985,
  taxTotalToThisBracket: 11700.0385,
};

const minnesotaMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 39811,
  taxRate: 0.0680,
  taxTotalToThisBracket: 2129.835,
};

const minnesotaMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 158141,
  taxRate: 0.0785,
  taxTotalToThisBracket: 10176.207,
};

const minnesotaMarriedFourthBracket: TaxBracket = {
  minimumToQualify: 276201,
  taxRate: 0.0985,
  taxTotalToThisBracket: 19443.8385,
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
