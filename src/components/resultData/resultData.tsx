import React, { FC } from 'react';
import './resultData.css';
import DataListItem from '../dataList/dataListItem';
import { useAppSelector } from '../../app/hooks';
import FederalResultData from './federalResultData';
import StateResultData from './stateResultData';
import { DataItemType } from '../../lib/data/dataItemType';
import { selectResultData } from './resultDataSlice';

const ResultData: FC = () => {
  const resultData = useAppSelector(selectResultData);

  const {
    federal,
    // Consider breaking the inside State data from the 'hasStateIncomeTax'
    // value for easier handoff to the props of StateResultData
    state: {
      stateIncomeTaxRate,
      stateIncomeTaxAmount,
      totalStateTaxAmount,
      hasStateIncomeTax,
    },
    grossAnnualIncome,
    totalTaxes,
    netAnnualIncome,
  } = resultData;

  return (
    <div id="resultContainer" data-testid="result-data">
      <h1>
        <u>Results</u>
      </h1>
      <div id="resultData">
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
    </div>
  );
};

export default ResultData;
