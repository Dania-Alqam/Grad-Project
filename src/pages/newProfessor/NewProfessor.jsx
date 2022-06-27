import "./newProfessor.css";
import Sidebar from "../../components/Adminsidebar/AdminSidebar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function NewProfessor() {
  const [profName, setprofName] = useState("");
  const [officeID, setofficeID] = useState("");
  const [contactInfo, setcontactInfo] = useState("");
  const [depName, setdepName] = useState("");
  const [officePlace, setofficePlace] = useState("");

  const [userInfo, setuserInfo] = useState({
    file: [],
    filepreview: null,
  });

  const handleInputChange = (event) => {
    setuserInfo({
      ...userInfo,
      file: event.target.files[0],
      filepreview: URL.createObjectURL(event.target.files[0]),
    });
  };

  const submit = async () => {
    console.log("&&&&&&&&&&&&&&&&");
    const formdata = new FormData();
    formdata.append("avatar", userInfo.file);
    formdata.append("profName", profName);
    formdata.append("officeID", officeID);
    formdata.append("depName", depName);
    formdata.append("contactInfo", contactInfo);
    formdata.append("officePlace", officePlace);   
     console.log(formdata.get("officeID"))

    const token = localStorage.getItem("token");
console.log(token)
    formdata.append("admin_access_token", token);


    axios
      .post("http://localhost:5000/admin/AdminProf", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        // then print response status
        console.log(response);
        console.log(token);
        console.log(contactInfo);
        if (response.status === 200) {
          console.log("Image upload successfully");
        } else {
          console.log("Error");
        }
      });
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">إضافة معلم جديد</h1>
      <div className="addProductForm">
        <div className="addProductItem">
          <label>صورة الملف الشخصي</label>
          <input type="file" id="file" onChange={handleInputChange} />
        </div>
        <div className="addProductItem">
          <label>الاسم الكامل</label>
          <input
            type="text"
            placeholder="اسم المدرّس"
            onChange={(e) => {
              setprofName(e.target.value);
            }}
          />
        </div>
        <div className="addProductItem">
          <label>معلومات التواصل </label>
          <input
            type="text"
            placeholder="البريد الإلكتروني"
            onChange={(e) => {
              setcontactInfo(e.target.value);
            }}
          />
        </div>
        <div className="addProductItem">
          <label>اسم الدائرة </label>
          <input
            type="text"
            placeholder="دائرة المدرس "
            onChange={(e) => {
              setdepName(e.target.value);
            }}
          />
        </div>
        <div className="addProductItem">
          <label>رقم المكتب</label>
          <input
            type="text"
            placeholder="مكتب المدرس"
            onChange={(e) => {
              setofficeID(e.target.value);
            }}
          />
        </div>
        <div className="addProductItem">
          <label>مكان المكتب</label>
          <input
            type="text"
            placeholder="مكان مكتب المدرس"
            onChange={(e) => {
              setofficePlace(e.target.value);
            }}
          />
        </div>
        <button className="addProductButton" onClick={() => submit()}>
          إضافة معلم
        </button>
      </div>
    </div>
  );
}
