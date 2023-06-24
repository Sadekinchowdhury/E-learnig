import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import DigitalMarketing from "./components/topics/DigitalMarketing";
import AppDevelopment from "./components/topics/AppDevelopment";
import PrivateNotice from "./components/notices/PrivateNotice";
import PublicNotice from "./components/notices/PublicNotice";
import PrivateCourse from "./components/courses/PrivateCourse";
import PublicCourse from "./components/courses/PublicCourse";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import SignIn from "./components/Security/SignIn";
import Signup from "./components/Security/Signup";

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
                    <Route path="/privateNotice"
                        element={<PrivateNotice />}></Route>
                    <Route path="/publicNotice"
                        element={<PublicNotice />}></Route>
                    <Route path="/privateCourse"
                        element={<PrivateCourse />}></Route>
                    <Route path="/publicCourse"
                        element={<PublicCourse />}></Route>
                    <Route path="/signin" element={<SignIn />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
