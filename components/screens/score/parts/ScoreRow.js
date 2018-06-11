/*jshint esversion: 6 */
import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text } from "react-native-elements";
import { myStyle } from "../../../_styles/myStyle";
import { styles } from "./ScoreRow.styles";

function ScoreRow(props){
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.numbering}>{props.answer.index + 1}.</Text>
         
          <Text style={styles.question}>{props.answer.question} </Text>
        
        </View>
        <View style={{ flexDirection: "row" }}>
              <Image
                style={styles.isCorrectWrongImage}
                source={{
                  uri: getImage({ isCorrect: props.answer.isCorrect })
                }}
              />
              <Text style={styles.correctAnswer}>
                Correct answer is { props.answer.correct }.
              </Text>
            </View>
      </View>
    );

  // get the proper image icon based on correct or wrong answer
  function getImage(isCorrect) {
    const imageCorrect =
      "https://cdn2.iconfinder.com/data/icons/basic-flat-icon-set/128/tick-512.png";
    const imageWrong =
      "https://cdn2.iconfinder.com/data/icons/circel-ui/238/28-512.png";
    return isCorrect.isCorrect ? imageCorrect : imageWrong;
  };
}

export default ScoreRow;
