import React from 'react';
import App from '../src/App';
import { fireEvent, render, screen } from '../src/app/test-utils';
import { SupportedStates } from '../src/lib/data/supportedStates';
import { MaritalStatus } from '../src/lib/data/maritalStatus';

const checkAndUpdateStateValue = (
  grossAnnualIncomeUserValue: string,
  selectedStateUserValue: string,
  maritalStatusUserValue: string,
): void => {
  const grossAnnualIncome: HTMLElement = screen.getByLabelText('Gross Annual Income');
  expect(grossAnnualIncome).toBeInTheDocument();
  expect(grossAnnualIncome).toHaveValue('');
  fireEvent.change(grossAnnualIncome, { target: { value: grossAnnualIncomeUserValue } });
  expect(grossAnnualIncome).toHaveValue(grossAnnualIncomeUserValue);

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
  test('App loads data correctly - no state income tax result', () => {
    render(<App />);

    expect(screen.queryByTestId('result-data')).not.toBeInTheDocument();
    expect(screen.getByTestId('input-form')).toBeInTheDocument();

    const grossAnnualIncomeUserValue = '100000';
    checkAndUpdateStateValue(
      grossAnnualIncomeUserValue,
      SupportedStates.Washington,
      MaritalStatus.Single,
    );

    const submitButton: HTMLElement = screen.getByRole('button', { name: 'Submit' });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeEnabled();

    fireEvent.click(submitButton);

    expect(screen.getByTestId('result-data')).toBeInTheDocument();
    expect(screen.queryByTestId('state-result-data')).not.toBeInTheDocument();
  });

  test('App loads data correctly - has state income tax result', () => {
    render(<App />);

    expect(screen.queryByTestId('result-data')).not.toBeInTheDocument();
    expect(screen.getByTestId('input-form')).toBeInTheDocument();

    const grossAnnualIncomeUserValue = '100000';
    checkAndUpdateStateValue(
      grossAnnualIncomeUserValue,
      SupportedStates.Ohio,
      MaritalStatus.Single,
    );

    const submitButton: HTMLElement = screen.getByRole('button', { name: 'Submit' });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeEnabled();

    fireEvent.click(submitButton);

    expect(screen.getByTestId('result-data')).toBeInTheDocument();
    expect(screen.queryByTestId('state-result-data')).toBeInTheDocument();
  });
});
