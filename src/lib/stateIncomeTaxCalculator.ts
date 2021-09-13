import { StateIncomeBreakdown, TaxBracket } from "../types";
import { SupportedStates } from "../supportedStates";
import {
    ohioIncomeTaxBracketsArray,
    ohioIncomeTaxBracketsObject
} from "./taxBrackets/stateTaxes/OH-IncomeTax";

export const calculateStateIncomeTax = (state: string,
                                        annualIncome: number): StateIncomeBreakdown =>
{
    const stateIncomeTaxBrackets: TaxBracket[] = findStateTaxBracketList(state);
    const stateIncomeBracket: TaxBracket = findStateIncomeTaxBracket(annualIncome, stateIncomeTaxBrackets);
    const {
        minimumToQualify,
        taxRate,
        taxTotalToThisBracket
    }: TaxBracket = stateIncomeBracket;

    const amountTaxed: number = annualIncome - minimumToQualify;
    const totalTaxAmount: number = (amountTaxed * taxRate) + taxTotalToThisBracket;

    return {
        stateIncomeTaxRate: taxRate,
        stateIncomeTaxAmount: totalTaxAmount
    };
}

export const findStateTaxBracketList = (state: string): TaxBracket[] =>
{
    switch (state) {
        case SupportedStates.Ohio:
            return ohioIncomeTaxBracketsArray  ;
        default:
            return [];
    }
}

export const findStateIncomeTaxBracket = (annualIncome: number,
                                          stateIncomeBrackets: TaxBracket[]): TaxBracket =>
{
    let maxMinimum: TaxBracket = ohioIncomeTaxBracketsObject.ohioFirstBracket;
    stateIncomeBrackets.forEach(bracket => {
        if (annualIncome > bracket.minimumToQualify)
        {
            if (bracket.minimumToQualify > maxMinimum.minimumToQualify)
            {
                maxMinimum = bracket;
            }
        }
    });

    return maxMinimum;
}
