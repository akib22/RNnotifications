import React, { useEffect } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View, Button, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createSwitchNavigator } from "react-navigation";
import { createAppContainer } from "react-navigation";
import PushNotification from "react-native-push-notification";
import RemotePushController from "./src/services/RemotePushController";
import NavigationService from './src/services/NavigationService';

const Stack = createStackNavigator();
const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.bold}>Home Page</Text>
  </View>
);
const Notification = () => (
  <View style={styles.container}>
    <Text style={styles.bold}>Notification Page</Text>
  </View>
);
const AppContainer = createAppContainer(createSwitchNavigator({Home, Notification}));


const App = () => {
  useEffect(() => {
    PushNotification.popInitialNotification(notification => {
      if (notification) {
        NavigationService.navigate("Notification", { notificationData: {} });
      }
    })
  });

  return (
    <NavigationContainer>
      <AppContainer
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
      <RemotePushController />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
  bold: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
