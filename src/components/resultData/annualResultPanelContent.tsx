import React, { FC } from 'react';
import DataListItem from '../dataList/dataListItem';
import { DataItemType } from '../../lib/data/dataItemType';
import FederalResultData from './federalResultData';
import StateResultData from './stateResultData';
import { ResultPanelContentProps } from '../../types';

const AnnualResultPanelContent: FC<ResultPanelContentProps> = (props: ResultPanelContentProps) => {
  const {
    federal,
    state: {
      stateIncomeTaxRate,
      stateIncomeTaxAmount,
      totalStateTaxAmount,
      hasStateIncomeTax,
    },
    grossAnnualIncome,
    totalTaxes,
    netAnnualIncome,
  } = props;

  return (
    <div className="panel-content">
      <DataListItem
        title="Gross Annual Income"
        value={grossAnnualIncome}
        type={DataItemType.DollarAmount}
        isSublist={false}
      />
      <FederalResultData federalTaxData={federal} />
      <StateResultData
        stateIncomeTaxRate={stateIncomeTaxRate}
        stateIncomeTaxAmount={stateIncomeTaxAmount}
        totalStateTaxAmount={totalStateTaxAmount}
        hasStateIncomeTax={hasStateIncomeTax}
      />
      <DataListItem
        title="Total Taxes"
        value={totalTaxes}
        type={DataItemType.DollarAmount}
        isSublist={false}
      />
      <DataListItem
        title="Net Annual Income"
        value={netAnnualIncome}
        type={DataItemType.DollarAmount}
        isSublist={false}
      />
    </div>
  );
};

export default AnnualResultPanelContent;
