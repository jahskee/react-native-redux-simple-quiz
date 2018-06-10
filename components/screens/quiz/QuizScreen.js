/*jshint esversion: 6 */
import React from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-elements";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { updateData, addAnswer } from "../../redux/actions";
import { commonStyles } from "../../styles/common-styles.js";

import { myStyle } from "../../styles/myStyle"
import { styles } from "./QuizScreen.styles.js"

class QuizScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Quiz",
      headerTintColor: myStyle.primaryColor,
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.top}>
            {this.props.questions[this.props.data.questionIndex].category}
          </Text>
          <Text style={styles.questionTrack}>
            {this.props.data.questionIndex + 1 + " / 10"}
          </Text>
        </View>

        <View style={styles.questionCard}>
          <Text style={styles.question}>
            {this.props.questions[this.props.data.questionIndex].question}
          </Text>
        </View>

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
    );
  }

  selectTrue = () => {
    this.questionAnswered(true);
  };

  selectFalse = () => {
    this.questionAnswered(false);
  };

  questionAnswered = answer => {
    const index = this.props.data.questionIndex;

    const questionObj = this.props.questions[index];

    const question = questionObj.question;
    const correct = questionObj.correct_answer;
    answer = answer === true ? "True" : "False";
    const isCorrect = answer === correct ? true : false; 

    if(this.props.answers.length <= 9) {     
      this.props.addAnswer({ index, question, answer, correct, isCorrect });
    }
 
    console.log(this.props.answers)
    if (index >= 9) {
      this.props.navigation.navigate("Score");
      return;
    } else {
      this.props.updateData({ questionIndex: index + 1 });       
    } 
  }
}

// ---------- Setup Redux -------------
const mapStateToProps = state => ({
  questions: state.questions,
  answers: state.answers,
  data: state.data,
});

export default connect(
  mapStateToProps,
  {
    updateData,
    addAnswer,
  }
)(QuizScreen);
