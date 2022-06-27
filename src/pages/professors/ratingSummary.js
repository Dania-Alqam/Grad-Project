import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { cyan } from "@mui/material/colors";
import Rating from "@mui/material/Rating";
import App from "../../components/Navbar/navbar";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function RatingSummary() {
  //   const tiers = [
  //     {
  //       title: "التقييم الكلي",
  //       rate: "4.9",
  //       numberofrating: 27,
  //       content: "إياد جابر",
  //       buttonText: "قيّم المدرس",
  //       buttonVariant: "contained",
  //       href: "rateprof",
  //     },

  //     {
  //       title: "تقييم المدرس",
  //       content: [
  //         { avg: { stars1 }, Arexp: "رائع" },
  //         { avg: { stars2 }, Arexp: "جيد جداً" },
  //         { avg: { stars3 }, Arexp: "جيد" },
  //         { avg: { stars4 }, Arexp: "سيء" },
  //         { avg: { stars5 }, Arexp: "سيء جداً" },
  //       ],
  //       buttonText: "المزيد من التفاصيل",
  //       buttonVariant: "outlined",
  //       href: "detailedRate",
  //     },
  //   ];

  const { profID } = useParams();

  const [profName, setProfName] = useState("");
  const [avg, setavg] = useState("");
  const [stars1, setstars1] = useState("");
  const [stars2, setstars2] = useState("");
  const [stars3, setstars3] = useState("");
  const [stars4, setstars4] = useState("");
  const [stars5, setstars5] = useState("");
  const [count, setCount] = useState("");

  useEffect(() => {
    // const { profID } = useParams();
    const url = "http://localhost:5000/profs/" + profID + "/getReview";
    axios.get(url).then((response) => {
      setProfName(response.data.name);
      setavg(response.data.avg);
      setstars1(response.data.stars1);
      setstars2(response.data.stars2);
      setstars3(response.data.stars3);
      setstars4(response.data.stars4);
      setstars5(response.data.stars5);
      console.log(response.data);
      console.log(stars3);
      console.log(stars1);

      console.log(avg);
      setCount(response.data.count);
    });
  }, []);

  const [value, setValue] = React.useState(2);
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <App />
      <CssBaseline />
      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color={cyan[700]}
          gutterBottom
          sx={{
            fontFamily: "Roboto",
          }}
        >
          تقييم مختصر
        </Typography>

        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
          sx={{ fontFamily: "Roboto" }}
        >
          قم بالضغط على زر المزيد من التفاصيل لعرض المزيد من المعلومات حول تقييم
          المدرس
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="xl" component="main">
        <Grid
          container
          spacing={5}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {/* {tiers.map((tier) => ( */}
          <Grid
            item
            key="التقييم الكلي"
            xs={12}
            sm={ 6}
            md={4}
          >
            <Card>
              <CardHeader
                title="التقييم الكلي"
                titleTypographyProps={{ align: "center" }}
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[200]
                      : theme.palette.grey[700],
                }}
              />
              <CardContent>
                {avg === null ? (
                  <Box sx={{ mb: 2.5 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "baseline",
                      }}
                    >
                      <Typography variant="h6" color="text.secondary">
                        5/
                      </Typography>
                      <Typography component="h1" variant="h3" color="Red">
                        {avg}
                      </Typography>
                    </Box>
                    <Typography component="h9" color="text.secondary">
                      اعتماداً على {count} تقييماً
                    </Typography>
                  </Box>
                ) : (
                  <ul></ul>
                )}
                {"التقييم الكلي" === "ممالتقييم الكلي" ? (
                  <Box>
                    <ul>
                      <Typography component="h1" variant="name1" align="center">
                        {profName}
                      </Typography>
                    </ul>
                  </Box>
                ) : (
                  <Box>
                    {/* {tier.content.map((i) => ( */}
                    <>
                      <Typography>رائع </Typography>
                      <ProgressBar striped variant="info" now={stars5} label={stars5} />
                      <Typography>جيد جدًا</Typography>
                      <ProgressBar striped variant="info" now={stars4} label={stars4} />

                      <Typography>جيد</Typography>
                      <ProgressBar striped variant="info" now={stars3} label={stars3} />

                      <Typography>سيئ</Typography>
                      <ProgressBar striped variant="info" now={stars2} label={stars2} />

                      <Typography>سيئ جدًا</Typography>
                      <ProgressBar striped variant="info" now={stars1} label={stars1} />
                    </>

                    {/* ))} */}
                  </Box>
                )}
              </CardContent>
              <CardActions>
                <Button href="rateprof" fullWidth variant="contained">
                  قيّم المدرس
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* ))} */}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
