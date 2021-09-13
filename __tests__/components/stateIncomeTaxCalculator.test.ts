import {SupportedStates} from "../../src/supportedStates";
import {StateIncomeBreakdown, TaxBracket} from "../../src/types";
import {
    ohioIncomeTaxBracketsArray,
    ohioIncomeTaxBracketsObject,
} from "../../src/lib/taxBrackets/stateTaxes/OH-IncomeTax";
import {
    calculateStateIncomeTax,
    findStateIncomeTaxBracket,
    findStateTaxBracketList
} from "../../src/lib/stateIncomeTaxCalculator";
import {ONE_HUNDRED_THOUSAND} from "../../src/lib/taxBrackets/constants";

describe("test findStateTaxBracketList", () => {
    test("should return the tax brackets for Ohio", () =>
    {
        const state: string = SupportedStates.Ohio;

        const expectedTaxBracketList: TaxBracket[] = ohioIncomeTaxBracketsArray;
        const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state);

        expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    });

    test("should return the empty array for default case", () =>
    {
        const state: string = "";

        const expectedTaxBracketList: TaxBracket[] = [];
        const actualTaxBracketList: TaxBracket[] = findStateTaxBracketList(state);

        expect(actualTaxBracketList).toEqual(expectedTaxBracketList);
    });
});

describe("test findStateIncomeTaxBracket", () => {
    test("should return the tax bracket for Ohio and income of $0", () =>
    {
        const annualIncome: number = 0;
        const stateIncomeBrackets: TaxBracket[] = ohioIncomeTaxBracketsArray;

        const expectedTaxBracket: TaxBracket = ohioIncomeTaxBracketsObject.ohioFirstBracket;
        const actualTaxBracket: TaxBracket = findStateIncomeTaxBracket(annualIncome, stateIncomeBrackets);

        expect(actualTaxBracket).toEqual(expectedTaxBracket);
    });

    test("should return the tax bracket for Ohio and income of $100,000", () =>
    {
        const annualIncome: number = ONE_HUNDRED_THOUSAND;
        const stateIncomeBrackets: TaxBracket[] = ohioIncomeTaxBracketsArray;

        const expectedTaxBracket: TaxBracket = ohioIncomeTaxBracketsObject.seventhBracket;
        const actualTaxBracket: TaxBracket = findStateIncomeTaxBracket(annualIncome, stateIncomeBrackets);

        expect(actualTaxBracket).toEqual(expectedTaxBracket);
    });
});

describe("test calculateStateIncomeTax", () => {
    test("should return state tax amount for Ohio and income of $0", () =>
    {
        const annualIncome: number = 0;
        const state: string = SupportedStates.Ohio;

        const expectedBreakdown: StateIncomeBreakdown = {
            stateIncomeTaxRate: 0.00495,
            stateIncomeTaxAmount: 0
        }
        const actualBreakdown: StateIncomeBreakdown = calculateStateIncomeTax(state, annualIncome);

        expect(actualBreakdown).toEqual(expectedBreakdown);
    });

    test("should return state tax amount for Ohio and income of $100,000", () =>
    {
       const annualIncome: number = ONE_HUNDRED_THOUSAND;
       const state: string = SupportedStates.Ohio;

       const expectedBreakdown: StateIncomeBreakdown = {
           stateIncomeTaxRate: 0.03960,
           stateIncomeTaxAmount: 1846.1
       };
       const actualBreakdown: StateIncomeBreakdown = calculateStateIncomeTax(state, annualIncome);

       expect(actualBreakdown).toEqual(expectedBreakdown);
    });
});
