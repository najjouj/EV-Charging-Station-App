import React, { Component } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'
import { useOAuth, useUser } from "@clerk/clerk-expo";
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';

export default function Header () {
  
  
    const  {user}=useUser();
    return (
      <View style={styles.container}>
        <Image source={{uri:user?.imageUrl} } style={{width:45,height:45,borderRadius:99}}/>
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:5}}>
        <Text style={{
            fontWeight:'bold',
            fontFamily:'outfit-bold',
            fontSize:35
        }}>EV</Text>
        <Image source={require('./../../../assets/images/logo.png') } style={styles.logoimage}/>
        <Text style={{
            fontFamily:'outfit-bold',
            fontWeight:'bold',
            fontSize:35
        }}>STATION</Text>
        </View>
        <FontAwesome name="filter" size={26} color="black" />
       
      </View>
    )
  
}

const styles = StyleSheet.create({
    logoimage:{
        width:25,
        height:25,
        objectFit:'cover'
    },
    container:{
      
        display:'flex',
        flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       padding:10

    }
})
