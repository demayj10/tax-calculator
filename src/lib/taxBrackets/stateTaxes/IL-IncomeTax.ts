import { TaxBracket } from '../../../types';

const illinoisTaxBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.0495,
  taxTotalToThisBracket: 0,
};

export const illinoisIncomeTaxBracketsArray: TaxBracket[] = [
  illinoisTaxBracket,
];

export const illinoisIncomeTaxBracketsObject = {
  illinoisTaxBracket,
};
