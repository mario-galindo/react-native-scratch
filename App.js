import React from 'react';
import { View, Alert, Button } from 'react-native';

export default class App extends React.Component {

  handlePress = () => {
    Alert.alert(
      "Soy el titulo!",
      "Text que se incluye en la alerta",
      [
        { text: "Boton 1", onPress: () => Alert.alert("Botton 1 Pressed") },
        { text: "Boton 2", onPress: () => Alert.alert("Botton 2 Pressed") }
      ]
    )
  }

  render() {
    return (
      <View style={{
        justifyContent:"center",
        alignItems:"center",
        display:"flex",
        flex:1
      }}>
        <Button title="Pinchame" onPress={this.handlePress}></Button>
      </View>
    )
  }
}