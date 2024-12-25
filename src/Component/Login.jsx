

import React, { useContext, useState } from 'react';
import { Authcontext } from '../Provider/AuthProvider';
import {  useNavigate, NavLink } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Navber from './Navber';
import Footer from './Footer';
import { ThemeContext } from '../ThemeContext/ThemeContext';


const Login = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
    const [showpass, setShowPass] = useState(false);
    const { user, userLogin, setUser, handleGoogleSignup } = useContext(Authcontext);
    const [error, setError] = useState({});
    const [email, setEmail] = useState('');  
    const navigate = useNavigate();
  
    const handleGooglesign = () => {
      handleGoogleSignup();
      navigate('/');
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();  
  
      const email = e.target.elements.email.value;  
      const password = e.target.elements.password.value;  
  
      setEmail(email);  
    
      userLogin(email, password)
        .then((result) => {
          const user = result.user;
          setUser(user);
          e.target.reset();  
  
          toast.success('Login successful! Redirecting...', {
            position: 'top-right',
            autoClose: 2000,
          });
  
          setTimeout(() => {
            navigate('/'); 
          }, 1000);
        })
        .catch((err) => {
          setError({ ...error, login: err.code });
  
          toast.error('Login failed. Please check your credentials.', {
            position: 'top-right',
            autoClose: 2000,
          });
        });
    };
    return (
      <div>
          <div className={`${theme === 'dark' ? 'bg-white' : 'bg-white'}`}>
        <Navber></Navber>

            <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-center text-black">Login in Your Account</h2>
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mt-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-2 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#2d524b] focus:outline-none"
              />
            </div>

            {/* Password Input */}
            <div className="mt-4 relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type={showpass ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Enter your password"
                className="mt-2 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#2d524b] focus:outline-none"
              />
              <label className="mt-4 text-center text-sm text-gray-600">
                Forgot password?{' '}
                <NavLink
                  className="text-blue-500 hover:underline"
                >
                  Reset it here
                </NavLink>
              </label>
              <button
                type="button"
                className="absolute bg-transparent border-none right-4 top-10"
                onClick={() => setShowPass(!showpass)}
              >
                {showpass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Google Login Button */}
            <div className="mt-6">
              <button
                onClick={handleGooglesign}
                className="w-full flex items-center justify-center px-4 py-2 bg-transparent border text-black font-medium rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    fill="#FFD700"
                    d="M43.6 20.2H42V20H24v8.5h11.3c-1.6 4.2-5.7 7.3-10.6 7.3-6.4 0-11.7-5.2-11.7-11.7 0-6.4 5.2-11.7 11.7-11.7 2.8 0 5.4 1 7.4 2.7l6.4-6.4C32.9 6.6 28.6 5 24 5 12.8 5 4 13.8 4 25s8.8 20 20 20c10 0 18.4-7.3 19.8-16.7.1-.6.2-1.3.2-2 0-1-.1-2-.4-3.1z"
                  />
                  <path
                    fill="#FF4500"
                    d="M6.9 14.1l6.6 4.8C15.5 15 19.4 13 24 13c2.8 0 5.4 1 7.4 2.7l6.4-6.4C32.9 6.6 28.6 5 24 5c-7.2 0-13.4 3.8-17.1 9.1z"
                  />
                  <path
                    fill="#32CD32"
                    d="M24 45c4.3 0 8.3-1.6 11.3-4.2l-5.4-5.4c-1.6 1.1-3.6 1.7-5.9 1.7-4.8 0-8.9-3.1-10.6-7.3l-6.6 5c3.6 6 10 10.2 17.2 10.2z"
                  />
                  <path
                    fill="#1E90FF"
                    d="M43.6 20.2H42V20H24v8.5h11.3c-1.1 2.8-3 5.1-5.4 6.7-.1.1-.2.1-.3.2l5.4 5.4c-.1 0 .1-.1.3-.2 3.3-2.3 5.9-5.7 7.2-9.7.6-1.7 1-3.6 1-5.6 0-1-.1-2-.4-3.1z"
                  />
                </svg>
                Continue with Google
              </button>
            </div>

            {/* Login Button */}
            <div className="mt-4">
              <button className="w-full px-4 py-2 bg-blue-500 text-white font-medium rounded-md">
                Login
              </button>
            </div>

            {/* Redirect to Register Page */}
            <p className="mt-4 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <NavLink to="/register" className="text-blue-500 hover:underline">
                Register here
              </NavLink>
            </p>
          </form>
        </div>
      </div>
<Footer></Footer>
        
            <ToastContainer />
            
        </div>
      </div>
    );
};

export default Login;