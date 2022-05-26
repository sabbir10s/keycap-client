import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const DashBoard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className='px-12 bg-base-200'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="mr-7 my-5 drawer-content bg-base-100 rounded-lg">
                    <p className='text-primary text-center text-2xl uppercase pt-4 font-bold'>Dashboard</p>
                    <Outlet />
                </div>
                <div className="drawer-side ">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="mx-7 my-5 menu p-4 overflow-y-auto w-80 bg-base-100 rounded-lg text-base-content">
                        {/* <!-- Sidebar content here --> */}

                        {
                            user ?
                                <>
                                    <li><Link to='/dashboard'>My Orders</Link></li>
                                    <li><Link to='/dashboard/review'>Give Review</Link></li>
                                </>
                                :
                                ''
                        }
                        {admin && <>
                            <li><Link to='/dashboard/user'>Users</Link></li>
                            <li><Link to='/dashboard/addNewProduct'>Add New Product</Link></li>
                        </>}
                        <li><Link to='/dashboard/profile'>Profile</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;