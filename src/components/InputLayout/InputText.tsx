import React, { FC, useRef, useState } from "react";
import { TextInput, StyleSheet,Keyboard } from "react-native";
import styles from "./Style";
import { useIsFocused } from "@react-navigation/native";

interface InputProps {
    placeholder: string;
    ChangeText: Function,
    keyboardType:any,
    secureText:boolean,
    maxLength:number,
   setfocus:Function,
}



const InputText: FC<InputProps> = (props): JSX.Element => {
    
   
    function handle(){
       props.setfocus(true)
    }
    function handleone(){
        props.setfocus(false)
    }
    return (
        <TextInput
            
            placeholder={props.placeholder}
            placeholderTextColor='black'
            cursorColor='rgba(13, 165, 248, 1)'
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