import Topbar from "../../components/topbar/Topbar";
import App from "../../components/Navbar/navbar";
//import Sidebar from "../../components/sidebar/Sidebar";
import Sidebar from "../../components/Adminsidebar/AdminSidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./AdminApproval.css";
import { Toolbar } from "@mui/material";
import axios from "axios";
import FeedAdmin from "../../components/feedAdmin/FeedAdmin";

export default function AdminApproval(){
return(
  <Sidebar param ={<AdminApproval1/>}/>
);
}
function AdminApproval1() {
    return (
      <>
        {/* {<App />} */}
        {/* <Rightbar /> */}
        <div className="homeContainer">
          {/* <Sidebar /> */}
          <FeedAdmin />
          {/* <Rightbar /> */}

        </div>
      </>
    );
  }
  
