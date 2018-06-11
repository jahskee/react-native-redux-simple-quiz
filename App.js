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

import { myStyle } from "./components/_styles/myStyle";

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

const MainTabs = createBottomTabNavigator(
  {
    HomeTab: MainStack,
    SettingTab: SettingScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'HomeTab') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
          
        } else if (routeName === 'Settings') {
          iconName = `ios-aperture${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#2a5089',
      inactiveTintColor: 'gray',
    },
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