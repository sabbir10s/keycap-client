import { ToastContainer } from 'react-toastify';
import { Route, Routes, useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import PrivateRoute from './hooks/PrivateRoute';
import RequireAdmin from './hooks/RequireAdmin';
import RequireUser from './hooks/RequireUser';
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
import MangeOrders from './pages/Dashboard/Admin/MangeOrders/MangeOrders';
import MangeProducts from './pages/Dashboard/Admin/MangeProducts/MangeProducts';
import Blogs from './pages/Blogs/Blogs';
import BlogDetails from './pages/Blogs/BlogDetails';
import Products from './pages/Products/Products';
import { useLayoutEffect } from 'react';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import NavLeft from './components/nav';
import UserDashboard from './pages/Dashboard/Dashboard/UserDashboard';
import AdminDashboard from './pages/Dashboard/Dashboard/AdminDashboard';

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

          {/* user */}
          <Route path='user/dashboard' element={<PrivateRoute> <UserDashboard /> </PrivateRoute>}>

            <Route index element={<Orders />} />
            <Route path='dashboard/profile' element={<RequireUser><Profile /></RequireUser>} />
            <Route path='payment/:id' element={<Payment />} />
            <Route path='review' element={<RequireUser><AddReview /></RequireUser>} />
          </Route>

          {/* admin */}
          <Route path='admin/dashboard' element={<PrivateRoute><RequireAdmin><AdminDashboard /></RequireAdmin></PrivateRoute>}>
            <Route path='mangeProducts' element={<RequireAdmin> <MangeProducts /></RequireAdmin>} />
            <Route path='mangeUsers' element={<RequireAdmin><AllUsers /></RequireAdmin>} />
            <Route index element={<RequireAdmin><AddNewProduct /></RequireAdmin>} />
            <Route path='mangeOrders' element={<RequireAdmin><MangeOrders /></RequireAdmin>} />
          </Route>



          <Route path='*' element={<NotFound />} />
        </Routes>
      </Wrapper>
    </div >
  );
}

export default App;
