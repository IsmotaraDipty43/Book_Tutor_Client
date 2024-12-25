import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import student1 from '../assets/female.jpg'
import student2 from '../assets/female2.jpg'
import student3 from '../assets/male1.jpg'

const Reviews = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`mt-10 mb-10 ${theme === 'dark' ? "bg-gray-900" : 'bg-[#F4F8FB]'}`}>
      <div className={`reviews w-full md:w-11/12 mx-auto p-6 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-[#F4F8FB] text-black"}`}>
        <h2 className={`text-center text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          What Our Students Say
        </h2>
        <p className={`text-center mb-8 text-xl ${theme === 'dark' ? 'text-white' : 'text-[#7C7D87]'}`}>
          Hear from our satisfied students who have experienced the best learning journey.
        </p>
        <div className="review-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Review Card 1 */}
          <div className={`review-card p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:translate-y-2 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-[#4A4A68]"}`}>
            <img
              src={student1}
              alt="Reviewer"
              className="w-24 h-24 rounded-full object-cover mx-auto"
            />
            <p className={`text-md mt-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              "The one-on-one tutoring really helped me grasp difficult concepts. I feel much more confident in my studies now!"
            </p>
            <h3 className={`text-2xl font-semibold mt-4 ${theme === 'dark' ? 'text-white' : 'text-[#4A4A68]'}`}>Alice Johnson</h3>
            <p className={`text-md mt-2 ${theme === 'dark' ? 'text-white' : 'text-[#7C7D87]'}`}>Home Tutoring</p>
          </div>

          {/* Review Card 2 */}
          <div className={`review-card p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:translate-y-2 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-[#4A4A68]"}`}>
            <img
              src={student2}
              alt="Reviewer"
              className="w-24 h-24 rounded-full object-cover mx-auto"
            />
            <p className={`text-md mt-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              "Online tutoring has made it so easy for me to learn from the best tutors without leaving my home. Highly recommend!"
            </p>
            <h3 className={`text-2xl font-semibold mt-4 ${theme === 'dark' ? 'text-white' : 'text-[#4A4A68]'}`}>Emma Williams</h3>
            <p className={`text-md mt-2 ${theme === 'dark' ? 'text-white' : 'text-[#7C7D87]'}`}>Online Tutoring</p>
          </div>

          {/* Review Card 3 */}
          <div className={`review-card p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:translate-y-2 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-[#4A4A68]"}`}>
            <img
              src={student3}
              alt="Reviewer"
              className="w-24 h-24 rounded-full object-cover mx-auto"
            />
            <p className={`text-md mt-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              "Group tutoring sessions have been a fantastic way to collaborate with others and learn together in a more affordable way."
            </p>
            <h3 className={`text-2xl font-semibold mt-4 ${theme === 'dark' ? 'text-white' : 'text-[#4A4A68]'}`}>Liam Green</h3>
            <p className={`text-md mt-2 ${theme === 'dark' ? 'text-white' : 'text-[#7C7D87]'}`}>Group Tutoring</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
