import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native'
import {PencilSquareIcon} from 'react-native-heroicons/solid'

export default function UserListComp({id, name, avatar, email}) {
  const navigation = useNavigation();
 return (
 <View className='py-4 space-x-2 px-3'>
     <TouchableOpacity className=' bg-white' >
        <View style={[styles.container]}>
            {avatar && <Image style={styles.img} source={{uri: avatar}}/>}
            <View style={styles.details}>
            <Text className='font-semibold'>{name}</Text>
            <Text className='text-[#6e6969]'>{email}</Text>
            </View>
            <TouchableOpacity>
            <PencilSquareIcon onPress={()=> navigation.navigate('Edit', {id})} color={'dodgerblue'} size={25} />
            </TouchableOpacity>
            
        </View>
    </TouchableOpacity>
 </View>
)
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
          flexDirection:"row",
          padding:15,
          backgroundColor:"white"
      },
    img:{
      width:80,
      height:80,
      borderRadius:40, //apply half of the widhth/height to get a perfect circle of item
      marginRight: 11,
      //marginVertical:10
    },
    details:{
      marginLeft:12,
      justifyContent:"center",
      flex:1
    }
  
})