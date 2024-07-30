import React from 'react';
import { AuthContext } from '../context/UseContext/UseContext';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation(AuthContext);
    if (loading) {
        return <h2>Loading.....</h2>
    }
    if (user && user?.designation === 'Chief Executive Officer') {
        return children
    }
    return <Navigate to='/sign_in' state={{ from: location }} replace />
};

export default AdminRoute;