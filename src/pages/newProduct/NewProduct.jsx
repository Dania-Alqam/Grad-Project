import "./newProduct.css";
import Sidebar from "../../components/Adminsidebar/AdminSidebar";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <Sidebar />
      <h1 className="addProductTitle">إضافة معلم جديد</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>صورة الملف الشخصي</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>الاسم الكامل</label>
          <input type="text" placeholder="ex: Iyad Jaber" />
        </div>
        <div className="addProductItem">
          <label>معلومات التواصل </label>
          <input type="text" placeholder="sondosissa2000@gmail.com" />
        </div>
        <div className="addProductItem">
          <label>اسم الدائرة </label>
          <input type="text" placeholder="علم الحاسوب" />
        </div>
        <div className="addProductItem">
          <label>رقم المكتب</label>
          <input type="text" placeholder="112" />
        </div>
        <div className="addProductItem">
          <label>مكان المكتب</label>
          <input type="text" placeholder="كلية الهندسة والتكنولوجيا" />
        </div>
        <button className="addProductButton">إضافة</button>
      </form>
    </div>
  );
}
