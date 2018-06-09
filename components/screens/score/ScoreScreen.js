import React from "react";
import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { Text, Button } from "react-native-elements";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { resetQuestions, clearAnswers, updateData } from "../../redux/actions";
import { Color } from "../../utils/config";
import { commonStyles } from "../../styles/common-styles";
import { addKeys } from "../../utils/utils";

import ScoreRow from './parts/ScoreRow'

class ScoreScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Result",
      headerTintColor: Color.primary
    };
  };

  render() {
    return (
      <View style={styles.container}>
         <Text style={{textAlign: 'center', color: '#505050', fontSize: 20, fontWeight: 'bold'}}>You Scored {"\n"} { this.props.data.score } / 10</Text>
        <FlatList style={{marginTop: 10}}
          renderItem={obj => <ScoreRow answer={obj.item} />}
          data={this.props.answers}
        />

        <Button
          onPress={this.navPlayAgain}
          buttonStyle={commonStyles.button}
          style ={{marginTop: 10, marginBottom: 10}}
          title="PLAY AGAIN?"
        />
      </View>
    );
  }

  componentDidMount() {
    // compute total score
    const score = this.props.answers.reduce((sum, answer)=> {
      sum = isNaN(sum)? 0 : sum;      
      return (answer.isCorrect ===true? sum + 1 : sum);            
    });
    this.props.updateData({score})   
  }

  navPlayAgain = async () => {
    this.props.updateData({ questionIndex: 0 });
    this.props.navigation.navigate("Quiz");
    const questions = await API.getQuestions();
    this.props.resetQuestions(questions);
    this.props.clearAnswers();
  };
}

// --------- Styling ----------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 5,
    paddingTop: 5,
    paddingBottom: 10,
    paddingLeft: 10, 
  }
});

// ---------- Setup Redux -------------
const mapStateToProps = state => ({
  questions: state.questions,
  answers: state.answers.map(addKeys),
  data: state.data,
});

export default connect(
  mapStateToProps,
  {
    resetQuestions,
    clearAnswers,
    updateData
  }
)(ScoreScreen);
