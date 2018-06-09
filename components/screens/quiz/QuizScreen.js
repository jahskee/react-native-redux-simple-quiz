import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text, Button } from "react-native-elements";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { updateData, addAnswer } from "../../redux/actions";
import { Color } from "../../utils/config";

import { commonStyles } from "../../styles/common-styles.js";

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
        <View>
        <Text style={styles.top}>
          {this.props.questions[this.props.data.questionIndex].category}
        </Text>
        <Text
            style={{
              textAlign: "center",
             // marginBottom: 20,
              fontSize: 20,
              fontWeight: "bold",
              color: '#505050',
            }}
          >
            {this.props.data.questionIndex + 1 + " / 10"}
          </Text>
        </View>
      
        <View
          style={{
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "darkgray",
            padding: 20,
            margin: 20,
            backgroundColor: 'white',            
          }}
        >
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

  navToResultScreen = () => {
    this.props.navigation.navigate("Score");
  };

  selectTrue = () => {
    this.questionAnswered(true);
  };

  selectFalse = () => {
    this.questionAnswered(false);
  };

  questionAnswered(answer) {
    if (this.props.data.questionIndex === 9) {
      this.props.navigation.navigate("Score");
      return;
    }

    const index = this.props.data.questionIndex + 1;
    const questionObj = this.props.questions[index];

    const question = questionObj.question;
    const correct = questionObj.correct_answer;
    answer = answer === true ? "True" : "False";
    const isCorrect = answer === correct ? true : false;

    this.props.addAnswer({ index, question, answer, correct, isCorrect });
    this.props.updateData({ questionIndex: index });
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
    paddingLeft: 10,
   
    // backgroundColor: 'lightgray'
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: '#505050',
  },
  top: {
    fontWeight: "bold",
    fontSize: 20,
    color: '#505050',
    textAlign: 'center',
  },
  question: {    
    fontSize: 25,
    color: '#505050',
  }
});

// ---------- Setup Redux -------------
const mapStateToProps = state => ({
  questions: state.questions,
  data: state.data 
});

export default connect(
  mapStateToProps,
  {
    updateData,
    addAnswer
  }
)(QuizScreen);
