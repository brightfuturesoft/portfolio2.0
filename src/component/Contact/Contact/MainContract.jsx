import React from 'react';
import Contact from './Contact';
import { useEffect } from 'react';

const MainContract = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='mt-16'>
            <Contact></Contact>
        </div>
    );
};

export default MainContract;