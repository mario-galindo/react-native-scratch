import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default class App extends React.Component {

  state = {};
  handleChange = text => {
    this.setState({ text });
  }


  render() {

    const { text } = this.state

    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Ingrese su nombre"
          onChangeText={this.handleChange}
        />
        <Text>{text && `Mi nombre es: ${text}`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    height: 100,
    width: 100,
    color: 'red',
    backgroundColor: 'brown'
  },
  text2: {
    height: 100,
    width: 100,
    color: 'red',
    backgroundColor: 'yellow'
  },
  text3: {
    height: 100,
    width: 100,
    color: 'red',
    backgroundColor: 'orange'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
});
