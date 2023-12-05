
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import type { PropsWithChildren } from 'react';

import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import InputText from './InputText';

//import DropdownList from './DropDownList';
interface SecondProps{
  CheckScreen:any,
}

const Second = forwardRef(({ CheckScreen }: SecondProps, ref) => {
  
  const [validpassword,setvalidpassword]=useState(true);
  const details = {
    password: useRef(""),
    confirmpassword: useRef(""),
  };

  
  function errorVisiblePassword() {
    if (!validpassword) {
      return (
        <View style={styles.outer}>
          <Text style={styles.errormsg}>!!! Invalid Pass</Text>
        </View>
      );
    }
  }

  function handlePassword() {
    
    if (details.password.current.length <= 0) {
      setvalidpassword(false);
      CheckScreen(false);
    } else if (details.password.current !== details.confirmpassword.current) {
      setvalidpassword(false);
      CheckScreen(false)
    } else {
     setvalidpassword(true);
      CheckScreen(true);
    }
  }

  function handlepass(){
    if(details.password.current.length==0){
      setvalidpassword(false);
      errorVisiblePassword();
    }

  }

  

  

 
   useImperativeHandle(ref, () => ({
    handleSubmit: handlepass,
  }));

 //console.log("job type array:",dataJobtype);
  

  return (


    
    <SafeAreaView style={styles.container}>
  

      <View style={styles.box}>
      <View style={{backgroundColor:'#E6E6E6' ,width:0,}}></View>
      <InputText
        placeholder="Create Password"
        ChangeText={(text: string) => {
          details.password.current = text;
          handlePassword()
        }}
        keyboardType="default"
        secureText={true}
        maxLength={30}
      />
      </View>
      {errorVisiblePassword()}

      

      
      <View style={styles.box}>
      <View style={{backgroundColor:'#E6E6E6' ,width:0,}}></View>
      <InputText
        placeholder="Repeat Password"
        ChangeText={(text: string) => {
          details.confirmpassword.current = text;
          handlePassword()
        }}
        keyboardType="default"
        secureText={true}
        maxLength={30}
      />
      </View>
      <View style={styles.des}></View>
    <View style={styles.des1}></View>
    <View style={styles.des2}></View>
     

      
    </SafeAreaView>
  );
})

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginBottom:110,
    marginTop:0,
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
  TextInputs: {
    borderRadius: 5,
    borderColor: '#91A3B0',
    borderWidth: 2,
    width: '70%',
    margin: 15,
    backgroundColor: '#FFFFFF',
  },
  errormsg: {
    color: 'red',
    marginRight: 170,
  },
  outer: {
    //  marginRight:170,
  },
  icon:{
   marginTop:4,
   marginLeft:4,
   
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
  box:{
    flexDirection:'row',
    borderRadius: 15,
        borderColor: '#91A3B0',
        borderTopWidth:4,
        borderLeftWidth:2,
        borderRightWidth:4,
        borderBottomWidth:0.5,
        width: '90%',
        margin: 15,
        backgroundColor: '#FFFFFF',  
  },
  boxy:{
        flexDirection:'row',
        borderRadius: 5,
        //borderColor: '#91A3B0',
        borderTopColor:'#91A3B0',
        borderLeftColor:'#91A3B0',
        borderRightColor:'#FFFFFF',
        borderBottomColor:'#FFFFFF',
        borderWidth: 2,
        width: '90%',
        margin: 15,
        backgroundColor: '#FFFFFF',
  }
});

export default Second;
