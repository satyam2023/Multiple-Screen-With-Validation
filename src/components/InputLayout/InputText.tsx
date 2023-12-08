import React, { FC, useRef, useState } from "react";
import { TextInput, StyleSheet, Keyboard, Text, View } from "react-native";
import styles from "./Style";
import { useIsFocused } from "@react-navigation/native";

interface InputProps {
    placeholder: string;
    ChangeText: Function,
    keyboardType: any,
    secureText: boolean,
    maxLength: number,
    setfocus: Function,
}

const InputText: FC<InputProps> = (props): JSX.Element => {
    const [keyboard,setkeyboard]=useState<boolean>(true)
    const [float,setfloat]=useState<boolean>(false)
    Keyboard.addListener('keyboardDidHide', () => {
        props.setfocus(false);
        setkeyboard(false);
    })
    function handle() {
        setkeyboard(true)
        props.setfocus(true)
        setfloat(true);
        props.placeholder=" "
        
    }
    function handleone() {
        props.setfocus(false)
        setfloat(false);
    }
    return (
        <>
        { float?
            <View>
                <Text style={{color:'rgba(13, 165, 248, 1)',position:'absolute',bottom:29,left:20,backgroundColor:'transparent'}}>
                    {props.placeholder}</Text>
            </View>
            :
            <></>
        }
        <TextInput
            disableFullscreenUI={true}
            placeholder={props.placeholder}
            placeholderTextColor={float?'#FFFFFF':'black'}
            cursorColor={keyboard ? 'rgba(13, 165, 248, 1)' :'#FFFFFF'}
            onFocus={handle}
            onBlur={handleone}
            
            onChangeText={
                (text: string) => {
                    props.ChangeText(text)
                }
            }
            style={styles.TextInputs}
            keyboardType={props.keyboardType}
           secureTextEntry={props.secureText}
            maxLength={props.maxLength}
        />  
        </>
          
    );
};

export default InputText;