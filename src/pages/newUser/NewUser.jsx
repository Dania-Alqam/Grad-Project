import "./newUser.css";
import Sidebar from "../../components/Adminsidebar/AdminSidebar";
import { Toolbar } from "@mui/material";
export default function NewUser(){
return(
<Sidebar param = {<NewUser1/>}/>
);
}
 function NewUser1() {
  return (
    <div className="newProduct">
      <Toolbar/>
      <h1 className="addProductTitle">إضافة مسؤول جديد</h1>
      <div className="addProductForm">
        <div className="addProductItem">
          <label>صورة الملف الشخصي</label>
          <input type="file" id="file"  />
        </div>
        <div className="addProductItem">
          <label>الاسم الكامل</label>
          <input
            type="text"
            placeholder="اسم المسؤول"
            
          />
        </div>
        <div className="addProductItem">
          <label>معلومات التواصل </label>
          <input
            type="text"
            placeholder="البريد الإلكتروني"
           
          />
        </div>
        <div className="addProductItem">
          <label>كلمة السر </label>
          <input
            type="text"
            placeholder="كلمة السر "
           
          />
        </div>
        <div className="addProductItem">
          <label>رقم الهاتف</label>
          <input
            type="text"
            placeholder="رقم الهاتف"
           
          />
        </div>
        <div className="addProductItem">
          <label>اسم الدائرة</label>
          <input
            type="text"
            placeholder="الدائرة"
            
          />
        </div>
        <button className="addProductButton" >
          إضافة مسؤول
        </button>
      </div>
    </div>
  );
}