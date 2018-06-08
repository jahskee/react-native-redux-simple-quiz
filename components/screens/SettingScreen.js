/*jshint esversion: 6 */
import React from "react";
import {
  Button,
  View, 
  StyleSheet,
  Text, 
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { updateSettings, updateState } from "../redux/actions";

import Config, { Color } from "../utils/config";

class SettingScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "Settings",
    tabBarIcon: ({ focused, tintColor }) =>
      <Ionicons
        name={`ios-settings${focused ? "" : "-outline"}`}
        size={25}
        color={Color.primary}
      />
  };

  componentDidMount() {
  
  }

  render() {
    return (
      <View style={styles.container}>
           Settings Screen
      </View>
    );
  }
}

// ------- PropTypes ---------
SettingScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

// ------- Styling ---------
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center"
  },  
});

// -------- Setup Redux --------
const mapStateToProps = state => ({
 // settings: state.settings,
  //state: state.state,
});
export default connect(mapStateToProps, {
 // updateSettings,
 //updateState,
})(SettingScreen);