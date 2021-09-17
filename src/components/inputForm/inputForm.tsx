import React, { BaseSyntheticEvent, FC } from 'react';
import { useDispatch } from 'react-redux';
import { FieldUpdatePayload, InputFormState } from '../../types';
import { SupportedStatesList } from '../../lib/data/supportedStates';
import { MaritalStatusList } from '../../lib/data/maritalStatus';
import { useAppSelector } from '../../app/hooks';
import { handleTextChange, resetInput, selectInputForm } from './inputFormSlice';
import { AppDispatch } from '../../app/store';

interface InputFormProps {
    submitInput(data: InputFormState): void;
}

const InputForm: FC<InputFormProps> = (inputFormProps: InputFormProps) => {
  const inputForm = useAppSelector(selectInputForm);
  const dispatch: AppDispatch = useDispatch();
  const grossAnnualIncomeId = 'grossAnnualIncome';
  const selectedStateId = 'selectedState';
  const maritalStatusId = 'maritalStatus';

  const { grossAnnualIncome, selectedState, maritalStatus } = inputForm;
  const isEnabled = (
    grossAnnualIncome.length > 0
        && selectedState.length > 0
        && maritalStatus.length > 0
  );

  const handleInputChange = (e: BaseSyntheticEvent) => {
    const { name, value } = e.target;
    const payload: FieldUpdatePayload = { field: name, value };
    dispatch(handleTextChange(payload));
  };

  const submitForm = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    dispatch(resetInput(''));
    inputFormProps.submitInput(inputForm);
  };

  return (
    <div id="formContainer">
      <label htmlFor={grossAnnualIncomeId}>
        Gross Annual Income
        <input
          name={grossAnnualIncomeId}
          id={grossAnnualIncomeId}
          value={grossAnnualIncome}
          onChange={(e: BaseSyntheticEvent) => handleInputChange(e)}
        />
      </label>
      <br />
      <label htmlFor={selectedStateId}>
        Which State do you live in?
        <select
          name={selectedStateId}
          id={selectedStateId}
          value={selectedState}
          onChange={(e: BaseSyntheticEvent) => handleInputChange(e)}
        >
          <option value="" label="Select" disabled />
          {SupportedStatesList.map((state: string) => (
            <option value={state} key={state}>
              {state}
            </option>
          ))}
          ;
        </select>
      </label>
      <br />
      <label htmlFor={maritalStatusId}>
        What is your filing status?
        <select
          name={maritalStatusId}
          id={maritalStatusId}
          value={maritalStatus}
          onChange={(e: BaseSyntheticEvent) => handleInputChange(e)}
        >
          <option value="" label="Select" disabled />
          {MaritalStatusList.map((status: string) => (
            <option value={status} key={status}>
              {status}
            </option>
          ))}
          ;
        </select>
      </label>
      <br />
      <button
        id="submit"
        type="submit"
        disabled={!isEnabled}
        onClick={(e: BaseSyntheticEvent) => submitForm(e)}
      >
        Submit
      </button>
    </div>
  );
};

export default InputForm;
