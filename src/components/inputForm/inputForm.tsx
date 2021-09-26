import React, { BaseSyntheticEvent, FC } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { FieldUpdatePayload } from '../../types';
import { SupportedStatesList } from '../../lib/data/supportedStates';
import { MaritalStatusList } from '../../lib/data/maritalStatus';
import { useAppSelector } from '../../app/hooks';
import {
  handleTextChange, InputFormState, resetInput, selectInputForm,
} from './inputFormSlice';
import { AppDispatch } from '../../app/store';
import SelectMenu from '../selectMenu';

import './inputForm.css';
import IncomeInput from './incomeInput';

export interface InputFormProps {
    submitInput(data: InputFormState): void;
}

const InputForm: FC<InputFormProps> = (inputFormProps: InputFormProps) => {
  const inputForm = useAppSelector(selectInputForm);
  const dispatch: AppDispatch = useDispatch();
  const selectedStateId = 'selectedState';
  const maritalStatusId = 'maritalStatus';

  const {
    grossAnnualIncome,
    selectedState,
    maritalStatus,
    hourly: {
      hourlyRate,
      averageHoursWorked,
    },
  } = inputForm;
  const isEnabled = (
    (grossAnnualIncome.length > 0 || (hourlyRate.length > 0 && averageHoursWorked.length > 0))
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
    <div id="formContainer" data-testid="input-form">
      <div id="input-items">
        <IncomeInput />
        <SelectMenu
          label="Which State do you live in?"
          id={selectedStateId}
          optionList={SupportedStatesList}
          handleInputChange={handleInputChange}
          testId="stateSelect"
          value={selectedState}
        />
        <SelectMenu
          label="What is your filing status?"
          id={maritalStatusId}
          optionList={MaritalStatusList}
          handleInputChange={handleInputChange}
          testId="maritalStatusSelect"
          value={maritalStatus}
        />
      </div>
      <br />
      <Button
        variant="contained"
        id="submit"
        size="small"
        disabled={!isEnabled}
        onClick={(e: BaseSyntheticEvent) => submitForm(e)}
      >
        Submit
      </Button>
    </div>
  );
};

export default InputForm;
