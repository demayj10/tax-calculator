import { TaxBracket } from '../../../types';

const nebraskaFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.0246,
  taxTotalToThisBracket: 0,
};

const nebraskaSingleSecondBracket: TaxBracket = {
  minimumToQualify: 3051,
  taxRate: 0.0351,
  taxTotalToThisBracket: 75.03,
};

const nebraskaSingleThirdBracket: TaxBracket = {
  minimumToQualify: 18281,
  taxRate: 0.0501,
  taxTotalToThisBracket: 609.5679,
};

const nebraskaSingleFourthBracket: TaxBracket = {
  minimumToQualify: 29461,
  taxRate: 0.0684,
  taxTotalToThisBracket: 1169.6358,
};

const nebraskaMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 6091,
  taxRate: 0.0351,
  taxTotalToThisBracket: 149.814,
};

const nebraskaMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 36571,
  taxRate: 0.0501,
  taxTotalToThisBracket: 1219.6269,
};

const nebraskaMarriedFourthBracket: TaxBracket = {
  minimumToQualify: 58921,
  taxRate: 0.0684,
  taxTotalToThisBracket: 2339.3118,
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
