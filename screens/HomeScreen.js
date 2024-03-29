import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import Header from '../components/home/Header'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header/>
        
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'black',
        
    },
})