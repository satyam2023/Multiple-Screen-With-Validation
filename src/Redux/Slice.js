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
       state.userdata.push(action.payload) },
    setLogIn:(state,action)=>{
         
       state.userdata.some(item=>{
        console.log(item.userName);
        if((item.userName===action.payload.userName)  && (item.password===action.payload.password)){
          console.log("true");
          state.isLog=true;
        }

       })

    },
    
  },
});

export const {setUserName,setPassword,setSignUp,setLogIn,setEmail,setGender,setPhone } = userSlice.actions;
export const selectUserName = (state) => state.user.userName;

export const isLog = () => ( state.user.isLog)
//export const insaan = (state) => state.user.insaan;

export default userSlice.reducer;
