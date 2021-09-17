import { FederalTaxBreakdown, StateTaxBreakdown, TaxBreakdown } from '../types';
import { calculateFederalTaxes } from './federalTaxCalculator';
import { calculateStateTaxes } from './stateIncomeTaxCalculator';

export const generateTaxReport = (
  state: string,
  annualIncome: number,
): TaxBreakdown => {
  const federalTaxes: FederalTaxBreakdown = calculateFederalTaxes(annualIncome);
  const stateTaxes: StateTaxBreakdown = calculateStateTaxes(state, annualIncome);

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
