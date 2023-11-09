import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import CreateUserScreen from '../screens/CreateUserScreen';
import EditUserScreen from '../screens/EditUserScreen';
import ListScreen from '../screens/ListScreen';
import UsersListScreen from '../screens/UsersListScreen';


const Stack = createNativeStackNavigator();

export default function Appnavigation() {
 return (
    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
      <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
      <Stack.Screen name="Create" options={{headerShown: false}} component={CreateUserScreen} />
      <Stack.Screen name="Edit" options={{headerShown: false}} component={EditUserScreen} />
      <Stack.Screen name="Users" options={{headerShown: false}} component={ListScreen} />
      <Stack.Screen name="UsersList" options={{headerShown: false}} component={UsersListScreen} />
    </Stack.Navigator>
      </Provider>
  
  </NavigationContainer>
)
}

