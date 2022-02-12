import { TaxBracket } from '../../../types';

const maineFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.058,
  taxTotalToThisBracket: 0,
};

const maineSingleSecondBracket: TaxBracket = {
  minimumToQualify: 23000,
  taxRate: 0.0675,
  taxTotalToThisBracket: (
    maineFirstBracket.taxTotalToThisBracket
          + (22999 - maineFirstBracket.minimumToQualify) * maineFirstBracket.taxRate
  ),
};

const maineSingleThirdBracket: TaxBracket = {
  minimumToQualify: 54450,
  taxRate: 0.0715,
  taxTotalToThisBracket: (
    maineSingleSecondBracket.taxTotalToThisBracket
          + (54449 - maineSingleSecondBracket.minimumToQualify) * maineSingleSecondBracket.taxRate
  ),
};

const maineMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 46000,
  taxRate: 0.0675,
  taxTotalToThisBracket: (
    maineFirstBracket.taxTotalToThisBracket
          + (45999 - maineFirstBracket.minimumToQualify) * maineFirstBracket.taxRate
  ),
};

const maineMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 108900,
  taxRate: 0.0715,
  taxTotalToThisBracket: (
    maineMarriedSecondBracket.taxTotalToThisBracket
          + (108899 - maineMarriedSecondBracket.minimumToQualify) * maineMarriedSecondBracket.taxRate
  ),
};

export const maineSingleIncomeTaxBracketsArray: TaxBracket[] = [
  maineFirstBracket,
  maineSingleSecondBracket,
  maineSingleThirdBracket,
];

export const maineSingleIncomeTaxBracketsObject = {
  maineFirstBracket,
  maineSingleSecondBracket,
  maineSingleThirdBracket,
};

export const maineMarriedIncomeTaxBracketsArray: TaxBracket[] = [
  maineFirstBracket,
  maineMarriedSecondBracket,
  maineMarriedThirdBracket,
];

export const maineMarriedIncomeTaxBracketsObject = {
  maineFirstBracket,
  maineMarriedSecondBracket,
  maineMarriedThirdBracket,
};

export const MAINE_SINGLE_STANDARD_DEDUCTION = 12950;
export const MAINE_MARRIED_STANDARD_DEDUCTION = 25900;
