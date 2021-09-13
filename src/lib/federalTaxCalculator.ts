import { FederalIncomeBreakdown, TaxBracket } from "../types";
import {
    MEDICARE_TAX_RATE,
    SOCIAL_SECURITY_TAX_RATE,
    SOCIAL_SECURITY_TAX_WAGE_LIMIT
} from "./taxBrackets/constants";
import {
    federalFirstBracket,
    FederalIncomeTax
} from "./taxBrackets/Federal-IncomeTax";

export const findFederalIncomeTaxBracket = (annualIncome: number): TaxBracket =>
{
    let maxMinimum: TaxBracket = federalFirstBracket;
    FederalIncomeTax.forEach(bracket => {
        if (annualIncome > bracket.minimumToQualify &&
            bracket.minimumToQualify > maxMinimum.minimumToQualify)
        {
            maxMinimum = bracket;
        }
    });

    return maxMinimum;
}

export const calculateFederalIncomeTax = (annualIncome: number): FederalIncomeBreakdown =>
{
    const {
        minimumToQualify,
        taxRate,
        taxTotalToThisBracket
    }: TaxBracket = findFederalIncomeTaxBracket(annualIncome);

    const amountTaxed: number = annualIncome - minimumToQualify;
    const totalTaxAmount: number = (amountTaxed * taxRate) + taxTotalToThisBracket;

    return {
        federalIncomeTaxRate: taxRate,
        federalIncomeTaxAmount: totalTaxAmount
    };
}

export const calculateSocialSecurityTax = (annualIncome: number): number =>
{
    if (annualIncome > SOCIAL_SECURITY_TAX_WAGE_LIMIT)
    {
        return SOCIAL_SECURITY_TAX_WAGE_LIMIT * SOCIAL_SECURITY_TAX_RATE;
    }
    return annualIncome * SOCIAL_SECURITY_TAX_RATE;
}

export const calculateMedicareTax = (annualIncome: number): number =>
{
    return annualIncome * MEDICARE_TAX_RATE;
}
