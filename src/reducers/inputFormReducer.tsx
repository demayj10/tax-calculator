import { ActionString, InputFormState } from "../types";

export enum ActionKind {
    HandleTextChange = "HANDLE TEXT CHANGE",
    Reset = "RESET"
}

export const initialFormState: InputFormState = {
    grossAnnualIncome: "",
    maritalStatus: "",
    selectedState: ""
}

export const inputFormReducer = (state: InputFormState,
                                 action: ActionString) =>
{
    const { field, payload } = action;
    switch (action.type) {
        case ActionKind.HandleTextChange:
            return { ...state, [ field ]: payload };
        case ActionKind.Reset:
            return { ...initialFormState }
        default:
            return state;
    }
}