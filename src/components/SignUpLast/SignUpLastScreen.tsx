import React, {  } from 'react';
import { RootStackParamList } from "../../Views/MainScreen/MainScreen";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import styles from "./Style";

type SignUpLastProps= NativeStackScreenProps<RootStackParamList, "Home","Login">;

const SignUpLastScreen:React.FC<SignUpLastProps> =(props)=>{
    function handleclick(){
        props.navigation.push('Home')
    }
    return(
           
        <ScrollView>
            <View>
                <Text>Sign Up Process is Successful</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={handleclick}>
                <Text>Go To Home</Text>
            </TouchableOpacity>
            
        </ScrollView>
    );
}

export default SignUpLastScreen