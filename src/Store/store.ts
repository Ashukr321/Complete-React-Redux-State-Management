import {  configureStore } from "@reduxjs/toolkit";
import counterReducer  from './Features/Counter'

export interface  RootState{
  value: number;
  status: boolean;
}


const store = configureStore({
  reducer: {
    counter:counterReducer,
  }
})
export default store