/*jshint esversion: 6 */
import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { myStyle } from "../../styles/myStyle";
import { styles } from "./SettingScreen.styles";

class SettingScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "Settings",
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons
        name={`ios-settings${focused ? "" : "-outline"}`}
        size={25}
        color={myStyle.primaryColor}
      />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> To be implemented.</Text>
      </View>
    );
  }
}

// ------- PropTypes ---------
SettingScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

// -------- Setup Redux --------
const mapStateToProps = state => ({});
export default connect(
  mapStateToProps,
  {}
)(SettingScreen);
