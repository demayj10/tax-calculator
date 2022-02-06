import {
  FederalTaxBreakdown, StateTaxBreakdown, TaxBreakdown,
} from '../types';
import { MaritalStatus } from './data/maritalStatus';
import { calculateFederalTaxes } from './federalTaxCalculator';
import { calculateStateTaxes } from './stateIncomeTaxCalculator';
import {
  MARRIED_SEPARATELY_STANDARD_DEDUCTION_2022,
  MARRIED_STANDARD_DEDUCTION_2022,
  SINGLE_STANDARD_DEDUCTION_2022,
} from './taxBrackets/constants';

export const generateTaxReport = (
  state: string,
  annualIncome: number,
  maritalStatus: string,
): TaxBreakdown => {
  let standardDeduction: number;
  switch (maritalStatus) {
    case MaritalStatus.Single:
      standardDeduction = SINGLE_STANDARD_DEDUCTION_2022;
      break;
    case MaritalStatus.MarriedJointly:
      standardDeduction = MARRIED_STANDARD_DEDUCTION_2022;
      break;
    default:
      standardDeduction = MARRIED_SEPARATELY_STANDARD_DEDUCTION_2022;
      break;
  }
  let adjustedAnnualIncome: number = annualIncome - standardDeduction;
  if (adjustedAnnualIncome < 0) {
    adjustedAnnualIncome = 0;
  }
  const federalTaxes: FederalTaxBreakdown = calculateFederalTaxes(
    adjustedAnnualIncome, maritalStatus,
  );
  const stateTaxes: StateTaxBreakdown = calculateStateTaxes(
    state, maritalStatus, adjustedAnnualIncome,
  );

  const { totalFederalTaxAmount } = federalTaxes;
  const { totalStateTaxAmount } = stateTaxes;

  const totalTaxes: number = (
    totalFederalTaxAmount
        + totalStateTaxAmount
  );
  const netAnnualIncome: number = annualIncome - totalTaxes;

  return {
    federal: federalTaxes,
    state: stateTaxes,
    grossAnnualIncome: annualIncome,
    totalTaxes,
    netAnnualIncome,
  };
};
