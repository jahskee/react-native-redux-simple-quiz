/* jshint esversion: 6 */
import { StyleSheet } from "react-native";
import { myStyle } from "../../../_styles/myStyle"

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
      backgroundColor: myStyle.backgroundDark,
    },
    subTitle: {
      fontWeight: "bold",
      fontSize: 18,
      color: myStyle.textColor,
      textAlign: "center",
      fontFamily: myStyle.subTitleFontFamily,
    },
    questionCard: {
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "darkgray",
        padding: 20,
        margin: 20,
        backgroundColor: "white",
    },
    questionText: {
      fontSize: 20,
      color:myStyle.textColorDark,
    },
  });