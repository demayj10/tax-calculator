import { TaxBracket } from '../../../types';

export const iowaFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.0033,
  taxTotalToThisBracket: 0,
};
const secondBracket: TaxBracket = {
  minimumToQualify: 1666,
  taxRate: 0.0067,
  taxTotalToThisBracket: 5.5,
};
const thirdBracket: TaxBracket = {
  minimumToQualify: 3332,
  taxRate: 0.0225,
  taxTotalToThisBracket: 16.66,
};
const fourthBracket: TaxBracket = {
  minimumToQualify: 6664,
  taxRate: 0.0414,
  taxTotalToThisBracket: 91.63,
};
const fifthBracket: TaxBracket = {
  minimumToQualify: 14994,
  taxRate: 0.0563,
  taxTotalToThisBracket: 436.49,
};
const sixthBracket: TaxBracket = {
  minimumToQualify: 24990,
  taxRate: 0.0596,
  taxTotalToThisBracket: 999.26,
};
const seventhBracket: TaxBracket = {
  minimumToQualify: 33320,
  taxRate: 0.0625,
  taxTotalToThisBracket: 1495.73,
};
const eighthBracket: TaxBracket = {
  minimumToQualify: 49980,
  taxRate: 0.0744,
  taxTotalToThisBracket: 2536.98,
};
const ninthBracket: TaxBracket = {
  minimumToQualify: 74971,
  taxRate: 0.0853,
  taxTotalToThisBracket: 4396.24,
};

export const iowaIncomeTaxBracketsArray: TaxBracket[] = [
  iowaFirstBracket,
  secondBracket,
  thirdBracket,
  fourthBracket,
  fifthBracket,
  sixthBracket,
  seventhBracket,
  eighthBracket,
  ninthBracket,
];

export const iowaIncomeTaxBracketsObject = {
  iowaFirstBracket,
  secondBracket,
  thirdBracket,
  fourthBracket,
  fifthBracket,
  sixthBracket,
  seventhBracket,
  eighthBracket,
  ninthBracket,
};
