import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import { BiMenuAltLeft } from 'react-icons/bi';
import CustomLink from '../hooks/CustomLink';
import DashLink from '../hooks/DashLink';
import { MdLogout, MdOutlineArrowDropDown } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = ({ children }) => {
    const { pathname } = useLocation()
    const [user] = useAuthState(auth);


    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                {/* <!-- Navbar --> */}
                <div className=" sticky top-0 z-50 w-full  bg-base-100 border-b border-primary shadow-lg  text-primary">
                    <div className='navbar max-w-[1400px] mx-auto lg:px-20 px-2'>
                        {
                            pathname.includes('dashboard') && (<label for="my-drawer-2" className=" drawer-button lg:hidden">
                                <span className='text-3xl'><BiMenuAltLeft /></span>
                            </label>)
                        }
                        <div className="flex-1 text-2xl font-bold justify-center lg:justify-start"><Link to='/'>NEXIQ</Link></div>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-7 h-7 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>

                        <div className="flex-none hidden lg:block">

                            <ul className="menu menu-horizontal gap-x-5 flex items-center ">
                                <p><CustomLink to='/home' >Home</CustomLink></p>
                                <p><CustomLink to='/blogs' >Blogs</CustomLink></p>
                                {
                                    user && <p> <CustomLink to='/dashboard'>Dashboard</CustomLink></p>

                                }

                                {
                                    user ?
                                        <p className="dropdown dropdown-click  dropdown-end">
                                            <label tabIndex="0">
                                                <div className='flex items-center cursor-pointer gap-2'>
                                                    <div className='text-primary text-lg border border-primary w-8 h-8 rounded-full flex justify-center items-center'>{user?.displayName.slice(0, 1)} </div>
                                                    <div className='flex justify-center items-center'>
                                                        <span>Account</span> <MdOutlineArrowDropDown />
                                                    </div>
                                                </div>
                                            </label>
                                            <div tabIndex="0" className="dropdown-content menu shadow-lg bg-base-100 border rounded-box w-52 mt-2">
                                                {
                                                    user ?
                                                        <div className='flex flex-col gap-5'>
                                                            <DashLink to='/profile'>
                                                                <div className='hover:text-error pt-5 px-5  flex items-center gap-2' ><FaUserAlt /> <span>Account Settings</span></div>
                                                            </DashLink>
                                                            <button className='hover:text-error py-5 px-5 border-t border-base-200 flex items-center gap-2 text-left' onClick={() => signOut(auth)}>
                                                                <MdLogout /> <span>Sign out</span>
                                                            </button>


                                                        </div>
                                                        :
                                                        <></>
                                                }
                                            </div>
                                        </p>
                                        :
                                        <>
                                            <p> <CustomLink to='/SignIn'>Sign in</CustomLink></p>
                                        </>
                                }

                            </ul>
                        </div>
                    </div>
                </div>

                {/* <!-- Page content here --> */}

                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-5 overflow-y-auto flex flex-col gap-5 w-64 bg-base-100">

                    <p><DashLink to='/home' >Home</DashLink></p>
                    <p><DashLink to='/blogs' >Blogs</DashLink></p>
                    {
                        user && <p> <DashLink to='/dashboard'>Dashboard</DashLink></p>

                    }

                    {
                        user ?
                            <p className="dropdown dropdown-click  dropdown-end">
                                <label tabIndex="0">
                                    <div className='flex items-center cursor-pointer gap-2'>
                                        <div className='text-primary text-lg border border-primary w-8 h-8 rounded-full flex justify-center items-center'>{user?.displayName.slice(0, 1)} </div>
                                        <div className='flex justify-center items-center'>
                                            <span>Account</span> <MdOutlineArrowDropDown />
                                        </div>
                                    </div>
                                </label>
                                <div tabIndex="0" className="dropdown-content menu shadow-lg bg-base-100 border rounded-box w-52 mt-2">
                                    {
                                        user ?
                                            <div className='flex flex-col gap-5'>
                                                <DashLink to='/profile'>
                                                    <div className='hover:text-error pt-5 px-5  flex items-center gap-2' ><FaUserAlt /> <span>Account Settings</span></div>
                                                </DashLink>
                                                <button className='hover:text-error py-5 px-5 border-t border-base-200 flex items-center gap-2 text-left' onClick={() => signOut(auth)}>
                                                    <MdLogout /> <span>Sign out</span>
                                                </button>


                                            </div>
                                            :
                                            <></>
                                    }
                                </div>
                            </p>
                            :
                            <>
                                <p> <CustomLink to='/SignIn'>Sign in</CustomLink></p>
                            </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Navbar;