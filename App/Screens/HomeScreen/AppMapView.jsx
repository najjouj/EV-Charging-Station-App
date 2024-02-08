import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewStyle from './../../Utils/MapViewStyle.json'
export default class AppMapView extends Component {
  render() {
    return (
      <View>
       <MapView style={styles.map}
       provider={PROVIDER_GOOGLE}
       customMapStyle={MapViewStyle}
       />
      </View>
    )
  }
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
