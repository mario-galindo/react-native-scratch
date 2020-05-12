import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


class Texto extends React.Component {

  state = {
    texto: 'Hola Mundo!'
  };

  handlePress = () => {
    this.setState({
      texto: 'Adios mundo cruel!'
    })
  }

  render() {

    const { texto } = this.state
    return <Text onPress={() => { this.handlePress() }}>{texto}</Text>
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Mario</Text>
        <Texto />
        <Texto />
        <Texto />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'red'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
