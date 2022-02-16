import React, { BaseSyntheticEvent, FC } from 'react';
import {
  FormControl, FormControlLabel, FormLabel, Radio, RadioGroup,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import TextField from '../textField';
import HourlyIncomeInput from './hourlyIncomeInput';
import { useAppSelector } from '../../app/hooks';
import { handleTextChange, handleRadioChange, selectInputForm } from './inputFormSlice';
import { AppDispatch } from '../../app/store';
import { FieldUpdatePayload } from '../../types';
import './inputForm.css';

const enum RadioOptions {
    Salary = 'Salary',
    Hourly = 'Hourly',
}

const radioButtonOptionsArray = [
  RadioOptions.Salary,
  RadioOptions.Hourly,
];

const IncomeInput: FC = () => {
  const { grossAnnualIncome, isHourly } = useAppSelector(selectInputForm);
  const dispatch: AppDispatch = useDispatch();
  const [value, setValue] = React.useState((isHourly ? RadioOptions.Hourly : RadioOptions.Salary));
  const grossAnnualIncomeId = 'grossAnnualIncome';

  const handleChange = (e: BaseSyntheticEvent) => {
    const { value: targetValue, name } = e.target;
    if (name === 'income-radio-buttons-group') {
      setValue((targetValue));
      const payload: FieldUpdatePayload = { field: 'isHourly', value: targetValue };
      dispatch(handleRadioChange(payload));
    } else {
      const onlyNumbers = /^[1-9]\d*(\.\d*)?$/;
      if (targetValue === '' || onlyNumbers.test(targetValue)) {
        const payload: FieldUpdatePayload = { field: name, value: targetValue };
        dispatch(handleTextChange(payload));
      }
    }
  };

  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend" id="input-label-text">How are you paid?</FormLabel>
        <RadioGroup
          row
          aria-label="grossIncome"
          data-testid="income-radio-buttons-group"
          id="pay-radio-buttons"
          value={value}
          name="income-radio-buttons-group"
          onChange={(e: BaseSyntheticEvent) => handleChange(e)}
        >
          {radioButtonOptionsArray.map(
            (option: string) => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio />}
                label={option}
                className="radio-button"
              />
            ),
          )}
        </RadioGroup>
      </FormControl>
      {
        isHourly ? (
          <HourlyIncomeInput />
        ) : (
          <div className="income-input-container">
            <TextField
              label="Gross Annual Income"
              id={grossAnnualIncomeId}
              handleInputChange={handleChange}
              testId="grossAnnualIncomeInput"
              value={grossAnnualIncome}
            />
          </div>
        )
    }
    </div>
  );
};

export default IncomeInput;
