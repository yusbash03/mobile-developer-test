import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux';

export default function HomeScreen() {
   const {params: {email}} = useRoute();   
          const fullName = email.split('@')[0];
          const splitParts = fullName.split('.');
          const capitalizeFullname = splitParts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
   const nav = useNavigation();

 return (
 <SafeAreaView className='flex-1 pt-5 space-x-2'>
   <View className='p-10 bg-white mx-3 my-3 rounded-md'>
      <Text className='font-semibold text-lg text-center'>Welcome {capitalizeFullname}</Text>
   </View>
   <View className='px-2 py-8 bg-white my-3 rounded-md'>
      <View style={{justifyContent:'space-between'}} className='flex-row'>
         <TouchableOpacity onPress={()=> nav.push('Create')} className='p-5 bg-sky-600 text-white rounded-xl'>
            <Text className='font-semibold text-white'>Add User</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>nav.navigate('UsersList')}  className='p-5 bg-teal-300 text-white rounded-xl'>
            <Text className='font-semibold text-white'>View List</Text>
         </TouchableOpacity>
         {/* <TouchableOpacity onPress={()=>nav.navigate('Users')}  className='p-5 bg-teal-300 text-white rounded-xl'>
            <Text className='font-semibold text-white'>View List</Text>
         </TouchableOpacity> */}
         <TouchableOpacity onPress={()=>nav.navigate('Login')}  className='p-5 bg-red-400 text-white rounded-xl'>
            <Text className='font-semibold text-white'>Logout</Text>
         </TouchableOpacity>
      </View>
   </View>
    
 </SafeAreaView>
)
}

const styles = StyleSheet.create({
 container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
   
 }
})