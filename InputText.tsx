import React, { FC, useRef } from "react";
import { TextInput, StyleSheet,Keyboard } from "react-native";

interface InputProps {
    placeholder: string;
    ChangeText: Function,
    keyboardType:any,
    secureText:boolean,
    maxLength:number,
    
    // value:any,
}



const InputText: FC<InputProps> = (props): JSX.Element => {
    // console.log(props.ChangeText);
   // console.log(props.placeholder,":",props.secureText);
    return (
        <TextInput
            placeholder={props.placeholder}
            placeholderTextColor='black'
            onChangeText={
                (text: string) => {
                    props.ChangeText(text)
                }


            }
            style={styles.TextInputs}
            keyboardType={props.keyboardType}
            secureTextEntry={props.secureText}
            maxLength={props.maxLength}
           // onPressOut={Keyboard.dismiss}
           
        //value={props.value}
        />
    );
};
const styles = StyleSheet.create({
    TextInputs: {
   fontSize:18,
   paddingLeft:18,
    }
});
export default InputText;