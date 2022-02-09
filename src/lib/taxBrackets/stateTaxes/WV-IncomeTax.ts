import { TaxBracket } from '../../../types';

const westVirginiaFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.03,
  taxTotalToThisBracket: 0,
};

const westVirginiaSecondBracket: TaxBracket = {
  minimumToQualify: 10001,
  taxRate: 0.04,
  taxTotalToThisBracket: (
    westVirginiaFirstBracket.taxTotalToThisBracket
          + (10000 - westVirginiaFirstBracket.minimumToQualify) * westVirginiaFirstBracket.taxRate
  ),
};

const westVirginiaThirdBracket: TaxBracket = {
  minimumToQualify: 25001,
  taxRate: 0.045,
  taxTotalToThisBracket: (
    westVirginiaSecondBracket.taxTotalToThisBracket
          + (25000 - westVirginiaSecondBracket.minimumToQualify) * westVirginiaSecondBracket.taxRate
  ),
};

const westVirginiaFourthBracket: TaxBracket = {
  minimumToQualify: 40001,
  taxRate: 0.06,
  taxTotalToThisBracket: (
    westVirginiaThirdBracket.taxTotalToThisBracket
          + (40000 - westVirginiaThirdBracket.minimumToQualify) * westVirginiaThirdBracket.taxRate
  ),
};

const westVirginiaFifthBracket: TaxBracket = {
  minimumToQualify: 60001,
  taxRate: 0.065,
  taxTotalToThisBracket: (
    westVirginiaFourthBracket.taxTotalToThisBracket
          + (60001 - westVirginiaFourthBracket.minimumToQualify) * westVirginiaFourthBracket.taxRate
  ),
};

export const westVirginiaIncomeTaxBracketsArray: TaxBracket[] = [
  westVirginiaFirstBracket,
  westVirginiaSecondBracket,
  westVirginiaThirdBracket,
  westVirginiaFourthBracket,
  westVirginiaFifthBracket,
];

export const westVirginiaIncomeTaxBracketsObject = {
  westVirginiaFirstBracket,
  westVirginiaSecondBracket,
  westVirginiaThirdBracket,
  westVirginiaFourthBracket,
  westVirginiaFifthBracket,
};
