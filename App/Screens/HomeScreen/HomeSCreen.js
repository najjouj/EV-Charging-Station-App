import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import AppMapView from './AppMapView'
import Header from './Header'
import SearchBar from './SearchBar'


export default class HomeSCreen extends Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
        <Header/>
        <SearchBar/>
        </View>

       <AppMapView/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header:{
    position:'absolute',
    zIndex:10,
    padding:10,
    width:'100%',
    paddingHorizontal:20,
    paddingVertical:40

  }
})

