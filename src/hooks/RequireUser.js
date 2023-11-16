import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from './useAdmin';
import Loading from '../components/Loading';
import { useAuthContext } from '../context/AuthContext';


const RequireUser = ({ children }) => {
    const { user, loading, logOut } = useAuthContext();
    const [isAdmin, isAdminLoading] = useAdmin(user);
    const location = useLocation();
    if (loading || isAdminLoading) {
        return <Loading />
    }
    if (!user || isAdmin) {
        logOut();
        return <Navigate to="/signIn" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireUser;