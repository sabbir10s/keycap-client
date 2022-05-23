import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import About from './pages/About/About';
import DashBoard from './pages/Dashboard/Dashboard';
import AddReview from './pages/Dashboard/User/AddReview/AddReview';
import Orders from './pages/Dashboard/User/Orders/Orders';
import Profile from './pages/Dashboard/User/Profile/Profile';
import UpdateProfile from './pages/Dashboard/User/Profile/UpdateProfile';

import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Purchase from './pages/Purchase/Purchase';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">

      <Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/purchase/:id' element={<PrivateRoute>
            <Purchase />
          </PrivateRoute>} />
          <Route path='/dashboard' element={<PrivateRoute>
            <DashBoard />
          </PrivateRoute>}>
            <Route index element={<Orders />} />
            <Route path='profile' element={<Profile />} />
            <Route path='review' element={<AddReview />} />
            <Route path='updateProfile' element={<UpdateProfile />}></Route>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>

      </Navbar>
    </div>
  );
}

export default App;
