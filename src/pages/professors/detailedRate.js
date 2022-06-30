import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Divider, Rating } from "@mui/material";
import { useParams } from "react-router-dom";
import { cyan } from "@mui/material/colors";
import App from "../../components/Navbar/navbar";
import ProgressBar from "react-bootstrap/ProgressBar";
import axios from "axios";
import { useEffect, useState } from "react";
// import { urlshortener_v1 } from "googleapis";

const mdTheme = createTheme();

const dificulty = [
  { v: 15, d: "سهل جداً" },
  { v: 5, d: "سهل" },
  { v: 7, d: "متوسط" },
  { v: 1, d: "صعب" },
  { v: 1, d: "صعب جداً" },
];

function DashboardContent() {
  const { profID } = useParams();

  const [profName, setProfName] = useState("");
  const [openions, setOpenions] = useState([]);

  const [diff1, setdiff1] = useState("");
  const [diff2, setdiff2] = useState("");
  const [diff3, setdiff3] = useState("");
  const [diff4, setdiff4] = useState("");
  const [diff5, setdiff5] = useState("");

  const [attendencePercent, setattendencePercent] = useState("");
  const [studyagainPercent, setstudyagainPercent] = useState("");

  const [notstudyagainPercent, setnotstudyagainPercent] = useState("");
  const [notAttendencePercent, setnotAttendencePercent] = useState("");

  useEffect(() => {
    const url = "http://localhost:5000/profs/" + profID + "/getReviewSummary";
    console.log(url);
    axios.get(url).then((response) => {
      console.log(response.data);
      setProfName(response.data.name);
      setattendencePercent(response.data.attendencePercent);
      setstudyagainPercent(response.data.studyagainPercent);
      setnotstudyagainPercent(response.data.notstudyagainPercent);
      setnotAttendencePercent(response.data.notAttendencePercent);
      setdiff1(response.data.diff1);
      setdiff2(response.data.diff2);
      setdiff3(response.data.diff3);
      setdiff4(response.data.diff4);
      setdiff5(response.data.diff5);
      setOpenions(response.data.opinions);
    });
  }, []);

  return (
    <ThemeProvider theme={mdTheme}>
      <App />
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
                  {profName}
                </Typography>
              </Grid>
              <Grid item xs={12} md={8} lg={8}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 300,
                  }}
                >
                  <Box>
                    <Typography component="h3" variant="h4" color={cyan[700]}>
                      مستوى الصعوبة
                    </Typography>
                    <Divider />

                    {/* const dificulty = [
  { v: 15, d: "سهل جداً" },
  { v: 5, d: "سهل" },
  { v: 7, d: "متوسط" },
  { v: 1, d: "صعب" },
  { v: 1, d: "صعب جداً" },
]; */}

                    <Box sx={{ mt: 2.5 }}>
                      {/* {dificulty.map((i) => ( */}
                      <>
                        <Typography>سهل جدًا</Typography>
                        <ProgressBar
                          striped
                          variant="info"
                          now={diff1}
                          label={diff1}
                        />

                        <Typography>سهل </Typography>
                        <ProgressBar
                          striped
                          variant="info"
                          now={diff2}
                          label={diff2}
                        />

                        <Typography>متوسط</Typography>
                        <ProgressBar
                          striped
                          variant="info"
                          now={diff3}
                          label={diff3}
                        />

                        <Typography>صعب</Typography>
                        <ProgressBar
                          striped
                          variant="info"
                          now={diff4}
                          label={diff4}
                        />
                        <Typography>صعب جدًا</Typography>
                        <ProgressBar
                          striped
                          variant="info"
                          now={diff5}
                          label={diff5}
                        />
                      </>
                      {/* ))} */}
                    </Box>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 150,
                  }}
                >
                  <Typography component="h4" variant="h5" color={cyan[700]}>
                    هل الحضور مهم عند المدرس ؟
                  </Typography>
                  <Typography
                    component="h4"
                    variant="h5"
                    color="text.secondary"
                  >
                    نعم : {attendencePercent}%
                  </Typography>
                  <Typography
                    component="h4"
                    variant="h5"
                    color="text.secondary"
                  >
                    لا : {notAttendencePercent}%
                  </Typography>
                </Paper>
                <Divider />
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 150,
                  }}
                >
                  <Typography component="h4" variant="h5" color={cyan[700]}>
                    هل تدرس مرة أخرى مع هذا المدرس ؟
                  </Typography>
                  <Container>
                    <Typography
                      component="h5"
                      variant="h6"
                      color="text.secondary"
                    >
                      نعم : {studyagainPercent}%
                    </Typography>
                    {/*                                     <ProgressBar striped variant="info" now={60} label ={60} />
                     */}{" "}
                  </Container>
                  <Typography
                    component="h4"
                    variant="h5"
                    color="text.secondary"
                  >
                    لا : {notstudyagainPercent}%
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{ padding: 2 }}
                  component="h3"
                  variant="h4"
                  color="red"
                >
                  آراء الطلبة
                </Typography>
                {openions
                  .map((_, i) => (
                    <div>
                      <Paper
                        sx={{
                          paddingTop: 2,
                          p: 2,
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          key={i}
                          component="h5"
                          variant="h6"
                          color="text.secondary"
                        >
                          {_}
                        </Typography>
                      </Paper>
                      <Divider />
                    </div>
                  ))}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
