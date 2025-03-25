import React, { useEffect, useState } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { logUserIn, userReset } from '../../features/authencation/authSlice';
import toast from "react-hot-toast";
import { MutatingDots } from 'react-loader-spinner';

const Logout = () => {
   
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {userError,userLoading,userSuccess,user,userMessage}=useSelector((state)=>state.auth);


    const [forminputs,setFormInputs]=useState({
        email:'',
        password:''
    });
    const {email,password}=forminputs;
    const handleChange=(e)=>{
        setFormInputs((prevValue)=>({
            ...prevValue,
            [e.target.name]:e.target.value,
        }));


    }
    useEffect(()=>{
        if(userError){
            toast.error(userMessage);
        }

        if(userSuccess){
            toast.success(`welcome ${user.f_name}`)
        }

        if(user){
            navigate('/');

        }


        dispatch(userReset());


    },[userError,dispatch,user])


    const handleLogin=(e)=>{
        //add your login logic here
        e.preventDefault();
        const myData={
            email:email,
            password:password
        }
        dispatch(logUserIn(myData));



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
    <div className='bg-white rounded-lg w-[500px] shadow'>
        <form className=' flex flex-col gap-1 p-4'>
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
          <p className="text-center  text-sm font-medium mt-4">
            By Clicking Agree and join or continue.you agree to the {""}
            <span className="text-blue-800">  user agreement</span>{" "}
            privacy policy and{" "}
            <span className="text-blue-800">cookie policy</span>{" "}
          </p>
           <button  onClick={handleLogin} className="bg-blue-800 rounded-full text-white py-3  mt-2 font-semibold">
            Login
          </button>
        </form>
        <p className="text-center text-xl mb-4">
        new to AdminPanel ?{" "}
          <NavLink
            to="/sign-up"
            className="text-blue-800 text-xl font-semibold"
          >
            Sign-up
          </NavLink>{" "}
        </p>
    </div>
    
    </>
    
  )
}

export default Logout
