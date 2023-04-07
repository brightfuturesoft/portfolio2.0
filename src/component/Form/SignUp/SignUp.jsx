import React, { useContext } from 'react';
import { AuthContext } from '../../../context/UseContext/UseContext';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const {createUser, updateName} = useContext(AuthContext);

    const handleSignUp =(e)=>{
        e.preventDefault();
        const form = e.target;
        const fName = form.fName.value;
        const lName = form.lName.value;
        const name = fName +" "+lName;
        const email = form.email.value;
        const password = form.password.value;

       createUser(email, password)
      .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    });




    }
    

    return (
        <div className='form-bg py-20'>
            <div className="relative px-4 mt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 flex items-center justify-between">
                    <form onSubmit={handleSignUp} className='md:h-[400px]' >
                        <h2 className="text-5xl font-[400]">Create Account</h2>
                        <span className="">Already a member? <Link className="text-blue-500 mt-4" to="/sign_in">sign in</Link></span>
                        <div className="md:flex gap-3 mt-8">
                             <input require className="bg-[#22243eb6] md:w-auto w-full border-0 rounded-xl py-3" type="text" name="fName" placeholder='enter your first name' />
                             
                              <input required className="bg-[#22243eb6] border-0 md:w-auto w-full md:mt-0 mt-6 rounded-xl py-3" type="text" name="lName" placeholder='enter your last name' />
                        </div>
                       
                          <input required className="bg-[#22243eb6] border-0 rounded-xl py-3 w-full mt-6" type="text" name="email" placeholder='enter your email' /><br />

                            <input required className="bg-[#22243eb6] border-0 rounded-xl py-3 w-full mt-6" type="password" name="password" placeholder='enter your password' />

                            <input required type="submit" value="Sign in" className="mt-6 bg-[#2e71af] text-black font-bold w-full rounded-lg py-3 p-2 cursor-pointer" />
                    </form>
            </div>
        </div>
    );
};

export default SignUp;