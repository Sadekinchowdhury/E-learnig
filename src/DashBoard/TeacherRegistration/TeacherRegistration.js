import React, { useState } from 'react';

const TeacherRegistrationForm = () => {
    const [name, setName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [motherName, setMotherName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [idCardFront, setIdCardFront] = useState(null);
    const [idCardBack, setIdCardBack] = useState(null);
    const [qualificationDoc, setQualificationDoc] = useState(null);
    const [subject, setSubject] = useState('');
    const [language, setLanguage] = useState('');
    const [courseExperienceDoc, setCourseExperienceDoc] = useState(null);
    const [numCourses, setNumCourses] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [country, setCountry] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [otherDescription, setOtherDescription] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [gmail, setGmail] = useState('');
    const [socialMediaProfile, setSocialMediaProfile] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        // You can send the form data to the server or perform any other actions
    };

    return (
        <div className="">

            <div className='py-6 text-2xl font-medium text-center text-white'>
                <h1>Teacher Registration Form</h1>
            </div>
            <div className='w-full md:w-9/12 mx-auto'>
                <form onSubmit={handleSubmit}>
                    <div className="m-3">
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                            <div className="mb-4">
                                <label className='text-white' htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full border rounded py-2 px-3"
                                />
                            </div>
                            <div className="mb-4">
                                <label className='text-white' htmlFor="fatherName">Father's Name</label>
                                <input
                                    type="text"
                                    id="fatherName"
                                    value={fatherName}
                                    onChange={(e) => setFatherName(e.target.value)}
                                    required
                                    className="w-full border rounded py-2 px-3"
                                />
                            </div>
                            <div className="mb-4">
                                <label className='text-white' htmlFor="motherName">Mother's Name</label>
                                <input
                                    type="text"
                                    id="motherName"
                                    value={motherName}
                                    onChange={(e) => setMotherName(e.target.value)}
                                    required
                                    className="w-full border rounded py-2 px-3"
                                />
                            </div>
                            <div className="mb-4">
                                <label className='text-white' htmlFor="dateOfBirth">Date of Birth</label>
                                <input
                                    type="date"
                                    id="dateOfBirth"
                                    value={dateOfBirth}
                                    onChange={(e) => setDateOfBirth(e.target.value)}
                                    required
                                    className="w-full border rounded py-2 px-3"
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 py-6 '>
                            <div className="mb-4 bg-slate-300 font-semibold shadow-2xl p-3">
                                <label className='text-black' htmlFor="idCardFront">National Identity Card (Front)</label>
                                <input
                                    type="file"
                                    id="idCardFront"
                                    onChange={(e) => setIdCardFront(e.target.files[0])}
                                    required
                                />
                            </div>
                            <div className="mb-4 bg-slate-300 font-semibold shadow-2xl p-3">
                                <label className='text-black' htmlFor="idCardBack">National Identity Card (Back)</label>
                                <input
                                    type="file"
                                    id="idCardBack"
                                    onChange={(e) => setIdCardBack(e.target.files[0])}
                                    required
                                />
                            </div>
                            <div className="mb-4 bg-slate-300 font-semibold shadow-2xl p-3">
                                <label className='text-black' htmlFor="qualificationDoc">Latest Educational Qualification Documents (PDF)</label>
                                <input
                                    type="file"
                                    id="qualificationDoc"
                                    onChange={(e) => setQualificationDoc(e.target.files[0])}
                                    required
                                />
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 py-6'>

                            <div className="mb-4 ">
                                <label className='text-white' htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                                    className="w-full border rounded py-2 px-3"
                                />
                            </div>
                            <div className="mb-4">
                                <label className='text-white' htmlFor="language">Language</label>
                                <input
                                    type="text"
                                    id="language"
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                    required
                                    className="w-full border rounded py-2 px-3"
                                />
                            </div>
                            <div className="mb-4 bg-slate-300 font-semibold shadow-2xl p-3">
                                <label className='text-black' htmlFor="courseExperienceDoc">Course Experience Document</label>
                                <input
                                    type="file"
                                    id="courseExperienceDoc"
                                    onChange={(e) => setCourseExperienceDoc(e.target.files[0])}
                                    required
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 py-6 items-center'>
                            <div className="mb-4 col-span-1">
                                <label className='text-white' htmlFor="numCourses">Number of Courses</label>
                                <input
                                    type="number"
                                    id="numCourses"
                                    value={numCourses}
                                    onChange={(e) => setNumCourses(e.target.value)}
                                    required
                                    className="w-full border rounded py-2 px-3"
                                />
                            </div>
                            <div className="mb-4 col-span-2">
                                <label className='text-white' htmlFor="courseDescription">Course Description</label>
                                <textarea
                                    id="courseDescription"
                                    value={courseDescription}
                                    onChange={(e) => setCourseDescription(e.target.value)}
                                    required
                                    className="w-full border rounded py-2 px-3"
                                ></textarea>
                            </div>
                        </div>
                        <div className="mb-4 w-full md:w-4/12">
                            <label className='text-white' htmlFor="country">Country</label>
                            <input
                                type="text"
                                id="country"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                required
                                className="w-full border rounded py-2 px-3"
                            />
                        </div>
                        <div className="mb-4">
                            <label className='text-white' htmlFor="addressLine1">Street Address</label>
                            <input
                                type="text"
                                id="addressLine1"
                                value={addressLine1}
                                onChange={(e) => setAddressLine1(e.target.value)}
                                required
                                className="w-full border rounded py-2 px-3"
                            />
                        </div>
                        <div className="mb-4">
                            <label className='text-white' htmlFor="addressLine2">Address Line 2</label>
                            <input
                                type="text"
                                id="addressLine2"
                                value={addressLine2}
                                onChange={(e) => setAddressLine2(e.target.value)}
                                className="w-full border rounded py-2 px-3"
                            />
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 py-6 items-center'>
                            <div className="mb-4">
                                <label className='text-white' htmlFor="city">City</label>
                                <input
                                    type="text"
                                    id="city"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    required
                                    className="w-full border rounded py-2 px-3"
                                />
                            </div>
                            <div className="mb-4">
                                <label className='text-white' htmlFor="state">State/Province</label>
                                <input
                                    type="text"
                                    id="state"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    required
                                    className="w-full border rounded py-2 px-3"
                                />
                            </div>
                            <div className="mb-4">
                                <label className='text-white' htmlFor="postalCode">ZIP/Postal Code</label>
                                <input
                                    type="text"
                                    id="postalCode"
                                    value={postalCode}
                                    onChange={(e) => setPostalCode(e.target.value)}
                                    required
                                    className="w-full border rounded py-2 px-3"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className='text-white' htmlFor="otherDescription">Other Descriptions</label>
                            <textarea
                                id="otherDescription"
                                value={otherDescription}
                                onChange={(e) => setOtherDescription(e.target.value)}
                                className="w-full border rounded py-2 px-3"
                            ></textarea>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 py-6 items-center'>
                            <div className="mb-4">
                                <label className='text-white' htmlFor="contactNo">Contact No</label>
                                <input
                                    type="tel"
                                    id="contactNo"
                                    value={contactNo}
                                    onChange={(e) => setContactNo(e.target.value)}
                                    required
                                    className="w-full border rounded py-2 px-3"
                                />
                            </div>
                            <div className="mb-4">
                                <label className='text-white' htmlFor="gmail">Gmail</label>
                                <input
                                    type="email"
                                    id="gmail"
                                    value={gmail}
                                    onChange={(e) => setGmail(e.target.value)}
                                    required
                                    className="w-full border rounded py-2 px-3"
                                />
                            </div>
                            <div className="mb-4">
                                <label className='text-white' htmlFor="socialMediaProfile">Social Media Profile Links</label>
                                <input
                                    type="text"
                                    id="socialMediaProfile"
                                    value={socialMediaProfile}
                                    onChange={(e) => setSocialMediaProfile(e.target.value)}
                                    required
                                    className="w-full border rounded py-2 px-3"
                                />
                            </div>
                        </div>
                    </div>
                    {/* <div className='flex justify-center items-center p-6'>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                            Submit
                        </button>
                    </div> */}
                    <div className="flex items-center justify-center my-8 ">
                        <button className=' font-semibold shadow-2xl border-white border-[1px] text-orange-400 px-6 hover:border-[2px] hover:border-blue-700 transition duration-700 hover:bg-slate-800 hover:text-white py-2 rounded'>

                            Submit Form</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default TeacherRegistrationForm;
