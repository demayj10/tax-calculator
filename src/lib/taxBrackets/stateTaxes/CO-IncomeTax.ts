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
