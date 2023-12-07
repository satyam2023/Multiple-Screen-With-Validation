import React, {
    forwardRef,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';
import styles from './Style';
import { useDispatch } from 'react-redux';
import { setPhone,setEmail } from '../../Redux/Slice';

import {
    Alert,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import InputText from '../InputLayout/InputText';

//import DropdownList from './DropDownList';
interface FirstProps {
    CheckScreen: any;
}

const First = forwardRef(({ CheckScreen }: FirstProps, ref) => {
    const [validphone, setvalidphone] = useState(true);
    const [validemail, setvalidemail] = useState(true);
    const [emailstatus, setemailstatus] = useState(false);
    const [phonestatus, setphonestatus] = useState(false);
    const [focus, setfocus] = useState(false)
    const [phonefocus, setphonefocus] = useState(false)
    const dispatch =useDispatch();
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
        if (phoneNumberLength < 10 || phoneNumberLength > 10) {
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
        else {
            dispatch(setEmail(details.email.current))
        }

        if (phonelength == 0) {
            setvalidphone(false);
            errorVisiblePhone();
        }
        else{
            dispatch(setEmail(details.phoneNumber.current))

        }
    }

    useImperativeHandle(ref, () => ({
        handleSubmit: handleEmailAndPhone,
    }));

    //console.log("job type array:",dataJobtype);

    return (
        <SafeAreaView style={styles.container}>
            <View style={!focus ? styles.box : styles.boxfocus}>
                <View style={{ backgroundColor: '#E6E6E6', width: 0 }}></View>
                <InputText
                    placeholder="Email Address"
                    ChangeText={(text: string) => {
                        details.email.current = text;
                        handleEmail(text);

                    }}
                    setfocus={setfocus}
                    keyboardType="email-address"
                    secureText={false}
                    maxLength={40}
                />
            </View>

            {errorVisibleEmail()}

            <View style={!phonefocus ? styles.box : styles.boxfocus}>
                <View style={{ backgroundColor: '#E6E6E6', width: 0 }}></View>
                <InputText
                    placeholder="Phone Number"
                    ChangeText={(text: string) => {
                        details.phoneNumber.current = text;
                        handlePhone(text);
                    }}
                    keyboardType="numeric"
                    secureText={false}
                    setfocus={setphonefocus}
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

export default First;