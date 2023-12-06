import React, {
    forwardRef,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';
import { StatusBar } from 'react-native';
import type { PropsWithChildren } from 'react';
import { StatusBarStyle } from 'react-native';

import {
    Alert,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
interface NotchScreensProps {
    currentScreen: number;
    notchcolor: any,
    setScreen: Function,
    statusitem: string,

}

const NotchScreen = ({ currentScreen, notchcolor, setScreen, statusitem }: NotchScreensProps) => {
    const [threebuttonhandler, setthreebuttonhandler] = useState<boolean>(true)
    function ThreebuttonHandler() {
        Alert.alert('ThreeHandler Click', 'Thank you for clicking this button!!!', [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            { text: 'OK',
            style: 'destructive', },
        ]);
    }
    return (
        <SafeAreaView style={{ backgroundColor: notchcolor, width: '100%', height: 60 }}>
            <StatusBar
                animated={true}
                backgroundColor={notchcolor}
                hidden={false}
                translucent={false}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#0039a6', fontSize: 40, marginLeft: '2%', fontWeight: 'bold', fontFamily: 'cursive' }}>{statusitem}</Text>
                {threebuttonhandler ? <TouchableOpacity onPress={() => {
                    ThreebuttonHandler()
                }}>
                    <Text style={{ color: '#0039a6', fontSize: 40, marginRight: '2%' }}>{":::"}</Text>
                </TouchableOpacity> : <Text></Text>
                }
            </View>
        </SafeAreaView>
    );
};



export default NotchScreen;