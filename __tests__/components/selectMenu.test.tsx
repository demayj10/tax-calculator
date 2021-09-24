import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render, screen } from '../../src/app/test-utils';
import SelectMenu, { SelectMenuProps } from '../../src/components/selectMenu';

describe('load select menu', () => {
  const handleInputChangeMock = jest.fn();
  test('loads on screen and takes input correctly', () => {
    const {
      label, id, optionList, handleInputChange, testId, value,
    }: SelectMenuProps = {
      label: 'label',
      id: 'id',
      optionList: ['test'],
      handleInputChange: handleInputChangeMock,
      testId: 'testId',
      value: '',
    };
    const { rerender } = render(
      <SelectMenu
        label={label}
        id={id}
        optionList={optionList}
        handleInputChange={handleInputChange}
        testId={testId}
        value={value}
      />,
    );

    const selectMenu: HTMLElement = screen.getByTestId('testId');
    expect(selectMenu).toBeInTheDocument();
    expect(selectMenu).toHaveValue('');
    const userSelectItem = 'test';
    fireEvent.change(selectMenu, { target: { value: userSelectItem } });
    expect(handleInputChange).toBeCalled();
    rerender(
      <SelectMenu
        label={label}
        id={id}
        optionList={optionList}
        handleInputChange={handleInputChangeMock}
        testId={testId}
        value={userSelectItem}
      />,
    );
    expect(selectMenu).toHaveValue(userSelectItem);
  });
});
