import {
  StateTaxBreakdown,
  TaxBracket,
  TaxPayload,
} from '../types';
import { StatesWithoutIncomeTax, SupportedStates } from './data/supportedStates';
import {
  ohioIncomeTaxBracketsArray,
  ohioIncomeTaxBracketsObject,
} from './taxBrackets/stateTaxes/OH-IncomeTax';

export const calculateStateIncomeTax = (
  annualIncome: number,
  stateIncomeTaxBracket: TaxBracket,
): TaxPayload => {
  const {
    minimumToQualify,
    taxRate,
    taxTotalToThisBracket,
  }: TaxBracket = stateIncomeTaxBracket;

  const amountTaxed: number = annualIncome - minimumToQualify;
  const taxAmount: number = (amountTaxed * taxRate) + taxTotalToThisBracket;

  return { taxRate, taxAmount };
};

export const findStateTaxBracketList = (
  state: string,
): TaxBracket[] => {
  switch (state) {
    case SupportedStates.Ohio:
      return ohioIncomeTaxBracketsArray;
    default:
      return [];
  }
};

export const findStateIncomeTaxBracket = (
  annualIncome: number,
  stateIncomeBrackets: TaxBracket[],
): TaxBracket => {
  let maxMinimum: TaxBracket = ohioIncomeTaxBracketsObject.ohioFirstBracket;
  stateIncomeBrackets.forEach((bracket: TaxBracket) => {
    if (annualIncome > bracket.minimumToQualify) {
      if (bracket.minimumToQualify > maxMinimum.minimumToQualify) {
        maxMinimum = bracket;
      }
    }
  });

  return maxMinimum;
};

export const calculateStateTaxes = (
  state: string,
  annualIncome: number,
): StateTaxBreakdown => {
  // If it is not a state with income tax
  if (StatesWithoutIncomeTax.includes(state as SupportedStates)) {
    return {
      stateIncomeTaxRate: 0,
      stateIncomeTaxAmount: 0,
      totalStateTaxAmount: 0,
      hasStateIncomeTax: false,
    };
  }
  const stateIncomeTaxBrackets: TaxBracket[] = findStateTaxBracketList(state);
  const stateIncomeTaxBracket: TaxBracket = findStateIncomeTaxBracket(annualIncome,
    stateIncomeTaxBrackets);
  const {
    taxRate: stateIncomeTaxRate,
    taxAmount: stateIncomeTaxAmount,
  } = calculateStateIncomeTax(annualIncome, stateIncomeTaxBracket);

  return {
    stateIncomeTaxRate,
    stateIncomeTaxAmount,
    totalStateTaxAmount: stateIncomeTaxAmount,
    hasStateIncomeTax: true,
  };
};
