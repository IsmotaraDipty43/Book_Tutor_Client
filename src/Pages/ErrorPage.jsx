import React from 'react';
import { Link } from 'react-router-dom';
import error from '../assets/error.jpg'
const ErrorPage = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="p-8 bg-white shadow-lg rounded-lg max-w-sm w-full justify-center items-center">
        <img src={error} alt="" />
        <Link to="/" className="mt-6 inline-block text-blue-500 hover:text-blue-700 font-semibold">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
