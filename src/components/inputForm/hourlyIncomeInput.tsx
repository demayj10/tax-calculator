import React, { BaseSyntheticEvent, FC } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '../textField';
import { useAppSelector } from '../../app/hooks';
import { AppDispatch } from '../../app/store';
import { FieldUpdatePayload } from '../../types';
import { handleTextChange, IncomeInputType, selectInputForm } from './inputFormSlice';

const HourlyIncomeInput: FC = () => {
  const {
    hourlyRate,
    averageHoursWorked,
    overtimeRate,
    averageOvertimeHoursWorked,
  } = useAppSelector(selectInputForm).hourly;
  const dispatch: AppDispatch = useDispatch();

  const hourlyRateLabel = 'Hourly Rate';
  const hourlyRateId = 'hourlyRate';
  const averageHoursLabel = 'Average Hours/Week';
  const averageHoursId = 'averageHoursWorked';
  const overtimeRateLabel = 'Overtime Rate';
  const overtimeRateId = 'overtimeRate';
  const averageOvertimeHoursLabel = 'Average Overtime Hours/Week';
  const averageOvertimeHoursId = 'averageOvertimeHoursWorked';

  const handleInputChange = (e: BaseSyntheticEvent) => {
    const { name, value } = e.target;
    const onlyNumbers = /^[1-9]\d*(\.\d*)?$/;
    if (value === '' || onlyNumbers.test(value)) {
      const payload: FieldUpdatePayload = { field: name, value, type: IncomeInputType.Hourly };
      dispatch(handleTextChange(payload));
    }
  };

  return (
    <div className="income-input-container" data-testid="hourly-input-container">
      <div>
        <TextField
          label={hourlyRateLabel}
          id={hourlyRateId}
          handleInputChange={handleInputChange}
          testId="hourly-rate-field"
          value={hourlyRate}
        />
        <TextField
          label={averageHoursLabel}
          id={averageHoursId}
          handleInputChange={handleInputChange}
          testId="average-hours-field"
          value={averageHoursWorked}
        />
      </div>
      <div>
        <TextField
          label={overtimeRateLabel}
          id={overtimeRateId}
          handleInputChange={handleInputChange}
          testId="overtime-rate-field"
          value={overtimeRate}
        />
        <TextField
          label={averageOvertimeHoursLabel}
          id={averageOvertimeHoursId}
          handleInputChange={handleInputChange}
          testId="average-overtime-hours-field"
          value={averageOvertimeHoursWorked}
        />
      </div>
    </div>
  );
};

export default HourlyIncomeInput;
