import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export default class SearchBar extends Component {
  render() {
    return (
      <View>
          <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyB9ctiAb-J9CZil_ZlpAg3ZOXpxwudHlNW',
        language: 'en',
      }}
    />
      </View>
    )
  }
}

const styles = StyleSheet.create({})
