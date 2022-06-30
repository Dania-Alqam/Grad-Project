import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import EmailIcon from "@mui/icons-material/Email";
import Rating from "@mui/material/Rating";
import App from "../../components/Navbar/navbar";
import { useParams } from "react-router-dom";

import { Component } from "react";
import axios from "axios";

const theme = createTheme();

export default function Album() {
  const [department, setDepartment] = React.useState("");

  const handleChange = (event) => {
    setDepartment(event.target.value);
  };

  const [depName, setdep] = useState([]);

  const [professors, setprofessors] = useState([]);
  const [professors1, setprofessors1] = useState([]);

  const [selectedDepValue, setSelectedDepValue] = useState("");

  const handleDepSelect = (event) => {
    if (event.target.value === "دائرة علم الحاسوب")
      setprofessors1(
        professors.filter((prof) => prof.depName === "دائرة علم الحاسوب")
      );
    else
      setprofessors1(
        professors.filter((prof) => prof.depName === event.target.value)
      );
    setSelectedDepValue(event.target.value);
    console.log(professors1);
    console.log(event.target.value);

    // console.log(event.target.value)
  };

  useEffect(() => {
    axios.get("http://localhost:5000/department", {}).then((response) => {
      const dep = response.data.map((T) => ({
        value: T.depName,
        label: T.depName,
        color: "#5243AA",
      }));
      setdep(dep);
    });
  }, []);

  useEffect(() => {
    // const { profID } = useParams();
    const url = "http://localhost:5000/getProf";
    axios.get(url).then((response) => {
      setprofessors(response.data);
      setprofessors1(response.data);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <App />
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm" style={{ paddingTop: "0" }}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              دوائر الكليات
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              // spacing={2}
              justifyContent="center"
            >
              {/* <Button variant="outlined">الأعلى تقييماً</Button> */}

              <Box sx={{ minWidth: 120, padding: 1 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-autowidth-label">
                    الدائرة
                  </InputLabel>

                  <Select
                    // value={this.state.value}
                    //  closeMenuOnSelect={true}
                    onChange={handleDepSelect}
                  >
                    {depName.map((dep) => (
                      <MenuItem value={dep.value}>{dep.label}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              {/* <BasicSelect /> */}
            </Stack>
          </Container>
        </Box>

        <Container sx={{ py: 5 }} maxWidth="md" style={{ paddingTop: "0" }}>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {professors1.map((rs, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      pt: "50%",
                    }}
                    src={"http://localhost:5000/imgs/" + rs.profImage}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "http://localhost:5000/imgs/default.jpg";
                    }}
                    alt="prof image"
                    style={{ height: "200px", paddingTop: "0" }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {rs.profName}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {rs.contactInfo} <EmailIcon />
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      المكتب : {rs.officeID}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      التقييم:{" "}
                      <Rating
                        name="size-small"
                        defaultValue={3.8}
                        size="small"
                        readOnly
                      />
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href={rs.profID + "/ratingSummary"} size="small">
                      عرض التقييم
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
