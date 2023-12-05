import React, { useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface HeaderProps{
  currentScreen:any,
}

  
const CustomHeader: React.FC<HeaderProps> = ({currentScreen}:HeaderProps) => {
    console.log("current screen:",currentScreen)
   
  
    return (
      <View
        style={styles.header}
      >
        <View style={styles.HeaderContainer}>
          <View style={styles.firstCircle}>
            <Text style={{ textAlign: 'center', fontSize: 40,color:'#FFFFFF' }}>1</Text>
          </View>
  
          <View style={(currentScreen==2 || currentScreen==3)?styles.firstline:styles.EmptyFirstLine}>
            <Text></Text>
          </View>
  
          <View style={ (currentScreen==2 || currentScreen==3)?styles.SecondCircle:styles.SecondCircleEmpty}>
            <Text style={{ textAlign: 'center', fontSize: 40,color:'#FFFFFF' }}>2</Text>
          </View>
  
          <View style={(currentScreen==3)?styles.secondline:styles.EmptySecondLine}>
            <Text></Text>
          </View>
  
          <View style={(currentScreen==3)?styles.thirdCircle:styles.EmptyThirdCircle}>
            <Text style={{ textAlign: 'center', fontSize: 40,color:'#FFFFFF' }}>3</Text>
          </View>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    
    header: {
      justifyContent: 'center',
      alignItems: 'center',
      left: 0,
      right: 0,
      paddingTop: 25,
      backgroundColor:'#FFFFFF'
    },

    HeaderContainer: {
      backgroundColor: '#FFFFFF',
      flexDirection: 'row',
      height: 100,
    },
    firstCircle: {
      marginLeft: 10,
      marginTop: 10,
      marginRight: 0,
      marginBottom: 10,
      height: 70,
      width: 70,
      backgroundColor: '#00BFFF',
      borderRadius: 50,
      color: '#FFFFFF',
      
    },
    SecondCircle: {
      marginLeft: 0,
      marginTop: 10,
      marginBottom: 10,
      height: 70,
      width: 70,
      backgroundColor: '#00BFFF',
      borderRadius: 50,
    },
    thirdCircle: {
      marginLeft: 0,
      marginTop: 10,
      marginBottom: 10,
      height: 70,
      width: 70,
      backgroundColor: '#00BFFF',
      borderRadius: 50,
    },
    firstline: {
      backgroundColor: '#AFDBF5',
      height: 5,
      width: 70,
      marginTop: 38,
    },
    secondline:{
      backgroundColor: '#AFDBF5',
      height: 5,
      width: 70,
      marginTop: 38,
    },
    SecondCircleEmpty:{
      marginLeft: 0,
      marginTop: 10,
      marginBottom: 10,
      height: 70,
      width: 70,
      backgroundColor: '#E6E6E6',
      borderRadius: 50,
    },
    EmptyThirdCircle:{
      marginLeft: 0,
      marginTop: 10,
      marginBottom: 10,
      height: 70,
      width: 70,
      backgroundColor: '#E6E6E6',
      borderRadius: 50,
    },
    EmptyFirstLine:{
      backgroundColor: '#E6E6E6',
      height: 5,
      width: 70,
      marginTop: 38,
    },
    EmptySecondLine:{
      backgroundColor: '#E6E6E6',
      height: 5,
      width: 70,
      marginTop: 38,
    }
  });

  export default CustomHeader;
  
  