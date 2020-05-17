import React, { useReducer } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const initialState = {
  cont: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'incrementar': {
      return { cont: state.cont + 1 }
    }
    case 'decrementar': {
      return { cont: state.cont - 1 }
    }
    default: {
      return state
    }
  }
}

export default function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <View style={styles.container}>
      <Text style={styles.operation} onPress={() => dispatch({ type: 'incrementar' })}>+</Text>
      <Text style={styles.text}>{state.cont}</Text>
      <Text style={styles.operation} onPress={() => dispatch({ type: 'decrementar' })}>-</Text>
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
  operation:{
    fontSize:30
  }
})