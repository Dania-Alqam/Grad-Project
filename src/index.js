import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { render } from "react-dom";
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import SignUp from "./pages/register/Register";
import SignInSide from "./pages/login/login";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import DashboardLayout from "./Dashboard";
import Navbar from "./components/Navbar/navbar"; 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./components/Navbar/Navbar.css";
import Album from "./pages/professors/professorsPage";
import RatingSummary from "./pages/professors/ratingSummary"; 
import Dashboard from "./pages/professors/detailedRate";
import RatingForm from "./pages/professors/rateprof";




// import { Login } from '@mui/icons-material';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="Register" element={<SignUp />} />
      <Route path="login" element={<SignInSide />} /> */}
      <Route path="pages/profile/Profile" element={<Profile />} />
      <Route path="pages/home/Home" element={<Home />} />
      <Route path="Dashboard" element={<DashboardLayout />} />
      <Route path="components/Navbar/navbar" element={<Navbar />} />
      <Route path="pages/professors/professorsPage" element={<Album />} />
      <Route path="pages/professors/ratingSummary" element={<RatingSummary />} />
      <Route path="pages/professors/detailedRate" element={<Dashboard />} />
      <Route path="pages/professors/rateprof" element={<RatingForm />} />
      <Route path="pages/login/Login" element={<SignInSide />} />
      <Route path="pages/register/Register" element={<SignUp />} />



    </Routes>
  </BrowserRouter>,
  rootElement
);

reportWebVitals();
