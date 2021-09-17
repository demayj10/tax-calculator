import { TaxBracket } from '../../types';

export const federalFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.10,
  taxTotalToThisBracket: 0,
};
const secondBracket: TaxBracket = {
  minimumToQualify: 9876,
  taxRate: 0.12,
  taxTotalToThisBracket: 987.5,
};
const thirdBracket: TaxBracket = {
  minimumToQualify: 40126,
  taxRate: 0.22,
  taxTotalToThisBracket: 4617.5,
};
const fourthBracket: TaxBracket = {
  minimumToQualify: 85526,
  taxRate: 0.24,
  taxTotalToThisBracket: 14605.50,
};
const fifthBracket: TaxBracket = {
  minimumToQualify: 163301,
  taxRate: 0.32,
  taxTotalToThisBracket: 33271.50,
};
const sixthBracket: TaxBracket = {
  minimumToQualify: 207351,
  taxRate: 0.35,
  taxTotalToThisBracket: 47367.50,
};
const seventhBracket: TaxBracket = {
  minimumToQualify: 518401,
  taxRate: 0.37,
  taxTotalToThisBracket: 156235,
};

export const FederalIncomeTax: TaxBracket[] = [
  federalFirstBracket,
  secondBracket,
  thirdBracket,
  fourthBracket,
  fifthBracket,
  sixthBracket,
  seventhBracket,
];

export const federalIncomeTaxBrackets = {
  firstBracket: federalFirstBracket,
  secondBracket,
  thirdBracket,
  fourthBracket,
  fifthBracket,
  sixthBracket,
  seventhBracket,
};
