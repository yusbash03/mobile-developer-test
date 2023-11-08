import { useNavigation } from '@react-navigation/native'
import React, {useState}  from 'react'
import { View, Text, TouchableOpacity, Alert, Image, StyleSheet, TextInput } from 'react-native'
import { colorPalletes } from '../theme'
import { StatusBar } from 'expo-status-bar'
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';
import { useDispatch } from 'react-redux'
import { ADDUSER } from '../redux/crudActions';
import axios from 'axios'
import { APIBaseUrl } from '../Api/Apis'
import { connect } from 'react-redux'

 export default function CreateUserScreen() {
    const navigation = useNavigation();
        const [name, setName] = useState('');
        const [job, setJob] = useState('');
        const dispatch = useDispatch();
    
        const handleAddUser = async () => {
            const user = {
                name: name,
                job: job
            }
            const response = await axios.post(`${APIBaseUrl}/users`, user);
            if(response.status !== 201){
                Alert.alert("Error", "Add User Failed")
            }
            //console.log(user);
            console.log("Res",response.data);
            dispatch(ADDUSER(user));
            alert("success");
            setName('');
            setJob('');
        };
    const handleNotAvailable =()=>{
        Alert.alert('Warning!!!', 'Not yet available');
      }
 return (
    <View className="bg-white h-full w-full">
      <StatusBar style="light" />
      <Image className="h-full w-full absolute" source={require('../assets/login1.png')} />

      
      <View  className="h-full w-full flex justify-around pt-48">
        
        {/* title */}
        <View className="flex items-center">
            <Animated.Text 
                entering={FadeInUp.duration(1000).springify()} 
                className=" text-sky-500 font-bold tracking-wider text-5xl">
                    Add User
            </Animated.Text>
        </View>

        {/* form */}
        <View className="flex items-center mx-5 space-y-4 mb-20">
            <Animated.View 
                entering={FadeInDown.duration(1000).springify()} 
                className="bg-black/5 p-5 rounded-2xl w-full">
                <TextInput
                    placeholder="name"
                    placeholderTextColor={'gray'}
                    value={name}
                    onChangeText={(text)=> setName(text)}
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
                <TouchableOpacity onPress={handleAddUser} className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
                    <Text className="text-xl font-bold text-white text-center">Sumbit</Text>
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

// const mapStateToProps = (state) => {
//     console.log(state);
//     return{
//         users: state.userReducer.users, // Get users from the Redux store
//     }
    
//   };
  
//  export default connect(mapStateToProps)(CreateUserScreen);