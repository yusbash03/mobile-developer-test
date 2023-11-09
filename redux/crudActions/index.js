import { createAsyncThunk } from '@reduxjs/toolkit';
import {actionConstants as types} from '../actionsTypes'
import { APIBaseUrl } from '../../Api/Apis';



  export const fetchUsers = createAsyncThunk('fetchUsers', async()=> {
    const response = await fetch(`${APIBaseUrl}/users?2`);
    const res = await response.json();
    return res;
})
  export const addUsers = createAsyncThunk('addUsers', async(user)=> {
    const response = await fetch(`${APIBaseUrl}/users`,
    {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
    const res = await response.json();
    //console.log(res);
    return res;
})
  export const updateUsers = createAsyncThunk('updateUsers', async(id, user)=> {
    const response = await fetch(`${APIBaseUrl}/users/${id}`,
    {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
    const res = await response.json();
    //console.log(res);
    return res;
})

