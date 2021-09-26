import React from 'react';
import { render, screen, fireEvent } from '../../../src/app/test-utils';
import ResultData from '../../../src/components/resultData/resultData';

describe('test the handleTabChange function', () => {
  test('switch to monthly result tab', () => {
    render(<ResultData />);

    const tabMenu: HTMLElement = screen.getByTestId('tab-menu');
    expect(tabMenu).toBeInTheDocument();

    const annualTab: HTMLElement = screen.getByTestId('annual-tab');
    expect(annualTab).toHaveAttribute('aria-selected', 'true');
    const monthlyTab: HTMLElement = screen.getByTestId('monthly-tab');
    expect(monthlyTab).toHaveAttribute('aria-selected', 'false');

    fireEvent.click(monthlyTab);

    expect(annualTab).toHaveAttribute('aria-selected', 'false');
    expect(monthlyTab).toHaveAttribute('aria-selected', 'true');
  });
});
