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
import SignUp from "./Register";
import SignInSide from "./login";
import Profile from "./pages/profile/Profile";
import DashboardLayout from "./Dashboard";
import Navbar from "./components/Navbar/navbar"; 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./components/Navbar/Navbar.css";

// import { Login } from '@mui/icons-material';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Register" element={<SignUp />} />
      <Route path="login" element={<SignInSide />} />
      <Route path="pages/profile/Profile" element={<Profile />} />
      <Route path="Dashboard" element={<DashboardLayout />} />
      <Route path="components/Navbar/navbar" element={<Navbar />} />



    </Routes>
  </BrowserRouter>,
  rootElement
);

reportWebVitals();
