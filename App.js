import React from 'react';
import { View, Modal, Button, Alert, StyleSheet, AsyncStorage } from 'react-native';


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cyan: {
    backgroundColor: 'cyan'
  },
  gray: {
    backgroundColor: 'gray'
  },
  margin: {
    margin: 55
  }
})

export default class App extends React.Component {

  state = {
    visible: false
  }

  constructor(props){
    super(props)
    this.traeDato()
  }

  traeDato = async () => {
    const dato = await AsyncStorage.getItem('dato')
    Alert.alert('Dato!',dato)
  }

  handlePress = async () => {
    await AsyncStorage.setItem('dato','Este es mi dato')
  }

  render() {
    return (
      <View style={[styles.container, styles.cyan]}>
        <Button title="Set Value" onPress={this.handlePress} />
      </View>
    )
  }
}