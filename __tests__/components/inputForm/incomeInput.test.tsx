import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render, screen } from '../../../src/app/test-utils';
import IncomeInput from '../../../src/components/inputForm/incomeInput';

describe('test handleInputChange functionality', () => {
  test('user input is valid number', () => {
    render(<IncomeInput />);

    const grossAnnualIncomeInput: HTMLElement = screen.getByTestId('grossAnnualIncomeInput');
    expect(grossAnnualIncomeInput).toBeInTheDocument();
    expect(grossAnnualIncomeInput).toHaveValue('');
    fireEvent.change(grossAnnualIncomeInput, { target: { value: '11' } });
    expect(grossAnnualIncomeInput).toHaveValue('11');
  });

  test('user input is invalid value', () => {
    render(<IncomeInput />);

    const grossAnnualIncomeInput: HTMLElement = screen.getByTestId('grossAnnualIncomeInput');
    expect(grossAnnualIncomeInput).toBeInTheDocument();
    expect(grossAnnualIncomeInput).toHaveValue('');
    fireEvent.change(grossAnnualIncomeInput, { target: { value: 'l' } });
    expect(grossAnnualIncomeInput).toHaveValue('');
  });
});
