import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { FieldUpdatePayload } from '../../types';
import { RootState } from '../../app/store';

interface InputFormState {
    grossAnnualIncome: string,
    maritalStatus: string,
    selectedState: string
}

const initialState: InputFormState = {
  grossAnnualIncome: '',
  maritalStatus: '',
  selectedState: '',
};

export const inputFormSlice: Slice = createSlice({
  name: 'inputForm',
  initialState,
  reducers: {
    handleTextChange: (
      state: InputFormState,
      action: PayloadAction<FieldUpdatePayload>,
    ) => {
      const { field, value } = action.payload;
      return { ...state, [field]: value };
    },
    resetInput: () => initialState,
  },
});

export const { handleTextChange, resetInput } = inputFormSlice.actions;

export const selectInputForm = (state: RootState): InputFormState => state.inputFormReducer;

export default inputFormSlice.reducer;
