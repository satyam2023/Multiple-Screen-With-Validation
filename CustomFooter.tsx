import React, { useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

interface FooterProps {
  setScreen: Function,
  currentScreen: number,
  callCustomerDetailsSubmit: Function,
  one: boolean,
  callFirstSubmit: Function;
  CheckScreen: Function;
  callSecondSubmit: Function
}


//const Footer_Height = 80;
const CustomFooter: React.FC<FooterProps> = ({ setScreen, currentScreen, callCustomerDetailsSubmit, one, callFirstSubmit, CheckScreen, callSecondSubmit }: FooterProps) => {
  function handle() {
    //console.log("current screen in footer:", currentScreen);

    callCustomerDetailsSubmit();
    callFirstSubmit();
    callSecondSubmit();
   // console.log("Boolean inside footer:", one);
    if (currentScreen == 1 && one) {
     // console.log("customercomponent")
      setScreen(2);
      CheckScreen(false);
    }
    else if (currentScreen == 2 && one) {
     // console.log("customerfirst")
      setScreen(3);
      CheckScreen(false);
    }
    else if (currentScreen == 3 && one) {
      //console.log("customerSeond")
      setScreen(1);
      CheckScreen(false);
    }






  }

  return (
    <View
      style={styles.footer}
    >
      <View style={styles.FooterContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={{ color: '#0000FF', fontSize: 20, }}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.probtn} onPress={handle}>
          <Text style={{ color: '#FFFFFF', fontSize: 20, }}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CustomFooter;
const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  FooterContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    // justifyContent: 'space-between',

  },
  btn: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: '#0000FF',
    borderRadius: 15,
  },
  probtn: {
    margin: 10,
    marginLeft: 80,
    padding: 10,
    borderWidth: 2,
    borderColor: '#0000FF',
    borderRadius: 15,
    backgroundColor: '#0000FF',
  },
});

