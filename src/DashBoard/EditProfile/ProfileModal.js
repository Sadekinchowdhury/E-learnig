import React, { useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';


const ProfileModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        address1: '',
        address2: '',
        dateOfBirth: '',
        country: '',
        city: '',
        zipCode: '',
        education: '',
    });

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can perform any necessary validation or submit the form data
        console.log(formData);
        // Reset the form
        setFormData({
            fullName: '',
            email: '',
            phoneNumber: '',
            address1: '',
            address2: '',
            dateOfBirth: '',
            country: '',
            city: '',
            zipCode: '',
            education: '',
        });
        // Close the modal
        setShowModal(false);
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="max-w-md  mx-auto">
            <button
                onClick={openModal}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <AiFillEdit size={20} />
            </button>

            {showModal && (
                <div className="fixed inset-0  flex items-center justify-center z-50 ">
                    <div className="bg-white p-4 sm:p-8 md:p-10 lg:p-12 xl:p-14 2xl:p-16 lg:w-6/12 w-11/12  max-w-screen-lg mx-auto rounded-md  shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">Edit Form</h2>
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:h-full h-1/3 gap-4">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    id="fullName"
                                    autoComplete="name"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    autoComplete="tel"
                                    required
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="address1" className="block text-sm font-medium text-gray-700">
                                    Address 1
                                </label>
                                <input
                                    type="text"
                                    name="address1"
                                    id="address1"
                                    autoComplete="address-line1"
                                    required
                                    value={formData.address1}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="address2" className="block text-sm font-medium text-gray-700">
                                    Address 2
                                </label>
                                <input
                                    type="text"
                                    name="address2"
                                    id="address2"
                                    autoComplete="address-line2"
                                    value={formData.address2}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                                    Date of Birth
                                </label>
                                <input
                                    type="date"
                                    name="dateOfBirth"
                                    id="dateOfBirth"
                                    required
                                    value={formData.dateOfBirth}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    Country
                                </label>
                                <input
                                    type="text"
                                    name="country"
                                    id="country"
                                    autoComplete="country"
                                    required
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                    City
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    autoComplete="address-level2"
                                    required
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                                    Zip Code
                                </label>
                                <input
                                    type="text"
                                    name="zipCode"
                                    id="zipCode"
                                    autoComplete="postal-code"
                                    required
                                    value={formData.zipCode}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div className="col-span-2 flex items-center py-4 space-x-2">
                                <input
                                    type="text"
                                    name="zipCode"
                                    id="zipCode"
                                    placeholder="Add social media"
                                    autoComplete="postal-code"
                                    required
                                    value={formData.zipCode}
                                    onChange={handleChange}
                                    className="mt-1 relative p-2 block w-3/4 sm:w-[70%] border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                <select id="social-media" name="social-media" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                    <option value="facebook">Facebook</option>
                                    <option value="twitter">Twitter</option>
                                    <option value="instagram">Instagram</option>
                                    <option value="linkedin">LinkedIn</option>
                                </select>
                                <div className="bg-blue-800 py-1 px-2 text-white rounded-[5px]">
                                    <button>Add</button>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="education" className="block text-sm font-medium text-gray-700">
                                    Educational Qualification
                                </label>
                                <textarea
                                    name="education"
                                    id="education"
                                    rows="3"
                                    required
                                    value={formData.education}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                ></textarea>
                            </div>

                            <div className="col-span-2 flex justify-end">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>

    );
};

export default ProfileModal;
