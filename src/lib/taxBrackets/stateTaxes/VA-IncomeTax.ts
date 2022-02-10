import { TaxBracket } from '../../../types';

const virginiaFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.02,
  taxTotalToThisBracket: 0,
};

const viriginaSecondBracket: TaxBracket = {
  minimumToQualify: 3001,
  taxRate: 0.03,
  taxTotalToThisBracket: (
    virginiaFirstBracket.taxTotalToThisBracket
          + (3000 - virginiaFirstBracket.minimumToQualify) * virginiaFirstBracket.taxRate
  ),
};

const virginiaThirdBracket: TaxBracket = {
  minimumToQualify: 5001,
  taxRate: 0.05,
  taxTotalToThisBracket: (
    viriginaSecondBracket.minimumToQualify
          + (5000 - viriginaSecondBracket.minimumToQualify) * viriginaSecondBracket.taxRate
  ),
};

const viriginaFourthBracket: TaxBracket = {
  minimumToQualify: 17001,
  taxRate: 0.0575,
  taxTotalToThisBracket: (
    virginiaThirdBracket.minimumToQualify
          + (17000 - virginiaThirdBracket.minimumToQualify) * virginiaThirdBracket.taxRate
  ),
};

export const virginiaIncomeTaxBracketsArray: TaxBracket[] = [
  virginiaFirstBracket,
  viriginaSecondBracket,
  virginiaThirdBracket,
  viriginaFourthBracket,
];

export const virginiaIncomeTaxBracketsObject = {
  virginiaFirstBracket,
  viriginaSecondBracket,
  virginiaThirdBracket,
  viriginaFourthBracket,
};
