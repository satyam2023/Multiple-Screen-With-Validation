
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
        keyboardType="visible-password"
        secureText={true}
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
        keyboardType="visible-password"
        secureText={true}
      />
      </View>
     

      
    </SafeAreaView>
  );
})

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E6E6',
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
  box:{
    flexDirection:'row',
    borderRadius: 15,
        borderColor: '#91A3B0',
        borderWidth: 2,
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
