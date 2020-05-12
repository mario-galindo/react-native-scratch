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
        <Text style={styles.text2}>Mario</Text>
        <Text style={styles.text3}>Mario</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    height:100,
    width:100,
    color: 'red',
    backgroundColor:'brown'
  },
  text2: {
    height:100,
    width:100,
    color: 'red',
    backgroundColor:'yellow'
  },
  text3: {
    height:100,
    width:100,
    color: 'red',
    backgroundColor:'orange'
  },
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
});
