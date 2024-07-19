import React from 'react';

import Int from './pages1/Int';
import Login from './pages1/Login';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages1/Signup';
import Navbar from "./pages1/Navbar";
import Aboutus from "./pages1/Aboutus";
import Contact from "./pages1/Contact";
import Footer from './pages1/Footer';
import Store from './pages1/Store';
import Kitchens from './pages1/Kitchens';
import Designideas from './pages1/Designideas';
import Wardrobedesigns from './pages1/Wardrobedesigns';
import Bedroom from './pages1/Bedroom';
import  Calculate from './pages1/Calculate';
import PopupForm from './pages1/Popup';
import Verifyemail from './pages1/Verifyemail';
import Phonenumberform from './pages1/Phonenumberform';
import OtpForm from './pages1/Otpverification';
import Emailverification from './pages1/Emailverification';
import Storelocator from './pages1/Storelocator';
import Backpage from './pages1/Backpage';
import ForgetPassword from './pages1/ForgetPassword.jsx';

import VerifyForget from './pages1/Verifyforget.jsx';
import PasswordOtpForm from './pages1/Forgetotp.jsx';
import ResetPassword from './pages1/ResetPassword.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Int/>}/>
       <Route path='/Login' element={<Login/>}/>
       <Route path='/Signup' element={<Signup/>}/>
       <Route path='/Navbar' element={<Navbar/>}/>
       <Route path='/Aboutus' element={<Aboutus/>}/>
       <Route path='/Contact' element={<Contact/>}/>
       <Route path='/Footer' element={<Footer/>}/>
       <Route path='/Store' element={<Store/>}/>
       <Route path='/Int' element={<Int/>}/>
       <Route path='/Kitchens' element={<Kitchens/>}/>
       <Route path='/Designideas' element={<Designideas/>}/>
       <Route path='/Wardrobedesigns' element={<Wardrobedesigns/>}/>
       <Route path='/Bedroom' element={<Bedroom/>}/>
       <Route path='/Calculate' element={<Calculate/>}/>
       <Route path='/Popup' element={<PopupForm/>}/>
       <Route path='/Verifyemail' element={<Verifyemail/>}/>
       <Route path='/Phonenumberform' element={<Phonenumberform/>}/>
       <Route path='/OtpVerification' element={<OtpForm/>}/>
       <Route path='/Emailverification' element={<Emailverification/>}/>
       <Route path='/Storelocator' element={<Storelocator/>}/>
       <Route path='/ForgetPassword' element={<ForgetPassword/>}/>
       <Route path='/ResetPassword' element={<ResetPassword/>}/>
       <Route path='/Forgetotp' element={<PasswordOtpForm/>}/>
       <Route path='/Verifyforget' element={<VerifyForget/>}/>
       <Route path='/Backpage' element={<Backpage/>}/>
      </Routes>
      </Router>
  );
}

export default App;
