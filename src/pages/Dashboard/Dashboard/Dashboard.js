import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import DashLink from '../../../hooks/DashLink';
import useAdmin from '../../../hooks/useAdmin';

const DashBoard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className='md:px-10 bg-base-200'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="lg:my-5 drawer-content bg-base-100 shadow-xl rounded-lg">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="lg:mr-5 md:my-5 menu p-4 overflow-y-auto w-80 lg:w-56 bg-base-100 shadow-xl rounded-lg text-base-content">

                        {
                            !admin && <>
                                <p className='p-3'><DashLink to='/dashboard/myOrder'>My Orders</DashLink></p>
                                <p className='p-3'><DashLink to='/dashboard/review'>Give Review</DashLink></p>
                            </>


                        }
                        {admin && <>
                            <p className='p-3'><DashLink to='/dashboard/user'>Menage Users</DashLink></p>
                            <p className='p-3'><DashLink to='/dashboard/menageOrders'>Menage Orders</DashLink></p>
                            <p className='p-3'><DashLink to='/dashboard/menageProducts'>Menage Products</DashLink></p>
                            <p className='p-3'><DashLink to='/dashboard/addNewProduct'>Add New Product</DashLink></p>

                        </>}

                        <p className='p-3'><DashLink to='/dashboard'>Profile</DashLink></p>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;