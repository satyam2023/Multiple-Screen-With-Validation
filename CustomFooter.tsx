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
      {currentScreen!=1?<TouchableOpacity style={styles.btn} onPress={
        ()=>{
          if(currentScreen!=1){
            currentScreen=currentScreen-1;
            setScreen(currentScreen);

        }
        }
      }>
          <Text style={{ color: '#FFFFFF', fontSize: 30, fontFamily:'cursive'}}>BACK</Text>
        </TouchableOpacity>:
        <Text></Text>
        }
       
        <TouchableOpacity style={styles.probtn} onPress={handle}>
          <Text style={{ color: '#FFFFFF', fontSize: 30, fontFamily:'cursive'  }}>PROCEED</Text>
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
    backgroundColor: '#B2FFFF',
  },
  FooterContainer: {
    backgroundColor: '#B2FFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  btn: {
    margin: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.1,
    shadowRadius: 16.00,
    elevation: 24,
    borderColor: '#002244',
    borderRadius: 15,
    backgroundColor: '#00BFFF',
  },
  probtn: {
    margin: 10,
    textAlign:'center',
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.1,
    shadowRadius: 16.00,
    
    elevation: 25,

    borderRadius: 15,
    backgroundColor: '#00BFFF',
  },
});

