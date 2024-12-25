import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';  // For redirection
import axios from 'axios';
import { Authcontext } from '../Provider/AuthProvider';
import useAxiosSecure from '../hooks/useAxiosSecure';

const MyTutorials = () => {
  const { user } = useContext(Authcontext);
  const [tutorials, setTutorials] = useState([]);
  const navigate = useNavigate();
  const secureAxios = useAxiosSecure(); // Use the secure axios instance
  const apiUrl = `/alltutor`;

  // Fetch tutorials based on the logged-in user's email
  useEffect(() => {
    if (user && user.email) {
      secureAxios.get(`${apiUrl}/add/${user.email}`,{withCredentials:true})
        .then((response) => {
          setTutorials(response.data);
        })
        .catch((error) => {
          console.error('Error fetching tutorials:', error);
        });
    }
  }, [user,secureAxios]);

  // Handle tutorial deletion
  const handleDelete = (id) => {
    if (user && user.email) {
      secureAxios.delete(`${apiUrl}/delete/${id}`)
        .then(() => {
          setTutorials(tutorials.filter(tutorial => tutorial._id !== id));
        })
        .catch((error) => {
          console.error('Error deleting tutorial:', error);
        });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">My Tutorials</h2>
      {/* Responsive table wrapper */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left border-collapse min-w-max">
          <thead>
            <tr>
              <th className="border text-xs md:text-lg md:px-4 py-2">Name</th>
              <th className="border text-xs md:text-lg md:px-4 py-2">Image</th>
              <th className="border text-xs md:text-lg md:px-4 py-2">Language</th>
              <th className="border text-xs md:text-lg md:px-4 py-2">Price</th>
              <th className="border text-xs hidden md:table-cell  md:text-lg md:px-4 py-">Details</th>
              <th className="border text-xs md:text-lg md:px-4 py-2">Review</th>
              <th className="border text-xs md:text-lg md:px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tutorials.map(tutorial => (
              <tr key={tutorial._id}>
                <td className="border text-xs md:text-lg md:px-4 py-2">{tutorial.name}</td>
                <td className="border text-xs md:text-lg md:px-4 py-2">
                  <img src={tutorial.image} alt={tutorial.name} className="md:w-20 w-8 h-8 md:h-20 object-cover" />
                </td>
                <td className="border text-xs md:text-lg md:px-4 py-2">{tutorial.language}</td>
                <td className="border text-xs md:text-lg md:px-4 py-2">{tutorial.price}</td>
                <td className="border text-xs hidden md:table-cell md:text-lg md:px-4 py-">{tutorial.details}</td>
                <td className="border text-xs md:text-lg md:px-4 py-2">{tutorial.review}</td>
                <td className="border text-xs md:text-lg md:px-4 py-2 flex flex-col md:table-cell">
  <div className="flex flex-col md:space-x-4 md:space-y-0 md:flex-row md:justify-center">
    <button 
      onClick={() => handleDelete(tutorial._id)} 
      className="bg-red-500 text-white px-4 py-2 rounded mb-2 md:mb-0 md:mr-2">
      Delete
    </button>
    <button 
      onClick={() => navigate(`/edit-tutorial/${tutorial._id}`)} 
      className="bg-blue-500 text-white px-4 py-2 rounded">
      Update
    </button>
  </div>
</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTutorials;
