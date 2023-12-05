import { SelectList } from 'react-native-dropdown-select-list'

import React, { useState} from 'react';
import { TextInput,StyleSheet,View ,Text} from "react-native";

const DropdownComponent= ({submitted,data,value}) => {
  //console.log("data",data);
  //console.log("value:",value)

  const [selected, setSelected] = useState("");

  function errorshow(){
    if(selected==-1 && submitted){
      return(
        <Text style={styles.errormsg}>
          !!! Please Select your job type
        </Text>
      )
    }
  }
  
  
  
  

  return(
<View style={styles.TextInputs}>
    <SelectList 
      setSelected={setSelected} 
      data={data} 
      search={false} 
      boxStyles={{borderWidth:0,}} 
      defaultOption={{ key:'-1', value:value }}  
      style={styles.view}
    />
    {
      errorshow()
    }
    </View>
  )

};
const styles = StyleSheet.create({
 
  TextInputs:{
  
   width:'87%',
   marginBottom:8,
  
  },
  errormsg:{
    color:'red',
    textAlign:'left',
    backgroundColor:'#E6E6E6'
  
   },
   
 });
export default DropdownComponent;