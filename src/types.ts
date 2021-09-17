export interface TaxPayload {
    taxRate: number,
    taxAmount: number
}

export interface FederalTaxBreakdown {
    federalIncomeTaxRate: number,
    federalIncomeTaxAmount: number,
    socialSecurityTaxRate: number,
    socialSecurityTaxAmount: number,
    medicareTaxRate: number,
    medicareTaxAmount: number,
    totalFederalTaxAmount: number
}

export interface StateTaxBreakdown {
    stateIncomeTaxRate: number,
    stateIncomeTaxAmount: number,
    totalStateTaxAmount: number,
    hasStateIncomeTax: boolean
}

export interface TaxBreakdown {
    federal: FederalTaxBreakdown,
    state: StateTaxBreakdown,
    grossAnnualIncome: number,
    totalTaxes: number,
    netAnnualIncome: number
}

export type TaxBracket = {
    minimumToQualify: number,
    taxRate: number,
    taxTotalToThisBracket: number
}

export type FieldUpdatePayload = {
    field: string,
    value: string | number
}

export type InputFormState = {
    grossAnnualIncome: string,
    selectedState: string,
    maritalStatus: string
}
