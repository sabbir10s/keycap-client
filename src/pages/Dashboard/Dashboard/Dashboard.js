import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar';

const DashBoard = () => {


    return (
        <div className='flex' >
            <div className="hidden lg:block fixed inset-y-0 left-0 h-screen pt-20 bg-gray-100 w-64 p-4 overflow-y-auto">
                <Sidebar />
            </div>
            <div className="lg:ml-64 w-full">
                <Outlet />
            </div>
        </div>
    );
};

export default DashBoard;