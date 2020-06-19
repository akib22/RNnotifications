import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

import RemotePushController from './src/services/RemotePushController'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Simple Push Notification sender app.</Text>
      <RemotePushController />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    marginTop: 20
  }
})

export default App
