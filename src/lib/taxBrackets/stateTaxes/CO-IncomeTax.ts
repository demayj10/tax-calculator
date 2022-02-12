import { TaxBracket } from '../../../types';

const coloradoFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.0455,
  taxTotalToThisBracket: 0,
};

export const coloradoIncomeTaxBracketsArray: TaxBracket[] = [
  coloradoFirstBracket,
];

export const coloradoIncomeTaxBracketsObject = {
  coloradoFirstBracket,
};

export const COLORADO_SINGLE_STANDARD_DEDUCTION = 12950;
export const COLORADO_MARRIED_STANDARD_DEDUCTION = 25900;
