import { TaxBracket } from '../../../types';

const arkansasFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.02,
  taxTotalToThisBracket: 0,
};

const arkansasSecondBracket: TaxBracket = {
  minimumToQualify: 4000,
  taxRate: 0.04,
  taxTotalToThisBracket: 80,
};

const arkansasThirdBracket: TaxBracket = {
  minimumToQualify: 8000,
  taxRate: 0.059,
  taxTotalToThisBracket: 240,
};

const arkansasFourthBracket: TaxBracket = {
  minimumToQualify: 79300,
  taxRate: 0.066,
  taxTotalToThisBracket: 4446.70,
};

export const arkansasIncomeTaxBracketsArray: TaxBracket[] = [
  arkansasFirstBracket,
  arkansasSecondBracket,
  arkansasThirdBracket,
  arkansasFourthBracket,
];

export const arkansasIncomeTaxBracketsObject = {
  arkansasFirstBracket,
  arkansasSecondBracket,
  arkansasThirdBracket,
  arkansasFourthBracket,
};
