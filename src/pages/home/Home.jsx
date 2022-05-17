import Topbar from "../../components/topbar/Topbar";
import App from "../../components/Navbar/navbar"
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"
import { Toolbar } from "@mui/material";



export default function Home() {
  return (
    <>
      {<App /> }
      <Toolbar/>

      <div className="homeContainer">
        <Sidebar />
        <Feed/>
        <Rightbar/>
      </div>
    </>
  );
}
