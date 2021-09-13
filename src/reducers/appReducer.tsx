import { ActionObject, AppState } from "../types";

export enum ActionKind {
    UpdateData = "UPDATE DATA"
}

export const initialAppState: AppState = {
    grossAnnualIncome: 0,
    federalIncomeTaxRate: 0,
    federalIncomeTaxAmount: 0,
    socialSecurityTaxRate: 0,
    socialSecurityTaxAmount: 0,
    medicareTaxRate: 0,
    medicareTaxAmount: 0,
    totalTaxes: 0,
    netAnnualIncome: 0
}

export const appReducer = (state: AppState, action: ActionObject) => {
    switch (action.type) {
        case ActionKind.UpdateData:
            return { ...action.payload }
        default:
            return state;
    }
}