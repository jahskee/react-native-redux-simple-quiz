import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { updateState, updateTimer } from "../redux/actions";
import { Color } from "../utils/config";

class ResultScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Home Screen",
      headerTintColor: Color.primary
    };
  };
 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Intro Screen</Text>
        
      </View>
    );
  }
}




// --------- Styling ----------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 5,
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 10
  },
 
});

// ---------- Setup Redux -------------
const mapStateToProps = state => ({
 // categories: state.categories,
 // state: state.state
});

export default connect(mapStateToProps, {
  //updateState,
  //updateTimer
})(ResultScreen);
