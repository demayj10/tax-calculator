import React, { FC } from 'react';

import DataListItem from '../dataList/dataListItem';
import { DataItemType } from '../../lib/data/dataItemType';

import './federalResultData.css';
import FinancialAccordionSummary from '../accordion/financialAccordionSummary';
import { CustomizedAccordion } from '../accordion/customizedAccordion';
import { CustomizedAccordionDetails } from '../accordion/customizedAccordionDetails';

interface FederalResultDataProps {
    federalTaxData: {
        federalIncomeTaxRate: number,
        federalIncomeTaxAmount: number,
        socialSecurityTaxRate: number,
        socialSecurityTaxAmount: number,
        medicareTaxRate: number,
        medicareTaxAmount: number,
        totalFederalTaxAmount: number
    }
}

const FederalResultData: FC<FederalResultDataProps> = (props: FederalResultDataProps) => {
  const {
    federalTaxData: {
      federalIncomeTaxRate,
      federalIncomeTaxAmount,
      socialSecurityTaxRate,
      socialSecurityTaxAmount,
      medicareTaxRate,
      medicareTaxAmount,
      totalFederalTaxAmount,
    },
  } = props;

  return (
    <CustomizedAccordion id="federalResultDataContainer">
      <FinancialAccordionSummary
        title="Federal Taxes"
        amount={totalFederalTaxAmount}
        ariaControls="federalTaxPanel"
      />
      <CustomizedAccordionDetails>
        <DataListItem
          title="Federal Income Tax Rate"
          value={federalIncomeTaxRate}
          type={DataItemType.Percentage}
          isSublist
        />
        <DataListItem
          title="Federal Income Tax Amount"
          value={federalIncomeTaxAmount}
          type={DataItemType.DollarAmount}
          isSublist
        />
        <DataListItem
          title="Medicare Tax Rate"
          value={medicareTaxRate}
          type={DataItemType.Percentage}
          isSublist
        />
        <DataListItem
          title="Medicare Tax Amount"
          value={medicareTaxAmount}
          type={DataItemType.DollarAmount}
          isSublist
        />
        <DataListItem
          title="Social Security Tax Rate"
          value={socialSecurityTaxRate}
          type={DataItemType.Percentage}
          isSublist
        />
        <DataListItem
          title="Social Security Tax Amount"
          value={socialSecurityTaxAmount}
          type={DataItemType.DollarAmount}
          isSublist
        />
        <DataListItem
          title="Total Federal Tax Amount"
          value={totalFederalTaxAmount}
          type={DataItemType.DollarAmount}
          isSublist
        />
      </CustomizedAccordionDetails>
    </CustomizedAccordion>
  );
};

export default FederalResultData;
