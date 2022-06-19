import { Outlet, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./components/Navbar/Navbar.css";
//  import htmlContent from './t.html';
import { VscLoading } from "react-icons/vsc";
import React, { lazy, Suspense } from "react";
import "./index.css";
import { render } from "react-dom";
import reportWebVitals from "./reportWebVitals";
import SignUp from "./pages/register/Register";import CssBaseline from "@material-ui/core/CssBaseline";
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
// import Begin from "./pages/begin";
import { Router, browserHistory,Switch } from 'react-router'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Begin from "./pages/begin";


import {
  createMuiTheme,
  ThemeProvider,
  MuiThemeProvider,
} from "@material-ui/core/styles";

// /* const Begin = lazy(() => import("./begin"));
//  */
// function App() {
//   return (
//   <Begin></Begin>
//  /*   <div>
    
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Begin />}>
//          <Route index element={<Begin />} /> 
//      </Route>
//     </Routes>
//   </BrowserRouter>
//   </div>
   
//       <Suspense
//         fallback={
//           <div>
//             Loading...
//             <br />
//             <VscLoading />
//           </div>
//         }
//       >
//      <Routes>
//       <Route path="pages/profile/Profile" element={<Profile />} />
//       <Route path="pages/home/Home" element={<Home />} />
//       <Route path="Dashboard" element={<DashboardLayout />} />
//       <Route path="pages/professors/professorsPage" element={<Album />} />
//       <Route path="pages/professors/ratingSummary" element={<RatingSummary />} />
//       <Route path="pages/professors/detailedRate" element={<Dashboard />} />
//       <Route path="pages/professors/rateprof" element={<RatingForm />} />
//       <Route path="pages/login/Login" element={<SignInSide />} />
//       <Route path="pages/register/Register" element={<SignUp />} />
//       <Route path="/" component={Begin } exact/>

//     </Routes>
//       </Suspense>  */
//   );
// }

// export default App;


export default function App() {
  return (
   <div>
       <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/pages/register/Register">Register</Link>
        <Link to="/pages/login/login">Login</Link>
        <Link to="/pages/home/Home">Home </Link>
        <Link to="/components/Navbar/navbar">Nav bar</Link>
        <Link to= "/pages/professors/professorsPage">CARDS </Link>
        <Link to= "/pages/professors/ratingSummary">Summary </Link>
        <Link to= "/pages/professors/detailedRate">Rating </Link>
        <Link to= "/pages/professors/rateprof">Rate professors </Link>
        <Link to= "/pages/begin">***************** </Link>

      </nav>
   </div>

  );
}

// const App = () => {
//   return (
    
//     <BrowserRouter>
//       <Routes>
//         <Route path="pages/begin" element={<Begin />} />
//       </Routes>
//     </BrowserRouter>
//     // <>
//     //     <Router>
//     //         <Routes>
//     //             <Route path='pages/begin' component={<Begin/>} />
//     //         </Routes>
//     //     </Router>
//     // </>
//   );
// };

// export default App;
