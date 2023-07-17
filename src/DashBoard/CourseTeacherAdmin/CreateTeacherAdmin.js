import React, { useState } from "react";

const CreateTeacherAdmin = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    country: "",
    startDate: "",
    applyLastDate: "",
    compleationDate: "",
    language: "",
    classDay: "",
    appUser: "",
    totalRs: "",
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
      title: "",
      country: "",
      startDate: "",
      applyLastDate: "",
      compleationDate: "",
      language: "",
      classDay: "",
      appUser: "",
      totalRs: "",
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
      <div
        onClick={openModal}
        className="bg-zinc-700 hover:cursor-pointer shadow-2xl rounded-lg px-4 py-6 text-center text-white"
      >
        <h2 className="font-bold lg:text-4xl md:text-4xl text-2xl mb-2">+</h2>
        <h2 className="lg:text-xl md:text-xl lg:font-semibold md:font-semibold">
          Create A New Course
        </h2>
      </div>
      <div className="max-w-md pt-2">
        {showModal && (
          <div className="fixed inset-0  flex items-center justify-center z-50">
            <div className="bg-white p-4 sm:p-8 md:p-10 lg:p-12 xl:p-14 2xl:p-16 lg:w-6/12 w-11/12  max-w-screen-lg mx-auto rounded-md  shadow-lg">
              <h2 className="text-lg font-semibold mb-4">
                Create A New Course
              </h2>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 lg:h-full h-1/3 gap-4"
              >
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
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
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
                  <label
                    htmlFor="startDate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Course Start Date
                  </label>
                  <input
                    type="text"
                    name="startDate"
                    id="startDate"
                    autoComplete="startDate"
                    required
                    value={formData.startDate}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="applyLastDate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Apply LastDate
                  </label>
                  <input
                    type="text"
                    name="applyLastDate"
                    id="applyLastDate"
                    autoComplete="applyLastDate"
                    required
                    value={formData.applyLastDate}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="compleationDate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Course Compleation Date
                  </label>
                  <input
                    type="text"
                    name="compleationDate"
                    id="compleationDate"
                    autoComplete="compleationDate"
                    value={formData.compleationDate}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="language"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Course Language
                  </label>
                  <input
                    type="text"
                    name="language"
                    id="language"
                    value={formData.language}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="classDay"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Class Start Date
                  </label>
                  <input
                    type="text"
                    name="classDay"
                    id="classDay"
                    autoComplete="classDay"
                    required
                    value={formData.classDay}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="appUser"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Application User
                  </label>
                  <input
                    type="text"
                    name="appUser"
                    id="appUser"
                    autoComplete="appUser"
                    required
                    value={formData.appUser}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="totalRs"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Total Rs
                  </label>
                  <input
                    name="totalRs"
                    id="totalRs"
                    required
                    value={formData.totalRs}
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
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CreateTeacherAdmin;
