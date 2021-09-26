import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { FieldUpdatePayload } from '../../types';
import { RootState } from '../../app/store';

export const enum IncomeInputType {
    Hourly = 'Hourly',
    Salary = 'Salary',
}

export interface InputFormState {
    grossAnnualIncome: string,
    maritalStatus: string,
    selectedState: string,
    hourly: HourlyIncomeState,
    isHourly: boolean,
}

export interface HourlyIncomeState {
    hourlyRate: string,
    averageHoursWorked: string,
    overtimeRate: string,
    averageOvertimeHoursWorked: string,
}

const initialState: InputFormState = {
  grossAnnualIncome: '',
  maritalStatus: '',
  selectedState: '',
  hourly: {
    hourlyRate: '',
    averageHoursWorked: '',
    overtimeRate: '',
    averageOvertimeHoursWorked: '',
  },
  isHourly: false,
};

export const inputFormSlice: Slice = createSlice({
  name: 'inputForm',
  initialState,
  reducers: {
    handleTextChange: (
      state: InputFormState,
      action: PayloadAction<FieldUpdatePayload>,
    ) => {
      const { field, value, type } = action.payload;
      switch (type) {
        case IncomeInputType.Hourly:
          return { ...state, hourly: { ...state.hourly, [field]: value } };
        default:
          return { ...state, [field]: value };
      }
    },
    handleRadioChange: (state: InputFormState, action: PayloadAction<FieldUpdatePayload>) => {
      const { value } = action.payload;
      return { ...state, isHourly: (value === IncomeInputType.Hourly) };
    },
    resetInput: (state: InputFormState) => {
      if (state.isHourly) {
        return { ...initialState, isHourly: state.isHourly };
      }
      return { ...initialState };
    },
  },
});

export const { handleTextChange, handleRadioChange, resetInput } = inputFormSlice.actions;

export const selectInputForm = (state: RootState): InputFormState => state.inputFormReducer;

export default inputFormSlice.reducer;
