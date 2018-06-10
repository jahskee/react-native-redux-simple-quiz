/*jshint esversion: 6 */
import { myStyle } from "../../../styles/myStyle"
import { StyleSheet } from "react-native";

// --------- Styling ----------
export const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 25,
        paddingTop: 13,
        paddingBottom: 13,
        marginBottom: 0.2,
        borderStyle: "solid",
        borderColor: "darkgray",
        backgroundColor: "white",
        borderWidth: 1
      },
      numbering: {
        fontSize: 16,
        color: myStyle.textColor,
      },
      question: {
        fontSize: 16,
        color: myStyle.textColor,
        flexWrap: 'wrap',     
        marginLeft: 10,
        marginRight: 15,
        paddingRight: 0,
        paddingLeft: 0,
      },
      correctAnswer: {
        fontSize: 16,
        color: myStyle.textColor,
        paddingTop: 10,
        fontWeight: 'bold',
    
      },
      result: {
        marginLeft: 5,
        marginRight: 10,
        flexWrap: 'wrap',        
      },
      isCorrectWrongImage: {
        width: 20,
        height: 20,
        marginTop: 10,
        marginRight: 10
      }
});