import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import { Text, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { Color } from "../../utils/config";
import { commonStyles } from "../../styles/common-styles.js";

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Home",
      headerTintColor: Color.primary,
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  navToQuizScreen = () => {
    this.props.navigation.navigate("Quiz");
  }

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

        <Button onPress={this.navToQuizScreen}  buttonStyle={commonStyles.button}
          title="BEGIN"         
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
    paddingBottom: 150,
    paddingLeft: 10,   
    
  },
  title :{
    color: '#505050',
    textAlign: 'center',
  }
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
