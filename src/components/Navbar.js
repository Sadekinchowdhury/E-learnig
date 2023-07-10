import Menu from "./Menu";
import React, {useState} from "react";
import Logo from "../assects/images/OIP.jpg"

export default function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        <div>
            <div className="container-fluid py-3 bg-slate-700">
                <nav className="bg-slate-700 w-4/5 mx-auto">
                    <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 border-b border-solid border-slate-600">
                        <div className="flex-shrink-0 font-bold tracking-wider text-slate-100"><img src={Logo}
                                className="img-fluid w-16"
                                alt=""/></div>
                        <div className="hidden md:block">
                            <Menu/>
                        </div>
                        <button type="button" className="md:hidden bg-slate-700 inline-flex items-center justify-center p-2 rounded-md text-slate-100 hover:text-white hover:bg-gray-300 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                            onClick={
                                () => setShowMobileMenu(!showMobileMenu)
                        }>
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="md:hidden">
                        {
                        showMobileMenu && <Menu/>
                    } </div>
                </nav>
            </div>
        </div>
    );
}
