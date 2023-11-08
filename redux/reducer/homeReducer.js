import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:{
     email:null,
    }
  } 


export const userSlice = createSlice({
  initialState,
  name:'user',
  reducers: {
   setEmail:(state, action)=>{
    state.user = action.payload;
   }
  },
})

export const { setEmail } = userSlice.actions;


export default userSlice.reducer