import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import SecondaryCustomLink from '../../../hooks/SecondaryCustomLink';
import useAdmin from '../../../hooks/useAdmin';

const DashBoard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className='bg-base-200'>
            <div className="drawer drawer-mobile container mx-auto">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="lg:my-5 drawer-content bg-base-100 shadow-xl rounded-lg">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="lg:mr-5 lg:my-5 menu p-4 overflow-y-auto w-56 bg-base-100 shadow-xl rounded-lg text-base-content">

                        {
                            !admin && <>
                                <p className='p-3'><SecondaryCustomLink to='/dashboard'>My Orders</SecondaryCustomLink></p>
                                <p className='p-3'><SecondaryCustomLink to='/dashboard/review'>Give Review</SecondaryCustomLink></p>
                            </>


                        }
                        {admin && <>
                            <p className='p-3'><SecondaryCustomLink to='/dashboard'>Add New Product</SecondaryCustomLink></p>
                            <p className='p-3'><SecondaryCustomLink to='/dashboard/mangeProducts'>Mange Products</SecondaryCustomLink></p>
                            <p className='p-3'><SecondaryCustomLink to='/dashboard/mangeOrders'>Mange Orders</SecondaryCustomLink></p>
                            <p className='p-3'><SecondaryCustomLink to='/dashboard/mangeUsers'>Mange Users</SecondaryCustomLink></p>

                        </>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;