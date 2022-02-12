import { TaxBracket } from '../../../types';

const pennsylvaniaTaxBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.0307,
  taxTotalToThisBracket: 0,
};

export const pennsylvaniaTaxBracketsArray: TaxBracket[] = [
  pennsylvaniaTaxBracket,
];

export const pennsylvaniaTaxBracketsObject = {
  pennsylvaniaTaxBracket,
};

export const PENNSYLVANIA_SINGLE_STANDARD_DEDUCTION = 0;
export const PENNSYLVANIA_MARRIED_STANDARD_DEDUCTION = 0;
