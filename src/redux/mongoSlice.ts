import {createSlice} from '@reduxjs/toolkit';

//created initial state
const initialState={
    userInfo:null,
};
//declare the Slices
export const mongoSlice = createSlice({
    name:"mongo",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.userInfo = action.payload;//updates form payload
        },
        removeUser:(state)=> {
            state.userInfo = null;
        },
    },
});
//Export Slices and reducers
export const {addUser,removeUser} = mongoSlice.actions;
export default mongoSlice.reducer;