import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import singlet from '../assets/singletutor.png';
import online from '../assets/onlinetutor.png';
import group from '../assets/homrtutor.png';

const TuitionTypes = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`mt-10 mb-10 ${theme === 'dark' ? "bg-gray-900" : 'bg-[#F4F8FB]'}`}>
      <div className={`tuition-types w-full md:w-11/12 mx-auto p-6 ${theme === "dark" ? "bg-gray-900 text-white" : " bg-[#F4F8FB] text-black"}`}>
        <h2 className={`text-center text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          Tuition Types
        </h2>
        <p className={`text-center mb-8 text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          Find the Best Tuition Type which suits you most
        </p>
        <div className="tuition-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
          <div
            className={`tuition-card p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:translate-y-2 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-700"}`}
          >
            <img
              src={singlet}
              alt="Home Tutoring"
              className="w-full h-96 rounded-t-lg"
            />
            <h3 className={`text-xl font-semibold mt-4 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
              Home Tutoring
            </h3>
            <p className={`text-sm mt-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
              Looking for one-to-one classes?
            </p>
            <p className={`text-sm mt-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
              It’s a unique opportunity to learn in the home with your expected future in different categories. Everything is in favor of your need.
            </p>
          </div>

          <div
            className={`tuition-card p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:translate-y-2 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-700"}`}
          >
            <img
              src={online}
              alt="Online Tutoring"
              className="w-full h-96 rounded-t-lg"
            />
            <h3 className={`text-xl font-semibold mt-4 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
              Online Tutoring
            </h3>
            <p className={`text-sm mt-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              Are you left with any doubts?
            </p>
            <p className={`text-sm mt-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              Connect with the best tutors from anywhere and take online classes by using different tools. Make your life easier with this process.
            </p>
          </div>

          {/* Group Tutoring */}
          <div
            className={`tuition-card p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:translate-y-2 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-700"}`}
          >
            <img
              src={group}
              alt="Group Tutoring"
              className="w-full h-96 rounded-t-lg"
            />
            <h3 className={`text-xl font-semibold mt-4 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
              Group Tutoring
            </h3>
            <p className={`text-sm mt-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              Need the Competitive & Affordable experience?
            </p>
            <p className={`text-sm mt-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              A group of students can fulfill their hunger for learning within more affordable tuition fees. Get the opportunity of learning with knowledge sharing!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TuitionTypes;
