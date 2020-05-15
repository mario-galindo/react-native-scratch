import React from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default class App extends React.Component {

  state = {}

  render() {
    return (
      <View>
        <Picker
          selectedValue={this.state.value || 'id_1'}
          style={{ height: 70, width: 150 }}
          onValueChange={(value, index) => {
            this.setState({ value })
          }}>
          <Picker.Item label="Chanchito Feliz" value="id_1" />
          <Picker.Item label="Fluffykins" value="id_2" />
        </Picker>
      </View>
    )
  }
}