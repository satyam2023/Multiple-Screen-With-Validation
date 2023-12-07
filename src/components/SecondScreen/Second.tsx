
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import type { PropsWithChildren } from 'react';
import { setSignUp } from '../../Redux/Slice';
import { useSelector} from 'react-redux';

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
import { useDispatch } from 'react-redux';
import { setPassword } from '../../Redux/Slice';

//import DropdownList from './DropDownList';
interface SecondProps {
    CheckScreen: any,
}

const Second = forwardRef(({ CheckScreen }: SecondProps, ref) => {
    const [validpassword, setvalidpassword] = useState(true);
    const [focus,setfocus]=useState(false)
    const [passwordfocus,setpasswordfocus]=useState(false)
    const dispatch=useDispatch();
    const NAME = useSelector((state:any) =>  state.user.userName);
    const PASSWORD = useSelector((state:any) => state.user.password);
    const PHONENUMBER = useSelector((state:any) => state.user.phonenumber);
    const EMAIL = useSelector((state:any) => state.user.email);
    const GENDER =useSelector((state:any)=>state.user.gender);
    console.log("Second name:",NAME)
    console.log("Second password:",PASSWORD)
    console.log("Second phonenumber:",PHONENUMBER)
    console.log("Second Eail:",EMAIL)
    console.log("Second GENDER:",GENDER)
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
        }
        else if(details.password.current === details.confirmpassword.current){
            dispatch(setPassword(details.password.current))
            setvalidpassword(true);
            CheckScreen(true);
        }
        else {
            setvalidpassword(true);
            CheckScreen(true);
        }
    }
    function handlepass() {
        if (details.password.current.length == 0) {
            setvalidpassword(false);
            errorVisiblePassword();
        }
        else{
            console.log("enterd inside else")
            dispatch(setSignUp({
                userName: NAME,
                gender:GENDER,
                phonenumber:PHONENUMBER,
                email:EMAIL,
                password: PASSWORD,
              }))
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
