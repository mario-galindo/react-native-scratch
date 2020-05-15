import React from 'react';
import { View, Alert, Button, StyleSheet, Text } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    display: 'flex'
  }
})

export default class App extends React.Component {

  state = {
    location: {coords:{}},
    errorMessage: null
  }

  getLocation = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION)
    // Alert.alert("Permisos", status)
    if (status !== 'granted') {
      return this.setState({ errorMessage: 'Permisos no aceptados' })
    }

    const location = await Location.getCurrentPositionAsync();
    // console.log('location',location)
    this.setState({ location });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.location.coords.latitude} {this.state.location.coords.longitude}</Text>
        <Button onPress={this.getLocation} title="Request Location"></Button>
      </View>
    )
  }
}