import {
    MEDICARE_TAX_RATE,
    SOCIAL_SECURITY_TAX_RATE,
} from "./taxBrackets/constants";
import {
    TaxBreakdown
} from "../types";
import {
    calculateFederalIncomeTax, calculateMedicareTax,
    calculateSocialSecurityTax
} from "./federalTaxCalculator";

export const generateTaxReport = (annualIncome: number): TaxBreakdown =>
{
    const {
        federalIncomeTaxRate, federalIncomeTaxAmount
    } = calculateFederalIncomeTax(annualIncome);
    const reducer = (a: number, b: number) => a + b;
    const socialSecurityTaxAmount = calculateSocialSecurityTax(annualIncome);
    const medicareTaxAmount = calculateMedicareTax(annualIncome);
    const totalTaxes: number = [ federalIncomeTaxAmount,
                                 socialSecurityTaxAmount,
                                 medicareTaxAmount ].reduce(reducer);
    const netAnnualIncome: number = annualIncome - totalTaxes;

    return {
        grossAnnualIncome: annualIncome,
        federalIncomeTaxRate,
        federalIncomeTaxAmount,
        socialSecurityTaxRate: SOCIAL_SECURITY_TAX_RATE,
        socialSecurityTaxAmount,
        medicareTaxRate: MEDICARE_TAX_RATE,
        medicareTaxAmount,
        totalTaxes,
        netAnnualIncome
    };
}
