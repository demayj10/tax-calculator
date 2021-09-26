import React from 'react';
import App from '../src/App';
import { fireEvent, render, screen } from '../src/app/test-utils';
import { SupportedStates } from '../src/lib/data/supportedStates';
import { MaritalStatus } from '../src/lib/data/maritalStatus';
import { HourlyIncomeState, IncomeInputType } from '../src/components/inputForm/inputFormSlice';

const checkAndUpdateSalaryIncome = (grossAnnualIncomeUserValue: string): void => {
  const grossAnnualIncome: HTMLElement = screen.getByLabelText('grossAnnualIncome');
  // console.log(grossAnnualIncome);
  expect(grossAnnualIncome).toBeInTheDocument();
  expect(grossAnnualIncome).toHaveValue('');
  fireEvent.change(grossAnnualIncome, { target: { value: grossAnnualIncomeUserValue } });
  expect(grossAnnualIncome).toHaveValue(grossAnnualIncomeUserValue);
};

const checkAndUpdateHourlyIncome = (
  {
    hourlyRate: hourlyRateUserValue,
    averageHoursWorked: averageHoursWorkedUserValue,
    overtimeRate: overtimeRateUserValue,
    averageOvertimeHoursWorked: averageOvertimeHoursWorkedUserValue,
  }: HourlyIncomeState,
): void => {
  const hourlyRate: HTMLElement = screen.getByTestId('hourly-rate-field');
  expect(hourlyRate).toBeInTheDocument();
  expect(hourlyRate).toHaveValue('');
  fireEvent.change(hourlyRate, { target: { value: hourlyRateUserValue } });
  expect(hourlyRate).toHaveValue(hourlyRateUserValue);

  const averageHoursWorked: HTMLElement = screen.getByTestId('average-hours-field');
  expect(averageHoursWorked).toBeInTheDocument();
  expect(averageHoursWorked).toHaveValue('');
  fireEvent.change(averageHoursWorked, { target: { value: averageHoursWorkedUserValue } });
  expect(averageHoursWorked).toHaveValue(averageHoursWorkedUserValue);

  const overtimeRate: HTMLElement = screen.getByTestId('overtime-rate-field');
  expect(overtimeRate).toBeInTheDocument();
  expect(overtimeRate).toHaveValue('');
  fireEvent.change(overtimeRate, { target: { value: overtimeRateUserValue } });
  expect(overtimeRate).toHaveValue(overtimeRateUserValue);

  const averageOvertimeHoursWorked: HTMLElement = screen.getByTestId('average-overtime-hours-field');
  expect(averageOvertimeHoursWorked).toBeInTheDocument();
  expect(averageOvertimeHoursWorked).toHaveValue('');
  fireEvent.change(
    averageOvertimeHoursWorked,
    { target: { value: averageOvertimeHoursWorkedUserValue } },
  );
  expect(averageOvertimeHoursWorked).toHaveValue(averageOvertimeHoursWorkedUserValue);
};

const checkAndUpdateStateValue = (
  selectedStateUserValue: string,
  maritalStatusUserValue: string,
): void => {
  const selectedState: HTMLElement = screen.getByTestId('stateSelect');
  expect(selectedState).toBeInTheDocument();
  expect(selectedState).toHaveValue('');
  fireEvent.change(selectedState, { target: { value: selectedStateUserValue } });
  expect(selectedState).toHaveValue(selectedStateUserValue);

  const maritalStatus: HTMLElement = screen.getByTestId('maritalStatusSelect');
  expect(maritalStatus).toBeInTheDocument();
  expect(maritalStatus).toHaveValue('');
  fireEvent.change(maritalStatus, { target: { value: maritalStatusUserValue } });
  expect(maritalStatus).toHaveValue(maritalStatusUserValue);
};

describe('load app', () => {
  test('App loads data correctly - salary - no state income tax result', () => {
    render(<App />);

    expect(screen.queryByTestId('result-data')).not.toBeInTheDocument();
    expect(screen.getByTestId('input-form')).toBeInTheDocument();

    const grossAnnualIncomeUserValue = '100000';
    checkAndUpdateSalaryIncome(grossAnnualIncomeUserValue);
    checkAndUpdateStateValue(SupportedStates.Washington, MaritalStatus.Single);

    const submitButton: HTMLElement = screen.getByRole('button', { name: 'Submit' });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeEnabled();

    fireEvent.click(submitButton);

    expect(screen.getByTestId('result-data')).toBeInTheDocument();
    expect(screen.queryByTestId('state-result-data')).not.toBeInTheDocument();
  });

  test('App loads data correctly - salary - has state income tax result', () => {
    render(<App />);

    expect(screen.queryByTestId('result-data')).not.toBeInTheDocument();
    expect(screen.getByTestId('input-form')).toBeInTheDocument();

    const grossAnnualIncomeUserValue = '100000';
    checkAndUpdateSalaryIncome(grossAnnualIncomeUserValue);
    checkAndUpdateStateValue(SupportedStates.Ohio, MaritalStatus.Single);

    const submitButton: HTMLElement = screen.getByRole('button', { name: 'Submit' });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeEnabled();

    fireEvent.click(submitButton);

    expect(screen.getByTestId('result-data')).toBeInTheDocument();
    expect(screen.queryByTestId('state-result-data')).toBeInTheDocument();
  });

  test('App loads data correctly - hourly - no state income tax result', () => {
    render(<App />);

    expect(screen.queryByTestId('result-data')).not.toBeInTheDocument();
    expect(screen.getByTestId('input-form')).toBeInTheDocument();
    const hourlyRadioButton: HTMLElement = screen.getByLabelText(IncomeInputType.Hourly);
    expect(hourlyRadioButton).toBeInTheDocument();
    fireEvent.click(hourlyRadioButton);
    expect(screen.getByTestId('hourly-input-container')).toBeInTheDocument();

    const hourlyRateUserValue = '15';
    const averageHoursWorkedUserValue = '40';
    const overtimeRateUserValue = '20';
    const averageOvertimeHoursWorkedUserValue = '10';
    checkAndUpdateHourlyIncome({
      hourlyRate: hourlyRateUserValue,
      averageHoursWorked: averageHoursWorkedUserValue,
      overtimeRate: overtimeRateUserValue,
      averageOvertimeHoursWorked: averageOvertimeHoursWorkedUserValue,
    });
    checkAndUpdateStateValue(SupportedStates.Washington, MaritalStatus.Single);

    const submitButton: HTMLElement = screen.getByRole('button', { name: 'Submit' });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeEnabled();

    fireEvent.click(submitButton);

    expect(screen.getByTestId('result-data')).toBeInTheDocument();
    expect(screen.queryByTestId('state-result-data')).not.toBeInTheDocument();
  });
});
