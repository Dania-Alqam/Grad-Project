import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Search from "./Search";
import "./Navbar.css";
// import LogoutIcon from '@mui/icons-material/Logout';

document.body.style.textAlign = "right";
const App = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="dark"
      variant="dark"
      className="px-4 py-8"
      fixed="top"
    >
      <Navbar.Brand>BZUSociety</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-na" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {" "}
        <Nav className="ml-auto align-items-end px-3">
          <Search />
          {/* <Nav.Link className="pl-4">Cart</Nav.Link> */}
        </Nav>
        <Nav className="mr-auto align-items-end px-3">
          <Nav.Link href="../profile/Profile">حسابي</Nav.Link>
          {/* <Nav.Link href="../login/Login">من نحن</Nav.Link> */}
          <Nav.Link href="../home/Home">الصفحة الرئيسية</Nav.Link>
          <Nav.Link href="../professors/professorsPage"> المدرسين </Nav.Link>
          <Nav.Link href="../library/courseViewer">المكتبة</Nav.Link>
          <Nav.Link href="../login/Login">تسجيل الخروج</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default App;
