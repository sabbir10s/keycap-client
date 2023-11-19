import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from './useAdmin';
import Loading from '../components/Loading';
import { useAuthContext } from '../context/AuthContext';


const RequireUser = ({ children }) => {
    const { user, loading, logOut } = useAuthContext();
    const [isAdmin, isAdminLoading] = useAdmin(user);
    console.log(loading);
    const location = useLocation();
    if (user && !isAdmin) {
        return children
    }
    if (loading || isAdminLoading) {
        return <Loading />
    }

    else {
        logOut();
        return <Navigate to="/signIn" state={{ from: location }} replace />
    };
};

export default RequireUser;