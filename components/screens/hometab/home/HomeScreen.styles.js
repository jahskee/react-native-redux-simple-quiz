/*jshint esversion: 6 */
import { myStyle } from "../../../_styles/myStyle"
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
     flex: 1,
     alignItems: "center",
     flexDirection: "column",
     justifyContent: "space-between",
     padding: 5,
     paddingTop: 20,
     paddingBottom: 50,
     paddingLeft: 10,
     backgroundColor: myStyle.backgroundDark,
   },
   title: {
     color: myStyle.textColor,
     textAlign: "center",
     fontWeight: 'bold',
     fontSize: 25,
     fontFamily: myStyle.titleFontFamily,
   },
   secondary: {
     color: myStyle.textColor,
     textAlign: "center",
     fontSize: 20,
     fontFamily: myStyle.subTitleFontFamily,
   }
 });