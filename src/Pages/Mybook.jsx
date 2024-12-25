import React, { useEffect, useState, useContext } from "react";
import { Authcontext } from "../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../Component/Loading";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyBook = () => {
  const { user } = useContext(Authcontext); 
  const [bookedTutors, setBookedTutors] = useState([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useContext(ThemeContext);
  const secureAxios = useAxiosSecure(); 

 
  useEffect(() => {
    const fetchBookedTutors = async () => {
      if (!user) return;
      try {
        const response = await secureAxios.get(`/booktutor/${user.email}`);

       
        const tutorsWithDetails = [];
        for (const tutor of response.data) {
          try {
            const tutorDetailsResponse = await secureAxios.get(`/alltutor/tutor/${tutor.tutorId}`);
            tutorsWithDetails.push({ ...tutor, ...tutorDetailsResponse.data });
          } catch (error) {
            console.error("Error fetching tutor details:", error);
          }
        }

        setBookedTutors(tutorsWithDetails);
      } catch (error) {
        console.error("Error fetching booked tutors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookedTutors();
  }, [user, secureAxios]);

  // Handle Review Button Click
  const handleReview = async (tutorId) => {
    try {
   
      const response = await secureAxios.patch(`/reviewtutor/${tutorId}`);
  
      if (response.data.success) {
      
        setBookedTutors((prev) =>
          prev.map((tutor) =>
            tutor._id === tutorId ? { ...tutor, review: tutor.review + 1 } : tutor
          )
        );
        toast.success("Review added successfully!");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error adding review:", error);
      toast.error("Failed to add review. Please try again.");
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="p-6 w-full md:w-10/12 mx-auto">
      <ToastContainer />
      <h2
        className={`text-3xl font-semibold text-center mb-6 ${
          theme === "dark" ? "text-white" : "text-gray-800"
        }`}
      >
        My Booked Tutors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookedTutors.map((tutor, ind) => (
          <div key={ind} className="border rounded-lg shadow-md p-4 bg-white">
            <img
              src={tutor.image}
              alt={tutor.name}
              className="w-full h-80 rounded-md"
            />
            <h3 className="text-lg font-bold text-gray-800 mt-2">{tutor.name}</h3>
            <p className="text-gray-600">Language: {tutor.language}</p>
            <p className="text-gray-600">Price: {tutor.price}</p>
            <p className="text-gray-600">Category: {tutor.category}</p>
            <p className="text-gray-600">Details: {tutor.details}</p>
            <p className="text-gray-600">Reviews: {tutor.review || 0}</p>
            <p className="text-gray-600">Rating: {tutor.ratting || 0}</p>
            <button
              onClick={() => handleReview(tutor._id)} // Use _id for matching
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              disabled={tutor.review >= 5} // Disable after reaching the review limit (e.g., 5)
            >
              Add Review
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBook;
