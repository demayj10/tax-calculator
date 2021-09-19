import { combineReducers, configureStore } from '@reduxjs/toolkit';
import inputFormReducer from '../components/inputForm/inputFormSlice';
import resultDataReducer from '../components/resultData/resultDataSlice';

export const rootReducer = combineReducers({
  inputFormReducer,
  resultDataReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
export type Reducer = typeof rootReducer;
export type RootState = ReturnType<Reducer>
// Inferred type: {
//    inputForm: InputFormState
//    resultData: ResultDataState
// }
export type Store = typeof store;

export type AppDispatch = typeof store.dispatch;

export default store;
