import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: null,
    gender:null,
    phonenumber:null,
    email:null,
    password: null,

    userdata:[
      {
    userName: "Satyam",
    gender:"Male",
    phonenumber:9319733487,
    email:"satyam@gmail.com",
    password: 1234,
      },
    ],
    isLog :false,
  },
  reducers: {
    setUserName: (state, action) => {
      console.log("entered username:",action.payload)
      state.userName = action.payload;
    },
    setPassword: (state, action) => {
      console.log("entered Password:",action.payload)
      state.password = action.payload;
    },
    setGender:(state,action)=>{
      console.log("entered Gender:",action.payload)
      state.gender = action.payload;
    },
    setEmail:(state,action)=>{
      console.log("entered Email:",action.payload)
      state.email = action.payload;
    },
    setPhone:(state,action)=>{
      console.log("entered Phone:",action.payload)
      state.phonenumber = action.payload;
    },
    setSignUp:(state,action)=>{
      console.log("signup status:",action.payload)
     
       state.userdata.push(action.payload) 
       console.log("first user:",state.userdata)
      },
       setLogIn:(state,action)=>{
       
         
       state.userdata.some(item=>{
        console.log("intial or previous name:",item.userName);
        console.log("Reduc Login data  action received username:",action.payload.userName);
        console.log("Reduc Login data action reciewved password:",action.payload.password);
        console.log("intial or previous password :",item.password)
        
        console.log("action payload of ")
        if((item.userName==action.payload.userName)  && (item.password==action.payload.password)){
          console.log("enter data match with registered user");
          state.isLog=true;
        }
       else{
          state.isLog=false;
        }

       })

    },
    
  },
});

export const {setUserName,setPassword,setSignUp,setLogIn,setEmail,setGender,setPhone } = userSlice.actions;
export const selectUserName = (state) => state.user.userName;

export const isLog = (state) =>  state.user.isLog;
//export const insaan = (state) => state.user.insaan;

export default userSlice.reducer;
