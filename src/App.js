import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import DigitalMarketing from "./components/topics/DigitalMarketing";
import AppDevelopment from "./components/topics/AppDevelopment";
import WebDevelopment from "./components/topics/WebDevelopment";
import PrivateNotice from "./components/notices/PrivateNotice";
import Meeting from "./components/meeting/Meeting";
import PublicNotice from "./components/notices/PublicNotice";
import PrivateCourse from "./components/courses/PrivateCourse";
import Course from "./components/courses/Course";
import PublicCourse from "./components/courses/PublicCourse";
import Certificate from "./components/certificate/Certificate";
import SignIn from "./components/Security/SignIn";
import Signup from "./components/Security/Signup";
import SeoPage from './components/topics/Seo/SeoPage'
import Footer from "./components/Footer";
import Profile from "./components/Security/Profile";
import LiveVideos from './components/live/LiveVidoes';
import LiveMeetings from "./components/live/LiveMeetings"
import Service from "./components/Service/Service";


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
 


                        element={<AppDevelopment />}>
                    </Route>

                    <Route path="/seo"
                        element={<SeoPage />}></Route>
                    <Route path="/service" element={<Service />}></Route>

                    <Route element={<AppDevelopment />}></Route>

                    <Route element={<AppDevelopment />}></Route>
                    <Route path="/seo"
                        element={<SeoPage />}></Route>
 
                        element={<AppDevelopment />}></Route>
                    <Route path="/seo"
                        element={<SeoPage />}></Route>
 
                    <Route path="/webDevelopment"
                        element={<WebDevelopment />}></Route>
                    <Route path="/course"
 

                        element={<Course />}></Route>


                    <Route element={<Course />}></Route>

 
                        element={<Course/>}></Route>
 
                    <Route path="/privateNotice"
                        element={<PrivateNotice />}></Route>
                    <Route path="/meeting"
                        element={<Meeting />}></Route>
                    <Route path="/publicNotice"
                        element={<PublicNotice />}></Route>
                    <Route path="/privateCourse"
                        element={<PrivateCourse />}></Route>
                    <Route path="/publicCourse"
                        element={<PublicCourse />}></Route>
                    <Route path="/liveVideos"
                        element={<LiveVideos />}></Route>
                    <Route path="/liveMeetings"
                        element={<LiveMeetings />}></Route>
                    <Route path="/certificate"
                        element={<Certificate />}></Route>
                    <Route path="/signin"
                        element={<SignIn />}></Route>
                    <Route path="/signup"
                        element={<Signup />}></Route>
                    <Route path="/profile"
                        element={<Profile />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter >
        </div >

    );

}

export default App;
