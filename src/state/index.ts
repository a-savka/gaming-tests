
import { configureStore } from "@reduxjs/toolkit";
import counterRReducer from './counter-r/counterRSlice';

const store = configureStore({
  reducer: {
    counter: counterRReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
