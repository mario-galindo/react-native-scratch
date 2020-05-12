import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


class Texto extends React.Component{
  
}

export default class App extends React.Component {
  render() {
    console.log('Hola Mundo!!')
    return (
      <View style={styles.container}>
        <Text>Hola Mundo!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
