import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">إضافة مدير جديد</h1>
      <form className="newUserForm">
      
        <div className="newUserItem">
          <label>الإسم الكامل</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label>الإيميل</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>كلمة السر</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>رقم الهاتف</label>
          <input type="text" placeholder="+972 592-774-938" />
        </div>
        <div className="newUserItem">
          <label>اسم الدائرة</label>
          <select className="newUserSelect" name="active" id="active">
           
          </select>
        </div>
        <div className="addProductItem">
          <label>صورة البروفايل</label>
          <input type="file" id="file" />
        </div>
       
        <button className="newUserButton">إضافة</button>
      </form>
    </div>
  );
}
