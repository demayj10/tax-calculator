import React, { FC } from 'react';
import { styled } from '@mui/material/styles';
import { AccordionSummary, Typography } from '@mui/material';

import './financialAccordionSummary.css';

interface FinancialAccordionSummaryProps {
    title: string,
    amount: number;
    ariaControls: string
}

const FinancialAccordionSummary: FC<FinancialAccordionSummaryProps> = (
  props: FinancialAccordionSummaryProps,
) => {
  const { title, amount, ariaControls } = props;

  const CustomizedAccordionSummary = styled(AccordionSummary)`
    & .MuiAccordionSummary-content {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
  `;

  const formatterUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <CustomizedAccordionSummary
      aria-controls={ariaControls}
      className="accordion-summary"
    >
      <Typography fontWeight="bold" align="left" variant="h5">
        {title}
      </Typography>
      <Typography fontWeight="bold" align="right" variant="h5">
        {formatterUSD.format(amount)}
      </Typography>
    </CustomizedAccordionSummary>
  );
};

export default FinancialAccordionSummary;
