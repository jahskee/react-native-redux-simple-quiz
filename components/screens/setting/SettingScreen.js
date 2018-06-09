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

import Config, { Color } from "../../utils/config";

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

  render() {
    return (
      <View style={styles.container}>
        <Text> To be implemented.</Text>          
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
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",   
  },  
});

// -------- Setup Redux --------
const mapStateToProps = state => ({
});
export default connect(mapStateToProps, {
})(SettingScreen);