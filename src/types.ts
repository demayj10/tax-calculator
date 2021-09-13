export interface FederalIncomeBreakdown {
    federalIncomeTaxRate: number,
    federalIncomeTaxAmount: number
}

export interface StateIncomeBreakdown {
    stateIncomeTaxRate: number,
    stateIncomeTaxAmount: number
}

export interface TaxBreakdown {
    grossAnnualIncome: number,
    federalIncomeTaxRate: number,
    federalIncomeTaxAmount: number,
    socialSecurityTaxRate: number,
    socialSecurityTaxAmount: number,
    medicareTaxRate: number,
    medicareTaxAmount: number,
    totalTaxes: number,
    netAnnualIncome: number
}

export type TaxBracket = {
    minimumToQualify: number,
    taxRate: number,
    taxTotalToThisBracket: number
}

export type ActionString = {
    type: string,
    field: string,
    payload: string
}

export type ActionObject = {
    type: string,
    payload: object
}

export type InputFormState = {
    grossAnnualIncome: string,
    selectedState: string,
    maritalStatus: string
}

export interface AppState extends TaxBreakdown {}

