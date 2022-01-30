import { TaxBracket } from '../../../types';

const michiganTaxBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.0425,
  taxTotalToThisBracket: 0,
};

export const michiganIncomeTaxBracketsArray: TaxBracket[] = [
  michiganTaxBracket,
];

export const michiganIncomeTaxBracketsObject = {
  michiganTaxBracket,
};
