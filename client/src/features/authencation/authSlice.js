import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, logoutUser, registerUser, uploadUserImage } from "./authService";

const isuserPresent=JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: isuserPresent ? isuserPresent:null,
  userLoading: false,
  userSuccess: false,
  userError: false,
  userMessage: "",
};


export const regUser = createAsyncThunk('auth/reg-user', async (userData, thunkAPI) => {
  try {
      const response = await registerUser(userData);
      console.log("Server Response:", response);  // Debugging
      return response;
  } catch (error) {
      console.error("API Error:", error.response?.data || error.message);  // Debugging
      return thunkAPI.rejectWithValue(error.response?.data?.error || "An error occurred");
  }
});

export const loguserOut=createAsyncThunk('auth/log-out',async(_,thunkAPI)=>{
  try {
   return await logoutUser();
    
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
})
 export const logUserIn=createAsyncThunk('auth/log-in',async(userData,thunkAPI)=>{
  try {
    return await loginUser(userData);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.error);
  }
 })
//image
 export const userImageUpload=createAsyncThunk('imageUpload',async(ImageData,thunkAPI)=>{

  try {
    return await uploadUserImage(ImageData);

  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.error);
  }
 })

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userReset:(state)=>{
      state.userLoading= false;
      state.userSuccess= false;
      state.userError= false;
      state.userMessage='';
    }, 
  },
  //panding state,fulfil state,error state
  extraReducers: (builder) => {
    builder
    .addCase(regUser.pending,(state,action)=>{
        state.userLoading=true;

    })
    .addCase(regUser.rejected,(state,action)=>{
        state.userError=true;
        state.userLoading=false;
        state.user=null;
        state.userMessage=action.payload;
    })
    .addCase(regUser.fulfilled,(state,action)=>{
        state.userLoading=false;
        state.userSuccess=true;
        state.user=action.payload;
    })

    .addCase(loguserOut.pending,(state,action)=>{
      state.userLoading=true;
    })
    .addCase(loguserOut.rejected,(state,action)=>{
      state.userError=true;
      state.userLoading=false;
      state.userMessage=action.payload;
    })
    .addCase(loguserOut.fulfilled,(state,action)=>{
      state.userLoading=false;
      state.userSuccess=true;
      state.user=null;
    })

    .addCase(logUserIn.pending,(state,action)=>{
      state.userLoading=true;
    })
    .addCase(logUserIn.rejected,(state,action)=>{
      state.userLoading=false;
      state.userError=true;
      state.userMessage=action.payload;
    })
    .addCase(logUserIn.fulfilled,(state,action)=>{
      state.userLoading=false;
      
      state.user=action.payload;
      state.userError=false;


    })
.addCase(userImageUpload.pending,(state,action)=>{
state.userLoading=true;

})
.addCase(userImageUpload.rejected,(state,action)=>{
  state.userLoading=false;
  state.userError=true;
  state.userMessage=action.payload;
})


.addCase(userImageUpload.fulfilled, (state, action) => {
  state.userLoading = false;
  state.userSuccess = true;
  state.user = action.payload.user; // Store full user object
  localStorage.setItem('user',JSON.stringify(action.payload.user));
})



  },
});
 export const { userReset } = authSlice.actions;
export default authSlice.reducer;
 