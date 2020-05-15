import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export default class App extends React.Component {

  render() {
    return (
      <View>
        <ActivityIndicator
          size="large"
          color="#0000ff"
        />
        <ActivityIndicator
          size="small"
          color="#0000ff"
        />
        <ActivityIndicator
          size="large"
          color="#00ffff"
        />
        <ActivityIndicator
          size="large"
          color="#ff00ff"
        />
      </View>
    )
  }
}