import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import DigitalMarketing from "./components/topics/DigitalMarketing";
import AppDevelopment from "./components/topics/AppDevelopment";
import Contact from "./components/Contact/Contact";
import Meeting from "./components/meeting/Meeting";
import Notices from "./components/notices/Notices";
import WebDevelopment from "./components/topics/WebDevelopment";
import Course from "./components/courses/Course";
import PublicCourse from "./components/courses/PublicCourse";
import Certificate from "./components/certificate/Certificate";
import CertificateForm from "./components/certificate/CertificateForm";
import SignIn from "./components/Security/SignIn";
import Signup from "./components/Security/Signup";
import SeoPage from "./components/topics/Seo/SeoPage";
import Footer from "./components/Footer";
import Profile from "./components/Security/Profile";
import JoinTheLiveClass from "./components/live/JoinTheLiveClass";
import JoinTheLiveMeeting from "./components/live/JoinTheLiveMeeting";
import LiveMeeting from "./components/live/LiveMeeting";
import LiveVideo from "./components/live/LiveVideo";
import Service from "./components/Service/Service";
import Live from "./components/live/Live";
import Lives from "./components/live/Lives";
import CourseDetails from "./components/courses/CourseDetails";
import ProfileDashboard from "./DashBoard/ProfileDashboard/ProfileDashboard";
import Setting from "./DashBoard/Setting/Setting";
import LiveMettings from "./DashBoard/LiveMettings/LiveMettings";
import LiveCourse from "./DashBoard/LiveCourse/LiveCourse";
import TermsAndConditions from "./components/usefull-links/TermsAndConditions";
import Help from "./components/usefull-links/Help";
import AboutUs from "./components/usefull-links/AboutUs";
import PrivacyAndPolicy from "./components/usefull-links/PrivacyAndPolicy";
import ReturnPolicy from "./components/usefull-links/ReturnPolicy";
import Freelancing from "./components/usefull-links/Freelancing";
import Speaking from "./components/usefull-links/Speaking";
import ProfileEdit from "./DashBoard/EditProfile/ProfileEdit";


function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route index
                        element={<Home />} />
                    <Route path="/digitalMarketing"
                        element={<DigitalMarketing />}></Route>
                    <Route path="/appDevelopment"
                        element={<AppDevelopment />}></Route>
                    <Route path="/seo"
                        element={<SeoPage />}></Route>
                    <Route path="/service"
                        element={<Service />}></Route>
                    <Route element={<AppDevelopment />}></Route>
                    <Route element={<AppDevelopment />}></Route>
                    <Route path="/seo"
                        element={<SeoPage />}></Route>
                    <Route path="/seo"
                        element={<SeoPage />}></Route>
                    <Route path="/webDevelopment"
                        element={<WebDevelopment />}></Route>
                    <Route path="/course"
                        element={<Course />}></Route>
                    <Route element={<Course />}></Route>
                    <Route element={<Course />}></Route>
                    <Route path="/course/:id"
                        element={<CourseDetails />}></Route>
                    <Route element={<Course />}></Route>
                    <Route path="/notices"
                        element={<Notices />}></Route>
                    <Route path="/meeting"
                        element={<Meeting />}></Route>
                    <Route path="/notices"
                        element={<Notices />}></Route>
                    <Route path="/contact"
                        element={<Contact />}></Route>
                    <Route path="/meeting"
                        element={<Meeting />}></Route>
                    <Route path="/publicCourse"
                        element={<PublicCourse />}></Route>
                    <Route path="/joinTheLiveClass"
                        element={<JoinTheLiveClass />}></Route>
                    <Route path="/joinTheLiveMeeting"
                        element={<JoinTheLiveMeeting />}></Route>
                    <Route path="/certificate"
                        element={<Certificate />}></Route>
                    <Route path="/certificateForm"
                        element={<CertificateForm />}></Route>
                    <Route path="/live"
                        element={<Live />}></Route>
                    <Route path="/liveVideo"
                        element={<LiveVideo />}></Route>
                    <Route path="/lives"
                        element={<Lives />}></Route>
                    <Route path="/LiveMeeting"
                        element={<LiveMeeting />}></Route>
                    <Route path="/signin"
                        element={<SignIn />}></Route>
                    <Route path="/signup"
                        element={<Signup />}></Route>
                    <Route path="/help"
                        element={<Help />}></Route>
                    <Route path="/termsAndConditions"
                        element={<TermsAndConditions />}></Route>
                    <Route path="/aboutUs"
                        element={<AboutUs />}></Route>
                    <Route path="/privacyAndPolicy"
                        element={<PrivacyAndPolicy />}></Route>
                    <Route path="/returnPolicy"
                        element={<ReturnPolicy />}></Route>
                    <Route path="/freelancing"
                        element={<Freelancing />}></Route>
                    <Route path="/speaking"
                        element={<Speaking />}></Route>

                    <Route path="/profile"
                        element={<Profile />}>
                        <Route path="/profile/profileEdit"
                            element={<ProfileEdit />} />
                        <Route path="/profile/dashboard"
                            element={<ProfileEdit />} />
                        <Route path="/profile/setting"
                            element={<Setting />} />
                        <Route path="/profile/meeting"
                            element={<LiveMettings />} />
                        <Route path="/profile/livecourse"
                            element={<LiveCourse />} />

                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>

    );

}

export default App;
