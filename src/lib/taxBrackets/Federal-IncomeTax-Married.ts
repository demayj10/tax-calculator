import { TaxBracket } from '../../types';

export const federalMarriedJointlyFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.10,
  taxTotalToThisBracket: 0,
};
const marriedJointlySecondBracket: TaxBracket = {
  minimumToQualify: 19751,
  taxRate: 0.12,
  taxTotalToThisBracket: 1975,
};
const marriedJointlyThirdBracket: TaxBracket = {
  minimumToQualify: 80251,
  taxRate: 0.22,
  taxTotalToThisBracket: 9235,
};
const marriedJointlyFourthBracket: TaxBracket = {
  minimumToQualify: 171051,
  taxRate: 0.24,
  taxTotalToThisBracket: 29211,
};
const marriedJointlyFifthBracket: TaxBracket = {
  minimumToQualify: 326601,
  taxRate: 0.32,
  taxTotalToThisBracket: 66543,
};
const marriedJointlySixthBracket: TaxBracket = {
  minimumToQualify: 414701,
  taxRate: 0.35,
  taxTotalToThisBracket: 94735,
};
const marriedJointlySeventhBracket: TaxBracket = {
  minimumToQualify: 622051,
  taxRate: 0.37,
  taxTotalToThisBracket: 167307.5,
};

export const federalIncomeTaxMarriedJointlyArray: TaxBracket[] = [
  federalMarriedJointlyFirstBracket,
  marriedJointlySecondBracket,
  marriedJointlyThirdBracket,
  marriedJointlyFourthBracket,
  marriedJointlyFifthBracket,
  marriedJointlySixthBracket,
  marriedJointlySeventhBracket,
];

export const federalIncomeTaxMarriedJointlyObject = {
  firstBracket: federalMarriedJointlyFirstBracket,
  secondBracket: marriedJointlySecondBracket,
  thirdBracket: marriedJointlyThirdBracket,
  fourthBracket: marriedJointlyFourthBracket,
  fifthBracket: marriedJointlyFifthBracket,
  sixthBracket: marriedJointlySixthBracket,
  seventhBracket: marriedJointlySeventhBracket,
};

export const federalMarriedSeparateFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.10,
  taxTotalToThisBracket: 0,
};
const marriedSeparateSecondBracket: TaxBracket = {
  minimumToQualify: 9876,
  taxRate: 0.12,
  taxTotalToThisBracket: 987.50,
};
const marriedSeparateThirdBracket: TaxBracket = {
  minimumToQualify: 40126,
  taxRate: 0.22,
  taxTotalToThisBracket: 4617.50,
};
const marriedSeparateFourthBracket: TaxBracket = {
  minimumToQualify: 85526,
  taxRate: 0.24,
  taxTotalToThisBracket: 14605.50,
};
const marriedSeparateFifthBracket: TaxBracket = {
  minimumToQualify: 163301,
  taxRate: 0.32,
  taxTotalToThisBracket: 33271.50,
};
const marriedSeparateSixthBracket: TaxBracket = {
  minimumToQualify: 207351,
  taxRate: 0.35,
  taxTotalToThisBracket: 47367.50,
};
const marriedSeparateSeventhBracket: TaxBracket = {
  minimumToQualify: 311026,
  taxRate: 0.37,
  taxTotalToThisBracket: 83653.75,
};

export const federalIncomeTaxMarriedSeparateArray: TaxBracket[] = [
  federalMarriedSeparateFirstBracket,
  marriedSeparateSecondBracket,
  marriedSeparateThirdBracket,
  marriedSeparateFourthBracket,
  marriedSeparateFifthBracket,
  marriedSeparateSixthBracket,
  marriedSeparateSeventhBracket,
];

export const federalIncomeTaxMarriedSeparateObject = {
  firstBracket: federalMarriedSeparateFirstBracket,
  secondBracket: marriedSeparateSecondBracket,
  thirdBracket: marriedSeparateFourthBracket,
  fourthBracket: marriedSeparateFourthBracket,
  fifthBracket: marriedSeparateFifthBracket,
  sixthBracket: marriedSeparateSixthBracket,
  seventhBracket: marriedSeparateSeventhBracket,
};
