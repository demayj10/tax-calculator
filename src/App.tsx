import React, { FC } from 'react';
import './App.css';

import { useDispatch } from 'react-redux';
import { TaxBreakdown } from './types';
import { AppDispatch } from './app/store';
import { useAppSelector } from './app/hooks';

import { generateTaxReport } from './lib/taxCalculator';
import {
  selectResultData,
  toggleContent,
  updateResultData,
} from './components/resultData/resultDataSlice';

import InputForm from './components/inputForm/inputForm';
import ResultData from './components/resultData/resultData';
import { InputFormState } from './components/inputForm/inputFormSlice';
import { calculateGrossAnnualIncome } from './lib/annualIncomeCalculator';

const App: FC = () => {
  const resultData = useAppSelector(selectResultData);
  const dispatch: AppDispatch = useDispatch();

  const { showContent: showResultContent } = resultData;

  const submitInput = (data: InputFormState): void => {
    const {
      grossAnnualIncome, selectedState, maritalStatus, hourly, isHourly,
    } = data;
    const annualIncome: number = (
      isHourly
        ? calculateGrossAnnualIncome(hourly)
        : parseInt(grossAnnualIncome, 10)
    );
    const result: TaxBreakdown = generateTaxReport(selectedState, annualIncome, maritalStatus);

    dispatch(updateResultData(result));
    dispatch(toggleContent(true));
  };

  return (
    <div className="App">
      <InputForm submitInput={submitInput} />
      <br />
      { showResultContent ? <ResultData /> : null }
    </div>
  );
};

export default App;
