import "./profile.css";
import Rightbar from "../../components/rightbar/Rightbar";
import App from "../../components/Navbar/navbar";
import { Toolbar } from "@mui/material";
import { editProfile } from "../editProfile/editProfile";
import axios from "axios";
import { Component } from "react";
import { useEffect, useState } from "react";


// const [fields, setFields] = useState([]);

// useEffect(() => {
//   axios.get("http://localhost:5000/fieldofinterest", {}).then((response) => {
//     console.log(response.data);
//     const fi = response.data.map((T) => ({
//       value: T.FName,
//       label: T.FName,
//       color: "#5243AA",
//     }));
//     console.log(fi);
//     setFields(fi);
//   });
// }, []);

class Profile extends Component {
  
  state = {
    persons: [],
  };

  // componentDidMount() {
  //   const url = "http://localhost:5000/getStudent";
  //   axios
  //     .get(url)
  //     .then((response) => response.data)
  //     .then((data) => {
  //       console.log("Fuuuuxk");
  //       this.setState({ student: data });
  //       console.log("tatatatatat")
  //       console.log(this.state.student);
  //     });
  // }
  componentDidMount() {
    axios.get(`http://localhost:5000/currentStudent`).then((res) => {
      console.log("First")
      const persons = res.data;
      console.log("&&&&&&&");
      console.log(persons.studentID);
      this.setState({ persons });
    });
  }

  render() {
    return (
      <>
        {/* <Topbar /> */}
        <App />
        <Toolbar />
        {this.state.persons.map((rs, index) => (
          <div class="container">
            <div class="main-body" item key={index}>
              <div class="row gutters-sm" item key={index}>
                <div class="col-md-4 mb-3" item key={index}>
                  <div class="card" item key={index}>
                    <div class="card-body">
                      <div class="d-flex flex-column align-items-center text-center">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar7.png"
                          // style="padding-top:5px;"
                          style={{ paddingTop: "20px" }}
                          alt="Admin"
                          class="rounded-circle"
                          width="150"
                        />
                        <div class="mt-3">
                          <h4>
                            {rs.Sfirst_name} {rs.Slast_name}{" "}
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
                        <div class="col-sm-9 text-secondary">
                          {rs.Sfirst_name}{" "}
                        </div>
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
                        <div class="col-sm-9 text-secondary">
                          {rs.Slast_name}
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
                          <h6 class="mb-0">البريد الإلكتروني</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">{rs.Semail}</div>
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
                        <div class="col-sm-9 text-secondary">{rs.depName}</div>
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
                        <div class="col-sm-9 text-secondary">dl,ldl </div>
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
        ))}
      </>
    );
  }
}
export default Profile;
