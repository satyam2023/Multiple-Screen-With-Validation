import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    footer: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#B2FFFF',
    },
    FooterContainer: {
      backgroundColor: '#B2FFFF',
      flexDirection: 'row',
      justifyContent: 'space-around',
  
    },
    btn: {
      margin: 10,
      padding: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.1,
      shadowRadius: 16.00,
      elevation: 24,
      borderColor: '#002244',
      borderRadius: 15,
      backgroundColor: '#00BFFF',
    },
    probtn: {
      margin: 10,
      textAlign:'center',
      padding: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.1,
      shadowRadius: 16.00,
      elevation: 25,
      borderRadius: 15,
      backgroundColor: '#00BFFF',
    },
  });

  export default styles;
  