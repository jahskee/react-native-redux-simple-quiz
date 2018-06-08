import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


import { Provider } from "react-redux";

import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./components/screens/HomeScreen";
import QuizScreen from "./components/screens/QuizScreen";
import ScoreScreen from "./components/screens/ScoreScreen";
import SettingScreen from "./components/screens/SettingScreen";


import Config, { Color } from "./components/utils/config";
import store from "./components/redux/store";

global.log = console.log;

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    Quiz: QuizScreen,
    Score: ScoreScreen,
    Setting: SettingScreen
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerTintColor: Color.primary,
      headerStyle: {
        backgroundColor: "#fff"
      }
    },    
  }
);

MainStack.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) =>
    <Ionicons
      name={`ios-home${focused ? "" : "-outline"}`}
      size={25}
      color={`${focused ? Color.primary : "red"}`}
    />
};
const MainTabs = createMaterialBottomTabNavigator(
  {
    Home: MainStack,
    Setting: SettingScreen
  },
  {
    barStyle: { backgroundColor: 'lightblue' },
  }
);
/*
const MainTabs = createBottomTabNavigator(
  {
    Home: MainStack,
    Setting: SettingScreen
  },
  {
    tabBarOptions: {
      activeTintColor: Color.primary
    }
  }
);*/

const AppNavigator = createSwitchNavigator({
  Main: MainTabs
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}