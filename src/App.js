import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import DashBoard from './pages/Dashboard/Dashboard';
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
import Blogs from './pages/Blogs/Blogs';
import Payment from './pages/Dashboard/User/Orders/Payment';
import Portfolio from './pages/Portfolio/Portfolio';

import RequireAdmin from './components/RequireAdmin';
import AddNewProduct from './pages/Dashboard/Admin/AddNewProduct/AddNewProduct';
import MenageProducts from './pages/Dashboard/Admin/MenageProducts/MenageProducts';
import AllUsers from './pages/Dashboard/Admin/MenageUsers/AllUsers';
import RequireUser from './components/RequireUser';
import Profile from './pages/Dashboard/Profile/Profile';
import MenageOrders from './pages/Dashboard/Admin/MenageOrders/MenageOrders';




function App() {

  return (
    <div className="App">

      <Navbar>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/purchase/:id' element={<PrivateRoute>
            <Purchase />
          </PrivateRoute>} />
          <Route path='/dashboard' element={<PrivateRoute> <DashBoard /> </PrivateRoute>}>
            <Route path='user' element={<RequireAdmin><AllUsers /></RequireAdmin>} />
            <Route path='addNewProduct' element={<RequireAdmin><AddNewProduct /></RequireAdmin>} />
            <Route path='menageOrders' element={<RequireAdmin><MenageOrders /></RequireAdmin>} />

            <Route path='menageProducts' element={<RequireAdmin>
              <MenageProducts />
            </RequireAdmin>} />


            <Route path='myOrder' element={<Orders />} />
            <Route path='payment/:id' element={<Payment />} />

            <Route index element={<Profile />} />

            <Route path='review' element={<RequireUser><AddReview /></RequireUser>} />
            <Route path='updateProfile' element={<UpdateProfile />}></Route>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>

      </Navbar>
    </div>
  );
}

export default App;
