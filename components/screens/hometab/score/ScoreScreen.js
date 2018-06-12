/*jshint esversion: 6 */
import React from "react";
import { View, FlatList } from "react-native";
import { Text, Button } from "react-native-elements";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { 
  clearAnswers,
  updateData,
  getQuestions,
} from "../../../redux/action/actions";

import ScoreRow from "./blocks/ScoreRow";
import { addKeys } from "../../../utils/utils";

import { commonStyles } from "../../../_styles/commonStyles";
import { myStyle } from "../../../_styles/myStyle";
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
        <Text style={styles.subTitle}>
          You Scored {"\n"} {this.props.data.score} out of 10
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
    let score = 0;
    this.props.answers.forEach(answer => {
      if (answer.isCorrect) score++;
    });
    this.props.updateData({ score });
  }

  navPlayAgain = async () => {
    this.props.getQuestions();
    this.props.clearAnswers();
    this.props.updateData({ questionIndex: 0 });
    this.props.navigation.navigate("QuizScreen");
  };
}

// ---------- Setup Redux -------------
const mapStateToProps = state => ({
  questions: state.questions,
  answers: state.answers,
  data: state.data
});
const mapDispatchToProps = {  
  clearAnswers, 
  updateData,
  getQuestions, 
};  

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScoreScreen);
