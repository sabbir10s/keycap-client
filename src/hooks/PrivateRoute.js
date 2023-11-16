import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';
import { useAuthContext } from '../context/AuthContext';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuthContext()

    const location = useLocation();
    if (loading) {
        return <Loading />
    }
    if (user) {
        return children;
    }

    return <Navigate to="/signIn" state={{ from: location }} replace />;
};

export default PrivateRoute;