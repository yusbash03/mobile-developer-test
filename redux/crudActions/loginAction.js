import axios from 'axios';
import { APIBaseUrl } from '../../Api/Apis';
import { Alert } from 'react-native';

export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${APIBaseUrl}/login`, {
        email,
        password,
      });
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE' });
      console.log("Login Failed");
      Alert.alert("Error", "Login Failed")
    }
  };
};

export const fetchUserDetails = (userId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${APIBaseUrl}/users/${userId}`);
      dispatch({ type: 'FETCH_USER_DETAILS_SUCCESS', payload: response.data });
    } catch (error) {
      console.log("Error", error)
    }
  };
};