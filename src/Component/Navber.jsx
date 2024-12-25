import { FaMoon, FaSun } from 'react-icons/fa'; // Ensure these are imported
import logo from '../assets/logo.jpg';
import { ThemeContext } from '../ThemeContext/ThemeContext'; // Ensure the correct path
import { Authcontext } from '../Provider/AuthProvider';
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navber = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { user, logOut } = useContext(Authcontext);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className={` flex justify-center items-center ${theme === 'dark' ? 'bg-gray-900' : 'bg-[#F4F8FB]'}`}>
            <div
                className={`navbar w-full md:w-11/12 mx-auto justify-center items-center ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                }`}
            >
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn mr-1 btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className={`menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow ${
                                theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-base-100 text-black'
                            }`}
                        >
                            <NavLink
                                key="home"
                                className={({ isActive }) =>
                                    `text-lg font-semibold ${
                                        isActive
                                            ? theme === 'dark'
                                                ? 'text-green-600'
                                                : 'text-green-500'
                                            : ''
                                    }`
                                }
                                to="/"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                key="findtutor"
                                className={({ isActive }) =>
                                    `text-lg font-semibold ${
                                        isActive
                                            ? theme === 'dark'
                                                ? 'text-green-600'
                                                : 'text-green-500'
                                            : ''
                                    }`
                                }
                                to="/findtutor"
                            >
                                Find Tutors
                            </NavLink>
                            {user && (
                                <>
                                    <NavLink
                                        key="addtutorials"
                                        className={({ isActive }) =>
                                            `text-lg font-semibold ${
                                                isActive
                                                    ? theme === 'dark'
                                                        ? 'text-green-600'
                                                        : 'text-green-500'
                                                    : ''
                                            }`
                                        }
                                        to="addtutorials"
                                    >
                                        Add Tutorials
                                    </NavLink>
                                    <NavLink
                                        key="booktutor"
                                        className={({ isActive }) =>
                                            `text-lg font-semibold ${
                                                isActive
                                                    ? theme === 'dark'
                                                        ? 'text-green-600'
                                                        : 'text-green-500'
                                                    : ''
                                            }`
                                        }
                                        to="booktutor"
                                    >
                                        My Booked Tutors
                                    </NavLink>
                                    <NavLink
                                        key="booktutor"
                                        className={({ isActive }) =>
                                            `text-lg font-semibold ${
                                                isActive
                                                    ? theme === 'dark'
                                                        ? 'text-green-600'
                                                        : 'text-green-500'
                                                    : ''
                                            }`
                                        }
                                        to="Mytutorials"
                                    >
                                       My Tutorials
                                    </NavLink>
                                </>
                            )}
                        </ul>
                    </div>
                    <div className="flex justify-center items-center">
                        <img
                            src={logo}
                            className="lg:w-12 w-9 h-9 lg:h-12 rounded-full"
                            alt="Logo"
                        />
                        <a
                            className={`btn btn-ghost font-bold md:text-2xl text-base ${
                                theme === 'dark' ? 'text-white' : 'text-black'
                            }`}
                        >
                            BookATutor
                        </a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-3 px-1">
                    <NavLink
                                key="home"
                                className={({ isActive }) =>
                                    `text-lg font-semibold ${
                                        isActive
                                            ? theme === 'dark'
                                                ? 'text-green-600'
                                                : 'text-green-500'
                                            : ''
                                    }`
                                }
                                to="/"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                key="findtutor"
                                className={({ isActive }) =>
                                    `text-lg font-semibold ${
                                        isActive
                                            ? theme === 'dark'
                                                ? 'text-green-600'
                                                : 'text-green-500'
                                            : ''
                                    }`
                                }
                                to="/findtutor"
                            >
                                Find Tutors
                            </NavLink>
                            {user && (
                                <>
                                    <NavLink
                                        key="addtutorials"
                                        className={({ isActive }) =>
                                            `text-lg font-semibold ${
                                                isActive
                                                    ? theme === 'dark'
                                                        ? 'text-green-600'
                                                        : 'text-green-500'
                                                    : ''
                                            }`
                                        }
                                        to="addtutorials"
                                    >
                                        Add Tutorials
                                    </NavLink>
                                    <NavLink
                                        key="booktutor"
                                        className={({ isActive }) =>
                                            `text-lg font-semibold ${
                                                isActive
                                                    ? theme === 'dark'
                                                        ? 'text-green-600'
                                                        : 'text-green-500'
                                                    : ''
                                            }`
                                        }
                                        to="booktutor"
                                    >
                                        My Booked Tutors
                                    </NavLink>
                                    <NavLink
                                        key="booktutor"
                                        className={({ isActive }) =>
                                            `text-lg font-semibold ${
                                                isActive
                                                    ? theme === 'dark'
                                                        ? 'text-green-600'
                                                        : 'text-green-500'
                                                    : ''
                                            }`
                                        }
                                        to="Mytutorials"
                                    >
                                       My Tutorials
                                    </NavLink>
                                </>
                            )}
                    </ul>
                </div>
                <div className="navbar-end md:gap-2">
                    {user ? (
                        <div className="flex md:gap-3 justify-center items-center relative">
                            <img
                                src={user?.photoURL || 'path/to/default-avatar.png'}
                                alt="User Avatar"
                                className="w-10 h-10 rounded-full cursor-pointer"
                                title={user?.displayName}
                                onClick={toggleDropdown}
                            />
                            {isDropdownVisible && (
                                <div className="absolute bg-white border rounded-lg shadow-md p-3 mt-24 w-32">
                                    <p className="text-sm text-black">{user?.displayName || 'Guest'}</p>
                                </div>
                            )}
                        </div>
                    ) : (
                        <NavLink to="/register" className="btn text-base font-bold bg-green-500 rounded-full text-white">
                            Register
                        </NavLink>
                    )}

                    {user ? (
                        <button className="btn text-base font-bold bg-green-500 rounded-full text-white" onClick={logOut}>
                            Logout
                        </button>
                    ) : (
                        <NavLink to="/login" className="btn text-base font-bold bg-green-500 rounded-full text-white">
                            Login
                        </NavLink>
                    )}

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full focus:outline-none"
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? <FaMoon size={24} /> : <FaSun size={24} />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navber;
