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
        <Link to="/Register">Register</Link> |{" "}
        <Link to="/login">Login</Link>
        <Link to="/pages/profile/Profile">Profile</Link>
        <Link to="/components/Navbar/navbar">Nav bar</Link>


      </nav>
      <Outlet />
    </div>
  );
}