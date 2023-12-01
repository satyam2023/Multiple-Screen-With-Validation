import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
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
interface FirstProps {
  CheckScreen: any;
}

const First = forwardRef(({ CheckScreen }: FirstProps, ref) => {
  const [validphone, setvalidphone] = useState(true);
  const [validemail, setvalidemail] = useState(true);
  const details = {
    email: useRef(''),
    phoneNumber: useRef(''),
  };

  function errorVisibleEmail() {
    if (!validemail) {
      return (
        <View style={styles.outer}>
          <Text style={styles.errormsg}>!!! Invalid email</Text>
        </View>
      );
    }
  }

  function errorVisiblePhone() {
    if (!validphone) {
      return (
        <View style={styles.outer}>
          <Text style={styles.errormsg}>!!! Invalid Phone</Text>
        </View>
      );
    }
  }

  function handleEmail(text:string) {
    let mailIndex = text.indexOf('@');
    let length = text.length;
    if (length <= 0 || mailIndex === -1 || length - mailIndex < 3) {
      CheckScreen(false);
      setvalidemail(false);
    } else {
      CheckScreen(true);
      setvalidemail(true);
    }
  }

  function handlePhone(text:string) {
    let phoneNumberLength = text.length;
    if (phoneNumberLength <= 0 || phoneNumberLength > 10) {
      CheckScreen(false);
      setvalidphone(false);
    } else if (phoneNumberLength === 10) {
      CheckScreen(true);
      setvalidphone(true);
    }
  }

  function handleEmailAndPhone() {
    console.log("handle the email")
    let emailLength = details.email.current.length;
    let phonelength= details.phoneNumber.current.length;
    if(emailLength==0){
      errorVisibleEmail();
      setvalidemail(false);
      
    }


    if(phonelength==0){
      setvalidphone(false);
      errorVisiblePhone();
    }
    

    
  }

  useImperativeHandle(ref, () => ({
    handleSubmit: handleEmailAndPhone,
  }));

  //console.log("job type array:",dataJobtype);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <View style={{ backgroundColor: '#E6E6E6', width: 0 }}></View>
        <InputText
          placeholder="Email Address"
          ChangeText={(text: string) => {
            details.email.current = text;
            handleEmail(text);
          }}
          keyboardType="email-address"
          secureText={false}
        />
      </View>

      {errorVisibleEmail()}

      <View style={styles.box}>
        <View style={{ backgroundColor: '#E6E6E6', width: 0 }}></View>
        <InputText
          placeholder="Phone Number"
          ChangeText={(text: string) => {
            details.phoneNumber.current = text;
            handlePhone(text)
          }}
          keyboardType="numeric"
          secureText={false}
        />
      </View>
      {errorVisiblePhone()}
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E6E6',
    marginBottom: 110,
    marginTop: 0,
  },
  errormsg: {
    color: 'red',
    marginRight: 170,
  },
  outer: {
    //  marginRight:170,
  },
  box: {
    flexDirection: 'row',
    borderRadius: 15,
    borderColor: '#91A3B0',
    borderWidth: 2,
    width: '90%',
    margin: 15,
    backgroundColor: '#FFFFFF',
  },
});

export default First;