import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text, Button } from "react-native-elements";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { updateData } from "../redux/actions";
import { Color } from "../utils/config";
import { escapeUnicode } from "../utils/utils";
import { commonStyles } from "../styles/common-styles.js";

class QuizScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Quiz",
      headerTintColor: Color.primary
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title} h4>
          {this.props.questions[this.props.data.questionCtr].category}
        </Text>

        <View
          style={{
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "black",
            padding: 20,
            margin: 20
          }}
        >
          <Text h4>
            {this.props.questions[
              this.props.data.questionCtr
            ].question.xescape()}
          </Text>
        </View>
        <View>
          <Text h4 style={{textAlign:'center', marginBottom: 30}}> {this.props.data.questionCtr + 1 + " / 10"}</Text>
          <View style={{ flexDirection: "row", paddingBottom: 90 }}>
            <Button
              onPress={this.selectTrue}
              buttonStyle={commonStyles.buttonShort}
              title="True"
            />
            <Button
              onPress={this.selectFalse}
              buttonStyle={commonStyles.buttonShort}
              title="False"
            />
          </View>
        </View>
      </View>
    );
  }

  navToResultScreen = () => {
    this.props.navigation.navigate("Score");
  };

  selectTrue = () => {
    this.nextQuestion();
  };

  selectFalse = () => {
    this.nextQuestion();
  };

  nextQuestion() {
    if (this.props.data.questionCtr === 9) {
      this.props.navigation.navigate("Score");
      return;
    }

    const qaCtr = this.props.data.questionCtr + 1;
    this.props.updateData({ questionCtr: qaCtr });
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
  }
});

// ---------- Setup Redux -------------
const mapStateToProps = state => ({
  questions: state.questions,
  data: state.data
  // state: state.state
});

export default connect(
  mapStateToProps,
  {
    updateData
    //updateTimer
  }
)(QuizScreen);

/*
Some question strings includes unicode characters we need to 
convert them to human readable characters.
*/
String.prototype.xescape = escapeUnicode();
