import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FindTutor = () => {
  const [tutors, setTutors] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTutors = async () => {
      setLoading(true); 

     
      const apiUrl = search
        ? `${import.meta.env.VITE_backendURL}/alltutor?search=${search}` 
        : `${import.meta.env.VITE_backendURL}/alltutor`; 

      try {
        const response = await axios.get(apiUrl);
        setTutors(response.data);
        setError('');
      } catch (error) {
        setTutors([]);
        if (error.response?.status === 404) {
          setError('No tutors found for this search term.');
        } else {
          setError('Something went wrong. Please try again later.');
        }
      } finally {
        setLoading(false); 
      }
    };

    fetchTutors();

  }, [search]);

  return (
    <div className="p-6 w-full md:w-10/12 mx-auto">
      {/* Search Bar */}
      <div className="flex justify-center">
        <div className="flex items-center border w-full p-5 mb-10 md:w-8/12 lg:w-5/12 border-gray-300 rounded-lg px-4 py-2">
          <input
            type="text"
            placeholder="Search for tutors"
            className="w-full ml-2 px-2 py-1 text-gray-700 focus:outline-none"
            onChange={(e) => setSearch(e.target.value)} 
          />
          <button className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-lg hover:bg-blue-600">
            Search
          </button>
        </div>
      </div>

      {/* Tutors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {error ? (
          <p className="text-center text-gray-500">{error}</p> 
        ) : loading ? (
          <p className="text-center text-gray-500">Loading tutors...</p> 
        ) : tutors.length === 0 ? (
          <p className="text-center text-gray-500">No tutors found.</p> 
        ) : (
          tutors.map((tutor, ind) => (
            <div
              key={ind}
              className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <div className="relative">
                <img
                  src={tutor.image}
                  alt={tutor.name}
                  className="w-full h-48 sm:h-56 lg:h-64 rounded-lg mb-4"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-40 rounded-lg"></div>
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-800">{tutor.name}</h3>
                <p className="text-gray-500 mt-1">{tutor.language}</p>
                <p className="text-gray-600 mt-2">{tutor.details.slice(0, 100)}...</p>
                <div className="flex items-center mt-3">
                  <p className="text-red-400 font-bold">Rating: {tutor.ratting}</p>
                </div>
                <div className="flex items-center mt-3">
                  <p className="text-black font-bold">Review: {tutor.review}</p>
                </div>
                <Link to={`/tutor/${tutor._id}`}>
                  <button className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg font-bold transition duration-300 ease-in-out">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FindTutor;
