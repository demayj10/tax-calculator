import { TaxBracket } from "../../../types";

export const ohioFirstBracket: TaxBracket = {
    minimumToQualify: 0,
    taxRate: 0.00495,
    taxTotalToThisBracket: 0
};
const secondBracket: TaxBracket = {
    minimumToQualify: 5200,
    taxRate: 0.00990,
    taxTotalToThisBracket: 25.74
};
const thirdBracket: TaxBracket = {
    minimumToQualify: 10400,
    taxRate: 0.01980,
    taxTotalToThisBracket: 77.22
}
const fourthBracket: TaxBracket = {
    minimumToQualify: 15650,
    taxRate: 0.02476,
    taxTotalToThisBracket: 180.18
};
const fifthBracket: TaxBracket = {
    minimumToQualify: 20900,
    taxRate: 0.02969,
    taxTotalToThisBracket: 310.17
};
const sixthBracket: TaxBracket = {
    minimumToQualify: 41700,
    taxRate: 0.03465,
    taxTotalToThisBracket: 466.04
};
const seventhBracket: TaxBracket = {
    minimumToQualify: 83350,
    taxRate: 0.03960,
    taxTotalToThisBracket: 1186.76
};
const eighthBracket: TaxBracket = {
    minimumToQualify: 104250,
    taxRate: 0.04597,
    taxTotalToThisBracket: 2836.10
};
const ninthBracket: TaxBracket = {
    minimumToQualify: 208500,
    taxRate: 0.04997,
    taxTotalToThisBracket: 3796.88
}

export const ohioIncomeTaxBracketsArray: TaxBracket[] = [
    ohioFirstBracket,
    secondBracket,
    thirdBracket,
    fourthBracket,
    fifthBracket,
    sixthBracket,
    seventhBracket,
    eighthBracket,
    ninthBracket
];

export const ohioIncomeTaxBracketsObject = {
    ohioFirstBracket,
    secondBracket,
    thirdBracket,
    fourthBracket,
    fifthBracket,
    sixthBracket,
    seventhBracket,
    eighthBracket,
    ninthBracket
}
