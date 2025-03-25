import React, { useEffect } from "react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Navigate, NavLink, useNavigate, useNavigation } from "react-router-dom";
import axios from "axios"
import {useDispatch,useSelector} from "react-redux"
import {MutatingDots} from "react-loader-spinner"
import { regUser, userReset } from "../../features/authencation/authSlice";
import toast from "react-hot-toast";
const Register = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {userLoading,user,userError,userSuccess,userMessage}=useSelector((state)=>state.auth)
  const [phone, setPhone] = useState();
  const [formfields, setFormFields] = useState({
    f_name: "",
    l_name: "",
    email: "",
    password: "",
    dob: "",
 
  });
useEffect(()=>{
  if(userError){
    toast.error(userMessage);

  }
  //navigation
  if(userSuccess||user){
    navigate('/')
  }
   
  dispatch(userReset());


},[userError,userSuccess,user,dispatch]);

  const {f_name,l_name,email,password,dob,}=formfields;
  const handleChange = (e)=>{
    setFormFields((prevValue)=>({
      ...prevValue,
      [e.target.name]:e.target.value,

    }));

  }
  const handleRegister= async(e)=>{
    e.preventDefault();
    const mydata={
      f_name:f_name,
      l_name:l_name,
      email:email,
      password:password,
      dob:dob,

      phone:phone,  
    };

    // dispatch(regUser(mydata));
    console.log("Sending Data:", mydata);
dispatch(regUser(mydata));

   
  }
  
  if(userLoading){
    return (
    <div style={{height:'80vh'}} className="flex items-center justify-center"> 
   <MutatingDots
  visible={true}
  height="100"
  width="100"
  color="#4fa94d"
  secondaryColor="#4fa94d"
  radius="12.5"
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  )
  }

 
  return (
    <>
      <div className=" shadow-2xl rounded-lg  bg-white w-[500px] mx-auto">
        <form className="flex flex-col  gap-1 p-3 ">
          <label>First Name</label>
          <input
            type="text"
            name="f_name" 
            value={f_name}
            onChange={handleChange}
            className="border border-gray-200 p-1 shadow focus:border-blue-500 outline-none rounded"
          />
          <label>Last name</label>
          <input
            type="text"
            name="l_name"
            value={l_name}
            onChange={handleChange}
            className="border border-gray-200 p-1 focus:border-blue-500 outline-none shadow  rounded"
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="border border-gray-200 p-1 focus:border-blue-500 outline-none shadow  rounded"
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className="border border-gray-200 p-1 focus:border-blue-500 outline-none shadow  rounded"
          />
          <label>dob</label>
          <input
            name="dob"
            value={dob}
            onChange={handleChange}
            type="date"
            className="border border-gray-200 p-1 focus:border-blue-500 outline-none shadow  rounded"
          />
          <label>Phone</label>
          <PhoneInput
            country={"pk"}
            name="phone"
            value={phone}
            onChange={(phone) => setPhone(phone)}
            containerClass="w-full"
            inputClass="!w-full !border !border-gray-200 !p-2 !shadow !rounded !pl-12"
            buttonClass="!border !border-gray-200 !shadow !focus:border-blue-500 !outline-none !rounded-l !w-12"
          />
          <p className="text-center  text-sm font-medium mt-4">
            By Clicking Agree and join or continue.you agree to the {""}
            <span className="text-blue-800"> user agreement</span>{" "}
            privacy policy and{" "}
            <span className="text-blue-800">cookie policy</span>{" "}
          </p>
          <button onClick={handleRegister} className="bg-blue-800 rounded-full text-white py-3 font-semibold">
            Agree and Join
          </button>
        </form>
        <p className="text-center text-xl mb-4">
          Already have an account ?{" "}
          <NavLink
            to="/sign-in"
            className="text-blue-800 text-xl font-semibold"
          >
            Sign-in
          </NavLink>{" "}
        </p>
      </div>
    </>
  );
};

export default Register;
