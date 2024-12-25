import React, { useContext } from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/tutorAnimation.json'; 
import { ThemeContext } from '../ThemeContext/ThemeContext';

const Banner = () => {
       const { theme} = useContext(ThemeContext);
  
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData, 
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice', 
        },
    };

    return (
        <section className= {` ${theme === 'dark' ? 'bg-white py-16 flex justify-center items-center' : 'bg-white py-16 flex justify-center items-center'}`}>
            <div className="flex flex-col lg:flex-row items-center w-full md:w-11/12 lg:w-10/12 mx-auto px-4">
               
                <div className="text-center lg:text-left">
                    <h1 className={`text-4xl md:text-5xl font-bold  mb-4 text-[#4A5568]`}>
                        Find the Perfect Tutor for You
                    </h1>
                    <p className="text-lg md:text-xl text-[#2D3748] mb-6">
                        Our platform connects you with experienced tutors to help you excel in your studies.
                    </p>
                  <div>
                  <a
                        href="#findtutor"
                        className="btn text-lg font-semibold bg-green-500 rounded-full text-white py-2 px-6 hover:bg-green-600 transition duration-300"
                    >
                        Start Learning Today
                    </a>
                   
                  </div>
                </div>

                {/* Right Side: Lottie Animation */}
                <div className="mt-10 lg:mt-0 lg:ml-12">
                    <Lottie options={defaultOptions} height={400} width={400} />
                </div>
            </div>
        </section>
    );
};

export default Banner;
