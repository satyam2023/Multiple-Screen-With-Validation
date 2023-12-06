import React, { useRef } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import styles from './Style';

interface FooterProps {
    setScreen: Function,
    currentScreen: number,
    callCustomerDetailsSubmit: Function,
    one: boolean,
    callFirstSubmit: Function;
    CheckScreen: Function;
    callSecondSubmit: Function
}

const CustomFooter: React.FC<FooterProps> = ({ setScreen, currentScreen, callCustomerDetailsSubmit, one, callFirstSubmit, CheckScreen, callSecondSubmit }: FooterProps) => {
    function handle() {
        callCustomerDetailsSubmit();
        callFirstSubmit();
        callSecondSubmit();

        if (currentScreen == 1 && one) {
            setScreen(2);
            CheckScreen(false);
        }
        else if (currentScreen == 2 && one) {
            setScreen(3);
            CheckScreen(false);
        }
        else if (currentScreen == 3 && one) {

            setScreen(1);
            CheckScreen(false);
        }
    }

    return (
        <View
            style={styles.footer}
        >
            <View style={styles.FooterContainer}>
                {currentScreen != 1 ? <TouchableOpacity style={styles.btn} onPress={
                    () => {
                        if (currentScreen != 1) {
                            currentScreen = currentScreen - 1;
                            setScreen(currentScreen);

                        }
                    }
                }>
                    <Text style={{ color: '#FFFFFF', fontSize: 30, fontFamily: 'cursive' }}>BACK</Text>
                </TouchableOpacity> :
                    <Text></Text>
                }

                <TouchableOpacity style={styles.probtn} onPress={handle}>
                    <Text style={{ color: '#FFFFFF', fontSize: 30, fontFamily: 'cursive' }}>PROCEED</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default CustomFooter;


