import { TaxBracket } from '../../../types';

const hawaiiFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.014,
  taxTotalToThisBracket: 0,
};

const hawaiiSingleSecondBracket: TaxBracket = {
  minimumToQualify: 2401,
  taxRate: 0.032,
  taxTotalToThisBracket: (
    hawaiiFirstBracket.taxTotalToThisBracket
            + (2400 - hawaiiFirstBracket.minimumToQualify) * hawaiiFirstBracket.taxRate
  ),
};

const hawaiiSingleThirdBracket: TaxBracket = {
  minimumToQualify: 4801,
  taxRate: 0.055,
  taxTotalToThisBracket: (
    hawaiiSingleSecondBracket.taxTotalToThisBracket
        + (4800 - hawaiiSingleSecondBracket.minimumToQualify) * hawaiiSingleSecondBracket.taxRate
  ),
};

const hawaiiSingleFourthBracket: TaxBracket = {
  minimumToQualify: 9601,
  taxRate: 0.064,
  taxTotalToThisBracket: (
    hawaiiSingleThirdBracket.taxTotalToThisBracket
        + (9600 - hawaiiSingleThirdBracket.minimumToQualify) * hawaiiSingleThirdBracket.taxRate
  ),
};

const hawaiiSingleFifthBracket: TaxBracket = {
  minimumToQualify: 14401,
  taxRate: 0.068,
  taxTotalToThisBracket: (
    hawaiiSingleFourthBracket.taxTotalToThisBracket
        + (14400 - hawaiiSingleFourthBracket.minimumToQualify) * hawaiiSingleFourthBracket.taxRate
  ),
};

const hawaiiSingleSixthBracket: TaxBracket = {
  minimumToQualify: 19201,
  taxRate: 0.072,
  taxTotalToThisBracket: (
    hawaiiSingleFifthBracket.taxTotalToThisBracket
        + (19200 - hawaiiSingleFifthBracket.minimumToQualify) * hawaiiSingleFifthBracket.taxRate
  ),
};

const hawaiiSingleSeventhBracket: TaxBracket = {
  minimumToQualify: 24001,
  taxRate: 0.076,
  taxTotalToThisBracket: (
    hawaiiSingleSixthBracket.taxTotalToThisBracket
        + (24000 - hawaiiSingleSixthBracket.minimumToQualify) * hawaiiSingleSixthBracket.taxRate
  ),
};

const hawaiiSingleEighthBracket: TaxBracket = {
  minimumToQualify: 36001,
  taxRate: 0.079,
  taxTotalToThisBracket: (
    hawaiiSingleSeventhBracket.taxTotalToThisBracket
        + (36000 - hawaiiSingleSeventhBracket.minimumToQualify) * hawaiiSingleSeventhBracket.taxRate
  ),
};

const hawaiiSingleNinthBracket: TaxBracket = {
  minimumToQualify: 48001,
  taxRate: 0.0825,
  taxTotalToThisBracket: (
    hawaiiSingleEighthBracket.taxTotalToThisBracket
        + (48000 - hawaiiSingleEighthBracket.minimumToQualify) * hawaiiSingleEighthBracket.taxRate
  ),
};

const hawaiiSingleTenthBracket: TaxBracket = {
  minimumToQualify: 150001,
  taxRate: 0.09,
  taxTotalToThisBracket: (
    hawaiiSingleNinthBracket.taxTotalToThisBracket
        + (150000 - hawaiiSingleNinthBracket.minimumToQualify) * hawaiiSingleNinthBracket.taxRate
  ),
};

const hawaiiSingleEleventhBracket: TaxBracket = {
  minimumToQualify: 175001,
  taxRate: 0.10,
  taxTotalToThisBracket: (
    hawaiiSingleTenthBracket.taxTotalToThisBracket
        + (175000 - hawaiiSingleTenthBracket.minimumToQualify) * hawaiiSingleTenthBracket.taxRate
  ),
};

const hawaiiSingleTwelfthBracket: TaxBracket = {
  minimumToQualify: 200001,
  taxRate: 0.11,
  taxTotalToThisBracket: (
    hawaiiSingleEleventhBracket.taxTotalToThisBracket
        + (200000 - hawaiiSingleEleventhBracket.minimumToQualify) * hawaiiSingleEleventhBracket.taxRate
  ),
};

const hawaiiMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 4801,
  taxRate: 0.032,
  taxTotalToThisBracket: (
    hawaiiFirstBracket.taxTotalToThisBracket
            + (4800 - hawaiiFirstBracket.minimumToQualify) * hawaiiFirstBracket.taxRate
  ),
};

const hawaiiMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 9601,
  taxRate: 0.055,
  taxTotalToThisBracket: (
    hawaiiMarriedSecondBracket.taxTotalToThisBracket
            + (9600 - hawaiiMarriedSecondBracket.minimumToQualify) * hawaiiMarriedSecondBracket.taxRate
  ),
};

const hawaiiMarriedFourthBracket: TaxBracket = {
  minimumToQualify: 19201,
  taxRate: 0.064,
  taxTotalToThisBracket: (
    hawaiiMarriedThirdBracket.taxTotalToThisBracket
            + (19200 - hawaiiMarriedThirdBracket.minimumToQualify) * hawaiiMarriedThirdBracket.taxRate
  ),
};

const hawaiiMarriedFifthBracket: TaxBracket = {
  minimumToQualify: 28801,
  taxRate: 0.068,
  taxTotalToThisBracket: (
    hawaiiMarriedFourthBracket.taxTotalToThisBracket
            + (28800 - hawaiiMarriedFourthBracket.minimumToQualify) * hawaiiMarriedFourthBracket.taxRate
  ),
};

