import { TaxBracket } from '../../../types';

const montanaFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.01,
  taxTotalToThisBracket: 0,
};

const montanaSecondBracket: TaxBracket = {
  minimumToQualify: 2801,
  taxRate: 0.02,
  taxTotalToThisBracket: (
    montanaFirstBracket.taxTotalToThisBracket
        + (2800 - montanaFirstBracket.minimumToQualify) * montanaFirstBracket.taxRate
  ),
};

const montanaThirdBracket: TaxBracket = {
  minimumToQualify: 5001,
  taxRate: 0.03,
  taxTotalToThisBracket: (
    montanaSecondBracket.taxTotalToThisBracket
        + (5000 - montanaSecondBracket.minimumToQualify) * montanaSecondBracket.taxRate
  ),
};

const montanaFourthBracket: TaxBracket = {
  minimumToQualify: 7601,
  taxRate: 0.04,
  taxTotalToThisBracket: (
    montanaThirdBracket.taxTotalToThisBracket
        + (7600 - montanaThirdBracket.minimumToQualify) * montanaThirdBracket.taxRate
  ),
};

const montanaFifthBracket: TaxBracket = {
  minimumToQualify: 10301,
  taxRate: 0.05,
  taxTotalToThisBracket: (
    montanaFourthBracket.taxTotalToThisBracket
        + (10300 - montanaFourthBracket.minimumToQualify) * montanaFourthBracket.taxRate
  ),
};

const montanaSixthBracket: TaxBracket = {
  minimumToQualify: 13301,
  taxRate: 0.06,
  taxTotalToThisBracket: (
    montanaFifthBracket.taxTotalToThisBracket
        + (13300 - montanaFifthBracket.minimumToQualify) * montanaFifthBracket.taxRate
  ),
};

const montanaSeventhBracket: TaxBracket = {
  minimumToQualify: 17101,
  taxRate: 0.069,
  taxTotalToThisBracket: (
    montanaSixthBracket.taxTotalToThisBracket
        + (17100 - montanaSixthBracket.minimumToQualify) * montanaSixthBracket.taxRate
  ),
};

export const montanaIncomeTaxBracketsArray: TaxBracket[] = [
  montanaFirstBracket,
  montanaSecondBracket,
  montanaThirdBracket,
  montanaFourthBracket,
  montanaFifthBracket,
  montanaSixthBracket,
  montanaSeventhBracket,
];

export const montanaIncomeTaxBracketsObject = {
  montanaFirstBracket,
  montanaSecondBracket,
  montanaThirdBracket,
  montanaFourthBracket,
  montanaFifthBracket,
  montanaSixthBracket,
  montanaSeventhBracket,
};

export const MONTANA_SINGLE_STANDARD_DEDUCTION = 4830;
export const MONTANA_MARRIED_STANDARD_DEDUCTION = 9660;
