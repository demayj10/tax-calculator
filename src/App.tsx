import React, { useState } from 'react';
import './App.css';
import InputForm from "./components/inputForm";
import { InputFormState, TaxBreakdown } from "./types";
import { generateTaxReport } from "./lib/taxCalculator";
import ResultData from "./components/resultData";
import { initialAppState } from "./reducers/appReducer";

const App = () => {
  const [resultData, setResultData] = useState(initialAppState);

  const submitInput = (data: InputFormState): void => {
    const { grossAnnualIncome } = data;
    const annualIncome: number = parseInt(grossAnnualIncome);
    const result: TaxBreakdown = generateTaxReport(annualIncome);

    setResultData(result);
  }

  return (
    <div className="App">
      <InputForm submitInput={submitInput}/>
      <br/>
      {resultData.netAnnualIncome > 0 ?
          <ResultData data={resultData}/>
          :
          null
      }
    </div>
  );
}

export default App;
