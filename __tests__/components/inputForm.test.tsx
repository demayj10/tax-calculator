import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render, screen } from '../../src/test-utils';
import InputForm, { InputFormProps } from '../../src/components/inputForm/inputForm';
import { SupportedStates } from '../../src/lib/data/supportedStates';
import { MaritalStatus } from '../../src/lib/data/maritalStatus';

describe('load input form', () => {
  const submitInputMock = jest.fn();

  test('initial screen loads correctly - empty inputs expected', () => {
    const { submitInput }: InputFormProps = {
      submitInput: submitInputMock,
    };
    render(<InputForm submitInput={submitInput} />);

    const grossAnnualIncome: HTMLElement = screen.getByLabelText('Gross Annual Income');
    expect(grossAnnualIncome).toBeInTheDocument();
    expect(grossAnnualIncome).toHaveTextContent('');

    const selectedState: HTMLElement = screen.getByTestId('stateSelect');
    expect(selectedState).toBeInTheDocument();
    expect(selectedState).toHaveValue('');

    const maritalStatus: HTMLElement = screen.getByTestId('maritalStatusSelect');
    expect(maritalStatus).toBeInTheDocument();
    expect(maritalStatus).toHaveValue('');

    const submitButton: HTMLElement = screen.getByText('Submit');
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });

  test('input fields accept values correctly', () => {
    const { submitInput }: InputFormProps = {
      submitInput: submitInputMock,
    };
    render(<InputForm submitInput={submitInput} />);

    const grossAnnualIncome: HTMLElement = screen.getByLabelText('Gross Annual Income');
    expect(grossAnnualIncome).toBeInTheDocument();
    expect(grossAnnualIncome).toHaveValue('');
    const userInputValue = '100000';
    fireEvent.change(grossAnnualIncome, { target: { value: userInputValue } });
    expect(grossAnnualIncome).toHaveValue(userInputValue);

    const selectedState: HTMLElement = screen.getByTestId('stateSelect');
    expect(selectedState).toBeInTheDocument();
    expect(selectedState).toHaveValue('');
    const userSelectStateValue = SupportedStates.Washington;
    fireEvent.select(selectedState, { target: { value: userSelectStateValue } });
    expect(selectedState).toHaveValue(userSelectStateValue);

    const maritalStatus: HTMLElement = screen.getByTestId('maritalStatusSelect');
    expect(maritalStatus).toBeInTheDocument();
    expect(maritalStatus).toHaveValue('');
    const userSelectMaritalStatusValue = MaritalStatus.Single;
    fireEvent.select(maritalStatus, { target: { value: userSelectMaritalStatusValue } });
    expect(maritalStatus).toHaveValue(userSelectMaritalStatusValue);
  });
});
