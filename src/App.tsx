import React, { FC } from 'react';
import './App.css';

import { useDispatch } from 'react-redux';
import { InputFormState, TaxBreakdown } from './types';
import { AppDispatch } from './app/store';
import { useAppSelector } from './app/hooks';

import { generateTaxReport } from './lib/taxCalculator';
import {
  toggleContent,
  updateResultData,
} from './components/resultData/resultDataSlice';

import InputForm from './components/inputForm/inputForm';
import ResultData from './components/resultData/resultData';

const App: FC = () => {
  const resultData = useAppSelector((state) => state.resultData);
  const dispatch: AppDispatch = useDispatch();

  const { showContent: showResultContent } = resultData;

  const submitInput = (data: InputFormState): void => {
    const { grossAnnualIncome, selectedState } = data;
    const annualIncome: number = parseInt(grossAnnualIncome, 10);
    const result: TaxBreakdown = generateTaxReport(selectedState, annualIncome);

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
