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
import { MDBContainer, MDBRating } from 'mdbreact';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Rating, { IconContainerProps } from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const mdTheme = createTheme();

const label1 = {
  1: 'سيء جداً',
  2: 'سيء',
  3: 'جيد',
  4: 'جيد جداً',
  5: 'رائع',
};
const label2 = {
  1: 'سهل جداً',
  2: 'سهل',
  3: 'متوسط',
  4: 'صعب',
  5: 'صعب جداً',
};
function getrateLabelText(value1) {
  return `${value1} Star${value1 !== 1 ? 's' : ''}, ${label1[value1]}`;
}

function getdifficultyLabelText(value1) {
  return `${value1} Star${value1 !== 1 ? 's' : ''}, ${label2[value1]}`;
}

export default function RatingForm() {

  const [value, setValue] = React.useState("");
  const [value1, setValue1] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

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
                  <BasicSelect />
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
                  
                    sx={{ justifyContent: 'flex-end' }}
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
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                  />
                  {value1 !== null && (
                    <Box sx={{ ml: 2 }}>{label1[hover !== -1 ? hover : value1]}</Box>
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
                  <ControlledRadioButtonsGroup />
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
                  <ControlledRadioButtonsGroup />
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
                    value1={value1}
                    getdifficultyLabelText={getdifficultyLabelText}
                    onChange={(event, newValue1) => {
                      setValue1(newValue1);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                  />
                  {value1 !== null && (
                    <Box sx={{ ml: 2 }}>{label2[hover !== -1 ? hover : value1]}</Box>
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
                    />
                  </Box>
                </Card>
                <Divider sx={{ paddingBottom: 3 }} />

                <Grid xs={12}>
                  <Button fullWidth variant="contained">
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

function BasicSelect() {
  const [department, setDepartment] = React.useState("");
  const handleChange = (event) => {
    setDepartment(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, padding: 1 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-autowidth-label">المساق</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={department}
          label="Department"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>--اختر المساق--</em>
          </MenuItem>
          <MenuItem value={10}>بنية المعلومات</MenuItem>
          <MenuItem value={21}>أنظمة التشغيل</MenuItem>
          <MenuItem value={22}>قواعد البيانات</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

function ControlledRadioButtonsGroup() {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="نعم" control={<Radio />} label="نعم" />
        <FormControlLabel value="لا" control={<Radio />} label="لا" />
      </RadioGroup>
    </FormControl>
  );
}
