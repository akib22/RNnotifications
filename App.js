import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View, Button, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createSwitchNavigator } from "react-navigation";
import { createAppContainer } from "react-navigation";
import RemotePushController from "./src/services/RemotePushController";
import NavigationService from './src/services/NavigationService';

const Stack = createStackNavigator();
const Home = ({ navigation }) => (
  <View>
    <Text>Home Page</Text>
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate("Notification", { name: "Jane" })}
    />
  </View>
);
const Notification = () => (
  <View>
    <Text>Notification Page</Text>
  </View>
);
const AppContainer = createAppContainer(createSwitchNavigator({Home, Notification}));


const App = () => {
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
});

export default App;
