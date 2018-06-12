/*jshint esversion: 6 */
import React from "react";
import { Text, View, Image } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import PropTypes from "prop-types";
import {
  clearAnswers, 
  updateData,
  getQuestions,
} from "../../../redux/action/actions";
import { connect } from "react-redux";

import { commonStyles } from "../../../_styles/commonStyles.js";
import { myStyle } from "../../../_styles/myStyle";
import { styles } from "./HomeScreen.styles.js";

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Home",
      headerTintColor: myStyle.primaryColor,
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };


  config = {
    images: {
      logo:
        "https://cdn2.iconfinder.com/data/icons/basic-flat-icon-set/128/mind-512.png"
    }
  };

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>
          Welcome to the {"\n"}
          Trivia Challenge!
        </Text>

        <Image
          style={{ width: 128, height: 128 }}
          source={{
            uri: this.config.images.logo
          }}
        />

        <Text style={styles.secondary}>
          You will be presented {"\n"}
          with 10 True or False {"\n"}
          questions.
        </Text>

        <Text style={styles.secondary} h4>
          Can you score 100%?
        </Text>

        <Button
          onPress={this.navToQuizScreen}
          buttonStyle={commonStyles.button}
          title="BEGIN"
        />
      </View>
    );
  }
  /*
  componentWillMount() {
    this.props.getQuestions();
    this.props.clearAnswers();
    this.props.updateData({ questionIndex: 0 });
  }*/

  navToQuizScreen = async () => {   
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
)(HomeScreen);