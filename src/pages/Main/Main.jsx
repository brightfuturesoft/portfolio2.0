import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import CopyrightBar from '../shared/CopyrightBar/CopyrightBar';

const Main = () => {
    return (
        <div className="bg-[#ffffff3e]">
           <div className="red">
                <Header/>
           </div>
              <Outlet></Outlet>
            <Footer />
            <CopyrightBar />
        </div>
    );
}; 

export default Main;