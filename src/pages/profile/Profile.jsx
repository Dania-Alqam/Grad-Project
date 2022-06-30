import "./profile.css";
import Rightbar from "../../components/rightbar/Rightbar";
import App from "../../components/Navbar/navbar";
import { Toolbar } from "@mui/material";
import { editProfile } from "../editProfile/editProfile";
import axios from "axios";
import { Component } from "react";
import { useEffect, useState } from "react";


export default function Profile() {
  const [persons, setPersons] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [DepartmentName, setDepartmentName] = useState("");
  const [imgPath, setimgPath] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .post(`http://localhost:5000/currentStudent`, { access_token: token })
      .then((res) => {
        setPersons(res.data);
        setLastName(res.data.lname);
        setFirstName(res.data.fname);
        setEmail(res.data.email);
        setDepartmentName(res.data.DepartmentName);
        setimgPath(res.data.imgPath)
        console.log(res.data.imgPath)
      });
  }, []);

  return (
    <>
      {/* <Topbar /> */}
      <App />
      <Toolbar />
      {/* {this.state.persons.map((rs, index) => ( */}
      <div class="container">
        <div class="main-body">
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img
                      src={"http://localhost:5000/imgs/" + imgPath}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "http://localhost:5000/imgs/default.jpg";
                      }}
                      alt="prof image" // style="padding-top:5px;"
                      style={{ paddingTop: "20px" }}
                      class="rounded-circle"
                      width="150"
                    />
                    <div class="mt-3">
                      <h4>
                        {firstName} {lastName}
                      </h4>
                      <p class="text-secondary mb-1">جامعة بيرزيت</p>
                      <p class="text-muted font-size-sm"></p>
                      <button class="btn btn-outline-primary">
                        تحديث الصورة الشخصية
                      </button>
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
                    <div class="col-sm-9 text-secondary">{firstName}</div>
                  </div>
                  <hr
                  // style={{
                  //     color: color,
                  //     backgroundColor: color,
                  //     height: 5
                  // }}
                  />{" "}
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">الاسم الثاني </h6>
                    </div>
                    <div class="col-sm-9 text-secondary">{lastName}</div>
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
                      <h6 class="mb-0">البريد الإلكتروني</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {email}
                      {/* {setPersons(persons.Sfirst_name)} */}
                    </div>
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
                    <div class="col-sm-9 text-secondary">
                      {DepartmentName}
                      {/* {setPersons(persons.Sfirst_name)} */}
                    </div>
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
                      <h6 class="mb-0">مجالات الاهتمام</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">البرمجة,الجافا,التكنولوجيا,الهندسة</div>
                  </div>
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
                        href="../editProfile/editProfile"
                      >
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
      {/* ))} */}
    </>
  );
}
