import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIBaseUrl } from "../../Api/Apis";
import { addUser, addUsers, fetchUsers, updateUser, updateUsers } from "../crudActions";


const initialState = {
    data:null,
    isLoading:null,
    isError:null
  }

export const userSlice = createSlice({
    name:'users',
    initialState,
   
    extraReducers: builder=> {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        })

        builder.addCase(addUsers.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(addUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            //state.data = [...state.data, action.payload];
            console.log("success", state, action.payload);
        })
        builder.addCase(addUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            console.log("failed");
        })

        builder.addCase(updateUsers.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(updateUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            //state.data = [...state.data, action.payload];
            console.log("success", action.payload);
        })
        builder.addCase(updateUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            console.log("failed");
        })

       
    }
  })

  export default userSlice.reducer