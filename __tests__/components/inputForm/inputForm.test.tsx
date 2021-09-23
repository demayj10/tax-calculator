import React from 'react';
import { render, screen } from '../../../src/app/test-utils';
import InputForm, { InputFormProps } from '../../../src/components/inputForm/inputForm';

describe('load input form', () => {
  const submitInputMock = jest.fn();
  const { submitInput }: InputFormProps = {
    submitInput: submitInputMock,
  };

  test('initial screen loads correctly - empty inputs expected', () => {
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
});
