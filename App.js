/*jshint esversion: 6 */
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
import HomeScreen from "./components/screens/home/HomeScreen";
import QuizScreen from "./components/screens/quiz/QuizScreen";
import ScoreScreen from "./components/screens/score/ScoreScreen";
import SettingScreen from "./components/screens/setting/SettingScreen";

import { myStyle } from "./components/styles/myStyle";

import store from "./components/redux/store/store";

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
      headerTintColor: myStyle.primaryColor,
      headerStyle: {
        backgroundColor: myStyle.topBarColor,       
      }
    },    
  }
);

MainStack.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) =>
    <Ionicons
      name={`ios-home${focused ? "" : "-outline"}`}
      size={25}
      color={`${focused ? myStyle.primaryColor : "red"}`}
    />
};
const MainTabs = createMaterialBottomTabNavigator(
  {
    Home: MainStack,
    Setting: SettingScreen
  },
  {
    barStyle: { backgroundColor: myStyle.bottomBarColor },
  }
);

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