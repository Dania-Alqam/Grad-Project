import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";
import App from "../../components/Navbar/navbar";
import { Toolbar } from "@mui/material";



document.body.style.textAlign="right";
export default function Profile() {
  return (
    <>
      {/* <Topbar /> */}
      <App /> 
      <Toolbar/>
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="/assets/person/1.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="/assets/person/4.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">سندس عيسى</h4>
                <span className="profileInfoDesc">مرحبا أصدقائي</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
