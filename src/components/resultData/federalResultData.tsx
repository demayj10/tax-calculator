import React, { FC } from 'react';
import DataListItem from '../dataList/dataListItem';
import { DataItemType } from '../../lib/data/dataItemType';

import './federalResultData.css';

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
    <div id="federalResultDataContainer">
      <DataListItem
        title="Federal Income Tax Rate"
        value={federalIncomeTaxRate}
        type={DataItemType.Percentage}
      />
      <DataListItem
        title="Federal Income Tax Amount"
        value={federalIncomeTaxAmount}
        type={DataItemType.DollarAmount}
      />
      <DataListItem
        title="Medicare Security Tax Rate"
        value={medicareTaxRate}
        type={DataItemType.Percentage}
      />
      <DataListItem
        title="Medicare Security Tax Amount"
        value={medicareTaxAmount}
        type={DataItemType.DollarAmount}
      />
      <DataListItem
        title="Social Security Tax Rate"
        value={socialSecurityTaxRate}
        type={DataItemType.Percentage}
      />
      <DataListItem
        title="Social Security Tax Amount"
        value={socialSecurityTaxAmount}
        type={DataItemType.DollarAmount}
      />
      <DataListItem
        title="Total Federal Tax Amount"
        value={totalFederalTaxAmount}
        type={DataItemType.DollarAmount}
      />
    </div>
  );
};

export default FederalResultData;
