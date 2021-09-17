import React, { FC } from 'react';
import './dataListItem.css';
import { DataItemType } from '../../lib/data/dataItemType';

interface DataListItemProps {
    title: string,
    value: number,
    type: DataItemType
}

const DataListItem: FC<DataListItemProps> = (dataListItemProps: DataListItemProps) => {
  const { title, value, type } = dataListItemProps;
  let valueString: string;

  const formatterUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const convertToPercent = (rate: number): string => `${(rate * 100).toFixed(3)}%`;

  switch (type) {
    case DataItemType.DollarAmount:
      valueString = formatterUSD.format(value);
      break;
    case DataItemType.Percentage:
      valueString = convertToPercent(value);
      break;
    default:
      valueString = value.toString();
      break;
  }

  return (
    <li className="dataItem">
      <p className="dataItemTitle">
        {title}
        :
      </p>
      <p className="dataItemValue">{valueString}</p>
    </li>
  );
};

export default DataListItem;
