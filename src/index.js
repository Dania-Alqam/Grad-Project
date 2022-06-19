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
import SignInAdmin from "./pages/login/AdminLogin";
import NewProduct from "./pages/newProduct/NewProduct";
import Profile from "./pages/profile/Profile";
import Edit from "./pages/editProfile/editProfile";
import Home from "./pages/home/Home";
import DashboardLayout from "./Dashboard";
import Navbar from "./components/Navbar/navbar"; 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./components/Navbar/Navbar.css";
import Album from "./pages/professors/professorsPage";
import RatingSummary from "./pages/professors/ratingSummary"; 
import Dashboard from "./pages/professors/detailedRate";
import RatingForm from "./pages/professors/rateprof";
 import Begin from "./pages/begin";
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import React, { lazy, Suspense } from "react";
// const Begin = lazy(() => import("./pages/begin"));
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(Begin);


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Begin />} />
      <Route path="pages/profile/Profile" element={<Profile />} />
      <Route path="pages/home/Home" element={<Home />} />
      <Route path="Dashboard" element={<DashboardLayout />} />
      <Route path="components/Navbar/navbar" element={<Navbar />} />
      <Route path="pages/professors/professorsPage" element={<Album />} />
      <Route path="pages/professors/ratingSummary" element={<RatingSummary />} />
      <Route path="pages/professors/detailedRate" element={<Dashboard />} />
      <Route path="pages/professors/rateprof" element={<RatingForm />} />
      <Route path="pages/login/Login" element={<SignInSide />} />
      <Route path="pages/login/AdminLogin" element={<SignInAdmin />} />
      <Route path="pages/register/Register" element={<SignUp />} />
      <Route path="pages/editProfile/editProfile" element={<Edit/>} />
      <Route path="pages/newProduct/newProduct" element={<NewProduct/>} />


    </Routes>
  </BrowserRouter>,
  rootElement
);

reportWebVitals();
