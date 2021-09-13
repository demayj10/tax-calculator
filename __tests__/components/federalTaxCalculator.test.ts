import { federalIncomeTaxBrackets } from "../../src/lib/taxBrackets/Federal-IncomeTax";
import {
    ONE_HUNDRED_THOUSAND,
    ONE_MILLION,
    TEN_THOUSAND
} from "../../src/lib/taxBrackets/constants";
import { FederalIncomeBreakdown } from "../../src/types";
import {
    calculateFederalIncomeTax,
    calculateMedicareTax,
    calculateSocialSecurityTax,
    findFederalIncomeTaxBracket
} from "../../src/lib/federalTaxCalculator";

describe("test findFederalIncomeTaxBracket", () =>
{
    test("should find the correct tax bracket - $0", () =>
    {
        const annualIncome: number = 0;

        const actualResponse = findFederalIncomeTaxBracket(annualIncome);
        expect(actualResponse).toEqual(federalIncomeTaxBrackets.firstBracket);
    });

    test("should find the correct tax bracket - $10,000", () =>
    {
        const annualIncome: number = TEN_THOUSAND;

        const actualResponse = findFederalIncomeTaxBracket(annualIncome);
        expect(actualResponse).toEqual(federalIncomeTaxBrackets.secondBracket);
    });

    test("should find the correct tax bracket - $100,000", () =>
    {
        const annualIncome: number = ONE_HUNDRED_THOUSAND;

        const actualResponse = findFederalIncomeTaxBracket(annualIncome);
        expect(actualResponse).toEqual(federalIncomeTaxBrackets.fourthBracket);
    });

    test("should find the correct tax bracket - $1,000,000", () =>
    {
        const annualIncome: number = ONE_MILLION;

        const actualResponse = findFederalIncomeTaxBracket(annualIncome);
        expect(actualResponse).toEqual(federalIncomeTaxBrackets.seventhBracket);
    });
});

describe("test calculateFederalIncomeTax", () =>
{
    test("should find the total tax paid for income - $0", () =>
    {
        const annualIncome: number = 0;

        const expectedResponse: FederalIncomeBreakdown = {
            federalIncomeTaxRate: 0.10,
            federalIncomeTaxAmount: 0
        };
        const actualResponse: FederalIncomeBreakdown = calculateFederalIncomeTax(annualIncome);

        expect(actualResponse).toEqual(expectedResponse);
    });

    test("should find the total tax paid for income - $10,000", () =>
    {
        const annualIncome: number = TEN_THOUSAND;

        const expectedResponse: FederalIncomeBreakdown = {
            federalIncomeTaxRate: 0.12,
            federalIncomeTaxAmount: 1002.38
        };
        const actualResponse: FederalIncomeBreakdown = calculateFederalIncomeTax(annualIncome);

        expect(actualResponse).toEqual(expectedResponse);
    });

    test("should find the total tax paid for income - $100,000", () =>
    {
        const annualIncome: number = ONE_HUNDRED_THOUSAND;

        const expectedResponse: FederalIncomeBreakdown = {
            federalIncomeTaxRate: 0.24,
            federalIncomeTaxAmount: 18079.26
        };
        const actualResponse: FederalIncomeBreakdown = calculateFederalIncomeTax(annualIncome);

        expect(actualResponse).toEqual(expectedResponse);
    });

    test("should find the total tax paid for income - $1,000,000", () =>
    {
        const annualIncome: number = ONE_MILLION;

        const expectedResponse: FederalIncomeBreakdown = {
            federalIncomeTaxRate: 0.37,
            federalIncomeTaxAmount: 334426.63
        };
        const actualResponse: FederalIncomeBreakdown = calculateFederalIncomeTax(annualIncome);

        expect(actualResponse).toEqual(expectedResponse);
    });
});

describe("test calculateSocialSecurityTax", () =>
{
    test("should find the total social security tax to be paid for income - $0", () =>
    {
        const annualIncome: number = 0;

        const expectedResponse: number = 0;
        const actualResponse: number = calculateSocialSecurityTax(annualIncome);

        expect(actualResponse).toEqual(expectedResponse);
    });

    test("should find the total social security tax to be paid for income - $100,000", () =>
    {
        const annualIncome: number = ONE_HUNDRED_THOUSAND;

        const expectedResponse: number = 6200;
        const actualResponse: number = calculateSocialSecurityTax(annualIncome);

        expect(actualResponse).toEqual(expectedResponse);
    });

    test("should find the total social security tax to be paid for income - $1,000,000", () =>
    {
        const annualIncome: number = ONE_MILLION;

        const expectedResponse: number = 8853.6;
        const actualResponse: number = calculateSocialSecurityTax(annualIncome);

        expect(actualResponse).toEqual(expectedResponse);
    });
});

describe("test calculateMedicareTax", () =>
{
    test("should find the total medicare tax to be paid for income - $0", () =>
    {
        const annualIncome: number = 0;

        const expectedResponse: number = 0;
        const actualResponse: number = calculateMedicareTax(annualIncome);

        expect(actualResponse).toEqual(expectedResponse);
    });

    test("should find the total medicare tax to be paid for income - $100,000", () =>
    {
        const annualIncome: number = ONE_HUNDRED_THOUSAND;

        const expectedResponse: number = 1450;
        const actualResponse: number = calculateMedicareTax(annualIncome);

        expect(actualResponse).toEqual(expectedResponse);
    });

    test("should find the total medicare tax to be paid for income - $1,000,000", () =>
    {
        const annualIncome: number = ONE_MILLION;

        const expectedResponse: number = 14500;
        const actualResponse: number = calculateMedicareTax(annualIncome);

        expect(actualResponse).toEqual(expectedResponse);
    });
});