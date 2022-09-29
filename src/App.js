import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import AddReview from './pages/Dashboard/User/AddReview/AddReview';
import Orders from './pages/Dashboard/User/Orders/Orders';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Purchase from './pages/Purchase/Purchase';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Payment from './pages/Dashboard/User/Orders/Payment';

import RequireAdmin from './components/RequireAdmin';
import AddNewProduct from './pages/Dashboard/Admin/AddNewProduct/AddNewProduct';
import MenageProducts from './pages/Dashboard/Admin/MenageProducts/MenageProducts';
import AllUsers from './pages/Dashboard/Admin/MenageUsers/AllUsers';
import RequireUser from './components/RequireUser';
import Profile from './pages/Dashboard/Profile/Profile';
import MenageOrders from './pages/Dashboard/Admin/MenageOrders/MenageOrders';
import DashBoard from './pages/Dashboard/Dashboard/Dashboard';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import useAdmin from './hooks/useAdmin';
import ProductDetails from './pages/Home/Products/ProductDetails';




function App() {

  const [user, loading] = useAuthState(auth)
  const [admin] = useAdmin(user)

  if (loading) {
    return <div className='hidden'>Loading...</div>
  }
  return (
    <div>

      <Navbar>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/product/:productId' element={<ProductDetails />} />
          <Route path='/purchase/:id' element={<PrivateRoute>
            <Purchase />
          </PrivateRoute>} />
          {
            admin ?
              <Route path='dashboard' element={<PrivateRoute> <DashBoard /> </PrivateRoute>}>
                <Route path='menageUsers' element={<RequireAdmin><AllUsers /></RequireAdmin>} />
                <Route index element={<RequireAdmin><AddNewProduct /></RequireAdmin>} />
                <Route path='menageOrders' element={<RequireAdmin><MenageOrders /></RequireAdmin>} />

                <Route path='menageProducts' element={<RequireAdmin>
                  <MenageProducts />
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

      </Navbar>
    </div>
  );
}

export default App;
