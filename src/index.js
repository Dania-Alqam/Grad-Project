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
import CourseViewer from "./pages/library/courseViewer";
import ResourcesCatagoriesViewer from "./pages/library/ResourcesCatagoriesViewer";
import AdminApproval from "./pages/AdminApproval/AdminApproval";
import SignInSide from "./pages/login/login";
import ProfileAdmin from './pages/profileAdmin/ProfileAdmin';
import SignInAdmin from "./pages/login/AdminLogin";
import NewUser from "./pages/newUser/NewUser";
import Sidebar from "./components/Adminsidebar/AdminSidebar";
import NewProfessor from "./pages/newProfessor/NewProfessor";
import ProductList from "./pages/productList/ProductList";
import PostList from "./pages/postList/postList"
import userRows from "./dummy"
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
 import Book from './pages/library/bookLib';
import Exams from './pages/library/examsLib';
import Slides from './pages/library/slidesLib';
import Lec from './pages/library/lecturesLib';
import Notes from './pages/library/notesLib';
import Projects from './pages/library/projectsLib';
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
      <Route path="pages/professors/:profID/ratingSummary" element={<RatingSummary />} /> 
      <Route path="pages/professors/:profID/detailedRate" element={<Dashboard />} />
      <Route path="pages/professors/:profID/rateprof" element={<RatingForm />} />
      <Route path="pages/login/Login" element={<SignInSide />} />
      <Route path="pages/login/AdminLogin" element={<SignInAdmin />} />
      <Route path="pages/register/Register" element={<SignUp />} />
      <Route path="pages/editProfile/editProfile" element={<Edit/>} />
      <Route path="pages/newProfessor/NewProfessor" element={<NewProfessor/>} />
      <Route path="components/Adminsidebar/AdminSidebar" element={<Sidebar/>} />
      <Route path="pages/productList/ProductList" element={<ProductList/>} />
      <Route path="pages/postList/PostList" element={<PostList/>} />
      <Route path="pages/AdminApproval/AdminApproval" element={<AdminApproval/>} />
      <Route path="pages/newUser/NewUser" element={<NewUser/>} />
      <Route path="pages/profileAdmin/ProfileAdmin" element={<ProfileAdmin/>}/>
      <Route path="pages/library/bookLib" element={<Book/>}/>
<Route path="pages/library/examsLib" element={<Exams/>}/>
<Route path="pages/library/slidesLib" element={<Slides/>}/>
<Route path="pages/library/lecturesLib" element={<Lec/>}/>
<Route path="pages/library/notesLib" element={<Notes/>}/>
<Route path="pages/library/projectsLib" element={<Projects/>}/>
<Route path="pages/library/ResourcesCatagoriesViewer" element={<ResourcesCatagoriesViewer/>} />
      <Route path="pages/library/courseViewer" element={<CourseViewer/>} />
      
    </Routes>
  </BrowserRouter>,
  rootElement
);

reportWebVitals();
