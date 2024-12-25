import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { Authcontext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_backendURL, 
    withCredentials: true,
});

const useAxiosSecure = () => {
   const { user, logOut } = useContext(Authcontext);
    useEffect(()=>{
   axiosInstance.interceptors.response.use(response=>{
 return response;
   },error=>{
    if(error.status === 401 || error.status === 403){
    logOut()
    .then(()=>{
        console.log('logout user');
    })
    .catch(error=>{
        console.log(error);
        Navigate('/login');
    })
    }
    return Promise.reject(error)
   } )
    },[])



    return axiosInstance;
};

export default useAxiosSecure;