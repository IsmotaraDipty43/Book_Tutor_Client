import React from 'react';
import Navber from '../Component/Navber';
import Footer from '../Component/Footer';
import male from '../assets/english.jpg';
import male2 from '../assets/math.jpg';
import mfeale from '../assets/femaletecher.jpg';

const AboutUs = () => {
    return (
        <>
            <div className="p-8 mt-24">
                {/* About Us Section */}
                <section className="text-center  w-full md:w-10/12 mx-auto mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        We are a team of dedicated educators passionate about helping students succeed. Our mission is to provide personalized learning
                        experiences that cater to the individual needs of every student. Whether you're looking for extra support in a challenging subject or
                        aiming to enhance your knowledge, we're here to help you achieve your academic goals.
                    </p>
                    <p className="text-lg text-gray-700">
                        Our tutors are experienced professionals committed to making learning engaging and effective. We believe that every student deserves
                        the opportunity to reach their full potential, and we are here to guide you on that journey.
                    </p>
                </section>

                {/* Team Members Section */}
                <section className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
                    <div className="flex justify-center space-x-8">
                        <div className="max-w-xs text-center">
                            <img src={male} alt="Team Member" className="rounded-full h-56 w-56 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
                            <p className="text-gray-600">Math Tutor</p>
                        </div>
                        <div className="max-w-xs text-center">
                            <img src={mfeale} alt="Team Member" className="rounded-full h-56 w-56 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
                            <p className="text-gray-600">Science Tutor</p>
                        </div>
                        <div className="max-w-xs text-center">
                            <img src={male2} alt="Team Member" className="rounded-full h-56 w-56 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">Mike Johnson</h3>
                            <p className="text-gray-600">English Tutor</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutUs;
