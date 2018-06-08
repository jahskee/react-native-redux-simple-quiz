import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import { Header, Text, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { updateState, updateTimer } from "../redux/actions";
import { Color } from "../utils/config";

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Home",
      //headerTintColor: Color.primary,
      headerStyle: {
        // backgroundColor: '#f4511e',
      },
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title} h4>
          Welcome to the {"\n"}
          Trivia Challenge!
        </Text>

        <Text style={styles.title} h4>
          You will be presented {"\n"}
          with 10 True or False {"\n"}
          questions.
        </Text>

        <Text style={styles.title} h4>
          Can you score 100%?
        </Text>

        <Button
          icon={<Icon name="arrow-right" size={15} color="white" />}
          title="BEGIN"
          buttonStyle={{
            backgroundColor: "rgba(92, 99,216, 1)",
            width: 300,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5
          }}
        />
      </View>
    );
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
  title: {}
});

// ---------- Setup Redux -------------
const mapStateToProps = state => ({
  // categories: state.categories,
  // state: state.state
});

export default connect(
  mapStateToProps,
  {
    //updateState,
    //updateTimer
  }
)(HomeScreen);
