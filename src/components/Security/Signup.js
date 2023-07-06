import React from 'react';
import {useState} from 'react';
const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setName('');
        setEmail('');
        setPassword('');
    };
    return (
        <div style={
                {backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzFx4r6u6Z_SJQ6PfB_vKQ0FXrLKQBmi24lg&usqp=CAU')"}
            }
            className=''>
            <div className='grid  items-center justify-center grid-cols-1 md:grid-cols-2'>
                <div>
                    <img className='w-4/5 hover:scale-110 duration-500 transition mx-auto' src="https://i.ibb.co/QQPQXJD/image-removebg-preview-6.png" alt=""/>
                </div>

                <div className="">
                    <form className="lg:w-2/3   w-full   p-8  rounded-md"
                        onSubmit={handleSubmit}>
                        <h2 className="text-2xl text-center font-semibold text-white mb-6">Sign up and start learning</h2>

                        <div className="mb-4">

                            <input type="text" id="name" className="w-full hover:scale-110 transition duration-300 px-3 py-2 border border-gray-300 rounded" placeholder='Full Name'
                                value={name}
                                onChange={handleNameChange}
                                required/>
                        </div>

                        <div className="mb-4">

                            <input type="email" id="email" className="w-full hover:scale-110 transition duration-300  px-3 py-2 border border-gray-300 rounded" placeholder='Email'
                                value={email}
                                onChange={handleEmailChange}
                                required/>
                        </div>

                        <div className="mb-6">

                            <input type="password" id="password" className="w-full hover:scale-110 transition duration-300  px-3 py-2 border border-gray-300 rounded" placeholder="Password"
                                value={password}
                                onChange={handlePasswordChange}
                                required/>
                        </div>

                        <button type="submit" className="w-full  transition duration-300 hover:scale-105 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                            Signup
                        </button>

                    </form>
                </div>

            </div>

        </div>
    );
};

export default Signup;
