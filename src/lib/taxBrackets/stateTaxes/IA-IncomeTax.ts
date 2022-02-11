import { TaxBracket } from '../../../types';

const iowaFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.0033,
  taxTotalToThisBracket: 0,
};
const iowaSecondBracket: TaxBracket = {
  minimumToQualify: 1666,
  taxRate: 0.0067,
  taxTotalToThisBracket: (
    iowaFirstBracket.taxTotalToThisBracket
          + (1665 - iowaFirstBracket.minimumToQualify) * iowaFirstBracket.taxRate
  ),
};
const iowaThirdBracket: TaxBracket = {
  minimumToQualify: 3332,
  taxRate: 0.0225,
  taxTotalToThisBracket: (
    iowaSecondBracket.taxTotalToThisBracket
          + (3331 - iowaSecondBracket.minimumToQualify) * iowaSecondBracket.taxRate
  ),
};
const iowaFourthBracket: TaxBracket = {
  minimumToQualify: 6664,
  taxRate: 0.0414,
  taxTotalToThisBracket: (
    iowaThirdBracket.taxTotalToThisBracket
          + (6663 - iowaThirdBracket.minimumToQualify) * iowaThirdBracket.taxRate
  ),
};
const iowaFifthBracket: TaxBracket = {
  minimumToQualify: 14994,
  taxRate: 0.0563,
  taxTotalToThisBracket: (
    iowaFourthBracket.taxTotalToThisBracket
          + (14993 - iowaFourthBracket.minimumToQualify) * iowaFourthBracket.taxRate
  ),
};
const iowaSixthBracket: TaxBracket = {
  minimumToQualify: 24990,
  taxRate: 0.0596,
  taxTotalToThisBracket: (
    iowaFifthBracket.taxTotalToThisBracket
          + (24989 - iowaFifthBracket.minimumToQualify) * iowaFifthBracket.taxRate
  ),
};
const iowaSeventhBracket: TaxBracket = {
  minimumToQualify: 33320,
  taxRate: 0.0625,
  taxTotalToThisBracket: (
    iowaSixthBracket.taxTotalToThisBracket
          + (33319 - iowaSixthBracket.minimumToQualify) * iowaSixthBracket.taxRate
  ),
};
const iowaEighthBracket: TaxBracket = {
  minimumToQualify: 49980,
  taxRate: 0.0744,
  taxTotalToThisBracket: (
    iowaSeventhBracket.taxTotalToThisBracket
          + (49979 - iowaSeventhBracket.minimumToQualify) * iowaSeventhBracket.taxRate
  ),
};
const iowaNinthBracket: TaxBracket = {
  minimumToQualify: 74971,
  taxRate: 0.0853,
  taxTotalToThisBracket: (
    iowaEighthBracket.taxTotalToThisBracket
          + (74970 - iowaEighthBracket.minimumToQualify) * iowaEighthBracket.taxRate
  ),
};

export const iowaIncomeTaxBracketsArray: TaxBracket[] = [
  iowaFirstBracket,
  iowaSecondBracket,
  iowaThirdBracket,
  iowaFourthBracket,
  iowaFifthBracket,
  iowaSixthBracket,
  iowaSeventhBracket,
  iowaEighthBracket,
  iowaNinthBracket,
];

export const iowaIncomeTaxBracketsObject = {
  iowaFirstBracket,
  iowaSecondBracket,
  iowaThirdBracket,
  iowaFourthBracket,
  iowaFifthBracket,
  iowaSixthBracket,
  iowaSeventhBracket,
  iowaEighthBracket,
  iowaNinthBracket,
};
