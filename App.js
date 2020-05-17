import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    setUsers(data)
    setLoading(false)
  }

  useEffect(()=>{
    getUsers()
  },[])

  return (
    <View style={styles.container}>
      <Text 
        onPress={() => setCont(cont + 1)} 
        style={styles.text}>{loading ? 'Cargando...' : users[0].name}
      </Text>
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
  }
})