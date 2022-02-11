import { TaxBracket } from '../../../types';

const iowaFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.0036,
  taxTotalToThisBracket: 0,
};
const iowaSecondBracket: TaxBracket = {
  minimumToQualify: 1540,
  taxRate: 0.0072,
  taxTotalToThisBracket: (
    iowaFirstBracket.taxTotalToThisBracket
          + (1539 - iowaFirstBracket.minimumToQualify) * iowaFirstBracket.taxRate
  ),
};
const iowaThirdBracket: TaxBracket = {
  minimumToQualify: 3079,
  taxRate: 0.0243,
  taxTotalToThisBracket: (
    iowaSecondBracket.taxTotalToThisBracket
          + (3331 - iowaSecondBracket.minimumToQualify) * iowaSecondBracket.taxRate
  ),
};
const iowaFourthBracket: TaxBracket = {
  minimumToQualify: 6157,
  taxRate: 0.045,
  taxTotalToThisBracket: (
    iowaThirdBracket.taxTotalToThisBracket
          + (6156 - iowaThirdBracket.minimumToQualify) * iowaThirdBracket.taxRate
  ),
};
const iowaFifthBracket: TaxBracket = {
  minimumToQualify: 13852,
  taxRate: 0.0612,
  taxTotalToThisBracket: (
    iowaFourthBracket.taxTotalToThisBracket
          + (13851 - iowaFourthBracket.minimumToQualify) * iowaFourthBracket.taxRate
  ),
};
const iowaSixthBracket: TaxBracket = {
  minimumToQualify: 23086,
  taxRate: 0.0648,
  taxTotalToThisBracket: (
    iowaFifthBracket.taxTotalToThisBracket
          + (23085 - iowaFifthBracket.minimumToQualify) * iowaFifthBracket.taxRate
  ),
};
const iowaSeventhBracket: TaxBracket = {
  minimumToQualify: 30781,
  taxRate: 0.0680,
  taxTotalToThisBracket: (
    iowaSixthBracket.taxTotalToThisBracket
          + (30780 - iowaSixthBracket.minimumToQualify) * iowaSixthBracket.taxRate
  ),
};
const iowaEighthBracket: TaxBracket = {
  minimumToQualify: 46171,
  taxRate: 0.0792,
  taxTotalToThisBracket: (
    iowaSeventhBracket.taxTotalToThisBracket
          + (46170 - iowaSeventhBracket.minimumToQualify) * iowaSeventhBracket.taxRate
  ),
};
const iowaNinthBracket: TaxBracket = {
  minimumToQualify: 69256,
  taxRate: 0.0898,
  taxTotalToThisBracket: (
    iowaEighthBracket.taxTotalToThisBracket
          + (69255 - iowaEighthBracket.minimumToQualify) * iowaEighthBracket.taxRate
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
