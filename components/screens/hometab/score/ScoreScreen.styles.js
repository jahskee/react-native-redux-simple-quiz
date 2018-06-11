/*jshint esversion: 6 */
import { myStyle } from "../../../_styles/myStyle";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 5,
    paddingTop: 5,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: myStyle.backgroundDark,
    overflow: 'hidden',
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: myStyle.textColor,
    textAlign: "center",
    fontFamily: myStyle.subTitleFontFamily,
  }
});


