import React from 'react';
import HeadSection from '../../component/HeadSection/HeadSection/HeadSection';
import OurRequrement from '../../component/OurRequrement/OureRequrement/OurRequrement';
import Service from '../../component/Service/Service/Service';
import Offer from '../../component/Offer/Offer/Offer';
import Project from '../../component/Project/Project/Project';
import OurMission from '../../component/OurMission/OutMission/OurMission'
import OurVission from '../../component/OurVission/OurVission/OurVission'
import Team from '../../component/Team/Team/Team';
import Testimonial from '../../component/Testimonials/Testimonials/Testimonials';
import Technology from '../../component/Technology/Techonology/Technology';
import Contact from '../../component/Contact/Contact/Contact';
import Title from '../../layout/Title';
import { useEffect } from 'react';

const Home = () => {
     useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
        <div className="relative">
            <Title title="Home"/>
            <HeadSection />
            <OurRequrement />
            <Service />
              <div className="mrg-bg">
                   <Project />
                   <OurMission />
              </div>
            <Technology />
            <Offer />
            <OurVission />
            <Team></Team>
            <Testimonial />
            <Contact />

        </div>
    );
};

export default Home;