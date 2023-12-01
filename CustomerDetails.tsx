import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import type { PropsWithChildren } from 'react';


import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import InputText from './InputText';
import { Modal } from 'react-native';
import DropdownList from './DropDownList';

//import DropdownList from './DropDownList';
interface CustomerProps {
  CheckScreen: any;
}

const CustomerDetails = forwardRef(({ CheckScreen }: CustomerProps, ref) => {
  const [validname, setvalidname] = useState<boolean>(true);
  const [toggle,settoggle]=useState<boolean>(false)
  const [Tag,setTag]=useState<any>("Search By");
  const details = {
    fullname: useRef(''),
  };

  function errorVisibleName() {
   // console.log("valid name:",validname);
    if (!validname ) {
      return (
        <View style={styles.outer}>
          <Text style={styles.errormsg}>!!! Invalid name</Text>
        </View>
      );
    }
  }

 function handleName(text:string) {
    
    //console.log('handle name function called()');
    //let fullNameLength = details.fullname.current.length;
    let fullNameLength=text.length;
    if (fullNameLength === 0) {
       setvalidname(false);
       CheckScreen(false);
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
          CheckScreen(false);
          break;
        }
      }
      setvalidname(true);
      CheckScreen(true);
    }
  }

  function errorVisibleNaam(){
    let fullNameLength = details.fullname.current.length;
   // console.log("finding length:",fullNameLength);
    if(fullNameLength===0){
      errorVisibleName();
      setvalidname(false);
    }
  }

  
  

  useImperativeHandle(ref, () => ({
    handleSubmit: errorVisibleNaam,
  }));

  //console.log("job type array:",dataJobtype);
  function dropview(){
  if(toggle){
 return(

  <View style={{flexDirection:'column',backgroundColor:'#E6E6E6',borderTopColor:'#E6E6E6',width:250,}}>
<TouchableOpacity  onPress={()=>{
  setTag("Hello")
  settoggle(false)
}}><Text style={styles.insidedropdown}>HELLO</Text></TouchableOpacity>
<TouchableOpacity onPress={()=>{
  setTag("Hello123")
  settoggle(false)
}}><Text  style={styles.insidedropdown}>HELLO123</Text></TouchableOpacity>
<TouchableOpacity onPress={()=>{
  setTag("Hello1234")
  settoggle(false)
}}><Text style={styles.insidedropdown}>HELLO1234</Text></TouchableOpacity>
</View>



 );
  }

  }

  console.log("toggle value:",toggle)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <View style={{ backgroundColor: '#E6E6E6', width: 0 }}></View>
        <InputText
          placeholder="Full name"
          ChangeText={(text: string) => {
            details.fullname.current = text;
            handleName(text);
            
          }}
          
          keyboardType="default"
          secureText={false}
        />
      </View>
      {errorVisibleName()}
      <View>
      <TouchableOpacity  style={styles.searchbox} onPress={()=>{
      if(toggle) {settoggle(false)}
      else{settoggle(true)}
      
      }} >
        <Text style={{padding:15,fontSize:14}}>{Tag}
        </Text>
        <Text style={{fontSize:25, marginLeft:200,marginTop:5,}} >+</Text>
      </TouchableOpacity>
     
      </View>
    { dropview()}
    
      
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E6E6',
    marginBottom: 110,
    marginTop: 0,
    
  },
  accountBtn: {
    marginTop: 20,
    fontSize: 20,
    backgroundColor: '#0096FF',
    color: '#FFFFFF',
    padding: 8,
    borderRadius: 5,
    paddingHorizontal: 110,
  },
  errormsg: {
    color: 'red',
    marginRight: 170,
  },
  outer: {
    //  marginRight:170,
  },
  icon: {
    marginTop: 4,
    marginLeft: 4,
  },
  box: {
    flexDirection: 'row',
    borderRadius: 15,
    borderColor: '#91A3B0',
    borderWidth: 2,
    width: '90%',
    margin: 15,
    backgroundColor: '#FFFFFF',
    
  },
  searchbox:{
    flexDirection: 'row',
    borderRadius: 15,
    borderColor: '#91A3B0',
    borderWidth: 2,
    width: '90%',
    margin: 15,
    backgroundColor: '#FFFFFF',
    justifyContent:'space-evenly'
  },
  boxy: {
    flexDirection: 'row',
    borderRadius: 5,
    //borderColor: '#91A3B0',
    borderTopColor: '#91A3B0',
    borderLeftColor: '#91A3B0',
    borderRightColor: '#FFFFFF',
    borderBottomColor: '#FFFFFF',
    borderWidth: 2,
    width: '90%',
    margin: 15,
    backgroundColor: '#FFFFFF',
  },
  dropview:{
    backgroundColor:'red',
    width:'110%',
    height:'50%'
  },
  insidedropdown:{
    textAlign:'center',
    fontSize:18,
    backgroundColor:'#FFFFFF',
    marginBottom:10,
    borderWidth:1,
    borderRadius:15,
   
  }
});

export default CustomerDetails;