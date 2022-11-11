import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import CustomLink from '../hooks/CustomLink';
import DashLink from '../hooks/DashLink';
import { MdLogout, MdOutlineArrowDropDown } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import { BiMenuAltRight, BiMenuAltLeft } from 'react-icons/bi';

const Navbar = ({ children }) => {
    const { pathname } = useLocation()
    const [user] = useAuthState(auth);


    return (
        <div className='sticky top-0 z-50 bg-base-100  shadow-lg'>
            <div className="navbar border-b-2 border-primary">
                <div className="navbar-start">

                    <div>
                        {
                            pathname.includes('dashboard') && (<label for="my-drawer-2" className=" drawer-button lg:hidden">
                                <span className='text-3xl'><BiMenuAltLeft /></span>
                            </label>)
                        }
                    </div>
                    <div className="flex-1 text-2xl font-bold justify-center hidden lg:block lg:justify-start"><Link to='/'>NEXIQ</Link></div>
                </div>
                <div className="navbar-center">
                    <div className=' hidden lg:flex'>
                        <ul className="menu-horizontal p-0">
                            <li><CustomLink to='/home' >Home</CustomLink></li>
                            <li><CustomLink to='/products' >Products</CustomLink></li>
                            <li><CustomLink to='/blogs' >Blogs</CustomLink></li>
                            {
                                user && <p> <CustomLink to='/dashboard'>Dashboard</CustomLink></p>

                            }

                        </ul>
                    </div>
                    <div className="flex-1 text-2xl font-bold justify-center lg:justify-start block lg:hidden"><Link to='/'>NEXIQ</Link></div>
                </div>
                <div className="navbar-end">

                    <div className='hidden lg:block'>
                        <ul>
                            {
                                user ?
                                    <li className="dropdown dropdown-click dropdown-end ml-5">
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
                                    </li>
                                    :
                                    <>
                                        <li> <CustomLink to='/SignIn'>Sign in</CustomLink></li>
                                    </>
                            }
                        </ul>
                    </div>

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <span className='text-3xl'><BiMenuAltRight /></span>
                        </label>
                        <ul tabIndex={0} className="menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><DashLink to='/home' >Home</DashLink></li>
                            <li><DashLink to='/products' >Products</DashLink></li>
                            <li><DashLink to='/blogs' >Blogs</DashLink></li>
                            {
                                user && <p> <DashLink to='/dashboard'>Dashboard</DashLink></p>

                            }



                        </ul>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Navbar;