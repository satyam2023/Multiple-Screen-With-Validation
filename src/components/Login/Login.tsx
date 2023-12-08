import React, { useRef, useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaFrameContext } from "react-native-safe-area-context";
import InputText from "../InputLayout/InputText";
import { useDispatch,useSelector } from "react-redux";
import First from "../FirstScreen/First";
import CustomerDetails from "../CustomerDetail/CustomerDetails";
import styles from "./Style";
import { isLog, setLogIn } from "../../Redux/Slice";


const LogIn: React.FC<{}>=()=>{
    const [focus, setfocus] = useState(false);
    const [phonefocus, setphonefocus] = useState(false);
    const [nameerorstatus,setnameerrorstatus]=useState(false);
    const details = {
        fullname:useRef(''),
        email: useRef(''),
        phoneNumber: useRef(''),
        password:useRef('')
    };

    const dispatch=useDispatch()

   const loginStatus=useSelector(isLog)
   console.log("LOgin Status:",loginStatus)
   
    function handlelogin(){
        dispatch(setLogIn(
            {
                userName:details.fullname.current,
                password:details.password.current,
                phonenumber:details.phoneNumber.current,
            },
        ))
        console.log("Login Screen name:",details.fullname.current)
        console.log("login Screen phone:",details.phoneNumber.current)
        console.log("login Screen password:",details.password.current)

    }

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
                {
                    !isLog?<View ><Text style={{color:'red'}}>!!! Invalid Credentials</Text></View>:<></>
                }
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

            <TouchableOpacity style={styles.btn} onPress={handlelogin}>
                <Text> LOGIN</Text>
            </TouchableOpacity>

            </ScrollView>
                
        


      </SafeAreaView>


    );

}


export default LogIn;