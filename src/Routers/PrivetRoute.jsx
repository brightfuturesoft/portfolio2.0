import React, { useContext } from 'react';
import { AuthContext } from '../context/UseContext/UseContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation(AuthContext);
    if (loading) {
        return <h2>Loading.....</h2>
    }
    if(user && user.uid){
        return children
    }
    return <Navigate to='/sign_in' state={{from : location}} replace/>
};

export default PrivetRoute;