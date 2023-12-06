import React, { useRef } from 'react';
import {
    Text,
    View,
    StatusBar,
} from 'react-native';
import styles from './Style';

interface AppopeningProps {
    fortiming: Function;
}
const Appopening: React.FC<AppopeningProps> = ({ fortiming }: AppopeningProps) => {
    return (
        <View style={{ width: '110%', height: '200%', backgroundColor: '#FFFFFF', }}>
            <StatusBar backgroundColor='#FFFFFF' />
            <Text style={{ color: 'red', textAlign: 'center', fontSize: 50, marginTop: 275, marginRight: 50, }}>Welcome!!!</Text>
            {fortiming(2000)}
            <View style={styles.des}></View>
            <View style={styles.des1}></View>
            <View style={styles.des2}></View>
            <View style={styles.des4}></View>
            <View style={styles.des5}></View>
            <View style={styles.des6}></View>
        </View>
    );
}

export default Appopening;