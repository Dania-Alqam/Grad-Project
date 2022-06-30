// import "./sidebar.css";
// import {
//   LineStyle,
//   PostAddTwoTone,
//   PersonAdd,
//   Person,
//   People,
//   NotificationsActive,
//   AccountBox,
// } from "@material-ui/icons";
// // import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

// import { Link } from "react-router-dom";
// export default function Sidebar() {
//   return (
//     <div className="sidebar">
//       <div className="sidebarWrapper">
//         <div className="sidebarMenu">
//           <h3 className="sidebarTitle">Dashboard</h3>
//           <ul className="sidebarList">
//             <Link to="/" className="link">
//             <li className="sidebarListItem active">
//               <LineStyle className="sidebarIcon" />
//               الصفحة الرئيسية
//             </li>
//             </Link>
//             <Link to="/profileAdmin" className="link">
//             <li className="sidebarListItem active">
//               <AccountBox className="sidebarIcon" />
//               الملف الشخصي
//             </li>
//             </Link>
          
//           </ul>
//         </div>
//         <div className="sidebarMenu">
//           <h3 className="sidebarTitle">Quick Menu</h3>
//           <ul className="sidebarList">
//             <Link to="/users" className="link">
//               <li className="sidebarListItem">
//                 <People className="sidebarIcon" />
//                 المدراء
//               </li>
//             </Link>
//             <Link to="../pages/newProduct/NewProduct" className="link">
//               <li className="sidebarListItem">
//                 <PersonAdd className="sidebarIcon" />
//                 إضافة مدير جديد 
//               </li>
//             </Link>
//             <Link to="/products" className="link">
//               <li className="sidebarListItem">
//                 <People className="sidebarIcon" />
//                 المعلمون
//               </li>
//             </Link>
//             <Link to="../pages/newProfessor/NewProfessor" className="link">
//               <li className="sidebarListItem">
//                 <PersonAdd className="sidebarIcon" />
//                 إضافة مدرس جديد 
//               </li>
//             </Link>
           
//           </ul>
//         </div>
//         <div className="sidebarMenu">
//           <h3 className="sidebarTitle">Notifications</h3>
//           <ul className="sidebarList">
            
//             <li className="sidebarListItem">
//               <NotificationsActive className="sidebarIcon" />
//               جديد
//             </li>
            
//           </ul>
//         </div>
//         <div className="sidebarMenu">
//           <h3 className="sidebarTitle">Staff</h3>
//           <ul className="sidebarList">
//           <Link to="../pages/AdminApproval/AdminApproval" className="link">
//             <li className="sidebarListItem">
//               <PostAddTwoTone className="sidebarIcon" />
//               إدارة المنشورات
//             </li>
//             </Link>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
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
import { styled, useTheme } from '@mui/material/styles';

import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import ProfileAdmin from '../../pages/profileAdmin/ProfileAdmin';
import App from "../Navbar/navbar";

export default function Sidebar(props) {
  const theme = useTheme();
  const body =  props.param; 
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ flexGrow: 1, p: 2}}>
    
      <Grid container spacing={2}>
        <Grid item xs={6} md={12} >

        <App/>
{/*           <Item ></Item>
 */}        </Grid>
        <Grid  alignItems="stretch" item xs={5} md={3} >
          <Item alignItems="stretch" sx={{position:"sticky"}}>
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
                    <Link to="../../pages/profileAdmin/ProfileAdmin" className="link">
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
                    <Link to="../pages/newUser/NewUser" className="link">
                      <li className="sidebarListItem">
                        <PersonAdd className="sidebarIcon" />
                        إضافة مدير جديد
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
          </Item>
        </Grid>
        <Grid item xs={5} md={7}>
          <Item sx={{bgcolor:"lightgray"}}> 
             {(props != null )? body :  <ProfileAdmin/>  } 
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

