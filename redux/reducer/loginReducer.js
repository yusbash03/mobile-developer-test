

const initialState = {
    isLoggedIn: false,
    userId: null,
    userDetails: null,
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isLoggedIn: true,
          userId: action.payload.id,
        };
      case 'LOGIN_FAILURE':
        // Handle login failure if needed
        return {
          ...state,
          isLoggedIn: false,
        };
      case 'FETCH_USER_DETAILS_SUCCESS':
        return {
          ...state,
          userDetails: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default loginReducer;
  