import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image, TouchableOpacity} from 'react-native'
import Colors from '../../Utils/Colors'
import { useWarmUpBrowser } from '../../../hooks/warmUpBrowser'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen () {
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  
    const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
     
          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
      }, []);

    return (
      <View >
       <View style={{
        display:'flex',justifyContent:'center',alignItems:'center',marginTop:50
      }}>
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
        <Image source={require('./../../../assets/images/evcharging.jpg') } style={styles.ebcharging}/>
        <View style={{
            padding:20
        }}>
            <Text style={styles.heading}>
                Your Ultimate Ev charging Station App
            </Text>
            <Text style={styles.desc}>
                Find Charging Ev Station near you, plan trip and so much more in just one click
            </Text>
        </View>
       </View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={{
                fontSize:17,
                fontFamily:'outfit',
                textAlign:'center',
                color:Colors.WHITE
            }}>
                Login With Google
            </Text>
        </TouchableOpacity>
      </View>
    )
  }


const styles = StyleSheet.create({
    logoimage:{
        width:25,
        height:25,
        objectFit:'cover'
    },
    ebcharging:{
        width:'100%',height:220,objectFit:'fill'
    },
    heading:{
        fontSize:25,
        fontFamily:'outfit-bold',
        marginTop:20,
        textAlign:'center'

    },
    desc:{
        fontSize:17,
        fontFamily:'outfit',
        marginTop:15,
        textAlign:'center',
        color:Colors.GRAY
    },
    button:{
        backgroundColor:Colors.PRIMARY,
        padding:16,
        display:'flex',
        borderRadius:99,
        marginTop:170,
        marginLeft:20,
        marginRight:20
    }
})
