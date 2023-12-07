import React, { FC, useRef, useState } from "react";
import { TextInput, StyleSheet, Keyboard, Text } from "react-native";
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
    Keyboard.addListener('keyboardDidHide', () => {
        props.setfocus(false);
        setkeyboard(false);
    })
    function handle() {
        setkeyboard(true)
        props.setfocus(true)
        
    }
    function handleone() {
        props.setfocus(false)
    }
    return (
        <TextInput
            disableFullscreenUI={true}
            placeholder={props.placeholder}
            placeholderTextColor='black'
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
          
    );
};

export default InputText;