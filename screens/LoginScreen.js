import { useNavigation } from '@react-navigation/native'
import React, {useState} from 'react'
import { View, StyleSheet, Text, Alert, Image, TextInput, TouchableOpacity } from 'react-native'
import { colorPalletes } from '../theme'
import { StatusBar } from 'expo-status-bar'
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';
import { loginUser, fetchUserDetails } from '../redux/crudActions/loginAction';
import axios from 'axios';
import { APIBaseUrl } from '../Api/Apis'

export default function LoginScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async () => {
        console.log(email, password)
        const user = {
            email: email,
            password: password
        }
        const response = await axios.post(`${APIBaseUrl}/login`, user);
        if(response.status !== 200){
            Alert.alert("Error", "Login Failed")
        }
        //console.log(user);
        //console.log("Login Res",response);
        navigation.navigate("Home", {email});
        alert("success");
    };
    const handleNotAvailable =()=>{
        Alert.alert('Warning!!!', 'Not yet available');
      }

 return (
    <View className="bg-white h-full w-full">
        <StatusBar style="light" />
        <Image className="h-full w-full absolute" source={require('../assets/login1.png')} />

        {/* lights */}
        {/* <View className="flex-row justify-around w-full absolute">
            <Animated.Image 
                entering={FadeInUp.delay(200).duration(1000).springify()} 
                source={require('../assets/images/light.png')} 
                className="h-[225] w-[90]" 
            />
            <Animated.Image 
                entering={FadeInUp.delay(400).duration(1000).springify()} 
                source={require('../assets/images/light.png')} 
                className="h-[160] w-[65] opacity-75" 
            />
        </View> */}

       
        <View className="h-full w-full flex justify-around pt-40 pb-10">
            
            {/* title */}
            <View className="flex items-center">
                <Animated.Text 
                    entering={FadeInUp.duration(1000).springify()} 
                    className=" text-sky-500 font-bold tracking-wider text-5xl">
                        Login
                </Animated.Text>
            </View>

            {/* form */}
            <View className="flex items-center mx-5 space-y-4">
                <Animated.View 
                    entering={FadeInDown.duration(1000).springify()} 
                    className="bg-black/5 p-5 rounded-2xl w-full">

                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={'gray'}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </Animated.View>
                <Animated.View 
                    entering={FadeInDown.delay(200).duration(1000).springify()} 
                    className="bg-black/5 p-5 rounded-2xl w-full mb-3">

                    <TextInput
                        placeholder="Password"
                        placeholderTextColor={'gray'}
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </Animated.View>

                <Animated.View 
                    className="w-full" 
                    entering={FadeInDown.delay(400).duration(1000).springify()}>

                    <TouchableOpacity onPress={handleLogin} className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
                        <Text className="text-xl font-bold text-white text-center">Login</Text>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(500).duration(1000).springify()} className="flex-row justify-center space-x-12">
                    <TouchableOpacity onPress={handleNotAvailable} className="p-2 bg-gray-100 rounded-2xl">
                    <Image source={require('../assets/google.png')} className="w-10 h-10" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleNotAvailable}  className="p-2 bg-gray-100 rounded-2xl">
                    <Image source={require('../assets/facebook.png')} className="w-10 h-10" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleNotAvailable}  className="p-2 bg-gray-100 rounded-2xl">
                    <Image source={require('../assets/X1.jpg')} className="w-10 h-10" />
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View 
                    entering={FadeInDown.delay(600).duration(1000).springify()} 
                    className="flex-row justify-center">

                    <Text>Don't have an account yet? </Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('Create')}>
                        <Text className="text-sky-600">SignUp</Text>
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

