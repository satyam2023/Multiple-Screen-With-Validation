import React, { useRef, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { SafeAreaFrameContext } from "react-native-safe-area-context";
import InputText from "../InputLayout/InputText";
import First from "../FirstScreen/First";
import CustomerDetails from "../CustomerDetail/CustomerDetails";
import styles from "./Style";


const LogIn: React.FC<{}>=()=>{
    const [focus, setfocus] = useState(false)
    const [phonefocus, setphonefocus] = useState(false)
    const details = {
        fullname:useRef(''),
        email: useRef(''),
        phoneNumber: useRef(''),
        password:useRef('')
    };

    return(
      <SafeAreaView >
         <View style={styles.loginhead}><Text>LogIn Screen</Text></View>
        <ScrollView style={{position:'absolute',width:'90%',marginLeft:'5%',top:200}}>

           
   <View style={!focus?styles.box:styles.boxfocus}>
                    <View style={{ backgroundColor: '#E6E6E6', width: 0, }}></View>
                    <InputText
                        placeholder="Full name"
                        ChangeText={(text: string) => {
                            details.fullname.current = text;
                        }}
                        maxLength={30}
                        setfocus={setfocus}
                        keyboardType="default"
                        secureText={false}
                    />
                </View>
                <View style={!focus?styles.box:styles.boxfocus}>
                <View style={{ backgroundColor: '#E6E6E6', width: 0, }}></View>
                <InputText
                    placeholder="Enter Password"
                    ChangeText={(text: string) => {
                        details.password.current = text;
                        
                    }}
                    keyboardType="default"
                    secureText={true}
                    maxLength={30}
                    setfocus={setfocus}
                />
            </View>
            <View style={!phonefocus ? styles.box : styles.boxfocus}>
                <View style={{ backgroundColor: '#E6E6E6', width: 0 }}></View>
                <InputText
                    placeholder="Enter Phone Number"
                    ChangeText={(text: string) => {
                        details.phoneNumber.current = text;
                        
                    }}
                    keyboardType="numeric"
                    secureText={false}
                    setfocus={setphonefocus}
                    maxLength={10}
                />
            </View>

            </ScrollView>
                
        


      </SafeAreaView>


    );

}


export default LogIn;