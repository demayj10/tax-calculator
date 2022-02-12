import { TaxBracket } from '../../../types';

const ohioFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.00495,
  taxTotalToThisBracket: 0,
};
const ohioSecondBracket: TaxBracket = {
  minimumToQualify: 5201,
  taxRate: 0.00990,
  taxTotalToThisBracket: (
    ohioFirstBracket.taxTotalToThisBracket
          + (5200 - ohioFirstBracket.minimumToQualify) * ohioFirstBracket.taxRate
  ),
};
const ohioThirdBracket: TaxBracket = {
  minimumToQualify: 10401,
  taxRate: 0.01980,
  taxTotalToThisBracket: (
    ohioSecondBracket.taxTotalToThisBracket
          + (10400 - ohioSecondBracket.minimumToQualify) * ohioSecondBracket.taxRate
  ),
};
const ohioFourthBracket: TaxBracket = {
  minimumToQualify: 15651,
  taxRate: 0.02476,
  taxTotalToThisBracket: (
    ohioThirdBracket.taxTotalToThisBracket
          + (15650 - ohioThirdBracket.minimumToQualify) * ohioThirdBracket.taxRate
  ),
};
const ohioFifthBracket: TaxBracket = {
  minimumToQualify: 20901,
  taxRate: 0.02969,
  taxTotalToThisBracket: (
    ohioFourthBracket.taxTotalToThisBracket
          + (20900 - ohioFourthBracket.minimumToQualify) * ohioFourthBracket.taxRate
  ),
};
const ohioSixthBracket: TaxBracket = {
  minimumToQualify: 41701,
  taxRate: 0.03465,
  taxTotalToThisBracket: (
    ohioFifthBracket.taxTotalToThisBracket
          + (41700 - ohioFifthBracket.minimumToQualify) * ohioFifthBracket.taxRate
  ),
};
const ohioSeventhBracket: TaxBracket = {
  minimumToQualify: 83351,
  taxRate: 0.03960,
  taxTotalToThisBracket: (
    ohioSixthBracket.taxTotalToThisBracket
          + (83350 - ohioSixthBracket.minimumToQualify) * ohioSixthBracket.taxRate
  ),
};
const ohioEighthBracket: TaxBracket = {
  minimumToQualify: 104251,
  taxRate: 0.04597,
  taxTotalToThisBracket: (
    ohioSeventhBracket.taxTotalToThisBracket
          + (104250 - ohioSeventhBracket.minimumToQualify) * ohioSeventhBracket.taxRate
  ),
};
const ohioNinthBracket: TaxBracket = {
  minimumToQualify: 208501,
  taxRate: 0.04997,
  taxTotalToThisBracket: (
    ohioEighthBracket.taxTotalToThisBracket
          + (208500 - ohioEighthBracket.minimumToQualify) * ohioEighthBracket.taxRate
  ),
};

export const ohioIncomeTaxBracketsArray: TaxBracket[] = [
  ohioFirstBracket,
  ohioSecondBracket,
  ohioThirdBracket,
  ohioFourthBracket,
  ohioFifthBracket,
  ohioSixthBracket,
  ohioSeventhBracket,
  ohioEighthBracket,
  ohioNinthBracket,
];

export const ohioIncomeTaxBracketsObject = {
  ohioFirstBracket,
  ohioSecondBracket,
  ohioThirdBracket,
  ohioFourthBracket,
  ohioFifthBracket,
  ohioSixthBracket,
  ohioSeventhBracket,
  ohioEighthBracket,
  ohioNinthBracket,
};

export const OHIO_SINGLE_STANDARD_DEDUCTION = 0;
export const OHIO_MARRIED_STANDARD_DEDUCTION = 0;
