import { TaxBracket } from '../../../types';

const washingtonDCFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.04,
  taxTotalToThisBracket: 0,
};

const washingtonDCSecondBracket: TaxBracket = {
  minimumToQualify: 10001,
  taxRate: 0.06,
  taxTotalToThisBracket: (
    washingtonDCFirstBracket.minimumToQualify
          + (10000 - washingtonDCFirstBracket.minimumToQualify) * washingtonDCFirstBracket.taxRate
  ),
};

const washingtonDCThirdBracket: TaxBracket = {
  minimumToQualify: 40001,
  taxRate: 0.07,
  taxTotalToThisBracket: (
    washingtonDCSecondBracket.minimumToQualify
          + (40000 - washingtonDCSecondBracket.minimumToQualify) * washingtonDCSecondBracket.taxRate
  ),
};

const washingtonDCFourthBracket: TaxBracket = {
  minimumToQualify: 60001,
  taxRate: 0.085,
  taxTotalToThisBracket: (
    washingtonDCThirdBracket.minimumToQualify
          + (60000 - washingtonDCThirdBracket.minimumToQualify) * washingtonDCThirdBracket.taxRate
  ),
};

const washingtonDCFifthBracket: TaxBracket = {
  minimumToQualify: 350001,
  taxRate: 0.0895,
  taxTotalToThisBracket: (
    washingtonDCFourthBracket.minimumToQualify
          + (350000 - washingtonDCFourthBracket.minimumToQualify) * washingtonDCFourthBracket.taxRate
  ),
};

export const washingtonDCIncomeTaxBracketsArray: TaxBracket[] = [
  washingtonDCFirstBracket,
  washingtonDCSecondBracket,
  washingtonDCThirdBracket,
  washingtonDCFourthBracket,
  washingtonDCFifthBracket,
];

export const washingtonDCIncomeTaxBracketsObject = {
  washingtonDCFirstBracket,
  washingtonDCSecondBracket,
  washingtonDCThirdBracket,
  washingtonDCFourthBracket,
  washingtonDCFifthBracket,
};
