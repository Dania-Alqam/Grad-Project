import { Outlet, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./components/Navbar/Navbar.css";


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



      </nav>
      <Outlet />
    </div>
  );
}