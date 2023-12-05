import React, { useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';

interface AppopeningProps{
    fortiming:Function;
}


 const Appopening: React.FC<AppopeningProps> = ({fortiming}:AppopeningProps) => {
    return(
  
      <View style={{width:'110%',height:'200%',backgroundColor:'#FFFFFF',}}>
        <StatusBar  backgroundColor='#E6E6E6'/>
        <Text style={{color:'red',textAlign:'center',fontSize:50,marginTop:275,marginRight:50,}}>Welcome!!!</Text>
          {fortiming(0)}
      </View>
    );
  }

  export default Appopening;