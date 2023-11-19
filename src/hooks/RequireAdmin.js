import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from './useAdmin';
import Loading from '../components/Loading';
import { useAuthContext } from '../context/AuthContext';


const RequireAdmin = ({ children }) => {
    const { user, logOut, loading } = useAuthContext()
    const [isAdmin, isAdminLoading] = useAdmin(user);
    const location = useLocation();
    if (loading || isAdminLoading) {
        return <Loading />
    }
    if (user && isAdmin) {
        return children
    }

    else {
        logOut();
        return <Navigate to="/signIn" state={{ from: location }} replace />
    };
};

export default RequireAdmin;