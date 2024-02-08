import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeSCreen from '../Screens/HomeScreen/HomeSCreen';
import FavoriteScreen from '../Screens/FavoriteScreen/FavoriteScreen';
import ProfileSCreen from '../Screens/ProfileScreen/ProfileSCreen';
import { Ionicons,FontAwesome} from '@expo/vector-icons';
import Colors from '../Utils/Colors';


const Tab = createBottomTabNavigator();

export default function TabNavigation () {
  
    return (
     <Tab.Navigator screenOptions={{headerShown:false}} >
        <Tab.Screen name='home' component={HomeSCreen}  
        
        options={{
          tabBarLabel:'Search',
          tabBarActiveTintColor:Colors.PRIMARY,
          tabBarIcon:({color,size}) =>{
          return  <Ionicons name="search" size={size} color= {color} /> }
        }}/>
        
        
        <Tab.Screen name='favorire' component={FavoriteScreen}  
        
        options={{
          tabBarLabel:'Favorite',
          tabBarActiveTintColor:Colors.PRIMARY,
          tabBarIcon:({color,size}) =>{
          return  <Ionicons name="heart" size={size} color= {color} /> }
        }}/>
         <Tab.Screen name='profile' component={ProfileSCreen}  
        
        options={{
          tabBarLabel:'Profile',
          tabBarActiveTintColor:Colors.PRIMARY,
          tabBarIcon:({color,size}) =>{
          return  <FontAwesome name="user-circle" size={size} color= {color} /> }
        }}/>

     </Tab.Navigator>
    )
  
}

const styles = StyleSheet.create({})

// backgroundColor: '#3498db' 
// backgroundColor:'#f5b041'
// backgroundColor: '#76448a' 
