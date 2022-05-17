import './../../App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { cyan } from '@mui/material/colors';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


//import SideBar to reuse this navBAr in other pages. dania or sondos, delete this comment after you get it.
export default function DashboardLayout(props) {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <Grid
      container
      direction="row-reverse"
      justifyContent="flex-start"
      alignItems="stretch"
    >
      <Tabs
        textColor='inherit'
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="icon position tabs example"
        sx={{
          backgroundColor: cyan[700],
          paddingTop: 5,
          width: 200
        }}
      >
        <IconButton disableRipple="true" >
          <Avatar
            alt="Name"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 80, height: 80 }}
          />
        </IconButton>
        <Tab icon={<PersonIcon />} iconPosition="end" label="حسابي " sx={{ color: "white", }} />
        <Tab icon={<HomeIcon />} iconPosition="end" label="الصفحة الرئيسية" sx={{ color: "white", }} />
        <Tab icon={<SchoolIcon />} iconPosition="end" label="المدرسين" sx={{ color: "white", }} />
        <Tab icon={<LocalLibraryIcon />} iconPosition="end" label="المكتبة  " sx={{ color: "white", }} />
      </Tabs>


      <Box
        component="main"
        sx={{
          backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <TabPanel value={value} index={0}>{props.home}   <h1>homeeeeeeeeeeeeeeeeeeeeeee</h1></TabPanel>
        <TabPanel value={value} index={1}>{props.profile}<h1>profileeeeeeeeeeeeeeeeeeee</h1></TabPanel>
        <TabPanel value={value} index={2}>{props.home}   <h1>homeeeeeeeeeeeeeeeeeeeeeee</h1></TabPanel>
        <TabPanel value={value} index={3}>{props.rating} <h1>professoreeeeeeeeeeeeeeeee</h1></TabPanel>
        <TabPanel value={value} index={4}>{props.library}<h1>libraryeeeeeeeeeeeeeeeeeee</h1></TabPanel>
      </Box>
    </Grid>
  );
}

function TabPanel(props) {
  const {index, value , children} = props;
 return (
 <div>
   {
     value === index && (<div> { children }</div>)
   }
 </div>
 )
}