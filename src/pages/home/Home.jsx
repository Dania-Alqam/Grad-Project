import Topbar from "../../components/topbar/Topbar";
import App from "../../components/Navbar/navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";
import { Toolbar } from "@mui/material";
import axios from "axios";

export default function Home() {
  var token = localStorage.getItem("token");
  console.log("*******")
  console.log(token)
  if (!token) {
    return "No student found";
  }

  return (
    <>
      {<App />}
      <Toolbar />

      <div className="homeContainer">
        {/* <Sidebar /> */}
        <Feed />
        {/* <Rightbar /> */}
      </div>
    </>
  );
}
