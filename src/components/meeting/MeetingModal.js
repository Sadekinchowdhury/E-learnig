import React, { useState } from 'react';

const Modal = () => {
    const [showModal, setShowModal] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [counter, setCounter] = useState(0);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        // Replace the secret code and ID check with your own logic
        if (username === 'YourUsername' && password === 'YourPassword') {
            setCounter(counter + 1);
        }
    };

    return (
        <div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setShowModal(true)}
            >
                Open Modal
            </button>

            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span
                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <div
                            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-headline"
                        >
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">

                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3
                                            className="text-lg leading-6 font-medium text-gray-900"
                                            id="modal-headline"
                                        >
                                            Login
                                        </h3>
                                        <div className="mt-2">
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="username"
                                                    className="block text-gray-700 text-sm font-bold mb-2"
                                                >
                                                    Username
                                                </label>
                                                <input
                                                    type="text"
                                                    id="username"
                                                    value={username}
                                                    onChange={handleUsernameChange}
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="password"
                                                    className="block text-gray-700 text-sm font-bold mb-2"
                                                >
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    id="password"
                                                    value={password}
                                                    onChange={handlePasswordChange}
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                />
                                            </div>
                                            <div className="flex justify-center">
                                                <button
                                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                    onClick={handleLogin}
                                                >
                                                    Login
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-500 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {counter > 0 && <p>Counter: {counter}</p>}
        </div>
    );
};

export default Modal;
