import {actionConstants as types} from '../actionsTypes'

export const ADDUSER =(payload)=>{
    const action ={
        type: types.ADD_USER,
        payload
    }
    return action;
}
export const UPDATEUSER =(payload)=>{
    const action ={
        type: types.UPDATE_USER,
        payload
    }
    return action;
}

export const FETCHUSERLIST = (users) => {
    return {
      type: types.FETCH_USER,
      payload: users,
    };
  };