/*jshint esversion: 6 */
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from "react-navigation";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";
import { Provider } from "react-redux";
import store from "./components/redux/store/store";

import { myStyle } from "./components/_styles/myStyle";

import HomeScreen from "./components/screens/hometab/home/HomeScreen";
import QuizScreen from "./components/screens/hometab/quiz/QuizScreen";
import ScoreScreen from "./components/screens/hometab/score/ScoreScreen";

import SettingScreen from "./components/screens/settingtab/setting/SettingScreen";

import FontScreen from "./components/screens/fonttab/font/FontScreen";

global.log = console.log;

const HomeTab = createStackNavigator(
  {
    HomeScreen,
    QuizScreen,
    ScoreScreen,
    SettingScreen,
  },
  {
    initialRouteName: "HomeScreen",
    navigationOptions: {
      headerTintColor: myStyle.primaryColor,
      headerStyle: {
        backgroundColor: myStyle.topBarColor,       
      }
    },    
  }
);

const SettingTab = createStackNavigator(
  {  
    SettingScreen,
  },
  {
    initialRouteName: "SettingScreen",
    navigationOptions: {
      headerTintColor: myStyle.primaryColor,
      headerStyle: {
        backgroundColor: myStyle.topBarColor,       
      }
    },    
  }
);


const FontTab = createStackNavigator(
  {  
    FontScreen,
  },
  {
    initialRouteName: "FontScreen",
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
    Home: HomeTab,
    Settings: SettingTab,
    Fonts: FontTab,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;          
        } else if (routeName === 'Settings') {
          iconName = `ios-construct${focused ? '' : '-outline'}`;
        } else if (routeName === 'Fonts') {
          iconName = `ios-american-football${focused ? '' : '-outline'}`;
        } 
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