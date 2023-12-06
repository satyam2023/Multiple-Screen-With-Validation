import React, { FC, useRef } from "react";
import { TextInput, StyleSheet,Keyboard } from "react-native";
import styles from "./Style";

interface InputProps {
    placeholder: string;
    ChangeText: Function,
    keyboardType:any,
    secureText:boolean,
    maxLength:number,
}

const InputText: FC<InputProps> = (props): JSX.Element => {
    return (
        <TextInput
            
            placeholder={props.placeholder}
            placeholderTextColor='black'
            cursorColor='rgba(13, 165, 248, 1)'
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