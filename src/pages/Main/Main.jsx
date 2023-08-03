import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import CopyrightBar from '../shared/CopyrightBar/CopyrightBar';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import whatsapp from '../../Assctes/whatsapp-svgrepo-com.svg';

const Main = () => {
    return (
        <div className="bg-[#ffffff3e] font-sans">
            <a href="https://wa.link/jh1odb" target="_blank" rel="noopener noreferrer" className='fixed bottom-6 right-2 z-50'>
                <img className='w-16 bg-white hover:bg-teal-800 rounded-full p-2 hover:shadow-lg hover:shadow-teal-500' src={whatsapp} alt="" />
            </a>
            <div className="relative">
                <Header />
            </div>
            <Outlet />

            <Footer />
            <CopyrightBar />
        </div>
    );
};

export default Main;