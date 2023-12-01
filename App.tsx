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




//import RepresentativeDetails from './RepresentativeDetails';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [one,setone]=useState<boolean>(false);

  //var one = false;
  function setScreen(num: number) {
    setCurrentScreen(num);
  }



  function CheckScreen(check: boolean) {
   // console.log("boolean inside APP:", check)
   // console.log("boolean inside APP one:", one)
    setone(check)

   // console.log("boolean inside APP after state update:", one);

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


  return (
    <View style={styles.container}>
      {currentScreen == 0 && <Appopening fortiming={fortiming} />}
      <View style={styles.container}>

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

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});