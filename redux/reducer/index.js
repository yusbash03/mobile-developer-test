import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loginReducer from "./loginReducer";
import homeReducer from "./homeReducer";

const appReducer = combineReducers({
    userReducer, loginReducer, homeReducer
});

const rootReducer =(state, action)=>{
    return appReducer(state, action);
}

export default rootReducer;