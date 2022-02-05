/* eslint-disable max-len */
import {
  StateTaxBreakdown,
  TaxBracket,
  TaxPayload,
} from '../types';
import { MaritalStatus } from './data/maritalStatus';
import { StatesWithoutIncomeTax, SupportedStates } from './data/supportedStates';
import { alabamaMarriedIncomeTaxBracketsArray, alabamaSingleIncomeTaxBracketsArray } from './taxBrackets/stateTaxes/AL-IncomeTax';
import { arkansasIncomeTaxBracketsArray } from './taxBrackets/stateTaxes/AR-IncomeTax';
import { arizonaMarriedIncomeTaxBracketsArray, arizonaSingleIncomeTaxBracketsArray } from './taxBrackets/stateTaxes/AZ-IncomeTax';
import { georgiaMarriedIncomeTaxBracketsArray, georgiaSingleIncomeTaxBracketsArray } from './taxBrackets/stateTaxes/GA-IncomeTax';
import { iowaIncomeTaxBracketsArray } from './taxBrackets/stateTaxes/IA-IncomeTax';
import { illinoisIncomeTaxBracketsArray } from './taxBrackets/stateTaxes/IL-IncomeTax';
import { indianaIncomeTaxBracketsArray } from './taxBrackets/stateTaxes/IN-IncomeTax';
import { kansasMarriedIncomeTaxBracketsArray, kansasSingleIncomeTaxBracketsArray } from './taxBrackets/stateTaxes/KS-IncomeTax';
import { louisianaMarriedIncomeTaxBracketsArray, louisianaSingleIncomeTaxBracketsArray } from './taxBrackets/stateTaxes/LA-IncomeTax';
import { michiganIncomeTaxBracketsArray } from './taxBrackets/stateTaxes/MI-IncomeTax';
import { minnesotaMarriedIncomeTaxBracketsArray, minnesotaSingleIncomeTaxBracketsArray } from './taxBrackets/stateTaxes/MN-IncomeTax';
import { mississippiIncomeTaxBracketsArray } from './taxBrackets/stateTaxes/MS-IncomeTax';
import { northCarolinaIncomeTaxBracketsArray } from './taxBrackets/stateTaxes/NC-IncomeTax';
import { northDakotaMarriedIncomeTaxBracketsArray, northDakotaSingleIncomeTaxBracketsArray } from './taxBrackets/stateTaxes/ND-IncomeTax';
import { nebraskaMarriedIncomeTaxBracketsArray, nebraskaSingleIncomeTaxBracketsArray } from './taxBrackets/stateTaxes/NE-IncomeTax';
import {
  newMexicoMarriedFilingSeparatelyIncomeTaxBracketsArray,
  newMexicoMarriedIncomeTaxBracketsArray,
  newMexicoSingleIncomeTaxBracketsArray,
} from './taxBrackets/stateTaxes/NM-IncomeTax';
import { ohioIncomeTaxBracketsArray } from './taxBrackets/stateTaxes/OH-IncomeTax';
import { oklahomaMarriedIncomeTaxBracketsArray, oklahomaSingleIncomeTaxBracketsArray } from './taxBrackets/stateTaxes/OK-IncomeTax';
import { pennsylvaniaTaxBracketsArray } from './taxBrackets/stateTaxes/PA-IncomeTax';
import { southCarolinaIncomeTaxBracketsArray } from './taxBrackets/stateTaxes/SC-IncomeTax';
import { wisconsinMarriedIncomeTaxBracketsArray, wisconsinSingleIncomeTaxBracketsArray } from './taxBrackets/stateTaxes/WI-IncomeTax';

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
  maritalStatus: string,
): TaxBracket[] => {
  switch (state) {
    case SupportedStates.Alabama:
      switch (maritalStatus) {
        case MaritalStatus.Single:
          return alabamaSingleIncomeTaxBracketsArray;
        default:
          return alabamaMarriedIncomeTaxBracketsArray;
      }
    case SupportedStates.Arizona:
      switch (maritalStatus) {
        case MaritalStatus.Single:
          return arizonaSingleIncomeTaxBracketsArray;
        default:
          return arizonaMarriedIncomeTaxBracketsArray;
      }
    case SupportedStates.Arkansas:
      return arkansasIncomeTaxBracketsArray;
    case SupportedStates.Georgia:
      switch (maritalStatus) {
        case MaritalStatus.Single:
          return georgiaSingleIncomeTaxBracketsArray;
        default:
          return georgiaMarriedIncomeTaxBracketsArray;
      }
    case SupportedStates.Illinois:
      return illinoisIncomeTaxBracketsArray;
    case SupportedStates.Indiana:
      return indianaIncomeTaxBracketsArray;
    case SupportedStates.Iowa:
      return iowaIncomeTaxBracketsArray;
    case SupportedStates.Kansas:
      switch (maritalStatus) {
        case MaritalStatus.Single:
          return kansasSingleIncomeTaxBracketsArray;
        // Married status case
        default:
          return kansasMarriedIncomeTaxBracketsArray;
      }
    case SupportedStates.Louisiana:
      switch (maritalStatus) {
        case MaritalStatus.Single:
          return louisianaSingleIncomeTaxBracketsArray;
        default:
          return louisianaMarriedIncomeTaxBracketsArray;
      }
    case SupportedStates.Michigan:
      return michiganIncomeTaxBracketsArray;
    case SupportedStates.Minnesota:
      switch (maritalStatus) {
        case MaritalStatus.Single:
          return minnesotaSingleIncomeTaxBracketsArray;
        default:
          return minnesotaMarriedIncomeTaxBracketsArray;
      }
    case SupportedStates.Mississippi:
      return mississippiIncomeTaxBracketsArray;
    case SupportedStates.Nebraska:
      switch (maritalStatus) {
        case MaritalStatus.Single:
          return nebraskaSingleIncomeTaxBracketsArray;
        default:
          return nebraskaMarriedIncomeTaxBracketsArray;
      }
    case SupportedStates.NewMexico:
      switch (maritalStatus) {
        case MaritalStatus.Single:
          return newMexicoSingleIncomeTaxBracketsArray;
        case MaritalStatus.MarriedSeparately:
          return newMexicoMarriedFilingSeparatelyIncomeTaxBracketsArray;
        default:
          return newMexicoMarriedIncomeTaxBracketsArray;
      }
    case SupportedStates.NorthDakota:
      switch (maritalStatus) {
        case MaritalStatus.Single:
          return northDakotaSingleIncomeTaxBracketsArray;
        default:
          return northDakotaMarriedIncomeTaxBracketsArray;
      }
    case SupportedStates.NorthCarolina:
      return northCarolinaIncomeTaxBracketsArray;
    case SupportedStates.Ohio:
      return ohioIncomeTaxBracketsArray;
    case SupportedStates.Oklahoma:
      switch (maritalStatus) {
        case MaritalStatus.Single:
          return oklahomaSingleIncomeTaxBracketsArray;
        default:
          return oklahomaMarriedIncomeTaxBracketsArray;
      }
    case SupportedStates.Pennsylvania:
      return pennsylvaniaTaxBracketsArray;
    case SupportedStates.SouthCarolina:
      return southCarolinaIncomeTaxBracketsArray;
    case SupportedStates.Wisconsin:
      switch (maritalStatus) {
        case MaritalStatus.Single:
          return wisconsinSingleIncomeTaxBracketsArray;
        default:
          return wisconsinMarriedIncomeTaxBracketsArray;
      }
    default:
      return [];
  }
};

export const findStateIncomeTaxBracket = (
  annualIncome: number,
  stateIncomeBrackets: TaxBracket[],
): TaxBracket => {
  let maxMinimum: TaxBracket = stateIncomeBrackets[0];
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
  maritalStatus: string,
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
  const stateIncomeTaxBrackets: TaxBracket[] = findStateTaxBracketList(state, maritalStatus);
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
