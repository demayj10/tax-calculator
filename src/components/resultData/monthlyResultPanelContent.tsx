import React, { FC } from 'react';
import DataListItem from '../dataList/dataListItem';
import { DataItemType } from '../../lib/data/dataItemType';
import FederalResultData from './federalResultData';
import StateResultData from './stateResultData';
import { FederalTaxBreakdown, ResultPanelContentProps } from '../../types';

const MonthlyResultPanelContent: FC<ResultPanelContentProps> = (props: ResultPanelContentProps) => {
  const {
    federal: {
      federalIncomeTaxRate,
      federalIncomeTaxAmount,
      socialSecurityTaxRate,
      socialSecurityTaxAmount,
      medicareTaxRate,
      medicareTaxAmount,
      totalFederalTaxAmount,
    },
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

  const federal: FederalTaxBreakdown = {
    federalIncomeTaxRate,
    federalIncomeTaxAmount: federalIncomeTaxAmount / 12,
    socialSecurityTaxRate,
    socialSecurityTaxAmount: socialSecurityTaxAmount / 12,
    medicareTaxRate,
    medicareTaxAmount: medicareTaxAmount / 12,
    totalFederalTaxAmount: totalFederalTaxAmount / 12,
  };

  return (
    <div className="panel-content">
      <DataListItem
        title="Gross Monthly Income"
        value={grossAnnualIncome / 12}
        type={DataItemType.DollarAmount}
        isSublist={false}
      />
      <FederalResultData federalTaxData={federal} />
      <StateResultData
        stateIncomeTaxRate={stateIncomeTaxRate}
        stateIncomeTaxAmount={stateIncomeTaxAmount / 12}
        totalStateTaxAmount={totalStateTaxAmount / 12}
        hasStateIncomeTax={hasStateIncomeTax}
      />
      <DataListItem
        title="Total Taxes"
        value={totalTaxes / 12}
        type={DataItemType.DollarAmount}
        isSublist={false}
      />
      <DataListItem
        title="Net Monthly Income"
        value={netAnnualIncome / 12}
        type={DataItemType.DollarAmount}
        isSublist={false}
      />
    </div>
  );
};

export default MonthlyResultPanelContent;
