import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // For dynamic routing and navigation
import axios from 'axios';
import { Authcontext } from '../Provider/AuthProvider';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import useAxiosSecure from '../hooks/useAxiosSecure';

const EditTutorial = () => {
  const { user } = useContext(Authcontext);
  const secureAxios = useAxiosSecure()
  const { theme } = useContext(ThemeContext); // Get the current theme
  const { id } = useParams(); // To get the tutorial id from the URL
  const [tutorial, setTutorial] = useState({
    name: '',
    email: '',
    image: '',
    language: '',
    price: '',
    details: '',
    review: 0, // Default review to 0 if not available
  });

  const navigate = useNavigate();
  const apiUrl = `${import.meta.env.VITE_backendURL}/alltutor`;

  // Fetch the tutorial data based on the tutorial id
  useEffect(() => {
    axios
      .get(`${apiUrl}/add/${user.email}`, { withCredentials: true })
      .then((response) => {
        console.log('API Response:', response.data); // Log the API response to check the data structure
        const tutorialToEdit = response.data.find((t) => t._id === id);
        if (tutorialToEdit) {
          setTutorial({
            name: tutorialToEdit.name,
            email: tutorialToEdit.email,
            image: tutorialToEdit.image,
            language: tutorialToEdit.language,
            price: tutorialToEdit.price,
            details: tutorialToEdit.details,
            review: tutorialToEdit.review || 0, // Ensure review is set to 0 if it's missing
          });
        }
      })
      .catch((error) => {
        console.error('Error fetching tutorial data:', error);
      });
  }, [id, user.email]);

  // Handle input change for editable fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  // Handle form submission (update tutorial)
  const handleSaveChanges = () => {
    if (user && user.email) {
      axios
        .put(`${apiUrl}/update/${id}`, {
          email: user.email,
          ...tutorial,
        })
        .then(() => {
          navigate('/mytutorials'); // Redirect back to the tutorials list page
        })
        .catch((error) => {
          console.error('Error updating tutorial:', error);
        });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Edit Tutorial</h2>

      {/* Name (Not Editable) */}
      <div>
        <label className="block mb-2">Name</label>
        <input
          type="text"
          value={tutorial.name || ''}
          readOnly
          className="text-black w-full p-2 border border-gray-300 rounded mb-4"
        />
      </div>

      {/* Email (Not Editable) */}
      <div>
        <label className="block mb-2">Email</label>
        <input
          type="text"
          value={tutorial.email || ''}
          readOnly
          className="text-black w-full p-2 border border-gray-300 rounded mb-4"
        />
      </div>

      {/* Image (Editable) */}
      <div>
        <label className="block mb-2">Image URL</label>
        <input
          type="text"
          name="image"
          value={tutorial.image || ''}
          onChange={handleInputChange}
          className="text-black w-full p-2 border border-gray-300 rounded mb-4"
        />
      </div>

      {/* Language (Editable) */}
      <div>
        <label className="block mb-2">Language</label>
        <input
          type="text"
          name="language"
          value={tutorial.language || ''}
          onChange={handleInputChange}
          className="text-black w-full p-2 border border-gray-300 rounded mb-4"
        />
      </div>

      {/* Price (Editable) */}
      <div>
        <label className="block mb-2">Price</label>
        <input
          type="text"
          name="price"
          value={tutorial.price || ''}
          onChange={handleInputChange}
          className="text-black w-full p-2 border border-gray-300 rounded mb-4"
        />
      </div>

      {/* Details (Editable) */}
      <div>
        <label className="block mb-2">Details</label>
        <textarea
          name="details"
          value={tutorial.details || ''}
          onChange={handleInputChange}
          className="text-black w-full p-2 border border-gray-300 rounded mb-4"
          rows="5" // Adjust rows for better user experience
        />
      </div>

      {/* Review (Not Editable) */}
      <div>
        <label className="block mb-2">Review</label>
        <input
          type="text"
          value={tutorial.review}
          readOnly
          className="text-black w-full p-2 border border-gray-300 rounded mb-4"
        />
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => navigate('/mytutorials')}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
        <button
          onClick={handleSaveChanges}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default EditTutorial;
