import { TaxBracket } from '../../../types';

const northCarolinaFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.0525,
  taxTotalToThisBracket: 0,
};

export const northCarolinaIncomeTaxBracketsArray: TaxBracket[] = [
  northCarolinaFirstBracket,
];

export const northCarolinaIncomeTaxBracketsObject = {
  northCarolinaFirstBracket,
};
