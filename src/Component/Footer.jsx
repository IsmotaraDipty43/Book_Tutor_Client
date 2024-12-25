import React, { useContext } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { ThemeContext } from '../ThemeContext/ThemeContext';

const Footer = () => {
    const { theme } = useContext(ThemeContext);
    const isDarkMode = theme === 'dark';

    return (
        <div className={`py-12 mt-10 ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100  text-[#2D3748]'}`}>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Logo Section */}
                    <div>
                        <h2 className="text-3xl font-semibold">BookATutor</h2>
                        <p className="mt-2 text-sm">
                            Helping you find the perfect tutor, effortlessly.
                        </p>
                    </div>
                    
                    {/* Navigation Links */}
                    <div>
                        <h3 className="font-semibold text-lg">Quick Links</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#home" className={`hover:text-[#38A169] ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Home</a></li>
                            <li><a href="#about" className={`hover:text-[#38A169] ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>About Us</a></li>
                            <li><a href="#services" className={`hover:text-[#38A169] ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Services</a></li>
                            <li><a href="#contact" className={`hover:text-[#38A169] ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h3 className="font-semibold text-lg">Follow Us</h3>
                        <div className="flex space-x-4 mt-4">
                            <a href="https://facebook.com" className={`hover:text-[#38A169] ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                                <FaFacebook size={20} />
                            </a>
                            <a href="https://twitter.com" className={`hover:text-[#38A169] ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                                <FaTwitter size={20} />
                            </a>
                            <a href="https://instagram.com" className={`hover:text-[#38A169] ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                                <FaInstagram size={20} />
                            </a>
                            <a href="https://linkedin.com" className={`hover:text-[#38A169] ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Subscription Form */}
                    <div>
                        <h3 className="font-semibold text-lg">Subscribe for Updates</h3>
                        <p className="mt-2 text-sm">
                            Stay updated with the latest news, courses, and offers.
                        </p>
                        <div className="mt-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className={`p-3 w-full rounded-md border ${
                                    isDarkMode
                                        ? 'bg-gray-700 text-gray-300 border-gray-600 focus:ring-gray-500'
                                        : 'bg-white text-white border-gray-300 focus:ring-[#38A169]'
                                } focus:outline-none focus:ring-2`}
                            />
                            <button
                                className={`mt-2 w-full p-3 text-white rounded-md ${
                                    isDarkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-[#38A169] hover:bg-[#2F8B5D]'
                                }`}
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className={`text-center py-4 mt-8 ${isDarkMode ? 'bg-gray-900 text-gray-400' : 'bg-gray-300 text-[#2D3748]'}`}>
                <p className="text-sm">© 2024 BookATutor. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
