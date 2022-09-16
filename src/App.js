import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import AddReview from './pages/Dashboard/User/AddReview/AddReview';
import Orders from './pages/Dashboard/User/Orders/Orders';
import UpdateProfile from './pages/Dashboard/Profile/UpdateProfile';

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




function App() {

  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)

  return (
    <div className="App">

      <Navbar>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/purchase/:id' element={<PrivateRoute>
            <Purchase />
          </PrivateRoute>} />


          {
            admin ?
              <Route path='dashboard' element={<PrivateRoute> <DashBoard /> </PrivateRoute>}>
                <Route index element={<RequireAdmin><AllUsers /></RequireAdmin>} />
                <Route path='addNewProduct' element={<RequireAdmin><AddNewProduct /></RequireAdmin>} />
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

          <Route path='/profile' element={<RequireUser><Profile /></RequireUser>} />
          <Route path='/updateProfile' element={<RequireUser><UpdateProfile /></RequireUser>}></Route>

          <Route path='*' element={<NotFound />} />
        </Routes>

      </Navbar>
    </div>
  );
}

export default App;
