import React, { FC } from 'react';

import { AccordionSummary } from '@mui/material';

import DataListItem from '../dataList/dataListItem';

import './stateResultData.css';
import { DataItemType } from '../../lib/data/dataItemType';
import FinancialAccordionSummary from '../accordion/financialAccordionSummary';
import { CustomizedAccordion } from '../accordion/customizedAccordion';
import { CustomizedAccordionDetails } from '../accordion/customizedAccordionDetails';

export interface StateResultDataProps {
    stateIncomeTaxRate: number,
    stateIncomeTaxAmount: number,
    totalStateTaxAmount: number,
    hasStateIncomeTax: boolean
}

const StateResultData: FC<StateResultDataProps> = (props: StateResultDataProps) => {
  const {
    stateIncomeTaxRate,
    stateIncomeTaxAmount,
    totalStateTaxAmount,
    hasStateIncomeTax,
  } = props;

  if (hasStateIncomeTax) {
    return (
      <CustomizedAccordion id="stateResultDataContainer" data-testid="state-result-data">
        <FinancialAccordionSummary
          title="State Taxes"
          amount={totalStateTaxAmount}
          ariaControls="stateTaxPanel"
        />
        <CustomizedAccordionDetails>
          <DataListItem
            title="State Income Tax Rate"
            value={stateIncomeTaxRate}
            type={DataItemType.Percentage}
            isSublist
          />
          <DataListItem
            title="State Income Tax Amount"
            value={stateIncomeTaxAmount}
            type={DataItemType.DollarAmount}
            isSublist
          />
          <DataListItem
            title="Total State Tax Amount"
            value={totalStateTaxAmount}
            type={DataItemType.DollarAmount}
            isSublist
          />
        </CustomizedAccordionDetails>
      </CustomizedAccordion>
    );
  }
  return (
    <CustomizedAccordion id="stateResultDataContainer" disabled>
      <AccordionSummary
        aria-controls="stateTaxPanel"
      >
        Your state has no income tax!
      </AccordionSummary>
    </CustomizedAccordion>
  );
};

export default StateResultData;
