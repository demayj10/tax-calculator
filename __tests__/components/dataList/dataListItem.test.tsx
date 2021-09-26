import React from 'react';
import { render, screen } from '../../../src/app/test-utils';
import '@testing-library/jest-dom';
import DataListItem, { DataListItemProps } from '../../../src/components/dataList/dataListItem';
import { DataItemType } from '../../../src/lib/data/dataItemType';

describe('load data list item', () => {
  const DATA_ITEM_TITLE_TEST_ID = 'dataItemTitle';
  const DATA_ITEM_VALUE_TEST_ID = 'dataItemValue';

  test('loads data item that contains a dollar amount value', () => {
    const {
      title, value, type, isSublist,
    }: DataListItemProps = {
      title: 'Title',
      value: 1000,
      type: DataItemType.DollarAmount,
      isSublist: true,
    };
    render(<DataListItem title={title} value={value} type={type} isSublist={isSublist} />);

    expect(screen.getByTestId(DATA_ITEM_TITLE_TEST_ID)).toHaveTextContent(`${title}:`);
    expect(screen.getByTestId(DATA_ITEM_VALUE_TEST_ID)).toHaveTextContent('$1,000');
  });

  test('loads data item that contains a percent value', () => {
    const {
      title, value, type, isSublist,
    }: DataListItemProps = {
      title: 'Title',
      value: 1,
      type: DataItemType.Percentage,
      isSublist: true,
    };
    render(<DataListItem title={title} value={value} type={type} isSublist={isSublist} />);

    expect(screen.getByTestId(DATA_ITEM_TITLE_TEST_ID)).toHaveTextContent(`${title}:`);
    expect(screen.getByTestId(DATA_ITEM_VALUE_TEST_ID)).toHaveTextContent('100%');
  });

  test('loads data item that contains a default value', () => {
    const {
      title, value, type, isSublist,
    }: DataListItemProps = {
      title: 'Title',
      value: 100,
      type: DataItemType.DefaultForTesting,
      isSublist: true,
    };
    render(<DataListItem title={title} value={value} type={type} isSublist={isSublist} />);

    expect(screen.getByTestId(DATA_ITEM_TITLE_TEST_ID)).toHaveTextContent(`${title}:`);
    expect(screen.getByTestId(DATA_ITEM_VALUE_TEST_ID)).toHaveTextContent('100');
  });
});
