/* jshint esversion: 6 */
import { StyleSheet } from "react-native";
import { myStyle } from "../../../../_styles/myStyle"

// --------- Styling ----------
export const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 15,
        paddingTop: 13,
        paddingBottom: 13,
        marginBottom: 0.2,
        borderStyle: "solid",
        borderColor: "darkgray",
        backgroundColor: "white",
        borderWidth: 1,
        overflow: 'hidden'
      },
      numbering: {
        fontSize: 16,
        color: myStyle.textColorDark,
      },
      question: {
        fontSize: 16,
        color: myStyle.textColorDark,
        flexWrap: 'wrap',     
        marginLeft: 10,
        marginRight: 15,
        paddingRight: 0,
        paddingLeft: 0,
      },
      correctAnswer: {
        fontSize: 16,
        color: myStyle.textColorDark,
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