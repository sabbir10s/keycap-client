import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import { BiChevronsDown } from 'react-icons/bi';
import { BiMenuAltLeft } from 'react-icons/bi';
import CustomLink from '../hooks/CustomLink';
import DashLink from '../hooks/DashLink';
// import { CustomLink } from '../hooks/CustomLink'

const Navbar = ({ children }) => {

    const { pathname } = useLocation()
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                {/* <!-- Navbar --> */}
                <div className="w-full navbar bg-base-100 border-b border-primary shadow-lg lg:px-10 text-primary">
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

                        <ul className="menu menu-horizontal gap-x-10 flex items-center ">
                            <p><CustomLink to='/home' >Home</CustomLink></p>
                            {
                                user ? <p> <CustomLink to='/dashboard'>Dashboard</CustomLink></p>
                                    :
                                    ' '
                            }
                            <p><CustomLink to='/portfolio'>My Portfolio</CustomLink></p>
                            <p><CustomLink to='/blog'>Blogs</CustomLink></p>

                            {
                                user ?
                                    <p className="dropdown dropdown-click  dropdown-end">
                                        <label tabIndex="0">
                                            {
                                                user && user.photoURL ?
                                                    <div className='flex items-center cursor-pointer text-2xl'>
                                                        <img className='rounded-full w-10' src={user?.photoURL} alt="" />

                                                    </div>
                                                    :
                                                    <div className='flex items-center cursor-pointer'>
                                                        <svg className='w-[30px]' xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                                                        </svg>
                                                        <BiChevronsDown />
                                                    </div>
                                            }
                                        </label>
                                        <p tabIndex="0" className="dropdown-content menu w-32">

                                            {
                                                user ?
                                                    <>
                                                        <p onClick={() => signOut(auth)}>
                                                            <p className='text-center cursor-pointer bg-error text-base-100 rounded-lg py-1 mt-2'>Sign out</p>
                                                        </p>
                                                    </>
                                                    :
                                                    ''
                                            }
                                        </p>
                                    </p>
                                    :
                                    <>
                                        <p> <CustomLink to='/SignIn'>Sign in</CustomLink></p>
                                        <p> <CustomLink to='/signUp'>Sign up</CustomLink></p>
                                    </>
                            }

                        </ul>
                    </div>
                </div>

                {/* <!-- Page content here --> */}

                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-5 overflow-y-auto flex flex-col gap-5 w-64 bg-base-100">

                    <p><DashLink to='/home'>Home</DashLink></p>
                    {
                        user ? <p> <CustomLink to='/dashboard'>Dashboard</CustomLink></p>
                            :
                            ' '
                    }
                    <p><DashLink to='/portfolio'>My Portfolio</DashLink></p>
                    <p><DashLink to='/blog'>Blogs</DashLink></p>
                    {
                        user ?
                            <p className="dropdown dropdown-click  dropdown-start">
                                <label tabIndex="0">

                                    {
                                        user && user.photoURL ?
                                            <div className='flex items-center cursor-pointer text-2xl'>
                                                <img className='rounded-full w-10' src={user?.photoURL} alt="" />

                                            </div>
                                            :
                                            <div className='flex items-center cursor-pointer'>
                                                <svg className='w-[30px]' xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                                                </svg>
                                                <BiChevronsDown />
                                            </div>
                                    }
                                </label>
                                <p tabIndex="0" className="dropdown-content menu w-32">

                                    {
                                        user ?
                                            <>
                                                <p onClick={() => signOut(auth)}>
                                                    <p className='text-center cursor-pointer bg-error text-base-100 rounded-lg py-1 mt-5'>Sign out</p>
                                                </p>
                                            </>
                                            :
                                            ''
                                    }
                                </p>
                            </p>
                            :
                            <>
                                <p> <DashLink to='/SignIn'>Sign in</DashLink></p>
                                <p> <DashLink to='/signUp'>Sign up</DashLink></p>
                            </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Navbar;