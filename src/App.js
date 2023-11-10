import { ToastContainer } from 'react-toastify';
import { Route, Routes, useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/PublicPages/Home/Home';
import Products from './pages/PublicPages/Products/Products';
import Blogs from './pages/PublicPages/Blogs/Blogs';
import BlogDetails from './pages/PublicPages/Blogs/BlogDetails';
import SignIn from './pages/Auth/SignIn/SignIn';
import SignUp from './pages/Auth/SignUp/SignUp';
import ProductDetails from './pages/PublicPages/ProductDetails/ProductDetails';
import Cart from './pages/PublicPages/Cart/Cart';
import PrivateRoute from './hooks/PrivateRoute';
import Checkout from './pages/User/Checkout/Checkout';
import Dashboard from './pages/Common/Dashboard/Dashboard';
import RequireUser from './hooks/RequireUser';
import Profile from './pages/Common/Profile/Profile';
import Orders from './pages/User/Orders/Orders';
import Payment from './pages/User/Orders/Payment';
import AddReview from './pages/User/AddReview/AddReview';
import RequireAdmin from './hooks/RequireAdmin';
import MangeProducts from './pages/Admin/MangeProducts/MangeProducts';
import AddProduct from './pages/Admin/AddProduct/AddProduct';
import AllUsers from './pages/Admin/MangeUsers/AllUsers';
import MangeOrders from './pages/Admin/MangeOrders/MangeOrders';
import MangeOrderDetails from './pages/Admin/MangeOrders/MangeOrderDetails';
import NotFound from './pages/Common/NotFound/NotFound';
import useAdmin from './hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import OrderDetails from './pages/User/OrderDetails/OrderDetails';



const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
}

function App() {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div>
      <Wrapper>
        {/* <Navbar /> */}
        <Navbar />
        <ToastContainer />
        <div className='pt-16 bg-[#f0f0fa]'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/blog/:blogID' element={<BlogDetails />} />
            <Route path='/signIn' element={<SignIn />} />
            <Route path='/signUp' element={<SignUp />} />

            <Route path='/product/:productId' element={<ProductDetails />} />

            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<PrivateRoute><Checkout /></PrivateRoute>} />

            {/* user dashboard section */}
            <Route path='dashboard' element={<PrivateRoute> <Dashboard /> </PrivateRoute>}>

              {
                admin ?
                  <>
                    <Route index element={<RequireAdmin> <MangeProducts /></RequireAdmin>} />
                    <Route path='addNewProduct' element={<RequireAdmin><AddProduct /></RequireAdmin>} />
                    <Route path='mangeUsers' element={<RequireAdmin><AllUsers /></RequireAdmin>} />
                    <Route path='mangeOrders' element={<RequireAdmin><MangeOrders /></RequireAdmin>} />
                    <Route path='mangeOrders/:orderId' element={<RequireAdmin><MangeOrderDetails /></RequireAdmin>} />
                    <Route path='profile' element={<RequireUser><Profile /></RequireUser>} />
                  </>
                  :
                  <>
                    <Route index element={<Orders />} />
                    <Route path='order/:orderId' element={<RequireUser><OrderDetails /></RequireUser>} />
                    <Route path='profile' element={<RequireUser><Profile /></RequireUser>} />
                    <Route path='payment/:id' element={<Payment />} />
                    <Route path='review' element={<RequireUser><AddReview /></RequireUser>} />
                  </>
              }



            </Route>

            {/* admin dashboard section*/}
            {/* <Route path='admin/dashboard' element={<PrivateRoute><RequireAdmin><AdminDashboard /></RequireAdmin></PrivateRoute>}>
            </Route> */}



            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Wrapper>
    </div >
  );
}

export default App;
