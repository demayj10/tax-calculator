import { generateTaxReport } from "../../src/lib/taxCalculator";
import { TaxBreakdown } from "../../src/types";
import {
    MEDICARE_TAX_RATE,
    ONE_HUNDRED_THOUSAND,
    SOCIAL_SECURITY_TAX_RATE
} from "../../src/lib/taxBrackets/constants";

describe("test generateTaxReport", () =>
{
    test("should generate the report for income - $0", () =>
    {
       const annualIncome: number = 0;
       const expectedReport: TaxBreakdown = {
           grossAnnualIncome: annualIncome,
           federalIncomeTaxAmount: 0,
           federalIncomeTaxRate: 0.10,
           socialSecurityTaxRate: SOCIAL_SECURITY_TAX_RATE,
           socialSecurityTaxAmount: 0,
           medicareTaxRate: MEDICARE_TAX_RATE,
           medicareTaxAmount: 0,
           totalTaxes: 0,
           netAnnualIncome: 0
       }
       const actualReport: TaxBreakdown = generateTaxReport(annualIncome);

       expect(actualReport).toEqual(expectedReport);
    });

    test("should generate the report for income - $100,000", () =>
    {
        const annualIncome: number = ONE_HUNDRED_THOUSAND;
        const expectedFederalIncomeTax: number = 18079.26;
        const expectedSocialSecurityTax: number = 6200;
        const expectedMedicareTax: number = 1450;
        const totalTaxes: number = expectedFederalIncomeTax +
                                   expectedSocialSecurityTax +
                                   expectedMedicareTax;
        const netAnnualIncome: number = annualIncome - totalTaxes;

        const expectedReport: TaxBreakdown = {
            grossAnnualIncome: annualIncome,
            federalIncomeTaxRate: 0.24,
            federalIncomeTaxAmount: expectedFederalIncomeTax,
            socialSecurityTaxRate: SOCIAL_SECURITY_TAX_RATE,
            socialSecurityTaxAmount: expectedSocialSecurityTax,
            medicareTaxRate: MEDICARE_TAX_RATE,
            medicareTaxAmount: expectedMedicareTax,
            totalTaxes,
            netAnnualIncome
        }
        const actualReport: TaxBreakdown = generateTaxReport(annualIncome);

        expect(actualReport).toEqual(expectedReport);
    });
});
