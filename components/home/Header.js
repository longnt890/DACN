import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Image
            style={styles.logo}
            source={require('../../assets/logo.png')}
            />
        </TouchableOpacity>
      
        <View style={styles.iconContainer}>
            <MaterialIcons name="add-box" size={30} color="white" style={styles.icon}/>
            <Ionicons name="heart-circle-outline" size={30} color="white" style={styles.icon}/>
            <AntDesign name="message1" size={30} color="white" style={styles.icon}/>
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal: 20,
    },
    logo: {
        width: 150,
        height: 100,
        resizeMode:'stretch'
    },
    iconContainer: {
        flexDirection:'row',
        
    },
    icon: {
        marginLeft:5,
    },
})