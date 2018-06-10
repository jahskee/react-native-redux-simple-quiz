/*jshint esversion: 6 */
import React from "react";
import { View, FlatList } from "react-native";
import { Text, Button } from "react-native-elements";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import {
  resetQuestions,
  clearAnswers,
  addKeysToAnswers,
  updateData
} from "../../redux/actions";
import { commonStyles } from "../../styles/common-styles";

import ScoreRow from "./parts/ScoreRow";
import { myStyle } from "../../styles/myStyle";
import { addKeys } from "../../utils/utils";
import { styles } from "./ScoreScreen.styles";

class ScoreScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Result",
      headerTintColor: myStyle.primaryColor
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.youScored}>        
          You Scored {"\n"} {this.props.data.score} of 10
        </Text>
        <FlatList
          style={{ marginTop: 10 }}
          renderItem={obj => <ScoreRow answer={obj.item} />}
          data={this.props.answers.map(addKeys)}
        />

        <Button
          onPress={this.navPlayAgain}
          buttonStyle={commonStyles.button}
          style={{ marginTop: 10, marginBottom: 10 }}
          title="PLAY AGAIN?"
        />
      </View>
    );
  }

  componentDidMount() {
    // compute total score
    const score = this.props.answers.reduce((sum, answer) => {
      sum = isNaN(sum) ? 0 : sum;
      return answer.isCorrect === true ? sum + 1 : sum;
    });
    this.props.updateData({ score });
  }

  navPlayAgain = async () => {
    this.props.updateData({ questionIndex: 0 });
    this.props.navigation.navigate("Quiz");
    const questions = await API.getQuestions();
    this.props.resetQuestions(questions);
    this.props.clearAnswers();
  };
}

// ---------- Setup Redux -------------
const mapStateToProps = state => ({
  questions: state.questions,
  answers: state.answers,
  data: state.data
});

export default connect(
  mapStateToProps,
  {
    resetQuestions,
    clearAnswers,
    updateData
  }
)(ScoreScreen);
