import { createSlice } from "@reduxjs/toolkit";


// interface use for creating the blue print for the  object template
interface CounterState{
  value:number;
  status:boolean;
}

const initialState: CounterState = {
  value: 0,
  status: false,
};



const counterSlice = createSlice({
  initialState,
  name:'counter',

  // create the reducer  functionality 
  reducers: {
    // state this is initial state 
    // state is the object
    increment(state){
      state.value +=1;
    },
    decrement(state){
      state.value -=1;
    }
  }

});

export const {increment,decrement} = counterSlice.actions;
export default counterSlice.reducer
