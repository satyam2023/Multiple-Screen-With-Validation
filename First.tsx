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
  const [emailstatus, setemailstatus] = useState(false);
  const [phonestatus, setphonestatus] = useState(false);
  const details = {
    email: useRef(''),
    phoneNumber: useRef(''),
  };

  if (emailstatus && phonestatus) {
    CheckScreen(true);
  } else {
    CheckScreen(false);
  }

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

  function handleEmail(text: string) {
    let mailIndex = text.indexOf('@');
    let length = text.length;
    if (length <= 0 || mailIndex === -1 || length - mailIndex < 3) {
      setemailstatus(false);
      setvalidemail(false);
    } else {
      setemailstatus(true);
      setvalidemail(true);
    }
  }

  function handlePhone(text: string) {
    let phoneNumberLength = text.length;
    if (phoneNumberLength <10 || phoneNumberLength > 10) {
      setphonestatus(false);
      setvalidphone(false);
    } else if (phoneNumberLength === 10) {
      setphonestatus(true);
      setvalidphone(true);
    }
  }

  function handleEmailAndPhone() {
    console.log('handle the email');
    let emailLength = details.email.current.length;
    let phonelength = details.phoneNumber.current.length;
    if (emailLength == 0) {
      errorVisibleEmail();
      setvalidemail(false);
    }

    if (phonelength == 0) {
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
          maxLength={40}
        />
      </View>

      {errorVisibleEmail()}

      <View style={styles.box}>
        <View style={{ backgroundColor: '#E6E6E6', width: 0 }}></View>
        <InputText
          placeholder="Phone Number"
          ChangeText={(text: string) => {
            details.phoneNumber.current = text;
            handlePhone(text);
          }}
          keyboardType="numeric"
          secureText={false}
          maxLength={10}
        />
      </View>
      {errorVisiblePhone()}
      <View style={styles.des}></View>
    <View style={styles.des1}></View>
    <View style={styles.des2}></View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
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
    borderTopWidth:4,
    borderLeftWidth:2,
    borderRightWidth:4,
    borderBottomWidth:0.5,
    width: '90%',
    margin: 15,
    backgroundColor: '#FFFFFF',
  },
});

export default First;