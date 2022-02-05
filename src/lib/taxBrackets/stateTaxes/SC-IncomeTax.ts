import { TaxBracket } from '../../../types';

const southCarolinaFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.00,
  taxTotalToThisBracket: 0,
};

const southCarolinaSecondBracket: TaxBracket = {
  minimumToQualify: 3071,
  taxRate: 0.03,
  taxTotalToThisBracket: 0,
};

const southCarolinaThirdBracket: TaxBracket = {
  minimumToQualify: 6151,
  taxRate: 0.04,
  taxTotalToThisBracket: 92.37,
};

const southCarolinaFourthBracket: TaxBracket = {
  minimumToQualify: 9231,
  taxRate: 0.05,
  taxTotalToThisBracket: 215.53,
};

const southCarolinaFifthBracket: TaxBracket = {
  minimumToQualify: 12311,
  taxRate: 0.06,
  taxTotalToThisBracket: 369.48,
};

const southCarolinaSixthBracket: TaxBracket = {
  minimumToQualify: 15401,
  taxRate: 0.07,
  taxTotalToThisBracket: 554.82,
};

export const southCarolinaIncomeTaxBracketsArray: TaxBracket[] = [
  southCarolinaFirstBracket,
  southCarolinaSecondBracket,
  southCarolinaThirdBracket,
  southCarolinaFourthBracket,
  southCarolinaFifthBracket,
  southCarolinaSixthBracket,
];

export const southCarolinaIncomeTaxBracketsObject = {
  southCarolinaFirstBracket,
  southCarolinaSecondBracket,
  southCarolinaThirdBracket,
  southCarolinaFourthBracket,
  southCarolinaFifthBracket,
  southCarolinaSixthBracket,
};
