import React, { useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface AppopeningProps{
    fortiming:Function;
}


 const Appopening: React.FC<AppopeningProps> = ({fortiming}:AppopeningProps) => {
    return(
  
      <View style={{width:'110%',height:'120%',backgroundColor:'#ffb38a',}}>
        <Text style={{color:'red',textAlign:'center',fontSize:50,marginTop:275,marginRight:50,}}>Welcome!!!</Text>
          {fortiming(2000)}
      </View>
    );
  }

  export default Appopening;