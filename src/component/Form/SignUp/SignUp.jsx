import React from 'react';

const SignUp = () => {
    return (
        <div className=''>
            <div className="relative px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 flex items-center justify-between">
                    <form action="">
                        <h2 className="">Create Account</h2>
                        <label className="ml-2 pb-2" htmlFor="">first name</label><br />
                        <input className="bg-[#80808024] border border-[#0c7dff] rounded-xl" type="text" name="fName" placeholder='enter your first name' />
                    </form>
            </div>
        </div>
    );
};

export default SignUp;