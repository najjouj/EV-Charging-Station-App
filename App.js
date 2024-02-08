import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ClerkProvider,SignedIn, SignedOut } from "@clerk/clerk-expo";
import Entypo from '@expo/vector-icons/Entypo';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';
import LoginScreen from './App/Screens/LoginScreen/LoginScreen';
import Constants from "expo-constants"
import SignInWithOAuth from "./components/SignInWithOAuth";
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import * as Location from 'expo-location';





const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};




export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-SemiBold.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
     
    <ClerkProvider 
    tokenCache={tokenCache}
    publishableKey={'pk_test_a25vd2luZy1nYW5uZXQtMzYuY2xlcmsuYWNjb3VudHMuZGV2JA'}  >
      
    
    <SignedIn>
     
         <TabNavigation/>
        </SignedIn>
       
        <SignedOut>
          <LoginScreen/>
        </SignedOut>
      
      {/* <StatusBar style='auto'/> */}
   
    </ClerkProvider>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({ 
  container:{

  }
 });
 
