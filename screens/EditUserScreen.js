import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Alert, Image, StyleSheet, TextInput } from 'react-native'
import { colorPalletes } from '../theme'
import { StatusBar } from 'expo-status-bar'
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';
import { UPDATEUSER, updateUsers } from '../redux/crudActions'
import axios from 'axios'
import { APIBaseUrl } from '../Api/Apis'
import { useDispatch } from 'react-redux'


export default function EditUserScreen() {
    const navigation = useNavigation();
    const {params: {id}} = useRoute();
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const dispatch = useDispatch();

    const handleUpdateUser = () => {
        console.log('click')
        dispatch(updateUsers(id, { name, job }));
        setName('');
        setJob('');
        // Reset input fields or navigate to another screen
      };
  
    // const handleUpdateUser = async () => {
    //     const user = {
    //         name: name,
    //         job: job
    //     }
    //     const response = await axios.put(`${APIBaseUrl}/users/${id}`, user);
    //     if(response.status !== 200){
    //         Alert.alert("Error", "Add User Failed")
    //     }
    //     //console.log(user);
    //     console.log("Res",response.data);
    //     dispatch(UPDATEUSER(user));
    //     navigation.navigate('Users');
    //     alert("success");
    // };
    const handleNotAvailable =()=>{
        Alert.alert('Warning!!!', 'Not yet available');
      }
 return (
    <View className="bg-white h-full w-full">
    <StatusBar style="light" />
    <Image className="h-full w-full absolute" source={require('../assets/login1.png')} />

    
    <View  className="h-full w-full flex justify-center pt-2">
      
      
      <View className="flex items-center">
          <Animated.Text 
              entering={FadeInUp.duration(1000).springify()} 
              className=" text-sky-500 font-bold tracking-wider mb-20 text-5xl">
                  Edit
          </Animated.Text>
      </View>

     
      <View className="flex items-center mx-5 justify-center space-y-4">
          <Animated.View 
              entering={FadeInDown.duration(1000).springify()} 
              className="bg-black/5 p-5 rounded-2xl w-full">
              <TextInput
                  placeholder="Name"
                  placeholderTextColor={'gray'}
                  value={name}
                  onChangeText={(text) => setName(text)}
              />
          </Animated.View>
          <Animated.View 
              entering={FadeInDown.delay(200).duration(1000).springify()} 
              className="bg-black/5 p-5 rounded-2xl w-full">
              <TextInput
                  placeholder="Job"
                  placeholderTextColor={'gray'}
                  value={job}
                  onChangeText={(text) => setJob(text)}
              />
          </Animated.View>

          <Animated.View className="w-full" entering={FadeInDown.delay(600).duration(1000).springify()}>
              <TouchableOpacity onPress={handleUpdateUser} className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
                  <Text className="text-xl font-bold text-white text-center">Update</Text>
              </TouchableOpacity>
          </Animated.View>

        
      </View>
    </View>
  </View>
)
}

const styles = StyleSheet.create({
 container:{}
})