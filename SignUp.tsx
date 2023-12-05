import React, { useRef, useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CustomerDetails from './CustomerDetails';
import CustomHeader from './CustomHeader';
import CustomFooter from './CustomFooter';
import First from './First';
import Second from './Second'
import Appopening from './AppOpening';
import NotchScreen from './NotchScreen';




//import RepresentativeDetails from './RepresentativeDetails';

const SignUp: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [one,setone]=useState<boolean>(false);
  const [scrollability,setScrollability]=useState<boolean>(false);

  //var one = false;
  function setScreen(num: number) {
    setCurrentScreen(num);
  }



  function CheckScreen(check: boolean) {
    setone(check)
  }

  const customerDetailsRef = useRef<any>();
  const FirstRef = useRef<any>();
  const SecondRef = useRef<any>();


  function callCustomerDetailsSubmit() {
  
    if (customerDetailsRef.current && currentScreen == 1) {

      customerDetailsRef.current.handleSubmit();
    }
  }

  function callFirstSubmit() {
    
    if (FirstRef.current && currentScreen == 2) {
      // console.log("FirstInside")
      FirstRef.current.handleSubmit();
    }
  }

  function callSecondSubmit() {
    // console.log("SecondComponet")
    if (SecondRef.current && currentScreen == 3) {
      // console.log("SecondComponetinner")
      SecondRef.current.handleSubmit();
      
    }
  }
  // console.log("customerDetailsRef.current:",customerDetailsRef.current)

  function fortiming(time: number) {
    setTimeout(() => {
      setCurrentScreen(1);
    }, time);
  }
  var statusitem="";
  if(currentScreen==1){
  statusitem="First Screen"
  }
  else if(currentScreen==2){
    statusitem="Second Screen"
  }
  else if(currentScreen==3)
{statusitem="Third Screen"}

  return (
   
    <View style={styles.container}>
      {currentScreen == 0
      /* && <Appopening fortiming={fortiming}
       />*/
    }
      <View style={styles.container}>
        <NotchScreen currentScreen={currentScreen} setScreen={setScreen} statusitem={statusitem} notchcolor="#B2FFFF" />

        <CustomHeader currentScreen={currentScreen} />
        <ScrollView>
          {currentScreen == 1 && <CustomerDetails CheckScreen={CheckScreen}
            ref={customerDetailsRef} />}
          {currentScreen == 2 && <First CheckScreen={CheckScreen}
            ref={FirstRef} />}
          {currentScreen == 3 && <Second CheckScreen={CheckScreen}
            ref={SecondRef} />}
        </ScrollView>
        <CustomFooter setScreen={setScreen} currentScreen={currentScreen} callCustomerDetailsSubmit={callCustomerDetailsSubmit} one={one} CheckScreen={CheckScreen}
          callFirstSubmit={callFirstSubmit} callSecondSubmit={callSecondSubmit} />
      </View>
    </View>
    
   
   
   

  );
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFFFFF'
   
  },
});