/*jshint esversion: 6 */
import { myStyle } from "../../styles/myStyle";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: myStyle.textColor,
  }
});