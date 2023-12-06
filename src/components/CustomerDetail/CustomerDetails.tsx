import React, {
    forwardRef,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';
import type { PropsWithChildren } from 'react';
import styles from './Style';


import {
    Alert,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View,
} from 'react-native';
import InputText from '../InputLayout/InputText';
import { Modal } from 'react-native';
import RadioButton from '../RadioButton/RadioButton';

interface CustomerProps {
    CheckScreen: any;
}

const CustomerDetails = forwardRef(({ CheckScreen }: CustomerProps, ref) => {
    const [validname, setvalidname] = useState<boolean>(true);
    const [toggle, settoggle] = useState<boolean>(false);
    const [Tag, setTag] = useState<any>("Gender");
    const [namestatus, setnamestatus] = useState<boolean>(false);
    const [dropstatus, setdropstatus] = useState<boolean>(false);
    const [dropvisi, setdropvisi] = useState<boolean>(false);
    const details = {
        fullname: useRef(''),
    };

    if (dropstatus && namestatus) {
        CheckScreen(true)
    }
    else {
        CheckScreen(false);
    }

    function errorVisibleName() {
        // console.log("valid name:",validname);
        if (!validname) {
            return (
                <View style={styles.outer}>
                    <Text style={styles.errormsg}>!!! Invalid name</Text>
                </View>
            );
        }
    }

    function handleName(text: string) {
        //console.log('handle name function called()');
        //let fullNameLength = details.fullname.current.length;
        let fullNameLength = text.length;
        if (fullNameLength === 0) {
            setvalidname(false);
            setnamestatus(false)
        } else {
            //let valid = true;
            for (let i = 0; i < fullNameLength; i++) {
                // console.log("type of:",typeof(text[i]))
                if (
                    text[i] == '0' &&
                    text[i] <= '9'
                ) {
                    //valid = false;
                    setvalidname(false);
                    setnamestatus(false)
                    break;
                }
            }
            setvalidname(true);
            setnamestatus(true)
        }
    }

    function errorVisibleNaam() {
        let fullNameLength = details.fullname.current.length;
        // console.log("finding length:",fullNameLength);
        if (fullNameLength === 0) {
            errorVisibleName();
            setvalidname(false);
        }

    }
    function errorVisibledrop() {
        if (Tag == "Gender") {
            setdropstatus(false);

        }
        else {
            setdropstatus(true);
        }


    }


    function errorVisible() {
        errorVisibleNaam()
        errorVisibledrop()
        setdropvisi(true)
    }

    useImperativeHandle(ref, () => ({
        handleSubmit: errorVisible,
    }));

    //console.log("job type array:",dataJobtype);
    function dropview() {
        if (toggle) {
            return (
                <Modal
                    visible={toggle}
                    animationType='slide'
                    transparent={true}

                >
                    <View style={{ flexDirection: 'column', backgroundColor: 'rgba(240,240,240,0.5)', borderTopColor: '#E6E6E6', width: '100%', height: '100%', }}>
                        <View>
                            <View>
                                <TouchableOpacity style={styles.modalsearchbox} onPress={() => {
                                    if (toggle) { settoggle(false) }
                                    else { settoggle(true) }

                                }} >
                                    <Text style={{ padding: 15, fontSize: 14 }}>{Tag}
                                    </Text>
                                    <Text style={{ fontSize: 25, marginLeft: 200, marginTop: 5, }} >+</Text>
                                </TouchableOpacity>

                            </View>
                            <View style={{ marginTop: 0 }}>
                                <TouchableOpacity onPress={() => {
                                    setTag("Male")
                                    settoggle(false)
                                    setdropstatus(true)
                                }}><Text style={styles.insidedropdown}>Male</Text></TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    setTag("Female")
                                    settoggle(false)
                                    setdropstatus(true)
                                }}><Text style={styles.insidedropdown}>Female</Text></TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    setTag("Other")
                                    settoggle(false)
                                    setdropstatus(true)
                                }}><Text style={styles.insidedropdown}>Other</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>



            );
        }

    }

    console.log("toggle value:", toggle)

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>

                <View style={styles.box}>
                    <View style={{ backgroundColor: '#E6E6E6', width: 0, }}></View>
                    <InputText
                        placeholder="Full name"
                        ChangeText={(text: string) => {
                            details.fullname.current = text;
                            handleName(text);

                        }}
                        maxLength={30}

                        keyboardType="default"
                        secureText={false}
                    />
                </View>
                {errorVisibleName()}

                <View>
                    <TouchableOpacity style={styles.searchbox} onPress={() => {
                        if (toggle) { settoggle(false) }
                        else { settoggle(true) }

                        errorVisibledrop()



                    }} >
                        <Text style={{ paddingTop: 10, paddingVertical: 10, fontSize: 18, color: 'black' }} >{Tag}
                        </Text>
                        <Text style={{ fontSize: 25, marginLeft: 200, marginTop: 5, }} >+</Text>
                    </TouchableOpacity>

                </View>
                {(Tag == "Gender" && dropvisi) ? <View>
                    <Text style={{ fontSize: 14, color: 'red', marginRight: 180 }}>
                        !!! Please Select
                    </Text>
                </View> : <Text></Text>}
                {dropview()}
                 <RadioButton/>
                <View style={styles.des}></View>
                <View style={styles.des1}></View>
                <View style={styles.des2}></View>
            </SafeAreaView>
        </ScrollView>

    );
});

export default CustomerDetails;



