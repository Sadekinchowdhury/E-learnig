import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const CreateNewMeeting = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    courseId: "",
    name: "",
    country: "",
    title: "",
    meetingId: "",
    secretCode: "",
    userName: "",
    password: "",
    onlineStats: "",
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
      courseId: "",
      name: "",
      country: "",
      title: "",
      meetingId: "",
      secretCode: "",
      userName: "",
      password: "",
      onlineStats: "",
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
    <>
      <span
        onClick={openModal}
        className="py-4 px-8 flex font-bold text-xm lg:text-sm text-white"
      >
        <AiOutlinePlus className='font-bold' size={20} />
        Create New Account
      </span>

      {showModal && (
        <div className="max-w-md pt-2">
          <div className="fixed inset-0  flex items-center justify-center z-50">
            <div className="bg-white p-4 sm:p-8 md:p-10 lg:p-12 xl:p-14 2xl:p-16 lg:w-6/12 w-11/12  max-w-screen-lg mx-auto rounded-md  shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Create New Account</h2>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 lg:h-full h-1/3 gap-4"
              >
                <div>
                  <label
                    htmlFor="courseId"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Course ID
                  </label>
                  <input
                    type="text"
                    name="courseId"
                    id="courseId"
                    autoComplete="name"
                    required
                    value={formData.courseId}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="Name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="Name"
                    id="Name"
                    autoComplete="Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    id="phoneNumber"
                    autoComplete="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    autoComplete="title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="meetingId"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Meeting ID
                  </label>
                  <input
                    type="text"
                    name="meetingId"
                    id="meetingId"
                    autoComplete="meetingId"
                    value={formData.meetingId}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="secretCode"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Secret Code
                  </label>
                  <input
                    type="text"
                    name="secretCode"
                    id="secretCode"
                    value={formData.secretCode}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="userName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    User Name
                  </label>
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    autoComplete="userName"
                    required
                    value={formData.userName}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="zipCode"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="onlineStats"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Online Status
                  </label>
                  <input
                    name="onlineStats"
                    id="onlineStats"
                    required
                    value={formData.onlineStats}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  ></input>
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
        </div>
      )}
    </>
  );
};

export default CreateNewMeeting;
