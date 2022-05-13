import React from "react";
import { Nav, Navbar } from "react-bootstrap";

import Search from "./Search";
import "./Navbar.css"


const App = () => {
  

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="light"
      variant="light"
      className="px-4 py-8"
      fixed="top"
    >
      <Navbar.Brand>BZUSociety</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-na" />
      <Navbar.Collapse id="responsive-navbar-nav">  <Nav className="ml-auto align-items-end px-3">
          <Search />
          {/* <Nav.Link className="pl-4">Cart</Nav.Link> */}
        </Nav>
        <Nav className="mr-auto align-items-end px-3">
          <Nav.Link>حسابي</Nav.Link>
          <Nav.Link>الصفحة الرئيسية</Nav.Link>
          <Nav.Link>المدرسين</Nav.Link>
          <Nav.Link>المكتبة</Nav.Link>
        </Nav>
      
      </Navbar.Collapse>
    </Navbar>
  );
};

export default App;
