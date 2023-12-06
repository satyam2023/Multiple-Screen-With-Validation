import React, { useRef, useState, useEffect } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import styles from './Style';
import { RootStackParamList } from '../../../App'


type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
    function handleclick() {
        props.navigation.push("SignUp");
    }

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor='#324AB2'
            />
            <View>

                <View style={[styles.design]}>
                    <Text style={{ fontFamily: 'cursive', fontSize: 70, color: '#FFFFFF', fontWeight: 'bold', marginTop: 25, }}>Welcome
                        To HomeScreen</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 300, }}>
                    <TouchableOpacity style={styles.btn} onPress={() => {
                        handleclick()
                    }}>
                        <Text style={{ fontSize: 30, fontFamily: 'cursive', fontWeight: 'bold' }}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{ fontSize: 30, fontFamily: 'cursive', fontWeight: 'bold' }}>Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.des}></View>
            <View style={styles.des1}></View>
            <View style={styles.des2}></View>
        </View>

    );
}

export default HomeScreen;



