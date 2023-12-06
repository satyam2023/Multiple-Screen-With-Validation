
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
import InputText from '../InputLayout/InputText';
import styles from './Style';

//import DropdownList from './DropDownList';
interface SecondProps {
    CheckScreen: any,
}

const Second = forwardRef(({ CheckScreen }: SecondProps, ref) => {
    const [validpassword, setvalidpassword] = useState(true);
    const [focus,setfocus]=useState(false)
    const [passwordfocus,setpasswordfocus]=useState(false)
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
    function handlepass() {
        if (details.password.current.length == 0) {
            setvalidpassword(false);
            errorVisiblePassword();
        }

    }
    useImperativeHandle(ref, () => ({
        handleSubmit: handlepass,
    }));
    return (
        <SafeAreaView style={styles.container}>
            <View style={!focus?styles.box:styles.boxfocus}>
                <View style={{ backgroundColor: '#E6E6E6', width: 0, }}></View>
                <InputText
                    placeholder="Create Password"
                    ChangeText={(text: string) => {
                        details.password.current = text;
                        
                    }}
                    keyboardType="default"
                    secureText={true}
                    maxLength={30}
                    setfocus={setfocus}
                />
            </View>
            {errorVisiblePassword()}
            <View style={!passwordfocus?styles.box:styles.boxfocus}>
                <View style={{ backgroundColor: '#E6E6E6', width: 0, }}></View>
                <InputText
                    placeholder="Repeat Password"
                    ChangeText={(text: string) => {
                        details.confirmpassword.current = text;
                        handlePassword()
                    }}
                    keyboardType="default"
                    secureText={true}
                    maxLength={30}
                    setfocus={setpasswordfocus}
                />
            </View>
            <View style={styles.des}></View>
            <View style={styles.des1}></View>
            <View style={styles.des2}></View>
        </SafeAreaView>
    );
})

export default Second;