const hawaiiMarriedSixthBracket: TaxBracket = {
  minimumToQualify: 38401,
  taxRate: 0.072,
  taxTotalToThisBracket: (
    hawaiiMarriedFifthBracket.taxTotalToThisBracket
            + (38400 - hawaiiMarriedFifthBracket.minimumToQualify) * hawaiiMarriedFifthBracket.taxRate
  ),
};

const hawaiiMarriedSeventhBracket: TaxBracket = {
  minimumToQualify: 48001,
  taxRate: 0.076,
  taxTotalToThisBracket: (
    hawaiiMarriedSixthBracket.taxTotalToThisBracket
            + (48000 - hawaiiMarriedSixthBracket.minimumToQualify) * hawaiiMarriedSixthBracket.taxRate
  ),
};

const hawaiiMarriedEighthBracket: TaxBracket = {
  minimumToQualify: 72001,
  taxRate: 0.079,
  taxTotalToThisBracket: (
    hawaiiMarriedSeventhBracket.taxTotalToThisBracket
            + (72000 - hawaiiMarriedSeventhBracket.minimumToQualify) * hawaiiMarriedSeventhBracket.taxRate
  ),
};

const hawaiiMarriedNinthBracket: TaxBracket = {
  minimumToQualify: 96001,
  taxRate: 0.0825,
  taxTotalToThisBracket: (
    hawaiiMarriedEighthBracket.taxTotalToThisBracket
            + (96000 - hawaiiMarriedEighthBracket.minimumToQualify) * hawaiiMarriedEighthBracket.taxRate
  ),
};

const hawaiiMarriedTenthBracket: TaxBracket = {
  minimumToQualify: 300001,
  taxRate: 0.09,
  taxTotalToThisBracket: (
    hawaiiMarriedNinthBracket.taxTotalToThisBracket
            + (300000 - hawaiiMarriedNinthBracket.minimumToQualify) * hawaiiMarriedNinthBracket.taxRate
  ),
};

const hawaiiMarriedEleventhBracket: TaxBracket = {
  minimumToQualify: 350001,
  taxRate: 0.1,
  taxTotalToThisBracket: (
    hawaiiMarriedTenthBracket.taxTotalToThisBracket
            + (350000 - hawaiiMarriedTenthBracket.minimumToQualify) * hawaiiMarriedTenthBracket.taxRate
  ),
};

const hawaiiMarriedTwelfthBracket: TaxBracket = {
  minimumToQualify: 400001,
  taxRate: 0.11,
  taxTotalToThisBracket: (
    hawaiiMarriedEleventhBracket.taxTotalToThisBracket
            + (400000 - hawaiiMarriedEleventhBracket.minimumToQualify) * hawaiiMarriedEleventhBracket.taxRate
  ),
};

export const hawaiiSingleIncomeTaxBracketsArray: TaxBracket[] = [
  hawaiiFirstBracket,
  hawaiiSingleSecondBracket,
  hawaiiSingleThirdBracket,
  hawaiiSingleFourthBracket,
  hawaiiSingleFifthBracket,
  hawaiiSingleSixthBracket,
  hawaiiSingleSeventhBracket,
  hawaiiSingleEighthBracket,
  hawaiiSingleNinthBracket,
  hawaiiSingleTenthBracket,
  hawaiiSingleEleventhBracket,
  hawaiiSingleTwelfthBracket,
];

export const hawaiiSingleIncomeTaxBracketsObject = {
  hawaiiFirstBracket,
  hawaiiSingleSecondBracket,
  hawaiiSingleThirdBracket,
  hawaiiSingleFourthBracket,
  hawaiiSingleFifthBracket,
  hawaiiSingleSixthBracket,
  hawaiiSingleSeventhBracket,
  hawaiiSingleEighthBracket,
  hawaiiSingleNinthBracket,
  hawaiiSingleTenthBracket,
  hawaiiSingleEleventhBracket,
  hawaiiSingleTwelfthBracket,
};

export const hawaiiMarriedIncomeTaxBracketsArray: TaxBracket[] = [
  hawaiiFirstBracket,
  hawaiiMarriedSecondBracket,
  hawaiiMarriedThirdBracket,
  hawaiiMarriedFourthBracket,
  hawaiiMarriedFifthBracket,
  hawaiiMarriedSixthBracket,
  hawaiiMarriedSeventhBracket,
  hawaiiMarriedEighthBracket,
  hawaiiMarriedNinthBracket,
  hawaiiMarriedTenthBracket,
  hawaiiMarriedEleventhBracket,
  hawaiiMarriedTwelfthBracket,
];

export const hawaiiMarriedIncomeTaxBracketsObject = {
  hawaiiFirstBracket,
  hawaiiMarriedSecondBracket,
  hawaiiMarriedThirdBracket,
  hawaiiMarriedFourthBracket,
  hawaiiMarriedFifthBracket,
  hawaiiMarriedSixthBracket,
  hawaiiMarriedSeventhBracket,
  hawaiiMarriedEighthBracket,
  hawaiiMarriedNinthBracket,
  hawaiiMarriedTenthBracket,
  hawaiiMarriedEleventhBracket,
  hawaiiMarriedTwelfthBracket,
};

export const HAWAII_SINGLE_STANDARD_DEDUCTION = 2200;
export const HAWAII_MARRIED_STANDARD_DEDUCTION = 4400;
