import { configureStore } from '@reduxjs/toolkit'
//import rootReducer from './reducer'
import userSlice from './reducer/userSlice'
import loginReducer from './reducer/loginReducer'
import userReducer from './reducer/userReducer'

export const store = configureStore({
  reducer: {
    user: userSlice,
    //login: loginReducer,
    users: userReducer
    //rootReducer
  },
 
})