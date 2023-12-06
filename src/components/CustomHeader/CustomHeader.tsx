import React, { useRef } from 'react';
import {
    Text,
    View,
} from 'react-native';
import styles from './Style';

interface HeaderProps {
    currentScreen: any,
}


const CustomHeader: React.FC<HeaderProps> = ({ currentScreen }: HeaderProps) => {
    console.log("current screen:", currentScreen)
    return (
        <View
            style={styles.header}
        >
            <View style={styles.HeaderContainer}>
                <View style={styles.firstCircle}>
                    <Text style={{ textAlign: 'center', fontSize: 40, color: '#FFFFFF',marginTop:7 }}>1</Text>
                </View>

                <View style={(currentScreen == 2 || currentScreen == 3) ? styles.firstline : styles.EmptyFirstLine}>
                    <Text></Text>
                </View>

                <View style={(currentScreen == 2 || currentScreen == 3) ? styles.SecondCircle : styles.SecondCircleEmpty}>
                    <Text style={{textAlign: 'center', fontSize: 40, color: '#FFFFFF',marginTop:7 }}>2</Text>
                </View>

                <View style={(currentScreen == 3) ? styles.secondline : styles.EmptySecondLine}>
                    <Text></Text>
                </View>

                <View style={(currentScreen == 3) ? styles.thirdCircle : styles.EmptyThirdCircle}>
                    <Text style={{ textAlign: 'center', fontSize: 40, color: '#FFFFFF',marginTop:7 }}>3</Text>
                </View>
            </View>
            
        </View>
    );
};
export default CustomHeader;

