import {actionConstants as types} from '../actionsTypes'

const initialState = {
  users: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case types.FETCH_USER:
      return {
        ...state,
        users: action.payload,
      };
    case types.UPDATE_USER:
      const updatedUser = action.payload; // Assuming the API returns the updated user details
      const updatedUsers = state.users.map(user =>
        user.id === updatedUser.id ? updatedUser : user
      );
      return {
        ...state,
        users: updatedUsers
      };
    default:
      return state;
  }

  
};

export default userReducer;