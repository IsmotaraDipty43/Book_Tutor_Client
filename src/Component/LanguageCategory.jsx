import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import eng from '../assets/eng.png'; 
import spanish from '../assets/spanish.png'; 
import french from '../assets/french.png'; 
import german from '../assets/german.png'; 
import mandarin from '../assets/mandarin.png'; 
import hindi from '../assets/hindi.png'; 
import arabic from '../assets/arabic.png'; 
import japanese from '../assets/japanese.png'; 
import korean from '../assets/korean.png'; 

const LanguageCategory = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleNavigate = (language) => {
    navigate(`/find-tutors/${language}`);
  };

  return (
    <section className={`language-category w-full py-12 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>
      <div className="container mx-auto px-6 sm:px-12">
        {/* Title and Description */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Explore Our Language Courses with Expert Tutors
          </h2>
          <p className="text-lg  mt-2 ${theme==='dark' ? 'text-white' : 'text-gray-700' }`}">
            Choose your preferred language and find the best tutors for you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: English */}
          <div
            className={`category-card p-4 flex items-center justify-between rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105 ${theme === "dark" ? "bg-white text-black" : "bg-[#F4F8FB] text-black"}`}
            onClick={() => handleNavigate("english")}
          >
            <img className="w-12 h-12" src={eng} alt="English" />
            <h3 className="text-lg font-semibold">English Tutors</h3>
            <FaArrowRight className="text-xl" />
          </div>

          {/* Card 2: Spanish */}
          <div
            className={`category-card p-4 flex items-center justify-between rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105 ${theme === "dark" ? "bg-white text-black" : "bg-[#F4F8FB] text-black"}`}
            onClick={() => handleNavigate("spanish")}
          >
            <img className="w-12 h-12" src={spanish} alt="Spanish" />
            <h3 className="text-lg font-semibold">Spanish Tutors</h3>
            <FaArrowRight className="text-xl" />
          </div>

          {/* Card 3: French */}
          <div
            className={`category-card p-4 flex items-center justify-between rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105 ${theme === "dark" ? "bg-white text-black" : "bg-[#F4F8FB] text-black"}`}
            onClick={() => handleNavigate("french")}
          >
            <img className="w-12 h-12" src={french} alt="French" />
            <h3 className="text-lg font-semibold">French Tutors</h3>
            <FaArrowRight className="text-xl" />
          </div>

          {/* Card 4: German */}
          <div
            className={`category-card p-4 flex items-center justify-between rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105 ${theme === "dark" ? "bg-white text-black" : "bg-[#F4F8FB] text-black"}`}
            onClick={() => handleNavigate("german")}
          >
            <img className="w-12 h-12" src={german} alt="German" />
            <h3 className="text-lg font-semibold">German Tutors</h3>
            <FaArrowRight className="text-xl" />
          </div>

          {/* Card 5: Mandarin */}
          <div
            className={`category-card p-4 flex items-center justify-between rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105 ${theme === "dark" ? "bg-white text-black" : "bg-[#F4F8FB] text-black"}`}
            onClick={() => handleNavigate("mandarin")}
          >
            <img className="w-12 h-12" src={mandarin} alt="Mandarin" />
            <h3 className="text-lg font-semibold">Mandarin Tutors</h3>
            <FaArrowRight className="text-xl" />
          </div>

          {/* Card 6: Hindi */}
          <div
            className={`category-card p-4 flex items-center justify-between rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105 ${theme === "dark" ? "bg-white text-black" : "bg-[#F4F8FB] text-black"}`}
            onClick={() => handleNavigate("hindi")}
          >
            <img className="w-12 h-12" src={hindi} alt="Hindi" />
            <h3 className="text-lg font-semibold">Hindi Tutors</h3>
            <FaArrowRight className="text-xl" />
          </div>

          {/* Card 7: Arabic */}
          <div
            className={`category-card p-4 flex items-center justify-between rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105 ${theme === "dark" ? "bg-white text-black" : "bg-[#F4F8FB] text-black"}`}
            onClick={() => handleNavigate("arabic")}
          >
            <img className="w-12 h-12" src={arabic} alt="Arabic" />
            <h3 className="text-lg font-semibold">Arabic Tutors</h3>
            <FaArrowRight className="text-xl" />
          </div>

          {/* Card 8: Japanese */}
          <div
            className={`category-card p-4 flex items-center justify-between rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105 ${theme === "dark" ? "bg-white text-black" : "bg-[#F4F8FB] text-black"}`}
            onClick={() => handleNavigate("japanese")}
          >
            <img className="w-12 h-12" src={japanese} alt="Japanese" />
            <h3 className="text-lg font-semibold">Japanese Tutors</h3>
            <FaArrowRight className="text-xl" />
          </div>

          {/* Card 9: Korean */}
          <div
            className={`category-card p-4 flex items-center justify-between rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105 ${theme === "dark" ? "bg-white text-black" : "bg-[#F4F8FB] text-black"}`}
            onClick={() => handleNavigate("korean")}
          >
            <img className="w-12 h-12" src={korean} alt="Korean" />
            <h3 className="text-lg font-semibold">Korean Tutors</h3>
            <FaArrowRight className="text-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguageCategory;
