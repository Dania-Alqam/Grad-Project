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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import validator from "validator";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
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

  useEffect(() => {
    axios.get("http://localhost:3002/professorPage", {}).then((response) => {
      console.log(response.data);
      const dep = response.data.map((T) => ({
        value: T.depName,
        label: T.depName,
        color: "#5243AA",
      }));

      setdep(dep);
      console.log("*************************************************************")
      console.log("hffffffF" + dep.value);
      console.log("hffffF" + dep[0].value);
      console.log("hjhnnhF" + dep);
    });
  }, []);

  const [uniID, setUniID] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [dep, setdep] = useState([]);
  const [fields, setFields] = useState([]);
  const [emailReg, setemailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [repasswordReg, setrePasswordReg] = useState("");
  const[selectedValue,setSelectedValue] = useState("");
  // const register = () => {
  //   axios
  //     .post("http://localhost:3002/register", {
  //       Sfirst_name: firstName,
  //       Slast_name: lastName,
  //       universityID: uniID,
  //       depName: dep,
  //       Semail: emailReg,
  //       Spassword: passwordReg,
  //       rePassword: repasswordReg,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     });
  // };


  const handleSelect = (event) => {
  console.log("event is "+event.target.value)
  setSelectedValue(event.target.value);
}

  const handleSubmit = (event) => {
    event.preventDefault();
    const validation = this.validator.validate(this.state);
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

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

  const [isSucces, setSuccess] = useState(null);

  const submit = async () => {
    console.log("The selected value is "+selectedValue);
    const formdata = new FormData();
    formdata.append("avatar", userInfo.file);
    formdata.append("firstName", firstName);
    formdata.append("lastName", lastName);
    formdata.append("dep", dep);

    console.log("1" + dep);
    console.log("1" + dep[0]);

    formdata.append("uniID", uniID);
    formdata.append("emailReg", emailReg);
    formdata.append("passwordReg", passwordReg);
    formdata.append("repasswordReg", repasswordReg);
    
    axios
      .post("http://localhost:3002/register", formdata, {
        // Slast_name: lastName,
        // universityID: uniID,
        // depName: dep,
        // Semail: emailReg,
        // Spassword: passwordReg,
        // rePassword: repasswordReg,

        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log("12244");

        // then print response status
        console.warn(res);
        if (res.data.success === 1) {
          setSuccess("Image upload successfully");
          console.log("Image upload successfully");
        }
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
                  required
                  fullWidth
                  id="uniId"
                  value={uniID}
                  label="الرقم الجامعي"
                  autoFocus
                  onChange={(e) => {
                    const re = /[^0-9]/gi;
                    if (e.target.value.length > 7) {
                      window.alert("University ID shouldn't exceed 7 digits");
                    } else {
                      setUniID(e.target.value.replace(/[^0-9]/gi, ""));
                    }
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
                  id="email"
                  label="البريد الإلكتروني"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => {
                    var filter =
                      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

                    if (!filter.test(e.target.value)) {
                      alert("Please provide a valid email address");
                    } else {
                      setemailReg(e.target.value);
                    }
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
              <Grid item xs={12} sm={6}>
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

              <Grid item xs={12} sm={6}>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  // defaultValue={[fieldOfInterests[4], fieldOfInterests[5]]}
                  isMulti
                  options={fields}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Select
                  options={dep}
                  closeMenuOnSelect={false}
                  //  onChange={handleSelect}
                />
              </Grid>
            </Grid>

            {/* {isSucces !== null ? <h4> {isSucces} </h4> : null} */}
            <div className="form-row">
              <label>اختر صورة شخصية </label>
              <input
                type="file"
                className="form-control"
                name="upload_file"
                onChange={handleInputChange}
              />
            </div>

            <Button
              onClick={() => submit()}
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
              // href="../home/Home"
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
