import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaUser, FaLanguage, FaDollarSign, FaStar} from "react-icons/fa";
import Loading from "./Loading";
import { ThemeContext } from "../ThemeContext/ThemeContext";

const FindTutorByCategory = () => {
      const { theme } = useContext(ThemeContext);
  const { category } = useParams(); // Get category from URL params
  const [tutors, setTutors] = useState([]); // Store tutors data in state
  const [loading,setloading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_backendURL}/alltutor/${category}`;
    const fetchTutors = async () => {
      try {
        const response = await axios.get(apiUrl);
        setTutors(response.data); // Use the structured data format
      } catch (err) {
        setError("Error fetching tutors");
      } finally {
       setloading(false);
      }
    };
    fetchTutors();
  }, [category]);

  if (loading) {
    return <Loading></Loading>
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="text-red-500 text-lg">{error}</div>
      </div>
    );
  }

  

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center">
   <h2 className={`text-center text-4xl font-bold  mb-6 mt-10 ${theme==='dark' ? 'text-white' : 'text-gray-800' }`}>
    Discover Top Tutors for {category.charAt(0).toUpperCase() + category.slice(1)}
</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-6">
        {tutors.map((tutor, index) => (
          <div
            key={index}
            className="tutor-card rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image */}
            <img
              src={tutor.image}
              alt={tutor.name}
              className="w-full h-80 rounded-t-lg"
            />
            {/* Content */}
            <div className="p-6">
              {/* Name */}
              <div className="flex items-center text-gray-800 text-xl font-bold mb-3">
                <FaUser className="mr-2 text-blue-500" />
                {tutor.name}
              </div>
              {/* Language */}
              <div className="flex items-center text-gray-600 text-md mb-2">
                <FaLanguage className="mr-2 text-green-500" />
                {tutor.language}
              </div>
              {/* Price */}
              <div className="flex items-center text-blue-500 text-lg font-medium mb-2">
                <FaDollarSign className="mr-2 text-red-500" />
                {tutor.price}
              </div>
              {/* Review */}
              <div className="flex items-center text-red-500 text-md mb-2">
                <FaStar className="mr-2 text-red-500" />
                {` ${tutor.ratting.toFixed(1)}`}
              </div>
              {/* Details */}
              <div className="flex items-start text-gray-700 text-md mb-4">
               
                {tutor.details}
              </div>
              {/* Button */}
              <button className="w-full bg-green-500 text-white text-lg py-2 rounded-lg hover:bg-blue-600 transition duration-200">
                Book a Lesson Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindTutorByCategory;
