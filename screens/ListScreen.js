import React, { useEffect, useState } from 'react'
import { View, StyleSheet, SafeAreaView, FlatList, Alert, Text } from 'react-native'
import axios from 'axios';
import UserListComp from '../components/UserListComp';
import { APIBaseUrl } from '../Api/Apis';
import { FETCHUSERLIST } from '../redux/crudActions';
import { connect } from 'react-redux';

 export default function ListScreen() {
    const [listOfUsers, setUsersList] = useState([]);

    const getUserList = async () => {
        try {
          const response = await axios.get(`${APIBaseUrl}/users?2`);
          if (response.status !== 200) {
            Alert.alert("Error", "No user found");
          } else {
            console.log(response.data.data)
            setUsersList(response.data.data);
          }
        } catch (error) {
          console.error("Error fetching user list:", error);
          Alert.alert("Error", "Failed to fetch user list");
        }
      };
    useEffect(()=>{
        getUserList();
        //FETCHUSERLIST(getUserList())
    }, );

 return (
 <SafeAreaView className='my-4 bg-white'>
    <View className='font-semibold text-sky-500'>
        <Text className='text-center text-2xl mt-5 font-bold text-sky-400'>List of Users</Text>
      
    </View>
   <View className='pb-15'>
   <FlatList
        data={listOfUsers}
        keyExtractor={list=>list.id.toString()}
        renderItem={({item}) => 
        <UserListComp name={`${item.first_name} ${item.last_name}`} avatar={item.avatar} id={item.id} email={item.email}/>
        }   
         />
   </View>
 </SafeAreaView>
)


}

// const mapStateToProps = (state) => {
//     console.log("MapState",state.rootReducer);
//     // return{
//     //     users: state.userReducer.users, // Get users from the Redux store
//     // }
    
//   };

//   const mapDispatchToProps = {
//     FETCHUSERLIST, // Bind action creator to props
//   };
  
//  export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);