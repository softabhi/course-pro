import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/about/About';
import ForgetPassword from './components/auth/ForgetPassword';
import { Login } from './components/auth/Login';
import Register from './components/auth/Register';
import ResetPassword from './components/auth/ResetPassword';
import Contact from './components/contact/Contact';
import Courses from './components/courses/Courses';
import CoursePage from './components/CoursePage/CoursePage';
import Home from './components/home/Home';
import Footer from './components/layout/footer/Footer';
import Header from './components/layout/header/Header';
import Subscribe from './components/payments/Subscribe';
import Request from './components/request/Request';
import NoteFound from './components/layout/NoteFound'
import PaymentSuccess from './components/payments/PaymentSuccess'
import PaymentField from './components/payments/PaymentField'
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import Dashboard from './components/admin/dashboard/Dashboard';
import User from './components/admin/user/User';
import CreateCourses from './components/admin/createcourse/CreateCourses';
import AdminCourses from './components/admin/admincourse/AdminCourses';






function App() {

  // window.addEventListener("contextmenu",(e)=>{
  //      e.preventDefault(); 
  // })

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/course/:id' element={<CoursePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/changepassword' element={<ChangePassword />} />
        <Route path='/updateprofile' element={<UpdateProfile />} />
        <Route path='admin/dashboard' element={<Dashboard />} />
        <Route path='admin/user' element={<User />} />
        <Route path='admin/createcourse' element={<CreateCourses />} />
        <Route path='admin/admincourses' element={<AdminCourses />} />


        <Route path='/register' element={<Register />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/request' element={<Request />} />
        <Route path='/about' element={<About />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/resetpassword/:token' element={<ResetPassword />} />
        <Route path='/subscribe' element={<Subscribe />} />
        <Route path='/paymentsuccess' element={<PaymentSuccess />} />
        <Route path='/paymentfield' element={<PaymentField />} />
        <Route path='*' element={<NoteFound />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;

