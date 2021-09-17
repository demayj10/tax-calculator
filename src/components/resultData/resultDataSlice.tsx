import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { TaxBreakdown } from '../../types';

interface ResultDataState extends TaxBreakdown {
    showContent: boolean
}

const initialState: ResultDataState = {
  federal: {
    federalIncomeTaxRate: 0,
    federalIncomeTaxAmount: 0,
    socialSecurityTaxRate: 0,
    socialSecurityTaxAmount: 0,
    medicareTaxRate: 0,
    medicareTaxAmount: 0,
    totalFederalTaxAmount: 0,
  },
  state: {
    stateIncomeTaxRate: 0,
    stateIncomeTaxAmount: 0,
    totalStateTaxAmount: 0,
    hasStateIncomeTax: true,
  },
  grossAnnualIncome: 0,
  totalTaxes: 0,
  netAnnualIncome: 0,
  showContent: false,
};

export const resultDataSlice: Slice = createSlice({
  name: 'resultData',
  initialState,
  reducers: {
    updateResultData: (state: ResultDataState,
      action: PayloadAction<ResultDataState>) => action.payload,
    toggleContent: (state: ResultDataState,
      action: PayloadAction<boolean>) => ({ ...state, showContent: action.payload }),
  },
});

export const { updateResultData, toggleContent } = resultDataSlice.actions;
export const selectResultData = (state: RootState): ResultDataState => state.resultData;

export default resultDataSlice.reducer;
