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
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import InputText from './InputText';
import { Modal } from 'react-native';


//import DropdownList from './DropDownList';
interface CustomerProps {
  CheckScreen: any;
}

const CustomerDetails = forwardRef(({ CheckScreen }: CustomerProps, ref) => {
  const [validname, setvalidname] = useState<boolean>(true);
  const [toggle,settoggle]=useState<boolean>(false);
  const [Tag,setTag]=useState<any>("Gender");
  const [namestatus,setnamestatus]=useState<boolean>(false);
  const [dropstatus,setdropstatus]=useState<boolean>(false);
  const [dropvisi,setdropvisi]=useState<boolean>(false);
  const details = {
    fullname: useRef(''),
  };

  if(dropstatus && namestatus){
    CheckScreen(true)
  }
  else{
    CheckScreen(false);
  }

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
       setnamestatus(false)
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
          setnamestatus(false)
          break;
        }
      }
      setvalidname(true);
      setnamestatus(true)
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
  function errorVisibledrop(){
    if(Tag=="Gender"){
     setdropstatus(false);
     
    }
    else{
     setdropstatus(true);
    }


 }

  
  function errorVisible(){
     errorVisibleNaam()
     errorVisibledrop() 
    setdropvisi(true)
  }
  
  useImperativeHandle(ref, () => ({
    handleSubmit: errorVisible,
  }));

  //console.log("job type array:",dataJobtype);
  function dropview(){
  if(toggle){
 return(
<Modal 
visible={toggle}
animationType='slide'
transparent={true}

>
  <View style={{flexDirection:'column',backgroundColor:'rgba(240,240,240,0.5)',borderTopColor:'#E6E6E6',width:'100%',height:'100%',}}>
  <View>
   <View>
      <TouchableOpacity  style={styles.modalsearchbox} onPress={()=>{
      if(toggle) {settoggle(false)}
      else{settoggle(true)}

      }} >
        <Text style={{padding:15,fontSize:14}}>{Tag}
        </Text>
        <Text style={{fontSize:25, marginLeft:200,marginTop:5,}} >+</Text>
      </TouchableOpacity>
     
      </View>
  <View style={{marginTop:0}}>
<TouchableOpacity  onPress={()=>{
  setTag("Male")
  settoggle(false)
 setdropstatus(true)
}}><Text style={styles.insidedropdown}>Male</Text></TouchableOpacity>
<TouchableOpacity onPress={()=>{
  setTag("Female")
  settoggle(false)
  setdropstatus(true)
}}><Text  style={styles.insidedropdown}>Female</Text></TouchableOpacity>
<TouchableOpacity onPress={()=>{
  setTag("Other")
  settoggle(false)
  setdropstatus(true)
}}><Text style={styles.insidedropdown}>Other</Text></TouchableOpacity>
</View>
</View>
</View>
</Modal>



 );
  }

  }

  console.log("toggle value:",toggle)

  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      
      <View style={styles.box}>
        <View style={{ backgroundColor: '#E6E6E6', width: 0, }}></View>
        <InputText
          placeholder="Full name"
          ChangeText={(text: string) => {
            details.fullname.current = text;
            handleName(text);
            
          }}
          maxLength={30}
          
          keyboardType="default"
          secureText={false}
        />
      </View>
      {errorVisibleName()}
      
      <View>
      <TouchableOpacity  style={styles.searchbox} onPress={()=>{
      if(toggle) {settoggle(false)}
      else{settoggle(true)}

      errorVisibledrop()


      
      }} >
        <Text style={{paddingTop:10,paddingVertical:10,fontSize:18,color:'black'}} >{Tag}
        </Text>
        <Text style={{fontSize:25, marginLeft:200,marginTop:5,}} >+</Text>
      </TouchableOpacity>
     
      </View>
      {(Tag=="Gender" && dropvisi)?<View>
        <Text style={{fontSize:14,color:'red',marginRight:180}}>
         !!! Please Select
        </Text>
      </View>:<Text></Text>}
    { dropview()}
    
    <View style={styles.des}></View>
    <View style={styles.des1}></View>
    <View style={styles.des2}></View>
    </SafeAreaView>
    </ScrollView>
    
  );
});

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
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
  des:{
position:'relative',
padding:100,
bottom:250,
zIndex:-1,
width:100,
height:100,
borderRadius:50,
backgroundColor:'rgba(152, 164, 233, 0.4)',
marginRight:370,

  },
  des1:{
    position:'relative',
    padding:100,
    left:150,
bottom:350,
zIndex:-1,
width:100,
height:100,
borderRadius:50,
backgroundColor:'rgba(231, 178, 240, 0.28)',


  },
  des2:{
    position:'relative',
    padding:100,
    right:70,

bottom:350,
zIndex:-1,
width:100,
height:100,
borderRadius:100,
backgroundColor:'rgba(189, 252, 158, 0.28)',
  },
  box: {
    flexDirection: 'row',
    borderRadius: 15,
    borderColor: '#91A3B0',
   
    borderTopWidth:4,
    borderLeftWidth:2,
    borderRightWidth:4,
    borderBottomWidth:0.5,
    width: '90%',
    margin: 15,
    backgroundColor: '#FFFFFF',
    
  },
  searchbox:{
    flexDirection: 'row',
    borderRadius: 15,
    borderColor: '#91A3B0',
    width: '90%',
    margin: 15,
    backgroundColor: '#FFFFFF',
    justifyContent:'space-evenly',
    borderTopWidth:4,
    borderLeftWidth:2,
    borderRightWidth:4,
    borderBottomWidth:0.5,
  },
  modalsearchbox:{
    flexDirection: 'row',
    borderRadius: 15,
    borderColor: '#91A3B0',
    borderTopWidth:4,
    borderLeftWidth:2,
    borderRightWidth:4,
    borderBottomWidth:0.5,
    width: '93%',
    margin: 15,
    marginTop:282,
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
    borderTopWidth:4,
    borderLeftWidth:2,
    borderRightWidth:4,
    borderBottomWidth:0.75,
    borderRadius:15,
    padding:8,
    width:'70%',
    marginLeft:'15%',
    color:'black'
    
   
  }
});

