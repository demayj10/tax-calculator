import { TaxBracket } from '../../../types';

const utahFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.05,
  taxTotalToThisBracket: 0,
};

export const utahIncomeTaxBracketsArray: TaxBracket[] = [
  utahFirstBracket,
];

export const utahIncomeTaxBracketsObject = {
  utahFirstBracket,
};
