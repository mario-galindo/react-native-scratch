import React, { useState, useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default function App() {

  const [cont, setCont] = useState(0)

  const incrementar = useCallback(() => {
    setCont(cont + 1)
  }, [cont])

  const decrementar = useCallback(() => {
    setCont(cont - 1)
  }, [cont])

  return (
    <View style={styles.container}>
      <Text style={styles.operation} onPress={() => incrementar()}>+</Text>
      <Text style={styles.text}>{cont}</Text>
      <Text style={styles.operation} onPress={() => decrementar()}>-</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 24
  },
  operation: {
    fontSize: 30
  }
})