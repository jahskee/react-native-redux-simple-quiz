/*jshint esversion: 6 */
import React from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-elements";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ConfirmDialog } from "react-native-simple-dialogs";
import { 
  updateData,
  addAnswer,
} from "../../../redux/action/actions";

import { commonStyles } from "../../../_styles/commonStyles.js";
import { myStyle } from "../../../_styles/myStyle";
import { styles } from "./QuizScreen.styles.js";

class QuizScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Quiz",
      headerTintColor: myStyle.primaryColor
    };
  };

  render() {
    const index = this.props.data.questionIndex;
   // console.log(this.props.questions)
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.subTitle}>
            {this.props.questions[index].category}
          </Text>
          <Text style={styles.subTitle}>
            {this.props.data.questionIndex + 1 + " / 10"}
          </Text>
        </View>
        <View style={styles.questionCard}>
          <Text style={styles.questionText}>
            {this.props.questions[index].question}
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

  selectTrue = async () => {
    await this.questionAnswered(true);
  };

  selectFalse = async () => {
    await this.questionAnswered(false);
  };

  questionAnswered = answer => {
    const index = this.props.data.questionIndex;

    const questionObj = this.props.questions[index];

    const question = questionObj.question;
    const correct = questionObj.correct_answer;
    answer = answer === true ? "True" : "False";
    const isCorrect = answer === correct ? true : false;

    if (this.props.answers.length <= 9) {
      this.props.addAnswer({ index, question, answer, correct, isCorrect });
    }

    if (index >= 9) {
      this.props.navigation.navigate("ScoreScreen");
      return;
    } else {
      this.props.updateData({ questionIndex: index + 1 });
    }
  };
}

// ---------- Setup Redux -------------
const mapStateToProps = state => ({
  questions: state.questions,
  answers: state.answers,
  data: state.data
});

const mapDispatchToProps = { 
  updateData, 
  addAnswer,  
};  

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuizScreen);
