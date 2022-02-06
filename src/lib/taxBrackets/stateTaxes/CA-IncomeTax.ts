import { TaxBracket } from '../../../types';

const californiaFirstBracket: TaxBracket = {
  minimumToQualify: 0,
  taxRate: 0.01,
  taxTotalToThisBracket: 0,
};

const californiaSingleSecondBracket: TaxBracket = {
  minimumToQualify: 9325,
  taxRate: 0.02,
  taxTotalToThisBracket: (
    californiaFirstBracket.taxTotalToThisBracket
            + (9324 - californiaFirstBracket.minimumToQualify) * californiaFirstBracket.taxRate
  ),
};

const californiaSingleThirdBracket: TaxBracket = {
  minimumToQualify: 22107,
  taxRate: 0.04,
  taxTotalToThisBracket: (
    californiaSingleSecondBracket.taxTotalToThisBracket
            + (22106 - californiaSingleSecondBracket.minimumToQualify) * californiaSingleSecondBracket.taxRate
  ),
};

const californiaSingleFourthBracket: TaxBracket = {
  minimumToQualify: 34892,
  taxRate: 0.06,
  taxTotalToThisBracket: (
    californiaSingleThirdBracket.taxTotalToThisBracket
            + (34891 - californiaSingleThirdBracket.minimumToQualify) * californiaSingleThirdBracket.taxRate
  ),
};

const californiaSingleFifthBracket: TaxBracket = {
  minimumToQualify: 48435,
  taxRate: 0.08,
  taxTotalToThisBracket: (
    californiaSingleFourthBracket.taxTotalToThisBracket
            + (48434 - californiaSingleFourthBracket.minimumToQualify) * californiaSingleFourthBracket.taxRate
  ),
};

const californiaSingleSixthBracket: TaxBracket = {
  minimumToQualify: 61214,
  taxRate: 0.093,
  taxTotalToThisBracket: (
    californiaSingleFifthBracket.taxTotalToThisBracket
            + (61213 - californiaSingleFifthBracket.minimumToQualify) * californiaSingleFifthBracket.taxRate
  ),
};

const californiaSingleSeventhBracket: TaxBracket = {
  minimumToQualify: 312686,
  taxRate: 0.103,
  taxTotalToThisBracket: (
    californiaSingleSixthBracket.taxTotalToThisBracket
            + (312685 - californiaSingleSixthBracket.minimumToQualify) * californiaSingleSixthBracket.taxRate
  ),
};

const californiaSingleEighthBracket: TaxBracket = {
  minimumToQualify: 375221,
  taxRate: 0.113,
  taxTotalToThisBracket: (
    californiaSingleSeventhBracket.taxTotalToThisBracket
            + (375220 - californiaSingleSeventhBracket.minimumToQualify) * californiaSingleSeventhBracket.taxRate
  ),
};

const californiaSingleNinthBracket: TaxBracket = {
  minimumToQualify: 625369,
  taxRate: 0.123,
  taxTotalToThisBracket: (
    californiaSingleEighthBracket.taxTotalToThisBracket
            + (625368 - californiaSingleEighthBracket.minimumToQualify) * californiaSingleEighthBracket.taxRate
  ),
};

const californiaMarriedSecondBracket: TaxBracket = {
  minimumToQualify: 18650,
  taxRate: 0.02,
  taxTotalToThisBracket: (
    californiaFirstBracket.taxTotalToThisBracket
            + (18649 - californiaFirstBracket.minimumToQualify) * californiaFirstBracket.taxRate
  ),
};

const californiaMarriedThirdBracket: TaxBracket = {
  minimumToQualify: 44214,
  taxRate: 0.04,
  taxTotalToThisBracket: (
    californiaMarriedSecondBracket.taxTotalToThisBracket
            + (44213 - californiaMarriedSecondBracket.minimumToQualify) * californiaMarriedSecondBracket.taxRate
  ),
};

