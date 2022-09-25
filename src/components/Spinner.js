import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
// import spin from '../../assets/Eclipse-1s-200px.gif'

const Spinner = () => {
  return (
    <View style={{ backgroundColor: "#1d521a", flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Image source={require("../../assets/Eclipse-1s-200px.gif")}/>
    </View>
  )
}

export default Spinner

const styles = StyleSheet.create({})