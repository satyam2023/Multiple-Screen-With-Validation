import { StyleSheet } from "react-native";
 const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      marginBottom: 110,
      marginTop: 0,
    },
    accountBtn: {
      marginTop: 20,
      fontSize: 20,
      backgroundColor: '#0096FF',
      color: '#FFFFFF',
      padding: 8,
      borderRadius: 5,
      paddingHorizontal: 110,
    },
    errormsg: {
      color: 'red',
      marginRight: 170,
    },
    outer: {
      //  marginRight:170,
    },
    icon: {
      marginTop: 4,
      marginLeft: 4,
    },
    des:{
  position:'relative',
  padding:100,
  bottom:250,
  zIndex:-1,
  width:100,
  height:100,
  borderRadius:50,
  backgroundColor:'rgba(152, 164, 233, 0.4)',
  marginRight:370,
  
    },
    des1:{
      position:'relative',
      padding:100,
      left:150,
  bottom:350,
  zIndex:-1,
  width:100,
  height:100,
  borderRadius:50,
  backgroundColor:'rgba(231, 178, 240, 0.28)',
  
  
    },
    des2:{
      position:'relative',
      padding:100,
      right:70,
  
  bottom:350,
  zIndex:-1,
  width:100,
  height:100,
  borderRadius:100,
  backgroundColor:'rgba(189, 252, 158, 0.28)',
    },
    box: {
      flexDirection: 'row',
      borderRadius: 15,
      borderColor: '#91A3B0',
      borderTopWidth:0.5,
      borderLeftWidth:2,
      borderRightWidth:4,
      borderBottomWidth:4,
      width: '90%',
      margin: 15,
      backgroundColor: '#FFFFFF',
      
    },
    boxfocus:{
      zIndex:3,
      position:'relative',
      bottom:10,
      flexDirection: 'row',
      borderRadius: 15,
      borderColor: '#0000FF',
      left:10,
      borderTopWidth:0.5,
      borderLeftWidth:2,
      borderRightWidth:4,
      borderBottomWidth:4,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.1,
      shadowRadius: 16.00,
      elevation: 24,
      width: '90%',
      margin: 15,
      backgroundColor: '#FFFFFF',
    },
    searchbox:{
      flexDirection: 'row',
      borderRadius: 15,
      borderColor: '#91A3B0',
      width: '90%',
      margin: 15,
      backgroundColor: '#FFFFFF',
      justifyContent:'space-evenly',
      borderTopWidth:0.5,
      borderLeftWidth:2,
      borderRightWidth:4,
      borderBottomWidth:4,
    },
    modalsearchbox:{
      flexDirection: 'row',
      borderRadius: 15,
      borderColor: '#91A3B0',
      borderTopWidth:0.5,
      borderLeftWidth:2,
      borderRightWidth:4,
      borderBottomWidth:4,
      width: '93%',
      margin: 15,
      marginTop:282,
      backgroundColor: '#FFFFFF',
      justifyContent:'space-evenly'
    },
    boxy: {
      flexDirection: 'row',
      borderRadius: 5,
      //borderColor: '#91A3B0',
      borderTopColor: '#91A3B0',
      borderLeftColor: '#91A3B0',
      borderRightColor: '#FFFFFF',
      borderBottomColor: '#FFFFFF',
      borderWidth: 2,
      width: '90%',
      margin: 15,
      backgroundColor: '#FFFFFF',
    },
    dropview:{
      backgroundColor:'red',
      width:'110%',
      height:'50%'
    },
    insidedropdown:{
      textAlign:'center',
      fontSize:18,
      backgroundColor:'#FFFFFF',
      marginBottom:10,
      borderTopWidth:4,
      borderLeftWidth:2,
      borderRightWidth:4,
      borderBottomWidth:0.75,
      borderRadius:15,
      padding:8,
      width:'70%',
      marginLeft:'15%',
      color:'black'
      
     
    }
  });

  export default styles;
  