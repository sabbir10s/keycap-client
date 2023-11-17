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
import RequireUser from './hooks/RequireUser';
import Profile from './pages/Common/Profile/Profile';
import Orders from './pages/User/Orders/Orders';
import MangeProducts from './pages/Admin/MangeProducts/MangeProducts';
import AddProduct from './pages/Admin/AddProduct/AddProduct';
import MangeOrders from './pages/Admin/MangeOrders/MangeOrders';
import NotFound from './pages/Common/NotFound/NotFound';
import OrderDetails from './pages/User/OrderDetails/OrderDetails';
import RequireAdmin from './hooks/RequireAdmin';
import MangeOrderDetails from './pages/Admin/MangeOrders/MangeOrderDetails';
import AdminDashboard from './pages/Admin/Dashboard/AdminDashboard';
import UserDashboard from './pages/Common/Dashboard/UserDashboard';
import MangeUsers from './pages/Admin/MangeUsers/MangeUsers';



const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
}

function App() {

  return (
    <div>
      <Wrapper>
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
            <Route path='userDashboard' element={<RequireUser><UserDashboard /></RequireUser>}>
              <Route index element={<RequireUser><Orders /></RequireUser>} />
              <Route path='order/:orderId' element={<OrderDetails />} />
              <Route path='profile' element={<Profile />} />
            </Route>

            {/* admin dashboard section*/}
            <Route path='adminDashboard' element={<RequireAdmin><AdminDashboard /></RequireAdmin>}>
              <Route index element={<MangeProducts />} />
              <Route path='addNewProduct' element={<AddProduct />} />
              <Route path='mangeUsers' element={<MangeUsers />} />
              <Route path='mangeOrders' element={<MangeOrders />} />
              <Route path='mangeOrders/:orderId' element={<RequireAdmin><MangeOrderDetails /></RequireAdmin>} />
              <Route path='profile' element={<Profile />} />
            </Route>



            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Wrapper>
    </div >
  );
}

export default App;
