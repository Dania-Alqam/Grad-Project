import "./profileAdmin.css";                                                           
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
// import Rightbar from "../../components/rightbar/Rightbar";
// import App from "../../components/Navbar/navbar";
// import { Toolbar } from "@mui/material";
// import {editProfile} from "../editProfile/editProfile"

// document.body.style.textAlign = "right";
export default function ProfileAdmin() {
  return (
    <>
      {/* <Topbar />  */}
      {/* <App /> */}
       {/* <Toolbar /> */}

<div class="user">
      <div class="container">
        <div class="main-body">
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      // style="padding-top:5px;"
                      style={{paddingTop: "20px" }}
                      alt="Admin"
                      class="rounded-circle"
                      width="150"
                    />
                    <div class="mt-3">
                      <h4>سندس عيسى </h4>
                      <p class="text-secondary mb-1">جامعة بيرزيت</p>
                      <p class="text-muted font-size-sm"></p>
                      <button class="btn btn-outline-primary">تحديث الصورة الشخصية</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">الاسم الأول</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">سندس </div>
                  </div>
                  <hr
                  />{" "}
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">الاسم الثاني </h6>
                    </div>
                    <div class="col-sm-9 text-secondary">عيسى</div>
                  </div>
                  <hr
                  />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">البريد الإلكتروني</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">admin@gmail.com</div>
                  </div>
                  <hr
                  // style={{
                  //     color: color,
                  //     backgroundColor: color,
                  //     height: 5
                  // }}
                  />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">الدائرة</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">علم الحاسوب</div>
                  </div>
                  <hr
                  // style={{
                  //     color: color,
                  //     backgroundColor: color,
                  //     height: 5
                  // }}
                  />
                 
                  <hr
                  // style={{
                  //     color: color,
                  //     backgroundColor: color,
                  //     height: 5
                  // }}
                  />
                  <div class="row">
                    <div class="col-sm-12">
                      <a
                        class="btn btn-info"
                        target="__blank"
                        href="#">
                        تعديل المعلومات الشخصية
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>      
    </>
  );
}