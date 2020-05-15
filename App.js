import React from 'react';
import { View, Modal, Button, Alert, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cyan:{
    backgroundColor:'cyan'
  },
  gray:{
    backgroundColor:'gray'
  },
  margin:{
    margin:55
  }
})

export default class App extends React.Component {

  state = {
    visible: false
  }

  handlePress = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  render() {
    return (
      <View style={[styles.container,styles.cyan]}>
        <Modal animationType="slide" transparent={true} visible={this.state.visible}>
          <View style={[styles.container,styles.gray,styles.margin]}>
            <Button title="Cerrar Modal" onPress={this.handlePress} />
          </View>
        </Modal>
        <Button title="Open Modal" onPress={this.handlePress} />
      </View>
    )
  }
}