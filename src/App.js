import { ToastContainer } from 'react-toastify';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import PrivateRoute from './hooks/PrivateRoute';
import RequireAdmin from './hooks/RequireAdmin';
import RequireUser from './hooks/RequireUser';
import Navbar from './components/Navbar';
import AddReview from './pages/Dashboard/User/AddReview/AddReview';
import Orders from './pages/Dashboard/User/Orders/Orders';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Purchase from './pages/Purchase/Purchase';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Payment from './pages/Dashboard/User/Orders/Payment';
import AddNewProduct from './pages/Dashboard/Admin/AddNewProduct/AddNewProduct';
import AllUsers from './pages/Dashboard/Admin/MangeUsers/AllUsers';
import Profile from './pages/Dashboard/Profile/Profile';
import DashBoard from './pages/Dashboard/Dashboard/Dashboard';
import auth from './firebase.init';
import useAdmin from './hooks/useAdmin';
import MangeOrders from './pages/Dashboard/Admin/MangeOrders/MangeOrders';
import MangeProducts from './pages/Dashboard/Admin/MangeProducts/MangeProducts';
import Blogs from './pages/Blogs/Blogs';
import BlogDetails from './pages/Blogs/BlogDetails';
import Products from './pages/Products/Products';
import { useLayoutEffect } from 'react';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import NavLeft from './components/nav';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
}

function App() {
  const [user, loading] = useAuthState(auth)
  const [admin] = useAdmin(user)
  if (loading) {
    return <div className='hidden'>Loading...</div>
  }
  return (
    <div>
      <Wrapper>
        {/* <Navbar /> */}
        <NavLeft />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blog/:blogID' element={<BlogDetails />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />} />

          <Route path='/product/:productId' element={<ProductDetails />} />
          <Route path='/purchase/:id' element={<PrivateRoute>
            <Purchase />
          </PrivateRoute>} />
          {
            admin ?
              <Route path='dashboard' element={<PrivateRoute> <DashBoard /> </PrivateRoute>}>
                <Route path='mangeUsers' element={<RequireAdmin><AllUsers /></RequireAdmin>} />
                <Route index element={<RequireAdmin><AddNewProduct /></RequireAdmin>} />
                <Route path='mangeOrders' element={<RequireAdmin><MangeOrders /></RequireAdmin>} />
                <Route path='mangeProducts' element={<RequireAdmin>
                  <MangeProducts />
                </RequireAdmin>} />
              </Route>

              :
              <Route path='dashboard' element={<PrivateRoute> <DashBoard /> </PrivateRoute>}>

                <Route index element={<Orders />} />
                <Route path='payment/:id' element={<Payment />} />
                <Route path='review' element={<RequireUser><AddReview /></RequireUser>} />

              </Route>
          }

          <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Wrapper>
    </div >
  );
}

export default App;
