/*jshint esversion: 6 */
import { myStyle } from "../../styles/myStyle";
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
    backgroundColor: myStyle.background
  },
  youScored: {
    textAlign: "center",
    color: myStyle.textColor,
    fontSize: 20,
    fontWeight: "bold"
  }
});


