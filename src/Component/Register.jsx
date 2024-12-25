

import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../Provider/AuthProvider';
import { useContext, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Navber from './Navber';
import Footer from './Footer';
import { ThemeContext } from '../ThemeContext/ThemeContext';


const Register = () => {
      const { theme, toggleTheme } = useContext(ThemeContext);
    const { createnewUser, setUser, updateUserProfile,handleGoogleSignup , auth } = useContext(Authcontext); 
    const [error, setError] = useState({});
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();


   



    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const pass = form.password.value;

    //   console.log(name,email,pass,photo);
        if (name.length < 5) {
            setError({ ...error, name: "Name must be at least 5 characters" });
            toast.error("Name must be at least 5 characters");
            return;
        }

        if (!email || !photo || !pass) {
            setError({ ...error, general: "All fields are required" });
            toast.error("All fields are required");
            return;
        }

   
        const hasUppercase = /[A-Z]/.test(pass);
        const hasLowercase = /[a-z]/.test(pass);
        const hasValidLength = pass.length >= 6;

        if (!hasUppercase || !hasLowercase || !hasValidLength) {
            setError({
                ...error,
                password: "Password must have at least 6 characters, an uppercase letter, and a lowercase letter",
            });
            toast.error("Invalid password format");
            return;
        }
 
        toast.success("Registration successful!");
   
        form.reset();
       


 
        createnewUser(email, pass)
            .then((result) => {
                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        toast.success("User successfully registered!");
                        navigate('/');
                    })
                    .catch((error) => {
                        // console.error("Error updating profile:", error);
                        toast.error("Error updating profile");
                    });
            })
            .catch((error) => {
                // console.error("Error creating user:", error);
                toast.error("Error creating user: " + error.message);
            });
    };

    return (
        <div className={`${theme === 'dark' ? 'bg-white' : 'bg-white'}`}>
            <Navber></Navber>
             

            <div className='min-h-screen justify-center items-center flex '>
                <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                    <h2 className='text-2xl text-black mb-5  font-semibold text-center'>Register your account</h2>
                    <form className="card-body shadow-xl border " onSubmit={handleSubmit}>
                      
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="input input-bordered"
                                required
                            />
                            {error.name && (
                                <label className="label text-xs text-red-500">
                                    {error.name}
                                </label>
                            )}
                        </div>

                        {/* Photo Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="Photo URL"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="mt-4 relative">
    <label htmlFor="password" className="block text-black text-sm font-medium ">
        Password
    </label>
    <input
        type={showPass ? "text" : "password"}
        id="password"
        name="password"
        placeholder="Enter your password"
        className="mt-2 block w-full px-4 py-2 border rounded-md text-black focus:ring-2 focus:ring-[#2d524b] focus:outline-none"
    />
    <button
        type="button"
        className="absolute bg-transparent border-none right-4 top-10"
        onClick={() => setShowPass(!showPass)}
    >
        {showPass ? <FaEyeSlash className='text-black'></FaEyeSlash> : <FaEye className='text-black'></FaEye>}
    </button>
</div>



                        {/* Submit Button */}
                        <div className="form-control mt-6">
                            <button className="btn bg-black text-white" type="submit">
                                Register
                            </button>
                        </div>
                    </form>

                    {/* Redirect to Login */}
                    <p className='text-center font-semibold text-black mt-5'>
                        Already Have An Account?{' '}
                        <Link className='text-red-500' to='/login'>
                            Login
                        </Link>
                    </p>
                </div>
            </div>
<Footer></Footer>
            <ToastContainer autoClose={4000} />
        </div>
    );
};

export default Register;
