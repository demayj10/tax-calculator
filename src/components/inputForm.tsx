import React, {FC, useReducer} from "react";
import {InputFormState} from "../types";
import {
    ActionKind,
    initialFormState,
    inputFormReducer
} from "../reducers/inputFormReducer";
import {SupportedStates} from "../supportedStates";

const supportedStates: SupportedStates[] = [
    SupportedStates.Washington,
    SupportedStates.Ohio
];

const maritalStatuses: string [] = [
    "single"
]

interface InputFormProps {
    submitInput(data: InputFormState): void;
}

const InputForm: FC<InputFormProps> = (inputFormProps: InputFormProps) =>  {
    const [state, dispatch] = useReducer(inputFormReducer, initialFormState);
    const { grossAnnualIncome, selectedState,  maritalStatus } = state;
    const isEnabled = (
        grossAnnualIncome.length > 0 &&
        selectedState.length > 0 &&
        maritalStatus.length > 0
    );

    const handleTextChange = (e: any) => {
        dispatch({
            type: ActionKind.HandleTextChange,
            field: e.target.name,
            payload: e.target.value
        });
    }

    const submitForm = (e: any) => {
        e.preventDefault();
        dispatch({
            type: ActionKind.Reset,
            field: e.target.name,
            payload: e.target.value
        });
        inputFormProps.submitInput(state);
    }

    return(
      <div id={"formContainer"}>
          <label>
              Gross Annual Income
              <input
                  name="grossAnnualIncome"
                  value={grossAnnualIncome}
                  onChange={(e: any) => handleTextChange(e)}
              />
          </label>
          <br/>
          <label>
              Which State do you live in?
              <select
                  name="selectedState"
                  value={selectedState}
                  onChange={(e: any) => handleTextChange(e)}
              >
                  <option defaultValue={"-"}/>
                  {supportedStates.map((state: string) =>
                      <option value={state} key={state}>
                          {state}
                      </option>
                  )};
              </select>
          </label>
          <br/>
          <label>
              What is your filing status?
              <select
                  name="maritalStatus"
                  value={maritalStatus}
                  onChange={(e: any) => handleTextChange(e)}
              >
                  <option defaultValue={"-"}/>
                  {maritalStatuses.map((status: string) =>
                      <option value={status} key={status}>
                          {status}
                      </option>
                  )};
              </select>
          </label>
          <br/>
          <button
              id={"submit"}
              disabled={!isEnabled}
              onClick={(e: any) => submitForm(e)}
          >
              Submit
          </button>
      </div>
    );
}

export default InputForm;
