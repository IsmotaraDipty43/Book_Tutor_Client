import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";

const StatsSection = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`stats-section w-full py-12 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-700"
      }`}
    >
      <div className="container mx-auto px-6 sm:px-12">
    
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Why Choose Us?
          </h2>
          <p className={`text-lg  mt-2 ${theme === "dark" ? " text-white" : " text-gray-800"}`}>
            Discover why thousands of users trust our platform for learning and teaching.  
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Tutors */}
          <div className="stat-card text-center flex-1 min-w-[150px] px-4 mb-6 sm:mb-0">
            <h3 className="text-3xl font-bold">32,000+</h3>
            <p className={`text-sm mt-2 ${theme === "dark" ? " text-white" : " text-gray-800"}`}>Experienced Tutors</p>
          </div>

          {/* Reviews */}
          <div className="stat-card text-center flex-1 min-w-[150px] px-4 mb-6 sm:mb-0">
            <h3 className="text-3xl font-bold">300,000+</h3>
            <p className={`text-sm mt-2 ${theme === "dark" ? " text-white" : " text-gray-800"}`}>5-Star Reviews</p>
          </div>

          {/* Languages */}
          <div className="stat-card text-center flex-1 min-w-[150px] px-4 mb-6 sm:mb-0">
            <h3 className="text-3xl font-bold">120+</h3>
            <p className={`text-sm mt-2 ${theme === "dark" ? " text-white" : " text-gray-800"}`}>Languages Taught</p>
          </div>

          {/* Users */}
          <div className="stat-card text-center flex-1 min-w-[150px] px-4 mb-6 sm:mb-0">
            <h3 className="text-3xl font-bold">180,000+</h3>
            <p className={`text-sm mt-2 ${theme === "dark" ? " text-white" : " text-gray-800"}`}>Users Worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
