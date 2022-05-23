import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const DashBoard = () => {

    const [user] = useAuthState(auth);
    return (
        <div className='px-12 bg-base-200'>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="mr-7 mt-5 drawer-content bg-base-100 rounded-lg">
                    <p className='text-primary text-center text-2xl uppercase pt-5 font-bold'>Dashboard</p>
                    <Outlet />
                </div>
                <div class="drawer-side ">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="mx-7 mt-5 menu p-4 overflow-y-auto w-80 bg-base-100 rounded-lg text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard/profile'>Profile</Link></li>
                        {
                            user ?
                                <>
                                    <li><Link to='/dashboard'>My Orders</Link></li>
                                    <li><Link to='/dashboard/review'>Give Review</Link></li>
                                </>
                                :
                                ''
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;