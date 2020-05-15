import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';


export default class App extends React.Component {

  state = {};
  handleChange = text => {
    this.setState({ text });
  }

  handlePress = () => {
    alert(`Tu Nombre es: ${this.state.text}`)
  }


  render() {

    const { text } = this.state

    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Ingrese su nombre"
          onChangeText={this.handleChange}
        />
        <TouchableOpacity onPress={this.handlePress} style={styles.button}> 
          <Text>Aceptar</Text>
          </TouchableOpacity>
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
  button:{
    backgroundColor:'cyan',
    height:50,
    padding:15
  }
});
