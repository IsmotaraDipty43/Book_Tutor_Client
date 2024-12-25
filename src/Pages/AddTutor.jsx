import React, { useState, useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { Authcontext } from '../Provider/AuthProvider';
import axios from 'axios'; 
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer } from 'react-toastify';
import useAxiosSecure from '../hooks/useAxiosSecure';

const AddTutor = () => {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(Authcontext);
  const secureAxios = useAxiosSecure(); // Use the secure axios instance
  const apiUrl = '/alltutor'; 
  const [formData, setFormData] = useState({
    username: user?.displayName || '', 
    email: user?.email || '',
    name: '',
    image: '',  
    language: '',
    price: '',
    rating: '', 
    description: '',
    review: 0,
    category: '', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedValue = name === "rating" ? parseFloat(value) : value;
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };
  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.value, 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const dataToSubmit = {
      username: formData.username,
      email: formData.email,
      name: formData.name,
      image: formData.image,
      language: formData.language,
      price: formData.price,
      rating: formData.rating,
      details: formData.description,
      review: formData.review,
      category: formData.category.toLowerCase(),
    };
  
    try {
      // Make the POST request using secureAxios
      const response = await secureAxios.post(apiUrl, dataToSubmit);
  
      // Check the response and show toast messages
      if (response.status === 200) {
        toast.success('Data submitted successfully!');
        // Reset the form after successful submission
        setFormData({
          username: user?.displayName || '',
          email: user?.email || '',
          name: '',
          image: '',
          language: '',
          price: '',
          rating: '',
          description: '',
          review: 0,
          category: '',
        });
      } else {
        toast.error('Failed to submit the data.');
      }
    } catch (error) {
      // Handle errors and show toast message
      toast.error('An error occurred: ' + error.message);
    }
  };
  

  return (
    <section className='mt-10'>
      <div className={`form-container ${theme} p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg`}>
        <h2 className="text-3xl font-bold text-center text-black mb-6">Submit Your Tutor Information</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username field (auto-filled) */}
          <div>
            <label className="block text-black text-lg font-medium">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              disabled
              className="w-full text-black p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

     

          <div>
            <label className="block text-lg font-medium text-black">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled
              className="w-full text-black p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
     {/* New name field (user input) */}
     <div>
            <label className="block text-black text-lg font-medium">Tutor Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full text-black p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-black text-lg font-medium">Image URL</label>
            <input
              type="url"
              name="image"
              onChange={handleFileChange}
              className="w-full text-black p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter image URL"
            />
          </div>

          <div>
            <label className="block text-black text-lg font-medium">Language</label>
            <input
              type="text"
              name="language"
              onChange={handleChange}
              className="w-full text-black p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Language"
            />
          </div>

          <div>
            <label className="block text-black text-lg font-medium">Price</label>
            <input
              type="text"
              name="price"
              onChange={handleChange}
              className="w-full p-3 mt-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Price"
            />
          </div>

          <div>
            <label className="block text-black text-lg font-medium">Description</label>
            <textarea
              name="description"
              onChange={handleChange}
              className="w-full p-3 mt-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Description"
            />
          </div>

          <div>
            <label className="block text-black text-lg font-medium">Review</label>
            <input
              type="text"
              name="review"
              value={formData.review}
              onChange={handleChange}
              disabled
              className="w-full text-black p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-black text-lg font-medium">Rating</label>
            <input
              type="number"
              name="rating"
              onChange={handleChange}
              className="w-full p-3 mt-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Rating"
              step="0.1" // Allows for one decimal place input
              min="0"    // Optionally, set a minimum value (e.g., 0)
            />
          </div>

          {/* Category select input */}
          <div>
            <label className="block text-lg text-black font-medium">Category</label>
            <select
              name="category"
              onChange={handleChange}
              value={formData.category}
              className="w-full p-3 mt-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Category</option>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="german">German</option>
              <option value="mandarin">Mandarin</option>
              <option value="hindi">Hindi</option>
              <option value="arabic">Arabic</option>
              <option value="japanese">Japanese</option>
              <option value="korean">Korean</option>
            </select>
          </div>

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </form>

        <ToastContainer />
      </div>
    </section>
  );
};

export default AddTutor;
