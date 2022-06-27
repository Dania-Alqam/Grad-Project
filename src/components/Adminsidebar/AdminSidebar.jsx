import "./sidebar.css";
import {
  LineStyle,
  PostAddTwoTone,
  PersonAdd,
  Person,
  People,
  NotificationsActive,
  AccountBox,
} from "@material-ui/icons";
// import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              الصفحة الرئيسية
            </li>
            </Link>
            <Link to="/profileAdmin" className="link">
            <li className="sidebarListItem active">
              <AccountBox className="sidebarIcon" />
              الملف الشخصي
            </li>
            </Link>
          
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <People className="sidebarIcon" />
                المدراء
              </li>
            </Link>
            <Link to="../pages/newProduct/NewProduct" className="link">
              <li className="sidebarListItem">
                <PersonAdd className="sidebarIcon" />
                إضافة مدير جديد 
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <People className="sidebarIcon" />
                المعلمون
              </li>
            </Link>
            <Link to="../pages/newProfessor/NewProfessor" className="link">
              <li className="sidebarListItem">
                <PersonAdd className="sidebarIcon" />
                إضافة مدرس جديد 
              </li>
            </Link>
           
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            
            <li className="sidebarListItem">
              <NotificationsActive className="sidebarIcon" />
              جديد
            </li>
            
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
          <Link to="../pages/AdminApproval/AdminApproval" className="link">
            <li className="sidebarListItem">
              <PostAddTwoTone className="sidebarIcon" />
              إدارة المنشورات
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
