import React, { Component, useContext } from 'react'
import { Text, StyleSheet, View ,Image} from 'react-native'
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import MapViewStyle from './../../Utils/MapViewStyle.json'
import { UserLocationContext } from '../../Context/UserLocationContext';
export default function AppMapView () {
    const {location,setLocation}=useContext(UserLocationContext);
 
    return location?.latitude&&(
      <View>
       <MapView style={styles.map}
       provider={PROVIDER_GOOGLE}
       customMapStyle={MapViewStyle}
       region={{
        latitude:location?.latitude,
        longitude:location?.longitude,
        latitudeDelta:0.0422,
        longitudeDelta:0.0421
       }}
       >
          <Marker
       
       coordinate={{
        latitude:location?.latitude,
        longitude:location?.longitude,
       }}
       >
       <Image style={{
        height:40,width:40,objectFit:'fill'
       }} source={require('./../../../assets/images/car-marker.png')}/>
       </Marker>
       </MapView>
     
      </View>
    )
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      map: {
        width: '100%',
        height: '100%',
      },
})
