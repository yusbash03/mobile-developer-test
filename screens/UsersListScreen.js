import React, { useEffect, useState } from 'react'
import { View, StyleSheet, SafeAreaView, FlatList, Alert, Text } from 'react-native'
import axios from 'axios';
import UserListComp from '../components/UserListComp';
import { APIBaseUrl } from '../Api/Apis';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/crudActions';
//import { fetchUsers } from '../redux/reducer/userSlice';

export default function UsersListScreen() {
    const dispatch = useDispatch();
    const users = useSelector(state=>state);
    const userList = users.user;
    useEffect(()=>{
        dispatch(fetchUsers());
    }, [])
    //console.log(users.user);
    return (
        <SafeAreaView className='my-4 bg-white'>
           <View className='font-semibold text-sky-500'>
               <Text className='text-center text-2xl mt-5 font-bold text-sky-400'>List of Users</Text>
             
           </View>
          <View className='pb-15'>
          <FlatList
               data={userList?.data?.data}
               keyExtractor={list=>list.id.toString()}
               renderItem={({item}) => 
               <UserListComp name={`${item.first_name} ${item.last_name}`} avatar={item.avatar} id={item.id} email={item.email}/>
               }   
                />
          </View>
        </SafeAreaView>
       )
}

const styles = StyleSheet.create({
 container:{}
})