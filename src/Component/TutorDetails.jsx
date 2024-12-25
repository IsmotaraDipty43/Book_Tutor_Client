import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Authcontext } from "../Provider/AuthProvider";
import Loading from "./Loading";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "../ThemeContext/ThemeContext"; 
import useAxiosSecure from "../hooks/useAxiosSecure";

const TutorDetails = () => {
  const { id: tutorId } = useParams(); 
  const [tutor, setTutor] = useState(null); 
  const [loading,setloading] = useState(true); 
  const { user } = useContext(Authcontext); 
  const { theme } = useContext(ThemeContext); 
  const apiUrl = `/alltutor/tutor/${tutorId}`;
  const secureAxios = useAxiosSecure()

  useEffect(() => {
    const fetchTutorDetails = async () => {
      try {
        const response = await secureAxios.get(apiUrl);
        setTutor(response.data); // Set fetched data to state
      } catch (error) {
        console.error("Error fetching tutor details:", error);
      } finally {
       setloading(false); // Stop loading spinner
      }
    };

    fetchTutorDetails();
  }, [apiUrl]);

  // Handle tutor booking
  const handleBookTutor = async () => {
    const bookingData = {
      tutorId: tutor._id,
      image: tutor.image,
      language: tutor.language,
      price: tutor.price,
      tutorEmail: tutor.email,
      email: user.email, // Email from logged-in user
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_backendURL}/booktutor`, 
        bookingData,
        {withCredentials: true}
      );

      if (response.status === 201) {
        toast.success("Tutor booked successfully!");
      }
    } catch (error) {
      toast.error("Failed to book the tutor. Please try again.");
    }
  };

  if (loading) return <Loading />; // Show loading spinner while fetching data

  

  // Define dynamic class for text color based on theme
  const textClass = theme === 'dark' ? 'text-white' : 'text-gray-800';

  // Render fetched tutor details
  return (
    <div className={`p-6 w-full md:w-10/12 mx-auto ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <h2 className={`text-3xl font-semibold text-center mb-6 ${textClass}`}>
        Tutor Details
      </h2>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <img
          src={tutor.image}
          alt={tutor.name}
          className="w-full md:w-1/2 rounded-lg shadow-md"
        />
        <div className={`w-full md:w-1/2 ${textClass}`}>
          <h3 className="text-xl font-bold">{tutor.name}</h3>
          <p className="mt-2">{tutor.details}</p>
          <p className="mt-2">
            Language: <span className="font-bold">{tutor.language}</span>
          </p>
          <p className="mt-2">
            Price: <span className="font-bold">{tutor.price}</span>
          </p>
          <p className="mt-2">
            Rating: <span className="font-bold">{tutor.rating}</span>
          </p>
          <p className="mt-2">
            Reviews: <span className="font-bold">{tutor.review}</span>
          </p>
          <p className="mt-2">
            Category: <span className="font-bold">{tutor.category}</span>
          </p>
          <p className="mt-2">
            Email: <span className="font-bold">{tutor.email}</span>
          </p>
          <button
            onClick={handleBookTutor}
            className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg font-bold"
          >
            Book Tutor
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default TutorDetails;
