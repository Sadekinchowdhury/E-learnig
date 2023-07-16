// import React from 'react';
// import { useState } from 'react';
// const Signup = () => {

//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleNameChange = (e) => {
//         setName(e.target.value);
//     };

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     };

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setName('');
//         setEmail('');
//         setPassword('');
//     };
//     return (
//         <div style={
//             { backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzFx4r6u6Z_SJQ6PfB_vKQ0FXrLKQBmi24lg&usqp=CAU')" }
//         }
//             className='flex items-center justify-center h-screen' >
//             <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
//                 <div>
//                     <img className='w-full hover:scale-110 duration-500 transition mx-auto' src="https://i.ibb.co/QQPQXJD/image-removebg-preview-6.png" alt="" />
//                 </div>

//                 <div className="">
//                     <form className=" w-full   p-8  rounded-md"
//                         onSubmit={handleSubmit}>
//                         <h2 className="text-2xl text-center font-semibold text-white mb-6">Sign up and start learning</h2>

//                         <div className="mb-4">

//                             <input type="text" id="name" className="w-full hover:scale-110 transition duration-300 px-3 py-2 border border-gray-300 rounded" placeholder='Full Name'
//                                 value={name}
//                                 onChange={handleNameChange}
//                                 required />
//                         </div>

//                         <div className="mb-4">

//                             <input type="email" id="email" className="w-full hover:scale-110 transition duration-300  px-3 py-2 border border-gray-300 rounded" placeholder='Email'
//                                 value={email}
//                                 onChange={handleEmailChange}
//                                 required />
//                         </div>

//                         <div className="mb-6">

//                             <input type="password" id="password" className="w-full hover:scale-110 transition duration-300  px-3 py-2 border border-gray-300 rounded" placeholder="Password"
//                                 value={password}
//                                 onChange={handlePasswordChange}
//                                 required />
//                         </div>

//                         <button type="submit" className="w-full  transition duration-300 hover:scale-105 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
//                             Signup
//                         </button>

//                     </form>


//                 </div>

//             </div>

//         </div>
//     );
// };

// export default Signup;



// import React from 'react';

// const Signup = () => {
//     return (
//         <div>
//             <div className="bg-slate-700 min-h-screen flex justify-center items-center">
//                 <div className="bg-white shadow-md rounded px-10 py-8 md:max-w-md w-full">
//                     <h2 className="text-2xl font-bold text-center mb-6">Sign Up for an Online Course</h2>
//                     <form>
//                         <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//                                 Name
//                             </label>
//                             <input
//                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                 id="name"
//                                 type="text"
//                                 placeholder="Enter your name"
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                                 Email Address
//                             </label>
//                             <input
//                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                 id="email"
//                                 type="email"
//                                 placeholder="Enter your email address"
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//                                 Password
//                             </label>
//                             <input
//                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                 id="password"
//                                 type="password"
//                                 placeholder="Enter your password"
//                             />
//                         </div>
//                         <div className="mb-6">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="course">
//                                 Course
//                             </label>
//                             <select
//                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                 id="course"
//                             >
//                                 <option value="">Select a course</option>
//                                 <option value="course1">Course 1</option>
//                                 <option value="course2">Course 2</option>
//                                 <option value="course3">Course 3</option>
//                             </select>
//                         </div>
//                         <div className="flex items-center justify-between">
//                             <button
//                                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                                 type="button"
//                             >
//                                 Sign Up
//                             </button>
//                             <a
//                                 className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
//                                 href="#"
//                             >
//                                 Forgot Password?
//                             </a>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Signup;



import React, { useState } from 'react';
import { FaGoogle, FaLinkedin, FaFacebook } from 'react-icons/fa';
import PhoneInput from 'react-phone-number-input';
import Select from 'react-select';
import { countries } from 'react-select-country-list';
import 'react-phone-number-input/style.css';


const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        country: '',
        zip: '',
        address: '',
        city: '',
        phoneNumber: '',
        courseCategory: '',
        date: '',
        agreedTerms: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handlePhoneChange = (value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            phoneNumber: value,
        }));
    };

    const handleCountryChange = (selectedOption) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            country: selectedOption.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        console.log(formData); // Replace with your own logic
    };

    return (
        <div
            className="bg-slate-700 min-h-screen flex justify-center items-center">
            <div className="bg-white shadow-md rounded px-3 md:px-10 py-8 md:w-5/12 w-full">
                <h2 className="text-2xl font-bold text-center mb-6">Sign Up for an Online Course</h2>
                <form onSubmit={handleSubmit} className="">
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email address"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password (1 uppercase, 1 lowercase, and 1 number)"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
                                Country
                            </label>
                            <Select
                                options={countries}
                                className="react-select-container"
                                classNamePrefix="react-select"
                                value={formData.country}
                                onChange={handleCountryChange}
                                placeholder="Select your country"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zip">
                                ZIP Code
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="zip"
                                type="text"
                                name="zip"
                                value={formData.zip}
                                onChange={handleChange}
                                placeholder="Enter your ZIP code"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                                Address
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="address"
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Enter your address"
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                                City
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="city"
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="Enter your city"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                                Phone Number
                            </label>
                            <PhoneInput
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="phone"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handlePhoneChange}
                                placeholder="Enter your phone number"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="course">
                                Course Category
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="course"
                                type="text"
                                name="courseCategory"
                                value={formData.courseCategory}
                                onChange={handleChange}
                                placeholder="Enter your course category"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                                Date
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="date"
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="flex py-6 items-center justify-between col-span-2">
                        <div>
                            <input
                                type="checkbox"
                                id="terms"
                                className="mr-2 leading-tight"
                                name="agreedTerms"
                                checked={formData.agreedTerms}
                                onChange={handleChange}
                            />
                            <label className="text-sm" htmlFor="terms">
                                I agree to the <a href="#">Terms and Conditions</a>
                            </label>
                        </div>
                        <div className="flex items-center">
                            <a
                                href="#"
                                className="text-gray-500 text-sm mr-4 hover:text-gray-700"
                            >
                                <FaGoogle />
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 text-sm mr-4 hover:text-gray-700"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 text-sm hover:text-gray-700"
                            >
                                <FaFacebook />
                            </a>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                            type="submit"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
