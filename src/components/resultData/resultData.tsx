import React, { BaseSyntheticEvent, FC } from 'react';
import './resultData.css';
import { Box, Tabs, Tab } from '@mui/material';
import AnnualResultPanelContent from './annualResultPanelContent';
import TabPanel from '../tabPanel';
import { useAppSelector } from '../../app/hooks';
import { selectResultData } from './resultDataSlice';
import MonthlyResultPanelContent from './monthlyResultPanelContent';

const ResultData: FC = () => {
  const resultData = useAppSelector(selectResultData);
  const {
    federal,
    state,
    grossAnnualIncome,
    totalTaxes,
    netAnnualIncome,
  } = resultData;

  const [value, setValue] = React.useState(0);

  // Consider breaking the inside State data from the 'hasStateIncomeTax'
  // value for easier handoff to the props of StateResultData

  const handleTabChange = (e: BaseSyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div id="resultContainer" data-testid="result-data">
      <h1>
        <u>Results</u>
      </h1>
      <Box>
        <Tabs value={value} onChange={handleTabChange} className="tab" data-testid="tab-menu">
          <Tab label="Annual" data-testid="annual-tab" />
          <Tab label="Monthly" data-testid="monthly-tab" />
        </Tabs>
      </Box>
      <div id="resultData">
        <TabPanel index={0} value={value}>
          <AnnualResultPanelContent
            federal={federal}
            state={state}
            grossAnnualIncome={grossAnnualIncome}
            totalTaxes={totalTaxes}
            netAnnualIncome={netAnnualIncome}
          />
        </TabPanel>
        <TabPanel index={1} value={value}>
          <MonthlyResultPanelContent
            federal={federal}
            state={state}
            grossAnnualIncome={grossAnnualIncome}
            totalTaxes={totalTaxes}
            netAnnualIncome={netAnnualIncome}
          />
        </TabPanel>
      </div>
    </div>
  );
};

export default ResultData;
