import { TaxBracket } from '../../../types';

const vermontFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.0355,
  taxTotalToThisBracket: 0,
};

const vermontSingleSecondBracket: TaxBracket = {
  minimumToQualify: 37451,
  taxRate: 0.068,
  taxTotalToThisBracket: (
    vermontFirstBracket.taxTotalToThisBracket
          + (37450 - vermontFirstBracket.minimumToQualify) * vermontFirstBracket.taxRate
  ),
};

const vermontSingleThirdBracket: TaxBracket = {
  minimumToQualify: 90751,
  taxRate: 0.078,
  taxTotalToThisBracket: (
    vermontSingleSecondBracket.taxTotalToThisBracket
          + (90750 - vermontSingleSecondBracket.minimumToQualify) * vermontSingleSecondBracket.taxRate
  ),
};

const vermontSingleFourthBracket: TaxBracket = {
  minimumToQualify: 189301,
  taxRate: 0.088,
  taxTotalToThisBracket: (
    vermontSingleThirdBracket.taxTotalToThisBracket
          + (189300 - vermontSingleThirdBracket.minimumToQualify) * vermontSingleThirdBracket.taxRate
  ),
};

const vermontSingleFifthBracket: TaxBracket = {
  minimumToQualify: 411501,
  taxRate: 0.0895,
  taxTotalToThisBracket: (
    vermontSingleFourthBracket.taxTotalToThisBracket
          + (411500 - vermontSingleFourthBracket.minimumToQualify) * vermontSingleFourthBracket.taxRate
  ),
};

const vermontMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 62601,
  taxRate: 0.068,
  taxTotalToThisBracket: (
    vermontFirstBracket.taxTotalToThisBracket
          + (62600 - vermontFirstBracket.minimumToQualify) * vermontFirstBracket.taxRate
  ),
};

const vermontMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 151201,
  taxRate: 0.078,
  taxTotalToThisBracket: (
    vermontMarriedSecondBracket.taxTotalToThisBracket
          + (151200 - vermontMarriedSecondBracket.minimumToQualify) * vermontMarriedSecondBracket.taxRate
  ),
};

const vermontMarriedFourthBracket: TaxBracket = {
  minimumToQualify: 230451,
  taxRate: 0.088,
  taxTotalToThisBracket: (
    vermontMarriedThirdBracket.taxTotalToThisBracket
          + (230450 - vermontMarriedThirdBracket.minimumToQualify) * vermontMarriedThirdBracket.taxRate
  ),
};

const vermontMarriedFifthBracket: TaxBracket = {
  minimumToQualify: 411501,
  taxRate: 0.0895,
  taxTotalToThisBracket: (
    vermontMarriedFourthBracket.taxTotalToThisBracket
          + (411500 - vermontMarriedFourthBracket.minimumToQualify) * vermontMarriedFourthBracket.taxRate
  ),
};

export const vermontSingleIncomeTaxBracketsArray: TaxBracket[] = [
  vermontFirstBracket,
  vermontSingleSecondBracket,
  vermontSingleThirdBracket,
  vermontSingleFourthBracket,
  vermontSingleFifthBracket,
];

export const vermontSingleIncomeTaxBracketsObject = {
  vermontFirstBracket,
  vermontSingleSecondBracket,
  vermontSingleThirdBracket,
  vermontSingleFourthBracket,
  vermontSingleFifthBracket,
};

export const vermontMarriedIncomeTaxBracketsArray: TaxBracket[] = [
  vermontFirstBracket,
  vermontMarriedSecondBracket,
  vermontMarriedThirdBracket,
  vermontMarriedFourthBracket,
  vermontMarriedFifthBracket,
];

export const vermontMarriedIncomeTaxBracketsObject = {
  vermontFirstBracket,
  vermontMarriedSecondBracket,
  vermontMarriedThirdBracket,
  vermontMarriedFourthBracket,
  vermontMarriedFifthBracket,
};

export const VERMONT_SINGLE_STANDARD_DEDUCTION = 6350;
export const VERMONT_MARRIED_STANDARD_DEDUCTION = 12700;
