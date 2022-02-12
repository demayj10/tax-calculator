import { TaxBracket } from '../../../types';

const nebraskaFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.0246,
  taxTotalToThisBracket: 0,
};

const nebraskaSingleSecondBracket: TaxBracket = {
  minimumToQualify: 3051,
  taxRate: 0.0351,
  taxTotalToThisBracket: (
    nebraskaFirstBracket.taxTotalToThisBracket
          + (3050 - nebraskaFirstBracket.minimumToQualify) * nebraskaFirstBracket.taxRate
  ),
};

const nebraskaSingleThirdBracket: TaxBracket = {
  minimumToQualify: 18281,
  taxRate: 0.0501,
  taxTotalToThisBracket: (
    nebraskaSingleSecondBracket.taxTotalToThisBracket
          + (18280 - nebraskaSingleSecondBracket.minimumToQualify) * nebraskaSingleSecondBracket.taxRate
  ),
};

const nebraskaSingleFourthBracket: TaxBracket = {
  minimumToQualify: 29461,
  taxRate: 0.0684,
  taxTotalToThisBracket: (
    nebraskaSingleThirdBracket.taxTotalToThisBracket
          + (29460 - nebraskaSingleThirdBracket.minimumToQualify) * nebraskaSingleThirdBracket.taxRate
  ),
};

const nebraskaMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 6091,
  taxRate: 0.0351,
  taxTotalToThisBracket: (
    nebraskaFirstBracket.taxTotalToThisBracket
          + (6090 - nebraskaFirstBracket.minimumToQualify) * nebraskaFirstBracket.taxRate
  ),
};

const nebraskaMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 36571,
  taxRate: 0.0501,
  taxTotalToThisBracket: (
    nebraskaMarriedSecondBracket.taxTotalToThisBracket
          + (36570 - nebraskaMarriedSecondBracket.minimumToQualify) * nebraskaMarriedSecondBracket.taxRate
  ),
};

const nebraskaMarriedFourthBracket: TaxBracket = {
  minimumToQualify: 58921,
  taxRate: 0.0684,
  taxTotalToThisBracket: (
    nebraskaMarriedThirdBracket.taxTotalToThisBracket
          + (58920 - nebraskaMarriedThirdBracket.minimumToQualify) * nebraskaMarriedThirdBracket.taxRate
  ),
};

export const nebraskaSingleIncomeTaxBracketsArray: TaxBracket[] = [
  nebraskaFirstBracket,
  nebraskaSingleSecondBracket,
  nebraskaSingleThirdBracket,
  nebraskaSingleFourthBracket,
];

export const nebraskaMarriedIncomeTaxBracketsArray: TaxBracket[] = [
  nebraskaFirstBracket,
  nebraskaMarriedSecondBracket,
  nebraskaMarriedThirdBracket,
  nebraskaMarriedFourthBracket,
];

export const nebraskaSingleIncomeTaxBracketsObject = {
  nebraskaFirstBracket,
  nebraskaSingleSecondBracket,
  nebraskaSingleThirdBracket,
  nebraskaSingleFourthBracket,
};

export const nebraskaMarriedIncomeTaxBracketsObject = {
  nebraskaFirstBracket,
  nebraskaMarriedSecondBracket,
  nebraskaMarriedThirdBracket,
  nebraskaMarriedFourthBracket,
};

export const NEBRASKA_SINGLE_STANDARD_DEDUCTION = 7100;
export const NEBRASKA_MARRIED_STANDARD_DEDUCTION = 14200;
