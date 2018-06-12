/*jshint esversion: 6 */
import React from "react";
import { View, StyleSheet, Image } from "react-native";
import PropTypes from "prop-types";
import { Text } from "react-native-elements";
import { myStyle } from "../../../../_styles/myStyle";
import { styles } from "./ScoreRow.styles";

class ScoreRow extends React.PureComponent {

  imageCorrect = "https://cdn2.iconfinder.com/data/icons/basic-flat-icon-set/128/tick-512.png";
  imageWrong = "https://cdn2.iconfinder.com/data/icons/circel-ui/238/28-512.png";

  getImage() {
    return this.props.answer.isCorrect ? this.imageCorrect : this.imageWrong;
  };
    
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.numbering}>{this.props.answer.index + 1}.</Text>         
          <Text style={styles.question}>{this.props.answer.question} </Text>        
        </View>
        <View style={{ flexDirection: "row" }}>
              <Image
                style={styles.isCorrectWrongImage}
                source={{uri: this.getImage()}}
              />
              <Text style={styles.correctAnswer}>
                Correct answer is { this.props.answer.correct }.
              </Text>
            </View>
      </View>
    );
  }
}

// ----------- Prop-Types ------
ScoreRow.propTypes = {
  answer: PropTypes.object.isRequired
};

export default ScoreRow;
