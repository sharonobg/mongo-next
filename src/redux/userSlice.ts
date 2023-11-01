import {createSlice} from '@reduxjs/toolkit';
//reducer for mongo store for users
//created initial state
const initialState={
    userInfo:null,
};
//declare the Slices
export const userSlice = createSlice({
    name:"mongouser",
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
export const {addUser,removeUser} = userSlice.actions;
export default userSlice.reducer;