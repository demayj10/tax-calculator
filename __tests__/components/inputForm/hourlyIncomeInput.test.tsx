import React from 'react';
import { fireEvent } from '@testing-library/react';
import HourlyIncomeInput from '../../../src/components/inputForm/hourlyIncomeInput';
import { render, screen } from '../../../src/app/test-utils';

describe('test handleInputChange functionality', () => {
  test('user input is valid number', () => {
    render(<HourlyIncomeInput />);

    const hourlyRateInput: HTMLElement = screen.getByTestId('hourly-rate-field');
    expect(hourlyRateInput).toBeInTheDocument();
    expect(hourlyRateInput).toHaveValue('');
    fireEvent.change(hourlyRateInput, { target: { value: '11' } });
    expect(hourlyRateInput).toHaveValue('11');
  });

  test('user input is invalid value', () => {
    render(<HourlyIncomeInput />);

    const hourlyRateInput: HTMLElement = screen.getByTestId('hourly-rate-field');
    expect(hourlyRateInput).toBeInTheDocument();
    expect(hourlyRateInput).toHaveValue('');
    fireEvent.change(hourlyRateInput, { target: { value: 'l' } });
    expect(hourlyRateInput).toHaveValue('');
  });
});
