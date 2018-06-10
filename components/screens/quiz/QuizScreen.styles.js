/*jshint esversion: 6 */
import { myStyle } from "../../styles/myStyle"
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: 5,
      paddingTop: 20,
      paddingBottom: 10,
      paddingLeft: 10,
      backgroundColor: myStyle.background,
    },
    title: {
      fontWeight: "bold",
      fontSize: 20,
      color: myStyle.textColor,
    },
    top: {
      fontWeight: "bold",
      fontSize: 20,
      color: myStyle.textColor,
      textAlign: "center",
    },
    question: {
      fontSize: 20,
      color:myStyle.color,
    },
    questionTrack: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: myStyle.textColor,
    },
    questionCard: {
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "darkgray",
        padding: 20,
        margin: 20,
        backgroundColor: "white"
    }
  });