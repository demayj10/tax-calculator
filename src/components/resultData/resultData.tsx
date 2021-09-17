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
    <div id="resultContainer">
      <h1>
        <u>Results</u>
      </h1>
      <ul id="resultData">
        <DataListItem
          title="Gross Annual Income"
          value={grossAnnualIncome}
          type={DataItemType.DollarAmount}
        />
        <FederalResultData federalTaxData={federal} />
        { hasStateIncomeTax
          ? (
            <StateResultData
              stateIncomeTaxRate={stateIncomeTaxRate}
              stateIncomeTaxAmount={stateIncomeTaxAmount}
              totalStateTaxAmount={totalStateTaxAmount}
            />
          )
          : null}
        <DataListItem
          title="Total Taxes"
          value={totalTaxes}
          type={DataItemType.DollarAmount}
        />
        <DataListItem
          title="Net Annual Income"
          value={netAnnualIncome}
          type={DataItemType.DollarAmount}
        />
      </ul>
    </div>
  );
};

export default ResultData;