export default CustomerDetails;



/*import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import type { PropsWithChildren } from 'react';


import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import InputText from './InputText';
import { Modal } from 'react-native';


//import DropdownList from './DropDownList';
interface CustomerProps {
  CheckScreen: any;
}

const CustomerDetails = forwardRef(({ CheckScreen }: CustomerProps, ref) => {
  const [validname, setvalidname] = useState<boolean>(true);
  const [toggle,settoggle]=useState<boolean>(false)
  const [Tag,setTag]=useState<any>("Gender");
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
<Modal 
visible={toggle}
animationType='slide'
transparent={true}

>
  <View style={{flexDirection:'column',backgroundColor:'rgba(240,240,240,0.5)',borderTopColor:'#E6E6E6',width:'100%',height:'100%',}}>
  <View>
   <View>
      <TouchableOpacity  style={styles.modalsearchbox} onPress={()=>{
      if(toggle) {settoggle(false)}
      else{settoggle(true)}
      
      }} >
        <Text style={{padding:15,fontSize:14}}>{Tag}
        </Text>
        <Text style={{fontSize:25, marginLeft:200,marginTop:5,}} >+</Text>
      </TouchableOpacity>
     
      </View>
  <View style={{marginTop:0}}>
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
</View>
</View>
</Modal>



 );
  }

  }

  console.log("toggle value:",toggle)

  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <View style={{ backgroundColor: '#E6E6E6', width: 0 }}></View>
        <InputText
          placeholder="Full name"
          ChangeText={(text: string) => {
            details.fullname.current = text;
            handleName(text);
            
          }}
          maxLength={30}
          
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
    </ScrollView>
    
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
  modalsearchbox:{
    flexDirection: 'row',
    borderRadius: 15,
    borderColor: '#91A3B0',
    borderWidth: 2,
    width: '93%',
    margin: 15,
    marginTop:282,
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
    padding:8,
    width:'70%',
    marginLeft:'15%'
   
  }
});

export default CustomerDetails;*/
