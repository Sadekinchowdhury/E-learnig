import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Banner} from "./components/Banner/Banner";
import Services from "./components/Service/Services";
import Statistics from "./components/Statistics/Statistics";
import ServiceSlider from "./components/Home/ServiceSlider";
import PublicStaticks from "./components/Statistics/PuplicStaticks";
import MeatingHome from "./components/Home/MeatingHome";
import HomeBanner from "./components/Home/HomeBanner";
import HomeFaq from "./components/Home/HomeFaq";
import Features from "./components/Home/Features";

export default function Home() {
    return (
        <div className="bg-slate-700">
            <HomeBanner/>
            <ServiceSlider/>
            <MeatingHome/>
            <PublicStaticks/>
            <Statistics/>
            <Services/>
            <Features/>
            <Banner/>
            <HomeFaq/>
        </div>
    );
}