const californiaMarriedFourthBracket: TaxBracket = {
  minimumToQualify: 69784,
  taxRate: 0.06,
  taxTotalToThisBracket: (
    californiaMarriedThirdBracket.taxTotalToThisBracket
            + (69783 - californiaMarriedThirdBracket.minimumToQualify) * californiaMarriedThirdBracket.taxRate
  ),
};

const californiaMarriedFifthBracket: TaxBracket = {
  minimumToQualify: 96870,
  taxRate: 0.08,
  taxTotalToThisBracket: (
    californiaMarriedFourthBracket.taxTotalToThisBracket
            + (96869 - californiaMarriedFourthBracket.minimumToQualify) * californiaMarriedFourthBracket.taxRate
  ),
};

const californiaMarriedSixthBracket: TaxBracket = {
  minimumToQualify: 122428,
  taxRate: 0.093,
  taxTotalToThisBracket: (
    californiaMarriedFifthBracket.taxTotalToThisBracket
            + (122427 - californiaMarriedFifthBracket.minimumToQualify) * californiaMarriedFifthBracket.taxRate
  ),
};

const californiaMarriedSeventhBracket: TaxBracket = {
  minimumToQualify: 624372,
  taxRate: 0.103,
  taxTotalToThisBracket: (
    californiaMarriedSixthBracket.taxTotalToThisBracket
            + (624371 - californiaMarriedSixthBracket.minimumToQualify) * californiaMarriedSixthBracket.taxRate
  ),
};

const californiaMarriedEighthBracket: TaxBracket = {
  minimumToQualify: 750442,
  taxRate: 0.113,
  taxTotalToThisBracket: (
    californiaMarriedSeventhBracket.taxTotalToThisBracket
            + (750441 - californiaMarriedSeventhBracket.minimumToQualify) * californiaMarriedSeventhBracket.taxRate
  ),
};

const californiaMarriedNinthBracket: TaxBracket = {
  minimumToQualify: 1250738,
  taxRate: 0.123,
  taxTotalToThisBracket: (
    californiaMarriedEighthBracket.taxTotalToThisBracket
            + (1250737 - californiaMarriedEighthBracket.minimumToQualify) * californiaMarriedEighthBracket.taxRate
  ),
};

export const californiaSingleIncomeTaxBracketsArray: TaxBracket[] = [
  californiaFirstBracket,
  californiaSingleSecondBracket,
  californiaSingleThirdBracket,
  californiaSingleFourthBracket,
  californiaSingleFifthBracket,
  californiaSingleSixthBracket,
  californiaSingleSeventhBracket,
  californiaSingleEighthBracket,
  californiaSingleNinthBracket,
];

export const californiaSingleIncomeTaxBracketsObject = {
  californiaFirstBracket,
  californiaSingleSecondBracket,
  californiaSingleThirdBracket,
  californiaSingleFourthBracket,
  californiaSingleFifthBracket,
  californiaSingleSixthBracket,
  californiaSingleSeventhBracket,
  californiaSingleEighthBracket,
  californiaSingleNinthBracket,
};

export const californiaMarriedIncomeTaxBracketsArray: TaxBracket[] = [
  californiaFirstBracket,
  californiaMarriedSecondBracket,
  californiaMarriedThirdBracket,
  californiaMarriedFourthBracket,
  californiaMarriedFifthBracket,
  californiaMarriedSixthBracket,
  californiaMarriedSeventhBracket,
  californiaMarriedEighthBracket,
  californiaMarriedNinthBracket,
];

export const californiaMarriedIncomeTaxBracketsObject = {
  californiaFirstBracket,
  californiaMarriedSecondBracket,
  californiaMarriedThirdBracket,
  californiaMarriedFourthBracket,
  californiaMarriedFifthBracket,
  californiaMarriedSixthBracket,
  californiaMarriedSeventhBracket,
  californiaMarriedEighthBracket,
  californiaMarriedNinthBracket,
};
