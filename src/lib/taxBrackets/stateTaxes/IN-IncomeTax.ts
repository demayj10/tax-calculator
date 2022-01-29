import { TaxBracket } from '../../../types';

export const indianaTaxBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.0323,
  taxTotalToThisBracket: 0,
};

export const indianaIncomeTaxBracketsArray: TaxBracket[] = [
  indianaTaxBracket,
];

export const indianaIncomeTaxBracketsObject = {
  indianaTaxBracket,
};
