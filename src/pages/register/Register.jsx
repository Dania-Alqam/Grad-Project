import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";
import { useEffect, useState } from "react";
import validator from 'validator';
import SweetAlert from "sweetalert-react";
import swal from "sweetalert";

// import { colourOptions } from './';

import { createTheme, ThemeProvider } from "@mui/material/styles";

document.dir = "rtl";

// export const fieldOfInterests = [
//   { value: "programming", label: "البرمجة", color: "#00B8D9", isFixed: true },
//   { value: "accounting", label: "محاسبة", color: "#0052CC" },
//   { value: "arch", label: "معماري", color: "#5243AA" },
//   { value: "pole", label: "السياسة", color: "#FF5630", isFixed: true },
//   { value: "business", label: "إدارة الأعمال", color: "#FF8B00" },
// ];

// const fieldOfInterests = ["Saab", "Volvo", "BMW"];

const animatedComponents = makeAnimated();
const theme = createTheme();

export default function SignUp() {
  useEffect(() => {
    axios.get("http://localhost:3002/fieldofinterest", {}).then((response) => {
      console.log(response.data);
      const fi = response.data.map((T) => ({
        value: T.FName,
        label: T.FName,
        color: "#5243AA",
      }));
      console.log(fi);
      setFields(fi);
    });
  }, []);

  const [uniID, setUniID] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [dep, setdep] = useState("");
  const [fields, setFields] = useState([]);
  const [emailReg, setemailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [repasswordReg, setrePasswordReg] = useState("");


  const register = () => {
    axios
      .post("http://localhost:3002/register", {
        Sfirst_name: firstName,
        Slast_name: lastName,
        universityID: uniID,
        depName: dep,
        Semail: emailReg,
        Spassword: passwordReg,
        rePassword:repasswordReg

      })
      .then((response) => {
        console.log(response);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            أهلًا وسهلًا
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="uniId"
                  // maxLength={3}
                  required
                  fullWidth
                  id="uniId"
                  value={uniID}
                  label="الرقم الجامعي"
                  autoFocus
                  // if (e.target.value === '' || re.test(e.target.value)) {
                  //    this.setState({value: e.target.value})
                  // }
                  onChange={(e) => {
                    const re = /[^0-9]/gi;
                    if (e.target.value.length === 7) {
                     window.alert("University ID shouldn't exceed 7 digits");
                    }

                    setUniID(e.target.value.replace(/[^0-9]/gi, ""));
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="firstName"
                  label="الاسم الأول"
                  name="firstName"
                  autoComplete="family-name"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="الاسم الثاني"
                  name="lastName"
                  autoComplete="email"
                  onChange={(e) => {
                    setlastName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="department"
                  label="الدائرة"
                  id="department"
                  autoComplete="new-password"
                  onChange={(e) => {
                    setdep(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="البريد الإلكتروني"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => {
                    setemailReg(e.target.value);
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="كلمة المرور"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => {
                    setPasswordReg(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  name="re-password"
                  label="إعادة كلمة المرور "
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => {
                    setrePasswordReg(e.target.value);
                 }}
                />
              </Grid>

              <Grid item xs={12}>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  // defaultValue={[fieldOfInterests[4], fieldOfInterests[5]]}
                  isMulti
                  options={fields}
                />
              </Grid>
            </Grid>
            <Button
              onClick={register}
              style={{
                borderRadius: 35,
                backgroundColor: "#21b6ae",
                padding: "10px 30px",
                fontSize: "18px",
              }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              href="../home/Home"
            >
              إنشاء حساب
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" href="../login/login" variant="body2">
                  هل لديك حساب مسبقًا ؟ تسجيل الدخول
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
