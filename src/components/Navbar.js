import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import CustomLink from '../hooks/CustomLink';
import { MdLogout, MdOutlineArrowDropDown } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import { BiMenuAltRight, BiMenuAltLeft } from 'react-icons/bi';
import SecondaryCustomLink from '../hooks/SecondaryCustomLink';

const Navbar = ({ children }) => {
    const { pathname } = useLocation()
    const [user] = useAuthState(auth);


    return (
        <div className='sticky top-0 z-50 bg-base-100  border-b-2 border-primary shadow-lg'>
            <div className="navbar container mx-auto">
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
                                                    <span>Profile</span> <MdOutlineArrowDropDown />
                                                </div>
                                            </div>
                                        </label>
                                        <div tabIndex="0" className="dropdown-content menu shadow-lg bg-base-100 border rounded-box w-52 mt-2">
                                            {
                                                user ?
                                                    <div className='flex flex-col gap-5'>
                                                        <SecondaryCustomLink to='/profile'>
                                                            <div className='hover:text-secondary pt-5 px-5  flex items-center gap-2' ><FaUserAlt /> <span>Settings</span></div>
                                                        </SecondaryCustomLink>
                                                        <button className='hover:text-secondary py-5 px-5 border-t border-base-200 flex items-center gap-2 text-left' onClick={() => signOut(auth)}>
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
                            <li className='pt-1 px-5'><SecondaryCustomLink to='/home' >Home</SecondaryCustomLink></li>
                            <li className='pt-1 px-5'><SecondaryCustomLink to='/products' >Products</SecondaryCustomLink></li>
                            <li className='pt-1 px-5'><SecondaryCustomLink to='/blogs' >Blogs</SecondaryCustomLink></li>
                            {
                                user && <li className='pt-1 px-5'> <SecondaryCustomLink to='/dashboard'>Dashboard</SecondaryCustomLink></li>

                            }

                            <li className='block lg:hidden'>
                                {
                                    user ?
                                        <div className='flex flex-col gap-5'>
                                            <SecondaryCustomLink to='/profile'>
                                                <div className='hover:text-secondary pt-2 px-5  flex items-center gap-2' >
                                                    <FaUserAlt />
                                                    <span>Profile Settings</span>
                                                </div>
                                            </SecondaryCustomLink>
                                            <button className='hover:text-secondary pt-5 pb-2 px-5 border-t border-base-200 flex items-center gap-2 text-left' onClick={() => signOut(auth)}>
                                                <MdLogout /> <span>Sign out</span>
                                            </button>


                                        </div>
                                        :
                                        <li className='pt-1 px-5'> <SecondaryCustomLink to='/SignIn'>Sign in</SecondaryCustomLink></li>
                                }
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Navbar;