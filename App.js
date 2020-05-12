import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


class Texto extends React.Component {
  render() {

    const { texto } = this.props

    return <Text>{texto}</Text>
  }
}

export default class App extends React.Component {
  render() {
    console.log('Hola Mundo!!')
    return (
      <View style={styles.container}>
        <Texto texto='Hola Mundo' />
        <Texto texto='Adios mundo cruel' />
        <Texto texto='Chanchito Feliz!' />
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
