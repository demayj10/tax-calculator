import React, { BaseSyntheticEvent, FC } from 'react';
import { useDispatch } from 'react-redux';
import { FieldUpdatePayload, InputFormState } from '../../types';
import { SupportedStatesList } from '../../lib/data/supportedStates';
import { MaritalStatusList } from '../../lib/data/maritalStatus';
import { useAppSelector } from '../../app/hooks';
import { handleTextChange, resetInput, selectInputForm } from './inputFormSlice';
import { AppDispatch } from '../../app/store';
import SelectMenu from '../selectMenu';
import TextField from '../textField';

export interface InputFormProps {
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
      <TextField
        label="Gross Annual Income"
        id={grossAnnualIncomeId}
        handleInputChange={handleInputChange}
        testId="grossAnnualIncomeInput"
        value={grossAnnualIncome}
      />
      <br />
      <SelectMenu
        label="Which State do you live in?"
        id={selectedStateId}
        optionList={SupportedStatesList}
        handleInputChange={handleInputChange}
        testId="stateSelect"
        value={selectedState}
      />
      <br />
      <SelectMenu
        label="What is your filing status?"
        id={maritalStatusId}
        optionList={MaritalStatusList}
        handleInputChange={handleInputChange}
        testId="maritalStatusSelect"
        value={maritalStatus}
      />
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
