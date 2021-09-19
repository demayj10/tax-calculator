import React, { FC } from 'react';
import DataListItem from '../dataList/dataListItem';

import './stateResultData.css';
import { DataItemType } from '../../lib/data/dataItemType';

export interface StateResultDataProps {
    stateIncomeTaxRate: number,
    stateIncomeTaxAmount: number,
    totalStateTaxAmount: number
}

const StateResultData: FC<StateResultDataProps> = (props: StateResultDataProps) => {
  const {
    stateIncomeTaxRate,
    stateIncomeTaxAmount,
    totalStateTaxAmount,
  } = props;

  return (
    <div id="stateResultDataContainer" data-testid="state-result-data">
      <DataListItem
        title="State Income Tax Rate"
        value={stateIncomeTaxRate}
        type={DataItemType.Percentage}
      />
      <DataListItem
        title="State Income Tax Amount"
        value={stateIncomeTaxAmount}
        type={DataItemType.DollarAmount}
      />
      <DataListItem
        title="Total State Tax Amount"
        value={totalStateTaxAmount}
        type={DataItemType.DollarAmount}
      />
    </div>
  );
};

export default StateResultData;
