import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Text, Button } from "react-native-elements";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { updateData } from "../redux/actions";
import { Color } from "../utils/config";
import { commonStyles } from "../styles/common-styles.js";

class ScoreScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Score",
      headerTintColor: Color.primary
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Intro Screen</Text>
        <Button onPress={this.navToQuizScreen}  buttonStyle={commonStyles.button}
          title="PLAY AGAIN?"         
        />        
      </View>
    );
  }
   
  navToQuizScreen = () => {
    this.props.updateData({questionCtr: 0 })
    this.props.navigation.navigate("Quiz");
  }
}

// --------- Styling ----------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 5,
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 10
  },

});

// ---------- Setup Redux -------------
const mapStateToProps = state => ({
  data: state.data,
 // categories: state.categories,
 // state: state.state
});

export default connect(mapStateToProps, {
  updateData,
  //updateTimer
})(ScoreScreen);
