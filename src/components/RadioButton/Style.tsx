import { StyleSheet } from "react-native";
const styles=StyleSheet.create({
    radioButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 45,
      },
      radioButton: {
        height: 20,
        width: 20,
        backgroundColor: "#F8F8F8",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: " rgba(87, 133, 255, 1)",
        alignItems: "center",
        justifyContent: "center"
      },
      radioButtonIcon: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: "#00BFFF",
      },
      emptyradioButtonIcon: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: "#E6E6E6",
      },
      radioButtonText: {
        color:'black',
        fontSize: 18,
        marginLeft: 10,
      },
      oneFullRadioComponent:{
        flexDirection:'row',
        marginLeft:10,
      },
      headTextDesign:{
        color:'black',fontSize:18,marginRight:10
      }
  });
  export default styles;