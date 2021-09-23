import React, { FC } from 'react';
import './dataListItem.css';
import { Paper, Typography } from '@mui/material';
import { DataItemType } from '../../lib/data/dataItemType';

export interface DataListItemProps {
    title: string,
    value: number,
    type: DataItemType,
    isSublist: boolean
}

const DataListItem: FC<DataListItemProps> = (dataListItemProps: DataListItemProps) => {
  const {
    title, value, type, isSublist,
  } = dataListItemProps;
  let valueString: string;

  const formatterUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const convertToPercent = (rate: number): string => `${parseFloat((rate * 100).toFixed(3))}%`;

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

  if (isSublist) {
    return (
      <li className="dataItem">
        <p className="dataItemTitle" data-testid="dataItemTitle">
          {`${title}:`}
        </p>
        <p className="dataItemValue subListValue" data-testid="dataItemValue">{valueString}</p>
      </li>
    );
  }
  return (
    <Paper>
      <div className="paper-item">
        <Typography fontWeight="bold" variant="h5">{`${title}:`}</Typography>
        <Typography
          fontWeight="bold"
          className="dataItemValue"
          variant="h5"
          data-testid="dataItemValue"
        >
          {valueString}
        </Typography>
      </div>
    </Paper>
  );
};

export default DataListItem;
