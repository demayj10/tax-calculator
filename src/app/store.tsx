import { configureStore } from '@reduxjs/toolkit';
import inputFormReducer from '../components/inputForm/inputFormSlice';
import resultDataReducer from '../components/resultData/resultDataSlice';

const store = configureStore({
  reducer: {
    inputForm: inputFormReducer,
    resultData: resultDataReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {
//    inputForm: InputFormState
//    resultData: ResultDataState
// }
export type AppDispatch = typeof store.dispatch;

export default store;
