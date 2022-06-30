import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { cyan } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { Button, Card, Divider, FormControlLabel } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";
import App from "../../components/Navbar/navbar";
import { MDBContainer, MDBRating } from "mdbreact";
import ProgressBar from "react-bootstrap/ProgressBar";
import Rating, { IconContainerProps } from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const mdTheme = createTheme();

const label1 = {
  1: "سيء جداً",
  2: "سيء",
  3: "جيد",
  4: "جيد جداً",
  5: "رائع",
};
const label2 = {
  1: "سهل جداً",
  2: "سهل",
  3: "متوسط",
  4: "صعب",
  5: "صعب جداً",
};


var token = localStorage.getItem("token");



function getrateLabelText(value1) {
  return `${value1} Star${value1 !== 1 ? "s" : ""}, ${label1[value1]}`;
}

function getdifficultyLabelText(value1) {
  return `${value1} Star${value1 !== 1 ? "s" : ""}, ${label2[value1]}`;
}

export default function RatingForm() {
  const [courses, setcourses] = useState([]);
  const { profID } = useParams();

  const [valuer, setValuer] = React.useState("");

  const handleChange1 = (event) => {
    setValuer(event.target.value);
  };
  const [valuer2, setValuer2] = React.useState("");

  const handleChange12 = (event) => {
    setValuer2(event.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/getCourses/" + { profID }, {})
      .then((response) => {
        const course = response.data.map((T) => ({
          value: T.courseID,
          label: T.courseID,
          color: "#5243AA",
        }));
        setcourses(course);
        console.log("hffffF" + courses[0].value);
        console.log("hjhnnhF" + courses);
      });
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [selectedDepValue, setSelectedDepValue] = useState("");

  const handleDepSelect = (event) => {
    console.log("event is .................." + event.target.value);
    setSelectedDepValue(event.target.value);
  };

  const [value, setValue] = React.useState("");
  const [value1, setValue1] = React.useState(2);
  const [value2, setValue2] = React.useState(2);

  const [hover, setHover] = React.useState(-1);

  const[opinion,setopinion]=React.useState("")


  const submitReview = () => {

    var studyagain = 0;
    var attendence = 0;
    if (valuer==="نعم")
    studyagain = 1;
    if (valuer2=="نعم")
    attendence = 1;

    console.log(opinion)
    console.log(value1);
    console.log(value2);

    axios
    .post("http://localhost:5000/reviews/add", {
      access_token: token,
      studyagain: studyagain,
      attendence:attendence,
      opinion:opinion,
      rating:value1,
      diffLevel:value2,
      courseID:1,
      profID:profID
    })
    .then((response) => {
      console.log(response.status);
      if (response.status === 200) {
        window.alert("Review Added Successfully");
   
      }
      else{
        window.alert("Please Fill All Information");

      }
    });
  }
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sx={{ background: cyan[700] }}>
                <Typography
                  sx={{ padding: 2 }}
                  component="h3"
                  variant="h4"
                  color="white"
                >
                  إياد جابر
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {/*  */}
                <Card sx={{ padding: 3 }}>
                  <Typography
                    sx={{ padding: 2 }}
                    component="h3"
                    variant="h4"
                    color="red"
                  >
                    اختر رمز المساق
                  </Typography>

                  <Box sx={{ minWidth: 120, padding: 1 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-autowidth-label">
                        المساق
                      </InputLabel>

                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={courses}
                        label="Department"
                        // onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>--اختر المساق--</em>
                        </MenuItem>
                        {courses.map((course) => (
                          <MenuItem value={course.value}>{course.label}</MenuItem>

                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </Card>
                <Divider sx={{ paddingBottom: 3 }} />

                <Card sx={{ padding: 3 }}>
                  <Typography
                    sx={{ padding: 2 }}
                    component="h3"
                    variant="h4"
                    color="red"
                  >
                    تقييم المدرس
                  </Typography>
                  <Rating
                    sx={{ justifyContent: "flex-end" }}
                    size="large"
                    name="hover-feedback"
                    value1={value1}
                    getrateLabelText={getrateLabelText}
                    onChange={(event, newValue1) => {
                      setValue1(newValue1);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                  {value1 !== null && (
                    <Box sx={{ ml: 2 }}>
                      {label1[hover !== -1 ? hover : value1]}
                    </Box>
                  )}
                </Card>
                <Divider sx={{ paddingBottom: 3 }} />

                <Card sx={{ padding: 3 }}>
                  <Typography
                    sx={{ padding: 2 }}
                    component="h3"
                    variant="h4"
                    color="red"
                  >
                    هل تدرس مع هذا المدرس مرة أخرى ؟
                  </Typography>
                  {/* <ControlledRadioButtonsGroup /> */}
                  <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={valuer}
        onChange={handleChange1}
      >
        <FormControlLabel value="نعم" control={<Radio />} label="نعم" />
        <FormControlLabel value="لا" control={<Radio />} label="لا" />
      </RadioGroup>
    </FormControl>
                </Card>
                <Divider sx={{ paddingBottom: 3 }} />

                <Card sx={{ padding: 3 }}>
                  <Typography
                    sx={{ padding: 2 }}
                    component="h3"
                    variant="h4"
                    color="red"
                  >
                    هل الحضور مهم عند المدرس ؟
                  </Typography>
                  <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={valuer2}
        onChange={handleChange12}
      >
        <FormControlLabel value="نعم" control={<Radio />} label="نعم" />
        <FormControlLabel value="لا" control={<Radio />} label="لا" />
      </RadioGroup>
    </FormControl>
                </Card>
                <Divider sx={{ paddingBottom: 3 }} />

                <Card sx={{ padding: 3 }}>
                  <Typography
                    sx={{ padding: 2 }}
                    component="h3"
                    variant="h4"
                    color="red"
                  >
                    مستوى الصعوبة
                  </Typography>
                  <Rating
                    size="large"
                    name="hover-feedback"
                    value2={value2}
                    getdifficultyLabelText={getdifficultyLabelText}
                    onChange={(event, newValue2) => {
                      setValue2(newValue2);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                  {value1 !== null && (
                    <Box sx={{ ml: 2 }}>
                      {label2[hover !== -1 ? hover : value1]}
                    </Box>
                  )}
                </Card>
                <Divider sx={{ paddingBottom: 3 }} />

                <Card sx={{ padding: 3 }}>
                  <Typography
                    sx={{ padding: 2 }}
                    component="h3"
                    variant="h4"
                    color="red"
                  >

                    ادخل تعليقًا{" "}
                  </Typography>
                  <Box
                    sx={{
                      maxWidth: "100%",
                    }}
                  >
                    <TextField
                      fullWidth
                      id="filled-required"
                      variant="filled"
                      value={opinion}
                      onChange={(event) => setopinion(event.target.value)}
                    />
                  </Box>
                </Card>
                <Divider sx={{ paddingBottom: 3 }} />

                <Grid xs={12}>
                  <Button fullWidth variant="contained" onClick={submitReview}>
                    <h3>أرسل</h3>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

function BasicSelect(props) {
  const [department, setDepartment] = React.useState("");
  // const handleChange = (event) => {
  //   setcourses(event.target.value);
  // };

  return (
    <Box sx={{ minWidth: 120, padding: 1 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-autowidth-label">المساق</InputLabel>

        {/* <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.courses}
          label="Department"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>--اختر المساق--</em>
          </MenuItem>
          {props.courses.map((course) => (
            <MenuItem value={10}>{course.value}</MenuItem>
          ))}
          {/* <MenuItem value={10}>بنية المعلومات</MenuItem>
          <MenuItem value={21}>أنظمة التشغيل</MenuItem>
          <MenuItem value={22}>قواعد البيانات</MenuItem> */}
        {/* </Select> */} 
      </FormControl>
    </Box>
  );
}

function ControlledRadioButtonsGroup() {
  const [valuer2, setValuer2] = React.useState("");

  const handleChange12 = (event) => {
    setValuer2(event.target.value);
  };

  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={valuer2}
        onChange={handleChange12}
      >
        <FormControlLabel value="نعم" control={<Radio />} label="نعم" />
        <FormControlLabel value="لا" control={<Radio />} label="لا" />
      </RadioGroup>
    </FormControl>
  );
}
