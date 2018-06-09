import React from 'react';
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";


const ScoreRow = props => {  
    return ( 
        <View style={styles.container}>
          <Text style={{fontSize: 20,  color: '#505050'}}> {props.answer.question} </Text>
        </View>
      )
};

// --------- Styling ----------
const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: 20,
    paddingTop: 10,   
    paddingBottom: 10,
    marginBottom: 5,
    borderStyle: 'solid',
    borderColor: 'darkgray',
    backgroundColor: 'white',
    borderWidth: 1,   
  }
});
export default ScoreRow