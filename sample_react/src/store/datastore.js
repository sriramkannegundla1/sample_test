import {configureStore, createSlice} from "@reduxjs/toolkit";
const temp = [{views : 0}];
  
const slice = createSlice(
    {
        name : "viewcount",
        initialState : {temp},
        reducers : {
            count(state,action){
                console.log(state)
                state.temp = action.payload
            }
        }
    }
)
const store = configureStore ({
    reducer : slice.reducer
})

export default store
export const action = slice.actions